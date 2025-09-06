<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
<<<<<<< HEAD
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}
=======
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function EmptyState({
  title
  description
  icon
  primaryAction
  secondaryAction
}: EmptyStateProps) {
  return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'>
      <div className='text-3xl opacity-70'>{icon ?? '🧭'}</div>
      <h3 className='text-lg font-semibold'>{title}</h3>
      {description && (
        <p className='text-sm opacity-80 max-w-prose'>{description}</p>
      )}
      {(primaryAction |secondaryAction) && (
        <div className='flex gap-2 mt-2'>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
<<<<<<< HEAD
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {
  title: string
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string, href: string }
  secondaryAction?: { label: string, href: string }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
      {(primaryAction |secondaryAction) && (
        <div className="flex gap-2 mt-2">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size="md">{primaryAction.label}</EnhancedButton>
=======
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </a>
            </Link>
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
                <EnhancedButton variant='secondary' size='md'>
                  {secondaryAction.label}
<<<<<<< HEAD
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
=======
                </EnhancedButton>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
