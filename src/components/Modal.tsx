import React, { useEffect } from 'react';
interface ModalProps {
  isOpen: boolean;,
  onClose: () => void;,
  title?: string;
  children: React.ReactNode;,
  className?: string;
}
<<<<<<< HEAD

const Modal: React.FC<ModalProps> = ({
=======
const Modal: React.FC<ModalProps> = ({ ,
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
  isOpen,
  onClose,
  title,
  children,
<<<<<<< HEAD
  className = '',
=======
className = '' '
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
}) => {
  useEffect(() => {
    const handleEscape = (e:,  KeyboardEvent) => {,
      if (e.key === 'Escape') {'
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">"
      {/* Backdrop */}
      <div
<<<<<<< HEAD
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 ${className}`}
      >
=======
className="absolute inset-0 bg-black bg-opacity-50""
        onClick={onClose}
      />
      {/* Modal */}
      <div className={`relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 ${className}`}>`
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">"
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>"
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors""
            >
<<<<<<< HEAD
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
=======
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />"
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
              </svg>
            </button>
          </div>
        )}

        {/* Content */}
<<<<<<< HEAD
        <div className="p-6">{children}</div>
=======
        <div className="p-6">"
          {children}
        </div>
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
      </div>
    </div>
  );
};

export default Modal;
