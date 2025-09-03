<<<<<<< HEAD
import React from 'react';

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({
  size = "md",
  color = "primary",
  text,
  fullScreen = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  const colorClasses = {
    primary: "border-blue-600",
    secondary: "border-purple-600",
    white: "border-white"
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full ${colorClasses[color]} border-t-transparent`}
        style={{ animation: "spin 1s linear infinite" }}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="mt-4 text-gray-600 text-center">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}

// Pulse loading variant
export function LoadingPulse({
  size = "md",
  color = "primary"
}: Omit<LoadingSpinnerProps, "text" | "fullScreen">) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  const colorClasses = {
    primary: "bg-blue-600",
    secondary: "bg-purple-600",
    white: "bg-white"
  };

  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
    </div>
  );
}

// Skeleton loading variant
export function LoadingSkeleton({
  lines = 3,
  className = ""
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 rounded mb-3 ${
            i === lines - 1 ? "w-3/4" : "w-full"
          }`}
        />
      ))}
    </div>
  );
}
=======
import React from 'react'
import { Loader2 } from 'lucide-react'
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  )
React from, react'
import { Loader2  }  from 'lucide-react;interface LoadingSpinnerProps {
  size?: 'sm ' | 'md ' | 'lg 
   text?: string
   className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size =, md', text, '  className = ''}) => {
  '  const sizeClasses = {'    sm: 'w-4 h-4, md:, w-8 h-8,    lg: 'w-12 h-12}'  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>`      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>'      )}'    </div>)
}

export default LoadingSpinner
>>>>>>> main
