import React from 'react',
import Link from 'next/link';
<<<<<<< HEAD
import { MessageSquare } from 'lucide-react'
<<<<<<< HEAD
import { Button  } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
=======
import { Button } from '@/components/ui/button'
=======
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
interface EmptyStateProps {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  hasSession: boolean
<<<<<<< HEAD
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className;
=======
const EmptyState: React.FC<EmptyStateProps> = ({
  title
  subtitle
  cta
  href
  hasSession
}) => {  return (
    <div className='text-center py-16'>
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex'>
        <MessageSquare className='h-10 w-10 text-zion-purple' />
      </div>
      <h2 className='text-xl font-medium mb-2'>{title}</h2>
<<<<<<< HEAD
      <p className='text-muted-foreground mb-6'>{subtitle}</p>      <TooltipProvider>      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
=======
      <p className='text-muted-foreground mb-6'>{subtitle}</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <TooltipProvider>
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
  )
}
export default EmptyState
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
};
}

export default EmptyState;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
