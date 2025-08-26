import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { getStripe } from '@/utils/getStripe';
import { apiClient } from '@/utils/apiClient';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = useState<CartItem[]>([]);
  const form = useForm<CheckoutForm>({
    defaultValues: { name: '', email: '', address: '', city: '', country: '' },
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        setItems([]);
      }
    }
    if (productParam) {
      setItems([
        { id: productParam, name: 'Test Item', price: 25, quantity: 1 },
      ]);
    } else {
      // Provide mock data if cart empty
      setItems([
        {
          id: 'prod_mock',
          name: 'Test Item',
          price: 25,
          quantity: 1,
        },
      ]);
    }
  }, [location.search]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const onSubmit = async (data: CheckoutForm) => {
    try {
      const response = await fetch('/api/stripe/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: subtotal }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed');
      const stripe = await getStripe();
      if (stripe && result.clientSecret) {
        const payment = await stripe.confirmCardPayment(result.clientSecret, {
          payment_method: {
            card: { token: 'tok_visa' },
            billing_details: { name: data.name, email: data.email },
          },
        });
        if (payment.error) throw payment.error;
        if (user?.id) {
          try {
            await fetch('/api/points/add', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userId: user.id, amount: subtotal, orderId: result.id }),
            });
          } catch (e) {
            console.error('Failed to add points', e);
          }
        }
        safeStorage.removeItem('guestCart');
        navigate(`/orders/${result.id}`);
      }
    } catch (err) {
      console.error('Payment failed', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <CheckoutProgress currentStep={0} className="mb-6" />

      {/* Order Summary */}
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h2 className="font-semibold mb-3">Order Summary</h2>
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center py-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Shipping:</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
