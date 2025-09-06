
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'

import { cn } from "@/lib/utils"


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(

      "flex items-center gap-2 [&:has([disabled])]:opacity-50",

      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))

InputOTP.displayName = "InputOTP"

=======
=======
InputOTP.displayName = "InputOTP"


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (


const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]


      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})

InputOTPSlot.displayName = "InputOTPSlot"

=======
=======
InputOTPSlot.displayName = "InputOTPSlot"


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))

InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

=======
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
