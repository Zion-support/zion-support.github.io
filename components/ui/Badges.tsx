<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>
      <span className="leading-none">{type}</span>
=======
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = null;
export function TrustBadge({
  type
}: {
origin/cursor/automate-test-improve-and-merge-code-2533

=======
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<<<<<<< HEAD
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = null;
export function TrustBadge({
  type
}: {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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



=======
<<<<<<< HEAD
=======
=======


=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  quote: string;
  author: string;
}) {;
  return (
    <figure className='border rounded-md p-3 text-sm'>;
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}
<<<<<<< HEAD

export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = $2;
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
    'Top Rated':;
      'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200',
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

      </figcaption>
    </figure>
  );
<<<<<<< HEAD

=======
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <figure className='border rounded - md p - 3 text - sm'>;
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80'>;
        — {author}
      </figcaption>;
    </figure>);  const color_map = {
    Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>);
}

      </figcaption>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  );
}

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
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
  )

}

export function TrustBadge({
  type
}: {
  type,
}: {;
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = null;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  return (
    <figure className='border rounded - md p - 3 text - sm'>;
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80'>;
<<<<<<< HEAD
=======
        — {author}
      </figcaption>;
    </figure>);  const color_map = {
    Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
  return (}
    <figure className='border rounded - md p - 3 text - sm' />;}
      <blockquote className='italic opacity - 90' />“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80' />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        — {author}
      </figcaption>;
    </figure>);  const color_map = {
    Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,
origin/cursor/automate-test-improve-and-merge-code-20a4





  return (
    <span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>);
}

      </figcaption>;


      </figcaption>;
      </figcaption>;

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
<<<<<<< HEAD
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
=======
    </figure>);

const color_map = {
    Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200'}
  Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200}
} as const,
 ;
  return (
    <span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`} />
"
      <span className=\"leading - none\" />{type}</span>;
    </span>);
}

pr-12243
      </figcaption>;
    </figure>;
  );

const colorMap = {
  Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',;}
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200}
} as const,;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>;
      <span className="leading-none">{type}</span>;
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`} />
"
      <span className=\"leading-none\" />{type}</span>;
    </span>;
  );
}

pr-12243
export /**
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
    </figure>
  );
}
=======
      <blockquote className="italic opacity - 90">“{quote}”</blockquote>;
      <figcaption className="mt - 2 font - medium opacity - 80">— {author}</figcaption>;
  return (}"
    <figure className=\"border rounded - md p - 3 text - sm\" />;}"
      <blockquote className=\"italic opacity - 90\" />“{quote}”</blockquote>;"
      <figcaption className=\"mt - 2 font - medium opacity - 80\" />— {author}</figcaption>;
    </figure>);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}

);
}


);
}
origin/cursor/automate-test-improve-and-merge-code-2533
    </figure>
  );
}

<<<<<<< HEAD


);
}

    </figure>
  );
}

  type: 'Verified' | 'Pro' | 'Top Rated';
}) {
  const colorMap = {
    Verified:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200'
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    'Top Rated':
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
  } as const;
    >
      <span className='leading-none'>{type}</span>
>>>>>>> origin/main
    </span>
  )
}

export function MicroTestimonial({ quote, author }: { quote: string, author: string }) {
  return (
    <figure className="border rounded-md p-3 text-sm">
      <blockquote className="italic opacity-90">“{quote}”</blockquote>
      <figcaption className="mt-2 font-medium opacity-80">— {author}</figcaption>
    </figure>
<<<<<<< HEAD
  )
}
=======
<<<<<<< HEAD
  );
}

=======
  )
export function MicroTestimonial({ quote, author }: { quote: string, author: string }) {
  return($2) {_return (
    <figure className="border rounded-md p-3 text-sm">
      <blockquote className="italic opacity-90">“{quote}”</blockquote>
      <figcaption className="mt-2 font-medium opacity-80">— {author}</figcaption>
    </figure>
);
}
<<<<<<< HEAD

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD

=======
=======
export function MicroTestimonial({ quote, author }: { quote: string, author: string}
}) {
  return (}
    <figure className=&quot;border rounded-md p-3 text-sm&quot; />}
      <blockquote className=&quot;italic opacity-90&quot; />“{quote}”</blockquote>
      <figcaption className=&quot;mt-2 font-medium opacity-80&quot; />— {author}</figcaption>
export function MicroTestimonial(_{_quote, _author}: {_quote: string; author: string}) {_return (}"
    <figure className = \"border rounded-md p-3 text-sm\" />}"
      <blockquote className=\"italic opacity-90\" />“{quote}”</blockquote>"
      <figcaption className=\"mt-2 font-medium opacity-80\" />— {_autho}
}</figcaption>

    </figure>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  )
;
}

export function TrustBadge({
  type
}: {
  type,
}: {;
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  type: 'Verified' | 'Pro' | 'Top Rated';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export function TrustBadge({}
  type}
}: {}
  type}
}: {;}
  type: 'Verified' | 'Pro' | 'Top Rated';}
}) {
  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200'
    'Top Rated':}
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'}
  } as const>

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  quote: string;
  author: string;
}) {;
  return (
    <figure className='border rounded-md p-3 text-sm'>;
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}

pr-12243
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = {
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
=======
'
export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {}
  const colorMap = {'
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,
;
;
export /**;
 * TrustBadge - Function description;
 */
function TrustBadge() {}
  const color_map = {}
    Verified:;'
      'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200','
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200','
    'Top Rated':;'
      'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200',
  } as const;
;
    >;'
      <span className='leading - none'>{type}</span>;
    </span>);
;
export /**;
 * MicroTestimonial - Function description;
 */
<<<<<<< HEAD
function MicroTestimonial() {
      </figcaption>
    </figure>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <figure className='border rounded - md p - 3 text - sm'>;
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;
=======
function MicroTestimonial() {}
  return ('
    <figure className='border rounded - md p - 3 text - sm'>;'
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <figcaption className='mt - 2 font - medium opacity - 80'>;
        — {author}
      </figcaption>;
    </figure>);  const color_map = {'
    Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200','
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>);
}

<<<<<<< HEAD
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </figcaption>;
    </figure>;
  );  const colorMap = {;'
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',;'
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,;
  return (`
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`}>;"
      <span className="leading-none">{type}</span>;
    </span>;
  );
}

<<<<<<< HEAD
pr-12243
export /**
 * MicroTestimonial - Function description
=======
export /**;
 * MicroTestimonial - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <span className='leading-none' />{typ}
}</span>;
    </span>;
  )export function MicroTestimonial() {return (<figure className='border rounded-md p-3 text-sm' />;}
      <blockquote className='italic opacity-90' />“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80' />;
        — {author}

export function TrustBadge() {const colorMap = {Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'}
  Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200}
} as const,export /**;
 * TrustBadge - Function description;
 */;
function TrustBadge() {const color_map = {Verified:;
      'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200','Top Rated':;}
      'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200';}
  } as const>

      <span className='leading - none' />{type}</span>;
    </span>)export /**;
 * MicroTestimonial - Function description;
 */;
function MicroTestimonial() {</figcaption>;
    </figure>;}
  )return (<figure className='border rounded - md p - 3 text - sm' />;}
      <blockquote className='italic opacity - 90' />“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80' />;
        — {author}
      </figcaption>;
    </figure>)const color_map = {Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200'}
  Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200}
} as const;
  return (<span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`} />
"
      <span className=\"leading - none\" />{type}</span>;
    </span>)}</figcaption>;
    </figure>;
  )const colorMap = {Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'}
  Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200}
} as const;
  return (<span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${colorMap[type]}`} />
"
      <span className=\"leading-none\" />{type}</span>;
    </span>;
  )}

export /**;
 * MicroTestimonial - Function description;
 */;"
function MicroTestimonial() {return (<figure className=\"border rounded - md p - 3 text - sm\" />;}"
      <blockquote className=\"italic opacity - 90\" />“{quote}”</blockquote>;"
      <figcaption className=\"mt - 2 font - medium opacity - 80\" />— {author}</figcaption>;
    </figure>)})}</figure>;
  )}ursor/fix-website-loading-errors-and-merge-6662;

export function MicroTestimonial() {return (<figure className=&quot;border rounded-md p-3 text-sm&quot />}
}
      <blockquote className=&quot;italic opacity-90&quot; />“{quote}”</blockquote>;
      <figcaption className=&quot;mt-2 font-medium opacity-80&quot; />— {author}</figcaption>;

export function MicroTestimonial(_{_quote, _author}: {_quote: string; author: strin}"
}) {_return (<figure className=\"border rounded-md p-3 text-sm\" />;}"
      <blockquote className=\"italic opacity-90\" />“{quote}”</blockquote>;"
      <figcaption className=\"mt-2 font-medium opacity-80\" />— {_author}</figcaption>;
    </figure>;
  )}

export function TrustBadge() {const colorMap = {Verified:;
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200';
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200';
    'Top Rated':;}
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200';}
  } as const>

      <span className='leading-none' />{type}</span>;
    </span>;
  )export function MicroTestimonial() {return (<figure className='border rounded-md p-3 text-sm' />;}
      <blockquote className='italic opacity-90' />“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80' />;
        — {author}
  return (<figure className='border rounded - md p - 3 text - sm' />;
      <blockquote className='italic opacity - 90' />“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80' />;
        — {author}
      </figcaption>;
    </figure>)const color_map = {Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200'}
  Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200}
} as const;
  return (<span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`} />
"
      <span className=\"leading - none\" />{type}</span>;
    </span>)}
    </figure>;
  )const colorMap = {Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'}
  Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200}
} as const;
  return (export /**;
 * MicroTestimonial - Function description;
 */;"
function MicroTestimonial() {return (<figure className=\"border rounded - md p - 3 text - sm\" />;}
    </figure>;}
  )}}}</figure>;
  )}
})}
  );

const colorMap = {
  Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',;}
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200}
} as const,;
  return (
export /**
 * MicroTestimonial - Function description;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
 */
<<<<<<< HEAD
function MicroTestimonial() {}
  return ("
    <figure className="border rounded - md p - 3 text - sm">;"
      <blockquote className="italic opacity - 90">“{quote}”</blockquote>;"
      <figcaption className="mt - 2 font - medium opacity - 80">— {author}</figcaption>;
    </figure>);
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  );
}

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
function MicroTestimonial() {
  return (
    <figure className="border rounded - md p - 3 text - sm">;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </figure>
  );
}

<<<<<<< HEAD

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

<<<<<<< HEAD
<<<<<<< HEAD
export function TrustBadge({
  type
}: {
  type,
}: {;
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  type: 'Verified' | 'Pro' | 'Top Rated';
}) {}
  const colorMap = {}
    Verified:'
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200''
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200''
    'Top Rated':'
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
  } as const;
    >'
      <span className='leading-none'>{type}</span>
    </span>
  );
export function MicroTestimonial() { return null; }
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;'
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}
  return ('
    <figure className='border rounded - md p - 3 text - sm'>;'
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;'
      <figcaption className='mt - 2 font - medium opacity - 80'>;
        — {author}
      </figcaption>;
    </figure>);  const color_map = {'
    Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200','
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,
  return (`
    <span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;"
      <span className="leading - none">{type}</span>;
    </span>);
}
    </figure>;
  );  const colorMap = {;'
    Verified: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',;'
    Pro: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200Top Rated': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'} as const,;
  return (
export /**;
 * MicroTestimonial - Function description;
 */
function MicroTestimonial() {}
  return ("
    <figure className="border rounded - md p - 3 text - sm">;
    </figure>
  );
}
<<<<<<< HEAD
}
=======
<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

);
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
);
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
  return ("
    <figure className=\"border rounded - md p - 3 text - sm\" />;
    </figure>}
  );}
}
}

"
<<<<<<< HEAD
=======
</span>) 
}</figure>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
