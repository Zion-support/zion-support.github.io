import React from 'react';
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

  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 && 1.5 p-6", className)}
    {...props}
  />;
));
CardHeader && CardHeader.displayName = "CardHeader";

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

  <p
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ("text - sm text - muted - foreground", class_name)}
    {...props}
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent && CardContent.displayName = "CardContent";

  <div
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ("flex items - center p - 6 pt - 0", class_name)}
    {...props}
  return (
    <div;
      className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}
      {/* Content wrapper */}
      <div className="relative z - 10">;
        {children}
=======
      </div>;
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>);
},
export default Card,
;
;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
