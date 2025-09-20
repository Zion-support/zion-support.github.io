import React from "react;";
import { cn } from "@/lib/utils, ";

interface GradientHeadingProps {children: React.ReactNode;
variant?: "primary" | "secondary" | "accent" | "custom";
size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}
className?: string;}
customGradient?: string};
export function GradientHeading({;
children;
variant = "primary",
size = "2xl",
className = "",
customGradient}: GradientHeadingProps) {const getGradientClasses: any = () => {
const gradients = {;
primary: "bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", secondary: "bg-gradient-to-r from-zion-blue via-zion-cyan to-zion-purple bg-clip-text text-transparent";
const sizes = {;
xs: "text-xs", sm: "text-sm";
md: "text-base", lg: "text-lg";