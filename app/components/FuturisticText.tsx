<<<<<<< HEAD
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
=======
import React from 'react'.

interface FuturisticTextProps {
  className?: string.
  children?: React.ReactNode.
}

export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
<<<<<<< HEAD
  );
=======
    </div>
  ).
  ).
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
}
>>>>>>> origin/main
