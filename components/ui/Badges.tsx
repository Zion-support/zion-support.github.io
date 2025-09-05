<<<<<<< HEAD
import React from 'react',
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>
      <span className=&quot;leading-none&quot;>{type}</span>
=======
import React from 'react';

export function TrustBadge(_{_type}: {_type: 'Verified' | 'Pro' | 'Top Rated'}) {_const _colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200', _Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200', _'Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const;
  return (
    <span className={_`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>
      <span className="leading-none">{_type}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </span>
  )
}

<<<<<<< HEAD
export function MicroTestimonial({ quote, author }: { quote: string, author: string }) {
  return (
    <figure className=&quot;border rounded-md p-3 text-sm&quot;>
      <blockquote className=&quot;italic opacity-90&quot;>“{quote}”</blockquote>
      <figcaption className=&quot;mt-2 font-medium opacity-80&quot;>— {author}</figcaption>
=======
export function MicroTestimonial(_{_quote, _author}: {_quote: string; author: string}) {_return (
    <figure className="border rounded-md p-3 text-sm">
      <blockquote className="italic opacity-90">“{quote}”</blockquote>
      <figcaption className="mt-2 font-medium opacity-80">— {_author}</figcaption>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </figure>
  )
}