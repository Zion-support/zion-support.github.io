

<<<<<<< HEAD


import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react",
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import { Link } from "react-router-dom",
interface EmptyStateProps {

  icon: React.ReactNode
  title: string
  description: string
  action?: {

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
=======
import { Link } from "react-router-dom",  icon;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  title;
  description;
  action;
  secondaryAction;
<<<<<<< HEAD
  className}: EmptyStateProps) {;
    text: string,
=======
  className}: EmptyStateProps) {;    text: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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


  className}: EmptyStateProps) {
  className?: string
}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function EmptyState({;
  icon;
  title;
  description;
  action;
<<<<<<< HEAD
  secondaryAction;

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

        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
=======
  secondaryAction;    <div

      className={cn(        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

        className
import React from "react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
interface EmptyStateProps {;
  icon: React.ReactNode,;
<<<<<<< HEAD
  title: string,;
=======
  title: string,,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">

        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",


        className
      )}>;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
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
=======
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">              className="bg-zion-purple hover:bg-zion-purple-light"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              onClick={action && action.onClick}>;
              {action && action.text}
            </Button>;
          );
        )}

<<<<<<< HEAD

            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"

=======
            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}
<<<<<<< HEAD




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {secondaryAction && (
          secondaryAction.href ? (
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
<<<<<<< HEAD
          ) : (


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

              size="lg"
=======
          ) : (              size="lg"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={secondaryAction && secondaryAction.onClick}>;
              {secondaryAction && secondaryAction.text}
            </Button>;
          );
        )}

      </div>;
    </div>;
  );
<<<<<<< HEAD
}

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
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
