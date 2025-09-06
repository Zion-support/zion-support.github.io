<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from "react";
type QA = { q: string; a: string };
type Props = { items: QA[] };
export default function FAQ(): any ({ items }: Props) {;
  if (!items || items && items.length === 0) return null;
  return (
    <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">;
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>;
      <div className="space-y-4">;
        {items && items.map((it, idx) => (;
          <div
            key={idx}
            className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">;
            <div className="font-medium">{it && it.q}</div>;
            <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">;
              {it && it.a}
            </div>;
          </div>;
import React from 'react';
type QA = { q: string, a: string };
type Props = { items: QA[] };
export default function FAQ({ items }: Props) {
  if (!items || items.length === 0) return null;
=======
<<<<<<< HEAD

import React from "react";
type QA = { q: string; a: string }
type Props = { items: QA[] }
=======
import React from "react";
type QA = { q: string; a: string };
type Props = { items: QA[] };
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function FAQ({ items }: Props) {
  if (!items |items.length === 0) return null;

=======
<<<<<<< HEAD
export default function FAQ({ items }: Props) {;
=======
export default function FAQ({ items }: Props) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  if (!items || items.length === 0) return null;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
            <div className="font-medium">{it.q}</div>
            <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">{it.a}</div>
          </div>
        ))}
      </div>;
    </div>;
  );
}
import React from './react';
type QA = { q: string; array: string }
type Props = { items: QA[] }
export default /**
 * FAQ - Function description
 */
function FAQ() {
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="mt - 10 border - t border - gray - 200 dark:border - gray - 800 pt - 6">;
      <h2 className="text - lg font - semibold mb - 4">Frequently Asked Questions</h2>;
      <div className="space - y-4">;
        {items.map ((it, idx) => (
          <div;
            key={idx}
            className="rounded - lg bg - gray - 50 dark:bg - gray - 900 p - 4 border border - gray - 200 dark:border - gray - 800";
          >;
            <div className="font - medium">{it.q}</div>;
            <div className="mt - 1 text - sm text - gray - 700 dark:text - gray - 300">;
              {it.a}
<<<<<<< HEAD
            </div>;
          </div>))}
      </div>;
    </div>);
=======
            </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
  )

}
=======
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
