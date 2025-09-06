  description?: string;
  variant?: 'default' | 'destructive';
}

interface ToastContextType {
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
