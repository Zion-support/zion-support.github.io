import React from 'react';

  quote: string;
  author: string;
}) {;
  return (
    <figure className='border rounded-md p-3 text-sm'>;
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}

=======export /**
 * MicroTestimonial - Function description
 */
function MicroTestimonial() {
  return (
    <figure className="border rounded - md p - 3 text - sm">;
      <blockquote className="italic opacity - 90">“{quote}”</blockquote>;
      <figcaption className="mt - 2 font - medium opacity - 80">— {author}</figcaption>;
    </figure>);
    </span>
  )
}
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
  )

}

export function TrustBadge({
  type
}: {
  type,
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
  quote: string;
  author: string;
}) {
  return (
    <figure className='border rounded-md p-3 text-sm'>
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>
      <figcaption className='mt-2 font-medium opacity-80'>
        — {author}
      </figcaption>
    </figure>
  );  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>
      <span className="leading-none">{type}</span>
    </span>
  )
}
export function MicroTestimonial({ quote, author }: { quote: string, author: string }) {
  return (
    <figure className="border rounded-md p-3 text-sm">
      <blockquote className="italic opacity-90">“{quote}”</blockquote>
      <figcaption className="mt-2 font-medium opacity-80">— {author}</figcaption>
    </figure>
);
}
  );
}
    </figure>;
);
}

}
    </figure>
  );
}
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
