<<<<<<< HEAD
import React from 'react';
import { cn } from '../../src/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
=======
<<<<<<< HEAD
import React from 'react;
import { cn } from '../../src/lib/utils;

const Card = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
'rounded-lg border bg-card text-card-foreground shadow-sm', className'    )}'    {...props}
  />
));
Card.displayName = 'Card;

const CardHeader = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}'    {...props}'  />
));
CardHeader.displayName = 'CardHeader;

const CardTitle = React.forwardRef<;
  HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
'text-2xl font-semibold leading-none tracking-tight', className'    )}'    {...props}
  />
));
CardTitle.displayName = 'CardTitle;

const CardDescription = React.forwardRef<;
  HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}'    {...props}'  />
));
CardDescription.displayName = 'CardDescription;

const CardContent = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />'));'CardContent.displayName = 'CardContent;

const CardFooter = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}'    {...props}'  />
));
CardFooter.displayName = 'CardFooter;

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
import React from "react"
const Card = React.forwardRef<
  HTMLDivElement>
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref="{ref}""
    className="{cn(""
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className>
    )}

<<<<<<< HEAD
<<<<<<< HEAD
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`}>
      {children}
    </div>
  );
};
=======
type DivProps = React.HTMLAttributes<HTMLDivElement>;
=======
    {...props}>
 />
))
}
Card.displayName = "Card"
const CardHeader = React.forwardRef<
  HTMLDivElement>
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => ("
  <div ref="{ref}""
    className={cn("flex flex-col space-y-1.5 p-6", className)}
>>>>>>> main

    {...props}>
 />
))
}
CardHeader.displayName = "CardHeader"
const CardTitle = React.forwardRef<
  HTMLParagraphElement>
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => ("
  <h3 ref="{ref}""
    className="{cn(""
      "text-2xl font-semibold leading-none tracking-tight",
      className>
    )}

    {...props}>
 />
))
}
CardTitle.displayName = "CardTitle"
const CardDescription = React.forwardRef<
  HTMLParagraphElement>
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => ("
  <p ref="{ref}""
    className={cn("text-sm text-muted-foreground", className)}

    {...props}>
 />
))
}
CardDescription.displayName = "CardDescription"
const CardContent = React.forwardRef<
  HTMLDivElement>
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (""
  <div ref="{ref}" className={cn("p-6 pt-0", className)} {...props}      />
))
}
CardContent.displayName = "CardContent"
const CardFooter = React.forwardRef<
  HTMLDivElement>
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => ("
  <div ref="{ref}""
    className={cn("flex items-center p-6 pt-0", className)}

<<<<<<< HEAD
export const CardTitle = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className = '', ...props }, ref) => (
    <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
>>>>>>> main
  )
);
CardTitle.displayName = 'CardTitle';

<<<<<<< HEAD
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
=======
export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', ...props }, ref) => (
    <p ref={ref} className={`text-sm text-gray-500 ${className}`} {...props} />
>>>>>>> main
  )
);
CardDescription.displayName = 'CardDescription';

<<<<<<< HEAD
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
=======
export const CardContent = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
>>>>>>> main
  )
);
CardContent.displayName = 'CardContent';

<<<<<<< HEAD
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
=======
export const CardFooter = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`flex items-center p-6 pt-0 ${className}`} {...props} />
>>>>>>> main
  )
);
CardFooter.displayName = 'CardFooter';

<<<<<<< HEAD
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
export default Card;
>>>>>>> origin/main
=======
    {...props}>
 />
))
}
CardFooter.displayName = "CardFooter"
"'
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
>>>>>>> main
>>>>>>> main
>>>>>>> main
