
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
=======
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface EmptyStateProps {
  icon: React.ReactNode,
  title: string,
  description: string,
  action?: {
    text: string,
    href?: string,
    onClick?: () => void
  },
  secondaryAction?: {
    text: string,
    href?: string,
    onClick?: () => void
  },
  className?: string
=======
import React from "react";

interface EmptyStateProps {_icon: React.ReactNode;
  title: string;
  description: string;
  action?: {
    text: string;
    href?: string;
    onClick?: () => void;};
  secondaryAction?: {_text: string;
    href?: string;
    onClick?: () => void;};
  className?: string;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export function EmptyState(_{_icon, _title, _description, _action, _secondaryAction, _className}: EmptyStateProps) {_return (
    <div
      className={cn(
<<<<<<< HEAD
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
=======
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50", _className
      )}
    >
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">
        {_icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{_title}</h3>
      <p className="text-zion-slate text-lg mb-8 max-w-md">{_description}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        {_action && (
          action.href ? (
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
              <Link to={action.href}>{_action.text}</Link>
            </Button>
          ) : (
            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"
              onClick={_action.onClick}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_action.text}
            </Button>
          )
        )}

        {_secondaryAction && (
          secondaryAction.href ? (
<<<<<<< HEAD
            <Button asChild variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;border-zion-blue-light hover:bg-zion-blue-light&quot;>
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          ) : (
            <Button 
              variant=&quot;outline&quot; 
              size=&quot;lg&quot;
              className=&quot;border-zion-blue-light hover:bg-zion-blue-light&quot;
              onClick={secondaryAction.onClick}
=======
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{_secondaryAction.text}</Link>
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="lg"
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={_secondaryAction.onClick}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_secondaryAction.text}
            </Button>
          )
        )}
      </div>
    </div>
  )
}
