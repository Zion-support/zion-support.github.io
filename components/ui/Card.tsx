<<<<<<< HEAD
import React from 'react';'
=======
<<<<<<< HEAD
import React from 'react';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface CardProps {
  children: React.ReactNode
  className?: string;}

export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}    />

      {children}
=======
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { cn } from '../../lib/utils';
=======
>>>>>>> origin/chore/fix-lint-and-merge

interface CardProps {
  children: React.ReactNode;
  className?: string;}
}
}

<<<<<<< HEAD
export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>`
      {children}
    </div>
  );
}
pr-12243
    </div>;
  )}
import { cn  } from '../../lib/utils';'
=======
export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}    />

      {children}
<<<<<<< HEAD
    </div>
  );
}
pr-12243
    </div>;
  )}

}
pr-12243
import React from "react";
import { cn } from "../../lib/utils";
import React from react";
import { cn } from "../../lib/utils;
=======
<<<<<<< HEAD
import React from 'react';
import { cn } from '../../lib/utils';
// Define HTML element types
interface HTMLElement {
  className: string;
  id: string;
  innerHTML: string;
  textContent: string | null;
  style: { [key: string]: string }
}
import { cn } from '../../lib / utils';
;
// Define HTML element types;
interface HTMLElement {
  class_name: string;
  id: string;
  innerHTML: string;
  text_content: string | null;
  style: { [key: string]: string }
}
interface HTMLDivElement extends HTMLElement {
  tag_name: 'DIV';
}
interface HTMLParagraphElement extends HTMLElement {
  tag_name: 'P';
}
interface HTMLHeadingElement extends HTMLElement {
  tag_name: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
}
interface HTMLDivElement extends HTMLElement {;
  tagName: 'DIV';
}
interface HTMLParagraphElement extends HTMLElement {;
  tagName: 'P';
}
interface HTMLHeadingElement extends HTMLElement {;
  tagName: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
}
const Card = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm"
      className
    )}
    {...props}
  />;
));
Card && Card.displayName = "Card";
const CardHeader = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 && 1.5 p-6", className)}
    {...props}
  />;
));
CardHeader && CardHeader.displayName = "CardHeader";
const CardTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight"
      className
    )}
    {...props}
  />;
));
CardTitle && CardTitle.displayName = "CardTitle";
const CardDescription = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
  <p
const Card = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
    className={cn (
      "rounded - lg border bg - card text - card - foreground shadow - sm",
      class_name)}
    {...props}
  />));
Card.display_name = "Card";
;
const CardHeader = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
    className={cn ("flex flex - col space - y-1.5 p - 6", class_name)}
    {...props}
  />));
CardHeader.display_name = "CardHeader";
;
const CardTitle = React.forward_ref<;
  HTMLParagraphElement,
  React.HTMLAttributes < HTMLHeadingElement>;
>(({ class_name, ...props }, ref) => (
  <h3;
    ref={ref}
    className={cn (
      "text - 2xl font - semibold leading - none tracking - tight",
      class_name)}
    {...props}
  />));
CardTitle.display_name = "CardTitle";
;
const CardDescription = React.forward_ref<;
  HTMLParagraphElement,
  React.HTMLAttributes < HTMLParagraphElement>;
>(({ class_name, ...props }, ref) => (
  <p;
    ref={ref}
    className={cn ("text - sm text - muted - foreground", class_name)}
    {...props}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface HTMLDivElement extends HTMLElement  {"tagName": "DIV";"
}
pr-12243
import React from "react";
import { cn } from "../../lib/utils";

<<<<<<< HEAD
interface HTMLParagraphElement extends HTMLElement  {"tagName": "P";"
}

interface HTMLHeadingElement extends HTMLElement  {"tagName": "H1" | "H2" | "H3" | "H4" | "H5" | "H6";"
=======
=======
    </div>;
  )}
import { cn  } from '../../lib/utils';

interface HTMLDivElement extends HTMLElement  {tagName: \'DIV\';}
}
"
interface HTMLParagraphElement extends HTMLElement  {tagName: \'P\';}
}
"
interface HTMLHeadingElement extends HTMLElement  {tagName: \"H1\" | \"H2\" | \"H3\" | \"H4\" | \"H5\" | \'H6\';}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

const Card = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement    />;
>(({ className, ...props }, ref) => (<div;
<<<<<<< HEAD
    ref = {ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm",className,)}"
=======
<<<<<<< HEAD

=======
    ref = {ref}"
    className={cn(\"rounded-lg border bg-card text-card-foreground shadow-sm\",className,)}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {...props}
;
  const CardContent = React && React.forwardRef<;
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement    />;
>(({ className, ...props }, ref) => (const CardTitle = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement    />;
>(({ className, ...props }, ref) => (<h3;
    ref={ref}"
    className={cn(\"text-2xl font-semibold leading-none tracking-tight\",className,// Define HTML element types;

<<<<<<< HEAD
const CardContent = React && React.forwardRef<;
  HTMLDivElement,;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  HTMLDivElement,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const CardContent = React && React.forwardRef<;
  HTMLDivElement,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent && CardContent.displayName = "CardContent";
=======

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
import { cn } from '../../lib/utils';
// Define HTML element types
interface HTMLElement {
  className: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
interface HTMLElement  {className: string;
  id: string;
  innerHTML: string;}
  textContent: string | null;}
  style: { [key: string]: string }
}

interface HTMLDivElement extends HTMLElement  {tagName: 'DIV';}
}

interface HTMLParagraphElement extends HTMLElement  {tagName: 'P';}
}

interface HTMLHeadingElement extends HTMLElement  {tagName: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';}
}

const Card = null;
      className;
    )}
    {...props}
<<<<<<< HEAD
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement;
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight";
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement;
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

  <div
pr-12243
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  <div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  />));
CardDescription.display_name = "CardDescription";
;
const CardContent = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div ref={ref} className={cn ("p - 6 pt - 0", class_name)} {...props} />));
CardContent.display_name = "CardContent";
;
const CardFooter = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
    className={cn ("flex items - center p - 6 pt - 0", class_name)}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {...props}
<<<<<<< HEAD
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface CardProps  {children: React.ReactNode;
  className?: string;
}export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>;
      {children}
import React from "react";
import { cn } from "../../lib/utils";

>>>>>>> merged-prs-20250907-203621

import React from "react"
import { cn } from "../../lib/utils"
interface HTMLDivElement extends HTMLElement {
<<<<<<< HEAD
  tagName: "DIV";
=======
<<<<<<< HEAD
  tagName: "DIV"
"
interface HTMLParagraphElement extends HTMLElement  {tagName: \"P\";}

"
interface HTMLParagraphElement extends HTMLElement  {tagName: \'P\';}

"
interface HTMLHeadingElement extends HTMLElement  {tagName: \"H1\" | \"H2\" | \"H3\" | \"H4\" | \"H5\" | \'H6\';}

const Card = React.forwardRef<
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement    />
>(({ className, ...props }, ref) => (<div
    ref = {ref}"
    className={cn(\"rounded-lg border bg-card text-card-foreground shadow-sm\",className,)}
    {...props}

=======
  tagName: "DIV;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

interface HTMLParagraphElement extends HTMLElement {
  tagName: "P";
}

interface HTMLHeadingElement extends HTMLElement {
  tagName: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    </div>;
  )}
import { cn  } from '../../lib/utils';
interface HTMLDivElement extends HTMLElement  {tagName: "DIV";
}interface HTMLParagraphElement extends HTMLElement  {tagName: "P";
}interface HTMLHeadingElement extends HTMLElement  {tagName: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
}const Card = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm",className,)}
    {...props}const CardContent = React && React.forwardRef<;
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (const CardTitle = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (<h3;
    ref={ref}
<<<<<<< HEAD
    className={cn("text-2xl font-semibold leading-none tracking-tight",className,// Define HTML element types;"

=======
    className={cn("text-2xl font-semibold leading-none tracking-tight",className,// Define HTML element types;
interface HTMLElement  {className: string;
  id: string;
  innerHTML: string;
  textContent: string | null;
import React from 'react';

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';

import React from 'react',;


import React from 'react';
import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface CardProps {
  children: React.ReactNode
  className?: string;}

export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}    />

      {children}

import React from "react"
import { cn } from "../../lib/utils"
interface HTMLDivElement extends HTMLElement {
  tagName: "DIV"
"
interface HTMLParagraphElement extends HTMLElement  {tagName: \"P\";}

"
interface HTMLParagraphElement extends HTMLElement  {tagName: \'P\';}

"
interface HTMLHeadingElement extends HTMLElement  {tagName: \"H1\" | \"H2\" | \"H3\" | \"H4\" | \"H5\" | \'H6\';}

const Card = React.forwardRef<
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement    />
>(({ className, ...props }, ref) => (<div
    ref = {ref}"
    className={cn(\"rounded-lg border bg-card text-card-foreground shadow-sm\",className,)}
    {...props}

>>>>>>> merged-prs-20250907-203621
  const CardContent = React && React.forwardRef<
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement    />
>(({ className, ...props }, ref) => (const CardTitle = React.forwardRef<
  HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement    />
>(({ className, ...props }, ref) => (<h3
    ref={ref}"
    className={cn(\"text-2xl font-semibold leading-none tracking-tight\",className,// Define HTML element types
interface HTMLElement  {className: string
  id: string
  innerHTML: string;}
  textContent: string | null;}
  style: { [key: string]: string }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

interface HTMLElement  {"className": string;
  }
  "id": string;
  "innerHTML": string;
  "textContent": string | null;
  "style": { ["key": string]: string }
}

interface HTMLDivElement extends HTMLElement  {"tagName": 'DIV';'
}

interface HTMLParagraphElement extends HTMLElement  {"tagName": 'P';'
}

interface HTMLHeadingElement extends HTMLElement  {"tagName": 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';'
}

const Card = null;
      className;
    )}
<<<<<<< HEAD
    {...props} />;
))Card.displayName = "Card";"
=======
    {...props}
  />;
))Card.displayName = "Card";const CardHeader = null;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}"
    {...props} />;
))CardHeader.displayName = "CardHeader";"


const CardDescription = React.forwardRef<
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const CardHeader = null;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}"
    {...props} />;
))CardHeader.displayName = "CardHeader";"


     />;"
))Card.displayName = \'Card\'
const CardHeader = null
  React.HTMLAttributes<HTMLDivElement    />
>(({ className, ...props }, ref) => (<div
    ref={ref}"
    className={cn(\"flex flex-col space-y-1.5 p-6\", className)}
    {...props}
     />;"
))CardHeader.displayName = \'CardHeader\'
const CardTitle = null
      className
    )}
    {...props}
  />;"
))CardTitle.displayName = \'CardTitle\'
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
))CardHeader.displayName = "CardHeader";const CardTitle = null;
      className;
    )}
    {...props}
  />;
<<<<<<< HEAD
))CardTitle.displayName = "CardTitle";"
=======
=======
     />;"
))Card.displayName = \'Card\';

const CardHeader = null;
  React.HTMLAttributes<HTMLDivElement    />;
>(({ className, ...props }, ref) => (<div;
    ref={ref}"
    className={cn(\"flex flex-col space-y-1.5 p-6\", className)}
    {...props}
     />;"
))CardHeader.displayName = \'CardHeader\';

const CardTitle = null;
      className;
    )}
    {...props}
  />;"
))CardTitle.displayName = \'CardTitle\';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription  = null;React.HTMLAttributes<HTMLParagraphElement    />;
>(({ className, ...props }, ref) => (<p;
<<<<<<< HEAD
    ref={ref}
<<<<<<< HEAD
    className={cn("text-sm text-muted-foreground", className)}"
    {...props} />;
))CardDescription.displayName = "CardDescription";"

  />));
CardDescription.display_name = "CardDescription";
;
const CardContent = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div ref={ref} className={cn ("p - 6 pt - 0", class_name)} {...props} />));
CardContent.display_name = "CardContent";
;
const CardFooter = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div;
))CardDescription.displayName = "CardDescription";const CardContent = React.forwardRef<;
  HTMLDivElement,const CardContent = React.forwardRef<;
  HTMLDivElement,const CardContent  = null;React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;"
))CardContent && CardContent.displayName = "CardContent";"

const CardFooter = React && React.forwardRef<;
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div; />))CardDescription.display_name = "CardDescription";"

const CardContent = React.forward_ref<;
  HTMLDivElement,React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (<div ref={ref} className={cn ("p - 6 pt - 0", class_name)} {...props} />))CardContent.display_name = "CardContent";"
=======
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
=======
    ref={ref}"
    className={cn(\"text-sm text-muted-foreground\", className)}
    {...props}
     />;"
))CardDescription.displayName = \'CardDescription\';
>>>>>>> origin/chore/fix-lint-and-merge

const CardContent = React.forwardRef<;
  HTMLDivElement,const CardContent = React.forwardRef<;
  HTMLDivElement,const CardContent  = null;React.HTMLAttributes<HTMLDivElement    />;"
>(({ className, ...props }, ref) => (<div ref={ref} className={cn(\"p-6 pt-0\", className)} {...props}    />;"
))CardContent && CardContent.displayName = \'CardContent\';

const CardFooter = React && React.forwardRef<;
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement    />;
>(({ className, ...props }, ref) => (<div;"
     />))CardDescription.display_name = \'CardDescription\';

const CardContent = React.forward_ref<;
  HTMLDivElement,React.HTMLAttributes < HTMLDivElement>;"
>(({ class_name, ...props }, ref) => (<div ref={ref} className={cn (\"p - 6 pt - 0\", class_name)} {...props}    />))CardContent.display_name = \'CardContent\';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const CardFooter = React.forward_ref<;
  HTMLDivElement,React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (<div;
<<<<<<< HEAD
    ref={ref}
    className={cn ("flex items - center p - 6 pt - 0", class_name)}"
    {...props}
import React from 'react',interface CardProps {'
  }
  "children": React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;

interface CardProps  {"children": React.ReactNode;
  }
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;
}

const "Card": React.FC<CardProps> = ({children;
  }
  className = '';'
  style;
  onClick;
  hover = true}) => ;
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';'

const hoverClasses = hover ? '"hover": border-blue-500/30 "hover":shadow-2xl "hover":shadow-blue-500/10 "hover":-translate-y-1 "hover":bg-gray-900/80 focus-"within":border-blue-500/50 focus-"within":shadow-lg focus-"within":shadow-blue-500/20' : '';'

const clickableClasses = onClick ? 'cursor-pointer "focus":outline-none "focus":ring-2 "focus":ring-blue-500 "focus":ring-offset-2 "focus":ring-offset-black' : '';'

const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;`
  />))CardFooter.display_name = "CardFooter";"

interface CardProps  {"children": React.ReactNode,class_name?: string,style?: React.CSSProperties,on_click?: () => void,hover?: boolean;
}
  return (className={classes}
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
    ref={ref}"
    className={cn (\"flex items - center p - 6 pt - 0\", class_name)}
    {...props}
<<<<<<< HEAD
import React from 'react',interface CardProps {'
  }
  "children": React.ReactNode;
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
  className?: string;
<<<<<<< HEAD
  title?: string;
}

export default function Card({ children, className = '', title }: CardProps) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
<<<<<<< HEAD
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 p-6 ${className}`}>
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
      {children}
    </div>
  );
}
=======
      className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}
        <div className = "absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 "hover": opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}"
    </div>
},export default Card,export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent;
}

<<<<<<< HEAD
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 "hover": opacity - 100 transition - opacity duration - 300 pointer - events - none" />,"
}
    </div>)CardContent.displayName = "CardContent";"

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    </div>)},export default Card,export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>)CardContent.displayName = "CardContent";const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}"
    {...props} />;
))CardFooter.displayName = "CardFooter";"

import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
=======
},
export default Card,
;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from 'react';
interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () =    /> void
interface CardProps  {children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  hover?: boolean;}

<<<<<<< HEAD
=======
CardContent && CardContent.displayName = "CardContent";


const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

  <div

CardContent.displayName = "CardContent";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    </div>)},export default Card,export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>)CardContent.displayName = "CardContent";const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />;
))CardFooter.displayName = "CardFooter";export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }hover?: boolean;
}
const Card: React.FC<CardProps> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;
=======
import React from 'react';,interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () =    /> void;

interface CardProps  {children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;}
}
}

const Card: React.FC<CardProps    /> = ({children;
  className = '';
  style;}
  onClick;}
  hover = true}) => ;
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';

const hoverClasses = hover ? 'hover: border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : '';

const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : '';

const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;"
  />))CardFooter.display_name = \'CardFooter\';

interface CardProps  {children: React.ReactNode,class_name?: string,style?: React.CSSProperties,on_click?: () => void,hover?: boolean;}
}
  return (className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}"
        <div className = \"absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover: opacity - 100 transition - opacity duration - 300 pointer - events - none\"    />)}
=======
  style?: React.CSSProperties;
  onClick?: () => void;

<<<<<<< HEAD
interface CardProps  {"children": React.ReactNode;
  }
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;
}
const Card: React.FC<CardProps> = ({children;
  className = '';
  style;
  onClick;
  hover = true}) => ;
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';'

const hoverClasses = hover ? '"hover": border-blue-500/30 "hover":shadow-2xl "hover":shadow-blue-500/10 "hover":-translate-y-1 "hover":bg-gray-900/80 focus-"within":border-blue-500/50 focus-"within":shadow-lg focus-"within":shadow-blue-500/20' : '';'

const clickableClasses = onClick ? 'cursor-pointer "focus":outline-none "focus":ring-2 "focus":ring-blue-500 "focus":ring-offset-2 "focus":ring-offset-black' : '';'

const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;`
  />))CardFooter.display_name = "CardFooter";"

interface CardProps  {"children": React.ReactNode,class_name?: string,style?: React.CSSProperties,on_click?: () => void,hover?: boolean;
}
  return (className={classes}
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
  return (
=======
import React from 'react';
interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  hover?: boolean
}
const Card: React.FC<CardProps> = ({

  children
  className = ''
  style
  onClick
  hover = true}) => {
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden'
  const hoverClasses = hover ? 'hover: border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : ''
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : ''
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`
<<<<<<< HEAD
  return (
    <div
      className={classes}
      style={style}
      onClick={onClick}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  )
}
"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className=\"absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover: opacity - 100 transition - opacity duration - 300 pointer - events - none\" />
}"
=======
<<<<<<< HEAD
=======
=======
  />));
CardFooter.display_name = "CardFooter";
;
import React from 'react',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  />;
));
CardFooter.displayName = "CardFooter";

import React from 'react',;
interface CardProps {
  children: React.ReactNode,
  class_name?: string,
  style?: React.CSSProperties,
  on_click?: () => void,
  hover?: boolean;
}
const Card: React.FC<CardProps> = ({

  children
  className = ''
  style
  onClick
  hover = true}) => {
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden'
  const hoverClasses = hover ? 'hover: border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : ''
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : ''
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`
  return (
    <div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}
<<<<<<< HEAD
      <div className="absolute inset - 0 bg - gradient - to - br from - blue - 500 / 5 via - transparent to - purple - 500 / 5 opacity - 0 hover:opacity - 100 transition - opacity duration - 300" />;
      {/* Content wrapper */}
      <div className="relative z - 10">;
        {children}
=======

<<<<<<< HEAD
},
export default Card,
;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
      <div className="absolute inset - 0 bg - gradient - to - br from - blue - 500 / 5 via - transparent to - purple - 500 / 5 opacity - 0 hover:opacity - 100 transition - opacity duration - 300" />;

      {/* Content wrapper */}
      <div className="relative z - 10">;
        {children}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>);

},
export default Card,
;
<<<<<<< HEAD
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };


export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };


;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
>>>>>>> merged-prs-20250907-203621
    </div>
},export default Card,export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent;}
}
<<<<<<< HEAD
=======
export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
},

export default Card,;
;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>);

CardContent && CardContent.displayName = "CardContent";


const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

  <div

CardContent.displayName = "CardContent";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    </div>)},export default Card,export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>)CardContent.displayName = "CardContent";const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />;
))CardFooter.displayName = "CardFooter";export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }hover?: boolean;
}
const Card: React.FC<CardProps> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;
=======
import React from 'react';,interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () =    /> void;

interface CardProps  {children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;}
}
}

const Card: React.FC<CardProps    /> = ({children;
  className = '';
  style;}
  onClick;}
  hover = true}) => ;
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';

const hoverClasses = hover ? 'hover: border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : '';

const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : '';

const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;"
  />))CardFooter.display_name = \'CardFooter\';

interface CardProps  {children: React.ReactNode,class_name?: string,style?: React.CSSProperties,on_click?: () => void,hover?: boolean;}
}
  return (className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}"
        <div className = \"absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover: opacity - 100 transition - opacity duration - 300 pointer - events - none\"    />)}
    </div>
},export default Card,export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent;}
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className=\"absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover: opacity - 100 transition - opacity duration - 300 pointer - events - none\"    />
}"
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>)CardContent.displayName = \"CardContent\";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn("flex items-center p-6 pt-0", className)}
=======
    className={cn(flex items-center p-6 pt-0, className)}
=======
    </div>)CardContent.displayName = \'CardContent\';

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement    />;
>(({ className, ...props }, ref) => (<div;
    ref={ref}"
    className={cn(\"flex items-center p-6 pt-0\", className)}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {...props}
     />;"
))CardFooter.displayName = \'CardFooter\';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }hover?: boolean;
}

<<<<<<< HEAD
const "Card": React.FC<CardProps> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;
=======
<<<<<<< HEAD
const Card: React.FC<CardProps /> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;}
=======
const Card: React.FC<CardProps    /> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
    </div>
  );
}
<<<<<<< HEAD


export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
export default function Card({ children, className = '' }: CardProps) {
=======
<<<<<<< HEAD
"
export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
=======
<<<<<<< HEAD


export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
export default function Card({ children, className = '' }: CardProps) {
export default function Card({ children, className = ' }: CardProps) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
<<<<<<< HEAD


=======


=======
<<<<<<< HEAD
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
