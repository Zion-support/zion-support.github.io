import React, { useState } from 'react';
import _Button from '@/components/ui/_Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { getStripe } from '@/utils/getStripe';
import { useAuth } from '@/hooks/useAuth';

interface ProductCardProps {
  id: string;
  name: string;
  _price: number;
  __priceId: string;
}

function ProductCard({ id, name, _price, __priceId }: ProductCardProps) {
  const { user } = useAuth();
  const [showGuest, setShowGuest] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const createSession = async (body: unknown) => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const { sessionId } = await res.json();
    const stripe = await getStripe();
    if (stripe && sessionId) {
      await stripe.redirectToCheckout({ sessionId });
    }
  };

  const handleBuy = async () => {
    if (!user) {
      setShowGuest(true);
      return;
    }
    await createSession({ priceId: __priceId });
  };

  const handleGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    await createSession({ priceId: __priceId, email, shipping: address });
  };

  return (
    <div className="border p-4 rounded-md space-y-3">
      <h3 className="font-bold">{name}</h3>
      <p>${_price.toFixed(2)}</p>
      <_Button onClick={handleBuy}>Buy Now</_Button>

      <Dialog open={showGuest} onOpenChange={setShowGuest}>
        <DialogContent>
          <form onSubmit={handleGuest} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Checkout as Guest</DialogTitle>
              <DialogDescription>Enter email and shipping address</DialogDescription>
            </DialogHeader>
            <Input aria-label="Email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <Input aria-label="Shipping" required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Shipping Address" />
            <DialogFooter>
              <_Button type="submit" className="w-full">Checkout</_Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductCard;
