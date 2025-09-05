<<<<<<< HEAD
import React from 'react',
export type EmptyStateProps = {
  emoji?: string,
  title: string,
  message: string,
  action?: React.ReactNode
},

export default function EmptyState({ emoji = '✨', title, message, action }: EmptyStateProps) {
  return (
    <div className=&quot;text-center py-12&quot;>
      <div className=&quot;mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center&quot;>
        <span className=&quot;text-3xl&quot;>{emoji}</span>
      </div>
      <h2 className=&quot;mt-4 text-lg font-semibold&quot;>{title}</h2>
      <p className=&quot;mt-1 text-sm text-gray-600 dark:text-gray-300&quot;>{message}</p>
      {action && <div className=&quot;mt-3&quot;>{action}</div>}
=======
import React from 'react';

export type EmptyStateProps = {_emoji?: string;
  title: string;
  message: string;
  action?: React.ReactNode;};

export default function EmptyState(_{_emoji = '✨', _title, _message, _action}: EmptyStateProps) {_return (
    <div className="text-center py-12">
      <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">
        <span className="text-3xl">{emoji}</span>
      </div>
      <h2 className="mt-4 text-lg font-semibold">{_title}</h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{_message}</p>
      {_action && <div className="mt-3">{action}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}