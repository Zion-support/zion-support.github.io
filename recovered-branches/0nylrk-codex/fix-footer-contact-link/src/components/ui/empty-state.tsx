
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";

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
import { Link } from "react-router-dom",
interface EmptyStateProps {

  icon: React.ReactNode
  title: string
  description: string
  action?: {

  className?: string
}
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
import React from "react","
import { cn } from "@/lib/utils",";
import { Button } from "@/components/ui/button";"
import { Link } from "react-router-dom";"
import { Button } from "@/components/ui/button","
import { Link } from "react-router-dom",

interface EmptyStateProps {};
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: {}
  icon;
import { Link } from "react-router-dom",  icon;
import { Link } from "react-router-dom",  icon;
  icon;
  title;
  description;
  action;
  secondaryAction;
  className}: EmptyStateProps) {;

    href?: string;
    onClick?: () => void
  }
  secondaryAction?: {

    text: string

    href?: string;
    onClick?: () => void
  }
    text: string,
  className}: EmptyStateProps) {;    text: string,
  className}: EmptyStateProps) {;    text: string,
    href?: string,
    onClick?: () => void;
  },
  secondaryAction?: {}
    text: string,
    href?: string,
    onClick?: () => void;
  },

className?: string
}

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

  className}: EmptyStateProps) {}
  return (;
    <div;
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
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
  secondaryAction;    <div

      className={cn(        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
  secondaryAction;    <div
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

      className={cn(        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"

className
import React from "react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
interface EmptyStateProps {;
  icon: React.ReactNode,;
  title: string,,
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
export function EmptyState() { return null; }
      )}
>
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">

        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",

        className
      )}>;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
        {icon}

      </div>;"
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;"
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;
"
      <div className="flex flex-col sm:flex-row gap-4">;
        {action && (;
          action && action.href ? (;"
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
"
              className="bg-zion-purple hover:bg-zion-purple-light"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">              className="bg-zion-purple hover:bg-zion-purple-light"
            <Button
              size="lg" 

<div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
        {icon}

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
              className="bg-zion-purple hover:bg-zion-purple-light"
              onClick={action && action.onClick}>;
              {action && action.text}
            </Button>;
          );
        )}

            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"

            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"

              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}



        {secondaryAction && (
          secondaryAction.href ? ("
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
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
          ) : (              size="lg"
          ) : (              size="lg"
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

import React from './react';
import { cn } from '@/lib / utils';
import { Button } from '@/components / ui / button';

"
              size="lg""
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={secondaryAction && secondaryAction.onClick}>;
              {secondaryAction && secondaryAction.text}

import React from './react';'
import { cn } from '@/lib / utils';'
import { Button } from '@/components / ui / button';'
import { Link } from './react-router-dom';
interface EmptyStateProps {}
  icon: React.ReactNode,
  title: string,
  description: string,
  action?: {}
}
  secondaryAction;)
  className}: EmptyStateProps) {;
    text: string,
    href?: string,
  },
  secondaryAction?: {

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
secondary_action?: {}
    text: string,
    href?: string,
    onClick?: () => void;
  },

  className?: string;
}
export /**;
 * EmptyState - Function description;
 */
function EmptyState() {}
  return (
    <div;
      className={cn ("
        "flex flex - col items - center justify - center text - center p - 6 md: p - 10 rounded - lg border border - zion - blue - light bg - zion - blue - dark / 50",
        class_name)}
    >;"
      <div className="bg - zion - blue / 30 p - 6 rounded - full mb - 6">;
        {icon}
      </div>;"
      <h3 className="text - 2xl font - semibold text - white mb - 3">{title}</h3>;"
      <p className="text - zion - slate text - lg mb - 8 max - w-md">{description}</p>;"
      <div className="flex flex - col sm:flex - row gap - 4">;
        {action && (
          action.href ? ("
            <Button as_child size="lg" className="bg - zion - purple hover:bg - zion - purple - light">;
              <Link to={action.href}>{action.text}</Link>;
            </Button>) : (
            <Button;"
              size="lg";"
  return (
    <div;
      className={cn(
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50""
        className;"
import React from "react",;""
import { cn } from "@/lib/utils",;""
import { Button } from "@/components/ui/button",;""
import { Link } from "react-router-dom",;"
  icon: React.ReactNode,;

interface EmptyStateProps {;
  icon: React.ReactNode,;
  title: string,,
  description: string,;
  action?: {;
    text: string,;

    href?: string,;)
</div>
      className={cn(;"
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50";"
        className;)
      )}
    >
</div>"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;"
      </div>;"
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;""
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;""
      <div className="flex flex-col sm:flex-row gap-4">;"
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">;"

              <Link to={action && action.href}>{action && action.text};
            ;
            <Button;"
              size="lg"""
              className="bg-zion-purple hover:bg-zion-purple-light""

              onClick={action && action.onClick}>;

</Button>
            </Button>;

            <Button;"
              size="lg"""
              className="bg-zion-purple hover:bg-zion-purple-light""
              onClick={action.onClick}

            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">"

              <Link to={secondaryAction.href}>{secondaryAction.text}
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">;"

              <Link to={secondaryAction && secondaryAction.href}>{secondaryAction && secondaryAction.text};
              variant="outline""
              variant="outline"""
              className="border-zion-blue-light hover:bg-zion-blue-light""

              onClick={secondaryAction && secondaryAction.onClick}>;
</Button>
            </Button>;

      </div>;
      className={cn ("
        "flex flex - col items - center justify - center text - center p - 6 md: p - 10 rounded - lg border border - zion - blue - light bg - zion - blue - dark / 50",")
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
          secondary_action.href ? ("
            <Button as_child variant="outline" size="lg" className="border - zion - blue - light hover:bg - zion - blue - light">;
              <Link to={secondary_action.href}>{secondary_action.text}</Link>;
            </Button>) : (
            <Button;"
              variant="outline";"
              size="lg";"
              className="border - zion - blue - light hover:bg - zion - blue - light";
              on_click={secondary_action.on_click}
            ))}
    </div>);
}
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

pr-12325
            >
</Button>
            </Button>
      </div>
    </div>
  )
}
}

'"
    </div>"

