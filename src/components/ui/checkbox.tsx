import React from "react";

interface CheckboxProps {
checked: boolean;,
onChange: (checked: boolean) => void;
label?: string;
disabled?: boolean;
className?: string;
};
export function Checkbox({ checked; onChange; label; disabled = false; className = "" }: CheckboxProps) {
return (
<label className={`flex items-center space-x-2 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>;
<input;
type="checkbox"
checked={checked}
onChange={(e) => onChange(e.target.checked)}
disabled={disabled}
className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan focus:ring-2"
/>;
{label && <span className="text-sm text-gray-700">{label}</span>}
</label>;
import { cn } from "@/lib/utils";

interface CheckboxProps {
checked: boolean;
onCheckedChange?: (checked: boolean) => void;
onChange?: () => void;
className?: string;
disabled?: boolean;
};
export function Checkbox({ checked; onCheckedChange; onChange; className = "", disabled = false }: CheckboxProps) {
const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
if (onCheckedChange) {;
onCheckedChange(e.target.checked);
}
if (onChange) {
onChange();
}
};

return (
<input;
type="checkbox"
checked={checked}
onChange={handleChange}
disabled={disabled}
className={cn(
"h-4 w-4 rounded border-zion-blue-light bg-zion-blue-dark text-zion-cyan focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2",
className;
)}
/>;
);
}</input;
type="checkbox"
checked={checked}
onChange={handleChange}
disabled={disabled}
className={cn(
"h-4 w-4 rounded border-zion-blue-light bg-zion-blue-dark text-zion-cyan focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2",
className;
)}
/><//input;
type="checkbox"
checked={checked}
onChange={handleChange}
disabled={disabled}
className={cn(
"h-4 w-4 rounded border-zion-blue-light bg-zion-blue-dark text-zion-cyan focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2",
className;
)}
/>})
'use client'
import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
></typeof>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root,
ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator,
className={cn('flex items-center justify-center text-current')}
    >
      <Check className='h-3 w-3' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName,
export { Checkbox }
