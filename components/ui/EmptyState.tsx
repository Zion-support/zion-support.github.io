<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import Link from "next/link";
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import React from './react';
import Link from './next / link';
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react";
import Link from "next/link";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {;
  title: string;
  description?: string;
  icon?: React.ReactNode;

<<<<<<< HEAD
<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {;
  title: string;
  description?: string;
  icon?: React && React.ReactNode;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};
export default function EmptyState(): any ({;
  title,;
  description,;
  icon,;
  primaryAction,;
  secondaryAction,;
}: EmptyStateProps) {;
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react';

<<<<<<< HEAD
export default function EmptyState(): any ({;
  title,;
  description,;
  icon,;
  primaryAction,;
  secondaryAction,;
}: EmptyStateProps) {;

=======

  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react';

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface EmptyStateProps {
  className?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {

=======


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'>;
      <div className='text-3xl opacity-70'>{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'>{title}</h3>;
      {description && (;
        <p className='text-sm opacity-80 max-w-prose'>{description}</p>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      {(primaryAction |secondaryAction) && (
        <div className='flex gap-2 mt-2'>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react';
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = {
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
<<<<<<< HEAD

  title: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

  title: string,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  description?: string;
  icon?: React.ReactNode;

=======
  title: string,
=======
      {(primaryAction |secondaryAction) && (
        <div className='flex gap-2 mt-2'>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {
<<<<<<< HEAD
  title: string
=======
  title: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  description?: string;
  icon?: React.ReactNode;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {(primaryAction || secondaryAction) && (;
        <div className='flex gap-2 mt-2'>;
          {primaryAction && (;
            <Link href={primaryAction && primaryAction.href}>;
              <a>;
                <EnhancedButton size='md'>{primaryAction && primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {;
  title: string,;
  description?: string;
  icon?: React && React.ReactNode;
  primaryAction?: { label: string, href: string },;
<<<<<<< HEAD

  secondaryAction?: { label: string, href: string }
}

=======
  secondaryAction?: { label: string, href: string }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;
=======

export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>;
      <h3 className="text-lg font-semibold">{title}</h3>;
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
<<<<<<< HEAD


=======
<<<<<<< HEAD
      {(primaryAction || secondaryAction) && (;
        <div className="flex gap-2 mt-2">;
          {primaryAction && (;
            <Link href={primaryAction && primaryAction.href}>;
              <a>;
                <EnhancedButton size="md">{primaryAction && primaryAction.label}</EnhancedButton>;
              </a>;
            </Link>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      {(primaryAction |secondaryAction) && (
        <div className="flex gap-2 mt-2">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size="md">{primaryAction.label}</EnhancedButton>
              </a>
            </Link>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
<<<<<<< HEAD
                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
=======
<<<<<<< HEAD
                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
=======
                <EnhancedButton variant='secondary' size='md'>
                  {secondaryAction.label}
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
};

export default EmptyState;

=======
}

=======
=======
<<<<<<< HEAD
    </div>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      <div className="text - 3xl opacity - 70">{icon ?? '🧭'}</div>;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    </div>
  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
    </div>;
  );
}

}
}
}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
