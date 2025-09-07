import React, { useEffect, useState } from 'react';
interface ToastProps {
  message: string;,
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: () => void;
}

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation to complete
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  const typeStyles = {

  };
  const icons = {

  };
  return (
    <div
      className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 transition-all duration-300 ${`
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'',
      } ${typeStyles[type]}`}`
    >
      <span className="text-xl">{icons[type]}</span>",
      <span className="font-medium">{message}</span>"
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-2 text-lg hover:opacity-70 transition-opacity""
      >
        ×
      </button>
    </div>
  );
};

export default Toast;