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

export default function GuestCheckoutModal({
  open,
  onOpenChange,
  onSubmit,
}: GuestCheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      <DialogContent className='bg-zion-blue border-zion-cyan/20 max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-white flex items-center gap-2'>
            <User className='h-5 w-5 text-zion-cyan' />
            Guest Checkout
          </DialogTitle>
          <DialogDescription className='text-zion-slate-light'>
            Enter your details to complete your purchase as a guest.
          </DialogDescription>
        </DialogHeader>

        {!isProdDomain() && (
          <div className='rounded-md bg-amber-500/20 p-2 text-center text-amber-400'>
            Pay with test data – use card 4242 4242 4242 4242 and any future
            date.
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Label
              htmlFor='guest-email'
              className='text-white flex items-center gap-2'
            >
              <Mail className='h-4 w-4 text-zion-cyan' />
              Email Address
            </Label>
            <Input

              required
              className='bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light'
            />
          </div>

          <div className='space-y-2'>
            <Label
              htmlFor='guest-address'
              className='text-white flex items-center gap-2'
            >
              <MapPin className='h-4 w-4 text-zion-cyan' />
              Shipping Address
            </Label>
            <Textarea

              required
              className='bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light min-h-[80px]'
            />
          </div>

          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3'>
            <p className='text-yellow-400 text-sm'>
              💡 Creating an account allows you to track your order and checkout
              faster next time.
            </p>
          </div>

          <DialogFooter className='space-x-2'>
            <Button

            >
              Cancel
            </Button>
            <Button

            >
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  <CreditCard className='h-4 w-4 mr-2' />
                  Continue to Payment
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );