import * as React from &quot;react&quot;

import { cn } from &quot;@/lib/utils&quot;

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<&quot;input&quot;>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          &quot;flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&quot;,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = &quot;Input&quot;

export { Input }
