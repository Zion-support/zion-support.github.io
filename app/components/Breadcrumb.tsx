'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
const Breadcrumb: React.FC = () => {
  const location = useLocation();
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
        </ol>
      </div>
    </nav>
  );
};
export default Breadcrumb;
  </Link>