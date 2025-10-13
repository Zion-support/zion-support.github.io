<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

interface linkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function link({ className = '', children }: linkProps) {
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import React from 'react';


export default function UtilsPage() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import { Link } from 'react-router-dom';

export default function LinkPage() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
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
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"></div>;
      <div className="container mx-auto px-4 py-16"></div>;
        <div className="max-w-4xl mx-auto text-center"></div>;
          <h1 className="text-4xl font-bold text-gray-900 mb-6">;
            link;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            This component is under development. Please check back later.;
          </p>;
        </div>;
      </div>;
</div>;
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======


import React from 'react';

export default function link() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            link
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This component is under development. Please check back later.
          </p>
        </div>
      </div>

    </div>
  );
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
