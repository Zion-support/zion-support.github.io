import React from 'react',
import Link from 'next/link';
import React from 'react'
import Link from 'next/link'
import { MessageSquare } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface EmptyStateProps {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  title: string;
  subtitle: string;
  cta: string;
  href: string;

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

=======
const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
        <MessageSquare className="h-10 w-10 text-zion-purple" />
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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

        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );

export default EmptyState;

=======
};


export default EmptyState;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
},;
export default EmptyState;
