

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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react";
export type EmptyStateProps = {;
=======
import React from './react';
<<<<<<< HEAD
export type EmptyStateProps = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
import React from "react";
export type EmptyStateProps = {;
export type EmptyStateProps = {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react";

export type EmptyStateProps = {

  emoji?: string;
  title: string;
  message: string;

<<<<<<< HEAD
=======
export type EmptyStateProps = {
  emoji?: string;
  title: string;
  message: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  action?: React && React.ReactNode;
};

export default function EmptyState(): any ({;
  emoji = "✨",;
  title,;
  message,;
  action,;
}: EmptyStateProps) {;
<<<<<<< HEAD

  return (
    <div className="text-center py-12">;
      <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">;
        <span className="text-3xl">{emoji}</span>;
      </div>;
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>;
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</p>;
      {action && <div className="mt-3">{action}</div>}

=======
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
export default /**
 * EmptyState - Function description
 */
function EmptyState() {
  return (
    <div className="text - center py - 12">;
      <div className="mx - auto h - 24 w - 24 rounded - full bg - gradient - to - br from - blue - 600 / 20 to - indigo - 600 / 20 flex items - center justify - center">;
        <span className="text - 3xl">{emoji}</span>;
      </div>;
      <h2 className="mt - 4 text - lg font - semibold">{title}</h2>;
      <p className="mt - 1 text - sm text - gray - 600 dark:text - gray - 300">{message}</p>;
      {action && <div className="mt - 3">{action}</div>}
    </div>);

<<<<<<< HEAD
}
=======

=======
    </div>

  );

}

    </div>
  )

}
    <div className="text-center py-12">
      <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">
        <span className="text-3xl">{emoji}</span>
      </div>
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>
  );
}
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
