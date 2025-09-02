ursor/automate-test-fix-improve-and-merge-code-48f3

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
ursor/automate-test-fix-improve-and-merge-code-48f3
        ref={ref}
        {...props}
      />
    );
  }
ursor/automate-test-fix-improve-and-merge-code-48f3
