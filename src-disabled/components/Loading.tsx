import React from 'react';
import { motion } from 'framer-motion';
interface LoadingProps {
  text?: string;
  fullScreen?: boolean;
}
const Loading: React.FC<LoadingProps> = ({
  text = 'Loading...',
  fullScreen = false,
}) => {
  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-slate-900 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-8';
  return (
    <div className={containerClasses}>
      <motion.div
        className="text-center""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4""
          animate={{ rotate: 360 }}
transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-gray-300">{text}</p>"
      </motion.div>
    </div>
  );
};

export default Loading;
