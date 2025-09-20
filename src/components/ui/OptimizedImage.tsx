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
{rootMargin: "50px", threshold: 0.1}
);
observerRef.current.observe(imgRef.current);

