<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { cn } from "@/lib/utils"
<<<<<<< HEAD

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
import React from 'react';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input - otp';
import {Dot} from 'lucide-react';
import {cn} from '@/lib/utils';
<<<<<<< HEAD
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import { cn } from "@/lib/utils"

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
      'flex items-center gap-2 has-[:disabled]:opacity-50'
      "flex items-center gap-2 has-[:disabled]:opacity-50",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======


import * as React from 'react';'
import {OTPInput, OTPInputContext} from 'input - otp';'
import {Dot} from 'lucide-react';

  <OTPInput;
    ref={ref}
    containerClassName={cn(


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils"

";
import * as React from "react";"
import { OTPInput, OTPInputContext } from "input-otp";"
import { Dot } from "lucide-react";
;"
import { cn } from "@/lib/utils";
;
const InputOTP = React.forwardRef<;
  React.ElementRef<typeof OTPInput>,;
  React.ComponentPropsWithoutRef<typeof OTPInput>;
>(({ className, containerClassName, ...props }, ref) => (;
  <OTPInput;
    ref={ref}

"
      "flex items-center gap-2 has-[:disabled]:opacity-50",


      containerClassName;
<<<<<<< HEAD
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======



import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input - otp';
import {Dot} from 'lucide-react';
import {cn} from '@/lib/utils';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"




import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
></typeof>(({ className, containerClassName, ...props }, ref) => (

const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
  React && React.ComponentPropsWithoutRef<typeof OTPInput>;
></typeof>(({ className, containerClassName, ...props }, ref) => (;
  <OTPInput
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    containerClassName={cn(

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

      "flex items-center gap-2 has-[:disabled]:opacity-50",


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD
  />
=======
=======
  <OTPInput;
    ref={ref}
    containerClassName={cn('
      'flex items-center gap-2 has-[:disabled]:opacity-50'
      containerClassName;
    )}'
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';
const InputOTPSlot = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  React && React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React && React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext && inputOTPContext.slots[index];
    >
  return (
<<<<<<< HEAD
    <div;
      ref={ref}
      className={cn("
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md","
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className;
=======
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      )}
      {...props}
    >;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
InputOTP && InputOTP.displayName = 'InputOTP';
  />

))
InputOTP.displayName = "InputOTP"
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
=======
<<<<<<< HEAD
=======
InputOTP && InputOTP.displayName = 'InputOTP';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
=======
const InputOTPGroup = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;'
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));'
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'
=======


const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  React && React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React && React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext && inputOTPContext.slots[index];


<<<<<<< HEAD
  />;
));

      {char}
<<<<<<< HEAD
=======
    containerClassName={cn(      {char}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    containerClassName={cn(      {char}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



  />;
));
      {char}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {hasFakeCaret && (;
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;
        </div>;
      )}

    </div>

  )
})
=======
      {hasFakeCaret && (;'
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;'
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;
        </div>;
      )}

  )
})"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<"
  React.ElementRef<"div">,"
  React.ComponentPropsWithoutRef<"div">

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <Dot />
  </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
    </div>;
  );
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
InputOTPSlot && InputOTPSlot.displayName = 'InputOTPSlot';

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
<<<<<<< HEAD
<<<<<<< HEAD
))
InputOTPSeparator.displayName = "InputOTPSeparator"

=======


    </div>;
  );
});

;'
import {cn} from '@/lib / utils';
;
const InputOTP = React.forward_ref<;
  React.ElementRef < typeof OTPInput>,
  React.ComponentPropsWithoutRef < typeof OTPInput>;
></typeof>(({ class_name, containerClassName, ...props }, ref) => (
  <OTPInput;
    ref={ref}
    containerClassName={cn ('
      'flex items - center gap - 2 has-[:disabled]:opacity - 50',
      containerClassName)}'
    className={cn ('disabled:cursor - not - allowed', class_name)}
    {...props}
  />));'
InputOTP.display_name = 'InputOTP';
;
const InputOTPGroup = React.forward_ref<;'
  React.ElementRef<'div'>,'
  React.ComponentPropsWithoutRef<'div'>;
>(({ class_name, ...props }, ref) => ('
  <div ref={ref} className={cn ('flex items - center', class_name)} {...props} />));'
InputOTPGroup.display_name = 'InputOTPGroup';
;
const InputOTPSlot = React.forward_ref<;'
  React.ElementRef<'div'>,'
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, class_name, ...props }, ref) => {}
  const inputOTPContext = React.useContext (OTPInputContext) as any;
  const { char, hasFakeCaret, is_active } = inputOTPContext.slots[index];
;
    >;
      {char}
      {hasFakeCaret && ('
        <div className='pointer - events - none absolute inset - 0 flex items - center justify - center'>;'
          <div className='h - 4 w - px animate - caret - blink bg - foreground duration - 1000' />;
        </div>)}
    </div>);
});'
InputOTPSlot.display_name = 'InputOTPSlot';
;
const InputOTPSeparator = React.forward_ref<;'
  React.ElementRef<'div'>,'
  React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => ('
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>));'
InputOTPSeparator.display_name = 'InputOTPSeparator';
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
;



))"
InputOTPSeparator.displayName = "InputOTPSeparator"

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

    </div>;
  );
});
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

))
InputOTPSeparator.displayName = "InputOTPSeparator"



))
InputOTPSeparator.displayName = "InputOTPSeparator"


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
InputOTP.displayName = "InputOTP";
;
const InputOTPGroup = React.forwardRef<;"
  React.ElementRef<"div">,;"
  React.ComponentPropsWithoutRef<"div">;
>(({ className, ...props }, ref) => (;"
  <div ref={ref} className={cn("flex items-center", className)} {...props} />;
));"
InputOTPGroup.displayName = "InputOTPGroup";
;
const InputOTPSlot = React.forwardRef<;"
  React.ElementRef<"div">,;"
  React.ComponentPropsWithoutRef<"div"> & { index:number }
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
;
  return (;
    <div;
      ref={ref}
      className={cn(;"
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",;"
        isActive && "z-10 ring-2 ring-ring ring-offset-background",;
        className;
      )}
      {...props}
    >;
      {char}
      {hasFakeCaret && (;"
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">;"
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />;
        </div>;
      )}
    </div>;
  );
});"
InputOTPSlot.displayName = "InputOTPSlot";
;
const InputOTPSeparator = React.forwardRef<;"
  React.ElementRef<"div">,;"
  React.ComponentPropsWithoutRef<"div">;
>(({ ...props }, ref) => (;"
  <div ref={ref} role="separator" {...props}>;
    <Dot />;
  </div>;
));"
InputOTPSeparator.displayName = "InputOTPSeparator";
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } const InputOTP = React.forwardRef< React.ElementRef<typeof OTPInput>;
React.ComponentPropsWithoutRef<typeof OTPInput> > ( ({}
  className, containerClassName, ...props "
}, ref) => (<OTPInput />) ) InputOTP.displayName = "InputOTP") ) InputOTPGroup.displayName = "InputOTPGroup") 
}{}
  ...props;
}> </div>) 
}</div>) "
}) InputOTPSlot.displayName = "InputOTPSlot" <Dot /> </div>) ) InputOTPSeparator.displayName = "InputOTPSeparator" export {};
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator;
}
>(({ ...props }, ref) => ("
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));'
InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
))"
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
