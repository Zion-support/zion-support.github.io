import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle} from '@/components/ui/dialog';
import { User, Mail, MapPin, CreditCard } from 'lucide-react'
import { isProdDomain } from '@/utils/getStripe';

interface GuestCheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (details: { email: string; address: string }) => void;
}

export default function GuestCheckoutModal({
  open,
  onOpenChange,
  onSubmit}: GuestCheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !address) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      onSubmit({ email, address });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=&quot;bg-zion-blue border-zion-cyan/20 max-w-md&quot;>
        <DialogHeader>
          <DialogTitle className=&quot;text-white flex items-center gap-2&quot;>
            <User className=&quot;h-5 w-5 text-zion-cyan&quot; />
            Guest Checkout
          </DialogTitle>
          <DialogDescription className=&quot;text-zion-slate-light&quot;>
            Enter your details to complete your purchase as a guest.
          </DialogDescription>
        </DialogHeader>

        {!isProdDomain() && (
          <div className=&quot;rounded-md bg-amber-500/20 p-2 text-center text-amber-400&quot;>
            Pay with test data – use card 4242 4242 4242 4242 and any future date.
          </div>
        )}

        <form onSubmit={handleSubmit} className=&quot;space-y-4&quot;>
          <div className=&quot;space-y-2&quot;>
            <Label htmlFor=&quot;guest-email&quot; className=&quot;text-white flex items-center gap-2&quot;>
              <Mail className=&quot;h-4 w-4 text-zion-cyan&quot; />
              Email Address
            </Label>
            <Input
              id=&quot;guest-email&quot;
              type=&quot;email&quot;
              value={email || ''}
              onChange={(e) => setEmail(e.target.value || '')}
              placeholder=&quot;your.email@example.com&quot;
              required
              className=&quot;bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light&quot;
            />
          </div>

          <div className=&quot;space-y-2&quot;>
            <Label htmlFor=&quot;guest-address&quot; className=&quot;text-white flex items-center gap-2&quot;>
              <MapPin className=&quot;h-4 w-4 text-zion-cyan&quot; />
              Shipping Address
            </Label>
            <Textarea
              id=&quot;guest-address&quot;
              value={address || ''}
              onChange={(e) => setAddress(e.target.value || '')}
              placeholder=&quot;Enter your full shipping address...&quot;
              required
              className=&quot;bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light min-h-[80px]&quot;
            />
          </div>

          <div className=&quot;bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3&quot;>
            <p className=&quot;text-yellow-400 text-sm&quot;>
              💡 Creating an account allows you to track your order and checkout faster next time.
            </p>
          </div>

          <DialogFooter className=&quot;space-x-2&quot;>
            <Button
              type=&quot;button&quot;
              variant=&quot;outline&quot;
              onClick={() => onOpenChange(false)}
              className=&quot;border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10&quot;
            >
              Cancel
            </Button>
            <Button
              type=&quot;submit&quot;
              disabled={isSubmitting || !email || !address}
              className=&quot;bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue&quot;
            >
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  <CreditCard className=&quot;h-4 w-4 mr-2&quot; />
                  Continue to Payment
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
