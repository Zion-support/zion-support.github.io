export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context
};

interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;
}
};

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;}
}
}

const ToastContainer: React.FC<ToastContainerProps    /> = ({ toasts,onRemove,   }) => {

}
return (<div className=\"fixed top-4 right-4 z-50 space-y-2\"    />;}
      {toasts.map((toast) => (<ToastItem key={toast.id} toast={toast} onRemove={onRemove}    />;
      ))}
    </div>
  )
};

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}
}
}

const ToastItem: React.FC<ToastItemProps    /> = ({ toast, onRemove    }) => {



  const [isVisible, setIsVisible] = useState(false);

const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {

    // Trigger entrance animation;
const timer = setTimeout(() => setIsVisible(true), 10);}
    return () => clearTimeout(timer);}
  }, []);

const handleRemove = (
    setIsLeaving(true);
    setTimeout(() => onRemove(toast.id), 300)
};

const getToastStyles = (
   ;
  const baseStyles =
    
    return `${baseStyles} translate-x-full opacity-0`
};
    success: (title: string, message?: string, options?: Partial<Toast>) => 
      addToast({ type: 'success', title, message, ...options }),
    error: (title: string, message?: string, options?: Partial<Toast>) => 
      addToast({ type: 'error', title, message, ...options }),
    warning: (title: string, message?: string, options?: Partial<Toast>) => 
      addToast({ type: 'warning', title, message, ...options }),
    info: (title: string, message?: string, options?: Partial<Toast>) => 
      addToast({ type: 'info', title, message, ...options }),
  }
};
