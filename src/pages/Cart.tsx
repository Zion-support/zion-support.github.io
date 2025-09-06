import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useAuth } from '@/hooks/useAuth';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartItemComponentProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
        ) : (
          <span className="text-gray-500">No Image</span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
        >
          -
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </Button>
      </div>
      <div className="text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(item.id)}
          className="text-red-600 hover:text-red-700"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

const CartPage: React.FC = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    // Load cart items from localStorage or API
    const savedItems = localStorage.getItem('cart');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, hydrated]);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + tax + shipping;

  if (!hydrated) {
    return null;
  }

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

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <CartItemComponent
            key={item.id}
            item={item}
            onRemove={removeItem}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </ul>
      
      <div className="mt-8 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="mt-4 w-full"
              onClick={() => isAuthenticated && router.push('/checkout')}
              disabled={!isAuthenticated}
            >
              Checkout
            </Button>
          </TooltipTrigger>
          {!isAuthenticated && (
            <TooltipContent>
              <p>Login to checkout</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CartPage;