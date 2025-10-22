<<<<<<< HEAD
// Performance utilities

export function performanceUtils() {
  return {
    measurePerformance: (name: string, fn: () => void) => {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    },
    debounce: (func: (...args: any[]) => void, wait: number) => {
      let timeout: NodeJS.Timeout;
      return function executedFunction(...args: any[]) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  };
}
=======
import React from 'react';

interface performanceUtilsProps {
  className?: string;
  children?: React.ReactNode;
}

const performanceUtils: React.FC<performanceUtilsProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`performanceutils-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">performanceUtils</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};

export default performanceUtils;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
