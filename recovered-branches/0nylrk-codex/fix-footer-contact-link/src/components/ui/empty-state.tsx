<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import { Link } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { Link } from "react-router-dom",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface EmptyStateProps {

  icon: React.ReactNode
  title: string
  description: string
  action?: {
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  icon;
=======
import { Link } from "react-router-dom",  icon;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Link } from "react-router-dom",  icon;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  icon;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title;
  description;
  action;
  secondaryAction;
<<<<<<< HEAD
  className}: EmptyStateProps) {;

<<<<<<< HEAD
    href?: string;
    onClick?: () => void
  }
  secondaryAction?: {

    text: string

    href?: string;
    onClick?: () => void
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    text: string,
=======
  className}: EmptyStateProps) {;    text: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  className}: EmptyStateProps) {;    text: string,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
  secondaryAction;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
  secondaryAction;    <div

      className={cn(        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  secondaryAction;    <div
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      className={cn(        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

className
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">
<<<<<<< HEAD

        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",

        className
      )}>;
<<<<<<< HEAD
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
        {icon}

      </div>;"
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;"
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;
"
      <div className="flex flex-col sm:flex-row gap-4">;
        {action && (;
          action && action.href ? (;"
=======
=======
)}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
        {icon}

      </div>;
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;

      <div className="flex flex-col sm:flex-row gap-4">;
        {action && (;
          action && action.href ? (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">;
              <Link to={action && action.href}>{action && action.text}</Link>;
            </Button>;
          ) : (;
"
              className="bg-zion-purple hover:bg-zion-purple-light"
=======
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">              className="bg-zion-purple hover:bg-zion-purple-light"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              onClick={action && action.onClick}>;
              {action && action.text}
            </Button>;
          );
        )}

<<<<<<< HEAD
            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Button 
              size="lg" 
              className="bg-zion-purple hover:bg-zion-purple-light"

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        {secondaryAction && (
          secondaryAction.href ? ("
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
<<<<<<< HEAD
          ) : (

<<<<<<< HEAD

<<<<<<< HEAD
        {secondaryAction && (;
          secondaryAction && secondaryAction.href ? (;
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">;
              <Link to={secondaryAction && secondaryAction.href}>{secondaryAction && secondaryAction.text}</Link>;
            </Button>;
          ) : (;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <Button
              variant="outline" 
<Button
              variant="outline" 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              size="lg"
=======
          ) : (              size="lg"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          ) : (              size="lg"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <Button
              variant="outline" 

            <Button 
              variant="outline" 

              size="lg"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
import React from './react';
import { cn } from '@/lib / utils';
import { Button } from '@/components / ui / button';
=======

"
              size="lg""
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={secondaryAction && secondaryAction.onClick}>;
              {secondaryAction && secondaryAction.text}

import React from './react';'
import { cn } from '@/lib / utils';'
import { Button } from '@/components / ui / button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Link } from './react-router-dom';
interface EmptyStateProps {}
  icon: React.ReactNode,
  title: string,
  description: string,
  action?: {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className="bg - zion - purple hover:bg - zion - purple - light";
              on_click={action.on_click}
            >;
              {action.text}
            </Button>))}
        {secondary_action && (
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
