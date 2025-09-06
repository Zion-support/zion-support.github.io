
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

const CardContent = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent && CardContent.displayName = "CardContent";


const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;

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
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import React from 'react';
import React from 'react',;
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface CardProps {
  children: React.ReactNode,
  class_name?: string,
  style?: React.CSSProperties,
  on_click?: () => void,
  hover?: boolean;
}

      className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}

      <div className="absolute inset - 0 bg - gradient - to - br from - blue - 500 / 5 via - transparent to - purple - 500 / 5 opacity - 0 hover:opacity - 100 transition - opacity duration - 300" />;

      {/* Content wrapper */}
      <div className="relative z - 10">;
        {children}


export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
