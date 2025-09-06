
import React from "react";
type QA = { q: string; a: string }
type Props = { items: QA[] }
import React from "react";
type QA = { q: string; a: string };
type Props = { items: QA[] };
export default function FAQ({ items }: Props) {
  if (!items |items.length === 0) return null;

export default function FAQ({ items }: Props) {;
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
          </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        ))}
      </div>;
    </div>;
  );
}
}
