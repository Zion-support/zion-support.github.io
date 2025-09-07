<<<<<<< HEAD
import React from 'react';,
import React from 'react',
=======


<<<<<<< HEAD
import React from 'react';,
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
import React from "react";
import Link from "next/link";
=======
<<<<<<< HEAD
import React from "react";
import Link from "next/link";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {;
  title: string;
  description?: string;
  icon?: React.ReactNode;
<<<<<<< HEAD
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this.props.children;
  }
}
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type EmptyStateProps = {;
  title: string;
  description?: string;
  icon?: React && React.ReactNode;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};
import React from 'react';

<<<<<<< HEAD
=======
export default function EmptyState(): any ({;
  title,;
  description,;
  icon,;
  primaryAction,;
  secondaryAction,;
}: EmptyStateProps) {;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

import React from 'react';

interface EmptyStateProps {
  className?: string;
>>>>>>> merged-prs-20250907-203621
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

<<<<<<< HEAD

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'>;
      <div className='text-3xl opacity-70'>{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'>{title}</h3>;
      {description && (;
        <p className='text-sm opacity-80 max-w-prose'>{description}</p>;
      )}

import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
import React from \"react\";"
import Link from \"next/link\";"
import EnhancedButton from \"./EnhancedButton\";
export type EmptyStateProps = {
<<<<<<< HEAD
  title: string;

import React from react',
import Link from 'next/link;
import EnhancedButton from ./EnhancedButton';
export type EmptyStateProps = any;
import React from \"react\;
import Link from \"next/link\";
import EnhancedButton from \./EnhancedButton\";
export type EmptyStateProps = {
  title: string;


import React from 'react';,
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';

export type EmptyStateProps = any;
import React from \'react\';"
import Link from \'next/link\';"
import EnhancedButton from \'./EnhancedButton\';

export type EmptyStateProps = {
  title: string;

  description?: string;}
  primaryAction?: { label: string; href: string}
}secondaryAction?: { label: string; href: string }
=======
  primary_action?: { label: string; href: string }
  secondary_action?: { label: string; href: string }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

<<<<<<< HEAD
export default function EmptyState(): any ({title,description,icon,primaryAction,secondaryAction}: EmptyStateProps) {primaryAction?: { label: string; href: string}
}secondaryAction?: { label: string; href: string }
=======
<<<<<<< HEAD
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
=======
  title: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

  title: string,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  description?: string;
  icon?: React.ReactNode;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

interface EmptyStateProps {
  className?: string;}
}
}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
const EmptyState: React.FC<EmptyStateProps    /> = ({ className   }
}) => {
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
return (<div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'    />;}
      <div className='text-3xl opacity-70'    />{icon ?? '🧭'}</div>
      <h3 className='text-lg font-semibold'    />{title}</h3>
      {description && (;}
        <p className='text-sm opacity-80 max-w-prose'    />{description}</p>
=======
}
return (<div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'    />;}
      <div className='text-3xl opacity-70'    />{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'    />{title}</h3>;

      {description && (;}
        <p className='text-sm opacity-80 max-w-prose'    />{description}</p>;
>>>>>>> merged-prs-20250907-203621
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

"
=======
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>
export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
origin/cursor/automate-test-improve-and-merge-code-2533

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      {description && (<p className='text-sm opacity-80 max-w-prose'>{description}</p>;
      {description && (<p className=text-sm opacity-80 max-w-prose'>{description}</p>;
      )}export type EmptyStateProps = {primary_action?: { label: string; href: string }
  secondary_action?: { label: string; href: string }
}export default /**;
 * EmptyState - Function description;
 */;
function EmptyState() {return (<div className='w - full border border - dashed border - gray - 300 dark:border - gray - 700 rounded - lg p - 6 text - center flex flex - col items - center gap - 3'>;
      <div className='text - 3xl opacity - 70'>{icon ?? '🧭'}</div>;
      <h3 className='text - lg font - semibold'>{title}</h3>;
      {description && (<p className='text - sm opacity - 80 max - w-prose'>{description}</p>)}
      {(primary_action || secondary_action) && (<div className='flex gap - 2 mt - 2'>;
          {primary_action && (<Link href={primary_action.href}>;
              <a>;
                <EnhancedButton size='md'>{primary_action.label}</EnhancedButton>              </a > export type EmptyStateProps = {title: string,title: string,description?: string;
  icon?: React.ReactNode;
  secondaryAction?: { label: string, href: string }
}export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {{(primaryAction |secondaryAction) && (<div className='flex gap-2 mt-2'>;
          {primaryAction && (<Link href={primaryAction.href}>;
              <a>;
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>;
export default function EmptyState() {return (<div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>;
      <h3 className="text-lg font-semibold">{title}</h3>;
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {(primaryAction |secondaryAction) && (
        <div className="flex gap-2 mt-2">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size="md">{primaryAction.label}</EnhancedButton>
              </a>
            </Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
<<<<<<< HEAD
<EnhancedButton variant='secondary' size='md'>
                  {secondaryAction.label}
                </EnhancedButton>
origin/cursor/automate-test-improve-and-merge-code-2533
              </a>
            </Link>
          {secondaryAction && (<Link href={secondaryAction.href}>;
=======
<<<<<<< HEAD
                <EnhancedButton variant='secondary' size='md'>
                  {secondaryAction.label}
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
=======
                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </a>
            </Link>
          )}
{secondaryAction && (;
            <Link href={secondaryAction && secondaryAction.href}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <a>;
<EnhancedButton variant='secondary size=md'>;
                  {secondaryAction.label}
                </EnhancedButton>;
              </a>;
            </Link>;
          )}
          {secondaryAction && (<Link href={secondaryAction && secondaryAction.href}>;
              <a>;

=======

      {(primaryAction |secondaryAction) && (
        <div className = 'flex gap-2 mt-2'    />}
          {primaryAction && (}
            <Link href={primaryAction.href}    />
              <a    />
                <EnhancedButton size='md'    />{primaryAction.label}</EnhancedButton>
export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
 ;
  return ("
    <div className=\"w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3\"    />;}
}"
      <div className=\"text-3xl opacity-70\"    />{icon ?? '🧭'}</div>;"
      <h3 className=\"text-lg font-semibold\"    />{title}</h3>;"
      {description && <p className=\"text-sm opacity-80 max-w-prose\"    />{description}</p>}
          )}

          {secondaryAction && (}
            <Link href={secondaryAction.href}    />
              <a    />

<EnhancedButton variant='secondary' size='md'    />
                  {secondaryAction.label}
                </EnhancedButton>
              </a>
            </Link>

          )}
          {secondaryAction && (<Link href={secondaryAction && secondaryAction.href}    />;
              <a    />;
                <EnhancedButton variant='secondary' size='md'    />;
                  {secondaryAction && secondaryAction.label}"
                </EnhancedButton>              </a>                <EnhancedButton variant=\"secondary\" size=\"md\"    />{secondaryAction && secondaryAction.label}</EnhancedButton>;
>>>>>>> origin/chore/fix-lint-and-merge
              </a>;
            </Link>;
          )}
        </div>;
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
      )}
<<<<<<< HEAD
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
=======

    </div>
  );
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
}
      )}}</div>;
  )}
      )}}</div>;
  )}

<<<<<<< HEAD
"

=======
}

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
