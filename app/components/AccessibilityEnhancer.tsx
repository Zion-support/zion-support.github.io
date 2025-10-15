import { ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`accessibility-enhancer ${className}`}>
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;