<<<<<<< HEAD
import * as React from 'react'
import {OTPInput, OTPInputContext} from 'input-otp'
import {Dot} from 'lucide-react'
import {cn} from '@/lib/utils'
=======
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'

import { cn } from "@/lib/utils"

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
<<<<<<< HEAD
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
=======
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
<<<<<<< HEAD
InputOTP.displayName = 'InputOTP'
=======
InputOTP.displayName = "InputOTP"

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'
=======
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
<<<<<<< HEAD
    >
=======

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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
<<<<<<< HEAD
InputOTPSlot.displayName = 'InputOTPSlot'
=======
InputOTPSlot.displayName = "InputOTPSlot"

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
<<<<<<< HEAD
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
=======
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
