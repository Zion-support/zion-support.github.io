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
interface HTMLDivElement extends HTMLElement {
  tag_name: 'DIV';
}
interface HTMLParagraphElement extends HTMLElement {
  tag_name: 'P';
}
interface HTMLHeadingElement extends HTMLElement {
  tag_name: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
}

const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
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

const CardHeader = React.forwardRef<
  HTMLDivElement

  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 && 1.5 p-6", className)}
    {...props}
  />;
));
CardHeader && CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
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

const CardDescription = React.forwardRef<
  HTMLParagraphElement

  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
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
  />;
));
CardDescription && CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement

  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent && CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement

  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
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
  />;
));
CardFooter && CardFooter.displayName = "CardFooter";

<<<<<<< HEAD
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

import React from 'react',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
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
const Card: React.FC < CardProps> = ({
  children,
  class_name = '',
  style,
  on_click,
  hover = true}) => {
  const base_classes = 'bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - xl p - 6 transition - all duration - 300 relative overflow - hidden',
  const hover_classes = hover ? 'hover: border - blue - 500 / 30 hover:shadow - 2xl hover:shadow - blue - 500 / 10 hover:-translate - y-1 hover:bg - gray - 900 / 80 focus - within:border - blue - 500 / 50 focus - within:shadow - lg focus - within:shadow - blue - 500 / 20' : '',
  const clickable_classes = on_click ? 'cursor - pointer focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:ring - offset - 2 focus:ring - offset - black' : '',
  const classes = `${base_classes} ${hover_classes} ${clickable_classes} ${class_name}`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div;
      className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      {/* Content wrapper */}
      <div className="relative z - 10">;
        {children}
      </div>
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  )
}
export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

      </div>;
      {/* Hover glow effect */}
      {hover && (
<<<<<<< HEAD
        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>);
},
export default Card,
;
;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;
=======
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  )
<<<<<<< HEAD
}
export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
=======
},
export default Card,
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

=======
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

=======
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
