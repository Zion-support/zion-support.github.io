
interface Toast  {id: string;
  type: "success | error" | "warning | info";
  title: string;
  message?: string;
  duration?: number;


  const getIconAndColor = () => {
    switch (toast.type) {
      case "success:
        return {
>>>>>>> origin/main
          icon: ✓",
          bgColor: "bg-green-50,
          iconColor: text-green-400",
          titleColor: "text-green-800}
      case error":
        return {
          icon: "✕,
          bgColor: bg-red-50",
          iconColor: "text-red-400}
      case warning":
        return {
          icon: "⚠,
          bgColor: bg-yellow-50",
          iconColor: "text-yellow-400}
      case info":
      default:
        return {
          icon: "ℹ,
          bgColor: bg-blue-50",
          iconColor: "text-blue-400}
    }
  }


}const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {const [isVisible, setIsVisible] = useState(false)const [isLeaving, setIsLeaving]  = useState(false)useEffect(() => {// Trigger entrance animation;
    const timer = setTimeout(() => setIsVisible(true), 10)return () => clearTimeout(timer)}, [])const handleRemove = () => {setIsLeaving(true)setTimeout(() => onRemove(toast.id), 300)}const getToastStyles = () => {const baseStyles =;
      max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ease-in-out";if (isLeaving) {return `${baseStyles} translate-x-full opacity-0`;
    }if (isVisible) {return `${baseStyles} translate-x-0 opacity-100`;
    }return `${baseStyles} translate-x-full opacity-0`;
}return `${baseStyles} translate-x-full opacity-0`;
  }const getIconAndColor = () => {switch (toast.type) {case "success:;
        return {icon: ✓",bgColor: "bg-green-50,iconColor: text-green-400",titleColor: "text-green-800,messageColor: text-green-700"}case "error:;
        return {icon: ✕",bgColor: "bg-red-50,iconColor: text-red-400",titleColor: "text-red-800,messageColor: text-red-700"}case "warning:;
        return {icon: ⚠",bgColor: "bg-yellow-50,iconColor: text-yellow-400",titleColor: "text-yellow-800,messageColor: text-yellow-700"}case "info:;
      default:;
        return {icon: ℹ",bgColor: "bg-blue-50,iconColor: text-blue-400",titleColor: "text-blue-800,messageColor: text-blue-700"}}
  }const { icon, bgColor, iconColor, titleColor, messageColor } =;
    getIconAndColor()return (<div className={getToastStyles()}>;
      <div className={`p-4 ${bgColor}`}>;
        <div className="flex items-start>;
          <div className={`flex-shrink-0 ${iconColor} text-lg`}>{icon}</div>;
          <div className=ml-3 w-0 flex-1">;
            <p className={`text-sm font-medium ${titleColor}`}>{toast.title}</p>;
            {toast.message && (<p className={`mt-1 text-sm ${messageColor}`}>{toast.message}</p>;

            )}
            {toast.action && (<div className="mt-2>;
                <button;
                  onClick={toast.action.onClick}
                  className={`text-sm font-medium ${titleColor} hover:underline`}
                >;
                  {toast.action.label}
>>>>>>> origin/main
                </button>;
              </div>;
            )}
          </div>;

                  d=M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

            >;
              <span className=sr-only">Close</span>;
              <svg className="h-5 w-5 viewBox=0 0 20 20" fill="currentColor>;
                <path;
                  fillRule=evenodd";
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z;
                  clipRule=evenodd";
                />;
              </svg>;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>;
  )}// Convenience hooks for different toast types;
export const useToastNotifications = () => {const { addToast }  = useToast()return {success: (title: string, message?: string, options?: Partial<Toast>) =>;
      addToast({ type: 'success, title, message, ...options }),error: (title: string, message?: string, options?: Partial<Toast>) =>;
      addToast({ type: error', title, message, ...options }),warning: (title: string, message?: string, options?: Partial<Toast>) =>;
      addToast({ type: 'warning, title, message, ...options }),info: (title: string, message?: string, options?: Partial<Toast>) =>;
      addToast({ type: info', title, message, ...options })}
}success: (title: string, message?: string, options?: Partial<Toast>) =>;
      addToast({ type: "success, title, message, ...options }),error: (title: string, message?: string, options?: Partial<Toast>) =>;
      addToast({ type: error", title, message, ...options }),warning: (title: string, message?: string, options?: Partial<Toast>) =>;
      addToast({ type: "warning, title, message, ...options }),info: (title: string, message?: string, options?: Partial<Toast>) =>;

=======
      addToast({ type: info", title, message, ...options })}}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
>>>>>>> origin/main
