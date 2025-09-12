import React, { useState, useEffect } from 'react';
import './Notification.css';

export interface NotificationProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const Notification: React.FC<NotificationProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
  action,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300); // Match CSS transition duration
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
        return 'ℹ';
    }
  };

  return (
    <div
      className={`notification notification--${type} ${
        isVisible ? 'notification--visible' : ''
      } ${isLeaving ? 'notification--leaving' : ''}`}
      role='alert'
      aria-live='polite'
    >
      <div className='notification__icon'>{getIcon()}</div>
      <div className='notification__content'>
        <div className='notification__title'>{title}</div>
        {message && <div className='notification__message'>{message}</div>}
        {action && (
          <button
            className='notification__action'
            onClick={action.onClick}
            type='button'
          >
            {action.label}
          </button>
        )}
      </div>
      <button
        className='notification__close'
        onClick={handleClose}
        aria-label='Close notification'
        type='button'
      >
        ×
      </button>
    </div>
  );
};

export default Notification;
