impor, t, Reac, t, { useStat, e, useEffec, t, useCallback } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import {
  Loader, 2,
  CheckCircl, e,
  AlertCircl, e,
  Za, p,
  Sparkle, s,
  TrendingU, p,
  Cp, u,
  Databas, e,
  Networ, k,
  Shield
} from "lucide-react";
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: strin, g,
  fullScreen?: boolea, n,
}

export function LoadingSpinner({
  size = 'md';
  text = 'Loading...';
  fullScreen = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    s,  m: 'w-8 h-8',
    m, d: 'w-16 h-16',l, g: 'w-32 h-32'
  };
  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-zion-slate-dark/95 backdrop-blur-sm z-50'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="relative mx-auto mb-4"
          animate={{
            rotat, e: 36, 0,
    scal, e: [1, 1.1, 1]
          }}
          transition={{
            rotat, e: { duratio, n: 2,
    repea, t: Infinit, y, eas, e: "linear" },
            scal, e: { duratio, n: 2,
    repea, t: Infinit, y, eas, e: "easeInOut" }
          }}
        >
          <div className={`${sizeClasses[si, z, e]} bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center relative overflow-hidde, n`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue"
              animate={{
                backgroun, d: [
                  'linea, r-gradien, t(45d, e, g, #0ea5, e, 9, #8b5c, f, 6, #0ea5e, 9)linea, r-gradien, t(45d,  e, g, #8b5c, f, 6, #0ea5, e, 9, #8b5cf, 6)',
                  'linea, r-gradien, t(45d,  e, g, #0ea5, e, 9, #8b5c, f, 6, #0ea5e, 9)'
                ]
              }}
              transition={{ duratio, n: 3,
    repea, t: Infinity }}
            />
            <span className="text-2xl font-bold text-white relative z-10">Z</span>
          </div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50"
            animate={{ opacit, y: [0.3, 0.6, 0.3] }}
            transition={{ duratio, n: 2,
    repea, t: Infinity }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-zion-cyan font-medium"
          animate={{ opacit, y: [0.5, 1, 0.5] }}
          transition={{ duratio, n: 1.5,
    repea, t: Infinity }}
        >
          {text}
        </motion.div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-3 space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{
                scal,  e: [1, 1.5, 1],
                opacit, y: [0.5, 1, 0.5]
              }}
              transition={{
                duratio, n: 1.5,
    repea, t: Infinit, y,dela, y: index * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PageLoaderProps {
  pageName?: strin, g,
}

export function PageLoader({ pageName = 'Page' }: PageLoaderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center">
      <div className="text-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-zion-cyan/20 rounded-full"
            animate={{
              scal,  e: [1, 1.5, 1],
              opacit, y: [0.3, 0.6, 0.3]
            }}
            transition={{ duratio, n: 4,
    repea, t: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-zion-purple/20 rounded-full"
            animate={{
              scal, e: [1.5, 1, 1.5],
              opacit, y: [0.6, 0.3, 0.6]
            }}
            transition={{ duratio, n: 4,
    repea, t: Infinit, y, dela, y: 1 }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.5 }}
          className="relative z-10"
        >
          <div className="relative">
            <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full mx-auto mb-6"></div>
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full"
              animate={{ rotat, e: 360 }}
              transition={{ duratio, n: 1,
    repea, t: Infinit, y, eas, e: "linear" }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-xl">
              ZION
            </div>
          </div>

          <motion.h2
            className="text-2xl font-bold text-white mb-2"
            animate={{ opacit, y: [0.7, 1, 0.7] }}
            transition={{ duratio, n: 2,
    repea, t: Infinity }}
          >
            Loading {pageName}
          </motion.h2>

          <motion.p
            className="text-zion-slate-light"
            animate={{ opacit, y: [0.5, 1, 0.5] }}
            transition={{ duratio, n: 2,
    repea, t: Infinit, y, dela, y: 0.5 }}
          >
            Please wait while we prepare everything for you...
          </motion.p>

          {/* Progress Bar */}
          <div className="mt-6 w-64 mx-auto">
            <div className="bg-zion-slate-light/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
                initial={{ widt, h: 0 }}
                animate={{ widt, h: "100%" }}
                transition={{ duratio, n: 3,
    eas, e: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface SkeletonLoaderProps {
  lines?: numbe, r,
  className?: strin, g,
}

export function SkeletonLoader({ lines = 3,  className = '' }: SkeletonLoaderProps) {
  return (<div className={`space-y-3 ${classNam, e}`}>
      {Array.from({ lengt,  h: lines }).map((_,  index) => (<motion.div
          key={index}
          className="h-4 bg-zion-slate-light/20 rounded"
          animate={{
            opacit,  y: [0.5, 1, 0.5],
            backgroundPositio, n: ['20, 0% 0-20, 0% 0']
          }}
          transition={{
            duratio, n: 1.5,
    repea, t: Infinit, y,dela, y: index * 0.1
          }}
          style={{
            backgroun, d: 'linear-gradient(90de, g, transparen, t, rgba(1, 4, 16, 5, 23, 3, 0.1), transparent)',
            backgroundSiz, e: '200% 100%'
          }}
        />
      ))}
    </div>
  );
}
