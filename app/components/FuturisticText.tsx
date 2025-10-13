import React from 'react'.

interface FuturisticTextProps {
  className?: string.
  children?: React.ReactNode.;
};
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
  return (
<<<<<<< HEAD
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
}
=======
    <div className={`futuristic-text ${className}`} {...props}>;
      {children};
    </div>;
  );
  );
};`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
