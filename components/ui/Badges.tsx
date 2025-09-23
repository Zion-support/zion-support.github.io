import React from 'react';

export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200',
<<<<<<< HEAD
    'Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const;
=======
    'Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
  } as const;
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>
      <span className="leading-none">{type}</span>
    </span>
  );
}

<<<<<<< HEAD
export function MicroTestimonial({ quoteauthor }: { quote: string; author: string }) {
=======
export function MicroTestimonial({ quote, author }: { quote: string; author: string }) {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <figure className="border rounded-md p-3 text-sm">
      <blockquote className="italic opacity-90">“{quote}”</blockquote>
      <figcaption className="mt-2 font-medium opacity-80">— {author}</figcaption>
    </figure>
  );
}