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
</select>
);
}

interface SelectItemProps {
