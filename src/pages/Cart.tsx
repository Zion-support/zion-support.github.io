import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context'; // Import useCart
import { CartItem } from '../../types/cart'; // Import CartItem type

export default function CartPage() {
  const navigate = useNavigate();
  const { cartState, dispatch } = useCart(); // Use CartContext
  const { items } = cartState; // Get items from cartState

  const updateQuantity = (id: string | number, qty: number) => {
    // Ensure quantity is at least 1, reducer also handles this but good for immediate UI feedback if needed
    const newQuantity = Math.max(1, qty); 
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  const removeItem = (id: string | number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
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
