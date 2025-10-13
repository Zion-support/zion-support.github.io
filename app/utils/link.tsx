<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface linkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function link({ className = '', children }: linkProps) {
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
=======
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Link({ 
  to, 
  children, 
  className = '', 
  external = false 
}: LinkProps) {
  if (external) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
}
=======
import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ href, children, className = '' }: LinkProps) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
