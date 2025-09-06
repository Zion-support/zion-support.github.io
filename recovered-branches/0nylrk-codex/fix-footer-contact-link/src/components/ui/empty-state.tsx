<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx


<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
=======
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface EmptyStateProps {

  icon: React.ReactNode
  title: string
  description: string
  action?: {
<<<<<<< HEAD

<<<<<<< HEAD
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
  icon;
  title;
  description;
  action;
  secondaryAction;
  className}: EmptyStateProps) {;
=======

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  className?: string
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  className}: EmptyStateProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div
      className={cn(
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  className?: string
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function EmptyState({;
  icon;
  title;
  description;
  action;
  secondaryAction;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  className}: EmptyStateProps) {
  return (
    <div

      className={cn(
<<<<<<< HEAD
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"

=======
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
        className
      )}>;
=======
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx

=======
<<<<<<< HEAD
            <Button
              size="lg"
              className="bg-zion-purple hover:bg-zion-purple-light"
=======
            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export function EmptyState({;
  icon,;
  title,;
  description,;
  action,;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",


        className
      )}>;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {icon}

========
  secondaryAction,;
  className} EmptyStateProps) {;
  return (;
    <div;
      className={cn(;
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",;
        className;
      )}
    >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
        {icon}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
      </div>;
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
              className="bg-zion-purple hover:bg-zion-purple-light"
              onClick={action && action.onClick}>;
              {action && action.text}
            </Button>;
          );
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx


            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {secondaryAction && (
          secondaryAction.href ? (
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          ) : (

<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
        {secondaryAction && (;
          secondaryAction && secondaryAction.href ? (;
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">;
              <Link to={secondaryAction && secondaryAction.href}>{secondaryAction && secondaryAction.text}</Link>;
            </Button>;
          ) : (;
            <Button
              variant="outline" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx

=======

            <Button 
              variant="outline" 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
              size="lg"
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={secondaryAction && secondaryAction.onClick}>;
              {secondaryAction && secondaryAction.text}
=======
;
=======
        {icon}
      </div>;
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex flex-col sm:flex-row gap-4">;
        {action && (;
          action.href ? (;
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">;
              <Link to={action.href}>{action.text}</Link>;
            </Button>;
<<<<<<< HEAD
          ) :(;
            <Button ;
              size="lg" ;
              className="bg-zion-purple hover:bg-zion-purple-light";
              onClick={action.onClick}
            >;
              {action.text}
            </Button>;
          );
        )}
;
        {secondaryAction && (;
          secondaryAction.href ? (;
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">;
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>;
            </Button>;
          ) :(;
            <Button ;
              variant="outline" ;
              size="lg";
              className="border-zion-blue-light hover:bg-zion-blue-light";
              onClick={secondaryAction.onClick}
            >;
              {secondaryAction.text}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </Button>;
          );
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/empty-state.tsx
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          ) : (;
            <Button;
              size="lg";
              className="bg-zion-purple hover:bg-zion-purple-light";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        {secondaryAction && (
          secondaryAction.href ? (
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          ) : (
<<<<<<< HEAD
            <Button
              variant="outline"
=======
            <Button 
              variant="outline" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
