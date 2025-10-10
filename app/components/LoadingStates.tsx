'use client';
;
;
;
import React from 'react'
import { Loader2  } from 'lucide-react'export const PageLoader: React.FC;

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8"></div>
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);
