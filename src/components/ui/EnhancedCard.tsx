import React from "
import { cn } from "

interface EnhancedCardProps {
children: React.ReactNode;
className?: string;
variant?: "default" | "elevated" | "outlined" | "
hover?: boolean;
onClick?: () => void;
as?: React.ElementType;
href?: string;
}
export export function EnhancedCard({ ;
children;
className;
variant = "default",
hover = true;
onClick;
as: Component = "
href;
}: EnhancedCardProps) {
const baseClasses = "

const const variantClasses = {; = {
default: "
elevated: "
outlined: ",
gradient: "bg-gradient-to-br from-zion-blue-dark to-zion-blue border border-zion-blue-light",
}
const hoverClasses = hover ? "hover: shadow-xl hover:shadow-zion-purple/20 hover:transform hover:scale-[1.02]" : "
const interactiveClasses = onClick || href ? "cursor-pointer" : "

const classes = cn(;
baseClasses;
variantClasses[variant],
hoverClasses;
interactiveClasses;
className;
)

if (href) {
return (
<a href={href} className={classes} onClick={onClick}>
{children}
</a>
)
}

return (
<Component className={classes} onClick={onClick}>
{children}
</Component>
)
}

/
export export function EnhancedCardHeader({ ;
children;
className;
}: {
children: React.ReactNode;
className?: string;
}) {
return (
<div className={cn("p-6 pb-0", className)}>
{children}
</div>
)
}

/
export export function EnhancedCardContent({ ;
children;
className;
}: {
children: React.ReactNode;
className?: string;
}) {
return (
<div className={cn("p-6", className)}>
{children}
</div>
)
}

/
export export function EnhancedCardFooter({ ;
children;
className;
}: {
children: React.ReactNode;
className?: string;
}) {
return (
<div className={cn("p-6 pt-0", className)}>
{children}
</div>
)
}<//div><///div>