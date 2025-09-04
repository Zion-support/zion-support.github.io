import React from 'react';

interface PageTransitionProps {

  children: Reac t.ReactNode;

}

const PageTransition: Reac t.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};
"export default PageTransition;
</PageTransitionProps>