import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

type QA = { q: string; a: string };

=======
type QA = { q: string, a: string };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
type Props = { items: QA[] };
<<<<<<< HEAD

=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function FAQ({ items }: Props) {
  if (!items || items.length === 0) return null;
  return (
    <div className='mt-10 border-t border-gray-200 dark:border-gray-800 pt-6'>
      <h2 className='text-lg font-semibold mb-4'>Frequently Asked Questions</h2>
      <div className='space-y-4'>
        {items.map((it, idx) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div
            key={idx}
            className='rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800'
          >
            <div className='font-medium'>{it.q}</div>
            <div className='mt-1 text-sm text-gray-700 dark:text-gray-300'>
              {it.a}
<<<<<<< HEAD
            </div>          </div>
=======
            </div>
=======
type QA = { q: string, a: string },
type Props = { items: QA[] },
export default function FAQ({ items }: Props) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
            <div className="font-medium">{it.q}</div>
            <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">{it.a}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div key={idx} className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
            <div className="font-medium">{it.q}</div>
            <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">{it.a}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
