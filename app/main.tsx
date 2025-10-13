<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
=======
import React from 'react';

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b119

export default function Main({ className = '', children, ...props }: MainProps) {
  return (
    <div className={`main-component ${className}`} {...props}>
      {children}
    </div>
  );
}
