import React from 'react';
<<<<<<< HEAD

interface CardProps {
  children: React.ReactNode;
=======
<<<<<<< HEAD
import { cn } from '../../lib/utils';


const Card = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm";
      className
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
    {...props}
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
import React from 'react';

interface CardProps  {children: React.ReactNode;
  className?: string;
}export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>;
      {children}
import React from "react;
import { cn } from ../../lib/utils";


interface HTMLDivElement extends HTMLElement {
  tagName: "DIV;
}

interface HTMLParagraphElement extends HTMLElement {
  tagName: P";
}

interface HTMLHeadingElement extends HTMLElement {
  tagName: "H1 | H2" | "H3 | H4" | "H5 | H6";
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    </div>;
  )}
import { cn  } from '../../lib/utils;
interface HTMLDivElement extends HTMLElement  {tagName: "DIV;
}interface HTMLParagraphElement extends HTMLElement  {tagName: P";
}interface HTMLHeadingElement extends HTMLElement  {tagName: "H1 | H2" | "H3 | H4" | "H5 | H6";
}const Card = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm,className,)}
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
import React from 'react';

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
  style: { [key: string]: string }
}
interface HTMLDivElement extends HTMLElement  {tagName: DIV';
}
interface HTMLParagraphElement extends HTMLElement  {tagName: 'P;
}
interface HTMLHeadingElement extends HTMLElement  {tagName: H1' | 'H2 | H3' | 'H4 | H5' | 'H6;
}const Card = null;
      className;
    )}
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

  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
))CardHeader.displayName = "CardHeader";const CardTitle = null;
      className;
    )}
    {...props}
  />;
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

  HTMLParagraphElement,const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription  = null;React.HTMLAttributes<HTMLParagraphElement    />;
>(({ className, ...props }, ref) => (<p;
<<<<<<< HEAD
    ref={ref}
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

const CardFooter = React.forward_ref<;
  HTMLDivElement,React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (<div;
    ref={ref}"
    className={cn (\"flex items - center p - 6 pt - 0\", class_name)}
    {...props}
<<<<<<< HEAD
import React from 'react',interface CardProps {'
  }
  "children": React.ReactNode;
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
  className?: string;
  title?: string;
}

export default function Card({ children, className = '', title }: CardProps) {
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

},
export default Card,
;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

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
"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className=\"absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover: opacity - 100 transition - opacity duration - 300 pointer - events - none\"    />
}"
<<<<<<< HEAD
    </div>)CardContent.displayName = \"CardContent\";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(flex items-center p-6 pt-0, className)}
=======
    </div>)CardContent.displayName = \'CardContent\';

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement    />;
>(({ className, ...props }, ref) => (<div;
    ref={ref}"
    className={cn(\"flex items-center p-6 pt-0\", className)}
>>>>>>> origin/chore/fix-lint-and-merge
    {...props}
     />;"
))CardFooter.displayName = \'CardFooter\';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }hover?: boolean;
}

<<<<<<< HEAD
const Card: React.FC<CardProps /> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;}
=======
const Card: React.FC<CardProps    /> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;}
>>>>>>> origin/chore/fix-lint-and-merge
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
export default function Card({ children, className = ' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}


=======
"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
