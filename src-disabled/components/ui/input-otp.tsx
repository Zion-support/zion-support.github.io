<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx
import * as React from "react""
=======
<<<<<<< HEAD
import * as React from 'react'
import {OTPInput, OTPInputContext} from 'input-otp'
import {Dot} from 'lucide-react'
import {cn} from '@/lib/utils'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'

import { cn } from "@/lib/utils"

<<<<<<< HEAD
const InputOTP = React.forwardRef<
  React.ComponentPropsWithoutRef<typeof OTPInput>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>

const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
  React && React.ComponentPropsWithoutRef<typeof OTPInput>;
></typeof>(({ className, containerClassName, ...props }, ref) => (;
<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx

=======
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx
      containerClassName

    )}
<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}

const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;

  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;'
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));'
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,

  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (

<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx
=======
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

const InputOTPSlot = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx
  React.ElementRef<"div">,

  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {}
  const inputOTPContext = React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
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

<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {char}
      {hasFakeCaret && (;
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;
        </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx
      )}

InputOTPSlot.displayName = 'InputOTPSlot'

InputOTPSlot.displayName = 'InputOTPSlot'

InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<

  React.ElementRef<'div'>,

  React.ComponentPropsWithoutRef<"div">
<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx
>(({ ...props }, ref) => ("
=======
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
>(({ ...props }, ref) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx
InputOTPSeparator.displayName = "InputOTPSeparator"
=======
<<<<<<< HEAD
InputOTPSeparator.displayName = 'InputOTPSeparator'
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx

    </div>;
  );
});'
InputOTPSlot && InputOTPSlot.displayName = 'InputOTPSlot';

  React && React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => (;'
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>;
));'
InputOTPSeparator && InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

import {cn} from '@/lib / utils';
const InputOTP = React.forward_ref<;
  React.ElementRef < typeof OTPInput>,
  React.ComponentPropsWithoutRef < typeof OTPInput>;
></typeof>(({ class_name, containerClassName, ...props }, ref) => (
  <OTPInput;
    ref={ref}

    {...props}
  />));'
InputOTP.display_name = 'InputOTP';

  React.ElementRef<'div'>,'
  React.ComponentPropsWithoutRef<'div'>;
>(({ class_name, ...props }, ref) => ('
  <div ref={ref} className={cn ('flex items - center', class_name)} {...props} />));'
InputOTPGroup.display_name = 'InputOTPGroup';

  const inputOTPContext = React.useContext (OTPInputContext) as any;
  const { char, hasFakeCaret, is_active } = inputOTPContext.slots[index];,
    >;
      {char}
      {hasFakeCaret && ('
        <div className='pointer - events - none absolute inset - 0 flex items - center justify - center'>;'
          <div className='h - 4 w - px animate - caret - blink bg - foreground duration - 1000' />;
        </div>)}
    </div>);
});'
InputOTPSlot.display_name = 'InputOTPSlot';

  React.ElementRef<'div'>,'
  React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => ('
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>));'
InputOTPSeparator.display_name = 'InputOTPSeparator';
<<<<<<< HEAD:src-disabled/components/ui/input-otp.tsx
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
=======
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/input-otp.tsx
