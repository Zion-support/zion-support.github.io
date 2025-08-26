import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  className?: string;
}

export function LoadingOverlay({ isLoading, message = 'Loading...', className = '' }: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${className}`}>
      <div className="bg-zion-slate-dark border border-zion-cyan/20 rounded-2xl p-8 text-center">
        <Loader2 className="w-8 h-8 text-zion-cyan animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  );
}