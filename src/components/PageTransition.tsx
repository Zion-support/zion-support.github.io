import React from 'react';type PageTransitionProps = {
  children: React.ReactNode;
};

// Minimal no-op wrapper to unblock imports; can be enhanced with framer-motion later
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <>{children}</>;
};

export default PageTransition;