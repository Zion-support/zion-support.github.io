import React from 'react';

interface BadgeProps {children: React.ReactNode;
}
className?: string;}
interface BadgeProps {
children: React.ReactNode;
className?: string;
variant?: "default" | "secondary" | "destructive" | "outline"};
const Badge: React.FC<BadgeProps> = ({
children;
className = "",
variant = "default"
}) => {const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";

export function Badge({ children, className = '' }: BadgeProps) {
return (
<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>;
{children}
</span>;
);
}