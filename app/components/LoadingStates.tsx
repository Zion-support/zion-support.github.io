'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the page</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-2" />
        <p className="text-gray-600">Loading component...</p>
      </div>
    </div>
  );
};

export const ButtonLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin`} />
  );
};

export const CardLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
    </div>
  );
};

export const TableLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
      <div className="p-4 space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex space-x-4">
            <div className="h-3 bg-gray-200 rounded flex-1"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ListLoader: React.FC = () => {
  return (
    <div className="space-y-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const FormLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="space-y-4">
        <div>
          <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div>
          <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div>
          <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export const ModalLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading...</h3>
          <p className="text-gray-600">Please wait while we process your request</p>
        </div>
      </div>
    </div>
  );
};

export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-600">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export const SkeletonLoader: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-2">
      {[...Array(lines)].map((_, i) => (
        <div key={i} className="h-3 bg-gray-200 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
      ))}
    </div>
  );
};

export default {
  PageLoader,
  ComponentLoader,
  ButtonLoader,
  CardLoader,
  TableLoader,
  ListLoader,
  FormLoader,
  ModalLoader,
  InlineLoader,
  SkeletonLoader
};