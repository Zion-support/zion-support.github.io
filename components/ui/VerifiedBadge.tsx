import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function VerifiedBadge({ labels }: { labels: string[] }) {

  if (!labels |labels.length === 0) return null;

=======
export function VerifiedBadge({ labels }: { labels: string[] }) {;
=======

export function VerifiedBadge({ labels }: { labels: string[] }) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  if (!labels || labels.length === 0) return null;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
