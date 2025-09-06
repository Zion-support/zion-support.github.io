<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
export type Badge = any;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import React from 'react';
  id: string;
label: string;
threshold: number, //token balance threshold
<<<<<<< HEAD
}
=======
};

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const BADGES: Badge[] = [
  { id: 'starter', label: 'Starter', threshold: 50 }
  { id: 'rising', label: 'Rising Star', threshold: 200 }
  { id: 'pro', label: 'Pro', threshold: 500 }
  { id: 'elite', label: 'Elite', threshold: 1000 }
];
<<<<<<< HEAD
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
=======
}

export function currentBadge(balance: number): Badge | null {
  let current: Badge | null = null;

  return current;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function Badges({ balance }: { balance: number }) {
  const active = currentBadge(balance);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className='flex gap-2 items-center flex-wrap'>
<<<<<<< HEAD
      {BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap">
      {BADGES.map((b) => (
=======
      {BADGES.map(b => (
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
              ? 'bg-yellow-100 border-yellow-300 text-yellow-800'
<<<<<<< HEAD
              : 'bg-gray-100 border-gray-200 text-gray-500'              ? "bg-yellow-100 border-yellow-300 text-yellow-800"
              : "bg-gray-100 border-gray-200 text-gray-500"
=======
              : 'bg-gray-100 border-gray-200 text-gray-500'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
