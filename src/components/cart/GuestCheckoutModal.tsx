import { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Textarea } from '@/components / ui / textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { User, Mail, MapPin, CreditCard } from 'lucide-react';
import { isProdDomain } from '@/utils / get_stripe';
interface GuestCheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  on_submit: (details: { email: string; address: string }) => void;
export default /**
 * GuestCheckoutModal - Function description
 */
function GuestCheckoutModal() {
  const [email, set_email] = useState ('');
  const [address, set_address] = useState ('');
  const [is_submitting, setIsSubmitting] = useState (false);
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    // Check condition
if ( {) {
  $2
}
      alert ('Please fill in all required fields');
      return;
    }
    setIsSubmitting (true);
    try {
      on_submit ({ email, address });
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className='bg - zion - blue border - zion - cyan / 20 max - w-md'>;
        <DialogHeader>;
          <DialogTitle className='text - white flex items - center gap - 2'>;
            <User className='h - 5 w - 5 text - zion - cyan' />;
            Guest Checkout;
          </DialogTitle>;
          <DialogDescription className='text - zion - slate - light'>;
            Enter your details to complete your purchase as a guest.;
          </DialogDescription>;
        </DialogHeader>;
        {!isProdDomain () && (
          <div className='rounded - md bg - amber - 500 / 20 p - 2 text - center text - amber - 400'>;
            Pay with test data – use card 4242 4242 4242 4242 and any future;
            date.;
          </div>)}
        <form on_submit={handle_submit} className='space - y-4'>;
          <div className='space - y-2'>;
            <Label;
              html_for='guest - email';
              className='text - white flex items - center gap - 2';
            >;
              <Mail className='h - 4 w - 4 text - zion - cyan' />;
              Email Address;
            </Label>;
            <Input;
              id='guest - email';
              type='email';
              value={email || ''}
              on_change={e => set_email (e.target.value || '')}
              placeholder='your.email@example.com'              required;
              className='bg - zion - blue - light border - zion - cyan / 30 text - white placeholder:text - zion - slate - light';
            />;
          </div>;
          <div className='space - y-2'>;
            <Label;
              html_for='guest - address';
              className='text - white flex items - center gap - 2';
            >;
              <MapPin className='h - 4 w - 4 text - zion - cyan' />;
              Shipping Address;
            </Label>;
            <Textarea;
              id='guest - address';
              value={address || ''}
              on_change={e => set_address (e.target.value || '')}
              placeholder='Enter your full shipping address...'              required;
              className='bg - zion - blue - light border - zion - cyan / 30 text - white placeholder:text - zion - slate - light min - h-[80px]';
            />;
          </div>;
          <div className='bg - yellow - 500 / 10 border border - yellow - 500 / 30 rounded - lg p - 3'>;
            <p className='text - yellow - 400 text - sm'>;
              💡 Creating an account allows you to track your order and checkout;
              faster next time.;
            </p>;
          </div>;
          <DialogFooter className='space - x-2'>;
            <Button;
              type='button';
              variant='outline';
              on_click={() => onOpenChange (false)}
              className='border - zion - cyan / 30 text - zion - slate - light hover:bg - zion - cyan / 10'            >;
              Cancel;
            </Button>;
            <Button;
              type='submit';
              disabled={is_submitting || !email || !address}
              className='bg - zion - cyan hover:bg - zion - cyan / 90 text - zion - blue'            >;
              {is_submitting ? (
                'Processing...') : (
                <>;
                  <CreditCard className='h - 4 w - 4 mr - 2' />;
                  Continue to Payment;
                </>)}
            </Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>);
}
}