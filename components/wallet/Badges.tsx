import React from 'react';

=======import React from 'react';

import React from 'react';
  id: string;
label: string;



export function currentBadge(balance: number): Badge | null {;


  let current: Badge | null = null;
=======
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
;
  id: string;
label: string;
threshold: number, //token balance threshold;
}
;
const BADGES: Badge[] = [;
  { id: 'starter', label: 'Starter', threshold: 50 },
  { id: 'rising', label: 'Rising Star', threshold: 200 },
  { id: 'pro', label: 'Pro', threshold: 500 },
  { id: 'elite', label: 'Elite', threshold: 1000 },
];

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

}
  );
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }`}
          title={`Requires ${b.threshold} ZION$`}
        >;
          {b.label}
        </span>))}
      {active && (

        <span className='ml - 2 text - xs text - green - 600'>;
          Current: {active.label}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
