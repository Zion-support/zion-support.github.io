<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
import React, {createContext,useContext,useState,useCallback,useEffect} from 'react';'

interface Toast  {"id": string;
  }
  "type": "success" | "error" | "warning" | "info";"
  "title": string;
  message?: string;
  duration?: number;
  action?: {"label": string;
    }
    "onClick": () => void;
}

interface ToastContextType {
  }
  "toasts": Toast[];
  "addToast": ("toast": Omit<Toast, "id">) => string;"
  "removeToast": ("id": string) => void;
  "clearToasts": () => void;

}

const ToastContext = createContext<ToastContextType | undefined>(undefined)export const useToast = () => ;
  const context = useContext(ToastContext)if (!context) {throw new Error("useToast must be used within a ToastProvider")}"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  createContext,
  useContext,
  useState,
  useCallback,
>>>>>>> origin/cursor/delete-old-data-records-6bba


  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void
};
}

interface ToastContextType {
  toasts: Toast[];

  addToast: (toast: Omit<Toast, \"id\"    />) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;}
}
}

const ToastContext = createContext<ToastContextType | undefined    />(undefined)export const useToast = () => ;
  const context = useContext(ToastContext)if (!context) {throw new Error(\"useToast must be used within a ToastProvider\")}
<<<<<<< HEAD

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

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
interface ToastProviderProps {
  }
  "children": React.ReactNode;
  maxToasts?: number;

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  return context
export const useToast = () => {}
  const context = useContext(ToastContext)
    throw new Error("useToast must be used within a ToastProvider")
  return context
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
interface ToastProviderProps {}
  children: React.ReactNode
  maxToasts?: number;}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
export const "ToastProvider": React.FC<ToastProviderProps> = ({ children,maxToasts = 5   }) => {


}


const [toasts, setToasts]  =;
  useState<Toast[]>([])const addToast = useCallback(("toast": Omit<Toast, "id">) => ;"
  const id = `toast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;`
const "newToast": Toast = {id,"duration": 5000,...toast}setToasts((prev) => ;
  const updated = [...prev, newToast];
        return updated.slice(-maxToasts)})// Auto remove toast after duration;
      if (newToast.duration && newToast.duration > 0) {setTimeout(() => {removeToast(id)}, newToast.duration)}return id;
    },[maxToasts],)const removeToast = useCallback(("id": string) => {setToasts((prev) => prev.filter((toast) => toast.id !== id)
<<<<<<< HEAD
}, [];
  const clearToasts = useCallback(() => {setToasts([])}, [];
  return (<ToastContext.Provider;
      value={ toasts, addToast, removeToast, clearToasts }
=======
=======
        id,
        duration: 5000,
        ...toast,
      }
        const updated = [...prev, newToast]
        return updated.slice(-maxToasts)
      })
          removeToast(id)
        }, newToast.duration)
      return id
    },
    [maxToasts],
  )
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])
  const clearToasts = useCallback(() => {}
    setToasts([])
  }, [])
  return (


const [toasts, setToasts]  =;}
  useState<Toast[] />([])const addToast = useCallback((toast: Omit<Toast, "id" />) => ;}
  const id = `toast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;}
}
}

export const ToastProvider: React.FC<ToastProviderProps    /> = ({ children,maxToasts = 5,   }) => {


const [toasts, setToasts]  =;}
  useState<Toast[]    />([])const addToast = useCallback((toast: Omit<Toast, \"id\"    />) => ;}
  const id = `toast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;


const newToast: Toast = {id,duration: 5000,...toast,}setToasts((prev) => ;
  const updated = [...prev, newToast];
        return updated.slice(-maxToasts)})// Auto remove toast after duration;
      if (newToast.duration && newToast.duration > 0) {setTimeout(() => {removeToast(id)}, newToast.duration)}return id;
    },[maxToasts],)const removeToast = useCallback((id: string) => {setToasts((prev) => prev.filter((toast) => toast.id !== id),}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}, [];
  const clearToasts = useCallback(() => {setToasts([])}, [];
  return (<ToastContext.Provider;
      value={{ toasts, addToast, removeToast, clearToasts }}
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
        />
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast}    />
    </ToastContext.Provider>
  )
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
<<<<<<< HEAD
      "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ease-in-out";
=======
<<<<<<< HEAD
      "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ease-in-out";
=======
      \'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ease-in-out\';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

    if (isLeaving) {) => {
  return $3;}
}
      return `${baseStyles} translate-x-full opacity-0`;
    }

    if (isVisible) {}
      return `${baseStyles} translate-x-0 opacity-100`;
    }
<<<<<<< HEAD
    
    return `${baseStyles} translate-x-full opacity-0`
};
=======

    return `${baseStyles} translate-x-full opacity-0`;
  };
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3

    return `${baseStyles} translate-x-full opacity-0`
};


const getIconAndColor = (
    switch (toast.type) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
      case "success":
       ;
  return {
  action?: {label: string;
    onClick: () => void;
}interface ToastContextType  {toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}const ToastContext  = createContext<ToastContextType | undefined>(undefined)export const useToast = () => {const context = useContext(ToastContext)if (!context) {throw new Error("useToast must be used within a ToastProvider")}
  return context;
}interface ToastProviderProps  {children: React.ReactNode;
  maxToasts?: number;
}export const ToastProvider: React.FC<ToastProviderProps> = ({children,maxToasts = 5,}) => {const [toasts, setToasts]  = useState<Toast[]>([])const addToast = useCallback((toast: Omit<Toast, "id">) => {const id = `toast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const newToast: Toast = {id,duration: 5000,...toast,}setToasts((prev) => {const updated = [...prev, newToast];
        return updated.slice(-maxToasts)})// Auto remove toast after duration;
      if (newToast.duration && newToast.duration > 0) {setTimeout(() => {removeToast(id)}, newToast.duration)}return id;
    },[maxToasts],)const removeToast = useCallback((id: string) => {setToasts((prev) => prev.filter((toast) => toast.id !== id))}, [])const clearToasts = useCallback(() => {setToasts([])}, [])return (<ToastContext.Provider;
      value={ toasts, addToast, removeToast, clearToasts }
    >;
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />;
    </ToastContext.Provider>;
  )}

interface ToastContainerProps {
  }
  "toasts": Toast[];
  "onRemove": ("id": string) => void;

}

const "ToastContainer": React.FC<ToastContainerProps> = ({ toasts,onRemove   }) => {


}


return (<div className="fixed top-4 right-4 z-50 space-y-2">;"
      {toasts.map((toast) => (<ToastItem key={toast.id} toast={toast} onRemove={onRemove} />;
      ))}
    </div>;
  )}

interface ToastItemProps {
  }
  "toast": Toast;
  "onRemove": ("id": string) => void;


<<<<<<< HEAD
=======
=======
      case \"success\":
       ;
  return {
<<<<<<< HEAD


=======
<<<<<<< HEAD
          icon: "✓",
          bgColor: "bg-green-50",
          iconColor: "text-green-400",
          titleColor: "text-green-800",
          messageColor: "text-green-700",) => {
  return $3;}
}
        };
      case "error":
        return {
          icon: "✕",
          bgColor: "bg-red-50",
          iconColor: "text-red-400",
          titleColor: "text-red-800",}
          messageColor: "text-red-700",}
        };
      case "warning":
        return {
          icon: "⚠",
          bgColor: "bg-yellow-50",
          iconColor: "text-yellow-400",
          titleColor: "text-yellow-800",}
          messageColor: "text-yellow-700",}
        };
      case "info":
      default:
        return {
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}

const "ToastItem": React.FC<ToastItemProps> = ({ toast, onRemove    }) => {



  }



  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
}
const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

const handleRemove = () => {
    }
    setIsLeaving(true);
    setTimeout(() => onRemove(toast.id), 300)
};

const getToastStyles = () => {
   ;
}
const baseStyles =;
      "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ease-in-out";"

    if (isLeaving) {
      }
      return `${baseStyles} translate-x-full opacity-0`;`    }

    if (isVisible) {
<<<<<<< HEAD
      }
      return `${baseStyles} translate-x-0 opacity-100`;`    }
=======
<<<<<<< HEAD
      }
      return `${baseStyles} translate-x-0 opacity-100`;`    }
=======
      return `${baseStyles} translate-x-0 opacity-100`;
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts


return `${baseStyles} translate-x-full opacity-0`;`};


const getIconAndColor = () => {
    }
    switch (toast.type) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
      }
      case "success":"
       ;
  return {
          }
          "icon": "✓","
          "bgColor": "bg-green-50","
          "iconColor": "text-green-400","
          "titleColor": "text-green-800","
          "messageColor": "text-green-700","
        };
      case "error":"
        return {
          }
          "icon": "✕","
          "bgColor": "bg-red-50","
          "iconColor": "text-red-400","
          "titleColor": "text-red-800","
          "messageColor": "text-red-700","
        };
      case "warning":"
        return {
          }
          "icon": "⚠","
          "bgColor": "bg-yellow-50","
          "iconColor": "text-yellow-400","
          "titleColor": "text-yellow-800","
          "messageColor": "text-yellow-700","
        };
      case "info":"
      "default":
        return {
          }
          "icon": "ℹ","
          "bgColor": "bg-blue-50","
          "iconColor": "text-blue-400","
          "titleColor": "text-blue-800","
          "messageColor": "text-blue-700","
<<<<<<< HEAD
=======
=======
      case "success":
        return {
          icon: "✓",
          bgColor: "bg-green-50",
          iconColor: "text-green-400",
          titleColor: "text-green-800",
          messageColor: "text-green-700",) => {
=======
          icon: \"✓\",
          bgColor: \"bg-green-50\",
          iconColor: \"text-green-400\",
          titleColor: \"text-green-800\",
          messageColor: \"text-green-700\",) => {
>>>>>>> origin/chore/fix-lint-and-merge
  return $3;}
}
        };
      case \"error\":
        return {
<<<<<<< HEAD
          icon: "✕",
          bgColor: "bg-red-50",
          iconColor: "text-red-400",
          titleColor: "text-red-800",}
          messageColor: "text-red-700",}
=======
          icon: \"✕\",
          bgColor: \"bg-red-50\",
          iconColor: \"text-red-400\",
          titleColor: \"text-red-800\",}
          messageColor: \"text-red-700\",}
>>>>>>> origin/chore/fix-lint-and-merge
        };
      case \"warning\":
        return {
<<<<<<< HEAD
          icon: "⚠",
          bgColor: "bg-yellow-50",
          iconColor: "text-yellow-400",
          titleColor: "text-yellow-800",}
          messageColor: "text-yellow-700",}
=======
          icon: \"⚠\",
          bgColor: \"bg-yellow-50\",
          iconColor: \"text-yellow-400\",
          titleColor: \"text-yellow-800\",}
          messageColor: \"text-yellow-700\",}
>>>>>>> origin/chore/fix-lint-and-merge
        };
      case \"info\":
      default:
        return {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          icon: "ℹ",
          bgColor: "bg-blue-50",
          iconColor: "text-blue-400",
          titleColor: "text-blue-800",}
          messageColor: "text-blue-700",}
<<<<<<< HEAD
=======
=======
          icon: \"ℹ\",
          bgColor: \"bg-blue-50\",
          iconColor: \"text-blue-400\",
          titleColor: \"text-blue-800\",}
          messageColor: \"text-blue-700\",}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        };
    }
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
const { icon, bgColor, iconColor, titleColor, messageColor } =;
    getIconAndColor();

return (;
    <div className={getToastStyles()}>
      <div className={`p-4 ${bgColor}`}>`        <div className="flex items-start">"
          <div className={`flex-shrink-0 ${iconColor} text-lg`}>{icon}</div>`          <div className="ml-3 w-0 flex-1">"
            <p className={`text-sm font-medium ${titleColor}`}>{toast.title}</p>`            {toast.message && (
              <p className={`mt-1 text-sm ${messageColor}`}>{toast.message}</p>`
            )}
            {toast.action && (<div className="mt-2">;"
                <button;
                  }
<<<<<<< HEAD
=======
=======
const { icon, bgColor, iconColor, titleColor, messageColor } =

<<<<<<< HEAD

=======
              <p className={`mt-1 text-sm ${messageColor}`}>{toast.message}</p>
            )}
            {toast.action && (<div className="mt-2" />;}
                <button;}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  onClick={toast.action.onClick}
                  className={`text-sm font-medium ${titleColor} "hover": underline`}>`
                  {toast.action.labe
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </button>;
              </div>;
            )}
          </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
          <div className="ml-4 flex-shrink-0 flex">;"
            <button;
              onClick={handleRemove}
              className={`inline-flex ${titleColor} "hover": opacity-75 "focus":outline-none "focus":ring-2 "focus":ring-offset-2 "focus":ring-offset-${toast.type === "success" ? "green" : toast.type === "error" ? "red" : toast.type === "warning" ? "yellow" : "blue"}-50`}`
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
          <div className="ml-4 flex-shrink-0 flex" />;
            <button;
              onClick={handleRemove}
              className={`inline-flex ${titleColor} hover: opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${toast.type === "success" ? "green" : toast.type === "error" ? "red" : toast.type === "warning" ? "yellow" : "blue"}-50`}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

             />
              <span className="sr-only" />Close</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" />
                <path;
fillRule="evenodd"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
          <div className="ml-4 flex-shrink-0 flex">;
            <button;
              onClick={handleRemove}
              className={`inline-flex ${titleColor} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${toast.type === "success" ? "green" : toast.type === "error" ? "red" : toast.type === "warning" ? "yellow" : "blue"}-50`}
            >
              <span className="sr-only">Close</span>"
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">"
                <path,
fillRule="evenodd""
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z""
                  clipRule="evenodd"" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

// Convenience hooks for different toast types
export const useToastNotifications = () => {
  const { addToast } = useToast();

  return {
<<<<<<< HEAD
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
=======
    success: (title: string, message?: string, options?: Partial<Toast>) =>
      addToast({ type: "success", title, message, ...options }),
    error: (title: string, message?: string, options?: Partial<Toast>) =>
      addToast({ type: "error", title, message, ...options }),
    warning: (title: string, message?: string, options?: Partial<Toast>) =>
      addToast({ type: "warning", title, message, ...options }),
    info: (title: string, message?: string, options?: Partial<Toast>) =>
      addToast({ type: "info", title, message, ...options }),
  };
};
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
