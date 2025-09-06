import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'

<<<<<<< HEAD
import { cn } from "@/lib/utils"

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



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
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}

  />;
));
InputOTP && InputOTP.displayName = 'InputOTP';

InputOTP.displayName = "InputOTP"


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-756f
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
<<<<<<< HEAD


  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"



  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
<<<<<<< HEAD


    >




=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      {char}
      {hasFakeCaret && (;
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;
        </div>;
      )}
<<<<<<< HEAD


    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


InputOTPSlot.displayName = "InputOTPSlot"

InputOTPSlot.displayName = "InputOTPSlot"



<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
<<<<<<< HEAD


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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

InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
<<<<<<< HEAD
=======

InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
