export type ToastType = 'success' | 'error' | 'info' | 'warning';


export type ToastType = 'success' | 'error' | 'info' | 'warning';
}, [toast.id, toast.duration, onRemove]);
const getIcon = () => {
  switch (toast.type) {
  case 'success':
interface ToastProps {
  toast: Toast;
  onRemove: (id: string) => void;

  message?: string;
  duration?: number
}
interface ToastProps {
  toast: Toast
  onRemove: (id: string) => void
}
=======
=======

export interface Toast {;
  id: string,;
  type: ToastType,;
  title: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


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
export interface Toast {
  id: string
  type: ToastType
  title: string
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  id: string,
  type: ToastType,
  title: string,;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  message?: string;
  duration?: number
}
interface ToastProps {
  toast: Toast
  onRemove: (id: string) => void
}

const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);

        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      default: return <Info className="w-5 h-5 text-blue-400" />
    }

  };

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        return <Info className='w-5 h-5 text-blue-400' />;    }

    }

=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  };

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':


    >
      <div className='flex items-start space-x-3'>
        <div className='flex-shrink-0 mt-0.5'>{getIcon()}</div>
        <div className='flex-1 min-w-0'>
          <h4 className='text-sm font-semibold text-white'>{toast.title}</h4>
          {toast.message && (
=======
            <p className='mt-1 text-sm text-white/70'>{toast.message}</p>          )}    }
  }
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
            {toast.title}
          </h4>
          {toast.message && (
            <p className="mt-1 text-sm text-white/70">
              {toast.message}
            </p>
          )}
            <p className='mt-1 text-sm text-white/70'>{toast.message}</p>          )}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              {toast.message}
            </p>
          )}

        </div>
        <button
          onClick={() => {

  );};          }}
        <button
          onClick={() => {;
            setIsVisible(false);


  return (
    <div className='fixed top-4 right-4 z-50 space-y-3'>
      <AnimatePresence>
        {toasts.map(toast => (          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
    </div>;
  );};          }}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

            'bg-blue-400'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">;
        <motion&& motion.div
          className={`h-full ${
            toast && toast.type === 'success' ? 'bg-green-400' :
            toast && toast.type === 'error' ? 'bg-red-400' :
            toast && toast.type === 'warning' ? 'bg-yellow-400' :
            'bg-blue-400'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration |5000, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}
};
    </div>
  );};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

=======

          transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
        />;
      </div>;
    </motion && motion.div>;
  );
=======
  return (
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (

          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>

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
    <div className="fixed top-4 right-4 z-50 space-y-3">;
      <AnimatePresence>;
        {toasts && toasts.map((toast) => (;
          <ToastItem key={toast && toast.id} toast={toast} onRemove={onRemove} />;
        ))}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
};    toasts;

    showSuccess;
    showError;
    showInfo;
    showWarning;
    removeToast}

};

=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
