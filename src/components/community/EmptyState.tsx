import React from 'react',;
import Link from 'next/link',;
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
<<<<<<< HEAD

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {
  return (
    <div className=&quot;text-center py-16&quot;>
      <div className=&quot;bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex&quot;>
        <MessageSquare className=&quot;h-10 w-10 text-zion-purple&quot; />
      </div>
      <h2 className=&quot;text-xl font-medium mb-2&quot;>{title}</h2>
      <p className=&quot;text-muted-foreground mb-6&quot;>{subtitle}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {hasSession ? (
              <Button asChild>
                <Link href={href}>{cta}</Link>
              </Button>
            ) : (
              <Button disabled>{cta}</Button>
=======
;
const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, cta, href, hasSession }) => {;
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
            ) : (;
              <Button disabled>{cta}</Button>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          </TooltipTrigger>;
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
    </div>;
  );
},;
export default EmptyState;