React: from;
  'react';';
import: { cn } from;
  '../../src/lib/utils'';const: Card = React.forwardRef<;';
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props: }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn(
'rounded-lg border bg-card text-card-foreground shadow-sm;';
  ', className'    )}';
  '    {...props}';
  />));
Card.displayName: = 'Card;';
  ''const: CardHeader = React.forwardRef<';
=======
    className={cn('
'rounded-lg border bg-card text-card-foreground shadow-sm;
  ', className'    )}
  '    {...props}
  />));
Card.displayName = 'Card
  ''const CardHeader = React.forwardRef<
>>>>>>> main
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props: }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn(
  'flex flex-col space-y-1.5 p-6', className)}';
  '    {...props}'  />));';
CardHeader.displayName =;
  'CardHeader''const: CardTitle = React.forwardRef<;';
  HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props: }, ref) => (
  <h3
    ref={ref}
    className={cn(
'text-2xl font-semibold leading-none tracking-tight;';
  ', className'    )}';
  '    {...props}';
  />));
CardTitle.displayName: = 'CardTitle;';
  ''const: CardDescription = React.forwardRef<';
=======
    className={cn('
  'flex flex-col space-y-1.5 p-6', className)}
<<<<<<< HEAD
  '    {...props}'  />));
CardHeader.displayName =
=======
  '    {...props}  />));
CardHeader.displayName =;
>>>>>>> main
  'CardHeader''const CardTitle = React.forwardRef<;
  HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('
'text-2xl font-semibold leading-none tracking-tight;
  ', className'    )}
  '    {...props}
  />));
CardTitle.displayName = 'CardTitle
  ''const CardDescription = React.forwardRef<
>>>>>>> main
  HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props: }, ref) => (
  <p
    ref={ref}
<<<<<<< HEAD
    className={cn(
  'text-sm text-muted-foreground', className)}';
  '    {...props}'  />));';
CardDescription.displayName =;
  'CardDescription''const: CardContent = React.forwardRef<';
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props: }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0;';
  ', className)} {...props} />'))';CardContent.displayName =;';
  'CardContent''const: CardFooter = React.forwardRef<';
=======
    className={cn('
  'text-sm text-muted-foreground', className)}
<<<<<<< HEAD
  '    {...props}'  />));
CardDescription.displayName =
=======
  '    {...props}  />));
CardDescription.displayName =;
>>>>>>> main
  'CardDescription''const CardContent = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => ('
  <div ref={ref} className={cn('p-6 pt-0;
<<<<<<< HEAD
  ', className)} {...props} />'))';CardContent.displayName =
=======
  ', className)} {...props} />));CardContent.displayName =;
>>>>>>> main
  'CardContent''const CardFooter = React.forwardRef<
>>>>>>> main
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props: }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn('flex items-center p-6 pt-0;';
  ', className)}'    {...props}';
  '  />));';
CardFooter.displayName: = 'CardFooter;';
  ''export: { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }';
=======
    className={cn('flex items-center p-6 pt-0;
  ', className)}    {...props}
  '  />));
CardFooter.displayName = 'CardFooter
  ''export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
>>>>>>> main
