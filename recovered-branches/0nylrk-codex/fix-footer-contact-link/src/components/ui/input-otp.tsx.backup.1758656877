import * as React from "react"
<<<<<<< HEAD
import { OTPInput, OTPInputContext } from "input-otp"
=======
import { OTPInputContext } from "input-otp"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
<<<<<<< HEAD
>(({ className, containerClassName, ...props }, ref) => (
=======
>(({ classNamecontainerClassName...props }ref) => (
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
<<<<<<< HEAD
    className={cn("disabled:cursor-not-allowed", className)}
=======
    className={cn("disabled:cursor-not-allowed"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
=======
>(({ className...props }ref) => (
  <div ref={ref} className={cn("flex items-center"className)} {...props} />
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
<<<<<<< HEAD
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
=======
>(({ indexclassName...props }ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { charhasFakeCaretisActive } = inputOTPContext.slots[index]
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
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

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
<<<<<<< HEAD
>(({ ...props }, ref) => (
=======
>(({ ...props }ref) => (
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

<<<<<<< HEAD
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
=======
export { InputOTPGroupInputOTPSlotInputOTPSeparator }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
