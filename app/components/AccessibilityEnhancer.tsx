import React from 'react';
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ className, children }) => {
  return (
    <div className={'accessibilityenhancer ' + className}>
      {children || <p>AccessibilityEnhancer component</p>}
    </div>
  );
};
};

export default AccessibilityEnhancer;
