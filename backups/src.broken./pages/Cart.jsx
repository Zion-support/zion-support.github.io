import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(true);
  const [showEmpty, setShowEmpty] = useState(false);

  useEffect(() => {
    // Load cart items from localStorage or API
    const loadCartItems = async () => {
      try {
        setCartLoading(true);
        // Simulate loading cart items
        setTimeout(() => {
          setItems([]);
          setCartLoading(false);
        }, 1000);
      } catch (error) {
        // // console.error('Error loading cart items:', error);
        setCartLoading(false);
      }
    };

    loadCartItems();
  }, []);

  const removeItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems(items.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartLoading) {
    return (
      <>
        <SEO title="Shopping Cart - Zion Tech Group" description="View and manage your shopping cart items." />
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <SEO title="Shopping Cart - Zion Tech Group" description="View and manage your shopping cart items." />
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
              <p className="text-gray-300 mb-8">Add some items to get started!</p>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO title="Shopping Cart - Zion Tech Group" description="View and manage your shopping cart items." />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📦</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                        <p className="text-gray-300">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-slate-700 text-white rounded hover:bg-slate-600"
                        >
                          -
                        </button>
                        <span className="text-white px-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-slate-700 text-white rounded hover:bg-slate-600"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${(calculateTotal() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                </div>
                <div className="border-t border-gray-600 pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span>${(calculateTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}