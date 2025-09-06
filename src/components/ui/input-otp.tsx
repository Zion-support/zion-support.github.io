import * as React from 'react'
import {OTPInput, OTPInputContext} from 'input-otp'
import {Dot} from 'lucide-react'
import {cn} from '@/lib/utils'
onst InputOTP = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662

  />;
));
InputOTP && InputOTP.displayName = 'InputOTP';

InputOTP.displayName = "InputOTP"


const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';




  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >;

InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
