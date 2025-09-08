

<<<<<<< HEAD

}

import React from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';




=======
import React, { useState, useEffect } from 'react';'
import { motion, AnimatePresence  } from 'framer-motion';'
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';'

export type ToastType = any;

const getIcon = (



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
import React from 'react';
 export type ToastType = 'success' | 'error' | 'info' | 'warning';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
}, [toast && toast.id, toast && toast.duration, onRemove]);

const getIcon = (;
  switch (toast && toast.type) {;
  case 'success': ;
interface ToastProps {;
  toast: Toast;
  onRemove: (id: string) => void;
<<<<<<< HEAD

export type ToastType = 'success' | 'error' | 'info' | 'warning';

=======
) => {
  return $3;}
export interface Toast {;
  id: string,;
  type: ToastType,;
  title: string,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onRemove: (id: string) => void;

  id: string,
  type: ToastType,
  title: string,;

<<<<<<< HEAD



  message?: string;
  duration?: number;

=======
  message?: string;
  duration?: number;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
const ToastItem: React.FC<ToastProps    /> = ({ toast, onRemove    }) => {


<<<<<<< HEAD




const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(false);


      setTimeout(() => onRemove(toast.id), 300)

=======
setTimeout(() => onRemove(toast.id), 300);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

<<<<<<< HEAD

      case 'error':
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration |5000);
    return () => clearTimeout(timer);  }, [toast.id, toast.duration, onRemove]);      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration |5000);
    return () => clearTimeout(timer)


    }

  }


  }

        return <Info className='w-5 h-5 text-blue-400' />;    }

  }

        return <Info className='w-5 h-5 text-blue-400'    />;    }
=======


      "default":

        return <Info className='w-5 h-5 text-blue-400' />;'
    }
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':

  message?: string;
  duration?: number;
}import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence   } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info  } from 'lucide-react';
export type ToastType = any;
}, [toast.id, toast.duration, onRemove])const getIcon = () => {switch (toast.type) {case 'success':;
interface ToastProps  {toast: Toast;
  onRemove: (id: string) => void;
}import React from 'react';
 export type ToastType = 'success' | 'error' | 'info' | 'warning';
import { motion, AnimatePresence  } from 'framer-motion';
}, [toast && toast.id, toast && toast.duration, onRemove])const getIcon = () => {switch (toast && toast.type) {case 'success': ;
interface ToastProps  {toast: Toast;
  onRemove: (id: string) => void;export type ToastType = 'success' | 'error' | 'info' | 'warning';
  id: string,type: ToastType,title: string,export interface Toast  {id: string,type: ToastType,title: string,message?: string;
  duration?: number;
}
interface ToastProps  {toast: Toast;
  onRemove: (id: string) => void;
}const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {const [isVisible, setIsVisible] = useState(true)useEffect(() => {const timer = setTimeout(() => {setIsVisible(false)setTimeout(() => onRemove(toast.id), 300)}, toast.duration || 5000)return () => clearTimeout(timer)}, [toast.id, toast.duration, onRemove])const getIcon = () => {switch (toast.type) {case 'success':;
return <CheckCircle className='w-5 h-5 text-green-400' />;
      case 'error':;
        return <AlertCircle className='w-5 h-5 text-red-400' />;
      case 'warning':
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;
      case 'info':
const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {}
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {}
    const timer = setTimeout(() => {}
      setIsVisible(false);'
        return <AlertCircle className='w-5 h-5 text-red-400' />;'
      case 'warning':;'
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;'
      case 'info':'
        return <Info className='w-5 h-5 text-blue-400' />;

        return <Info className='w-5 h-5 text-blue-400' />;    }'
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }

  };

<<<<<<< HEAD


  const getBorderColor = () => {

=======
const getBorderColor = () => {
    }
    switch (toast.type) {
      }
      case 'success':'


const getBorderColor = (
>>>>>>> origin/cursor/delete-old-data-records-6bba
    switch (toast.type) {
      case 'success':


<<<<<<< HEAD

        return 'border-red-500/20';
      case 'warning':;
        return 'border-yellow-500/20';

      case 'info':
        return 'border-blue-500/20';

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


      case 'info':
        return 'border-blue-500/20';

default:
        return 'border-blue-500/20';) => {
  return $3;}
}
    }


        return 'bg-green-500/10';
      case 'error':;
        return 'bg-red-500/10';
      case 'warning':;
        return 'bg-yellow-500/10';


        return 'bg-green-500/10';
      case 'error':;
        return 'bg-red-500/10';
      case 'warning':;
        return 'bg-yellow-500/10';
      case 'info':;
        return 'bg-blue-500/10';return (<motion&& motion.div;
  return (
    <motion&& motion.div
      case 'info':;
        return 'bg-blue-500/10';return (<motion&& motion.div;
default:
        return 'border-blue-500/20';
origin/cursor/automate-test-improve-and-merge-code-2533
    }


        return 'bg-green-500/10';
      case 'error':
        return 'bg-red-500/10';
      case 'warning':
        return 'bg-yellow-500/10';
      case 'info':
        return 'bg-blue-500/10';


  return (
    <motion&& motion.div;
      initial={{ opacity: 0, x: 300, scale: 0 && 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300, scale: isVisible ? 1 : 0 && 0.8 }}
      exit={{ opacity: 0, x: 300, scale: 0 && 0.8 }}
      transition={{ duration: 0 && 0.3, ease: "easeInOut" }}
      className={`relative p-4 rounded-xl border ${getBorderColor()} ${getBackgroundColor()} backdrop-blur-xl shadow-2xl max-w-sm`}>;
      <div className="flex items-start space-x-3">;
        <div className="flex-shrink-0 mt-0 && 0.5">;
          {getIcon()}default:;

=======
       ;
  return 'border-green-500/20';
      case 'error':;
        return 'border-green-500/20';
      case 'error':
        return 'border-red-500/20';
      case 'warning':;
        return 'border-yellow-500/20';


      case 'info':
        return 'bg-blue-500/10';

default:

>>>>>>> origin/cursor/delete-old-data-records-6bba
        return 'bg-blue-500/10';
    }
  }
    >;
<<<<<<< HEAD


=======
      <div className='flex items-start space-x-3'>;
        <div className='flex-shrink-0 mt-0.5'>{getIcon()}</div>;
        <div className='flex-1 min-w-0'>;
          <h4 className='text-sm font-semibold text-white'>{toast.title}</h4>;
          {toast.message && (<p className='mt-1 text-sm text-white/70'>{toast.message}</p>;
          )}
          {getIcon()}
        <button
default:
        return 'bg-blue-500/10';
    }
  }
    >
      <div className='flex items-start space-x-3'>
        <div className='flex-shrink-0 mt-0.5'>{getIcon()}</div>
        <div className='flex-1 min-w-0'>
          <h4 className='text-sm font-semibold text-white'>{toast.title}</h4>
          {toast.message && (
            <p className='mt-1 text-sm text-white/70'>{toast.message}</p>
          )}


            setIsVisible(false);

  return (
          }}
        </div>;
        <button;
          onClick={() => {setIsVisible(false)return (setTimeout(() => onRemove(toast.id), 300)}}
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return <AlertCircle className = $2;
      case 'warning':
        return <AlertCircle className = $2;
      case 'info':
        return <Info className = $2;
      default: return <Info className = $2;
  const getBorderColor = $2;
      case 'error':
        return 'border-red-500/20',
      case 'warning':
        return 'border-yellow-500/20',
      case 'info':
        return 'border-blue-500/20',
      default: return 'border-blue-500/20'
    }
  },

  const getBackgroundColor = $2;
      case 'error':
        return 'bg-red-500/10',
      case 'warning':
        return 'bg-yellow-500/10',
      case 'info':
        return 'bg-blue-500/10',
      default: return 'bg-blue-500/10'
    }
  },

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
        </div>
        <button
          onClick={() => {
            setIsVisible($2);
            setTimeout(() => onRemove(toast.id), 300)
          }}
<<<<<<< HEAD

          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => {
            setIsVisible(false);

  return (


        >
          <X className="w-4 h-4 text-white/60 hover:text-white />
        </button>
      </div>

      <div className='flex items-start space-x-3'    />;
        <div className='flex-shrink-0 mt-0.5'    />{getIcon()}</div>;
        <div className='flex-1 min-w-0'    />;
          <h4 className='text-sm font-semibold text-white'    />{toast.title}</h4>;
          {toast.message && (<p className='mt-1 text-sm text-white/70'    />{toast.message}</p>;
          )}

        </div>
        <button;
onClick={() =    /> {;
            setIsVisible(false);

}
setTimeout(() => onRemove(toast.id), 300);}
          }}


      {/* Progress bar */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden'    />;
        <motion&& motion.div;
          className={`h-full ${toast && toast.type === 'success';
              ? 'bg-green-400';
              : toast && toast.type === 'error';
                ? 'bg-red-400';
                : toast && toast.type === 'warning';
                  ? 'bg-yellow-400';}
                  : 'bg-blue-400';}

=======

          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          <X className="w-4 h-4 text-white/60 hover:text-white" />
        </button>
      </div>

            'bg-blue-400'
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
}) =    /> {transition={{ duration: toast && toast.duration || 5000, ease: 'linear' }
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        />;
      </div>;
    </motion && motion.div>;
  )}

interface ToastContainerProps  {toasts: Toast[];
  onRemove: (id: string) => void;}
}
export const ToastContainer: React.FC<ToastContainerProps    /> = ({ toasts,onRemove   }) => {


<<<<<<< HEAD

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {

          transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}

        />;
      </div>;
    </motion && motion.div>;
  );


=======
return (className="flex-shrink-0 ml-2 p-1 rounded-lg "hover":bg-white/10 transition-colors duration-200">;"

          <X className="w-4 h-4 text-white/60 "hover":text-white" />;"
        </button>;
      </div>;
          className="flex-shrink-0 ml-2 p-1 rounded-lg "hover":bg-white/10 transition-colors duration-200">"

          <X className="w-4 h-4 text-white/60 "hover":text-white" />;"
        </button>;
      </div>;{/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">;"
        <motion&& motion.div;
          className={`h-full ${toast && toast.type === 'success' ? 'bg-green-400' :;'
            }
            toast && toast.type === 'error' ? 'bg-red-400' :;'
            toast && toast.type === 'warning' ? 'bg-yellow-400' :;'
            'bg-blue-400';'
          }`}`
          initial={{ "width": '100%' }}'

          animate={{ "width": '0%' }}'

    <div className='fixed top-4 right-4 z-50 space-y-3'>'
      <AnimatePresence>
        {toasts.map(toast => (          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>

interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void;
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {}
"

  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
<<<<<<< HEAD


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

          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>

    showSuccess;
    showError;
    showInfo;
    showWarning;
    removeToast}


};


    </div>);}          }}
          className="flex - shrink - 0 ml - 2 p - 1 rounded - lg hover:bg - white / 10 transition-colors duration-200";
        >;
          <X className="w - 4 h - 4 text-white / 60 hover:text-white" />;

=======

          transition={{ duration: toast.duration || 5000, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
},

interface ToastContainerProps {
  toasts: Toast[],
  onRemove: (id: string) => void


// Hook for managing toasts,
export const useToast = () => {
 ;
  }
  const [toasts, setToasts] = useState<Toast[]>([]);

const addToast = ("toast": Omit<Toast, 'id'>) => {'
   ;
  }
  const id = Math.random().toString(36).substr(2, 9);
) => {
  return $3;}
}
const newToast = { ...toast, id };
setToasts(prev => { return [...prev, newToast])
}; }


const removeToast = ("id": string) => {
    }
    setToasts(prev => { return prev.filter(toast => toast.id !== id)); }
  }

const showSuccess = ("title": string, message?: string) => {
    }
    addToast({ "type": 'success', title, message });'
  }

const showError = ("title": string, message?: string) => {
    }
    addToast({ "type": 'error', title, message });'
  }

const showInfo = ("title": string, message?: string) => {
    }
    addToast({ "type": 'info', title, message });'
  }

const showWarning = ("title": string, message?: string) => {
    }
    addToast({ "type": 'warning', title, message });'
  }
  return {
    }
    toasts,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    removeToast
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className = $2;
// Hook for managing toasts
export const useToast = () => {
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
};

return (className=\"flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200\">
"
          <X className=\"w-4 h-4 text-white/60 hover:text-white\"    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </button>;
      </div>;"
          className=\"flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200\">
"
          <X className=\"w-4 h-4 text-white/60 hover:text-white\"    />;}
        </button>;}
      </div>;{/* Progress bar */}"
      <div className=\"absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden\"    />;
        <motion&& motion.div;
          className={`h-full ${toast && toast.type === 'success' ? 'bg-green-400' :;
            toast && toast.type === 'error' ? 'bg-red-400' :;
            toast && toast.type === 'warning' ? 'bg-yellow-400' :;}
            'bg-blue-400';}
          }`}
          initial={{ width: '100%' }}

          animate={{ width: '0%' }}
<<<<<<< HEAD


    <div className='fixed top-4 right-4 z-50 space-y-3'    />
      <AnimatePresence    />

        {toasts.map(toast => (}
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove}    />

=======
          transition={{ duration: toast.duration || 5000, ease: "linear" }}
        />;
      </div>;
    </motion.div>);
}

        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ))}
      </AnimatePresence>
    </div>
)
};



<<<<<<< HEAD
=======
// Hook for managing toasts,
export const useToast = () => {
 ;
  const [toasts, setToasts] = useState<Toast[]    />([]);

const addToast = (toast: Omit<Toast, 'id'    />) => {
   ;
  const id = Math.random().toString(36).substr(2, 9);
) => {
  return $3;}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
const showSuccess = () => {
  return $3;}
}
    addToast({ type: 'success', title, message });
  }

  }

const showInfo = () => {
  return $3;}
}
    addToast({ type: 'info', title, message });
  }

  }
  return {
    toasts,
    showSuccess,
    showError,
    showInfo,
    showWarning,

;
    removeToast
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
};

"
>>>>>>> origin/cursor/delete-old-data-records-6bba
