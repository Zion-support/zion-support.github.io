import React from 'react';

interface ARIALandmarksProps {
  children: React.ReactNode;
}

const ARIALandmarks: React.FC<ARIALandmarksProps> = ({ children }) => {
  return (
    <div role="application" aria-label="Zion Tech Group Website">
      <header role="banner" id="header">
        {children}
      </header>
    </div>
  );
};

export default ARIALandmarks;