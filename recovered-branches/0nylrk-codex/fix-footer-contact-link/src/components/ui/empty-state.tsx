


<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface EmptyStateProps {

  icon: React.ReactNode
  title: string
  description: string
  action?: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    text: string
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  icon;
  title;
  description;
  action;
  secondaryAction;
  className}: EmptyStateProps) {;
<<<<<<< HEAD
<<<<<<< HEAD

    text: string

    href?: string;
    onClick?: () => void
  }
  secondaryAction?: {

    text: string

    href?: string;
    onClick?: () => void
  }
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    text: string,
    href?: string,
    onClick?: () => void
  },
  secondaryAction?: {
    text: string,
    href?: string,
    onClick?: () => void
  },
<<<<<<< HEAD
<<<<<<< HEAD
  className?: string
}

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
  className}: EmptyStateProps) {
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className?: string
}



  className}: EmptyStateProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div

      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
        className
      )}>;

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
;
interface EmptyStateProps {;
  icon:React.ReactNode,;
  title:string,;
  description:string,;
  action?:{;
    text:string,;
    href?:string,;
    onClick?:() => void;
  },;
  secondaryAction?:{;
    text:string,;
    href?:string,;
    onClick?:() => void;
  },;
  className?:string,;
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",


        className
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      )}>;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
        {icon}

<<<<<<< HEAD
  secondaryAction,;
  className} EmptyStateProps) {;
  return (;
    <div;
      className={cn(;
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",;
        className;
      )}
    >;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
        {icon}
      </div>;
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;
            <Button
              size="lg" 
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="bg-zion-purple hover:bg-zion-purple-light"
              onClick={action && action.onClick}>;
              {action && action.text}
            </Button>;
          );
        )}


<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}

<<<<<<< HEAD



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {secondaryAction && (
          secondaryAction.href ? (
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          ) : (
<<<<<<< HEAD


        {secondaryAction && (;
          secondaryAction && secondaryAction.href ? (;
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">;
              <Link to={secondaryAction && secondaryAction.href}>{secondaryAction && secondaryAction.text}</Link>;
            </Button>;
          ) : (;
            <Button
              variant="outline" 

            <Button 
              variant="outline" 

=======
            <Button
              variant="outline"
            <Button 
              variant="outline" 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              size="lg"
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={secondaryAction && secondaryAction.onClick}>;
              {secondaryAction && secondaryAction.text}
<<<<<<< HEAD
;
        {icon}
      </div>;
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;
      <div className="flex flex-col sm:flex-row gap-4">;
        {action && (;
          action.href ? (;
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">;
              <Link to={action.href}>{action.text}</Link>;
            </Button>;
      </div>;
    </div>;
=======
            </Button>;
          );
        )}

      </div>;
    </div>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 interface EmptyStateProps {
  icon: React.ReactNode;
title: string;
description: string;
action?: {
  text: string;
href?: string;
onClick?: () => void 
};
secondaryAction?: {
  text: string;
href?: string;
onClick?: () => void 
};
className?: string 
}export function EmptyState ({
  icon, title, description, action, secondaryAction, className 
}: EmptyStateProps) {
  return (<div className= {
  cn (> {
  action.text 
}</Button>) ) 
}{
  secondaryAction && (secondaryAction.href ? (> {
  secondaryAction.text 
}</Button>) ) 
}</div> </div>) 
}
          ) : (;
            <Button;
              size="lg";
              className="bg-zion-purple hover:bg-zion-purple-light";
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
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.text}
            </Button>
          )
        )}
      </div>
    </div>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
