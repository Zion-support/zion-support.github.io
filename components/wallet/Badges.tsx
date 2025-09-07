
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
export type Badge = any;
origin/cursor/automate-test-improve-and-merge-code-2533
=======

import React from 'react';

import React from 'react';

import React from 'react';
  id: string;
label: string;



export function currentBadge(balance: number): Badge | null {;


  let current: Badge | null = null;
<<<<<<< HEAD
=======
=======
threshold: number, //token balance threshold ;
};
const BADGES: Badge[] = [;
  { id: 'starter', label: 'Starter', threshold: 50 },;
  { id: 'rising', label: 'Rising Star', threshold: 200 },;
  { id: 'pro', label: 'Pro', threshold: 500 },;
  { id: 'elite', label: 'Elite', threshold: 1000 },;
];

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";

export type Badge = {
  id: string,
  label: string,
  threshold: number, // token balance threshold
};
const BADGES: Badge[] = [
  { id: "starter", label: "Starter", threshold: 50 },
  { id: "rising", label: "Rising Star", threshold: 200 },
  { id: "pro", label: "Pro", threshold: 500 },
  { id: "elite", label: "Elite", threshold: 1000 }],
export function currentBadge(balance: number): Badge | null {
  let current: Badge | null = null,
import React from 'react';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';
  id: string;
label: string;
=======

import React from \'react\';

export type Badge = any;
import React from 'react';
  id: string;
label: string;

>>>>>>> origin/chore/fix-lint-and-merge

;
import React from 'react';

export type Badge = any;id: string;
label: string;

export function currentBadge(balance: number): Badge | null {let current: Badge | null = null;}
threshold: number, //token balance threshold;}
}

const BADGES: Badge[] = [;
<<<<<<< HEAD
  { id: 'starter'}
  label: 'Starter', threshold: 50}
},{ id: 'rising'}
  label: 'Rising Star', threshold: 200}
},{ id: 'pro'}
  label: 'Pro', threshold: 500}
},{ id: 'elite'}
  label: 'Elite', threshold: 1000}
}];

export type Badge = {id: string,label: string,threshold: number, // token balance threshold;}
}

const BADGES: Badge[] = [;"
  { id: \"starter\", label: \"Starter\", threshold: 50}"
},{ id: \"rising\", label: \"Rising Star\", threshold: 200}"
},{ id: \"pro\", label: \"Pro\", threshold: 500}"
},{ id: \"elite\", label: \"Elite\", threshold: 1000}
}],export function currentBadge(balance: number): Badge | null {let current: Badge | null  = null,id: string;
label: string;}
threshold: number, //token balance threshold;}
}
  return (<div className='flex gap - 2 items - center flex - wrap'    />;
      {BADGES.map (boolean => (        <span;}
=======
  { id: 'starter', label: 'Starter', threshold: 50 },
  { id: 'rising', label: 'Rising Star', threshold: 200 },
  { id: 'pro', label: 'Pro', threshold: 500 },
  { id: 'elite', label: 'Elite', threshold: 1000 },
];
export function currentBadge(balance: number): Badge | null {

export function currentBadge(balance: number): Badge | null {;
  let current: Badge | null = null;
;
  return current;
export default function Badges({ balance }: { balance: number }) {;
  const active = currentBadge(balance);
  return (
    <div className='flex gap - 2 items - center flex - wrap'>;
      {BADGES.map (boolean => (        <span;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          key={b.id}
          className={`px - 3 py - 1 rounded - full text - xs border ${balance     />= b.threshold;
              ? 'bg - yellow - 100 border - yellow - 300 text - yellow - 800';}
}
              : 'bg - gray - 100 border - gray - 200 text - gray - 500'          }`}  let current: Badge | null = null,
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
export default function Badges({ balance }: { balance: number }) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  for (const b of BADGES) {
    // Check condition
if (current = b) {
  $2
}


<<<<<<< HEAD
    <div className="flex gap-2 items-center flex-wrap">
      {BADGES.map((b) => (
        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
    </div>;
  );        <span className="ml-2 text-xs text-green-600">Current: {active && active.label}</span>;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return current;
export default function Badges(): any ({ balance }: { balance: number }) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const active = currentBadge(balance);
  return (
<div className='flex gap-2 items-center flex-wrap'>
      {BADGES.map(b => (
origin/cursor/automate-test-improve-and-merge-code-2533
        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
export default function Badges(): any ({ balance }: { balance: number }) {;
  const active = currentBadge(balance);
  return ('
    <div className='flex gap-2 items-center flex-wrap'>;"
      {BADGES && BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap">;
      {BADGES && BADGES.map((b) => (;
        <span;
          key={b && b.id}`
          className={`px-3 py-1 rounded-full text-xs border ${}
            balance>= b && b.threshold;'
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800';'"
              : 'bg-gray-100 border-gray-200 text-gray-500'              ? "bg-yellow-100 border-yellow-300 text-yellow-800";"
              : "bg-gray-100 border-gray-200 text-gray-500";`
          }`}`
          title={`Requires ${b && b.threshold} ZION$`}
        >;
          {b && b.label}
        </span>;
      ))}
      {active && (;'
        <span className='ml-2 text-xs text-green-600'>;
          Current: {active && active.label}
        </span>;
      )}
      )}
    </div>;
  );
}"
              ? "bg-yellow-100 border-yellow-300 text-yellow-800""
              : "bg-gray-100 border-gray-200 text-gray-500"
  }
  return current;
}
export default /**;
 * Badges - Function description;
 */
function Badges() {}
  const active = current_badge (balance);
  return (
    <div className='flex gap - 2 items - center flex - wrap'>;
      {BADGES.map (boolean => (    <div className="flex gap - 2 items-center flex-wrap">;
      {BADGES.map ((b) => (
        <span;
          key={b.id}`
          className={`px - 3 py - 1 rounded - full text - xs border ${}
            balance >= b.threshold;'
              ? 'bg - yellow - 100 border - yellow - 300 text - yellow - 800';'"
              : 'bg - gray - 100 border - gray - 200 text - gray - 500'              ? "bg - yellow - 100 border - yellow - 300 text - yellow - 800";"
              : "bg - gray - 100 border - gray - 200 text - gray - 500";

export default function Badges({ balance }: { balance: number }) {;

export default function Badges({ balance }: { balance: number }) {
  const active = currentBadge(balance);

  return ('
    <div className='flex gap-2 items-center flex-wrap'>"
      {BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap">
      {BADGES.map((b) => (

export default function Badges({ balance }: { balance: number ;}) {
  const active = currentBadge(balance);
  return (
<div className='flex gap-2 items-center flex-wrap'>

  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {BADGES.map(b => (    <div className=flex gap-2 items-center flex-wrap">
      {BADGES.map((b) => (


export default function Badges({ balance }: { balance: number ;}) {
  return (
<div className=flex gap-2 items-center flex-wrap>
      {BADGES.map(b => (
origin/cursor/automate-test-improve-and-merge-code-2533
        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold

? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : 'bg-gray-100 border-gray-200 text-gray-500'
origin/cursor/automate-test-improve-and-merge-code-2533
            balance  />= b.threshold;
? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : 'bg-gray-100 border-gray-200 text-gray-500'
origin/cursor/automate-test-improve-and-merge-code-2533
              : 'bg - gray - 100 border - gray - 200 text - gray - 500'          }`}  let current: Badge | null = null,for (const b of BADGES) {// Check condition;
if (current = b) {$2;
}return current;export default function Badges(): any ({ balance }: { balance: number }) {const active = currentBadge(balance)return (export default function Badges(): any ({ balance }: { balance: number }) {const active = currentBadge(balance)return (<div className='flex gap-2 items-center flex-wrap'>;
      {BADGES && BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap">;
? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : bg-gray-100 border-gray-200 text-gray-500
origin/cursor/automate-test-improve-and-merge-code-2533
              : 'bg - gray - 100 border - gray - 200 text - gray - 500'          }`}  let current: Badge | null = null,for (const b of BADGES) {// Check condition;
if (current = b) {$2;
}return current;export default function Badges(): any ({ balance }: { balance: number }) {const active = currentBadge(balance)return (export default function Badges(): any ({ balance }: { balance: number }) {const active = currentBadge(balance)return (<div className=flex gap-2 items-center flex-wrap>;
      {BADGES && BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap>;
      {BADGES && BADGES.map((b) => (<span;
          key={b && b.id}
          className={`px-3 py-1 rounded-full text-xs border ${balance>= b && b.threshold;
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800';
              : 'bg-gray-100 border-gray-200 text-gray-500'              ? "bg-yellow-100 border-yellow-300 text-yellow-800";
              : "bg-gray-100 border-gray-200 text-gray-500";
          }`}
          title={`Requires ${b && b.threshold} ZION$`}
        >;
          {b && b.label}
        </span>;
      ))}
      {active && (<span className='ml-2 text-xs text-green-600'>;
          Current: {active && active.label}
=======
  for ;
  const b of BADGES) {
    // Check condition;
if (current = b) {}
  $2}
}

 ;
  return current;

export default function Badges({ balance }: { balance: number}
}) {
  const active = currentBadge(balance);
  return (
<div className='flex gap-2 items-center flex-wrap'    />
      {BADGES.map(b => (}
        <span;}
key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance     />= b.threshold;
? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : 'bg-gray-100 border-gray-200 text-gray-500'}
}
          }`}
>>>>>>> origin/chore/fix-lint-and-merge
          title={`Requires ${b.threshold} ZION$`}
        >;
          {b.label}
        </span>))}

      {active && (

<span className='ml-2 text-xs text-green-600'    />
}
          Current: {active.labe}
}
        </span>;
      )}

    </div>
  );

<<<<<<< HEAD
<<<<<<< HEAD
<span className='ml-2 text-xs text-green-600' />
}
  );
'
        <span className='ml - 2 text - xs text - green - 600'>;
          Current: {active.label}
'
        <span className='ml - 2 text - xs text - green - 600'>;
          Current: {active.label}
        </span>)}
    </div>);        <span className="ml - 2 text - xs text-green-600">Current: {active.label}</span>)}
    </div>);
}
<span className=ml-2 text-xs text-green-600>
          Current: {active.label;}
        </span>
        </span>;
      )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      )}
    </div>;
  )}
              ? bg-yellow-100 border-yellow-300 text-yellow-800";
              : "bg-gray-100 border-gray-200 text-gray-500;
import React from react";
export type Badge = {
  id: string,
  label: string,
  threshold: number, // token balance threshold
}
<<<<<<< HEAD

const BADGES: Badge[] = [
  { id: "starter, label: Starter", threshold: 50 },
  { id: "rising, label: Rising Star", threshold: 200 },
  { id: "pro, label: Pro", threshold: 500 },
  { id: "elite, label: Elite", threshold: 1000 }],

export function currentBadge(balance: number): Badge | null {
  let current: Badge | null = null,
  for (const b of BADGES) {
    if (balance >= b.threshold) current = b
=======
              ? "bg-yellow-100 border-yellow-300 text-yellow-800"
              : "bg-gray-100 border-gray-200 text-gray-500"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  return current
}
              : "bg - gray - 100 border - gray - 200 text - gray - 500;export default function Badges() {export default function Badges() {const active  = currentBadge(balance)return (<div className='flex gap-2 items-center flex-wrap'>;
      {BADGES.map(b => (    <div className=flex gap-2 items-center flex-wrap">;
      {BADGES.map((b) => (export default function Badges() {const active = currentBadge(balance)return (<div className=flex gap-2 items-center flex-wrap>;
      {BADGES.map(b => (<span;
          key={b.id}
<<<<<<< HEAD
          className={`px-3 py-1 rounded-full text-xs border ${balance >= b.threshold;
? 'bg-yellow-100 border-yellow-300 text-yellow-800';
              : bg-gray-100 border-gray-200 text-gray-500;
              : "bg - gray - 100 border - gray - 200 text - gray - 500;

export default function Badges({ balance }: { balance: number }) {
=======
          className={`px - 3 py - 1 rounded - full text - xs border ${
            balance >= b.threshold;
              ? 'bg - yellow - 100 border - yellow - 300 text - yellow - 800';
              : 'bg - gray - 100 border - gray - 200 text - gray - 500'              ? "bg - yellow - 100 border - yellow - 300 text - yellow - 800";
              : "bg - gray - 100 border - gray - 200 text - gray - 500";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



export default function Badges({ balance }: { balance: number }) {;

export default function Badges({ balance }: { balance: number }) {

  const active = currentBadge(balance);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default function Badges({ balance }: { balance: number }) {

export default function Badges({ balance }: { balance: number }) {
  return (
    <div className=flex gap-2 items-center flex-wrap">
      {BADGES.map((b) => (
        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
<<<<<<< HEAD
              ? "bg-yellow-100 border-yellow-300 text-yellow-800
              : bg-gray-100 border-gray-200 text-gray-500"
=======



<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }`}
          title={`Requires ${b.threshold} ZION$`}
        >
          {b.label}
      {active && ()}
  )<span className='ml - 2 text - xs text - green - 600'>;
          Current: {active.label}<span className=ml - 2 text - xs text - green - 600>;
          Current: {active.label}
        </span>)}
    </div>)<span className="ml - 2 text - xs text-green-600>Current: {active.label}</span>)}
    </div>)}<span className='ml-2 text-xs text-green-600'>;
        </span>
      ))}
      {active && (
        <span className=ml-2 text-xs text-green-600">Current: {active.label}</span>
      )}
    </div>;
  )
      {active && (
  );

}
  );
origin/cursor/automate-test-improve-and-merge-code-2533

        <span className='ml - 2 text - xs text - green - 600'>;
          Current: {active.label}

<<<<<<< HEAD
        <span className='ml - 2 text - xs text - green - 600'>;
          Current: {active.label}
        </span>)}
    </div>);        <span className="ml - 2 text - xs text-green-600">Current: {active.label}</span>)}
    </div>);
}
          Current: {active.label}
        </span>;
      )}
    </div>;
  )
  )
}

"
}
"
=======
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
        <span className='ml - 2 text - xs text - green - 600'>;
          Current: {active.label}
        </span>)}
    </div>);        <span className="ml - 2 text - xs text - green - 600">Current: {active.label}</span>)}
    </div>);
      {BADGES.map((b) => (
        <span
          key={b.id}
          className={_`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
              ? &quot;bg-yellow-100 border-yellow-300 text-yellow-800&quot;
              : &quot;bg-gray-100 border-gray-200 text-gray-500&quot;
          }`}
          title={`Requires ${b.threshold} ZION$`}
        >
          {_b.label}
        </span>
      ))}
      {active && (
        <span className=&quot;ml-2 text-xs text-green-600&quot;>Current: {active.label}</span>
      )}
    </div>
  )

}
            balance >= b.threshold
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : 'bg-gray-100 border-gray-200 text-gray-500'          }`}  let current: Badge | null = null
  for (const b of BADGES) {
    if (balance >= b.threshold) current = b
  }
  return current
}

export default function Badges({ balance }: { balance: number }) {;

export default function Badges({ balance }: { balance: number }) {
  const active = currentBadge(balance);

  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap">
      {BADGES.map((b) => (
        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : 'bg-gray-100 border-gray-200 text-gray-500'              ? "bg-yellow-100 border-yellow-300 text-yellow-800"
              : "bg-gray-100 border-gray-200 text-gray-500"

          }`}
          title={`Requires ${b.threshold} ZION$`}
        >
          {b.label}
        </span>
      ))}
      {active && (
        <span className='ml-2 text-xs text-green-600'>
          Current: {active.label}
        </span>
      )}
    </div>
);        <span className="ml-2 text-xs text-green-600">Current: {active.label}</span>
      )}
    </div>
  );
}
  );

}
  );
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
