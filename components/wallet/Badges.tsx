import React from &quot;react&quot;;

export type Badge = {
  id: string;
  label: string;
  threshold: number; // token balance threshold
};

const BADGES: Badge[] = [
  { id: &quot;starter&quot;, label: &quot;Starter&quot;, threshold: 50 },
  { id: &quot;rising&quot;, label: &quot;Rising Star&quot;, threshold: 200 },
  { id: &quot;pro&quot;, label: &quot;Pro&quot;, threshold: 500 },
  { id: &quot;elite&quot;, label: &quot;Elite&quot;, threshold: 1000 }];

export function currentBadge(balance: number): Badge | null {
  let current: Badge | null = null;
  for (const b of BADGES) {
    if (balance >= b.threshold) current = b;
  }
  return current;
}

export default function Badges({ balance }: { balance: number }) {
  const active = currentBadge(balance);
  return (
    <div className=&quot;flex gap-2 items-center flex-wrap&quot;>
      {BADGES.map((b) => (
        <span
          key={b.id}
          className={`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
              ? &quot;bg-yellow-100 border-yellow-300 text-yellow-800&quot;
              : &quot;bg-gray-100 border-gray-200 text-gray-500&quot;
          }`}
          title={`Requires ${b.threshold} ZION$`}
        >
          {b.label}
        </span>
      ))}
      {active && (
        <span className=&quot;ml-2 text-xs text-green-600&quot;>Current: {active.label}</span>
      )}
    </div>
  );
}