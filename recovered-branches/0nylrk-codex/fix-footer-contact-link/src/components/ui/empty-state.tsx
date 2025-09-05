
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
}

export function EmptyState(_{_icon, _title, _description, _action, _secondaryAction, _className}: EmptyStateProps) {_return (
    <div
      className={cn(
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
            >
              {_action.text}
            </Button>
          )
        )}

        {_secondaryAction && (
          secondaryAction.href ? (
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{_secondaryAction.text}</Link>
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="lg"
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={_secondaryAction.onClick}
            >
              {_secondaryAction.text}
            </Button>
          )
        )}
      </div>
    </div>
  );
}
