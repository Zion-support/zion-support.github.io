
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
=======
import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
import React from 'react';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input - otp';
import {Dot} from 'lucide-react';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

<<<<<<< HEAD



import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
></typeof>(({ className, containerClassName, ...props }, ref) => (
=======

const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
  React && React.ComponentPropsWithoutRef<typeof OTPInput>;
></typeof>(({ className, containerClassName, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <OTPInput
    ref={ref}
    containerClassName={cn(

=======
import { cn } from "@/lib/utils"


import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const InputOTP = React.forwardRef<;
  React.ElementRef<typeof OTPInput>,;
  React.ComponentPropsWithoutRef<typeof OTPInput>;
>(({ className, containerClassName, ...props }, ref) => (;
  <OTPInput;
    ref={ref}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      "flex items-center gap-2 has-[:disabled]:opacity-50",


      containerClassName
<<<<<<< HEAD
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
=======
    containerClassName={cn(;
      "flex items-center gap-2 has-[disabled]:opacity-50",;
      containerClassName;
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50'
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';
const InputOTPSlot = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
  React && React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React && React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext && inputOTPContext.slots[index];
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

InputOTP && InputOTP.displayName = 'InputOTP';
  />

))
InputOTP.displayName = "InputOTP"


<<<<<<< HEAD
=======
InputOTP && InputOTP.displayName = 'InputOTP';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
  React && React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React && React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext && inputOTPContext.slots[index];
<<<<<<< HEAD





=======
    >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  />;
));
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {char}
      {hasFakeCaret && (;
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;
        </div>;
      )}
<<<<<<< HEAD

<<<<<<< HEAD
    </div>

=======
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">

<<<<<<< HEAD

>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <Dot />
  </div>

=======
    </div>;
  );
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </div>;
  );
});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
import {cn} from '@/lib / utils';
;
const InputOTP = React.forward_ref<;
  React.ElementRef < typeof OTPInput>,
  React.ComponentPropsWithoutRef < typeof OTPInput>;
></typeof>(({ class_name, containerClassName, ...props }, ref) => (
  <OTPInput;
    ref={ref}
    containerClassName={cn (
      'flex items - center gap - 2 has-[:disabled]:opacity - 50',
      containerClassName)}
    className={cn ('disabled:cursor - not - allowed', class_name)}
    {...props}
  />));
InputOTP.display_name = 'InputOTP';
;
const InputOTPGroup = React.forward_ref<;
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>;
>(({ class_name, ...props }, ref) => (
  <div ref={ref} className={cn ('flex items - center', class_name)} {...props} />));
InputOTPGroup.display_name = 'InputOTPGroup';
;
const InputOTPSlot = React.forward_ref<;
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, class_name, ...props }, ref) => {
  const inputOTPContext = React.useContext (OTPInputContext) as any;
  const { char, hasFakeCaret, is_active } = inputOTPContext.slots[index];
;
    >;
      {char}
      {hasFakeCaret && (
        <div className='pointer - events - none absolute inset - 0 flex items - center justify - center'>;
          <div className='h - 4 w - px animate - caret - blink bg - foreground duration - 1000' />;
        </div>)}
    </div>);
});
InputOTPSlot.display_name = 'InputOTPSlot';
;
const InputOTPSeparator = React.forward_ref<;
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>));
InputOTPSeparator.display_name = 'InputOTPSeparator';
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

))
InputOTPSeparator.displayName = "InputOTPSeparator"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

))
InputOTPSeparator.displayName = "InputOTPSeparator"


InputOTP.displayName = "InputOTP";
;
const InputOTPGroup = React.forwardRef<;
  React.ElementRef<"div">,;
  React.ComponentPropsWithoutRef<"div">;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn("flex items-center", className)} {...props} />;
));
InputOTPGroup.displayName = "InputOTPGroup";
;
const InputOTPSlot = React.forwardRef<;
  React.ElementRef<"div">,;
  React.ComponentPropsWithoutRef<"div"> & { index:number }
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
;
  return (;
    <div;
      ref={ref}
      className={cn(;
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",;
        isActive && "z-10 ring-2 ring-ring ring-offset-background",;
        className;
      )}
      {...props}
    >;
      {char}
      {hasFakeCaret && (;
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">;
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />;
        </div>;
      )}
    </div>;
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
;
const InputOTPSeparator = React.forwardRef<;
  React.ElementRef<"div">,;
  React.ComponentPropsWithoutRef<"div">;
>(({ ...props }, ref) => (;
  <div ref={ref} role="separator" {...props}>;
    <Dot />;
  </div>;
));
InputOTPSeparator.displayName = "InputOTPSeparator";
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } const InputOTP = React.forwardRef< React.ElementRef<typeof OTPInput>;
React.ComponentPropsWithoutRef<typeof OTPInput> > ( ({
  className, containerClassName, ...props 
}, ref) => (<OTPInput />) ) InputOTP.displayName = "InputOTP") ) InputOTPGroup.displayName = "InputOTPGroup") 
}{
  ...props 
}> </div>) 
}</div>) 
}) InputOTPSlot.displayName = "InputOTPSlot" <Dot /> </div>) ) InputOTPSeparator.displayName = "InputOTPSeparator" export {
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator 
}
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
