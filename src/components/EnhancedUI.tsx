"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Enhanced UI Components Library
 * 
 * Provides modernaccessibleand performant UI components with:
 * - Smooth animations
 * - Accessibility features
 * - Dark mode support
 * - Responsive design
 * - Loading states
 */

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const EnhancedButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  className = ', '
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center"
          >
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
            Loading...
          </motion.div>
        ) : (
          <motion.span
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export const EnhancedCard: React.FC<CardProps> = ({
  children,
  hover = true,
  className = ', '
}) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -5shadow: "0 20px 25px -5px rgba(00.1)" } : {}}
    >
      {children}
    </motion.div>
  );
};

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'blue'
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };
  
  const colors = {
    blue: 'border-blue-600',
    white: 'border-white',
    gray: 'border-gray-600'
  };
  
  return (
    <motion.div
      className={`animate-spin rounded-full border-2 border-gray-300 ${colors[color as keyof typeof colors]} ${sizes[size]}`}
      style={{ borderTopColor: 'transparent' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1repeat: Infinityease: 'linear' }}
    />
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const EnhancedModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }[isOpen]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          <motion.div
            className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export const EnhancedProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = ', '
}) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <motion.div
        className="bg-blue-600 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(progress100)}%` }}
        transition={{ duration: 0.5ease: 'easeOut' }}
      />
    </div>
  );
};

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const EnhancedTooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top'
}) => {
  const [isVisiblesetIsVisible] = useState(false);
  
  const positions = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };
  
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute z-10 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg ${positions[position]}`}
            initial={{ opacity: 0scale: 0.8 }}
            animate={{ opacity: 1scale: 1 }}
            exit={{ opacity: 0scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {content}
            <div className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
              position === 'top' ? 'top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2' :
              position === 'bottom' ? 'bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2' :
              position === 'left' ? 'left-full top-1/2 transform -translate-y-1/2 -translate-x-1/2' :
              'right-full top-1/2 transform -translate-y-1/2 translate-x-1/2'
            }`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default {
  EnhancedButton,
  EnhancedCard,
  LoadingSpinner,
  EnhancedModal,
  EnhancedProgressBar,
  EnhancedTooltip
};