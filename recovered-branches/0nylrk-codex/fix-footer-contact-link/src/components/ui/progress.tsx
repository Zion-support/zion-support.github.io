import * as React from &quot;react&quot;
import * as ProgressPrimitive from &quot;@radix-ui/react-progress&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(_({_className, _value, _...props}, _ref) => (
  <ProgressPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative h-4 w-full overflow-hidden rounded-full bg-secondary&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <ProgressPrimitive.Indicator
<<<<<<< HEAD
      className=&quot;h-full w-full flex-1 bg-primary transition-all&quot;
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
=======
      className="h-full w-full flex-1 bg-primary transition-all"
      style={_{ transform: `translateX(-${100 - (value || 0)}%)` }}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export {_Progress}
