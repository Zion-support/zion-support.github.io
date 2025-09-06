import React from 'react';


export function VerifiedBadge({ labels }: { labels: string[] }) {

export function VerifiedBadge(): any ({ labels }: { labels: string[] }) {;
  if (!labels || labels && labels.length === 0) return null;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <div className='flex gap-2 items-center'>
      {labels.map(label => (
        <span
          key={label}
          className='inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium border border-emerald-200'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4'
          >
            <path
              fillRule='evenodd'
              d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12Zm13.36-1.28a.75.75 0 0 0-1.06-1.06L11 13.17l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.08-4.08Z'
              clipRule='evenodd'
            />          </svg>    <div className="flex gap-2 items-center">
      {labels.map((label) => (
        <span key={label} className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium border border-emerald-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12Zm13.36-1.28a.75.75 0 0 0-1.06-1.06L11 13.17l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.08-4.08Z" clipRule="evenodd" />
          {label}
        </span>
      ))}
    </div>
  );
          {label}
        </span>;
      ))}
    </div>;
  );
}
}

}
  return (
    <div className='flex gap - 2 items - center'>;
      {labels.map (label => (
        <span;
          key={label}
          className='inline - flex items - center gap - 1 rounded - full bg - emerald - 50 text - emerald - 700 px - 3 py - 1 text - xs font - medium border border - emerald - 200';
        >;
          <svg;
            xmlns='http://www.w3.org / 2000 / svg';
            view_box='0 0 24 24';
            fill='current_color';
            className='w - 4 h - 4';
          >;
            <path;
              fill_rule='evenodd';
              d='M2.25 12c0 - 5.385 4.365 - 9.75 9.75 - 9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12Zm13.36 - 1.28a.75.75 0 0 0 - 1.06 - 1.06L11 13.17l - 1.47 - 1.47a.75.75 0 0 0 - 1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.08 - 4.08Z';
              clip_rule='evenodd';
            />          </svg>    <div className="flex gap - 2 items - center">;
      {labels.map ((label) => (
        <span key={label} className="inline - flex items - center gap - 1 rounded - full bg - emerald - 50 text - emerald - 700 px - 3 py - 1 text - xs font - medium border border - emerald - 200">;
          <svg xmlns="http://www.w3.org / 2000 / svg" view_box="0 0 24 24" fill="current_color" className="w - 4 h - 4">;
            <path fill_rule="evenodd" d="M2.25 12c0 - 5.385 4.365 - 9.75 9.75 - 9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12Zm13.36 - 1.28a.75.75 0 0 0 - 1.06 - 1.06L11 13.17l - 1.47 - 1.47a.75.75 0 0 0 - 1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.08 - 4.08Z" clip_rule="evenodd" />;
          {label}
        </span>))}
    </div>);
      {labels.map((label) => (
        <span key={label} className=&quot;inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium border border-emerald-200&quot;>
          <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;currentColor&quot; className=&quot;w-4 h-4&quot;>
            <path fillRule=&quot;evenodd&quot; d=&quot;M2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12Zm13.36-1.28a.75.75 0 0 0-1.06-1.06L11 13.17l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.08-4.08Z&quot; clipRule=&quot;evenodd&quot; />
          </svg>
          {_label}
        </span>
      ))}
    </div>
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
