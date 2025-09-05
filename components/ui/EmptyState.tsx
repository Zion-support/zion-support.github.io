import React from 'react',
import Link from 'next/link',
import EnhancedButton from './EnhancedButton',
export type EmptyStateProps = {
  title: string,
  description?: string,
  icon?: React.ReactNode,
  primaryAction?: { label: string, href: string },
  secondaryAction?: { label: string, href: string }
},

export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
  return (
    <div className=&quot;w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3&quot;>
      <div className=&quot;text-3xl opacity-70&quot;>{icon ?? '🧭'}</div>
      <h3 className=&quot;text-lg font-semibold&quot;>{title}</h3>
      {description && <p className=&quot;text-sm opacity-80 max-w-prose&quot;>{description}</p>}
      {(primaryAction || secondaryAction) && (
        <div className=&quot;flex gap-2 mt-2&quot;>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size=&quot;md&quot;>{primaryAction.label}</EnhancedButton>
              </a>
            </a>
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
                <EnhancedButton variant=&quot;secondary&quot; size=&quot;md&quot;>{secondaryAction.label}</EnhancedButton>
              </a>
            </a>
          )}
        </div>
      )}
    </div>
  )
}