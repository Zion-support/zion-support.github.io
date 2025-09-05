import * as React from "react"


const _buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {_variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90", _destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90", _outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground", _secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80", _ghost: "hover:bg-accent hover:text-accent-foreground", _link: "text-primary underline-offset-4 hover:underline"},
      size: {_default: "h-10 px-4 py-2", _sm: "h-9 rounded-md px-3", _lg: "h-11 rounded-md px-8", _icon: "h-10 w-10"}},
    defaultVariants: {_variant: "default", _size: "default"}}
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {_asChild?: boolean}

const _Button = React.forwardRef<HTMLButtonElement, ButtonProps>(_({_className, _variant, _size, _asChild = false, _...props}, _ref) => {_const _Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, _size, _className}))}
        ref={_ref}
        {_...props}
      />
    )
  }
)
Button.displayName = "Button"

export {_Button, _buttonVariants}
