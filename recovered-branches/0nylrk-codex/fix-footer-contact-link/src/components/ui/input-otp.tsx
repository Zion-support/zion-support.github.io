const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
import React from 'react';

<<<<<<< HEAD
import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input - otp';
import {Dot} from 'lucide-react';
import {cn} from '@/lib/utils';
=======
<<<<<<< HEAD
import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input-otp';
import {Dot} from 'lucide-react';
import {cn} from '@/lib/utils';
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

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


      containerClassName
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
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50'
      "flex items-center gap-2 has-[:disabled]:opacity-50",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

  <OTPInput
    ref={ref}
    containerClassName={cn(

pr-12325
import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input - otp';
import {Dot} from 'lucide-react';
import {cn} from '@/lib/utils';

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"
>>>>>>> origin/chore/fix-lint-and-merge

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
></typeof>(({ className, containerClassName, ...props }, ref) => (  <OTPInput
    ref={ref}
    containerClassName={cn(      {char}

import * as React from 'react';''
import {OTPInput, OTPInputContext} from 'input - otp';''
import {Dot} from 'lucide-react';''
import {cn} from '@/lib/utils';''
import * as React from "react"""
import { OTPInput, OTPInputContext } from "input-otp"""
import { Dot } from "lucide-react"""
import { cn } from "@/lib/utils""
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
</typeof>
  React.ComponentPropsWithoutRef<typeof OTPInput>
></typeof>(({ className, containerClassName, ...props }, ref) => (
const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
</typeof>
></typeof>(({ className, containerClassName, ...props }, ref) => (
const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
</typeof>
  React && React.ComponentPropsWithoutRef<typeof OTPInput>;
</typeof>)
></typeof>(({ className, containerClassName, ...props }, ref) => (;
  <OTPInput
    ref={ref}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
<<<<<<< HEAD
  />
));
InputOTP.displayName = 'InputOTP';
const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';
const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
    >
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';
const InputOTPSlot = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'

  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50'
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
      "flex items-center gap-2 has-[:disabled]:opacity-50","
      containerClassName;)
    )}"
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
      'flex items-center gap-2 has-[:disabled]:opacity-50
    )}
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';
const InputOTPSlot = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;

  React && React.ComponentPropsWithoutRef<'div'> & { index: number }
</OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>;
</typeof>
  <OTPInput;
    ref={ref}
"
      "flex items-center gap-2 has-[:disabled]:opacity-50","
      containerClassName;)
    )}"
    className={cn('disabled:cursor-not-allowed', className)}'
    {...props}
  <OTPInput;
    ref={ref}
    containerClassName={cn('
      'flex items-center gap-2 has-[:disabled]:opacity-50''
      containerClassName;)
    )}'
    className={cn('disabled:cursor-not-allowed', className)}'
    {...props}'
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';'
const InputOTPSlot = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'
</OTPInput>'
  React && React.ComponentPropsWithoutRef<'div'> & { index: number }'
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React && React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext && inputOTPContext.slots[index];
    >
  return (

      )}
      {...props}
    >;

InputOTP && InputOTP.displayName = 'InputOTP';
  />

))
InputOTP.displayName = "InputOTP"

      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",""
        isActive && "z-10 ring-2 ring-ring ring-offset-background","
        className;)
    >;
</div>
const InputOTPGroup = React && React.forwardRef<;"
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;)
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
      ref={ref}
      className={cn('
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",""
        isActive && "z-10 ring-2 ring-ring ring-offset-background","
        className;)
      )}
      {...props}
    >;

InputOTP && InputOTP.displayName = 'InputOTP';
const InputOTPGroup = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;

  React && React.ComponentPropsWithoutRef<'div'>;
>(({ className, ...props }, ref) => (;'
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;
));'
InputOTPGroup && InputOTPGroup.displayName = 'InputOTPGroup';
<<<<<<< HEAD

const InputOTPSlot = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'

=======
const InputOTPSlot = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  React && React.ComponentPropsWithoutRef<'div'> & { index: number }
</div>
const InputOTPGroup = React && React.forwardRef<;"
  React && React.ElementRef<'div'>,;''
  React && React.ComponentPropsWithoutRef<'div'>;'
>(({ className, ...props }, ref) => (;)'
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;'
</div>
const InputOTPSlot = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;''
  React && React.ComponentPropsWithoutRef<'div'> & { index: number }'
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React && React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext && inputOTPContext.slots[index];
<<<<<<< HEAD

>;

=======
    >;
      {char}
      {hasFakeCaret && (;
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;
        </div>;
      )}

      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
<<<<<<< HEAD
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>
  React.ComponentPropsWithoutRef<'div'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<"
  React.ElementRef<"div">,"
  React.ComponentPropsWithoutRef<"div">
<<<<<<< HEAD
=======

>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <Dot />
  </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>;
  );
});
InputOTPSlot && InputOTPSlot.displayName = 'InputOTPSlot';
<<<<<<< HEAD

const InputOTPSeparator = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;'
=======
const InputOTPSeparator = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  React && React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => (;'
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>;
));'
InputOTPSeparator && InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
<<<<<<< HEAD

InputOTP.displayName = "InputOTP";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      {hasFakeCaret && (;'
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>;'
</div>'
          <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />;'
</div>
        </div>;
    </div>
const InputOTPSeparator = React.forwardRef<'
  React.ElementRef<"div">,""
  React.ComponentPropsWithoutRef<"div">")
>(({ ...props }, ref) => ("
  <div ref={ref} role='separator' {...props}>'
</div>

    <Dot />
</Dot>
  </div>

const InputOTPSeparator = React && React.forwardRef<;'
  React && React.ElementRef<'div'>,;''
  React && React.ComponentPropsWithoutRef<'div'>;')
>(({ ...props }, ref) => (;'
  <div ref={ref} role='separator' {...props}>;'
</div>

    <Dot />;
</Dot>
  </div>;

    </div>;
const InputOTP = React.forward_ref<;
  React.ElementRef < typeof OTPInput>,
  React.ComponentPropsWithoutRef < typeof OTPInput>;)
></typeof>(({ class_name, containerClassName, ...props }, ref) => (
  <OTPInput;
    ref={ref}
    containerClassName={cn ('
      'flex items - center gap - 2 has-[:disabled]:opacity - 50',')
      containerClassName)}'
    className={cn ('disabled:cursor - not - allowed', class_name)}'
    {...props}
  />));
</OTPInput>
const InputOTPGroup = React.forward_ref<;'
  React.ElementRef<'div'>,''
  React.ComponentPropsWithoutRef<'div'>;'
>(({ class_name, ...props }, ref) => ()'
  <div ref={ref} className={cn ('flex items - center', class_name)} {...props} />));'
</div>
const InputOTPSlot = React.forward_ref<;'
  React.ElementRef<'div'>,''
  React.ComponentPropsWithoutRef<'div'> & { index: number }'
>(({ index, class_name, ...props }, ref) => {
  const inputOTPContext = React.useContext (OTPInputContext) as any;
  const { char, hasFakeCaret, is_active } = inputOTPContext.slots[index];
;
    >;
      {char}
      {hasFakeCaret && ('
        <div className='pointer - events - none absolute inset - 0 flex items - center justify - center'>;'
</div>'
          <div className='h - 4 w - px animate - caret - blink bg - foreground duration - 1000' />;'
</div>)
        </div>)}
    </div>);
const InputOTPSeparator = React.forward_ref<;'
  React.ElementRef<'div'>,''
  React.ComponentPropsWithoutRef<'div'>;'
>(({ ...props }, ref) => ('
  <div ref={ref} role='separator' {...props}>;'
</div>
    <Dot />;
</Dot>)
  </div>));
<<<<<<< HEAD
const InputOTPGroup = React.forwardRef<;'
  React.ElementRef<"div">,;""
  React.ComponentPropsWithoutRef<"div">;"
>(({ className, ...props }, ref) => (;)"
  <div ref={ref} className={cn("flex items-center", className)} {...props} />;"
</div>
const InputOTPSlot = React.forwardRef<;"
  React.ElementRef<"div">,;""
  React.ComponentPropsWithoutRef<"div"> & { index:number }"
>(({ index, className, ...props }, ref) => {;
  const inputOTPContext = React.useContext(OTPInputContext) as any;
=======
InputOTPSeparator.display_name = 'InputOTPSeparator';
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
;
=======

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
