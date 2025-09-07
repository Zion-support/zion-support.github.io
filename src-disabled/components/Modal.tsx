import React, { useEffect } from 'react';
interface ModalProps {
  isOpen: boolean;,
  onClose: () => void;,
  title?: string;
  children: React.ReactNode;,
  className?: string;
}

  isOpen,
  onClose,
  title,
  children,

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
    <div className='fixed inset-0 z-50 flex items-center justify-center'>'
      {/* Backdrop */}
      <div

        {/* Header */}
        {title && (
          <div className='flex items-center justify-between p-6 border-b border-gray-200'>'
            <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>'
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-600 transition-colors''
            >

              </svg>
            </button>
          </div>
        )}

        {/* Content */}

      </div>
    </div>
  );
};

export default Modal;