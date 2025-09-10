import React from 'react',;
import Link from 'next/link',;
import { MessageSquare } from 'lucide-react';
<<<<<<< HEAD:src.corrupted.1757510792/components/community/EmptyState.tsx
import { Button } from '@/components/ui/button',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
interface EmptyStateProps {;
  title: string,;
  subtitle: string,;
  cta: string,;
  href: string,;
  hasSession: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className="text-center py-16">
=======
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const EmptyState = ({ title, subtitle, cta, href, hasSession }) => {
    return (<div className="text-center py-16">
>>>>>>> origin/backup-improvements-20250827-015311:src/components/community/EmptyState.tsx
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
<<<<<<< HEAD:src.corrupted.1757510792/components/community/EmptyState.tsx
              </Button>
            ) : (
              <Button disabled>{cta}</Button>
            )}
          </TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );
},;
=======
              </Button>) : (<Button disabled>{cta}</Button>)}
          </TooltipTrigger>
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>);
};
>>>>>>> origin/backup-improvements-20250827-015311:src/components/community/EmptyState.tsx
export default EmptyState;
