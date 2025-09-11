
interface ToastProps {
  toast: Toast;


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Toast {;
  id: string,;
  type: ToastType,;
  title: string,;
  id: string,
  type: ToastType,
  title: string,;

      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration || 5000);

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove]);

  }
=======
=======  const getIcon = () => {
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
    }




  };

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':
=======
==============
=======        return 'border-green-500/20';
      case 'error':
        return 'border-red-500/20';
      case 'warning':
        return 'border-yellow-500/20';
      case 'info':
        return 'border-blue-500/20';
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
==============      default:
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

        <button
          onClick={() => {;
            setIsVisible(false);


  return (

            setTimeout(() => onRemove(toast.id), 300)
          }}

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">;
        <motion&& motion.div
          className={`h-full ${
            toast && toast.type === 'success' ? 'bg-green-400' :
            toast && toast.type === 'error' ? 'bg-red-400' :
            toast && toast.type === 'warning' ? 'bg-yellow-400' :
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

==============
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
==============

          transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
      </div>;
    </motion && motion.div>;
  );
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


};    toasts;

==============
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    showSuccess;
    showError;
    showInfo;
    showWarning;
    removeToast}
};

=======
<<<<<<< HEAD=======
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
;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
