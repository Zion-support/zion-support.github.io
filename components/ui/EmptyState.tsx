<<<<<<< HEAD


<<<<<<< HEAD
=======
import React from "react";
import Link from "next/link";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {
  title: string;
  description?: string;
<<<<<<< HEAD
  icon?: React.ReactNode;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
    
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return this.props.children;
  }
}
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type EmptyStateProps = {;
  title: string;
  description?: string;
  icon?: React && React.ReactNode;
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function EmptyState(): any ({;
  title,;
  description,;
  icon,;
  primaryAction,;
  secondaryAction,;
}: EmptyStateProps) {;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';

interface EmptyStateProps {
  className?: string;
}

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'>;
      <div className='text-3xl opacity-70'>{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'>{title}</h3>;
      {description && (;
        <p className='text-sm opacity-80 max-w-prose'>{description}</p>;
      )}

import React from 'react';
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = {
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

<<<<<<< HEAD
<<<<<<< HEAD
=======

  title: string,;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  title: string,
  description?: string;
  icon?: React.ReactNode;
<<<<<<< HEAD

=======
  title: string,;

  description?: string;
  icon?: React.ReactNode;

  title: string,
      {(primaryAction |secondaryAction) && (
        <div className='flex gap-2 mt-2'>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {
  title: string
  title: string,;
  description?: string;
  icon?: React.ReactNode;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  secondaryAction?: { label: string, href: string }
}

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;
<<<<<<< HEAD
=======
  secondaryAction?: { label: string, href: string }
}

export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>;
      <h3 className="text-lg font-semibold">{title}</h3>;
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
      {(primaryAction |secondaryAction) && (
        <div className="flex gap-2 mt-2">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size="md">{primaryAction.label}</EnhancedButton>
              </a>
            </Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
<<<<<<< HEAD
<<<<<<< HEAD
                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
=======
                <EnhancedButton variant='secondary' size='md'>
                  {secondaryAction.label}
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </a>
            </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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

}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    </div>
  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}


    </div>
  );

    </div>;
  );
}

}
}
}
    </div>
  );
}
};

export default EmptyState;
};

export default EmptyState;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
