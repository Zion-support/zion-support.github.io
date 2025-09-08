import React from 'react';
import { toast as sonnerToast } from 'sonner';
import { globalToastManager, showToast, ToastType, ToastPriority } from '@/utils/globalToastManager';
const variantStyles = {
  info: { background: '#1e3a8a', color: '#fff' },
  error: { background: '#7f1d1d', color: '#fff' },

// Deduplication settings
const DEDUPE_DELAY = 3000, // 3 seconds
let lastKey = $2;
let lastShown = $2;
interface ToastActionProps {
  label: string,
  onClick: () => void
}

interface ToastProps {
  title?: string,
  description?: string,
  variant?: 'default' | 'destructive' | 'success',
  action?: ToastActionProps,
  onRetry?: () => void,
  id?: string,
  duration?: number,
  priority?: ToastPriority,
  persistent?: boolean
}

const shouldShow = (key: string): boolean => {
  const now = Date.now($2);
  if (key = $2;
  lastShown = $2;
  return true
},

/**
 * Enhanced toast adapter that uses the global toast manager
 */
const toastAdapter = $2;
      type: ToastType.INFO})
  }

  const { 
    title, 
    description, 
    variant = $2;
    action, 
    onRetry, 
    duration,
    priority,
    persistent = $2;
  // Map variant to toast type
  let type: ToastType,
  switch (variant) {
    case 'destructive':
      type = $2;
      break,
    case 'success':
      type = $2;
      break,
    default: type = $2;
      break
  }

  // Use title as message if no description, otherwise use description
  const message = $2;
  const toastTitle = $2;
  return globalToastManager.showToast({
    message,
    title: toastTitle,
    type,
    priority,
    duration,
    persistent,
    action,
    onRetry})
},

// Convenience methods that use the global toast manager
toastAdapter.success = (message: string, options?: { id?: string, duration?: number } & Record<string, any>) => {
  return showToast.success(message, options)
},

toastAdapter.error = (message: string, options?: { id?: string, duration?: number } & Record<string, any>) => {
  return showToast.error(message, options)
},

toastAdapter.info = (message: string, options?: { id?: string, duration?: number } & Record<string, any>) => {
  return showToast.info(message, options)
},

toastAdapter.warning = (message: string, options?: { id?: string, duration?: number } & Record<string, any>) => {
  return showToast.warning(message, options)
},

toastAdapter.dismiss = $2;
// Enhanced useToast hook with global toast manager integration
export const useToast = $2;
  dismiss: (toastId?: string) => {
    if (toastId) {
      globalToastManager.dismissToast(toastId)
    } else {
      globalToastManager.dismissAll()
    }
  },
  
  // Additional methods from global toast manager
  showToast: globalToastManager.showToast.bind($2);
  getActiveToasts: globalToastManager.getActiveToasts.bind($2);
  getQueueLength: globalToastManager.getQueueLength.bind($2);
  dismissAll: globalToastManager.dismissAll.bind($2);
  // Convenience methods
  success: showToast.success,
  error: showToast.error,
  warning: showToast.warning,
  info: showToast.info,
  networkError: showToast.networkError,
  authError: showToast.authError,
  validationError: showToast.validationError,
  criticalError: showToast.criticalError}),

export const toast = $2;