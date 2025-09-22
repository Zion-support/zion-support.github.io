<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
<<<<<<< HEAD
import { Textarea } from '@/components/ui/textarea',;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx
try {
      on_submit ({ email, address });
    } finally {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx
import {;
=======
import { Textarea } from '@/components/ui/textarea',;import {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle} from '@/components/ui/dialog',;
import { User, Mail, MapPin, CreditCard } from 'lucide-react';
<<<<<<< HEAD
import { isProdDomain } from '@/utils/getStripe',;
interface GuestCheckoutModalProps {;
  open: boolean,;
  onOpenChange: (open: boolean) => void,;
  onSubmit: (details: { email: string, address: string }) => void;
}
;
export default function GuestCheckoutModal({;
  open,;
  onOpenChange,;
  onSubmit}: GuestCheckoutModalProps) {;
  const [email, setEmail] = useState(''),;
  const [address, setAddress] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || !address) {;
      alert('Please fill in all required fields'),;
      return;
    }
;
=======
import { isProdDomain } from '@/utils/getStripe';

interface GuestCheckoutModalProps {;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
} from '@/components/ui/dialog'
import { User, Mail, MapPin, CreditCard } from 'lucide-react'
import { isProdDomain } from '@/utils/getStripe';
interface GuestCheckoutModalProps {
<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (details: { email: string; address: string }) => void;
export default function GuestCheckoutModal(): any ({;
  open,;
  onOpenChange,;
  onSubmit,;
}: GuestCheckoutModalProps) {;
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!email || !address) {;
      alert('Please fill in all required fields');
      return;
    }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    setIsSubmitting(true);
    try {;
      onSubmit({ email, address });
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

    }
  }


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx
    }
  },

<<<<<<< HEAD
=======


  const handleSubmit = null;
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
<<<<<<< HEAD
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-cyan/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-2">
            <User className="h-5 w-5 text-zion-cyan" />
            Guest Checkout
          </DialogTitle>
          <DialogDescription className="text-zion-slate-light">
            Enter your details to complete your purchase as a guest.
          </DialogDescription>
        </DialogHeader>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {!isProdDomain() && (
          <div className="rounded-md bg-amber-500/20 p-2 text-center text-amber-400">
            Pay with test data – use card 4242 4242 4242 4242 and any future date.
          </div>
<<<<<<< HEAD
        )}
<<<<<<< HEAD
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx

=======

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-cyan/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-2">
            <User className="h-5 w-5 text-zion-cyan" />
            Guest Checkout
          </DialogTitle>
          <DialogDescription className="text-zion-slate-light">
            Enter your details to complete your purchase as a guest.
          </DialogDescription>
        </DialogHeader>
        {!isProdDomain() && (
          <div className="rounded-md bg-amber-500/20 p-2 text-center text-amber-400">
            Pay with test data – use card 4242 4242 4242 4242 and any future date.
          </div>
        )}

    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className='bg-zion-blue border-zion-cyan/20 max-w-md'>;
        <DialogHeader>;
          <DialogTitle className='text-white flex items-center gap-2'>;
            <User className='h-5 w-5 text-zion-cyan' />;
            Guest Checkout;
          </DialogTitle>;
          <DialogDescription className='text-zion-slate-light'>;
            Enter your details to complete your purchase as a guest.;
          </DialogDescription>;
        </DialogHeader>;
        {!isProdDomain() && (;
          <div className='rounded-md bg-amber-500/20 p-2 text-center text-amber-400'>;
            Pay with test data – use card 4242 4242 4242 4242 and any future;
            date.;
          </div>;
        )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
        <form onSubmit={handleSubmit} className='space-y-4'>;
          <div className='space-y-2'>;
            <Label
<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx
              htmlFor='guest-email'
=======
        )}              htmlFor='guest-email'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              htmlFor='guest-email''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
              className='text-white flex items-center gap-2'>;
              <Mail className='h-4 w-4 text-zion-cyan' />;
              Email Address;
            </Label>;
            <Input id='guest-email''
              type='email''
              value={email || ''}'
              onChange={e = /> setEmail(e && e.target.value || '')}'
            <Input
              id='guest-email'
              type='email'
<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
              value={email || ''}
              onChange={(e) => setEmail(e.target.value || '')}
              placeholder="your.email@example.com"
              required
              className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light"
            />
          </div>

<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD
=======
=======
          <div className="space-y-2">
            <Label htmlFor="guest-address" className="text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              Shipping Address
            </Label>
            />
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
            <p className="text-yellow-400 text-sm">
              💡 Creating an account allows you to track your order and checkout faster next time.
            </p>
          </div>

          <DialogFooter className="space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !email || !address}
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue"
            >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx

              value={email || ''}
              onChange={e => setEmail(e && e.target.value || '')}
              placeholder='your && your.email@example && example.com'              required;
              className='bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light';
            />;
          </div>;
<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
          <div className='space-y-2'>;
            <Label
              htmlFor='guest-address''
              className='text-white flex items-center gap-2'>;
              <MapPin className='h-4 w-4 text-zion-cyan' />;
              Shipping Address;
            </Label>;
            <Textarea
              id='guest-address''
              value={address || ''}'
              onChange={e => setAddress(e && e.target.value || '')}'
              placeholder='Enter your full shipping address...'              required;
              className='bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light min-h-[80px]';,
            />;
          </div>;
          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3'>;
            <p className='text-yellow-400 text-sm'>;
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
            <Input ;
              id='guest - email';
              type='email';
              value={email || ''}'
              on_change={e = /> set_email (e.target.value || '')}'
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
              value={address || ''}'
              on_change={e => set_address (e.target.value || '')}'
              placeholder='Enter your full shipping address...'              required;
              className='bg - zion - blue - light border - zion - cyan / 30 text - white placeholder:text - zion - slate - light min - h-[80px]';,
            />;
          </div>;
          <div className='bg - yellow - 500 / 10 border border - yellow - 500 / 30 rounded - lg p - 3'>;
            <p className='text - yellow - 400 text - sm'>;
              💡 Creating an account allows you to track your order and checkout;
              faster next time.;
            </p>;
          </div>;
        <form onSubmit={handleSubmit} className="space-y-4">"
          <div className="space-y-2">"
            <Label htmlFor="guest-email" className="text-white flex items-center gap-2">"
              <Mail className="h-4 w-4 text-zion-cyan" />"
              Email Address
            </Label>
            <Input {isSubmitting ? (
                'Processing...''
              ) : (
                < />
                  <CreditCard className='h-4 w-4 mr-2' />'
                  Continue to Payment
                </>
              )}
              disabled={isSubmitting || !email || !address}
              className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'>;
              {isSubmitting ? (;
                'Processing...';
              ) : (;
                <>;
                  <CreditCard className='h-4 w-4 mr-2' />;
                  Continue to Payment;
                </>;
              )}
};
};
          <DialogFooter className='space - x-2'>;
            <Button;
              type='button';
              variant='outline';
              on_click={() => onOpenChange (false)}
              className='border - zion - cyan / 30 text - zion - slate - light hover:bg - zion - cyan / 10'            >;',
              Cancel;
            </Button>;
            <Button;
              type='submit';
              disabled={is_submitting || !email || !address}
              className='bg - zion - cyan hover:bg - zion - cyan / 90 text - zion - blue'            >;
              {is_submitting ? (
                'Processing...') : ('
                <>;
                  <CreditCard className='h - 4 w - 4 mr - 2' />;
                  Continue to Payment;
                </>)}
  },

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-cyan/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-2">
            <User className="h-5 w-5 text-zion-cyan" />
            Guest Checkout
          </DialogTitle>
          <DialogDescription className="text-zion-slate-light">
            Enter your details to complete your purchase as a guest.
          </DialogDescription>
        </DialogHeader>

<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        {!isProdDomain() && (
          <div className="rounded-md bg-amber-500/20 p-2 text-center text-amber-400">
            Pay with test data – use card 4242 4242 4242 4242 and any future date.
          </div>
        )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx

        <form onSubmit={handleSubmit} className="space-y-4">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div className="space-y-2">
            <Label htmlFor="guest-address" className="text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              Shipping Address
            </Label>
<<<<<<< HEAD
            <Input
<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
              id="guest-email"
              type="email"
              value={email || ''}
              onChange={(e) => setEmail(e.target.value || '')}
              placeholder="your.email@example.com"
              required
              className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guest-address" className="text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              Shipping Address
            </Label>
            <Textarea
              id="guest-address"
              value={address || ''}
              onChange={(e) => setAddress(e.target.value || '')}
              placeholder="Enter your full shipping address..."
              required
              className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light min-h-[80px]"
            />
          </div>

<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
            <p className="text-yellow-400 text-sm">
              💡 Creating an account allows you to track your order and checkout faster next time.
            </p>
          </div>

          <DialogFooter className="space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !email || !address}
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue"
            >
<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
=======
=======
            />
          </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
            <p className="text-yellow-400 text-sm">
              💡 Creating an account allows you to track your order and checkout faster next time.
            </p>
          </div>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
              {isSubmitting ? (
=======
          <DialogFooter className="space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !email || !address}
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue"
            >              {isSubmitting ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                'Processing...'
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Continue to Payment
                </>
              )}
<<<<<<< HEAD:src_backup/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            </Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>;
  );
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

              disabled={isSubmitting || !email || !address}
              className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'>;
              {isSubmitting ? (;
                'Processing...';
              ) : (;
                <>;
                  <CreditCard className='h-4 w-4 mr-2' />;
                  Continue to Payment;
                </>;
              )}

<<<<<<< HEAD
}
};            </Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>;
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
};
};

=======


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

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/cart/GuestCheckoutModal.tsx
            </Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>;
  );
}
;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
}
    </Dialog>);
}
}
;
    </Dialog>;
  );
}
;
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
<<<<<<< HEAD:src/components/cart/GuestCheckoutModal.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/cart/GuestCheckoutModal.tsx
