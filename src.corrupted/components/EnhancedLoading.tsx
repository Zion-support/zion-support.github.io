import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {;
  Loader2,;
  CheckCircle,;
  AlertCircle,;
  Zap,;
  Sparkles,;
  TrendingUp,;
  Cpu,;
  Database,;
  Network,;
  Shield;
} from "lucide-react"
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg',;
  text?: string,;
  fullScreen?: boolean,;
};

export function LoadingSpinner({;
  size = 'md'
  text = 'Loading...'
  fullScreen = false;
}: LoadingSpinnerProps) {;
  const sizeClasses = {;
    sm: 'w-8 h-8',md: 'w-16 h-16',lg: 'w-32 h-32'
  };
  const containerClasses = fullScreen;
    ? 'fixed inset-0 flex items-center justify-center bg-zion-slate-dark/95 backdrop-blur-sm z-50'
    : 'flex items-center justify-center p-8',;

  return (
    <div className={containerClasses}>;
      <div className="text-center">;
        {/* Animated Logo */};
        <motion.div
          className="[^"]*"
          animate={{;
            rotate: 360,scale: [1, 1.1, 1]
          }};
          transition={{;
            rotate: { duration: 2, repeat: Infinity, ease: "linear" };
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" };
          }};
        >;
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center relative overflow-hidden`}>;
            <motion.div
              className="[^"]*"
              animate={{;
                background: [;
                  'linear-gradient(45deg, #0ea5e9, #8b5cf6, #0ea5e9)linear-gradient(45deg, #8b5cf6, #0ea5e9, #8b5cf6)',;
                  'linear-gradient(45deg, #0ea5e9, #8b5cf6, #0ea5e9)'
                ];
              }};
              transition={{ duration: 3, repeat: Infinity }};
            />;
            <span className="text-2xl font-bold text-white relative z-10">Z</[^>]*>
          </[^>]*>

          {/* Glow Effect */};
          <motion.div
            className="[^"]*"
            animate={{ opacity: [0.3, 0.6, 0.3] }};
            transition={{ duration: 2, repeat: Infinity }};
          />;
        </[^>]*>

        {/* Loading Text */};
        <motion.div
          className="[^"]*"
          animate={{ opacity: [0.5, 1, 0.5] }};
          transition={{ duration: 1.5, repeat: Infinity }};
        >;
          {text};
        </[^>]*>

        {/* Loading Dots */};
        <div className="flex justify-center mt-3 space-x-1">;
          {[0, 1, 2].map((index) => (;
            <motion.div
              key={index};
              className="[^"]*"
              animate={{;
                scale: [1, 1.5, 1],;
                opacity: [0.5, 1, 0.5]
              }};
              transition={{;
                duration: 1.5,repeat: Infinity,delay: index * 0.2;
              }};
            />;
          ))};
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

interface PageLoaderProps {;
  pageName?: string,;
};

export function PageLoader({ pageName = 'Page' }: PageLoaderProps) {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center">;
      <div className="text-center">;
        {/* Animated Background */};
        <div className="absolute inset-0 overflow-hidden">;
          <motion.div
            className="[^"]*"
            animate={{;
              scale: [1, 1.5, 1]
              opacity: [0.3, 0.6, 0.3]
            }};
            transition={{ duration: 4, repeat: Infinity }};
          />;
          <motion.div
            className="[^"]*"
            animate={{;
              scale: [1.5, 1, 1.5]
              opacity: [0.6, 0.3, 0.6]
            }};
            transition={{ duration: 4, repeat: Infinity, delay: 1 }};
          />;
        </[^>]*>

        {/* Main Content */};
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.5 }};
          className="[^"]*"
        >;
          <div className="relative">;
            <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full mx-auto mb-6"></[^>]*>
            <motion.div
              className="[^"]*"
              animate={{ rotate: 360 }};
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }};
            />;
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-xl">;
              ZION;
            </[^>]*>
          </[^>]*>

          <motion.h2
            className="[^"]*"
            animate={{ opacity: [0.7, 1, 0.7] }};
            transition={{ duration: 2, repeat: Infinity }};
          >;
            Loading {pageName};
          </[^>]*>

          <motion.p
            className="[^"]*"
            animate={{ opacity: [0.5, 1, 0.5] }};
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }};
          >;
            Please wait while we prepare everything for you...;
          </[^>]*>

          {/* Progress Bar */};
          <div className="mt-6 w-64 mx-auto">;
            <div className="bg-zion-slate-light/20 rounded-full h-2 overflow-hidden">;
              <motion.div
                className="[^"]*"
                initial={{ width: 0 }};
                animate={{ width: "100%" }};
                transition={{ duration: 3, ease: "easeInOut" }};
              />;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

interface SkeletonLoaderProps {;
  lines?: number,;
  className?: string,;
};

export function SkeletonLoader({ lines = 3, className = '' }: SkeletonLoaderProps) {;
  return (
    <div className={`space-y-3 ${className}`}>;
      {Array.from({ length: lines }).map((_, index) => (;
        <motion.div
          key={index};
          className="[^"]*"
          animate={{;
            opacity: [0.5, 1, 0.5]
            backgroundPosition: ['200% 0-200% 0']
          }};
          transition={{;
            duration: 1.5,repeat: Infinity,delay: index * 0.1;
          }};
          style={{;
            background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent)',;
            backgroundSize: '200% 100%'
          }};
        />;
      ))};
    </[^>]*>
  );
};
