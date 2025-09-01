<<<<<<< HEAD

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
;

=======
import React from 'react.ts';
import { cn                } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className = {

  cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
  className
      )


}
      {...props}
    />;
  );
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
);
Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
<<<<<<< HEAD
;'
''
);'''
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
;'
''
);'''
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
;'
''
);'''
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
;'
''
);'''
CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
;'
''
);'''
CardFooter.displayName = 'CardFooter';'
''
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };'''
=======

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className = {

  cn('flex flex-col space-y-1.5 p-6',
  className)

}
      {...props}
    />;
  );
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className = {

  cn(
        'text-2xl font-semibold leading-none tracking-tight',
  className
      )

}
      {...props}
    />;
  );
);
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className = {

  cn('text-sm text-muted-foreground',
  className)

}
      {...props}
    />;
  );
);
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className = {

  cn('p-6 pt-0',
  className)

}
      {...props}
    />;
  );
);
CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className = {

  cn('flex items-center p-6 pt-0',
  className)

}
      {...props}
    />;
  );
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
