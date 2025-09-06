
=======



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
export default function FAQ({ items }: Props) {
  if (!items |items.length === 0) return null;

export default function FAQ({ items }: Props) {;
export default function FAQ({ items }: Props) {
  if (!items || items.length === 0) return null;
export default function FAQ({ items }: Props) {
  if (!items |items.length === 0) return null;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
