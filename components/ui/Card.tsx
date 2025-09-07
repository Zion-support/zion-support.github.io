
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
    )}
    {...props}
  />;"
))Card.displayName = \"Card\";

const CardHeader = null;
  React.HTMLAttributes<HTMLDivElement />;
>(({ className, ...props }, ref) => (<div;
    ref={ref}"
    className={cn(\"flex flex-col space-y-1.5 p-6\", className)}
    {...props}
  />;"
))CardHeader.displayName = \"CardHeader\";

const CardTitle = null;
      className
origin/cursor/automate-test-improve-and-merge-code-2533
      className;
    )}
    {...props}
  />;"
))CardTitle.displayName = \"CardTitle\";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
const CardDescription = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
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
    {...props}
  />;"
))CardDescription.displayName = \"CardDescription\";

  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () = /> void;

interface CardProps  {children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;}
}
}
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
CardContent.displayName = "CardContent";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />;
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
  hover?: boolean
}
const Card: React.FC<CardProps> = ({
origin/cursor/automate-test-improve-and-merge-code-2533
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
pr-12243

