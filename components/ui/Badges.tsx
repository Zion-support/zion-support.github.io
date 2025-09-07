import React from 'react';

interface BadgeProps {
  type: 'Verified' | 'Pro' | 'Top Rated';
  className?: string;
}

const colorMap = {
  Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200',
  'Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
} as const;

export function TrustBadge({ type, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorMap[type]} ${className}`}>
      <span className="leading-none">{type}</span>
    </span>
  );
}

export function StatusBadge({ status, className = '' }: { status: 'active' | 'inactive' | 'pending'; className?: string }) {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status]} ${className}`}>
      {status}
    </span>
  );
}

export function CategoryBadge({ category, className = '' }: { category: string; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ${className}`}>
      {category}
    </span>
  );
}