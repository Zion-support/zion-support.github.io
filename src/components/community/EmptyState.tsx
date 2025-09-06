import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { MessageSquare } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { MessageSquare } from 'lucide-react';
=======
import { MessageSquare } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,;
} from '@/components/ui/tooltip';

interface EmptyStateProps {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  hasSession: boolean;

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  subtitle,
  cta,
  href,
  hasSession,
}) => {
  return (
    <div className='text-center py-16'>
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex'>
        <MessageSquare className='h-10 w-10 text-zion-purple' />
      </div>
<<<<<<< HEAD
      <h2 className='text-xl font-medium mb-2'>{title}</h2>
      <p className='text-muted-foreground mb-6'>{subtitle}</p>      <TooltipProvider>
=======
<<<<<<< HEAD
      <h2 className='text-xl font-medium mb-2'>{title}</h2>
      <p className='text-muted-foreground mb-6'>{subtitle}</p>
=======
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface EmptyStateProps {
  title: string,
  subtitle: string,
  cta: string,
  href: string,
  hasSession: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
        <MessageSquare className="h-10 w-10 text-zion-purple" />
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <TooltipProvider>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <Tooltip>
          <TooltipTrigger asChild>
            {hasSession ? (
              <Button asChild>
                <Link href={href}>{cta}</Link>
              </Button>
            ) : (
              <Button disabled>{cta}</Button>
            )}
          </TooltipTrigger>
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};
export default EmptyState;