<<<<<<< HEAD
import React from "react",
=======
import React from &quot;react&quot;;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export type Badge = {
  id: string,
  label: string,
  threshold: number, // token balance threshold
},

const BADGES: Badge[] = [
<<<<<<< HEAD
  { id: "starter", label: "Starter", threshold: 50 },
  { id: "rising", label: "Rising Star", threshold: 200 },
  { id: "pro", label: "Pro", threshold: 500 },
  { id: "elite", label: "Elite", threshold: 1000 }],
=======
  { id: &quot;starter&quot;, label: &quot;Starter&quot;, threshold: 50 },
  { id: &quot;rising&quot;, label: &quot;Rising Star&quot;, threshold: 200 },
  { id: &quot;pro&quot;, label: &quot;Pro&quot;, threshold: 500 },
  { id: &quot;elite&quot;, label: &quot;Elite&quot;, threshold: 1000 }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function currentBadge(balance: number): Badge | null {
  let current: Badge | null = null,
  for (const b of BADGES) {
    if (balance >= b.threshold) current = b
  }
  return current
}

export default function Badges({ balance }: { balance: number }) {
  const active = currentBadge(balance),
  return (
    <div className=&quot;flex gap-2 items-center flex-wrap&quot;>
=======
export type Badge = {_id: string;
  label: string;
  threshold: number; // token balance threshold};

const BADGES: Badge[] = [
  {_id: "starter", _label: "Starter", _threshold: 50},
  {_id: "rising", _label: "Rising Star", _threshold: 200},
  {_id: "pro", _label: "Pro", _threshold: 500},
  {_id: "elite", _label: "Elite", _threshold: 1000}];

export function currentBadge(_balance: number): Badge | null {_let current: Badge | null = null;
  for (const b of BADGES) {
    if (balance >= b.threshold) current = b;}
  return current;
}

export default function Badges(_{_balance}: {_balance: number}) {_const _active = currentBadge(balance);
  return (_<div className="flex gap-2 items-center flex-wrap">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {BADGES.map((b) => (
        <span
          key={b.id}
          className={_`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
<<<<<<< HEAD
              ? &quot;bg-yellow-100 border-yellow-300 text-yellow-800&quot;
              : &quot;bg-gray-100 border-gray-200 text-gray-500&quot;
          }`}
          title={`Requires ${b.threshold} ZION$`}
=======
              ? "bg-yellow-100 border-yellow-300 text-yellow-800"
              : "bg-gray-100 border-gray-200 text-gray-500"}`}
          title={_`Requires ${b.threshold} ZION$`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_b.label}
        </span>
      ))}
<<<<<<< HEAD
      {active && (
        <span className=&quot;ml-2 text-xs text-green-600&quot;>Current: {active.label}</span>
=======
      {_active && (
        <span className="ml-2 text-xs text-green-600">Current: {active.label}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    </div>
  )
}