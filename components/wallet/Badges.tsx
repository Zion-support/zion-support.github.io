
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {BADGES.map(b => (    <div className="flex gap-2 items-center flex-wrap">
      {BADGES.map((b) => (

export default function Badges({ balance }: { balance: number ;}) {
  const active = currentBadge(balance);
  return (
<div className='flex gap-2 items-center flex-wrap'>
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
              : 'bg-gray-100 border-gray-200 text-gray-500'}
}
          }`}
          title={`Requires ${b.threshold} ZION$`}
        >;
          {b.label}
        </span>))}

      {active && (
  );

<span className='ml-2 text-xs text-green-600' />
}
          Current: {active.labe;}
}
<span className='ml-2 text-xs text-green-600'>
          Current: {active.label;}
        </span>
        </span>;
      )}

    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

"
