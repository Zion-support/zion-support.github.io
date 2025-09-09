import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/hooks/useAuth';
import { SEO } from '@/components/SEO';

const CartPage = () => {
  const navigate = useNavigate();
  const { items, dispatch } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(true);
  const [showEmpty, setShowEmpty] = useState(false);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Simulate loading cart data
    const timer = setTimeout(() => {
      setCartLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!cartLoading && items.length === 0) {
      setShowEmpty(true);
    }
  }, [cartLoading, items]);

  const updateQuantity = (id, qty) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: qty } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const applyCode = async () => {
    try {
      // Simulate API call
      setDiscount(10); // 10% discount for demo
    } catch (e) {
      setDiscount(0);
    }
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
  const total = subtotal - discount;

  if (cartLoading) {
    return (
      <div className="container py-10 space-y-4">
        <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-32 w-full bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  if (showEmpty) {
    return (
      <div className="container py-10 text-center">
        <div className="mx-auto mb-4 w-48 h-36 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-gray-500 text-4xl">🛒</span>
        </div>
        <p className="text-gray-600 mb-4">Your cart is empty</p>
        <Link
          to="/marketplace"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-24">
      <SEO 
        title="Shopping Cart - Zion Tech Group" 
        description="Review your selected services and proceed to checkout on Zion Tech Group's marketplace." 
        keywords="cart, shopping, checkout, services" 
        canonical="https://ziontechgroup.com/cart"
      />
      
      <div className="container max-w-2xl py-10">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">${(item.price || 0).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity || 1}
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

        <div className="flex justify-between mt-6 font-semibold">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between mt-2 text-green-600">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between mt-2 text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Button 
          className="mt-4 w-full" 
          onClick={() => user ? navigate('/checkout') : navigate('/login?next=/checkout')}
        >
          {user ? 'Checkout' : 'Login to Checkout'}
        </Button>
      </div>
    </div>
  );
};

export default CartPage;