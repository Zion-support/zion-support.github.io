=======
import React from 'react'
import Link from 'next/link'
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface EmptyStateProps {
  title: string,
  subtitle: string,
  cta: string,
  href: string,

  hasSession: boolean


const EmptyState: React.FC<EmptyStateProps> = ({;
  title,;
  subtitle,;
  cta,;
  href,;
  hasSession,;

}) => {  return (
    <div className='text-center py-16'>;
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex'>;
        <MessageSquare className='h-10 w-10 text-zion-purple' />;
      </div>;
      <h2 className='text-xl font-medium mb-2'>{title}</h2>;
      <p className='text-muted-foreground mb-6'>{subtitle}</p>      <TooltipProvider>      <h2 className="text-xl font-medium mb-2">{title}</h2>;
      <p className="text-muted-foreground mb-6">{subtitle}</p>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            {hasSession ? (;
              <Button asChild>;
                <Link href={href}>{cta}</Link>;
              </Button>;
            ) : (;
              <Button disabled>{cta}</Button>;

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
        <MessageSquare className="h-10 w-10 text-zion-purple" />
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
      <p className="text-muted-foreground mb-6">{subtitle}</p>
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
          </TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>
  )
};
export default EmptyState;
}
export default EmptyState

<<<<<<< HEAD
<<<<<<< HEAD
