import * as React from &quot;react&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;

<<<<<<< HEAD
const Input = React.forwardRef<HTMLInputElement React.ComponentProps<"input">>(
=======
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<&quot;input&quot;>>(
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          &quot;flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&quot;,
          className
=======

const _Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(_({_className, _type, _...props}, _ref) => {_return (
      <input
        type={type}
        className={_cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
        ref={_ref}
        {_...props}
      />
    )
  }
)
Input.displayName = &quot;Input&quot;

export {_Input}
