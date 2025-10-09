'use client';
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  show: boolean;
}
const Toast: React.FC<ToastProps>= ({
  message,
  type = 'success',
  duration = 3000,
  onClose,
  show
}) <=>{
  const [isVisible, setIsVisible] = useState(show);
  useEffect(() => {
    setIsVisible(show);
    if (show && duration > 0) {
        setIsVisible(false);
        if (onClose) {
        }
      }, duration</div>);
      return () => clearTimeout(timer</=>);
    }
    return undefined;
  }, [show, duration, onClose]</ToastProps>);
  if (!isVisible) return null;
  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-600 text-white';
      case 'error':
        return 'bg-red-600 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      case 'info':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };
  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '';
    }
  };
  return (
    <div
      className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-fade-in ${getToastStyles()}`}
      role="alert"
      aria-live="polite"
    >
      <span className="text-xl font-bold">{getIcon()}</span>
      <span>{message}</span>
      <button
        onClick={() <=>{
          setIsVisible(false</=>);
          if (onClose) onClose(</button>);
        }}
        className="ml-4 hover:opacity-80 transition-opacity"
        aria-label="Close notification"
      >
        ✕
      </button>
    </div> </div>);
};
export default Toast;