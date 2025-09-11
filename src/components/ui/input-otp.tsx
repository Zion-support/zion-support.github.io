<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react'
import {OTPInput, OTPInputContext} from 'input-otp'
import {Dot} from 'lucide-react'
import {cn} from '@/lib/utils'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
const InputOTP = React.forwardRef<
  React.ComponentPropsWithoutRef<typeof OTPInput>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
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
<<<<<<< HEAD
>(({ className, containerClassName, ...props }, ref) => (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
<<<<<<< HEAD
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}

  />;
));
InputOTP && InputOTP.displayName = 'InputOTP';

InputOTP.displayName = "InputOTP"

<<<<<<< HEAD
=======
  />
))
InputOTP.displayName = "InputOTP"

=======
=======
InputOTP.displayName = "InputOTP"

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';




const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
<<<<<<< HEAD

<<<<<<< HEAD
InputOTP.displayName = 'InputOTP'
InputOTP.displayName = 'InputOTP'
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
<<<<<<< HEAD
<<<<<<< HEAD
    >

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
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
onst InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
InputOTPSlot.displayName = 'InputOTPSlot'
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
InputOTPSlot.displayName = "InputOTPSlot"

InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
<<<<<<< HEAD
<<<<<<< HEAD
InputOTPSeparator.displayName = 'InputOTPSeparator'
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
