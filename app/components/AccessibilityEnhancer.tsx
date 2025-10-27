import React from 'react';
interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

  return (
    <div className={'accessibilityenhancer ' + className}>
      {children || <p>AccessibilityEnhancer component</p>}
    </div>
  );
};
export default AccessibilityEnhancer;
