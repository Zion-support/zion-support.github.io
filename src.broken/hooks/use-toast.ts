import React from 'react';

const _variantStyles = {_info: { background: '#1e3a8a', _color: '#fff'},
  error: {_background: '#7f1d1d', _color: '#fff'}};

// Deduplication settings
const _DEDUPE_DELAY = 3000; // 3 seconds
let _lastKey = '';
let _lastShown = 0;

interface ToastActionProps {_label: string;
  onClick: () => void;}

interface ToastProps {_title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  action?: ToastActionProps;
  onRetry?: () => void;
  id?: string;
  duration?: number;
  priority?: ToastPriority;
  persistent?: boolean;}

const _shouldShow = (key: string): boolean => {_const _now = Date.now();
  if (key === lastKey && (now - lastShown) < DEDUPE_DELAY) {
    return false;}
  lastKey = key;
  lastShown = now;
  return true;
};

/**
 * Enhanced toast adapter that uses the global toast manager
 */
const _toastAdapter = (_props: ToastProps | string) => {_if (typeof props === 'string') {
    return globalToastManager.showToast({
      message: props, _type: ToastType.INFO});
  }

  const {_title, _description, _variant = 'default', _action, _onRetry, _duration, _priority, _persistent = false} = props;

  // Map variant to toast type
  let type: ToastType;
  switch (variant) {_case 'destructive':
      type = ToastType.ERROR;
      break;
    case 'success':
      type = ToastType.SUCCESS;
      break;
    default:
      type = ToastType.INFO;
      break;}

  // Use title as message if no description, otherwise use description
  const _message = description || title || '';
  const _toastTitle = title && description ? title : undefined;

  return globalToastManager.showToast({_message, _title: toastTitle, _type, _priority, _duration, _persistent, _action, _onRetry});
};

// Convenience methods that use the global toast manager
toastAdapter.success = (_message: string, _options?: {_id?: string; duration?: number} & Record<string, _any>) => {_return showToast.success(message, _options);};

toastAdapter.error = (_message: string, _options?: {_id?: string; duration?: number} & Record<string, _any>) => {_return showToast.error(message, _options);};

toastAdapter.info = (_message: string, _options?: {_id?: string; duration?: number} & Record<string, _any>) => {_return showToast.info(message, _options);};

toastAdapter.warning = (_message: string, _options?: {_id?: string; duration?: number} & Record<string, _any>) => {_return showToast.warning(message, _options);};

toastAdapter.dismiss = (_toastId?: string | number) => {_if (toastId) {
    globalToastManager.dismissToast(String(toastId));} else {_globalToastManager.dismissAll();}
};

// Enhanced useToast hook with global toast manager integration
export const _useToast = () => (_{_toast: toastAdapter, _dismiss: (toastId?: string) => {
    if (toastId) {
      globalToastManager.dismissToast(toastId);} else {_globalToastManager.dismissAll();}
  },
  
  // Additional methods from global toast manager
  showToast: globalToastManager.showToast.bind(globalToastManager),
  getActiveToasts: globalToastManager.getActiveToasts.bind(globalToastManager),
  getQueueLength: globalToastManager.getQueueLength.bind(globalToastManager),
  dismissAll: globalToastManager.dismissAll.bind(globalToastManager),
  
  // Convenience methods
  success: showToast.success,
  error: showToast.error,
  warning: showToast.warning,
  info: showToast.info,
  networkError: showToast.networkError,
  authError: showToast.authError,
  validationError: showToast.validationError,
  criticalError: showToast.criticalError});

export const _toast = toastAdapter;
