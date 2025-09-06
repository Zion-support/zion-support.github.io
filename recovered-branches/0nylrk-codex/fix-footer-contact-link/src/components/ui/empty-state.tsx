
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import React from "react",
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface EmptyStateProps {

  icon: React.ReactNode
  title: string
  description: string
  action?: {
    text: string

  className?: string
}

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
}

export function EmptyState({;
  icon;
  title;
  description;
  action;
  secondaryAction;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  className}: EmptyStateProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div

      className={cn(

        className
      )}
    >
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        {action && (
          action.href ? (
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
              <Link to={action.href}>{action.text}</Link>
            </Button>
          ) : (

import React from "react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
interface EmptyStateProps {;
  icon: React.ReactNode,;
  title: string,;
  description: string,;
  action?: {;
    text: string,;
    href?: string,;
    onClick?: () => void;
  },;
  secondaryAction?: {;
    text: string,;
    href?: string,;
    onClick?: () => void;
  },;
  className?: string;
}
;
export function EmptyState({;
  icon,;
  title,;
  description,;
  action,;
  secondaryAction;
  className}: EmptyStateProps) {;
  return (;
    <div;
      className={cn(;
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50";
        className;
      )}
    >
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">
              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            <Button
              variant="outline"
            <Button 
              variant="outline" 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

