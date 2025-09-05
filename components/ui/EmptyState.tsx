import React from 'react',
import Link from 'next/link',
import EnhancedButton from './EnhancedButton',

export type EmptyStateProps = {
  title: string,
  description?: string,
  icon?: React.ReactNode,
  primaryAction?: { label: string, href: string
  },
  secondaryAction?: { label: string, href: string
  },
},

export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
      {(primaryAction || secondaryAction) && (
        <div className="flex gap-2 mt-2"></div>
          {primaryAction && (
            <Link href={primaryAction.href}></Link>
              <a></a>
                <EnhancedButton size="md">{primaryAction.label}</EnhancedButton>
              </a>
            </Link>
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}></Link>
              <a></a>
                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  ),
}