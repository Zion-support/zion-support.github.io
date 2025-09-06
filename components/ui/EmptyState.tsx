<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}
export default function EmptyState({
  title
  description
  icon
  primaryAction
  secondaryAction
}: EmptyStateProps) {
<<<<<<< HEAD
=======
=======
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react';

interface EmptyStateProps {
  className?: string;
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'>;
      <div className='text-3xl opacity-70'>{icon ?? ''}</div>;
      <h3 className='text-lg font-semibold'>{title}</h3>;
      {description && (;
        <p className='text-sm opacity-80 max-w-prose'>{description}</p>;
      )}
      {(primaryAction |secondaryAction) && (
        <div className='flex gap-2 mt-2'>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {
<<<<<<< HEAD
  title: string
  title: string,
=======
<<<<<<< HEAD
  title: string
=======
  primary_action?: { label: string; href: string }
  secondary_action?: { label: string; href: string }
}
;
export default /**
 * EmptyState - Function description
 */
function EmptyState() {
  return (
    <div className='w - full border border - dashed border - gray - 300 dark:border - gray - 700 rounded - lg p - 6 text - center flex flex - col items - center gap - 3'>;
      <div className='text - 3xl opacity - 70'>{icon ?? '🧭'}</div>;
      <h3 className='text - lg font - semibold'>{title}</h3>;
      {description && (
        <p className='text - sm opacity - 80 max - w-prose'>{description}</p>)}
      {(primary_action || secondary_action) && (
        <div className='flex gap - 2 mt - 2'>;
          {primary_action && (
            <Link href={primary_action.href}>;
              <a>;
                <EnhancedButton size='md'>{primary_action.label}</EnhancedButton>              </a > export type EmptyStateProps = {

  title: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

  title: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string, href: string }
  secondaryAction?: { label: string, href: string }
}

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      <div className="text-3xl opacity-70">{icon ?? ''}</div>;
      <h3 className="text-lg font-semibold">{title}</h3>;
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
      {(primaryAction |secondaryAction) && (
        <div className="flex gap-2 mt-2">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size="md">{primaryAction.label}</EnhancedButton>
              </a>
            </Link>
      {(primaryAction || secondaryAction) && (;
        <div className="flex gap-2 mt-2">;
          {primaryAction && (;
            <Link href={primaryAction && primaryAction.href}>;
              <a>;
                <EnhancedButton size="md">{primaryAction && primaryAction.label}</EnhancedButton>;
              </a>;
            </Link>;
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
              </a>
            </Link>
          )}
          {secondaryAction && (;
            <Link href={secondaryAction && secondaryAction.href}>;
              <a>;
                <EnhancedButton variant='secondary' size='md'>;
                  {secondaryAction && secondaryAction.label}
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondaryAction && secondaryAction.label}</EnhancedButton>;
              </a>;
            </Link>;
          )}
        </div>;
      )}
    </div>;
  );
}
  primary_action?: { label: string, href: string },
  secondary_action?: { label: string, href: string }
}
;
export default /**
 * EmptyState - Function description
 */
function EmptyState() {
  return (
    <div className="w - full border border - dashed border - gray - 300 dark:border - gray - 700 rounded - lg p - 6 text - center flex flex - col items - center gap - 3">;
      <div className="text - 3xl opacity - 70">{icon ?? ''}</div>;
      <h3 className="text - lg font - semibold">{title}</h3>;
      {description && <p className="text - sm opacity - 80 max - w-prose">{description}</p>}
      {(primary_action || secondary_action) && (
        <div className="flex gap - 2 mt - 2">;
          {primary_action && (
            <Link href={primary_action.href}>;
              <a>;
                <EnhancedButton size="md">{primary_action.label}</EnhancedButton>;
              </a>;
            </Link>)}
          {secondary_action && (
            <Link href={secondary_action.href}>;
              <a>;
                <EnhancedButton variant='secondary' size='md'>;
                  {secondary_action.label}
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondary_action.label}</EnhancedButton>;
              </a>;
            </Link>)}
        </div>)}
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

export default EmptyState;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
};

export default EmptyState;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
