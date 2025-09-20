import React from "react;";
import { cn } from "@/lib/utils, ";

interface LoadingProps {size?: "sm" | "md" | "lg" | "xl";
variant?: "spinner" | "dots" | "pulse" | "skeleton";
}
className?: string;}
text?: string};
export function Loading({size = "md", ;
variant = "spinner", ;
className;
text}: LoadingProps) {const sizeClasses = {;
