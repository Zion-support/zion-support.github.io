import React from 'react';
interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
</div>
</div>
  );
