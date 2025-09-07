<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import React from 'react';

interface CardProps  {children: React.ReactNode;
  className?: string;
}export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>;
      {children}
<<<<<<< HEAD
    </div>
  );
}
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
=======
    </div>;
  )}
import { cn  } from '../../lib/utils';
interface HTMLDivElement extends HTMLElement  {tagName: "DIV";
}interface HTMLParagraphElement extends HTMLElement  {tagName: "P";
}interface HTMLHeadingElement extends HTMLElement  {tagName: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
}const Card = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm",className,)}
    {...props}const CardContent = React && React.forwardRef<;
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (const CardTitle = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (<h3;
    ref={ref}
<<<<<<< HEAD
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
import React from 'react';
import { cn } from '../../lib/utils';
// Define HTML element types
interface HTMLElement {
  className: string;
=======
    className={cn("text-2xl font-semibold leading-none tracking-tight",className,// Define HTML element types;
interface HTMLElement  {className: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  id: string;
  innerHTML: string;
  textContent: string | null;
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
  />;
))Card.displayName = "Card";const CardHeader = null;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />;
<<<<<<< HEAD
));
CardHeader.displayName = "CardHeader";

const CardTitle = null;
      className
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    )}
    {...props}
  />;
));
CardTitle.displayName = "CardTitle";

<<<<<<< HEAD
const CardDescription = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
=======
))CardHeader.displayName = "CardHeader";const CardTitle = null;
      className;
    )}
    {...props}
  />;
))CardTitle.displayName = "CardTitle";const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription = React.forwardRef<;
  HTMLParagraphElement,const CardDescription  = null;React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (<p;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
<<<<<<< HEAD
));
CardDescription.displayName = "CardDescription";

<<<<<<< HEAD
const CardContent = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
const CardContent = React.forwardRef<
  HTMLDivElement,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
<<<<<<< HEAD

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
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}
        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
<<<<<<< HEAD
    </div>);

},
export default Card,
;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>);

=======
CardContent && CardContent.displayName = "CardContent";


const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

  <div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

CardContent.displayName = "CardContent";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
=======
    </div>)},export default Card,export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>)CardContent.displayName = "CardContent";const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />;
))CardFooter.displayName = "CardFooter";export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }hover?: boolean;
}
const Card: React.FC<CardProps> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;
}
    </div>
  );
}
<<<<<<< HEAD
const Card: React.FC<CardProps> = ({
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
