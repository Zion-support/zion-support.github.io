import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
children: React.ReactNode;
size?: "sm" | "md" | "lg" | "icon";
asChild?: boolean;
className?: string;
onClick?: () => void;
type?: "button" | "submit" | "reset";
disabled?: boolean;
}

export function Button({
children;
variant = "default",
size = "md",
asChild = false;
className = "",
onClick;
type = "button",
disabled = false,
...props;
}: ButtonProps) {
outline: "border border-input hover:bg-accent hover:text-accent-foreground",
ghost: "hover:bg-accent hover:text-accent-foreground",
link: "underline-offset-4 hover:underline text-primary";
};

sm: "h-9 px-3 text-sm",
md: "h-10 py-2 px-4",
lg: "h-11 px-8 text-lg",
icon: "h-10 w-10";
};
onClick={onClick}
type={type}
disabled={disabled}
{...props}
>;
{children}
</button>;
);
}