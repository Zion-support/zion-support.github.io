import React { useState useRef useEffect } from "react",;
import Image from "next/image";
import { motion; AnimatePresence } from "framer-motion";
import { ImageIcon; AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { imageOptimization } from "@/utils/performance";
import { logWarn } from "@/utils/productionLogger";
<<<<<<< HEAD
interface OptimizedImageProps {src: string;
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIconAlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { imageOptimization } from '@/utils/performance';
import { logWarn } from '@/utils/productionLogger';
interface OptimizedImageProps {
  src: string;,
=======
interface OptimizedImageProps {src: string;,
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
alt: string;
width?: number;
height?: number;
className?: string;
placeholder?: "blur" | "shimmer" | "color" | "none" | "empty";
placeholderColor?: string;
priority?: boolean;
quality?: number;
sizes?: string;
onLoad?: () => void;
onError?: () => void;
fallbackSrc?: string;
aspectRatio?: string;
objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
lazy?: boolean;
retryCount?: number;
showLoadingProgress?: boolean;
fill?: boolean;
blurDataURL?: string;
loading?: "lazy" | "eager",
}
<<<<<<< HEAD
  style?: React.CSSProperties;}
  style?: React.CSSProperties;
  objectPosition?: string}
=======
style?: React.CSSProperties;}
objectPosition?: string}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582

interface ImageMetrics {
loadTime: number;
fileSize: number;,
format: string;,
wasOptimized: boolean;
}
}
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
)