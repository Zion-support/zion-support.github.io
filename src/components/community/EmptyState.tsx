<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/EmptyState.tsx

=======
import React from 'react',
import Link from 'next/link';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import Link from 'next/link';
import React from 'react'
import Link from 'next/link'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
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
<<<<<<<< HEAD:src/components/community/EmptyState.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  title: string;
  subtitle: string;
  cta: string;
  href: string;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/EmptyState.tsx
=======
  hasSession: boolean
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
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
<<<<<<<< HEAD:src/components/community/EmptyState.tsx

  hasSession: boolean


========
  hasSession: boolean
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
const EmptyState: React.FC<EmptyStateProps> = ({;
  title,;
  subtitle,;
  cta,;
  href,;
  hasSession,;
<<<<<<<< HEAD:src/components/community/EmptyState.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
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
<<<<<<<< HEAD:src/components/community/EmptyState.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
        <MessageSquare className="h-10 w-10 text-zion-purple" />
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      <p className="text-muted-foreground mb-6">{subtitle}</p>
=======
>>>>>>>       <p className="text-muted-foreground mb-6">{subtitle}</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <p className="text-muted-foreground mb-6">{subtitle}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          </TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
<<<<<<<< HEAD:src/components/community/EmptyState.tsx
<<<<<<< HEAD

        </Tooltip>;
=======
export default EmptyState

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>         </Tooltip>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        </Tooltip>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
      </TooltipProvider>;
    </div>;
  );

export default EmptyState;
<<<<<<<< HEAD:src/components/community/EmptyState.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
};
export default EmptyState;
<<<<<<<< HEAD:src/components/community/EmptyState.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
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
<<<<<<<< HEAD:src/components/community/EmptyState.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> },;
export default EmptyState;
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/EmptyState.tsx
=======
          </TooltipTrigger>
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
},;
export default EmptyState;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
