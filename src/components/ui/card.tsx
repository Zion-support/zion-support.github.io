import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
<<<<<<< HEAD
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
      {...props}
     />
=======
    <div className="min-h-screen bg-white">
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-5599
  );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
<<<<<<< HEAD
    <div className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} {...props}  />
=======
    <div className="min-h-screen bg-white">
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-5599
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className || ''}`}
      {...props}
     />
  );
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p className={`text-sm text-muted-foreground ${className || ''}`} {...props}  />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
<<<<<<< HEAD
    <div className={`p-6 pt-0 ${className || ''}`} {...props}  />
=======
    <div className="min-h-screen bg-white">
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-5599
  );
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
<<<<<<< HEAD
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
  );
}
=======
    <div className="min-h-screen bg-white">
  );
}
</HTMLDivElement>
</HTMLParagraphElement>
</h3>
</HTMLHeadingElement>
</HTMLDivElement>
</div>';
</HTMLDivElement>;';;';
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-5599
