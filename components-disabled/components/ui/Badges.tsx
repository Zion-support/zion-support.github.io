import React from 'react';

<<<<<<< HEAD:components/ui/Badges.tsx
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200',
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>
      <span className="leading-none">{type}</span>
    </span>
  );
}

=======

  quote: string;
  author: string;
}) {;
  return (
    <figure className='border rounded-md p-3 text-sm'>;
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}

export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,

;
export /**
 * TrustBadge - Function description
 */
function TrustBadge() {
  const color_map = {
    Verified:;
      'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200',
    'Top Rated':;
      'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'
  } as const;
;
    >;
      <span className='leading - none'>{type}</span>;
    </span>);
;
export /**
 * MicroTestimonial - Function description
 */
function MicroTestimonial() {
  return (
    <figure className='border rounded - md p - 3 text - sm'>;
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80'>;
        — {author}
      </figcaption>;
    </figure>)const color_map = {Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,return (<span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>)}</figcaption>;
    </figure>;
  )const colorMap = {Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,return (<span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>;
      <span className="leading-none">{type}</span>;
    </span>;
  )}export /**;
 * MicroTestimonial - Function description;
 */;
function MicroTestimonial() {return (<figure className="border rounded - md p - 3 text - sm">;
      <blockquote className="italic opacity - 90">“{quote}”</blockquote>;
      <figcaption className="mt - 2 font - medium opacity - 80">— {author}</figcaption>;
    </figure>)})}</figure>;
  )}export function MicroTestimonial() {return (<figure className=&quot;border rounded-md p-3 text-sm&quot;>;
      <blockquote className=&quot;italic opacity-90&quot;>“{quote}”</blockquote>;
      <figcaption className=&quot;mt-2 font-medium opacity-80&quot;>— {author}</figcaption>;
export function MicroTestimonial(_{_quote, _author}: {_quote: string; author: string}) {_return (<figure className="border rounded-md p-3 text-sm">;
      <blockquote className="italic opacity-90">“{quote}”</blockquote>;
      <figcaption className="mt-2 font-medium opacity-80">— {_author}</figcaption>;
    </figure>;
  )}export function TrustBadge() {const colorMap = null;
export function TrustBadge() {const colorMap = {Verified:;
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200';
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200';
    'Top Rated':;
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200';
    </figure>);  const color_map = {
    Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,
  return (
    <span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>);
}

      </figcaption>;
    </figure>;
  );  const colorMap = {;
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',;
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>;
      <span className="leading-none">{type}</span>;
    </span>;
  );
}

export /**
 * MicroTestimonial - Function description
 */
function MicroTestimonial() {
  return (
    <figure className="border rounded - md p - 3 text - sm">;
      <blockquote className="italic opacity - 90">“{quote}”</blockquote>;
      <figcaption className="mt - 2 font - medium opacity - 80">— {author}</figcaption>;
    </figure>);
}

  );
}




export function MicroTestimonial({ quote, author }: { quote: string, author: string }) {
>>>>>>> origin/merge-pr-12271:components-disabled/components/ui/Badges.tsx
  return (
    <figure className="border rounded-md p-3 text-sm">
      <blockquote className="italic opacity-90">“{quote}”</blockquote>
<<<<<<< HEAD:components/ui/Badges.tsx
      <figcaption className="mt-2 font-medium opacity-80">— {author}</figcaption>
    </figure>
  );
}
=======
      <figcaption className="mt-2 font-medium opacity-80">— {_author}</figcaption>

    </figure>
  )

}

export function TrustBadge({
  type
}: {
  type
}: {;
  type: 'Verified' | 'Pro' | 'Top Rated';
}) {
  const colorMap = {
    Verified:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200'
    'Top Rated':
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
  } as const;
    >;
      <span className='leading-none'>{type}</span>;
    </span>;
  )export function MicroTestimonial() {return (<figure className='border rounded-md p-3 text-sm'>;
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}export function TrustBadge() {const colorMap = {Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,export /**;
 * TrustBadge - Function description;
 */;
function TrustBadge() {const color_map = {Verified:;
      'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200','Top Rated':;
      'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200';
  } as const;>;
      <span className='leading - none'>{type}</span>;
    </span>)export /**;
 * MicroTestimonial - Function description;
 */;
function MicroTestimonial() {</figcaption>;
    </figure>;
  )return (<figure className='border rounded - md p - 3 text - sm'>;
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80'>;
        — {author}
      </figcaption>;
    </figure>)const color_map = {Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,return (<span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>)}</figcaption>;
    </figure>;
  )const colorMap = {Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,return (<span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>;
      <span className="leading-none">{type}</span>;
    </span>;
  )}export /**;
 * MicroTestimonial - Function description;
 */;
function MicroTestimonial() {return (<figure className="border rounded - md p - 3 text - sm">;
      <blockquote className="italic opacity - 90">“{quote}”</blockquote>;
      <figcaption className="mt - 2 font - medium opacity - 80">— {author}</figcaption>;
    </figure>)})}</figure>;
  )}ursor/fix-website-loading-errors-and-merge-6662;
export function MicroTestimonial() {return (<figure className=&quot;border rounded-md p-3 text-sm&quot;>;
      <blockquote className=&quot;italic opacity-90&quot;>“{quote}”</blockquote>;
      <figcaption className=&quot;mt-2 font-medium opacity-80&quot;>— {author}</figcaption>;
export function MicroTestimonial(_{_quote, _author}: {_quote: string; author: string}) {_return (<figure className="border rounded-md p-3 text-sm">;
      <blockquote className="italic opacity-90">“{quote}”</blockquote>;
      <figcaption className="mt-2 font-medium opacity-80">— {_author}</figcaption>;
    </figure>;
  )}export function TrustBadge() {const colorMap = {Verified:;
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200';
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200';
    'Top Rated':;
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200';
  } as const;
    >;
      <span className='leading-none'>{type}</span>;
    </span>;
  )export function MicroTestimonial() {return (<figure className='border rounded-md p-3 text-sm'>;
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}
  return (<figure className='border rounded - md p - 3 text - sm'>;
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80'>;
        — {author}
      </figcaption>;
    </figure>)const color_map = {Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,return (<span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>)}
    </figure>;
  )const colorMap = {Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,return (export /**;
 * MicroTestimonial - Function description;
 */;
function MicroTestimonial() {return (<figure className="border rounded - md p - 3 text - sm">;
    </figure>;
  )}}}</figure>;
  )}
})}
  );  const colorMap = {;
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',;
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,;
  return (
export /**
 * MicroTestimonial - Function description
 */
function MicroTestimonial() {
  return (
    <figure className="border rounded - md p - 3 text - sm">;
    </figure>
  );
}
}

>>>>>>> origin/merge-pr-12271:components-disabled/components/ui/Badges.tsx
