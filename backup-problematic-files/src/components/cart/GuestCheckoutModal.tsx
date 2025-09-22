<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
import { Textarea } from '@/components/ui/textarea',;
=======
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle} from '@/components/ui/dialog',;
import { User, Mail, MapPin, CreditCard } from 'lucide-react';
import { isProdDomain } from '@/utils/getStripe';
;
interface GuestCheckoutModalProps {;
  open: boolean;,;
  onOpenChange: (open:boolean) => void;,;
  onSubmit: (details:{ email:string;, address: string ;}) => void,;}
export default function GuestCheckoutModal({;
  open,;
  onOpenChange,;)
  onSubmit} GuestCheckoutModalProps) {;
  const [email, setEmail] = useState(),;
  const [address, setAddress] = useState(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || !address) {;
      alert('Please fill in all required fields'),;
      return;
    }
    setIsSubmitting(true),;
    try {;
      onSubmit({ email, address }),;
    } finally {;
      setIsSubmitting(false),;
  },;
  return (;
    <Dialog open={open} onOpenChange={onOpenChange}>;

      <DialogContent className="bg-zion-blue border-zion-cyan/20 max-w-md">;"

        <DialogHeader>;
"
          <DialogTitle className="text-white flex items-center gap-2">;"
            <User className="h-5 w-5 text-zion-cyan" />;"

          ;"
          <DialogDescription className="text-zion-slate-light">;"

          <div className="rounded-md bg-amber-500/20 p-2 text-center text-amber-400">;"
</div>
          </div>;"
        <form onSubmit={handleSubmit} className="space-y-4">;"
</form>"
          <div className="space-y-2">;"
</div>"
            <Label htmlFor="guest-email" className="text-white flex items-center gap-2">;"
              <Mail className="h-4 w-4 text-zion-cyan" />;"

            <Input;"
              id="guest-email";""
              type="email";""
              value={email || }')
              onChange={(e) => setEmail(e.target.value || )}

          </div>;
            <Label htmlFor="guest-address" className="text-white flex items-center gap-2">;"
              <MapPin className="h-4 w-4 text-zion-cyan" />;"

            <Textarea;"
              id="guest-address";""
              value={address || }
              onChange={(e) => setAddress(e.target.value || )}

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">;"
            <p className="text-yellow-400 text-sm">;"
</p>
            </p>;
          <DialogFooter className="space-x-2">;"

            <Button;"
              type="button";""
              variant="outline";"
              onClick={() => onOpenChange(false)}

              type="submit";"
              disabled={isSubmitting || !email || !address}"
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue";"
            >;

                <>;"
                  <CreditCard className="h-4 w-4 mr-2" />;"

                </>;
              )}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
<<<<<<< HEAD

=======
    </Dialog>;
  ),;}
 <DialogHeader> <DialogTitle className="text-white flex items-center gap-2" > <User className="h-5 w-5 text-zion-cyan" /> Guest Checkout </DialogTitle> <DialogDescription className="text-zion-slate-light" > Enter your details to complete your purchase as a guest. </DialogDescription> </DialogHeader> Pay with test data  use card 4242 4242 4242 4242 and any future date. </div>) ";
}required className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light" /> </div> <div className="space-y-2" > <Label htmlFor="guest-address" className="text-white flex items-center gap-2" > <MapPin className="h-4 w-4 text-zion-cyan" /> Shipping Address </Label> <Textarea required className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light min-h-[80px]" /> </div> <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3" > <p className="text-yellow-400 text-sm" >  Creating an account allows you to track your order and checkout faster next time. </p> </div> <DialogFooter className="space-x-2" > <Button > Cancel </Button> <Button > {";
  isSubmitting ? ('Processing...') : (<> <CreditCard className="h-4 w-4 mr-2" /> Continue to Payment </>) ;
}</Button> </DialogFooter> </form> </DialogContent> </Dialog>) ;
}'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        </form>;
 <DialogHeader> <DialogTitle className="text-white flex items-center gap-2" > <User className="h-5 w-5 text-zion-cyan" /> Guest Checkout  <DialogDescription className="text-zion-slate-light" > Enter your details to complete your purchase as a guest.   Pay with test data  use card 4242 4242 4242 4242 and any future date. </div>) ";""
}required className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light" /> </div> <div className="space-y-2" > <Label htmlFor="guest-address" className="text-white flex items-center gap-2" > <MapPin className="h-4 w-4 text-zion-cyan" /> Shipping Address  <Textarea required className="bg-zion-blue-light border-zion-cyan/30 text-white placeholder:text-zion-slate-light min-h-[80px]" /> </div> <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3" > <p className="text-yellow-400 text-sm" >  Creating an account allows you to track your order and checkout faster next time. </p> </div> <DialogFooter className="space-x-2" > <Button > Cancel  <Button > {";""
  isSubmitting ? ('Processing...') : (<> <CreditCard className="h-4 w-4 mr-2" /> Continue to Payment </>) ;"

}  </form>  ) ;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
