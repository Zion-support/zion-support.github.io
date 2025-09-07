import React from 'react';,
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
import React from \"react\";"
import Link from \"next/link\";"
import EnhancedButton from \"./EnhancedButton\";
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

const EmptyState: React.FC<EmptyStateProps /> = ({ className   }
}) => {

}
return (<div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3' />;}
      <div className='text-3xl opacity-70' />{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold' />{title}</h3>;

      {description && (;}
        <p className='text-sm opacity-80 max-w-prose' />{description}</p>;
      )}

      {(primaryAction |secondaryAction) && (
        <div className = 'flex gap-2 mt-2' />}
          {primaryAction && (}
            <Link href={primaryAction.href} />
              <a />
                <EnhancedButton size='md' />{primaryAction.label}</EnhancedButton>
export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
 ;
  return ("
    <div className=\"w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3\" />;}
}"
      <div className=\"text-3xl opacity-70\" />{icon ?? '🧭'}</div>;"
      <h3 className=\"text-lg font-semibold\" />{title}</h3>;"
      {description && <p className=\"text-sm opacity-80 max-w-prose\" />{description}</p>}
          )}

          {secondaryAction && (}
            <Link href={secondaryAction.href} />
              <a />

<EnhancedButton variant='secondary' size='md' />
                  {secondaryAction.label}
                </EnhancedButton>
              </a>
            </Link>

          )}
          {secondaryAction && (<Link href={secondaryAction && secondaryAction.href} />;
              <a />;
                <EnhancedButton variant='secondary' size='md' />;
                  {secondaryAction && secondaryAction.label}"
                </EnhancedButton>              </a>                <EnhancedButton variant=\"secondary\" size=\"md\" />{secondaryAction && secondaryAction.label}</EnhancedButton>;
              </a>;
            </Link>;
          )}
        </div>;

      )}

    </div>
  );
}

"