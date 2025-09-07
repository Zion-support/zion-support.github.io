<<<<<<< HEAD
=======
import React from 'react';,
import React from 'react',
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
import React from \"react\";"
import Link from \"next/link\";"
import EnhancedButton from \"./EnhancedButton\";
export type EmptyStateProps = {
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


>>>>>>> origin/main
import React from 'react';,
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
<<<<<<< HEAD
import React from \"react\";"
import Link from \"next/link\";"
import EnhancedButton from \"./EnhancedButton\";
=======
import React from \'react\';"
import Link from \'next/link\';"
import EnhancedButton from \'./EnhancedButton\';

>>>>>>> origin/main
export type EmptyStateProps = {
  title: string;

  description?: string;}
  primaryAction?: { label: string; href: string}
}secondaryAction?: { label: string; href: string }
}
export default function EmptyState(): any ({title,description,icon,primaryAction,secondaryAction}: EmptyStateProps) {primaryAction?: { label: string; href: string}
}secondaryAction?: { label: string; href: string }
}

interface EmptyStateProps {
  className?: string;}
}
}

<<<<<<< HEAD
=======
const EmptyState: React.FC<EmptyStateProps    /> = ({ className   }
}) => {
>>>>>>> origin/chore/fix-lint-and-merge

}
<<<<<<< HEAD
return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3' />;}
      <div className='text-3xl opacity-70' />{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold' />{title}</h3>;
=======
return (<div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'    />;}
      <div className='text-3xl opacity-70'    />{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'    />{title}</h3>;
>>>>>>> origin/main

      {description && (;}
        <p className='text-sm opacity-80 max-w-prose'    />{description}</p>;
      )}
<<<<<<< HEAD
      {(primaryAction |secondaryAction) && (
        <div className = 'flex gap-2 mt-2'>'
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>
export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
origin/cursor/automate-test-improve-and-merge-code-2533

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;
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
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
<EnhancedButton variant='secondary' size='md'>
                  {secondaryAction.label}
                </EnhancedButton>
origin/cursor/automate-test-improve-and-merge-code-2533
              </a>
            </Link>
          {secondaryAction && (<Link href={secondaryAction.href}>;
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
<<<<<<< HEAD
            <Link href={primaryAction.href} />
              <a />
                <EnhancedButton size='md' />{primaryAction.label}</EnhancedButton>
export default function EmptyState({ title, description, icon, primaryAction,,
  secondaryAction  }: EmptyStateProps) {
=======
            <Link href={primaryAction.href}    />
              <a    />
                <EnhancedButton size='md'    />{primaryAction.label}</EnhancedButton>
export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
>>>>>>> origin/main
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
<<<<<<< HEAD
          {secondaryAction && (
          <Link href={secondaryAction && secondaryAction.href} />;
              <a />;
                <EnhancedButton variant='secondary' size='md' />;
=======
          {secondaryAction && (<Link href={secondaryAction && secondaryAction.href}    />;
              <a    />;
                <EnhancedButton variant='secondary' size='md'    />;
>>>>>>> origin/main
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

    </div>
  );
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
}
      )}}</div>;
  )}
      )}}</div>;
  )}

"

=======
}

"
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
