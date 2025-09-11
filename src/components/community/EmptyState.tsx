<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import Link from 'next/link';
import React from 'react',
import Link from 'next/link';
import React from 'react'
import Link from 'next/link'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react'
import Link from 'next/link'


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  title: string;
  subtitle: string;
  cta: string;
  href: string;
<<<<<<< HEAD
<<<<<<< HEAD
  hasSession: boolean
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface EmptyStateProps {
  title: string,
  subtitle: string,
  cta: string,
  href: string,
<<<<<<< HEAD
  hasSession: boolean
=======

  hasSession: boolean


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const EmptyState: React.FC<EmptyStateProps> = ({;
  title,;
  subtitle,;
  cta,;
  href,;
  hasSession,;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
        <MessageSquare className="h-10 w-10 text-zion-purple" />
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD



        </Tooltip>;
export default EmptyState

ursor/fix-website-loading-errors-and-merge-6662
=======
          </TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );

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
import React from 'react',;
import Link from 'next/link',;
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
;
interface EmptyStateProps {;
  title:string,;
  subtitle:string,;
  cta:string,;
  href:string,;
  hasSession:boolean;
}
;
const EmptyState:React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {;
  return (;
    <div className="text-center py-16">;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">;
        <MessageSquare className="h-10 w-10 text-zion-purple" />;
      </div>;
      <h2 className="text-xl font-medium mb-2">{title}</h2>;
      <p className="text-muted-foreground mb-6">{subtitle}</p>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            {hasSession ? (;
              <Button asChild>;
                <Link href={href}>{cta}</Link>;
              </Button>;
            ) :(;
              <Button disabled>{cta}</Button>;
            )}
          </TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
    </div>;
  ),;
},;
;
export default EmptyState,; <TooltipProvider> <Tooltip> <TooltipTrigger asChild> {;
  hasSession ? (<Button asChild> <Link href= {;
  href ;
}> {;
  cta ;
}</Link> </Button>) : (<Button disabled> {;
  cta ;
}</Button>) ;
}</TooltipTrigger> {;
  !hasSession && <TooltipContent>Login required</TooltipContent> ;
}</Tooltip> </TooltipProvider> </div>) ;
};
export default EmptyState;
          </TooltipTrigger>
=======
          </TooltipTrigger>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {!hasSession && <TooltipContent>Login required</TooltipContent>}




        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );

export default EmptyState;
<<<<<<< HEAD
}
export default EmptyState

        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );
},;
export default EmptyState;
},;
<<<<<<< HEAD
export default EmptyState;
=======
export default EmptyState;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
