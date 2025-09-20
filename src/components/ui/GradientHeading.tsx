import React from "react;";
import { cn } from "@/lib/utils, ";

interface GradientHeadingProps {children: React.ReactNode;
variant?: "primary" | "secondary" | "accent" | "custom";
size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
<<<<<<< HEAD
className?: string;
customGradient?: string};
export function GradientHeading({ ;
=======
}
className?: string;}
customGradient?: string};
export function GradientHeading({;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
children;
variant = "primary",
size = "2xl",
className = "",
<<<<<<< HEAD
customGradient}: GradientHeadingProps) {
const getGradientClasses: any = () => {
const gradients = {;,
primary: "bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", secondary: "bg-gradient-to-r from-zion-blue via-zion-cyan to-zion-purple bg-clip-text text-transparent";,
=======
customGradient}: GradientHeadingProps) {const getGradientClasses: any = () => {
const gradients = {;
primary: "bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", secondary: "bg-gradient-to-r from-zion-blue via-zion-cyan to-zion-purple bg-clip-text text-transparent";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
accent: "bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparent",
custom: customGradient || "bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"};
return gradients[variant];
};

const getSizeClasses: any = () => {
<<<<<<< HEAD
const sizes = {;,
xs: "text-xs", sm: "text-sm";,
md: "text-base", lg: "text-lg";,
=======
const sizes = {;
xs: "text-xs", sm: "text-sm";
md: "text-base", lg: "text-lg";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
xl: "text-xl",
"2xl": "text-2xl",
"3xl": "text-3xl",
"4xl": "text-4xl",
"5xl": "text-5xl";
};
"6xl": "text-6xl";
};

return sizes[size];
};

return (
<h1;
className={cn(
"font-bold leading-tight",
getSizeClasses(),
getGradientClasses(),
className,
)}
>;
{children}
</h1>
);
}<//h1><///h1>