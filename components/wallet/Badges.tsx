
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
=======

=======

import React from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import React from 'react';
  id: string;
label: string;
threshold: number, //token balance threshold
}
const BADGES: Badge[] = [
  { id: 'starter', label: 'Starter', threshold: 50 }
  { id: 'rising', label: 'Rising Star', threshold: 200 }
  { id: 'pro', label: 'Pro', threshold: 500 }
  { id: 'elite', label: 'Elite', threshold: 1000 }
];
<<<<<<< HEAD
export function currentBadge(balance: number): Badge | null {
=======

export function currentBadge(balance: number): Badge | null {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  let current: Badge | null = null;
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
=======
import React from 'react';
;
  id: string;
label: string;
threshold: number, //token balance threshold;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
import React from 'react';

import React from 'react';
  id: string;
label: string;
threshold: number, //token balance threshold
}
const BADGES: Badge[] = [
  { id: 'starter', label: 'Starter', threshold: 50 }
  { id: 'rising', label: 'Rising Star', threshold: 200 }
  { id: 'pro', label: 'Pro', threshold: 500 }
  { id: 'elite', label: 'Elite', threshold: 1000 }
];
export function currentBadge(balance: number): Badge | null {
  let current: Badge | null = null;
  for (const b of BADGES) {
    // Check condition
if (current = b) {
  $2
}

export function currentBadge(): any (balance: number): Badge | null {;
  let current: Badge | null = null;

  return current;
export default function Badges(): any ({ balance }: { balance: number }) {;
  const active = currentBadge(balance);
  return (
    <div className='flex gap-2 items-center flex-wrap'>;
      {BADGES && BADGES.map(b => (        <span
          key={b && b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
    <div className='flex gap-2 items-center flex-wrap'>;
      {BADGES && BADGES.map(b => (        <span
          key={b && b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : 'bg-gray-100 border-gray-200 text-gray-500'          }`}  let current: Badge | null = null
  for (const b of BADGES) {
    if (balance >= b.threshold) current = b
            balance>= b && b.threshold;
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800';
              : 'bg-gray-100 border-gray-200 text-gray-500'          }`}  let current: Badge | null = null,;
  for (const b of BADGES) {;
    if (balance >= b && b.threshold) current = b;
  }
  return current;
}
<<<<<<< HEAD
export default function Badges(): any ({ balance }: { balance: number }) {;
  const active = currentBadge(balance);
  return (
    <div className='flex gap-2 items-center flex-wrap'>;
      {BADGES && BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap">;
      {BADGES && BADGES.map((b) => (;
        <span
          key={b && b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance>= b && b.threshold;
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800';
              : 'bg-gray-100 border-gray-200 text-gray-500'              ? "bg-yellow-100 border-yellow-300 text-yellow-800";
              : "bg-gray-100 border-gray-200 text-gray-500";
          }`}
          title={`Requires ${b && b.threshold} ZION$`}
        >;
          {b && b.label}
        </span>;
      ))}
      {active && (;
        <span className='ml-2 text-xs text-green-600'>;
          Current: {active && active.label}
        </span>;
      )}
    </div>
);        <span className="ml-2 text-xs text-green-600">Current: {active.label}</span>
      )}
    </div>;
  );
}
              ? "bg-yellow-100 border-yellow-300 text-yellow-800"
              : "bg-gray-100 border-gray-200 text-gray-500"
  }
  return current;
}
export default /**
 * Badges - Function description
 */
function Badges() {
  const active = current_badge (balance);
  return (
    <div className='flex gap - 2 items - center flex - wrap'>;
      {BADGES.map (boolean => (    <div className="flex gap - 2 items - center flex - wrap">;
      {BADGES.map ((b) => (
        <span;
          key={b.id}
          className={`px - 3 py - 1 rounded - full text - xs border ${
            balance >= b.threshold;
              ? 'bg - yellow - 100 border - yellow - 300 text - yellow - 800';
              : 'bg - gray - 100 border - gray - 200 text - gray - 500'              ? "bg - yellow - 100 border - yellow - 300 text - yellow - 800";
              : "bg - gray - 100 border - gray - 200 text - gray - 500";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
export default function Badges({ balance }: { balance: number }) {;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function Badges({ balance }: { balance: number }) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const active = currentBadge(balance);

  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap">
      {BADGES.map((b) => (
        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          }`}
          title={`Requires ${b.threshold} ZION$`}
        >;
          {b.label}
        </span>))}
      {active && (
<<<<<<< HEAD
        <span className="ml-2 text-xs text-green-600">Current: {active.label}</span>
      )}
    </div>
  );
}
        <span className='ml - 2 text - xs text - green - 600'>;
          Current: {active.label}
        </span>)}
    </div>);        <span className="ml - 2 text - xs text - green - 600">Current: {active.label}</span>)}
    </div>);
}
=======
        <span className='ml-2 text-xs text-green-600'>
          Current: {active.label}
        </span>
      )}
    </div>
<<<<<<< HEAD
);        <span className="ml-2 text-xs text-green-600">Current: {active.label}</span>
      )}
    </div>
  );
}
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
