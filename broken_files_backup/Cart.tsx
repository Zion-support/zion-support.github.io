<<<<<<< HEAD:src/pages/Cart.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

=======
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import apiClient from '@/services/apiClient';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Cart.tsx
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
<<<<<<< HEAD:src/pages/Cart.tsx

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
=======
export default function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    const load = async () => {
      if (user) {
        try {
          const res = await fetch('/api/cart');
          if (res.ok) {
            const data = await res.json();
            dispatch(setItemsAction(data.items || []));
            return;
          }
        } catch (err) {
          console.error('Failed to fetch cart', err);
        }
      }
      const stored = safeStorage.getItem('zion_cart');
      if (stored) {
        try {
          dispatch(setItemsAction(JSON.parse(stored) as CartItemType[]));
        } catch {
          dispatch(setItemsAction([]));
        }
      } else {
        dispatch(setItemsAction([]));
      }
    };
    load();
  }, [user, dispatch]);
  const updateQuantity = async (id: string, qty: number) => {
    dispatch(updateQuantityAction({ id, quantity: qty }));
    if (user) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Cart.tsx
      try {
        const parsed = JSON.parse(stored) as CartItem[];
        setItems(parsed);
      } catch {
        // ignore
      }
    }
<<<<<<< HEAD:src/pages/Cart.tsx
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

=======
  };
  const removeItem = (id: string) => {
    dispatch(removeItemAction(id));
  };
  const handleCheckout = () => {
    router.push('/checkout');
  };
  const applyCode = async () => {
    try {
      const res = await apiClient.post('/coupons/validate', {
        code,
        amount: subtotal,
      });
      setDiscount(res.data.discount || 0);
    } catch (e) {
      setDiscount(0);
    }
  };
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal - discount;
  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <img src="/placeholder.svg" alt="Empty cart" className="mx-auto mb-4" />
        <p>Your cart is empty</p>
        <Button asChild className="mt-4">
          <Link href="/marketplace">Browse Marketplace</Link>
        </Button>
      </div>
    );
  }
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Cart.tsx
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
