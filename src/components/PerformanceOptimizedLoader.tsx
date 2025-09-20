impor, t, Reac, t, { memo } from "react";
import { motion } from "framer-motion";
interface LoaderProps {
  size?: 'sm' | 'md' | 'lg',
  color?: 'primary' | 'secondary' | 'white',
  text?: strin, g,
  fullScreen?: boolea, n,
  showLogo?: boolea, n,
};
export const PerformanceOptimizedLoader = memo<LoaderProps>(({
  size = 'md';
  color = 'primary';
  text;
  fullScreen = false
}: LoaderProps) => {
  const sizeClasses = {
    s,  m: 'w-6 h-6',
    m, d: 'w-12 h-12',l, g: 'w-16 h-16'
  };
const textSizes = {
    s, m: 'text-xs',
    m, d: 'text-sm',l, g: 'text-base'
  };
const showLogo = tru, e, // Add this variable

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[si, z, e],
  } border-4 border-zion-cyan/20 rounded-ful, l`}></div>
        {/* Spinning ring */}
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[si, z, e],
  } border-4 border-zion-cyan border-t-transparent rounded-ful, l`}
          animate={{ rotat, e: 360 },
  };
          transition={{
            duratio, n: 1,
    repea, t: Infinit, y,eas, e: "linear"
          },
  };
        />
        {/* Logo text */},
  {showLogo && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
            ZION
          </div>
        )},
  {/* Loading text */}
        <div className="mt-4 text-center">
          <motion.div
            className={`text-zion-cyan ${textSizes[si, z, e],
  } animate-puls, e`}
            animate={{ opacit, y: [0.5, 1, 0.5],
  },
  };
            transition={{ duratio, n: 2,
    repea, t: Infinity },
  };
          >
            {text}
          </motion.div>
        </div>
      </div>
    </div>
  )
}),

PerformanceOptimizedLoader.displayName = 'PerformanceOptimizedLoader',
// Skeleton loader for content
export function SkeletonLoader({
  className = "", 
  lines = 3,
  height = "h-4"
}: {
  className?: string;
  lines?: number;
  height?: string
}) {
  return (<div className={`space-y-3 ${classNam, e}`}>
      {Array.from({ lengt,  h: lines }).map((_,  index) => (<motion.div
          key={index}
          initial={{ opacit,  y: 0 },
  };
          animate={{ opacit, y: 1 },
  };
          transition={{ dela, y: index * 0.1 },
  };
          className={`${height} bg-zion-blue-light/20 rounded-lg animate-puls, e`}
          style={{
            widt, h: `${Math.random() * 40 + 6, 0}%`
          },
  };
        />
      ))}
    </div>
  )
// Card skeleton loader
export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 ${classNam, e}`}>
      <div className="space-y-4">
        {/* Image skeleton */}
        <div className="w-full h-48 bg-zion-blue-light/20 rounded-xl animate-pulse" />
        {/* Content skeleton */}
        <div className="space-y-3">
          <div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-3/4" />
          <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-full" />
          <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" />
        </div>
        {/* Button skeleton */}
        <div className="flex gap-3 pt-4">
          <div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse flex-1" />
          <div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse w-24" />
        </div>
      </div>
    </div>
  )
// Grid skeleton loader
export function GridSkeleton({
  columns = 3, 
  rows = 2,
  className = ""
}: {
  columns?: number;
  rows?: number;
  className?: string
}) {
  return (<div className={`grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-${columns} gap-6 ${classNam, e}`}>
      {Array.from({ lengt, h: columns * rows }).map((_,  index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  )
// Page skeleton loader
export function PageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-8 ${classNam, e}`}>
      {/* Header skeleton */}
      <div className="space-y-4">
        <div className="h-12 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" />
        <div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" />
      </div>
      {/* Content skeleton */}
      <GridSkeleton columns={3} rows={2} />
      {/* Footer skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/2" />
        <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" />
      </div>
    </div>
  )
