<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Main({ className = '', children, ...props }: MainProps) {
  return (
    <div className={`main-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
root.render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </HelmetProvider>
//   </React.StrictMode>,
);
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
