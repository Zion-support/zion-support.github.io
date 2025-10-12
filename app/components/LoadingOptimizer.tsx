'use client';
import React, { Suspense, lazy } from 'react';

// Lazy load components for better performance

interface Loading Optimizer Props {
  children: React.React Node;
  fallback?: React.React Node;
}

const Loading Optimizer: React.F C<L oading Optimizer Props> = ({ 
  children, 
  fallback = <D efault Loading Spinner /> 
}) => {
  return (
    <S uspense fallback={fallback}>
      {children}
    </S uspense>
  );
};

const Default Loading Spinner: React.F C = () => (
  <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <d iv class Name="t ext-center">
      <d iv class Name="a nimate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></d iv>
      <p c lass Name="t ext-white text-lg">Loading...</p>
    </d iv>
  </d iv>
);

// Skeleton loaders for different components
export const Service Card Skeleton: React.F C = () => (
  <d iv class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 animate-pulse">
    <d iv class Name="w-16 h-16 b g-slate-700 rounded-full mb-6"></d iv>
    <d iv class Name="h-6 b g-slate-700 rounded mb-4"></d iv>
    <d iv class Name="h-4 b g-slate-700 rounded mb-2"></d iv>
    <d iv class Name="h-4 b g-slate-700 rounded w-3/4"></d iv>
  </d iv>
);

export const Hero Skeleton: React.F C = () => (
  <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <d iv class Name="t ext-center max-w-4xl mx-auto px-4">
      <d iv class Name="h-16 b g-slate-700 rounded mb-6 animate-pulse"></d iv>
      <d iv class Name="h-6 b g-slate-700 rounded mb-4 animate-pulse"></d iv>
      <d iv class Name="h-6 b g-slate-700 rounded mb-8 w-3/4 mx-auto animate-pulse"></d iv>
      <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
        <d iv class Name="h-12 b g-slate-700 rounded w-48 animate-pulse"></d iv>
        <d iv class Name="h-12 b g-slate-700 rounded w-48 animate-pulse"></d iv>
      </d iv>
    </d iv>
  </d iv>
);

export const Navigation Skeleton: React.F C = () => (
  <n av class Name="f ixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
    <d iv class Name="c ontainer mx-auto px-4 py-4">
      <d iv class Name="f lex items-center justify-between">
        <d iv class Name="h-8 b g-slate-700 rounded w-32 animate-pulse"></d iv>
        <d iv class Name="h idden md:flex space-x-8">
          {[...Array(6)].map((_, i) => (
            <d iv key={i} class Name="h-4 b g-slate-700 rounded w-16 animate-pulse"></d iv>
          ))}
        </d iv>
        <d iv class Name="h-10 b g-slate-700 rounded w-24 animate-pulse"></d iv>
      </d iv>
    </d iv>
  </n av>
);

export default Loading Optimizer;