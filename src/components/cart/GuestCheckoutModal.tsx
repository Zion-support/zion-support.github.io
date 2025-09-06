

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

  open: boolean;
  onOpenChange: (open: boolean) => void;

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
      onSubmit({ email, address })
    } finally {
      setIsSubmitting(false)
    }
  }
=======
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
    setIsSubmitting(true);
    try {;
      onSubmit({ email, address });
    } finally {;
      setIsSubmitting(false);
    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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


        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="guest-email" className="text-white flex items-center gap-2">
              <Mail className="h-4 w-4 text-zion-cyan" />
              Email Address
            </Label>
            <Input

              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Continue to Payment
                </>
              )}

};
};

=======
            </Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>;
  );
}
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
