import React from 'react'
interface ResponsiveContainerProps {
<<<<<<< HEAD
  children: React.ReactNode
  className?: string}
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className = '' }) => {'
=======
  children: React.ReactNode;
  className?: string;
}

export default function ResponsiveContainer({ children, className = '' }: ResponsiveContainerProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
  children: React.ReactNode;
  className?: string;}
}
'
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className = '' }) => {';
  return (}
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>;
      {children}
    </div>
  );
<<<<<<< HEAD
}
export default ResponsiveContainer;
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}
    </div>
  )}
export default ResponsiveContainer
};
export default ResponsiveContainer;'
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
