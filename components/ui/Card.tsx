<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;}
}
}
export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`} />

      {children}
<<<<<<< HEAD
    </div>
  );
}
pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>;
  )}
import { cn  } from '../../lib/utils';

interface HTMLDivElement extends HTMLElement  {tagName: \"DIV\";}
}
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react";
import { cn } from "../../lib/utils";

interface HTMLDivElement extends HTMLElement {
  tagName: "DIV";
"
interface HTMLParagraphElement extends HTMLElement  {tagName: \"P\";}
}
"
interface HTMLHeadingElement extends HTMLElement  {tagName: \"H1\" | \"H2\" | \"H3\" | \"H4\" | \"H5\" | \"H6\";}
}

const Card = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement />;
>(({ className, ...props }, ref) => (<div;
    ref = {ref}"
    className={cn(\"rounded-lg border bg-card text-card-foreground shadow-sm\",className,)}
    {...props}
;
  const CardContent = React && React.forwardRef<;
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement />;
>(({ className, ...props }, ref) => (const CardTitle = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement />;
>(({ className, ...props }, ref) => (<h3;
    ref={ref}"
    className={cn(\"text-2xl font-semibold leading-none tracking-tight\",className,// Define HTML element types;

const CardContent = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

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
interface HTMLElement  {className: string;
  id: string;
  innerHTML: string;}
  textContent: string | null;}
  style: { [key: string]: string ;}
}

interface HTMLDivElement extends HTMLElement  {tagName: 'DIV';}
}

interface HTMLParagraphElement extends HTMLElement  {tagName: 'P';}
}

interface HTMLHeadingElement extends HTMLElement  {tagName: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';}
}

const Card = null;
      className;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    )}
    {...props}
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

<<<<<<< HEAD
const CardTitle = React.forwardRef<
  HTMLParagraphElement;
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight";
      className
=======
const CardTitle = null;
      className
origin/cursor/automate-test-improve-and-merge-code-2533
      className;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
<<<<<<< HEAD
  HTMLParagraphElement;
=======
  HTMLParagraphElement,
const CardDescription = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
<<<<<<< HEAD
=======
    {...props}
  />;
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
const CardContent = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent && CardContent.displayName = "CardContent";
<<<<<<< HEAD


const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

  <div
pr-12243
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
=======
const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription  = null;React.HTMLAttributes<HTMLParagraphElement />;
>(({ className, ...props }, ref) => (<p;
    ref={ref}"
    className={cn(\"text-sm text-muted-foreground\", className)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import React from 'react';
=======

  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () = /> void;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

interface CardProps  {children: React.ReactNode;
  className?: string;
}export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>;
      {children}
import React from "react";
import { cn } from "../../lib/utils";


interface HTMLDivElement extends HTMLElement {
  tagName: "DIV";
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
    className={cn("text-2xl font-semibold leading-none tracking-tight",className,// Define HTML element types;
interface HTMLElement  {className: string;
  id: string;
  innerHTML: string;
  textContent: string | null;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

=======
import React from 'react'
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  style: { [key: string]: string }
}
interface HTMLDivElement extends HTMLElement  {tagName: 'DIV';
}
interface HTMLParagraphElement extends HTMLElement  {tagName: 'P';
}
interface HTMLHeadingElement extends HTMLElement  {tagName: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
}const Card = null;
      className;
    )}
    {...props}
<<<<<<< HEAD
  />;
))Card.displayName = "Card";const CardHeader = null;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />;
    )}
    {...props}
  />;
));
CardTitle.displayName = "CardTitle";


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
))CardTitle.displayName = "CardTitle";const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription  = null;React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (<p;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));

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
>(({ className, ...props }, ref) => (<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
))CardContent && CardContent.displayName = "CardContent";const CardFooter = React && React.forwardRef<;
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
  />))CardDescription.display_name = "CardDescription";const CardContent = React.forward_ref<;
  HTMLDivElement,React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (<div ref={ref} className={cn ("p - 6 pt - 0", class_name)} {...props} />))CardContent.display_name = "CardContent";const CardFooter = React.forward_ref<;
  HTMLDivElement,React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (<div;
    ref={ref}
    className={cn ("flex items - center p - 6 pt - 0", class_name)}
    {...props}
import React from 'react',interface CardProps  {children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;interface CardProps  {children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;
}
<<<<<<< HEAD
const Card: React.FC<CardProps> = ({children;
  className = '';
  style;
  onClick;
  hover = true}) => {const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
  const hoverClasses = hover ? 'hover: border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : '';
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : '';
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;
  />))CardFooter.display_name = "CardFooter";interface CardProps  {children: React.ReactNode,class_name?: string,style?: React.CSSProperties,on_click?: () => void,hover?: boolean;
}
  return (className={classes}
>>>>>>> origin/main
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

<<<<<<< HEAD
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
import React from 'react';
interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void

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
  />));
CardFooter.display_name = "CardFooter";
;
import React from 'react',
interface CardProps {
  children: React.ReactNode,
  class_name?: string,
  style?: React.CSSProperties,
  on_click?: () => void,
  hover?: boolean;
}
=======
}
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
      className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}
        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>);

},
export default Card,
;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>);
<<<<<<< HEAD

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
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent && CardContent.displayName = "CardContent"
    {...props}
  />;
));
CardFooter.displayName = "CardFooter";

import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;

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
<<<<<<< HEAD
"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className=\"absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover: opacity - 100 transition - opacity duration - 300 pointer - events - none\" />
}"
    </div>)CardContent.displayName = \"CardContent\";
=======
CardContent.displayName = "CardContent";
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />;"
))CardFooter.displayName = \"CardFooter\";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }hover?: boolean;
}

<<<<<<< HEAD
const Card: React.FC<CardProps /> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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

=======
"
=======
return (<div className= {
  classes 
}style= {
  style 
}onClick= {
  onClick 
}>) 
}</div>) 
}
export default Card
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
