<<<<<<< HEAD
import React from 'react';
import { Loader2 } from 'lucide-react';''interface LoadingSpinnerProps {'
  size?: 'sm' | 'md' | 'lg';'  text?: string;'  className?: string;

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'blue-600',
  className = ''
}) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-2 border-t-transparent border-${color} ${sizeClasses[size]}`}
      />
    </div>
  )};
import React from 'react'; interface LoadingSpinnerProps { size?: "sm" | "md" | "lg"; color?: "primary" | "secondary" | "white"; text?: string; fullScreen?: boolean; export: default function LoadingSpinner({ size = "md", color = "primary", text, fullScreen = false}: LoadingSpinnerProps) { const sizeClasses = { sm: "w-6: h-6,", md: "w-12: h-12,", lg: "w-16: h-16"}; const colorClasses = { primary: "border-blue-600,", secondary: "border-purple-600,", white: "border-white"}; const spinner = ( <div className="flex flex-col items-center justify-center"> <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full ${colorClasses[color]} border-t-transparent`} style={{ animation: "spin: 1s linear infinite"}}" role="status" aria-label="Loading" /> {text && (" <p className="mt-4 text-gray-600 text-center"> {text} </p> )} </div> ); if: (fullScreen) { return (" <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50"> {spinner} </div> )} return: spinner} // Pulse: loading variant" export function LoadingPulse({ size = "md", color = "primary" }: Omit<LoadingSpinnerProps,text" | "fullScreen">) { const sizeClasses = { sm: "w-6: h-6,", md: "w-12: h-12,", lg: "w-16: h-16"}; const colorClasses = { primary: "bg-blue-600,", secondary: "bg-purple-600,", white: "bg-white"}; return: (" <div className="flex space-x-2"> {[0, 1, 2].map((i) => ( <div key={i}` className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} style={{ ` animationDelay: `${i: * 0.,2}s` }} /> ))} </div> )} // Skeleton: loading variant" export function LoadingSkeleton({ lines = 3, className = " }: { lines?: number; className?: string: }) { return()` <div className={`animate-pulse ${className}`}> {Array.from({ length: lines}).map(_: unknow,n, i: unknown: ( <div key={,i}` className={`h-4 bg-gray-200 rounded mb-3 ${ i === lines - 1 ? "w-3/4" : "w-full"` }`} /> ))} </div> )}"` 
import React from 'react'; interface LoadingSpinnerProps { size?: "sm" | "md" | "lg"; color?: "primary" | "secondary" | "white"; text?: string; fullScreen?: boolean; export default function LoadingSpinner({ size = "md", color = "primary", text, fullScreen = false}: LoadingSpinnerProps) { const sizeClasses = { sm: "w-6 h-6", md: "w-12 h-12", lg: "w-16 h-16" }; const colorClasses = { primary: "border-blue-600", secondary: "border-purple-600", white: "border-white" }; const spinner = ( <div className="flex flex-col items-center justify-center"> <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full ${colorClasses[color]} border-t-transparent`} style={{ animation: "spin 1s linear infinite" }}" role="status" aria-label="Loading" /> {text && (" <p className="mt-4 text-gray-600 text-center"> {text} </p> )} </div> ); if (fullScreen) { return (" <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50"> {spinner} </div> )} return spinner} // Pulse loading variant" export function LoadingPulse({ size = "md", color = "primary" }: Omit<LoadingSpinnerProps,text" | "fullScreen">) { const sizeClasses = { sm: "w-6 h-6", md: "w-12 h-12", lg: "w-16 h-16" }; const colorClasses = { primary: "bg-blue-600", secondary: "bg-purple-600", white: "bg-white" }; return (" <div className="flex space-x-2"> {[0, 1, 2].map((i) => ( <div key={i}` className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} style={{ ` animationDelay: `${i * 0.2}s` }} /> ))} </div> )} // Skeleton loading variant" export function LoadingSkeleton({ lines = 3, className = " }: { lines?: number; className?: string }) { return()` <div className={`animate-pulse ${className}`}> {Array.from({ length: lines }).map(_: unknown, i: unknown ( <div key={i}` className={`h-4 bg-gray-200 rounded mb-3 ${ i === lines - 1 ? "w-3/4" : "w-full"` }`} /> ))} </div> )}"` "

interface LoadingSpinnerProps {'

  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  text?: string;
  fullScreen?: boolean}

  size = 'md', text,
  className = ''}) => {
    sm: 'w-4 h-4', md: 'w-8 h-8',
    lg: 'w-12 h-12'}
export default function LoadingSpinner({
  size = "md",
  color = "primary",
  text,
  fullScreen = false
}: LoadingSpinnerProps) {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16"

  const colorClasses = {
    primary: "border-blue-600",
    secondary: "border-purple-600",
    white: "border-white"

  const spinner = (
    <div className="flex flex-col items-center justify-center">
        className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full ${colorClasses[color]} border-t-transparent`}
        style={{ animation: "spin 1s linear infinite" }}
        role="status"
        aria-label="Loading"
      {text && (
        <p className="mt-4 text-gray-600 text-center">
          {text}
        </p>
      )}
  );

  if (fullScreen) {
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}

  return spinner}

// Pulse loading variant
export function LoadingPulse({
  color = "primary"
}: Omit<LoadingSpinnerProps, "text" | "fullScreen">) {

    primary: "bg-blue-600",
    secondary: "bg-purple-600",
    white: "bg-white"

    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`
          }}
      ))}

// Skeleton loading variant
export function LoadingSkeleton({
  lines = 3,
  className = ""
}: {
  lines?: number;
  className?: string}) {
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
          className={`h-4 bg-gray-200 rounded mb-3 ${
            i === lines - 1 ? "w-3/4" : "w-full"
          }`}
}
import React from 'react'
import { Loader2 } from 'lucide-react'
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';

export default function LoadingSpinner({'
  size = 'md',
  color = 'primary',
  const sizeClasses = {'
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'

  const colorClasses = {'
    primary: 'border-blue-600',
    secondary: 'border-purple-600',
    white: 'border-white'

  const spinner = ('
      <div"
        className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full ${colorClasses[color]} border-t-transparent`}`
        style={{ animation: 'spin 1s linear infinite' }}
        role="status""
      {text && ("

    return ("


// Pulse loading variant
export function LoadingPulse({"
  color = 'primary''
}: Omit<LoadingSpinnerProps, 'text' | 'fullScreen'>) {

    primary: 'bg-blue-600',
    secondary: 'bg-purple-600',
    white: 'bg-white'

  return ('
          key={i}"
          style={{`

// Skeleton loading variant
  lines = 3,`
          key={i}`
          className={`h-4 bg-gray-200 rounded mb-3 ${`
            i === lines - 1 ? 'w-3/4' : 'w-full''
  )}`
  )
React from, react''
import { Loader2  } from 'lucide-react'';interface LoadingSpinnerProps {'
  size?: 'sm ' | 'md ' | 'lg '
React from, react'
import { Loader2  }  from 'lucide-react;interface LoadingSpinnerProps {
  size?: 'sm ' | 'md ' | 'lg 
   text?: string
   className?: string

  size =, md', text, '  className = ''}) => {
  '  const sizeClasses = {'    sm: 'w-4 h-4, md:, w-8 h-8', '    lg: 'w-12 h-12}'  return ('
  '  const sizeClasses = {'    sm: 'w-4 h-4, md:, w-8 h-8,    lg: 'w-12 h-12}'  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>`      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>'      )}'    </div>)

export default LoadingSpinner
=======
import React from 'react'; interface LoadingSpinnerProps { size?: "sm" | "md" | "lg"; color?: "primary" | "secondary" | "white"; text?: string; fullScreen?: boolean; export default function LoadingSpinner({ size = "md", color = "primary", text, fullScreen = false; }: LoadingSpinnerProps) { const sizeClasses = { sm: "w-6 h-6", md: "w-12 h-12", lg: "w-16 h-16" }; const colorClasses = { primary: "border-blue-600", secondary: "border-purple-600", white: "border-white" }; const spinner = ( <div className="flex flex-col items-center justify-center"> <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full ${colorClasses[color]} border-t-transparent`} style={{ animation: "spin 1s linear infinite" }}" role="status" aria-label="Loading" /> {text && (" <p className="mt-4 text-gray-600 text-center"> {text} </p> )} </div> ); if (fullScreen) { return (" <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50"> {spinner} </div> ); } return spinner; } // Pulse loading variant" export function LoadingPulse({ size = "md", color = "primary" }: Omit<LoadingSpinnerProps,text" | "fullScreen">) { const sizeClasses = { sm: "w-6 h-6", md: "w-12 h-12", lg: "w-16 h-16" }; const colorClasses = { primary: "bg-blue-600", secondary: "bg-purple-600", white: "bg-white" }; return (" <div className="flex space-x-2"> {[0, 1, 2].map((i) => ( <div key={i}` className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} style={{ ` animationDelay: `${i * 0.2}s` }} /> ))} </div> ); } // Skeleton loading variant" export function LoadingSkeleton({ lines = 3, className = " }: { lines?: number; className?: string }) { return()` <div className={`animate-pulse ${className}`}> {Array.from({ length: lines }).map(_: unknown, i: unknown ( <div key={i}` className={`h-4 bg-gray-200 rounded mb-3 ${ i === lines - 1 ? "w-3/4" : "w-full"` }`} /> ))} </div> ); }"` 
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
