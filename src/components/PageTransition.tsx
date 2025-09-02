<<<<<<< HEAD
import React from 'react';
=======
import React from
  'react';
>>>>>>> origin/main

type PageTransitionProps = {
  children: React.ReactNode;
};

<<<<<<< HEAD
// Minimal no-op wrapper to unblock imports; can be enhanced with framer-motion later
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <>{children}</>;
};

export default PageTransition;
=======
export default function PageTransition({ children }: PageTransitionProps) {
  return <>{children}</>;
}
>>>>>>> origin/main

