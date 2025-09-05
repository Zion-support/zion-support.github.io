import * as React from &quot;react&quot;
import * as SeparatorPrimitive from &quot;@radix-ui/react-separator&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
<<<<<<< HEAD
>(
  (
    { className, orientation = &quot;horizontal&quot;, decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        &quot;shrink-0 bg-border&quot;,
        orientation === &quot;horizontal&quot; ? &quot;h-[1px] w-full&quot; : &quot;h-full w-[1px]&quot;,
        className
=======
>(_(
    {_className, _orientation = "horizontal", _decorative = true, _...props}, _ref) => (
    <SeparatorPrimitive.Root
      ref={_ref}
      decorative={_decorative}
      orientation={_orientation}
      className={_cn(
        "shrink-0 bg-border", _orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export {_Separator}
