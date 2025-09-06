






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

interface EmptyStateProps {

  icon: React.ReactNode
  title: string
  description: string
  action?: {
    text: string

import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
interface EmptyStateProps {;
  icon: React && React.ReactNode,;
  title: string,;
  description: string,;
  action?: {;
    text: string,;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {;
    text: string,;
    href?: string;



    onClick?: () => void;
  };
  className?: string;
}

export function EmptyState(): any ({;

  icon;
  title;
  description;
  action;
  secondaryAction;
  className}: EmptyStateProps) {;


  return (
    <div

      className={cn(
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"

        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",
        className


        {icon}

      </div>;
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;

      <div className="flex flex-col sm:flex-row gap-4">;
        {action && (;
          action && action.href ? (;
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">;
              <Link to={action && action.href}>{action && action.text}</Link>;
            </Button>;
          ) : (;


            <Button
              size="lg" 

              className="bg-zion-purple hover:bg-zion-purple-light"
              onClick={action && action.onClick}>;
              {action && action.text}
            </Button>;
          );
        )}


            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}

        {secondaryAction && (
          secondaryAction.href ? (
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          ) : (
            <Button
              variant="outline"
            <Button 
              variant="outline" 
              size="lg"
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={secondaryAction && secondaryAction.onClick}>;
              {secondaryAction && secondaryAction.text}
            </Button>;
          );
        )}

      </div>;
    </div>;
  );
}


