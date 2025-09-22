import React from 'react';
import * as React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import * as React from "react"
"
import { cn } from "@/lib/utils"

;
import {cn} from '@/lib/utils';"
import * as React from "react"
"
import { cn } from "@/lib/utils"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
></HTMLDivElement>(({ className, ...props }, ref) => (

=======

import * as React from 'react';
import {cn} from '@/lib/utils';
import * as React from "react"

import { cn } from "@/lib/utils"

import {cn} from '@/lib/utils';
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
></HTMLDivElement>(({ className, ...props }, ref) => (

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const Card = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
></HTMLDivElement>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
<<<<<<< HEAD
=======
  <div
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    ref={ref}
    className={cn(

      "rounded-lg border bg-card text-card-foreground shadow-sm",

import * as React from "react";
;
import { cn } from "@/lib/utils";
;
const Card = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div;
    ref={ref}

      "rounded-lg border bg-card text-card-foreground shadow-sm",

      className
    className={cn(;
      "rounded-lg border bg-card text-card-foreground shadow-sm",;
      className;
import {cn} from '@/lib/utils';
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(

      'rounded-lg border bg-card text-card-foreground shadow-sm'
      "rounded-lg border bg-card text-card-foreground shadow-sm",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  <div;
    ref={ref}
    className={cn('
      'rounded-lg border bg-card text-card-foreground shadow-sm'

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
))
=======

))"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
<<<<<<< HEAD
  React.HTMLAttributes<HTMLDivElement>

>(({ className, ...props }, ref) => (
'
Card && Card.displayName = 'Card';

const CardHeader = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>;
>(({ className, ...props }, ref) => (;
className;
    )}
    {...props}
  />;
));
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1 && 1.5 p-6', className)}
    {...props}
>(({ className, ...props }, ref) => (

))
=======
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1 && 1.5 p-6', className)}
    {...props}
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />

));
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef<
  HTMLParagraphElement
  React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>
))
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, ...props }, ref) => (
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
CardHeader && CardHeader.displayName = 'CardHeader';
=======
  React.HTMLAttributes<HTMLDivElement>CardHeader && CardHeader.displayName = 'CardHeader';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  React.HTMLAttributes<HTMLDivElement>CardHeader && CardHeader.displayName = 'CardHeader';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>(({ className, ...props }, ref) => (
/>;
));
CardHeader && CardHeader.displayName = 'CardHeader';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

const CardTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
<h3
ref={ref}  />;
));
  <h3;
    ref={ref}
className={cn(
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef<
  HTMLParagraph</HTMLParagraphElement>Element
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
))
=======
))"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
HTMLParagraphElement,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />

<p
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}

CardDescription && CardDescription.displayName = 'CardDescription';

const CardContent </HTMLDivElement>= React && React.forwardRef<;
import * as React from "react"""
import { cn } from "@/lib/utils"""
import {cn} from '@/lib/utils';
import { cn } from "@/lib/utils""
const Card = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>

>(({ className, ...props }, ref) => (
const Card = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
)
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
));
CardContent && CardContent.displayName = 'CardContent';

</HTMLDivElement>const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

  <div
    ref={ref}
    className={cn(

"
      "rounded-lg border bg-card text-card-foreground shadow-sm","
    className={cn("
      'rounded-lg border bg-card text-card-foreground shadow-sm
      className;)
    )}
    {...props}
  />
</div>
const CardHeader = React.forwardRef<
  HTMLDivElement,

const CardHeader = React && React.forwardRef<;
    ref={ref}"
    className={cn('flex flex-col space-y-1 && 1.5 p-6', className)}
    ref={ref})
    className={cn('flex flex-col space-y-1.5 p-6', className)}
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>

const CardTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLHeadingElement>;

  <h3;
  />;
</h3>
      'text-2xl font-semibold leading-none tracking-tight
      "text-2xl font-semibold leading-none tracking-tight","
const CardDescription = React.forwardRef<

  React.HTMLAttributes<HTMLParagraphElement>

const CardDescription = React && React.forwardRef<;
  React && React.HTMLAttributes<HTMLParagraphElement>;

  <p;
;"
import {cn} from '@/lib / utils';
;
const Card = React.forward_ref<;
  React.HTMLAttributes < HTMLDivElement>;
</p>
>(({ class_name, ...props }, ref) => (
    className={cn (
      'rounded - lg border bg - card text - card - foreground shadow - sm',')
      class_name)}
));
CardDescription.displayName = 'CardDescription';
const CardContent = React.forwardRef<

  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
const CardFooter = React.forwardRef<
))
CardDescription.displayName = "CardDescription""
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />"

    className={cn('flex items-center p-6 pt-0', className)}
const CardContent = React && React.forwardRef<;

  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
const CardFooter = React && React.forwardRef<;

  />));
const CardContent = React.forward_ref<;
>(({ class_name, ...props }, ref) => ()
  <div ref={ref} className={cn ('p - 6 pt - 0', class_name)} {...props} />));
</HTMLDivElement > const CardFooter = React.forward_ref<;
    className={cn ('flex items - center p - 6 pt - 0', class_name)}

CardFooter && CardFooter.displayName = 'CardFooter';
export {;
  Card,;
  CardHeader,;
  CardFooter,;
  CardTitle,;
  CardDescription,;
  CardContent,;
};
=======
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  />
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
'
CardTitle && CardTitle.displayName = 'CardTitle';

const CardDescription = React && React.forwardRef<;
  HTMLParagraph</HTMLParagraphElement>Element,;
  React && React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
<p;
;'
import {cn} from '@/lib / utils';
;
const Card = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
></HTMLDivElement>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
className={cn('
      'text-2xl font-semibold leading-none tracking-tight'
  <p;
    ref={ref}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    className={cn (
=======
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight'
  <p
    ref={ref}
    className={cn (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      'rounded - lg border bg - card text - card - foreground shadow - sm',
      class_name)}
    {...props}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
));
=======

    className={cn ('
      'rounded - lg border bg - card text - card - foreground shadow - sm',
      class_name)}
    {...props}
));'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
CardDescription.displayName = 'CardDescription';
const CardContent </HTMLDivElement>= React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => ('
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));'
CardContent.displayName = 'CardContent';
</HTMLDivElement>const CardFooter = React.forwardRef<
  HTMLDivElement;
))"
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => ("
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))"
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
CardDescription && CardDescription.displayName = 'CardDescription';

const CardContent </HTMLDivElement>= React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;'
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
));'
CardContent && CardContent.displayName = 'CardContent';

</HTMLDivElement>const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

<div;
  />));'
CardDescription.display_name = 'CardDescription';
;
const CardContent </HTMLDivElement>= React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => ('
  <div ref={ref} className={cn ('p - 6 pt - 0', class_name)} {...props} />));'
CardContent.display_name = 'CardContent';
;
</HTMLDivElement > const CardFooter = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div;
ref={ref}'
    className={cn ('flex items - center p - 6 pt - 0', class_name)}
    {...props}
'
CardFooter && CardFooter.displayName = 'CardFooter';

export {;
  Card,;
  CardHeader,;
  CardFooter,;
  CardTitle,;
  CardDescription,;
  CardContent,;
};

/>));'
CardFooter.display_name = 'CardFooter';
;
export {}
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
;

))"

  />

));
CardDescription.displayName = 'CardDescription';
const CardContent </HTMLDivElement>= React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';
</HTMLDivElement>const CardFooter = React.forwardRef<
  HTMLDivElement
))
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => ("
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))"
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,

  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
<div;
    ref={ref}'
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />

))"
CardFooter.displayName = "CardFooter"

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
CardTitle.displayName = "CardTitle";
;

const CardDescription = React.forwardRef<;
  React.HTMLAttributes<HTMLParagraphElement>;

    className={cn("text-sm text-muted-foreground", className)}"
const CardContent = React.forwardRef<;
  React.HTMLAttributes<HTMLDivElement>;
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;"
const CardFooter = React.forwardRef<;

    className={cn("flex items-center p-6 pt-0", className)}"
</div>"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } import * as React from "react" const Card = React.forwardRef< HTMLDivElement;"
React.HTMLAttributes<HTMLDivElement> > ( ({
}, ref) => (<div) 
}{
  ...props;"
}/>) ) Card.displayName = "Card" const CardHeader = React.forwardRef< HTMLDivElement;"
)"
}, ref) => (<div />) ) CardHeader.displayName = "CardHeader" const CardTitle = React.forwardRef< HTMLParagraphElement;"
React.HTMLAttributes<HTMLHeadingElement> > ( ({
}, ref) => (<h3) 
}/>) ) CardTitle.displayName = "CardTitle" const CardDescription = React.forwardRef< HTMLParagraphElement;"
React.HTMLAttributes<HTMLParagraphElement> > ( ({
className, ...props 
}, ref) => (<p />) ) CardDescription.displayName = "CardDescription" const CardContent = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement>) ) CardContent.displayName = "CardContent" const CardFooter = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({
  className, ...props 
}, ref) => (<div />) ) CardFooter.displayName = "CardFooter" export {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent 
}
));
CardFooter.displayName = 'CardFooter';
export {
  Card
  CardHeader
  CardFooter
  CardTitle
  CardDescription
  CardContent
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,;
};
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    {...props}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    {...props}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}, ref) => (<div />) ) CardFooter.displayName = "CardFooter" export {"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
