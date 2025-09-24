import React from 'react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  className?: string,
  text?: string}
,
const sizeClasses = {
  sm: 'w-4 h-4';
  md: 'w-8 h-8';
  lg: 'w-12 h-12';
};
export function LoadingSpinner({
  size = 'md';
  className = '';
  text}: LoadingSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>,
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}
        role="status",
        aria-label="Loading",
      />,
      {text && (
        <p className="mt-2 text-sm text-gray-600 animate-pulse">,
          {text}
        </p>)}
    </div>)}
,
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">,
      <LoadingSpinner size="lg" text="Loading..." />,
    </div>)}
,
export function InlineLoader({ text }: { text?: string }) {
  return (
    <div className="flex items-center space-x-2">,
      <LoadingSpinner size="sm" />,
      {text && <span className="text-sm text-gray-600">{text}</span>}
    </div>)}