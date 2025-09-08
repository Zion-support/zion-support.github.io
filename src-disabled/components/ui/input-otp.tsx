


const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>

const InputOTP = React && React.forwardRef<;
  React && React.ElementRef<typeof OTPInput>,;
  React && React.ComponentPropsWithoutRef<typeof OTPInput>;
></typeof>(({ className, containerClassName, ...props }, ref) => (;

>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'
      'flex items-center gap-2 [&:has([disabled])]:opacity-50'

      "flex items-center gap-2 [&:has([disabled])]:opacity-50",



      containerClassName

    )}


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
  React.ElementRef<"div">,

  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (



  React.ElementRef<"div">,

  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {}
  const inputOTPContext = React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]



      )}

InputOTPSlot.displayName = "InputOTPSlot"

InputOTPSlot.displayName = "InputOTPSlot"

InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<

  React.ElementRef<"div">,

  React.ComponentPropsWithoutRef<"div">


  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))


