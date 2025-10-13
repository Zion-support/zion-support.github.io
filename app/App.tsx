import React from 'react';

interface AppProps {
  className?: string;
  children?: React.ReactNode;
}

export default function App({ className = '', children, ...props }: AppProps) {
  return (
    <div className={`app-component ${className}`} {...props}>
      {children}
    </div>
  );
}
