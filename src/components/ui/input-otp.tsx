import * as React from "react"


const _InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(_({_className, _containerClassName, _...props}, _ref) => (
  <OTPInput
    ref={_ref}
    containerClassName={_cn(
      "flex items-center gap-2 [&:has([disabled])]:opacity-50", _containerClassName
    )}
    className={_cn("disabled:cursor-not-allowed", _className)}
    {_...props}
  />
))
InputOTP.displayName = "InputOTP"

const _InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(_({_className, _...props}, _ref) => (
  <div ref={_ref} className={_cn("flex items-center", _className)} {_...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

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
      )}
      {_...props}
    >
      {_char}
      {_hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const _InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(_({_...props}, _ref) => (
  <div ref={_ref} role="separator" {_...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export {_InputOTP, _InputOTPGroup, _InputOTPSlot, _InputOTPSeparator}
