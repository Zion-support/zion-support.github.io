import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { safeStorage } from '@/utils/safeStorage';
import { getCartKey } from '@/utils/cartUtils';
import { getStripe } from '@/utils/getStripe';
import { apiClient } from '@/utils/apiClient';
export default function CheckoutPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [items, setItems] = useState([]);
    const form = useForm({
        defaultValues: { name: '', email: '', address: '', city: '', country: '' },
    });
    useEffect(() => {
        if (sku) {
            setItems([{ id: sku, name: sku, price: 25, quantity: 1 }]);
            return;
        }
        safeStorage.removeItem (getCartKey (user?.id) ) ;
        router (`/orders/${result.id}`) ;
      }
    } catch (err) {
      console.error ('Payment failed', err) ;
    }
  };
  return (<div className="max - w-2xl mx - auto p - 6">
      <h1 className="text - 2xl font - bold mb - 6">Checkout</h1>
      <CheckoutProgress currentStep={0} className="mb - 6"       />

      {/* Order Summary */}
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h2 className="font-semibold mb-3">Order Summary</h2>
        {items.map(item => (<div key={item.id} className="flex justify-between items-center py-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>))}
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
    </div>);
}
