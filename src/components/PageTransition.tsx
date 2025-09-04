import React from 'react';
;
interface PageTransitionProps {;
  children: React.ReactNode;
;
}
<<<<<<< HEAD

const PageTransition: Reac t.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
=======
;
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {;
  return (;
    <div className="min-h-screen">;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
      {children}
    </div>;
  );
};
<<<<<<< HEAD
"export default PageTransition;';
</PageTransitionProps>;';;';
=======
"export default PageTransition;
</PageTransitionProps>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
