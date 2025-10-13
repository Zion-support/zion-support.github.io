<<<<<<< HEAD
import React from 'react';

interface imageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function image({ className = '', children }: imageProps) {
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
}