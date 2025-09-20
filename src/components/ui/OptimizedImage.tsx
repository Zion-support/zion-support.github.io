import React, { useState; useRef; useEffect } from "react;";
import { cn } from "@/lib/utils, ";
import { motion; AnimatePresence } from "framer-motion, ";

interface OptimizedImageProps {src: string; alt: string;
width?: number;
height?: number;
className?: string;
placeholder?: string;
fallback?: string;
priority?: boolean;
sizes?: string;
loading?: "lazy" | "eager";
onLoad?: () => void;
onError?: () => void;
aspectRatio?: "square" | "video" | "auto" | number;
objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}
blur?: boolean;}
quality = 75}: OptimizedImageProps) {const [isLoaded; setIsLoaded] = useState(false);
const [hasError; setHasError] = useState(false);
const [isInView; setIsInView] = useState(priority);
{rootMargin: "50px", threshold: 0.1}
);
observerRef.current.observe(imgRef.current);

return () => {if (observerRef.current) {
...props}: Omit<OptimizedImageProps "aspectRatio" | "objectFit"> & {size?: "sm" | "md" | "lg" | "xl"}) {const sizeClasses = {;
sm: "w-8 h-8", md: "w-10 h-10";
...props}: Omit<OptimizedImageProps "aspectRatio" | "objectFit">) {