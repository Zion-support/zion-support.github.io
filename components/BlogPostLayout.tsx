import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

interface BlogPostLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function BlogPostLayout({ 
  children, 
  title, 
  description, 
  className = '' 
}: BlogPostLayoutProps) {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 ${className}`}>
      <Card>
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </CardHeader>
        )}
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}