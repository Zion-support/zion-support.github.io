<<<<<<< HEAD
=======
export type ToastType = 'success' | 'error' | 'info' | 'warning';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


interface ToastProps {
  toast: Toast;
<<<<<<< HEAD


<<<<<<< HEAD
export type ToastType = 'success' | 'error' | 'info' | 'warning';
;
}, [toast.id, toast.duration, on_remove]);
const get_icon = () =>: any {
  switch (toast.type) {
  case 'success':;
interface ToastProps {
  toast: Toast;
  on_remove: (id: string) => void;
export type ToastType = 'success' | 'error' | 'info' | 'warning';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  onRemove: (id: string) => void;
  id: string,
  type: ToastType,
  title: string,;
  message?: string;
  duration?: number
}
interface ToastProps {
  toast: Toast
  onRemove: (id: string) => void
}
=======

export interface Toast {;
  id: string,;
  type: ToastType,;
  title: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
 export type ToastType = 'success' | 'error' | 'info' | 'warning';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
}, [toast && toast.id, toast && toast.duration, onRemove]);
const getIcon = () => {;
  switch (toast && toast.type) {;
  case 'success': ;
interface ToastProps {;
  toast: Toast;
  onRemove: (id: string) => void;
export type ToastType = 'success' | 'error' | 'info' | 'warning';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Toast {;
  id: string,;
  type: ToastType,;
  title: string,;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onRemove: (id: string) => void;

  id: string,
  type: ToastType,
  title: string,;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  message?: string;
  duration?: number;
}

<<<<<<< HEAD
  message?: string;
  duration?: number;
}
export type ToastType = 'success' | 'error' | 'info' | 'warning';

export type ToastType = 'success' | 'error' | 'info' | 'warning';
}, [toast.id, toast.duration, onRemove]);
const getIcon = () => {
  switch (toast.type) {
  case 'success':
interface ToastProps {
  toast: Toast;
  onRemove: (id: string) => void;
export type ToastType = 'success' | 'error' | 'info' | 'warning';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface Toast {
  id: string
  type: ToastType
  title: string
  id: string,
  type: ToastType,
  title: string,;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  message?: string;
  duration?: number
}
interface ToastProps {
  toast: Toast
  onRemove: (id: string) => void
}

<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration || 5000);

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove]);

<<<<<<< HEAD
<<<<<<< HEAD
      case 'error':
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration |5000);
    return () => clearTimeout(timer);  }, [toast.id, toast.duration, onRemove]);      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration |5000);
    return () => clearTimeout(timer)
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className='w-5 h-5 text-green-400' />;
      case 'error':
        return <AlertCircle className='w-5 h-5 text-red-400' />;
      case 'warning':
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;
      case 'info':
        return <Info className='w-5 h-5 text-blue-400' />;
      default:
        return <Info className='w-5 h-5 text-blue-400' />;    }      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      default: return <Info className="w-5 h-5 text-blue-400" />
    }

  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':

        return <CheckCircle className='w-5 h-5 text-green-400' />;
      case 'error':;
        return <AlertCircle className='w-5 h-5 text-red-400' />;
      case 'warning':;
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;
      case 'info':;
        return <Info className='w-5 h-5 text-blue-400' />;
      default:;
        return <Info className='w-5 h-5 text-blue-400' />;    }      case 'error':;
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':;
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':;
        return <Info className="w-5 h-5 text-blue-400" />;
      default: return <Info className="w-5 h-5 text-blue-400" />;
    }

        return <AlertCircle className='w-5 h-5 text-red-400' />;
      case 'warning':
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;
      case 'info':
        return <Info className='w-5 h-5 text-blue-400' />;
      default:


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return <Info className='w-5 h-5 text-blue-400' />;    }

    }




  };

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':

<<<<<<< HEAD
<<<<<<< HEAD
  };

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return 'border-green-500/20';
      case 'error':
        return 'border-red-500/20';
      case 'warning':
        return 'border-yellow-500/20';
      case 'info':
        return 'border-blue-500/20';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
      default: return 'border-blue-500/20'
    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  const getBorderColor = () => {;
    switch (toast && toast.type) {;
      case 'success':;
        return 'border-green-500/20';
      case 'error':;
        return 'border-red-500/20';
      case 'warning':;
        return 'border-yellow-500/20';
      case 'info':;
        return 'border-blue-500/20';
      default:;
        return 'border-blue-500/20';    }      default: return 'border-blue-500/20';
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  const getBackgroundColor = () => {;
    switch (toast && toast.type) {;
      case 'success':;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return 'bg-green-500/10';
      case 'error':;
        return 'bg-red-500/10';
      case 'warning':;
        return 'bg-yellow-500/10';
      case 'info':;
        return 'bg-blue-500/10';
      default:;
        return 'bg-blue-500/10';
    }
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      default:
        return 'border-blue-500/20';    }      default: return 'border-blue-500/20'
    }
  }
  const getBackgroundColor = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-500/10';
      case 'error':
        return 'bg-red-500/10';
      case 'warning':
        return 'bg-yellow-500/10';
      case 'info':
        return 'bg-blue-500/10';
<<<<<<< HEAD
<<<<<<< HEAD
  };
    >;
      <div className='flex items-start space-x-3'>;
        <div className='flex-shrink-0 mt-0 && 0.5'>{getIcon()}</div>;
        <div className='flex-1 min-w-0'>;
          <h4 className='text-sm font-semibold text-white'>{toast && toast.title}</h4>;
          {toast && toast.message && (;
            <p className='mt-1 text-sm text-white/70'>{toast && toast.message}</p>          )}    }
  };
=======
<<<<<<< HEAD
      default: return 'bg-blue-500/10'
    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <motion&& motion.div
      initial={{ opacity: 0, x: 300, scale: 0 && 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300, scale: isVisible ? 1 : 0 && 0.8 }}
      exit={{ opacity: 0, x: 300, scale: 0 && 0.8 }}
      transition={{ duration: 0 && 0.3, ease: "easeInOut" }}
      className={`relative p-4 rounded-xl border ${getBorderColor()} ${getBackgroundColor()} backdrop-blur-xl shadow-2xl max-w-sm`}>;
      <div className="flex items-start space-x-3">;
        <div className="flex-shrink-0 mt-0 && 0.5">;
          {getIcon()}

<<<<<<< HEAD
            setTimeout(() => onRemove(toast.id), 300)
          }}

        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white">
;

export type ToastType = 'success' | 'error' | 'info' | 'warning',

export interface Toast {
  id: string,
  type: ToastType,
  title: string,
message?: string;
  duration?: number;
}
interface ToastProps {
  toast: Toast,
  on_remove: (id: string) => void;
}
const ToastItem: React.FC < ToastProps> = ({ toast, on_remove }) => {
  const [is_visible, setIsVisible] = useState (true);
;
  useEffect (() => {
    const timer = set_timeout (() => {
      setIsVisible (false);
      set_timeout (() => on_remove (toast.id), 300);
    }, toast.duration || 5000);
;
    return () => clear_timeout (timer);  }, [toast.id, toast.duration, on_remove]);      set_timeout (() => on_remove (toast.id), 300);
    }, toast.duration || 5000);
;
    return () => clear_timeout (timer);
  const get_icon = () =>: any {
    switch (toast.type) {
      case 'success':;
        return <CheckCircle className='w - 5 h - 5 text - green - 400' />;
      case 'error':;
        return <AlertCircle className='w - 5 h - 5 text - red - 400' />;
      case 'warning':;
        return <AlertCircle className='w - 5 h - 5 text - yellow - 400' />;
      case 'info':;
        return <Info className='w - 5 h - 5 text - blue - 400' />;
      default:;
        return <Info className='w - 5 h - 5 text - blue - 400' />;    }      case 'error':;
        return <AlertCircle className="w - 5 h - 5 text - red - 400" />;
      case 'warning':;
        return <AlertCircle className="w - 5 h - 5 text - yellow - 400" />;
      case 'info':;
        return <Info className="w - 5 h - 5 text - blue - 400" />;
      default: return <Info className="w - 5 h - 5 text - blue - 400" />;
    }
  }
;
  const getBorderColor = () =>: any {
    switch (toast.type) {
      case 'success':;
        return 'border - green - 500 / 20';
      case 'error':;
        return 'border - red - 500 / 20';
      case 'warning':;
        return 'border - yellow - 500 / 20';
      case 'info':;
        return 'border - blue - 500 / 20';
      default:;
        return 'border - blue - 500 / 20';    }      default: return 'border - blue - 500 / 20';
    }
  }
;
  const getBackgroundColor = () =>: any {
    switch (toast.type) {
      case 'success':;
        return 'bg - green - 500 / 10';
      case 'error':;
        return 'bg - red - 500 / 10';
      case 'warning':;
        return 'bg - yellow - 500 / 10';
      case 'info':;
        return 'bg - blue - 500 / 10';
      default:;
        return 'bg - blue - 500 / 10';
    }
  }
;
    >;
      <div className='flex items - start space - x-3'>;
        <div className='flex - shrink - 0 mt - 0.5'>{get_icon ()}</div>;
        <div className='flex - 1 min - w-0'>;
          <h4 className='text - sm font - semibold text - white'>{toast.title}</h4>;
          {toast.message && (
            <p className='mt - 1 text - sm text - white / 70'>{toast.message}</p>          )}    }
  }
;
  return (
    <motion.div;
      initial={{ opacity: 0, coordinate_x: 300, scale: 0.8 }}
      animate={{ opacity: is_visible ? 1 : 0, coordinate_x: is_visible ? 0 : 300, scale: is_visible ? 1 : 0.8 }}
      exit={{ opacity: 0, coordinate_x: 300, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative p - 4 rounded - xl border ${getBorderColor ()} ${getBackgroundColor ()} backdrop - blur - xl shadow - 2xl max - w-sm`}
    >;
      <div className="flex items - start space - x-3">;
        <div className="flex - shrink - 0 mt - 0.5">;
          {get_icon ()}
        </div>;
        <div className="flex - 1 min - w-0">;
          <h4 className="text - sm font - semibold text - white">;
            {toast.title}
          </h4>;
          {toast.message && (
            <p className="mt - 1 text - sm text - white / 70">;
              {toast.message}
          className='flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200';
        >;
          <X className='w-4 h-4 text-white/60 hover:text-white' />;
        </button>;
      </div>;
      {/* Progress bar */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden'>;
        <motion&& motion.div
          className={`h-full ${
            toast && toast.type === 'success'
              ? 'bg-green-400'
              : toast && toast.type === 'error'
                ? 'bg-red-400'
                : toast && toast.type === 'warning'
                  ? 'bg-yellow-400'
                  : 'bg-blue-400'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
            </p>)}
        </div>;
        <button;
          on_click={() => {
            setIsVisible (false);
            set_timeout (() => on_remove (toast.id), 300);
          }}
          className='flex - shrink - 0 ml - 2 p - 1 rounded - lg hover:bg - white / 10 transition - colors duration - 200';
        >;
          <X className='w - 4 h - 4 text - white / 60 hover:text - white' />;
        </button>;
      </div>;
      {/* Progress bar */}
      <div className='absolute bottom - 0 left - 0 right - 0 h - 1 bg - white / 20 rounded - b-xl overflow - hidden'>;
        <motion.div;
          className={`h - full ${
            toast.type === 'success';
              ? 'bg - green - 400';
              : toast.type === 'error';
                ? 'bg - red - 400';
                : toast.type === 'warning';
                  ? 'bg - yellow - 400';
                  : 'bg - blue - 400';
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration || 5000, ease: 'linear' }}
        />;
      </div>;
    </motion.div>);
}
;
interface ToastContainerProps {
  toasts: Toast[];
  on_remove: (id: string) => void;
;
export const ToastContainer: React.FC < ToastContainerProps> = ({
  toasts,
  on_remove,
}) => {
          transition={{ duration: toast && toast.duration || 5000, ease: 'linear' }}
        />;
      </div>;
    </motion && motion.div>;
  );
};
interface ToastContainerProps {;
  toasts: Toast[];
  onRemove: (id: string) => void;
export const ToastContainer: React.FC<ToastContainerProps> = ({;
  toasts,;
  onRemove,;
}) => {;
  return (
            setTimeout(() => onRemove(toast.id), 300)
          }}
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <button
          onClick={() => {;
            setIsVisible(false);


  return (

            setTimeout(() => onRemove(toast.id), 300)
          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          <X className="w-4 h-4 text-white/60 hover:text-white" />
        </button>
      </div>
          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200";
        >;
          <X className="w-4 h-4 text-white/60 hover:text-white" />;
        </button>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">;
        <motion&& motion.div
          className={`h-full ${
            toast && toast.type === 'success' ? 'bg-green-400' :
            toast && toast.type === 'error' ? 'bg-red-400' :
            toast && toast.type === 'warning' ? 'bg-yellow-400' :
<<<<<<< HEAD
<<<<<<< HEAD

  const _getBorderColor = () => {_switch (toast.type) {
      case 'success':
        return 'border-green-500/20',
      case 'error':
        return 'border-red-500/20',
      case 'warning':
        return 'border-yellow-500/20',
      case 'info':
        return 'border-blue-500/20',
      default: return 'border-blue-500/20'
    }
  },

  const _getBackgroundColor = () => {_switch (toast.type) {
      case 'success':
        return 'bg-green-500/10',
      case 'error':
        return 'bg-red-500/10',
      case 'warning':
        return 'bg-yellow-500/10',
      case 'info':
        return 'bg-blue-500/10',
      default: return 'bg-blue-500/10'
    }
  },

      default:
        return 'bg-blue-500/10';
    }
  }
  };

    >
      <div className='flex items-start space-x-3'>
        <div className='flex-shrink-0 mt-0.5'>{getIcon()}</div>
        <div className='flex-1 min-w-0'>
          <h4 className='text-sm font-semibold text-white'>{toast.title}</h4>
          {toast.message && (
            <p className='mt-1 text-sm text-white/70'>{toast.message}</p>          )}    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300, scale: isVisible ? 1 : 0.8 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative p-4 rounded-xl border ${getBorderColor()} ${getBackgroundColor()} backdrop-blur-xl shadow-2xl max-w-sm`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white">
            {toast.title}
          </h4>
          {toast.message && (
            <p className="mt-1 text-sm text-white/70">
              {toast.message}
            </p>
          )}
            <p className='mt-1 text-sm text-white/70'>{toast.message}</p>          )}

          )}

        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onRemove(toast.id), 300);
          }}
          className='flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200'
        >
          <X className='w-4 h-4 text-white/60 hover:text-white' />
        </button>
      </div>
      {/* Progress bar */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden'>
        <motion.div
          className={`h-full ${
            toast.type === 'success'
              ? 'bg-green-400'
              : toast.type === 'error'
                ? 'bg-red-400'
                : toast.type === 'warning'
                  ? 'bg-yellow-400'
                  : 'bg-blue-400'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration |5000, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
}
interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts
  onRemove
}) => {
  return (
    <div className='fixed top-4 right-4 z-50 space-y-3'>
      <AnimatePresence>
        {toasts.map(toast => (          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
    </div>;
  );};          }}
          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          <X className="w-4 h-4 text-white/60 hover:text-white" />
        </button>
      </div>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">
        <motion.div
          className={`h-full ${
            toast.type === 'success' ? 'bg-green-400' :
            toast.type === 'error' ? 'bg-red-400' :
            toast.type === 'warning' ? 'bg-yellow-400' :

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            'bg-blue-400'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}

    <div className='fixed top-4 right-4 z-50 space-y-3'>
      <AnimatePresence>
        {toasts.map(toast => (          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
<<<<<<< HEAD

=======
    </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
<<<<<<< HEAD

          transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
<<<<<<< HEAD
transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
  );};

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
      </div>;
    </motion && motion.div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
          transition={{ duration: toast.duration |5000, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}
};
    </div>
  );};
=======
=======
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>

interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
  );};

<<<<<<< HEAD
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
<<<<<<< HEAD
      </AnimatePresence>;
    </div>;
  );  );
};
// Hook for managing toasts;
    </div>;
  );  )
}
// Hook for managing toasts
export const useToast = () => {;
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = (toast: Omit<Toast, 'id'>) => {;
    const id = Math && Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast]);
  const removeToast = (id: string) => {;
    setToasts(prev => prev && prev.filter(toast => toast && toast.id !== id));
  };
  const showSuccess = (title: string, message?: string) => {;
    addToast({ type: 'success', title, message });
  };
  const showError = (title: string, message?: string) => {;
    addToast({ type: 'error', title, message });
  };
  const showInfo = (title: string, message?: string) => {;
    addToast({ type: 'info', title, message });
  };
  const showWarning = (title: string, message?: string) => {;
    addToast({ type: 'warning', title, message });
  };
  return {;
    toasts,;
    showSuccess,;
    showError,;
    showInfo,;
    showWarning,;
    removeToast,;
  };
};    toasts;
=======
<<<<<<< HEAD
    </div>
  )
};
interface ToastContainerProps {;
  toasts: Toast[],;
  onRemove: (id: string) => void;
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {;
  return (
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    <div className="fixed top-4 right-4 z-50 space-y-3">;
      <AnimatePresence>;
        {toasts && toasts.map((toast) => (;
          <ToastItem key={toast && toast.id} toast={toast} onRemove={onRemove} />;
        ))}


};    toasts;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast])
  };
  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  };
  const showSuccess = (title: string, message?: string) => {
    addToast({ type: 'success', title, message })
  };
  const showError = (title: string, message?: string) => {
    addToast({ type: 'error', title, message })
  };
  const showInfo = (title: string, message?: string) => {
    addToast({ type: 'info', title, message })
  };
  const showWarning = (title: string, message?: string) => {
    addToast({ type: 'warning', title, message })
  };
  return {
    toasts;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    showSuccess;
    showError;
    showInfo;
    showWarning;
    removeToast}
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='fixed top - 4 right - 4 z - 50 space - y-3'>;
      <AnimatePresence>;
        {toasts.map (toast => (          <ToastItem key={toast.id} toast={toast} on_remove={on_remove} />))}
      </AnimatePresence>;
    </div>);}          }}
          className="flex - shrink - 0 ml - 2 p - 1 rounded - lg hover:bg - white / 10 transition - colors duration - 200";
        >;
          <X className="w - 4 h - 4 text - white / 60 hover:text - white" />;
        </button>;
      </div>;
      {/* Progress bar */}
      <div className="absolute bottom - 0 left - 0 right - 0 h - 1 bg - white / 20 rounded - b-xl overflow - hidden">;
        <motion.div;
          className={`h - full ${
            toast.type === 'success' ? 'bg - green - 400' :;
            toast.type === 'error' ? 'bg - red - 400' :;
            toast.type === 'warning' ? 'bg - yellow - 400' :;
            'bg - blue - 400';
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration || 5000, ease: "linear" }}
        />;
      </div>;
    </motion.div>);
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
interface ToastContainerProps {
  toasts: Toast[],
  on_remove: (id: string) => void;
}
export const ToastContainer: React.FC < ToastContainerProps> = ({ toasts, on_remove }) => {
  return (
    <div className="fixed top - 4 right - 4 z - 50 space - y-3">;
      <AnimatePresence>;
        {toasts.map ((toast) => (
          <ToastItem key={toast.id} toast={toast} on_remove={on_remove} />))}
      </AnimatePresence>;
    </div>));
}
;
// Hook for managing toasts;
export const use_toast = () =>: any {
  const [toasts, set_toasts] = useState < Toast[]>([]);
;
  const add_toast = (toast: Omit < Toast, 'id'>) =>: any {
    const id = Math.random ().to_string (36).substr (2, 9);
    const new_toast = { ...toast, id }
    set_toasts (prev => [...prev, new_toast]);
;
  const remove_toast = (id: string) =>: any {
    set_toasts (prev => prev.filter (toast => toast.id !== id));
  }
;
  const show_success = (title: string, message?: string) =>: any {
    add_toast ({ type: 'success', title, message });
  }
;
  const show_error = (title: string, message?: string) =>: any {
    add_toast ({ type: 'error', title, message });
  }
;
  const show_info = (title: string, message?: string) =>: any {
    add_toast ({ type: 'info', title, message });
  }
;
  const show_warning = (title: string, message?: string) =>: any {
    add_toast ({ type: 'warning', title, message });
  }
;
  return {
    toasts,
    show_success,
    show_error,
    show_info,
    show_warning,
    remove_toast,
  }
}    toasts;
    show_success;
    show_error;
    show_info;
    show_warning;
    remove_toast}
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
