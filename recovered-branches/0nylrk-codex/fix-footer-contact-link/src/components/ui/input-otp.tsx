<<<<<<< HEAD
import * as React from &quot;react&quot;
import { OTPInput, OTPInputContext } from &quot;input-otp&quot;
import { Dot } from &quot;lucide-react&quot;

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(_({_className, _containerClassName, _...props}, _ref) => (
  <OTPInput
<<<<<<< HEAD
    ref={ref}
    containerClassName={cn(
      &quot;flex items-center gap-2 has-[:disabled]:opacity-50&quot;,
      containerClassName
    )}
    className={cn(&quot;disabled:cursor-not-allowed&quot;, className)}
    {...props}
=======
    ref={_ref}
    containerClassName={_cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50", _containerClassName
    )}
    className={_cn("disabled:cursor-not-allowed", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
InputOTP.displayName = &quot;InputOTP&quot;

<<<<<<< HEAD
const InputOTPGroup = React.forwardRef<
  React.ElementRef<&quot;div&quot;>,
  React.ComponentPropsWithoutRef<&quot;div&quot;>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(&quot;flex items-center&quot;, className)} {...props} />
=======
const _InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(_({_className, _...props}, _ref) => (
  <div ref={_ref} className={_cn("flex items-center", _className)} {_...props} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
))
InputOTPGroup.displayName = &quot;InputOTPGroup&quot;

<<<<<<< HEAD
const InputOTPSlot = React.forwardRef<
  React.ElementRef<&quot;div&quot;>,
  React.ComponentPropsWithoutRef<&quot;div&quot;> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        &quot;relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md&quot;,
        isActive && &quot;z-10 ring-2 ring-ring ring-offset-background&quot;,
        className
=======
const _InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {_index: number}
>(_({_index, _className, _...props}, _ref) => {_const _inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, _hasFakeCaret, _isActive} = inputOTPContext.slots[index]

  return (
    <div
      ref={_ref}
      className={_cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", _isActive && "z-10 ring-2 ring-ring ring-offset-background", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    >
<<<<<<< HEAD
      {char}
      {hasFakeCaret && (
        <div className=&quot;pointer-events-none absolute inset-0 flex items-center justify-center&quot;>
          <div className=&quot;h-4 w-px animate-caret-blink bg-foreground duration-1000&quot; />
=======
      {_char}
      {_hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = &quot;InputOTPSlot&quot;

<<<<<<< HEAD
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<&quot;div&quot;>,
  React.ComponentPropsWithoutRef<&quot;div&quot;>
>(({ ...props }, ref) => (
  <div ref={ref} role=&quot;separator&quot; {...props}>
=======
const _InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(_({_...props}, _ref) => (
  <div ref={_ref} role="separator" {_...props}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <Dot />
  </div>
))
InputOTPSeparator.displayName = &quot;InputOTPSeparator&quot;

export {_InputOTP, _InputOTPGroup, _InputOTPSlot, _InputOTPSeparator}
