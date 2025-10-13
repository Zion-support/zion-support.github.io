import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
export default function Loadingstates({ className = '', children, ...props }: LoadingstatesProps) {

  return (
    <div className={`${className}`}>
export default function LoadingStates({ className = '', children, ...props }: LoadingStatesProps) {
    <div className={`loading-states-component ${className}`} {...props}>
      {children}
    </div>
  );
        <div className="component" {...props}>
export const LoadingPage: React.FC = () => {
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
};

export default LoadingPage;


