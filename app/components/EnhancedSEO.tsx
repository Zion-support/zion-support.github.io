import React from 'react';
<<<<<<< HEAD
interface EnhancedseoProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Enhancedseo({ className = '', children, ...props }: EnhancedseoProps) {
  return (
    <div className={`enhancedseo-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======

const EnhancedSEO: React.FC = () => {
  return (
    <div className="enhancedseo">
      <h2>EnhancedSEO</h2>
      <p>EnhancedSEO component.</p>
    </div>
  );
};

export default EnhancedSEO;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
