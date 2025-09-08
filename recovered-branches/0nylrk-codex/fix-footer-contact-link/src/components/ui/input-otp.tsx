
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>
  React.ComponentPropsWithoutRef<typeof OTPInput>
import React from 'react';



      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}


InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<"
  React.ElementRef<"div">,"
  React.ComponentPropsWithoutRef<"div">


>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <Dot />
  </div>


    </div>;
  );
});
InputOTPSlot && InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React && React.forwardRef<;
  React && React.ElementRef<'div'>,;

  React && React.ComponentPropsWithoutRef<'div'>;
>(({ ...props }, ref) => (;'
  <div ref={ref} role='separator' {...props}>;
    <Dot />;
  </div>;
));'
InputOTPSeparator && InputOTPSeparator.displayName = 'InputOTPSeparator';
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };


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

InputOTPSeparator.display_name = 'InputOTPSeparator';
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
;


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






