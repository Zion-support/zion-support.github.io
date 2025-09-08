
<<<<<<< HEAD



import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {;
  title: string;
  description?: string;
  icon?: React.ReactNode;


}
export default function EmptyState({
  title
  description
  icon
  primaryAction
  secondaryAction
}: EmptyStateProps) {






  return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'>;
      <div className='text-3xl opacity-70'>{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'>{title}</h3>;
      {description && (;
        <p className='text-sm opacity-80 max-w-prose'>{description}</p>;
      )}

import React from 'react';

=======
import React from 'react';,
import React from 'react',
>>>>>>> origin/cursor/delete-old-data-records-6bba
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
import React from \"react\";"
import Link from \"next/link\";"
import EnhancedButton from \"./EnhancedButton\";
export type EmptyStateProps = {
<<<<<<< HEAD

  primary_action?: { label: string; href: string }
  secondary_action?: { label: string; href: string }

}


=======

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


  title: string,;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  description?: string;
  icon?: React.ReactNode;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
  secondaryAction?: { label: string, href: string }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

interface EmptyStateProps {
  className?: string;}
}
}

<<<<<<< HEAD


const EmptyState: React.FC<EmptyStateProps    /> = ({ className   }
}) => {



=======
const EmptyState: React.FC<EmptyStateProps    /> = ({ className   }
}) => {

>>>>>>> origin/cursor/delete-old-data-records-6bba
}
return (<div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'    />;}
      <div className='text-3xl opacity-70'    />{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'    />{title}</h3>;

      {description && (;}
        <p className='text-sm opacity-80 max-w-prose'    />{description}</p>;
<<<<<<< HEAD

      )}
      {(primaryAction |secondaryAction) && (
        <div className='flex gap-2 mt-2'>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>

                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>
export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
origin/cursor/automate-test-improve-and-merge-code-2533

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;

=======
      )}

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </a>;
            </Link>;
          )}
        </div>;
<<<<<<< HEAD



      )}


    </div>
  );




=======
      )}

    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
}
      )}}</div>;
  )}
      )}}</div>;
  )}


"

}

"
>>>>>>> origin/cursor/delete-old-data-records-6bba

