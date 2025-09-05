<<<<<<< HEAD
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";
;
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";
;
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
;
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({;
  size:"default",;
  variant:"default"});
;
const ToggleGroup = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &;
    VariantProps<typeof toggleVariants>;
>(({ className, variant, size, children, ...props }, ref) => (;
  <ToggleGroupPrimitive.Root;
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >;
    <ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive.Root>;
));
;
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
;
const ToggleGroupItem = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &;
    VariantProps<typeof toggleVariants>;
>(({ className, children, variant, size, ...props }, ref) => {;
  const context = React.useContext(;
    ToggleGroupContext;
  ) as ToggleGroupContextProps;
;
  return (;
    <ToggleGroupPrimitive.Item;
      ref={ref}
      className={cn(;
        toggleVariants({;
          variant:context.variant || variant,;
          size:context.size || size}),;
        className;
      )}
      {...props}
    >;
      {children}
    </ToggleGroupPrimitive.Item>;
  );
});
;
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
;
export { ToggleGroup, ToggleGroupItem }
=======
import * as React from &quot;react&quot;
import * as ToggleGroupPrimitive from &quot;@radix-ui/react-toggle-group&quot;
import { type VariantProps } from &quot;class-variance-authority&quot;

import { cn } from &quot;@/lib/utils&quot;
import { toggleVariants } from &quot;@/components/ui/toggle&quot;

type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: &quot;default&quot;,
  variant: &quot;default&quot})
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(_({className, variant, size, children, _...props}, ref) => (
  <ToggleGroupPrimitive.Root,
ref={ref}
    className={cn(&quot;flex items-center justify-center gap-1&quot;, className)}
    {...props}  >
    <ToggleGroupContext.Provider value={_{ variant, size}}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName,
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(_({className, children, variant, size, _...props}, ref) => {const context = React.useContext(
    ToggleGroupContext
  ) as ToggleGroupContextProps,
return (
    <ToggleGroupPrimitive.Item,
ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant, size: context.size || size}),
        className
      )}
      {_...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName,
export {ToggleGroup, ToggleGroupItem}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
