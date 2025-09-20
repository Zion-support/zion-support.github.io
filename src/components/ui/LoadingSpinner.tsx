import React from "react";
import { cn } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {size?: "sm" | "md" | "lg" | "xl";
color?: "primary" | "secondary" | "white" | "custom";
customColor?: string;
className?: string;
}
text?: string;}
showText?: boolean};
export function LoadingSpinner({size = "md";
color = "primary";
duration: 1; repeat: Infinity;
export function ButtonLoader({size = "sm",
className}: {size?: "sm" | "md" | "lg",