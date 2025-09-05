<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react',
=======
import React, {_useState, _useEffect} from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type ToastType = 'success' | 'error' | 'info' | 'warning',

<<<<<<< HEAD
export interface Toast {
  id: string,
  type: ToastType,
  title: string,
  message?: string,
  duration?: number
}

interface ToastProps {
  toast: Toast,
  onRemove: (id: string) => void
}

const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(true),

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false),
      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration || 5000),
=======
export interface Toast {_id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;}

interface ToastProps {_toast: Toast;
  onRemove: (_id: string) => void;}

const ToastItem: React.FC<ToastProps> = (_{_toast, _onRemove}) => {_const [isVisible, _setIsVisible] = useState(true);

  useEffect__(() => {
    const _timer = setTimeout__(() => {
      setIsVisible(false);
      setTimeout__(() => onRemove(toast.id), _300);}, toast.duration || 5000);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove]),

  const _getIcon = () => {_switch (toast.type) {
      case 'success':
<<<<<<< HEAD
        return <CheckCircle className="w-5 h-5 text-green-400" />,
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />,
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />,
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />,
      default: return <Info className="w-5 h-5 text-blue-400" />
=======
        return <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />;
      case 'error':
        return <AlertCircle className=&quot;w-5 h-5 text-red-400&quot; />;
      case 'warning':
        return <AlertCircle className=&quot;w-5 h-5 text-yellow-400&quot; />;
      case 'info':
        return <Info className=&quot;w-5 h-5 text-blue-400&quot; />;
      default:
<<<<<<< HEAD
        return <Info className=&quot;w-5 h-5 text-blue-400&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
        return <Info className="w-5 h-5 text-blue-400" />;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getBorderColor = () => {_switch (toast.type) {
      case 'success':
        return 'border-green-500/20',
      case 'error':
        return 'border-red-500/20',
      case 'warning':
        return 'border-yellow-500/20',
      case 'info':
<<<<<<< HEAD
        return 'border-blue-500/20',
      default: return 'border-blue-500/20'
    }
  },
=======
        return 'border-blue-500/20';
      default:
        return 'border-blue-500/20';}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getBackgroundColor = () => {_switch (toast.type) {
      case 'success':
        return 'bg-green-500/10',
      case 'error':
        return 'bg-red-500/10',
      case 'warning':
        return 'bg-yellow-500/10',
      case 'info':
<<<<<<< HEAD
        return 'bg-blue-500/10',
      default: return 'bg-blue-500/10'
    }
  },

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300, scale: isVisible ? 1 : 0.8 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ duration: 0.3, ease: &quot;easeInOut&quot; }}
      className={`relative p-4 rounded-xl border ${getBorderColor()} ${getBackgroundColor()} backdrop-blur-xl shadow-2xl max-w-sm`}
    >
      <div className=&quot;flex items-start space-x-3&quot;>
        <div className=&quot;flex-shrink-0 mt-0.5&quot;>
          {getIcon()}
        </div>
        <div className=&quot;flex-1 min-w-0&quot;>
          <h4 className=&quot;text-sm font-semibold text-white&quot;>
            {toast.title}
          </h4>
          {toast.message && (
            <p className=&quot;mt-1 text-sm text-white/70&quot;>
=======
        return 'bg-blue-500/10';
      default:
        return 'bg-blue-500/10';}
  };

  return (
    <motion.div
      initial={_{ opacity: 0, _x: 300, _scale: 0.8}}
      animate={_{ opacity: isVisible ? 1 : 0, _x: isVisible ? 0 : 300, _scale: isVisible ? 1 : 0.8}}
      exit={_{ opacity: 0, _x: 300, _scale: 0.8}}
      transition={_{ duration: 0.3, _ease: "easeInOut"}}
      className={_`relative p-4 rounded-xl border ${getBorderColor()} ${_getBackgroundColor()} backdrop-blur-xl shadow-2xl max-w-sm`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {_getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white">
            {_toast.title}
          </h4>
          {_toast.message && (
            <p className="mt-1 text-sm text-white/70">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              {toast.message}
            </p>
          )}
        </div>
        <button
<<<<<<< HEAD
          onClick={() => {
            setIsVisible(false),
            setTimeout(() => onRemove(toast.id), 300)
          }}
          className=&quot;flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200&quot;
=======
          onClick={_() => {
            setIsVisible(false);
            setTimeout__(() => onRemove(toast.id), _300);}}
          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <X className=&quot;w-4 h-4 text-white/60 hover:text-white&quot; />
        </button>
      </div>
      
<<<<<<< HEAD
      {/* Progress bar */}
      <div className=&quot;absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden&quot;>
=======
      {_/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <motion.div
          className={_`h-full ${
            toast.type === 'success' ? 'bg-green-400' :
            toast.type === 'error' ? 'bg-red-400' :
            toast.type === 'warning' ? 'bg-yellow-400' :
<<<<<<< HEAD
            'bg-blue-400'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration || 5000, ease: &quot;linear&quot; }}
=======
            'bg-blue-400'}`}
          initial={_{ width: '100%'}}
          animate={_{ width: '0%'}}
          transition={_{ duration: toast.duration || 5000, _ease: "linear"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </div>
    </motion.div>
  )
},

<<<<<<< HEAD
interface ToastContainerProps {
  toasts: Toast[],
  onRemove: (id: string) => void
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className=&quot;fixed top-4 right-4 z-50 space-y-3&quot;>
=======
interface ToastContainerProps {_toasts: Toast[];
  onRemove: (_id: string) => void;}

export const ToastContainer: React.FC<ToastContainerProps> = (_{_toasts, _onRemove}) => {_return (_<div className="fixed top-4 right-4 z-50 space-y-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={_toast} onRemove={_onRemove} />
        ))}
      </AnimatePresence>
    </div>
  )
},

// Hook for managing toasts
<<<<<<< HEAD
export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]),

  const addToast = (toast: Omit<Toast 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9),
    const newToast = { ...toast, id },
    setToasts(prev => [...prev, newToast])
  },

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  },

  const showSuccess = (title: string, message?: string) => {
    addToast({ type: 'success', title, message })
  },

  const showError = (title: string, message?: string) => {
    addToast({ type: 'error', title, message })
  },

  const showInfo = (title: string, message?: string) => {
    addToast({ type: 'info', title, message })
  },

  const showWarning = (title: string, message?: string) => {
    addToast({ type: 'warning', title, message })
  },

  return {
    toasts,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    removeToast}
},
=======
export const _useToast = () => {_const [toasts, _setToasts] = useState<Toast[]>([]);

  const _addToast = (_toast: Omit<Toast, _'id'>) => {
    const _id = Math.random().toString(36).substr(2, _9);
    const _newToast = { ...toast, _id};
    setToasts(prev => [...prev, newToast]);
  };

  const _removeToast = (_id: string) => {_setToasts(prev => prev.filter(toast => toast.id !== id));};

  const _showSuccess = (_title: string, _message?: string) => {_addToast({ type: 'success', _title, _message});
  };

  const _showError = (_title: string, _message?: string) => {_addToast({ type: 'error', _title, _message});
  };

  const _showInfo = (_title: string, _message?: string) => {_addToast({ type: 'info', _title, _message});
  };

  const _showWarning = (_title: string, _message?: string) => {_addToast({ type: 'warning', _title, _message});
  };

  return {_toasts, _showSuccess, _showError, _showInfo, _showWarning, _removeToast};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
