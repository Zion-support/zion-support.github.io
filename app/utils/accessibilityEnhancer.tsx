import React from 'react';

export const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div role="main" aria-label="Main content">
      {children}
    </div>
  );
};
