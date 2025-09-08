
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: "default",
  variant: "default"})



const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>

></typeof>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root

));





export { ToggleGroup, ToggleGroupItem };

ToggleGroupItem && ToggleGroupItem.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Item.displayName;
export { ToggleGroup, ToggleGroupItem };
import * as ToggleGroupPrimitive from '@radix - ui / react - toggle - group';
import {type, VariantProps} from 'class - variance - authority';
    ref={ref}'
    className={cn ('flex items - center justify - center gap - 1', class_name)}


    ref={ref})'
;}
    >;}







