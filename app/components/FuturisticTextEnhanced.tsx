import React from 'react';

<<<<<<< HEAD
interface FuturisticTextEnhancedProps {
=======
interface FuturistictextenhancedProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticTextEnhanced({ className = '', children }: FuturisticTextEnhancedProps) {
=======
export default function Futuristictextenhanced({ className = '', children, ...props }: FuturistictextenhancedProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}