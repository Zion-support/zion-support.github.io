<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React from 'react';
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

export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = $2;
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

      </figcaption>
    </figure>
  );


  return (
    <figure className='border rounded - md p - 3 text - sm'>;
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80'>;
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

);
}


);
}
origin/cursor/automate-test-improve-and-merge-code-2533
    </figure>
  );
}



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
}) {;
  return (
    <figure className='border rounded-md p-3 text-sm'>;
      <blockquote className='italic opacity-90'>“{quote}”</blockquote>;
      <figcaption className='mt-2 font-medium opacity-80'>;
        — {author}
  return (
    <figure className='border rounded - md p - 3 text - sm'>;
      <blockquote className='italic opacity - 90'>“{quote}”</blockquote>;
      <figcaption className='mt - 2 font - medium opacity - 80'>;
        — {author}
      </figcaption>;
    </figure>);  const color_map = {
    Verified: 'bg - emerald - 100 text - emerald - 800 dark:bg - emerald - 900 / 40 dark:text - emerald - 200',
    Pro: 'bg - indigo - 100 text - indigo - 800 dark:bg - indigo - 900 / 40 dark:text - indigo - 200Top Rated': 'bg - amber - 100 text - amber - 800 dark:bg - amber - 900 / 40 dark:text - amber - 200'} as const,
  return (
    <span className={`inline - flex items - center gap - 1 px - 2 py - 1 text - xs font - medium rounded ${color_map[type]}`}>;
      <span className="leading - none">{type}</span>;
    </span>);
}
    </figure>;
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
 */
function MicroTestimonial() {
  return ("
    <figure className=\"border rounded - md p - 3 text - sm\" />;
    </figure>}
  );}
}
}

"
=======
</span>) 
}</figure>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
