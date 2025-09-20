import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  Zap,
  Sparkles,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Shield
} from "lucide-react"
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  fullScreen?: boolean,
}

export function LoadingSpinner({
  size = 'md'
  text = 'Loading...'
  fullScreen = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',md: 'w-16 h-16',lg: 'w-32 h-32'
  }
  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-zion-slate-dark/95 backdrop-blur-sm z-50'
    : 'flex items-center justify-center p-8'
  return (
    <div className={containerClasses}>
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="relative mx-auto mb-4"
          animate={
            rota,
  t: e: 360,sca,
  l: e: [1, 1.1, 1]
          }
          transition={
            rota,
  t: e: { duratio,
  n: 2, repe,
  a: t: Infinity, ea,
  s: e: "linear" }
            sca,
  l: e: { duratio,
  n: 2, repe,
  a: t: Infinity, ea,
  s: e: "easeInOut" }
          }
        >
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center relative overflow-hidden`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue"
              animate={
                backgrou,
  n: d: [
                  'linear-gradient(45deg, #0ea5e9, #8b5cf6, #0ea5e9)linear-gradient(45deg, #8b5cf6, #0ea5e9, #8b5cf6)',
                  'linear-gradient(45deg, #0ea5e9, #8b5cf6, #0ea5e9)'
                ]
              }
              transition={ durati,
  o: n: 3, repe,
  a: t: Infinity }
            />
            <span className="text-2xl font-bold text-white relative z-10">Z</span>
          </div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50"
            animate={ opaci,
  t: y: [0.3, 0.6, 0.3] }
            transition={ durati,
  o: n: 2, repe,
  a: t: Infinity }
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-zion-cyan font-medium"
          animate={ opaci,
  t: y: [0.5, 1, 0.5] }
          transition={ durati,
  o: n: 1.5, repe,
  a: t: Infinity }
        >
          {text}
        </motion.div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-3 space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={
                sca,
  l: e: [1, 1.5, 1],
                opaci,
  t: y: [0.5, 1, 0.5]
              }
              transition={
                durati,
  o: n: 1.5,repe,
  a: t: Infinity,del,
  a: y: index * 0.2
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface PageLoaderProps {
  pageName?: string,
}

export function PageLoader({ pageName = 'Page' }: PageLoaderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center">
      <div className="text-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-zion-cyan/20 rounded-full"
            animate={
              sca,
  l: e: [1, 1.5, 1]
              opaci,
  t: y: [0.3, 0.6, 0.3]
            }
            transition={ durati,
  o: n: 4, repe,
  a: t: Infinity }
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-zion-purple/20 rounded-full"
            animate={
              sca,
  l: e: [1.5, 1, 1.5]
              opaci,
  t: y: [0.6, 0.3, 0.6]
            }
            transition={ durati,
  o: n: 4, repe,
  a: t: Infinity, del,
  a: y: 1 }
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.5 }
          className="relative z-10"
        >
          <div className="relative">
            <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full mx-auto mb-6"></div>
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full"
              animate={ rota,
  t: e: 360 }
              transition={ durati,
  o: n: 1, repe,
  a: t: Infinity, ea,
  s: e: "linear" }
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-xl">
              ZION
            </div>
          </div>

          <motion.h2
            className="text-2xl font-bold text-white mb-2"
            animate={ opaci,
  t: y: [0.7, 1, 0.7] }
            transition={ durati,
  o: n: 2, repe,
  a: t: Infinity }
          >
            Loading {pageName}
          </motion.h2>

          <motion.p
            className="text-zion-slate-light"
            animate={ opaci,
  t: y: [0.5, 1, 0.5] }
            transition={ durati,
  o: n: 2, repe,
  a: t: Infinity, del,
  a: y: 0.5 }
          >
            Please wait while we prepare everything for you...
          </motion.p>

          {/* Progress Bar */}
          <div className="mt-6 w-64 mx-auto">
            <div className="bg-zion-slate-light/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
                initial={ wid,
  t: h: 0 }
                animate={ wid,
  t: h: "100%" }
                transition={ durati,
  o: n: 3, ea,
  s: e: "easeInOut" }
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

interface SkeletonLoaderProps {
  lines?: number,
  className?: string,
}

export function SkeletonLoader({ lines = 3, className = '' }: SkeletonLoaderProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ leng,
  t: h: lines }).map((_, index) => (
        <motion.div
          key={index}
          className="h-4 bg-zion-slate-light/20 rounded"
          animate={
            opaci,
  t: y: [0.5, 1, 0.5]
            backgroundPositi,
  o: n: ['200% 0-200% 0']
          }
          transition={
            durati,
  o: n: 1.5,repe,
  a: t: Infinity,del,
  a: y: index * 0.1
          }
          style={
            backgrou,
  n: d: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1); transparent)',
            backgroundSi,
  z: e: '200% 100%'
          }
        />
      ))}
    </div>
  )
}
