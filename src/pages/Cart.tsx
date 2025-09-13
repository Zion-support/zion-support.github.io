import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { useCart } from '@/context/CartContext';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, dispatch } = useCart();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!items.length) {
      setLoading(true);
      fetch('/api/cart')
        .then(r => r.json())
        .then(data => dispatch({ type: 'SET_ITEMS', payload: data }))
        .finally(() => setLoading(false));
    }
  }, [items.length, dispatch]);

  const updateQuantity = (id: string, qty: number) => {
    const updated = items.map(i =>
      i.id === id ? { ...i, quantity: qty } : i
    );
    dispatch({ type: 'SET_ITEMS', payload: updated });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'SET_ITEMS', payload: items.filter(i => i.id !== id) });
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {items.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="font-semibold mb-4">Total: ${total.toFixed(2)}</div>
          <Link className="underline" to="/checkout">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
}
