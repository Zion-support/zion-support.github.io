<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from 'react'
import {OTPInput, OTPInputContext} from 'input-otp'
import {Dot} from 'lucide-react'
import {cn} from '@/lib/utils'
<<<<<<< HEAD
<<<<<<< HEAD
onst InputOTP = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const InputOTP = React.forwardRef<
>>>>>>>   React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
<<<<<<< HEAD
></typeof>(({ className, containerClassName, ...props }, ref) => (
import React from 'react';
import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input-otp';
import {Dot} from 'lucide-react';

import {cn} from '@/lib/utils';

const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
  React && React.ComponentPropsWithoutRef<typeof OTPInput>;
></typeof>(({ className, containerClassName, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>(({ className, containerClassName, ...props }, ref) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <OTPInput
    ref={ref}
    containerClassName={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (

=======
=======
InputOTP.displayName = 'InputOTP'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
InputOTP.displayName = 'InputOTP'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'
const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
    >
<<<<<<< HEAD
onst InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

<<<<<<< HEAD
const InputOTPSlot = React.forwardRef<
=======
<<<<<<< HEAD
onst InputOTPSlot = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
InputOTP.displayName = "InputOTP"

InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
    >
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    >
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {char}
=======
>>>>>>>       {char}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {char}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">

>(({ ...props }, ref) => (
=======
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
onst InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>>>>>>> >(({ ...props }, ref) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
<<<<<<< HEAD

InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;

=======
InputOTPSeparator.displayName = 'InputOTPSeparator'
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
ursor/fix-website-loading-errors-and-merge-6662
      {char}
      {hasFakeCaret && (;
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;
        </div>;
      )}


InputOTPSlot.displayName = "InputOTPSlot"

InputOTPSlot.displayName = "InputOTPSlot"



const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
InputOTPSlot.displayName = 'InputOTPSlot'
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
InputOTPSlot.displayName = "InputOTPSlot"

InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
});
InputOTPSlot && InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => (;
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>;
));
InputOTPSeparator && InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input - otp';
import {Dot} from 'lucide-react';
import {cn} from '@/lib / utils';
const InputOTP = React.forward_ref<;
  React.ElementRef < typeof OTPInput>,
  React.ComponentPropsWithoutRef < typeof OTPInput>;
></typeof>(({ class_name, containerClassName, ...props }, ref) => (
  <OTPInput;
    ref={ref}
    containerClassName={cn (
      'flex items - center gap - 2 [&:has ([disabled])]:opacity - 50',
      containerClassName)}
    className={cn ('disabled:cursor - not - allowed', class_name)}
    {...props}
  />));
InputOTP.display_name = 'InputOTP';
const InputOTPGroup = React.forward_ref<;
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>;
>(({ class_name, ...props }, ref) => (
  <div ref={ref} className={cn ('flex items - center', class_name)} {...props} />));
InputOTPGroup.display_name = 'InputOTPGroup';
const InputOTPSlot = React.forward_ref<;
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, class_name, ...props }, ref) => {
  const inputOTPContext = React.useContext (OTPInputContext) as any;
  const { char, hasFakeCaret, is_active } = inputOTPContext.slots[index];
    >;
      {char}
      {hasFakeCaret && (
        <div className='pointer - events - none absolute inset - 0 flex items - center justify - center'>;
          <div className='h - 4 w - px animate - caret - blink bg - foreground duration - 1000' />;
        </div>)}
    </div>);
});
InputOTPSlot.display_name = 'InputOTPSlot';
const InputOTPSeparator = React.forward_ref<;
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>));
InputOTPSeparator.display_name = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

>>>>>>> InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
InputOTPSeparator.displayName = 'InputOTPSeparator'
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
