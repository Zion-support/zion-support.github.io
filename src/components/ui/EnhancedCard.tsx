import React from "react;";
import { cn } from "@/lib/utils, ";

interface EnhancedCardProps {
  
children: React.ReactNode;
className?: string;
variant?: "default" | "elevated" | "outlined" | "gradient";
hover?: boolean;
onClick?: () => void;
as?: React.ElementType;
}
href?: string;}
};
export function EnhancedCard({ ;
children;
className;
variant = "default",
hover = true;
onClick;
as: Component = "div";
href;
}: EnhancedCardProps) {const baseClasses = "rounded-xl transition-all duration-300";

const variantClasses = {;
default: "bg-zion-blue-dark border border-zion-blue-light";
