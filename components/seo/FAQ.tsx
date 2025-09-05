<<<<<<< HEAD
import React from 'react',
type QA = { q: string, a: string },

type Props = { items: QA[] },

export default function FAQ({ items }: Props) {
  if (!items || items.length === 0) return null,
  return (
    <div className=&quot;mt-10 border-t border-gray-200 dark:border-gray-800 pt-6&quot;>
      <h2 className=&quot;text-lg font-semibold mb-4&quot;>Frequently Asked Questions</h2>
      <div className=&quot;space-y-4&quot;>
        {items.map((it, idx) => (
          <div key={idx} className=&quot;rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800&quot;>
            <div className=&quot;font-medium&quot;>{it.q}</div>
            <div className=&quot;mt-1 text-sm text-gray-700 dark:text-gray-300&quot;>{it.a}</div>
          </div>
=======
import React from 'react',;
type QA = { q: string, a: string },;
type Props = { items: QA[] },;
export default function FAQ({ items }: Props) {;
  if (!items || items.length === 0) return null;
  return (;
    <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">;
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>;
      <div className="space-y-4">;
        {items.map((it, idx) => (;
          <div key={idx} className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">;
            <div className="font-medium">{it.q}</div>;
            <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">{it.a}</div>;
          </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </div>;
    </div>;
  );
}