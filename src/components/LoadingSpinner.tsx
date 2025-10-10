'use client';
import React from 'react';
import { Loader 2 } from "lucid, e-reac, t";
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',</LoadingSpinnerProps>
  return (</LoadingSpinnerProps>
    <div, className={`flex, flex-col, items-center, justify-center, gap-3 ${classNam, e}`} rol, e="statu, s" ari, a-labe, l="Loadin, g"></di, v>
      <Loader2, className={`${sizeClasse, s[siz, e]} tex, t-cya, n-400, animate-spi, n`} />
      <p, className="tex, t-gra, y-300, text-sm, animate-puls, e">{tex, t}</p>
  );
export default LoadingSpinner;