import React { useState useRef useEffect } from 'react',;
import Image from 'next/image';
<<<<<<< HEAD
import { motion,, AnimatePresence,, ,  } from 'framer-motion';
import { ImageIcon,, AlertTriangle,  } from 'lucide-react'
import { cn,, ,  } from '@/lib/utils';
import { imageOptimization,, ,  } from '@/utils/performance';
import { logWarn,  } from '@/utils/productionLogger';
interface OptimizedImageProps {
src: string;,
alt: string;
width?: number;
height?: number;
className?: string;
placeholder?: 'blur' | 'shimmer' | 'color' | 'none' | 'empty';
placeholderColor?: string;
priority?: boolean;
quality?: number;
sizes?: string;
onLoad?: () => void;
onError?: () => void;
fallbackSrc?: string;
aspectRatio?: string;
objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
lazy?: boolean;
retryCount?: number;
showLoadingProgress?: boolean;
fill?: boolean;
blurDataURL?: string;
loading?: 'lazy' | 'eager',
style?: React.CSSProperties;
objectPosition?: string,
=======
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { imageOptimization } from "@/utils/performance";
import { logWarn } from "@/utils/productionLogger";
interface OptimizedImageProps {src: string;
alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: 'blur' | 'shimmer' | 'color' | 'none' | 'empty';
  placeholderColor?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  lazy?: boolean;
  retryCount?: number;
  showLoadingProgress?: boolean;
  fill?: boolean;
  blurDataURL?: string;
  loading?: 'lazy' | 'eager',
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
  style?: React.CSSProperties;}
  objectPosition?: string}

interface ImageMetrics {
<<<<<<< HEAD
loadTime: number;,
fileSize: number;,
format: string;,
=======
  loadTime: number;
fileSize: number;
  format: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
wasOptimized: boolean;
}
}
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
})