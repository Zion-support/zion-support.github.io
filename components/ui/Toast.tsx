
<<<<<<< HEAD

import React, { useState, useEffect } from 'react';'
import { motion, AnimatePresence  } from 'framer-motion';'
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';'

export type ToastType = any;

const getIcon = (
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
<<<<<<< HEAD
export type ToastType = any;

const getIcon = (
=======

>>>>>>> origin/chore/fix-lint-and-merge
export type ToastType = any;
}, [toast.id, toast.duration, onRemove]);

const getIcon = (
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
export type ToastType = 'success' | 'error' | 'info' | 'warning';
}, [toast.id, toast.duration, onRemove]);
const getIcon = () => {
  switch (toast.type) {
<<<<<<< HEAD
  case 'success':
interface ToastProps {
  toast: Toast;
onRemove: (id: string) => void,) => {
  return $3;}
}
=======
  case success':
=======
  switch (toast.type) {
  case 'success':
>>>>>>> origin/chore/fix-lint-and-merge
interface ToastProps {
  toast: Toast;
<<<<<<< HEAD
onRemove: (id: string) => void,) => {
  return $3;}
}
<<<<<<< HEAD
}
import React from 'react';
export type ToastType = 'success' | 'error' | 'info' | 'warning';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
export type ToastType = $2;
export interface Toast {
  id: string,
  type: ToastType,
  title: string,
  message?: string,
  duration?: number
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
}

import React from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
<<<<<<< HEAD

}, [toast && toast.id, toast && toast.duration, onRemove]);

const getIcon = (;
  switch (toast && toast.type) {;
  case 'success': ;

interface ToastProps {;
  toast: Toast;
  onRemove: (id: string) => void;
export type ToastType = 'success' | 'error' | 'info' | 'warning';
export interface Toast {
  id: string,
  type: ToastType,
  title: string,
  message?: string,
  duration?: number
}
=======
>>>>>>> merged-prs-20250907-203621

=======


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
import React from 'react';
 export type ToastType = 'success' | 'error' | 'info' | 'warning';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}, [toast && toast.id, toast && toast.duration, onRemove]);

const getIcon = (;
  switch (toast && toast.type) {;
  case 'success': ;
interface ToastProps {;
  toast: Toast;
  onRemove: (id: string) => void;
<<<<<<< HEAD
) => {
  return $3;}
=======
export type ToastType = 'success' | 'error' | 'info' | 'warning';
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
const ToastItem: React.FC<ToastProps    /> = ({ toast, onRemove    }) => {

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
setTimeout(() => onRemove(toast.id), 300);
=======


=======
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
export interface Toast {
  id: string
  type: ToastType
  title: string
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

<<<<<<< HEAD
const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState($2);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible($2);
=======

=======
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const ToastItem: React.FC<ToastProps> = ({ toast, onRemove }) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(false);
<<<<<<< HEAD
}
setTimeout(() => onRemove(toast.id), 300);}
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      setTimeout(() => onRemove(toast.id), 300)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

<<<<<<< HEAD
<<<<<<< HEAD
  const getIcon = $2;
=======
      case 'error':
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration |5000);
    return () => clearTimeout(timer);  }, [toast.id, toast.duration, onRemove]);      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration |5000);
    return () => clearTimeout(timer)
<<<<<<< HEAD
  }, [toast.id, toast.duration, onRemove]),

<<<<<<< HEAD
const getIcon = () => {
    }
    switch (toast.type) {
      }
      case 'success':;'
  return <CheckCircle className='w-5 h-5 text-green-400' />;'
      case 'error':'

        return <AlertCircle className='w-5 h-5 text-red-400' />;'
      case 'warning':;'
        return <AlertCircle className='w-5 h-5 text-yellow-400' />;'
      case 'info':;'
        return <Info className='w-5 h-5 text-blue-400' />;'
=======
  const getIcon = $2;
      case 'error':
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      "default":

        return <Info className='w-5 h-5 text-blue-400' />;'
    }
origin/cursor/automate-test-improve-and-merge-code-2533
  }
=======
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
      default:

<<<<<<< HEAD
        return <Info className='w-5 h-5 text-blue-400' />;    }'
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return <Info className='w-5 h-5 text-blue-400' />;    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    }

  };

const getBorderColor = () => {
    }
    switch (toast.type) {
      }
      case 'success':'

<<<<<<< HEAD
       ;
  return 'border-green-500/20';'
      case 'error':;'
        return 'border-red-500/20';'
      case 'warning':;'
        return 'border-yellow-500/20';'

      case 'info':'
        return 'border-blue-500/20';'

"default":
        return 'border-blue-500/20';'
    }

        return 'bg-green-500/10';'
      case 'error':;'
        return 'bg-red-500/10';'
      case 'warning':;'
        return 'bg-yellow-500/10';'

      case 'info':'
        return 'bg-blue-500/10';'

"default":

        return 'bg-blue-500/10';'
    }
    >;
      <div className='flex items-start space-x-3'>;'
        <div className='flex-shrink-0 mt-0.5'>{getIcon()}</div>;'
        <div className='flex-1 min-w-0'>;'
          <h4 className='text-sm font-semibold text-white'>{toast.title}</h4>;'
          {toast.message && (<p className='mt-1 text-sm text-white/70'>{toast.message}</p>;'
          )}

        </div>
        <button,
onClick={() => {;
            }
=======
  }

        return <Info className='w-5 h-5 text-blue-400' />;    }
=======
const getIcon = (
    switch (toast.type) {
      case 'success':;
  return <CheckCircle className='w-5 h-5 text-green-400'    />;
      case 'error':

        return <AlertCircle className='w-5 h-5 text-red-400'    />;
      case 'warning':;
        return <AlertCircle className='w-5 h-5 text-yellow-400'    />;
      case 'info':;
        return <Info className='w-5 h-5 text-blue-400'    />;

      default:

        return <Info className='w-5 h-5 text-blue-400'    />;) => {
  return $3;}
}
    }
>>>>>>> origin/chore/fix-lint-and-merge
  }

        return <Info className='w-5 h-5 text-blue-400'    />;    }

    }

  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const getBorderColor = () => {
=======
const getBorderColor = (
>>>>>>> origin/chore/fix-lint-and-merge
    switch (toast.type) {
      case 'success':

<<<<<<< HEAD

       ;
  return 'border-green-500/20';
      case 'error':;
=======
<<<<<<< HEAD
  };

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return 'border-green-500/20';
      case 'error':
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return 'border-red-500/20';
      case 'warning':;
        return 'border-yellow-500/20';
<<<<<<< HEAD
<<<<<<< HEAD
      case 'info':;
        return 'border-blue-500/20';const getBorderColor = () => {switch (toast && toast.type) {case 'success':;
  const getBorderColor = () => {;
    switch (toast && toast.type) {;
      case 'success':;
      case 'info':;
        return 'border-blue-500/20';const getBorderColor = () => {switch (toast && toast.type) {case 'success':;
=======
      case 'info':
        return 'border-blue-500/20';
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

      case 'info':
        return 'border-blue-500/20';

default:
        return 'border-blue-500/20';) => {
  return $3;}
}
    }

>>>>>>> origin/chore/fix-lint-and-merge
        return 'bg-green-500/10';
      case 'error':;
        return 'bg-red-500/10';
      case 'warning':;
        return 'bg-yellow-500/10';
<<<<<<< HEAD
      case 'info':;
        return 'bg-blue-500/10';
      default:;
        return 'bg-blue-500/10';
    }
        return 'bg-blue-500/10';default:;
        return 'border-blue-500/20';}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      default:
        return 'border-blue-500/20';    }      default: return 'border-blue-500/20'
    }
  }
  const getBackgroundColor = () => {
    switch (toast.type) {
      case 'success':
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return 'bg-green-500/10';
      case 'error':
        return 'bg-red-500/10';
      case 'warning':
        return 'bg-yellow-500/10';
      case 'info':
        return 'bg-blue-500/10';
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

      case 'info':
        return 'bg-blue-500/10';

default:

>>>>>>> origin/chore/fix-lint-and-merge
        return 'bg-blue-500/10';
    }
  }
    >;
<<<<<<< HEAD
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

<<<<<<< HEAD
        </div>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <button
          onClick={() => {;
            setIsVisible(false);

  return (
          }}
        </div>;
        <button;
          onClick={() => {setIsVisible(false)return (setTimeout(() => onRemove(toast.id), 300)}}
>>>>>>> merged-prs-20250907-203621
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
=======
          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            setIsVisible(false);

  return (
          }}
        </div>;
        <button;
          onClick={() => {setIsVisible(false)return (setTimeout(() => onRemove(toast.id), 300)}}
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

<<<<<<< HEAD
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
          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
=======
<<<<<<< HEAD
          className=flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
=======
            setTimeout(() => onRemove(toast.id), 300)
          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        >
          <X className="w-4 h-4 text-white/60 hover:text-white" />
        </button>
      </div>
<<<<<<< HEAD
      
      {/* Progress bar */}
<<<<<<< HEAD
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden'>;'
        <motion&& motion.div;
          className={`h-full ${toast && toast.type === 'success';'              ? 'bg-green-400';'
              : toast && toast.type === 'error';'
                ? 'bg-red-400';'
                : toast && toast.type === 'warning';'
                  ? 'bg-yellow-400';'
                  : 'bg-blue-400';'
          }`}`          initial={{ "width": '100%' }}'
          animate={{ "width": '0%' }},'
}) => {transition={{ "duration": toast && toast.duration || 5000, "ease": 'linear' ,'
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {

          transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
=======

=======
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
>>>>>>> origin/chore/fix-lint-and-merge
}
setTimeout(() => onRemove(toast.id), 300);}
          }}

<<<<<<< HEAD
          transition={{ duration: toast && toast.duration || 5000, ease: "linear }}
=======
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
          className="flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200";
        >;
          <X className="w-4 h-4 text-white/60 hover:text-white" />;
        </button>;
      </div>;
<<<<<<< HEAD
=======



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">;
        <motion&& motion.div
          className={`h-full ${
            toast && toast.type === 'success' ? 'bg-green-400' :
            toast && toast.type === 'error' ? 'bg-red-400' :
            toast && toast.type === 'warning' ? 'bg-yellow-400' :
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
            'bg-blue-400'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            'bg-blue-400'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
}) =    /> {transition={{ duration: toast && toast.duration || 5000, ease: 'linear' }
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        />;
      </div>;
    </motion && motion.div>;
  )}

interface ToastContainerProps  {toasts: Toast[];
  onRemove: (id: string) => void;}
}
export const ToastContainer: React.FC<ToastContainerProps    /> = ({ toasts,onRemove   }) => {


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
          animate={{ "width": '0%' }}'
=======
setTimeout(() => onRemove(toast.id), 300);
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
      {/* Progress bar */}'
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden'>;
        <motion&& motion.div;`
          className={`h-full ${'
            toast && toast.type === 'success''
              ? 'bg-green-400''
              : toast && toast.type === 'error''
                ? 'bg-red-400''
                : toast && toast.type === 'warning''
                  ? 'bg-yellow-400''
                  : 'bg-blue-400'`
          }`}'
          initial={{ width: '100%' }}'
          animate={{ width: '0%' }}
}) => {'
          transition={{ duration: toast && toast.duration || 5000, ease: 'linear' }}
        />;
      </div>;
    </motion && motion.div>;
  )
};
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {}
"
<<<<<<< HEAD
          transition={{ duration: toast && toast.duration || 5000, ease: "linear" }};
=======
          transition={{ duration: toast && toast.duration || 5000, ease: "linear }}
=======
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {

          transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
<<<<<<< HEAD
transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        />;
      </div>;
    </motion && motion.div>;
  );
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          transition={{ duration: toast.duration || 5000, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
},

interface ToastContainerProps {
  toasts: Toast[],
  onRemove: (id: string) => void
<<<<<<< HEAD
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className = $2;
// Hook for managing toasts
export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]),

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr($2);
    const newToast = { ...toast, id },
    setToasts(prev => [...prev, newToast])
  },

  const removeToast = $2;
  const showSuccess = (title: string, message?: string) => {
    addToast({ type: 'success', title, message })
  },

  const showError = (title: string, message?: string) => {
    addToast({ type: 'error', title, message })
  },

  const showInfo = (title: string, message?: string) => {
    addToast({ type: 'info', title, message })
  },

  const showWarning = (title: string, message?: string) => {
    addToast({ type: 'warning', title, message })
  },

          transition={{ duration: toast.duration || 5000, ease: "linear" }}
        />;
      </div>;
    </motion.div>);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
)
};

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
=======

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className = $2;
// Hook for managing toasts
export const useToast = () => {
<<<<<<< HEAD
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id }
    setToasts(prev => [...prev, newToast]);
  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

"
};    toasts;
    showSuccess;
    showError;
    showInfo;
    showWarning;
    removeToast}
}
=======
  const [toasts, setToasts] = useState<Toast[]>([]),

<<<<<<< HEAD
  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr($2);
    const newToast = { ...toast, id },
    setToasts(prev => [...prev, newToast])
  },

  const removeToast = $2;
  const showSuccess = (title: string, message?: string) => {
    addToast({ type: 'success', title, message })
  },

  const showError = (title: string, message?: string) => {
    addToast({ type: 'error', title, message })
  },

  const showInfo = (title: string, message?: string) => {
    addToast({ type: 'info', title, message })
  },

  const showWarning = (title: string, message?: string) => {
    addToast({ type: 'warning', title, message })
  },

=======

};    toasts;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    showSuccess;
    showError;
    showInfo;
    showWarning;
    removeToast}
<<<<<<< HEAD
};
=======

};

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className='fixed top - 4 right - 4 z - 50 space - y-3'>;
      <AnimatePresence>;
        {toasts.map (toast => (          <ToastItem key={toast.id} toast={toast} on_remove={on_remove} />))}
      </AnimatePresence>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </div>);}          }}
          className="flex - shrink - 0 ml - 2 p - 1 rounded - lg hover:bg - white / 10 transition-colors duration-200";
        >;
          <X className="w - 4 h - 4 text-white / 60 hover:text-white" />;
=======
return (className=\"flex-shrink-0 ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200\">
"
          <X className=\"w-4 h-4 text-white/60 hover:text-white\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
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
          transition={{ duration: toast.duration || 5000, ease: "linear" }}
        />;
      </div>;
    </motion.div>);
}
<<<<<<< HEAD
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
=======

    <div className='fixed top-4 right-4 z-50 space-y-3'    />
      <AnimatePresence    />

        {toasts.map(toast => (}
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove}    />
>>>>>>> origin/chore/fix-lint-and-merge
        ))}
      </AnimatePresence>
    </div>
)
};


<<<<<<< HEAD


=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Hook for managing toasts;
export const useToast = (
 ;
  const [toasts, setToasts] = useState<Toast[]    />([]);

const addToast = (toast: Omit<Toast, 'id'    />) => {
   ;
>>>>>>> origin/chore/fix-lint-and-merge
  const id = Math.random().toString(36).substr(2, 9);
) => {
  return $3;}
}
<<<<<<< HEAD

=======
const newToast = { ...toast, id };
setToasts(prev => [...prev, newToast])
};
>>>>>>> origin/chore/fix-lint-and-merge


const removeToast = (
    setToasts(prev => prev.filter(toast => toast.id !== id));) => {
  return $3;}
}
  }

const showSuccess = () => {
  return $3;}
}
    addToast({ type: 'success', title, message });
  }

<<<<<<< HEAD
=======
const showError = () => {
  return $3;}
}
    addToast({ type: 'error', title, message });
>>>>>>> origin/chore/fix-lint-and-merge
  }

const showInfo = () => {
  return $3;}
}
    addToast({ type: 'info', title, message });
  }

<<<<<<< HEAD
=======
const showWarning = () => {
  return $3;}
}
    addToast({ type: 'warning', title, message });
>>>>>>> origin/chore/fix-lint-and-merge
  }
  return {
    toasts,
    showSuccess,
    showError,
    showInfo,
<<<<<<< HEAD
    showWarning,
          animate={{ width: '0%' }}<div className='fixed top-4 right-4 z-50 space-y-3'>;
      <AnimatePresence>;
        {toasts.map(toast => (          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />;
        ))}
      </AnimatePresence>;
    </div>;
interface ToastContainerProps  {toasts: Toast[];
  onRemove: (id: string) => void;
}
<<<<<<< HEAD
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {transition={{ duration: toast && toast.duration || 5000, ease: "linear" }}
        />;
      </div>;
    </motion && motion.div>;
  )return (<ToastItem key={toast.id} toast={toast} onRemove={onRemove} />;
        ))}
      </AnimatePresence>;
    </div>;
interface ToastContainerProps  {toasts: Toast[];
  onRemove: (id: string) => void;
}
export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {return (<div className="fixed top-4 right-4 z-50 space-y-3">;
      <AnimatePresence>;
        {toasts.map((toast) => (<ToastItem key={toast.id} toast={toast} onRemove={onRemove} />;
        ))}
      </AnimatePresence>;
interface ToastContainerProps  {toasts: Toast[],onRemove: (id: string) => void;
}
  return (<div className="fixed top-4 right-4 z-50 space-y-3">;
      <AnimatePresence>;
        {toasts && toasts.map((toast) => (<ToastItem key={toast && toast.id} toast={toast} onRemove={onRemove} />;
        ))}
}toasts;

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
interface ToastContainerProps {;
  toasts: Toast[],;
  onRemove: (id: string) => void;
}
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">;
      <AnimatePresence>;
        {toasts && toasts.map((toast) => (;
          <ToastItem key={toast && toast.id} toast={toast} onRemove={onRemove} />;
        ))}
=======
    showWarning}
    removeToast}
  }
>>>>>>> origin/chore/fix-lint-and-merge
};
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


"
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
