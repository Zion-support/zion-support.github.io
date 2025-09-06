

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'

import { cn } from "@/lib/utils"

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
></typeof>(({ className, containerClassName, ...props }, ref) => (
=======
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
  <OTPInput
    ref={ref}
    containerClassName={cn(


      "flex items-center gap-2 [&:has([disabled])]:opacity-50",


      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
<<<<<<< HEAD

  />;
));
InputOTP && InputOTP.displayName = 'InputOTP';
=======

InputOTP.displayName = "InputOTP"


const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';




=======
  />
))
<<<<<<< HEAD
InputOTP.displayName = 'InputOTP'
<<<<<<< HEAD
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
=======
InputOTP.displayName = "InputOTP"

=======
=======
InputOTP.displayName = "InputOTP"

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    >
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      {char}
      {hasFakeCaret && (;
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;
        </div>;
      )}
<<<<<<< HEAD


=======
    </div>
  )
})
<<<<<<< HEAD
InputOTPSlot.displayName = 'InputOTPSlot'
<<<<<<< HEAD
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
InputOTPSlot.displayName = "InputOTPSlot"

=======
=======
InputOTPSlot.displayName = "InputOTPSlot"

<<<<<<< HEAD


=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <Dot />
  </div>
))
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

=======
<<<<<<< HEAD
<<<<<<< HEAD
InputOTPSeparator.displayName = 'InputOTPSeparator'
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
=======

InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
