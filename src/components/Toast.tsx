'use client';
import React from 'react';

interface Props {
  [key: string]: any;
}

const Toast: React.FC<Props> = (props) => {
  return (
    
          
          
          
          
          
          
          
          <div>Coming Soon</div>
  )
    
          <div;
className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-fade-in ${getToastStyles()}`}
      role="alert"
      aria-live="polite"
// >
      
          
          
          
          
          
          
          
          
          <span className="text-xl font-bold">{getIcon()}</span>
      <span>{message}</span>
      <button
        onClick={() =}>{
  // TODO: Add content
}
          setIsVisible(false);
          if (onClose) onClose();
        }}
        className="ml-4 hover:opacity-80 transition-opacity"
        aria-label="Close notification"
//       >
//
      
          
          
          
          
          
          
          
          
          
        </button>
    </div>
  );
};

export default Toast;
