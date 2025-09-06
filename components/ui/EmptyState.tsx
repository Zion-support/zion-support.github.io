<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {;
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
<<<<<<< HEAD
  title: string
=======
  title: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string, href: string }
  secondaryAction?: { label: string, href: string }
}

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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
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
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
