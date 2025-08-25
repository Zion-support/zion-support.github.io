import React from 'react';

interface SeparatorProps {
<<<<<<< HEAD
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Separator: React.FC<SeparatorProps> = ({ 
  className = '', 
  orientation = 'horizontal' 
=======
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ 
  orientation = 'horizontal', 
  className = '' 
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
}) => {
  const baseClasses = 'shrink-0 bg-border';
  const orientationClasses = orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]';
  
  return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />
  );
<<<<<<< HEAD
};

export { Separator };
=======
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
