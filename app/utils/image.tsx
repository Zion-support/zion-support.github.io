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
export default function UtilsPage() {
  return (
    <>
      <Helmet>
        <title>Utils - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional utils services by Zion Tech Group. Transform your business with our expert solutions."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Utils</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional utils services coming soon.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
}
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6eb7
=======
// Image utility component
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ac37
=======
// Image utility functions
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4fed

<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD

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

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function Image({ 
  src, 
  alt, 
  className = '', 
  width, 
  height 
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
}
=======
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image = ({ src, alt, className = '' }: ImageProps) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy"
    />
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======


import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

export default function UtilsPage() {
=======
export default function ImagePage() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
  return (
    <div className={`image-component ${className}`} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
