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
<<<<<<< HEAD
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary"
  };
  
    sm: "h-9 px-3 text-sm",
    md: "h-10 py-2 px-4",
    lg: "h-11 px-8 text-lg",
    icon: "h-10 w-10"
  };
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps {
children: React.ReactNode;
variant?: "default" | "outline" | "ghost" | "link";
size?: "sm" | "md" | "lg" | "icon";
asChild?: boolean;
className?: string;
onClick?: () => void;
type?: "button" | "submit" | "reset";
disabled?: boolean;
}

export function Button({
children,
variant = "default",
size = "md",
asChild = false,
className = "",
onClick,
type = "button",
disabled = false,
...props;
}: ButtonProps) {
const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

export { Button, buttonVariants };
=======
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
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
