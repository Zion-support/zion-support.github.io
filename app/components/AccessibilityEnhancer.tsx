import React from 'react';
import { Helmet } from 'react-helmet-async';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>AccessibilityEnhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      {children}
    </>
  );
};

export default AccessibilityEnhancer;