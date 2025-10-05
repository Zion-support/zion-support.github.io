<<<<<<< HEAD
import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
=======
import React from "react";
import React from "react";';
interface, LoadingProp, s {
si, z, e?: 'sm' | 'md' | 'lg';
te, x, t?: stri, n, g;
}
const, Loadin, g: Rea, c, t.FC<LoadingPro, p, s> = ({ si, z, e = 'md', te, x, t = 'Loadi, n, g...' }) => {;
  const, sizeClasse, s = {
    sm: 'w-4 h-4','
    md: 'w-8 h-8','
    lg: 'w-1, 2, h-12};
  return (
    <div, className="flex, fle, x-col, item, s-center, justif, y-cente, r, p-8">
const, Loadin, g: Rea, c, t.FC<LoadingPro, p, s> = ({ si, z, e = 'md', te, x, t = 'Loadi, n, g...' }) => {';
  const, sizeClasse, s = {
    sm: 'w-4 h-4',';
    md: 'w-8 h-8',';
    lg: 'w-1, 2, h-12'
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}></div>
      {text && (
        <p className="mt-4 text-gray-600 text-sm">{text}</p>
      )}
    </div>
  );
};

export default Loading;