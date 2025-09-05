import React from 'react';
import Link from 'next/link';

interface EmptyStateProps {_title: string;
  subtitle: string;
  cta: string;
  href: string;
  hasSession: boolean;}

const EmptyState: React.FC<EmptyStateProps> = (_{_title, _subtitle, _cta, _href, _hasSession}) => {_return (
    <div className="text-center py-16">
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
        <MessageSquare className="h-10 w-10 text-zion-purple" />
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{_subtitle}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {_hasSession ? (
              <Button asChild>
                <Link href={href}>{_cta}</Link>
              </Button>
            ) : (
              <Button disabled>{_cta}</Button>
            )}
          </TooltipTrigger>
          {_!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default EmptyState;
