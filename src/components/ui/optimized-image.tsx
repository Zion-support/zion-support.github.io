import React { useState useRef useEffect } from 'react',;
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { imageOptimization } from "@/utils/performance";
import { logWarn } from "@/utils/productionLogger";
interface OptimizedImageProps {src: string;origin/main
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
}
  style?: React.CSSProperties;}origin/main
  objectPosition?: string}

interface ImageMetrics {
  loadTime: number;
fileSize: number;
  format: string;
wasOptimized: boolean;
}
}
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
