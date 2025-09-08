

import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;

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
import React from 'react';

export default function EmptyState(): any ({;
  title,;
  description,;
  icon,;
  primaryAction,;
  secondaryAction,;
}: EmptyStateProps) {;


  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

import React from 'react';

interface EmptyStateProps {
  className?: string;
}



const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
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
  description?: string;
  icon?: React.ReactNode;

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

  secondaryAction?: { label: string, href: string }
}

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>;
      <h3 className="text-lg font-semibold">{title}</h3>;
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}


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

}


    </div>
  );

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
}
}
