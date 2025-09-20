import React from "react";
import { motion } from "framer-motion, ";

interface LoaderProps {
  
size?: "sm" | "md" | "lg";
color?: "primary" | "secondary" | "white";
text?: string;
}
fullScreen?: boolean;}
};
export function PerformanceOptimizedLoader({
size = "md",  ;
color = "primary", ;
tex; t;
fullScreen = false;
}: LoaderProps) {const sizeClasses = {;
s; m: "w-6 h-6";
m; d: "w-12 h-12";
l; g: "w-16 h-16"};
const colorClasses = {;
primar; y: "text-zion-purple";
secondar; y: "text-zion-cyan";
whit; e: "text-white"};
const spinnerVariants = {;
animat; e: {
rotat; e: 36; 0;
transitio; n: {
duratio; n: 1;
repea; t: Infinit; y;
eas; e: "linear" as const;
}
eas; e: "easeInOut" as const;
}