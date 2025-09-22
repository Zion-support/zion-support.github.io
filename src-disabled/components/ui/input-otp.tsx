import * as React from "react""
:src_backup/components/ui/input-otp.tsx
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'
"
import { cn } from "@/lib/utils"
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
:src_backup/components/ui/input-otp.tsx
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
  React && React.ComponentPropsWithoutRef<typeof OTPInput>;
></typeof>(({ className, containerClassName, ...props }, ref) => (;
:src_backup/components/ui/input-otp.tsx
  <OTPInput;
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",


:src_backup/components/ui/input-otp.tsx
      containerClassName
    containerClassName={cn(      containerClassName
    )}
:src_backup/components/ui/input-otp.tsx
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
/>
))
InputOTP.displayName = "InputOTP"
const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;

const InputOTPGroup = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;'
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));'
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';
:src_backup/components/ui/input-otp.tsx


const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
const InputOTPGroup = React.forwardRef<"
  React.ElementRef<"div">,"
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

:src_backup/components/ui/input-otp.tsx
const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
const InputOTPSlot = React.forwardRef<"
  React.ElementRef<"div">,"
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {}
  const inputOTPContext = React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

:src_backup/components/ui/input-otp.tsx
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
InputOTPSlot.displayName = "InputOTPSlot"

:src_backup/components/ui/input-otp.tsx
InputOTPSlot.displayName = "InputOTPSlot"

InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
      )}InputOTPSlot.displayName = "InputOTPSlot"

InputOTPSlot.displayName = "InputOTPSlot"

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
})const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
const InputOTPSeparator = React.forwardRef<"
  React.ElementRef<"div">,"
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => ("
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
    </div>;
  );
});'
InputOTPSlot && InputOTPSlot.displayName = 'InputOTPSlot';
:src_backup/components/ui/input-otp.tsx

const InputOTPSeparator = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => (;'
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>;
));'
InputOTPSeparator && InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
:src_backup/components/ui/input-otp.tsx
'
import * as React from 'react';'
import {OTPInput, OTPInputContext} from 'input - otp';'
import {Dot} from 'lucide-react';'
import {cn} from '@/lib / utils';
const InputOTP = React.forward_ref<;
  React.ElementRef < typeof OTPInput>,
  React.ComponentPropsWithoutRef < typeof OTPInput>;
></typeof>(({ class_name, containerClassName, ...props }, ref) => (
  <OTPInput;
    ref={ref}
:src_backup/components/ui/input-otp.tsx
    containerClassName={cn ('
      'flex items - center gap - 2 [&:has ([disabled])]:opacity - 50',
      containerClassName)}'
    className={cn ('disabled:cursor - not - allowed', class_name)}
    {...props}
  />));'
InputOTP.display_name = 'InputOTP';
:src_backup/components/ui/input-otp.tsx
const InputOTPGroup = React.forward_ref<;'
  React.ElementRef<'div'>,'
  React.ComponentPropsWithoutRef<'div'>;
>(({ class_name, ...props }, ref) => ('
  <div ref={ref} className={cn ('flex items - center', class_name)} {...props} />));'
InputOTPGroup.display_name = 'InputOTPGroup';
:src_backup/components/ui/input-otp.tsx
const InputOTPSlot = React.forward_ref<;'
  React.ElementRef<'div'>,'
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, class_name, ...props }, ref) => {}
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
:src_backup/components/ui/input-otp.tsx
const InputOTPSeparator = React.forward_ref<;'
  React.ElementRef<'div'>,'
  React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => ('
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>));'
InputOTPSeparator.display_name = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
:src_backup/components/ui/input-otp.tsx
';
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
"
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
;'"
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
InputOTPSeparator.displayName = "InputOTPSeparator""
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;))
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from 'lucide-react'

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 [&:has([disabled])]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

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
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
