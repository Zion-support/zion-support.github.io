<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";
import type { RootState, AppDispatch } from "@/store";
import { removeItem as removeItemAction, updateQuantity as updateQuantityAction } from "@/store/cartSlice";
import { logErrorToProduction } from "@/utils/productionLogger";
import { CartItem as CartItemComponent } from "@/components/cart/CartItem";
import GuestCheckoutModal from "@/components/cart/GuestCheckoutModal";

export default function Cart() {
  const { user } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [showGuestModal, setShowGuestModal] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemAction(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
    } else {
      dispatch(updateQuantityAction({ id, quantity }));
    }
  };

  const handleCheckout = () => {
    if (user) {
      // Redirect to checkout page
      window.location.href = '/checkout';
    } else {
      setShowGuestModal(true);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some items to get started</p>
          <Button asChild>
            <Link href="/services">Browse Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onRemove={handleRemoveItem}
                    onUpdateQuantity={handleUpdateQuantity}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(calculateTotal() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${(calculateTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showGuestModal && (
        <GuestCheckoutModal
          onClose={() => setShowGuestModal(false)}
          onContinue={() => {
            setShowGuestModal(false);
            window.location.href = '/checkout';
          }}
        />
      )}
=======
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
import React from 'react';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      </div>
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
    </div>
  );
}