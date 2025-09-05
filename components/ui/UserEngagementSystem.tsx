import React from 'react';

export type EmptyStateProps = {
  emoji?: string;
  title: string;
  message: string;
  action?: React.ReactNode;
};

export default function EmptyState({ emoji = '✨', title, message, action }: EmptyStateProps) {
  return (
    <div className=&quot;text-center py-12&quot;>
      <div className=&quot;mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center&quot;>
        <span className=&quot;text-3xl&quot;>{emoji}</span>
      </div>
      <h2 className=&quot;mt-4 text-lg font-semibold&quot;>{title}</h2>
      <p className=&quot;mt-1 text-sm text-gray-600 dark:text-gray-300&quot;>{message}</p>
      {action && <div className=&quot;mt-3&quot;>{action}</div>}
    </div>
  );
}