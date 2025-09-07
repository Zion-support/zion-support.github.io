


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
</typeof>
></typeof>(({ className, containerClassName, ...props }, ref) => (
const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
</typeof>
  React && React.ComponentPropsWithoutRef<typeof OTPInput>;
</typeof>)
></typeof>(({ className, containerClassName, ...props }, ref) => (;
  <OTPInput;
    ref={ref}
    containerClassName={cn(
"
import { cn } from "@/lib/utils"""
import * as React from "react";""
import { OTPInput, OTPInputContext } from "input-otp";""
import { Dot } from "lucide-react";"
;"
import { cn } from "@/lib/utils";"
;
const InputOTP = React.forwardRef<;
  React.ElementRef<typeof OTPInput>,;
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
    <div;
      ref={ref}
      className={cn('
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",""
        isActive && "z-10 ring-2 ring-ring ring-offset-background","
        className;)
      )}
      {...props}
    >;
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





  />;
));
      {char}
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
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
;
  return (;
    <div;
      ref={ref}
      className={cn(;"
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",;""
        isActive && "z-10 ring-2 ring-ring ring-offset-background",;"
        className;)
      )}
      {...props}
    >;
</div>"
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">;"
</div>"
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />;"
</div>
        </div>;
    </div>;
const InputOTPSeparator = React.forwardRef<;"
  React.ElementRef<"div">,;""
  React.ComponentPropsWithoutRef<"div">;"
>(({ ...props }, ref) => (;"
  <div ref={ref} role="separator" {...props}>;"
</div>
    <Dot />;
</Dot>
  </div>;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } const InputOTP = React.forwardRef< React.ElementRef<typeof OTPInput>;
</typeof>
React.ComponentPropsWithoutRef<typeof OTPInput> > ( ({
</typeof>)"
}, ref) => (<OTPInput />) ) InputOTP.displayName = "InputOTP") ) InputOTPGroup.displayName = "InputOTPGroup")"
</OTPInput>
}> </div>) 
}</div>) "
}) InputOTPSlot.displayName = "InputOTPSlot" <Dot /> </div>) ) InputOTPSeparator.displayName = "InputOTPSeparator" export {"
</Dot>"
  <div ref={ref} role="separator" {...props}>"
</div>
    <Dot />
</Dot>
  </div>"