<<<<<<< HEAD
<<<<<<< HEAD


import React from 'react';,
=======
import React from 'react',
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import Link from 'next/link';
import EnhancedButton from './EnhancedButton';
export type EmptyStateProps = any;
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {;
  title: string;
  description?: string;
  icon?: React.ReactNode;
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

const EmptyState: React.FC<EmptyStateProps    /> = ({ className   }
}) => {

return (<div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'    />;}
      <div className='text-3xl opacity-70'    />{icon ?? '🧭'}</div>
      <h3 className='text-lg font-semibold'    />{title}</h3>
      {description && (;}
        <p className='text-sm opacity-80 max-w-prose'    />{description}</p>
      )}
      {(primaryAction |secondaryAction) && (
        <div className='flex gap-2 mt-2'>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {
  title: string
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string, href: string }
  secondaryAction?: { label: string, href: string }
}
<<<<<<< HEAD

"
=======
</a> </a>) 
}{
  secondaryAction && (<Link href= {
  secondaryAction.href 
}> <a> </a> </a>) 
}</div>) 
}</div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
