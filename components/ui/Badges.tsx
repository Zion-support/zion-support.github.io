import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = null;
export function TrustBadge({
  type
}: {
origin/cursor/automate-test-improve-and-merge-code-2533
  type: 'Verified' | 'Pro' | 'Top Rated';
}) {
  const colorMap = {
    Verified:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200'
    'Top Rated':
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
  } as const;
    >
      <span className='leading-none'>{type}</span>
    </span>
  );
export function MicroTestimonial({
  quote
  author
}: {
  quote,
  author,
}: {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

=======
export function TrustBadge() {const colorMap = {Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,export /**;
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
function MicroTestimonial() {return (<figure className='border rounded - md p - 3 text - sm'>;


  quote: string;
  author: string;
}) {;
  return (
    <figure className='border rounded-md p-3 text-sm'>;
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

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
<<<<<<< HEAD

      </figcaption>
    </figure>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  return (
    <span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

      </figcaption>;

=======

      </figcaption>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  );
}

<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    </figure>
  );
}


export function MicroTestimonial({ quote, author }: { quote: string, author: string }) {
  return (
    <figure className=&quot;border rounded-md p-3 text-sm&quot;>
      <blockquote className=&quot;italic opacity-90&quot;>“{quote}”</blockquote>
      <figcaption className=&quot;mt-2 font-medium opacity-80&quot;>— {author}</figcaption>
export function MicroTestimonial(_{_quote, _author}: {_quote: string; author: string}) {_return (
    <figure className="border rounded-md p-3 text-sm">
      <blockquote className="italic opacity-90">“{quote}”</blockquote>
      <figcaption className="mt-2 font-medium opacity-80">— {_author}</figcaption>

    </figure>
<<<<<<< HEAD
=======
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

<<<<<<< HEAD
}

export function TrustBadge({
  type
}: {
  type
}: {;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    </figure>
  );
}
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


);
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
