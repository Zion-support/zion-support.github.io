
<<<<<<< HEAD
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
<<<<<<< HEAD
    onClick?: () => void
  }
=======
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

<<<<<<< HEAD
export function EmptyState({;
  icon;
  title;
  description;
  action;
  secondaryAction;
export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  className}: EmptyStateProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div

      className={cn(
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"

        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",
        className
<<<<<<< HEAD
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
            <Button
              size="lg"
              className="bg-zion-purple hover:bg-zion-purple-light"
            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"
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
=======
      )}>;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
            <Button;
              size="lg";
              className="bg-zion-purple hover:bg-zion-purple-light";
=======
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

=======
import React from './react';
import { cn } from '@/lib / utils';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';
interface EmptyStateProps {
  icon: React.ReactNode,
  title: string,
  description: string,
  action?: {
    text: string,
    href?: string;
    on_click?: () => void;
  }
  secondary_action?: {
    text: string,
    href?: string;
    on_click?: () => void;
  }
  class_name?: string;
}
export /**
 * EmptyState - Function description
 */
function EmptyState() {
  return (
    <div;
      className={cn (
        "flex flex - col items - center justify - center text - center p - 6 md: p - 10 rounded - lg border border - zion - blue - light bg - zion - blue - dark / 50",
        class_name)}
    >;
      <div className="bg - zion - blue / 30 p - 6 rounded - full mb - 6">;
        {icon}
      </div>;
      <h3 className="text - 2xl font - semibold text - white mb - 3">{title}</h3>;
      <p className="text - zion - slate text - lg mb - 8 max - w-md">{description}</p>;
      <div className="flex flex - col sm:flex - row gap - 4">;
        {action && (
          action.href ? (
            <Button as_child size="lg" className="bg - zion - purple hover:bg - zion - purple - light">;
              <Link to={action.href}>{action.text}</Link>;
            </Button>) : (
            <Button;
              size="lg";
              className="bg - zion - purple hover:bg - zion - purple - light";
              on_click={action.on_click}
            >;
              {action.text}
            </Button>))}
        {secondary_action && (
          secondary_action.href ? (
            <Button as_child variant="outline" size="lg" className="border - zion - blue - light hover:bg - zion - blue - light">;
              <Link to={secondary_action.href}>{secondary_action.text}</Link>;
            </Button>) : (
            <Button;
              variant="outline";
              size="lg";
              className="border - zion - blue - light hover:bg - zion - blue - light";
              on_click={secondary_action.on_click}
            >;
              {secondary_action.text}
            </Button>))}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
