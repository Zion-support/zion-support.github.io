import React from 'react';

type QA = {_q: string; a: string};

type Props = {_items: QA[]};

export default function FAQ(_{_items}: Props) {_if (!items || items.length === 0) return null;
  return (_<div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map((it, _idx) => (
          <div key={idx} className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
            <div className="font-medium">{_it.q}</div>
            <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">{_it.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}