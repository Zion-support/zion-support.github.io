import React from "react";

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
      {BADGES.map((b) => (
        <span
          key={b.id}
          className={_`px-3 py-1 rounded-full text-xs border ${
            balance >= b.threshold
              ? "bg-yellow-100 border-yellow-300 text-yellow-800"
              : "bg-gray-100 border-gray-200 text-gray-500"}`}
          title={_`Requires ${b.threshold} ZION$`}
        >
          {_b.label}
        </span>
      ))}
      {_active && (
        <span className="ml-2 text-xs text-green-600">Current: {active.label}</span>
      )}
    </div>
  );
}