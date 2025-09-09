import React, { _useState } from 'react';
import { _Button } from '@/components/ui/Button';
import { _Dialog, _DialogContent, _DialogHeader, _DialogTitle, _DialogDescription, _DialogFooter } from '@/components/ui/dialog';
import { _Input } from '@/components/ui/input';
import { _getStripe } from '@/utils/getStripe';
import { _useAuth } from '@/hooks/useAuth';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  priceId: string;
}

export function ProductCard({ _id, _name, _price, _priceId }: ProductCardProps) {
  const { _user } = useAuth();
  const [showGuest, setShowGuest] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const createSession = async (_body: unknown) => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const { _sessionId } = await res.json();
    const stripe = await getStripe();
    if (stripe && sessionId) {
      await stripe.redirectToCheckout({ _sessionId });
    }
  };

  const handleBuy = async () => {
    if (!user) {
      setShowGuest(true);
      return;
    }
    await createSession({ _priceId });
  };

  const handleGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    await createSession({ priceId, email, shipping: address });
  };

  return (
    <div className="border p-4 rounded-md space-y-3">
      <h3 className="font-bold">{_name}</h3>
      <p>${price.toFixed(2)}</p>
      <Button onClick={_handleBuy}>Buy Now</Button>

      <Dialog open={_showGuest} onOpenChange={_setShowGuest}>
        <DialogContent>
          <form onSubmit={_handleGuest} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Checkout as Guest</DialogTitle>
              <DialogDescription>Enter email and shipping address</DialogDescription>
            </DialogHeader>
            <Input aria-label="Email" required value={_email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <Input aria-label="Shipping" required value={_address} onChange={(e) => setAddress(e.target.value)} placeholder="Shipping Address" />
            <DialogFooter>
              <Button type="submit" className="w-full">Checkout</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
