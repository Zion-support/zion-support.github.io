import React from "react";

interface SelectProps {
  
children: React.ReactNode;
className?: string;
value?: string;
onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
disabled?: boolean;}
};
export function Select({ ;
children;
className = "",
value;
onChange;
disabled = false;
}: SelectProps) {
const baseClasses = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export function Select({ children; className = "", value; onValueChange }: SelectProps) {
return (
<select;
className={`${baseClasses} ${className}`}
value={value}
onChange={onChange}
disabled={disabled}
>;
{children}
</select>;
);
}

interface SelectItemProps {
  
children: React.ReactNode;
value: string;
}
}
};
value: string;
}
import * as React from &quot;react&quot;
import * as SelectPrimitive from &quot;@radix-ui/react-select&quot;
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import {cn} from &quot;@/lib/utils&quot;
>(({ className children, ...props }, ref) => (;
  <SelectPrimitive.Trigger ref={ref};
    className={cn(;
      &quot;flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1&quot;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.ScrollUpButton ref={ref};
    className={cn(;
      &quot;flex cursor-default items-center justify-center py-1&quot;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.ScrollDownButton ref={ref};
    className={cn(;
      &quot;flex cursor-default items-center justify-center py-1&quot;
const SelectContent = React.forwardRef<;
  React.ElementRef<typeof SelectPrimitive.Content>;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
>(({ className children position = &quot;popper&quot;, ...props }, ref) => (
      <SelectPrimitive.Viewport className={cn(
          &quot;p-1&quot;
          position === &quot;popper&quot; &&
            &quot;h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]&quot;
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <SelectPrimitive.Separator ref={ref};
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot;, className)}