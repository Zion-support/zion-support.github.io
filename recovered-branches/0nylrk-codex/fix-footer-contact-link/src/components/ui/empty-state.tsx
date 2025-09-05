
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  className}: EmptyStateProps) {
  return (
    <div
      className={cn(
        &quot;flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50&quot;,
        className
      )}
    >
      <div className=&quot;bg-zion-blue/30 p-6 rounded-full mb-6&quot;>
        {icon}
      </div>
      <h3 className=&quot;text-2xl font-semibold text-white mb-3&quot;>{title}</h3>
      <p className=&quot;text-zion-slate text-lg mb-8 max-w-md&quot;>{description}</p>

      <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
        {action && (
          action.href ? (
            <Button asChild size=&quot;lg&quot; className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;>
              <Link to={action.href}>{action.text}</Link>
            </Button>
          ) : (
            <Button 
              size=&quot;lg&quot; 
              className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;
              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}

        {secondaryAction && (
          secondaryAction.href ? (
            <Button asChild variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;border-zion-blue-light hover:bg-zion-blue-light&quot;>
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          ) : (
            <Button 
              variant=&quot;outline&quot; 
              size=&quot;lg&quot;
              className=&quot;border-zion-blue-light hover:bg-zion-blue-light&quot;
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.text}
            </Button>
          )
        )}
      </div>
    </div>
  );
}
