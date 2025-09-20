import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { Dot } from 'lucide-react'
import { cn } from '@/lib/utils'
const InputOTP = React.forwardRef<;
React.ElementRef<typeof OTPInput>
React.ComponentPropsWithoutRef<typeof OTPInput>
></typeof>(({ className containerClassName, ...props }, ref) => (
  <OTPInput
InputOTPSlot.displayName = 'InputOTPSlot'
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => (;
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>;
));
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP InputOTPGroup InputOTPSlot InputOTPSeparator };