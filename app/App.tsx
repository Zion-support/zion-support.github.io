import React from 'react';

interface AppProps {
  className?: string;
  children?: React.ReactNode;
}

export default function App({ className = '', children }: AppProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}