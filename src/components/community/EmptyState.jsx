import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { MessageSquare import { Button } from '@/components/ui/button';
=======
import Link from 'next/link';
=======
import { Link } from 'react-router-dom';
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const EmptyState = ({ title, subtitle, cta, href, hasSession }) => {
    return (<div className="text-center py-16">
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
        <MessageSquare className="h-10 w-10 text-zion-purple"/>
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {hasSession ? (<Button asChild>
                <Link href={href}>{cta}</Link>
              </Button>) : (<Button disabled>{cta}</Button>)}
          </TooltipTrigger>
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>)};
export default EmptyState;
}