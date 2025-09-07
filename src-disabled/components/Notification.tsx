import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
export interface NotificationProps {
  id: string;,
  type: 'success' | 'error' | 'warning' | 'info';',
  title: string;,
  message?: string;
  duration?: number;
  onClose: (id:,  string) => void;
}
const Notification: React.FC<NotificationProps> = ({,
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };
  const colors = {

  const Icon = icons[type];
  return (
    <AnimatePresence>
      <motion.div
        initial={ opacity: 0, x: 300, scale: 0.8 }
        animate={ opacity: 1, x: 0, scale: 1 }
        exit={ opacity: 0, x: 300, scale: 0.8 }

          </div>
          <button
            onClick={() => onClose(id)}
            className='ml-3 flex-shrink-0 hover:opacity-75 transition-opacity''
          >
            <X className='w-4 h-4' />'
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;