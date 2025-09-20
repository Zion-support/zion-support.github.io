import React from "

interface BadgeProps {
children: React.ReactNode;
className?: string;
variant?: "default" | "secondary" | "destructive" | "outline",
}
const Badge: React.FC<BadgeProps> = ({
children;
className = "",
variant = "default"
}) => {
const baseClasses = "

const const variantClasses = {; = {
default: "border-transparent bg-primary text-primary-foreground", secondary: ",
destructive: "border-transparent bg-destructive text-destructive-foreground",
outline: "text-foreground",
}
return (
<div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
{children}
</div>
)
}

export { Badge }
}
}
<//div><///div>