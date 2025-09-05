<<<<<<< HEAD
import * as React from &quot;react&quot;
import { OTPInput, OTPInputContext } from &quot;input-otp&quot;
import { Dot } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      &quot;flex items-center gap-2 [&:has([disabled])]:opacity-50&quot;,
      containerClassName
=======
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from 'lucide-react';
import { cn } from "@/lib/utils";
const InputOTP = React.forwardRef<;
  React.ElementRef<typeof OTPInput>,;
  React.ComponentPropsWithoutRef<typeof OTPInput>;
>(({ className, containerClassName, ...props }, ref) => (;
  <OTPInput;
    ref={ref}
    containerClassName={cn(;
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",;
      containerClassName;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    )}
    className={cn(&quot;disabled:cursor-not-allowed&quot;, className)}
    {...props}
<<<<<<< HEAD
  />
))
InputOTP.displayName = &quot;InputOTP&quot;

const InputOTPGroup = React.forwardRef<
  React.ElementRef<&quot;div&quot;>,
  React.ComponentPropsWithoutRef<&quot;div&quot;>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(&quot;flex items-center&quot;, className)} {...props} />
))
InputOTPGroup.displayName = &quot;InputOTPGroup&quot;

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
  />;
));
InputOTP.displayName = "InputOTP";
const InputOTPGroup = React.forwardRef<;
  React.ElementRef<"div">,;
  React.ComponentPropsWithoutRef<"div">;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn("flex items-center", className)} {...props} />;
));
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = React.forwardRef<;
  React.ElementRef<"div">,;
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return (;
    <div;
      ref={ref}
      className={cn(;
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",;
        isActive && "z-10 ring-2 ring-ring ring-offset-background",;
        className;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
      {...props}
    >;
      {char}
<<<<<<< HEAD
      {hasFakeCaret && (
        <div className=&quot;pointer-events-none absolute inset-0 flex items-center justify-center&quot;>
          <div className=&quot;h-4 w-px animate-caret-blink bg-foreground duration-1000&quot; />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = &quot;InputOTPSlot&quot;

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<&quot;div&quot;>,
  React.ComponentPropsWithoutRef<&quot;div&quot;>
>(({ ...props }, ref) => (
  <div ref={ref} role=&quot;separator&quot; {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = &quot;InputOTPSeparator&quot;

=======
      {hasFakeCaret && (;
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">;
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />;
        </div>;
      )}
    </div>;
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = React.forwardRef<;
  React.ElementRef<"div">;
  React.ComponentPropsWithoutRef<"div">;
>(({ ...props }, ref) => (;
  <div ref={ref} role="separator" {...props}>;
    <Dot />;
  </div>;
));
InputOTPSeparator.displayName = "InputOTPSeparator";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;