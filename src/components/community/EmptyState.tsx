<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import Link from 'next/link'


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { MessageSquare } from 'lucide-react'

import { Button } from '@/components/ui/button'
=======
import React from 'react',
import Link from 'next/link';
import { Button  } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
interface EmptyStateProps {
<<<<<<< HEAD
=======

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
import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger,;
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
interface EmptyStateProps {;
import React from 'react';
import Link from 'next / link';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components / ui / button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components / ui / tooltip';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';
interface EmptyStateProps {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  title: string;
  subtitle: string;
  cta: string;
  href: string;
<<<<<<< HEAD
<<<<<<< HEAD
  hasSession: boolean

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
      <p className='text-muted-foreground mb-6'>{subtitle}</p>      <TooltipProvider>      <h2 className="text-xl font-medium mb-2">{title}</h2>
import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
interface EmptyStateProps {;
  title: string,;
  subtitle: string,;
  cta: string,;
  href: string,;
  hasSession: boolean;
}
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
        <MessageSquare className="h-10 w-10 text-zion-purple" />
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
<<<<<<< HEAD
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <p className="text-muted-foreground mb-6">{subtitle}</p>
=======
  hasSession: boolean
      <p className='text-muted-foreground mb-6'>{subtitle}</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
=======
          </TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
<<<<<<< HEAD



>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );
<<<<<<< HEAD
=======

export default EmptyState;

};


export default EmptyState;

  has_session: boolean;
const EmptyState: React.FC < EmptyStateProps> = ({
  title,
  subtitle,
  cta,
  href,
  has_session,
}) => {  return (
    <div className='text - center py - 16'>;
      <div className='bg - zion - blue / 30 p - 6 rounded - full mb - 6 inline - flex'>;
        <MessageSquare className='h - 10 w - 10 text - zion - purple' />;
      </div>;
      <h2 className='text - xl font - medium mb - 2'>{title}</h2>;
      <p className='text - muted - foreground mb - 6'>{subtitle}</p>      <TooltipProvider>      <h2 className="text - xl font - medium mb - 2">{title}</h2>;
      <p className="text - muted - foreground mb - 6">{subtitle}</p>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger as_child>;
            {has_session ? (
              <Button as_child>;
                <Link href={href}>{cta}</Link>;
              </Button>) : (
              <Button disabled>{cta}</Button>)}
          </TooltipTrigger>;
          {!has_session && <TooltipContent > Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
    </div>);
}
export default EmptyState;
},;
export default EmptyState;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
        </Tooltip>
      </TooltipProvider>
    </div>
);
};
export default EmptyState;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
