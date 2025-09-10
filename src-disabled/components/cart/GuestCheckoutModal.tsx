:src_backup/components/cart/GuestCheckoutModal.tsx

;
import { useState } from 'react',import { Button } from '@/components/ui/button',import { Input } from '@/components/ui/input',import { Label } from '@/components/ui/label',import { Textarea } from '@/components/ui/textarea',try {on_submit ({ email, address })} finally {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
import { useState } from 'react,import { Button } from @/components/ui/button',import { Input } from '@/components/ui/input,import { Label } from @/components/ui/label',import { Textarea } from '@/components/ui/textarea,try {on_submit ({ email, address })} finally {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error(Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
import React from 'react';
:src_backup/components/cart/GuestCheckoutModal.tsx

:src_backup/components/cart/GuestCheckoutModal.tsx
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

:src_backup/components/cart/GuestCheckoutModal.tsx
interface GuestCheckoutModalProps {;
:src_backup/components/cart/GuestCheckoutModal.tsx

import { Textarea  } from '@/components/ui/textarea';
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle} from '@/components/ui/dialog';
import { User, Mail, MapPin, CreditCard  } from 'lucide-react';
import { isProdDomain  } from '@/utils/getStripe';
interface GuestCheckoutModalProps  {import { useState   } from 'react';
import { Button   } from '@/components/ui/button';
import { Input   } from '@/components/ui/input';
import { Label   } from '@/components/ui/label';
:src_backup/components/cart/GuestCheckoutModal.tsx


:src_backup/components/cart/GuestCheckoutModal.tsx
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

:src_backup/components/cart/GuestCheckoutModal.tsx
:src_backup/components/cart/GuestCheckoutModal.tsx
:src_backup/components/cart/GuestCheckoutModal.tsx


:src_backup/components/cart/GuestCheckoutModal.tsx
        )}
              htmlFor='guest-email'
        )}<form onSubmit={handleSubmit} className='space-y-4'>;
          <div className='space-y-2'>;<Label;
              htmlFor='guest-email';
        )}
              htmlFor=guest-email'
        )}<form onSubmit={handleSubmit} className='space-y-4>;
          <div className=space-y-2'>;<Label;
              htmlFor='guest-email;


:src_backup/components/cart/GuestCheckoutModal.tsx
            <Input
              id='guest-email'
            <Input
              id='guest-email'
              type='email'


            <Input;
              id='guest-email';
              type='email';
              value={email || ''}
              onChange={(e) => setEmail(e.target.value || '')}
              placeholder="your.email@example.com";
              required;
              className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light";
            />;
          </div>;
          <div className="space-y-2">;
            <Label htmlFor="guest-address" className="text-white flex items-center gap-2">;
              <MapPin className="h-4 w-4 text-zion-cyan" />;
              Shipping Address;
            </Label>;
            />;
          </div>;
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">;
            <p className="text-yellow-400 text-sm">;
              💡 Creating an account allows you to track your order and checkout faster next time.;
            </p>;
          </div>;
          <DialogFooter className="space-x-2">;
            <Button;
              type="button";
              variant="outline";
              onClick={() => onOpenChange(false)}
              className="border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10";
            >;
              Cancel;
            </Button>;
            <Button;
              type="submit";
              disabled={isSubmitting || !email || !address}
:src_backup/components/cart/GuestCheckoutModal.tsx
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue";
:src_backup/components/cart/GuestCheckoutModal.tsx
          </div>;<div className='space-y-2'>;<Label;
              htmlFor='guest-address';


:src_backup/components/cart/GuestCheckoutModal.tsx
            <Textarea;
              id='guest-address';
              value={address || ''}
              onChange={e => setAddress(e && e.target.value || '')}


:src_backup/components/cart/GuestCheckoutModal.tsx
          </div>;<div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3'>;
          </div>;<div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3'>;
          </div>;<div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3>;


        {!isProdDomain () && (<div className='rounded - md bg - amber - 500 / 20 p - 2 text - center text - amber - 400'>;
        {!isProdDomain () && (
          <div className='rounded - md bg - amber - 500 / 20 p - 2 text - center text - amber - 400'>;
        {!isProdDomain () && (<div className=rounded - md bg - amber - 500 / 20 p - 2 text - center text - amber - 400'>;


:src_backup/components/cart/GuestCheckoutModal.tsx
            <p className='text - yellow - 400 text - sm'>;💡 Creating an account allows you to track your order and checkout;
            <p className='text - yellow - 400 text - sm'>;
              💡 Creating an account allows you to track your order and checkout;
              faster next time.;
            </p>;
:src_backup/components/cart/GuestCheckoutModal.tsx
            <p className='text - yellow - 400 text - sm'>;💡 Creating an account allows you to track your order and checkout;


:src_backup/components/cart/GuestCheckoutModal.tsx
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue"
            >
          <div className="space-y-2">
            <Label htmlFor="guest-address" className="text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue"
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue
            >
          <div className=space-y-2">
            <Label htmlFor="guest-address className=text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan />

:src_backup/components/cart/GuestCheckoutModal.tsx

          <DialogFooter className='space - x-2'>;
          </div>;<form onSubmit={handleSubmit} className="space-y-4">;
          <div className="space-y-2">;
            <Label htmlFor="guest-email" className="text-white flex items-center gap-2">;
              <Mail className="h-4 w-4 text-zion-cyan" />;
              Email Address;
            </Label>;
            <Input;
              {isSubmitting ? ('Processing...';
              ) : (<>;
                  <CreditCard className='h-4 w-4 mr-2' />;
                  Continue to Payment;
                </>;
              )}disabled={isSubmitting || !email || !address}
              className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'>;
              {isSubmitting ? ('Processing...';
              ) : (<>;
                  <CreditCard className='h-4 w-4 mr-2' />;
                  Continue to Payment;
                </>;
              )}}}<DialogFooter className='space - x-2'>;
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
              {is_submitting ? ('Processing...') : (<>;
                  <CreditCard className='h - 4 w - 4 mr - 2' />;
                  Continue to Payment;
:src_backup/components/cart/GuestCheckoutModal.tsx


:src_backup/components/cart/GuestCheckoutModal.tsx
};
};
};
}
}


:src_backup/components/cart/GuestCheckoutModal.tsx
    </Dialog>;
  );
}
;

}


    </Dialog>);
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
:src_backup/components/cart/GuestCheckoutModal.tsx
;
