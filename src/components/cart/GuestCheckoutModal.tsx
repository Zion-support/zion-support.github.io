<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
  open: boolean
  onOpenChange: (open: boolean) => void
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

  open: boolean
  onOpenChange: (open: boolean) => void
  open: boolean;
  onOpenChange: (open: boolean) => void;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  onSubmit: (details: { email: string; address: string }) => void
export default function GuestCheckoutModal({
  open
  onOpenChange
  onSubmit
}: GuestCheckoutModalProps) {
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email |!address) {
      alert('Please fill in all required fields')
      return;
    }
    setIsSubmitting(true)
    try {
<<<<<<< HEAD
      on_submit ({ email, address });
    } finally {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      onSubmit({ email, address })
    } finally {
      setIsSubmitting(false)
    }
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
import { Textarea } from '@/components/ui/textarea',;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
<<<<<<< HEAD
  DialogTitle,;
} from '@/components/ui/dialog';
import { User, Mail, MapPin, CreditCard } from 'lucide-react';
import { isProdDomain } from '@/utils/getStripe';

interface GuestCheckoutModalProps {;
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

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!email || !address) {;
      alert('Please fill in all required fields');
      return;
    }

=======
  DialogTitle} from '@/components/ui/dialog',;
import { User, Mail, MapPin, CreditCard } from 'lucide-react';
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setIsSubmitting(true);
    try {;
      onSubmit({ email, address });
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD

    }
  }

    }
  },
<<<<<<< HEAD

  return (
=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    }
  },

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>



>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (

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

        <form onSubmit={handleSubmit} className='space-y-4'>;
          <div className='space-y-2'>;

>>>>>>>             <Label
              htmlFor='guest-email'
              className='text-white flex items-center gap-2'>;
              <Mail className='h-4 w-4 text-zion-cyan' />;
              Email Address;
            </Label>;
            <Input
              id='guest-email'
              type='email'

              value={email || ''}
              onChange={e => setEmail(e && e.target.value || '')}
              placeholder='your && your.email@example && example.com'              required;
              className='bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light';
            />;
          </div>;

          <div className='space-y-2'>;

            <Label
              htmlFor='guest-address'
              className='text-white flex items-center gap-2'>;
              <MapPin className='h-4 w-4 text-zion-cyan' />;
              Shipping Address;
            </Label>;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              id='guest-email'
              type='email'
              value={email |''}
              onChange={e => setEmail(e.target.value |'')}
              placeholder='your.email@example.com'              required
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Textarea
              id='guest-address'
              value={address |''}
              onChange={e => setAddress(e.target.value |'')}
              placeholder='Enter your full shipping address...'              required
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
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
              className='border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10'            >
              Cancel
            </Button>
            <Button
              type='submit'
              disabled={isSubmitting |!email |!address}
              className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'            >
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="guest-email" className="text-white flex items-center gap-2">
              <Mail className="h-4 w-4 text-zion-cyan" />
              Email Address
            </Label>
            <Input
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id='guest-email'
              type='email'
              value={email || ''}
              onChange={e => setEmail(e.target.value || '')}
              placeholder='your.email@example.com'              required
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
              id='guest-address'
              value={address || ''}
              onChange={e => setAddress(e.target.value || '')}
              placeholder='Enter your full shipping address...'              required
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
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
              className='border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10'            >
              Cancel
            </Button>
            <Button
              type='submit'
              disabled={isSubmitting || !email || !address}
              className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'            >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id="guest-email"
              type="email"
              value={email || ''}
              onChange={(e) => setEmail(e.target.value || '')}
              placeholder="your.email@example.com"
              required
              className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light"
            />
          </div>

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              {isSubmitting ? (
=======
>>>>>>>               {isSubmitting ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                'Processing...'
              ) : (
                <>
                  <CreditCard className='h-4 w-4 mr-2' />
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Continue to Payment
                </>
              )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
}
};
};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
<<<<<<< HEAD

}
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </Dialog>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
