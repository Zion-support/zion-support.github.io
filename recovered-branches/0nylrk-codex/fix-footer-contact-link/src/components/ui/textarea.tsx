import * as React from &quot;react&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>

<<<<<<< HEAD
const Textarea = React.forwardRef<HTMLTextAreaElement TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          &quot;flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
          className
=======
const _Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(_({_className, _...props}, _ref) => {_return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
        ref={_ref}
        {_...props}
      />
    )
  }
)
Textarea.displayName = &quot;Textarea&quot;

export {_Textarea}
