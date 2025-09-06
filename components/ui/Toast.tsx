<<<<<<< HEAD
=======
export type ToastType = 'success' | 'error' | 'info' | 'warning';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

export type ToastType = 'success' | 'error' | 'info' | 'warning';
}, [toast.id, toast.duration, onRemove]);
const getIcon = () => {
  switch (toast.type) {
  case 'success':
interface ToastProps {
  toast: Toast;
  onRemove: (id: string) => void;
<<<<<<< HEAD
export type ToastType = 'success' | 'error' | 'info' | 'warning';
export interface Toast {
<<<<<<< HEAD
  id: string
  type: ToastType
  title: string
=======
  id: string,
  type: ToastType,
  title: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  message?: string;
  duration?: number
}
interface ToastProps {
  toast: Toast
  onRemove: (id: string) => void
}
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
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
<<<<<<< HEAD
        return <Info className='w-5 h-5 text-blue-400' />;    }      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      default: return <Info className="w-5 h-5 text-blue-400" />
    }
<<<<<<< HEAD
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        return <Info className='w-5 h-5 text-blue-400' />;    }

    }

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':
        return 'border-green-500/20';
      case 'error':
        return 'border-red-500/20';
      case 'warning':
        return 'border-yellow-500/20';
      case 'info':
        return 'border-blue-500/20';
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
      default:
        return 'bg-blue-500/10';
    }
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    >
      <div className='flex items-start space-x-3'>
        <div className='flex-shrink-0 mt-0.5'>{getIcon()}</div>
        <div className='flex-1 min-w-0'>
          <h4 className='text-sm font-semibold text-white'>{toast.title}</h4>
          {toast.message && (
<<<<<<< HEAD
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
=======
            <p className='mt-1 text-sm text-white/70'>{toast.message}</p>          )}

          )}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
            'bg-blue-400'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration |5000, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
<<<<<<< HEAD
}
=======
};
=======
    </div>
  );};

          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
<<<<<<< HEAD
=======
  );};

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>;
  );  )
}
// Hook for managing toasts
export const useToast = () => {;
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id }
    setToasts(prev => [...prev, newToast]);
  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }
  const showSuccess = (title: string, message?: string) => {
    addToast({ type: 'success', title, message });
  }
  const showError = (title: string, message?: string) => {
    addToast({ type: 'error', title, message });
  }
  const showInfo = (title: string, message?: string) => {
    addToast({ type: 'info', title, message });
  }
  const showWarning = (title: string, message?: string) => {
    addToast({ type: 'warning', title, message });
  }
  return {
    toasts
    showSuccess
    showError
    showInfo
    showWarning
    removeToast
  }
};    toasts;
    showSuccess;
    showError;
    showInfo;
    showWarning;
    removeToast}
}

