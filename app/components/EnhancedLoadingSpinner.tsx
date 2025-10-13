import React from 'react';

interface EnhancedLoadingSpinnerProps {
import { Loader2 } from 'lucide-react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

export default function EnhancedLoadingSpinner({ className = '', children }: EnhancedLoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
export default function EnhancedLoadingSpinner({ className = '', children, ...props }: EnhancedLoadingSpinnerProps) {
        <div className="component" {...props}>
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-gray-400 animate-pulse">{text}</p>
      )}

  if (fullScreen) {
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          {spinner}


  return spinner;

export default LoadingSpinner;


const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  className = ''
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'

      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
        <p className="mt-2 text-sm text-gray-600">{text}</p>

export default EnhancedLoadingSpinner;

}: LoadingSpinnerProps) {

      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}



  xl: 'w-16 h-16',

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{text}</p>
export default function Enhancedloadingspinner({ className = '', children, ...props }: EnhancedloadingspinnerProps) {


  text,
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`} />
export default $1;
