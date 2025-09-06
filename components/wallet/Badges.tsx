<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
  return current;
export default function Badges({ balance }: { balance: number }) {
  const active = currentBadge(balance);
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {BADGES.map(b => (        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : 'bg-gray-100 border-gray-200 text-gray-500'          }`}  let current: Badge | null = null
  for (const b of BADGES) {
    if (balance >= b.threshold) current = b
  }
  return current
}
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800'
              : 'bg-gray-100 border-gray-200 text-gray-500'              ? "bg-yellow-100 border-yellow-300 text-yellow-800"
              : "bg-gray-100 border-gray-200 text-gray-500"
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
);        <span className="ml-2 text-xs text-green-600">Current: {active.label}</span>
      )}
    </div>
  );
}
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
