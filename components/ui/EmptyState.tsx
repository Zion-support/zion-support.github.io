import React from 'react';
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';

export type EmptyStateProps = {_title: string;
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string; href: string};
  secondaryAction?: {_label: string; href: string};
};

export default function EmptyState(_{_title, _description, _icon, _primaryAction, _secondaryAction}: EmptyStateProps) {_return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>
      <h3 className="text-lg font-semibold">{_title}</h3>
      {_description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
      {_(primaryAction || secondaryAction) && (
        <div className="flex gap-2 mt-2">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size="md">{_primaryAction.label}</EnhancedButton>
              </a>
            </Link>
          )}
          {_secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
                <EnhancedButton variant="secondary" size="md">{_secondaryAction.label}</EnhancedButton>
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}