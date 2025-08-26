import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/hooks/useAuth';
import { 
  setItemsAction, 
  updateQuantityAction, 
  removeItemAction 
} from '@/store/cartSlice';
import { apiClient } from '@/lib/api';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [cartLoading, setCartLoading] = useState(true);
  const [showEmpty, setShowEmpty] = useState(false);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const reduxItems = useSelector((state) => state.cart.items);
  const items = reduxItems || [];

  useEffect(() => {
    const load = async () => {
      if (user) {
        try {
          const res = await apiClient.get('/cart');
          if (res.data.items) {
            dispatch(setItemsAction(res.data.items));
          } else {
            dispatch(setItemsAction([]));
          }
        } catch (err) {
          console.error('Failed to load cart', err);
          dispatch(setItemsAction([]));
        }
      } else {
        dispatch(setItemsAction([]));
      }
      setCartLoading(false);
    };
    load();
  }, [user, dispatch]);

  useEffect(() => {
    if (!cartLoading && items.length === 0) {
      setShowEmpty(true);
    }
  }, [cartLoading, items]);

  const updateQuantity = async (id, qty) => {
    dispatch(updateQuantityAction({ id, quantity: qty }));
    if (user) {
      try {
        await fetch('/api/cart', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, quantity: qty }),
        });
      } catch (err) {
        console.error('Failed to update cart', err);
      }
    }
  };

  const removeItem = (id) => {
    dispatch(removeItemAction(id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
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
  const tax = subtotal * 0.1;
  const total = subtotal + tax - discount;

  if (cartLoading) {
    return (
      <div className="container py-10 space-y-4">
        <Skeleton className="h-8 w-1/3"/>
        <Skeleton className="h-32 w-full"/>
      </div>
    );
  }

  if (showEmpty) {
    return (
      <div className="container py-10 text-center">
        <img 
          loading="lazy" 
          src="/images/empty-cart.svg" 
          alt="Empty cart" 
          className="mx-auto mb-4 w-48 h-36"
        />
        <p>Your cart is empty</p>
        <Button asChild className="mt-4">
          <Link to="/marketplace">Browse Marketplace</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                min={1} 
                value={item.quantity} 
                onChange={e => updateQuantity(item.id, parseInt(e.target.value || '1', 10))} 
                className="w-16 bg-transparent border border-input rounded p-1 text-center"
              />
              <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-2">
        <input 
          type="text" 
          value={code} 
          onChange={e => setCode(e.target.value)} 
          placeholder="Apply Coupon / Gift Card" 
          className="flex-1 bg-transparent border border-input rounded p-2"
        />
        <Button variant="outline" onClick={applyCode}>
          Apply
        </Button>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <Button className="mt-6 w-full" onClick={handleCheckout}>
        {user ? 'Checkout' : 'Login to Checkout'}
      </Button>
    </div>
  );
}
