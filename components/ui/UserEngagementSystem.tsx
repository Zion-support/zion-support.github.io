
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";

=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react";
export type EmptyStateProps = {;
import React from './react';
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
export type EmptyStateProps = {;
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export type EmptyStateProps = {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import React from "react";

export type EmptyStateProps = {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  emoji?: string;
  title: string;
  message: string;

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
export type EmptyStateProps = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  emoji?: string;
  title: string;
  message: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="text-center py-12">;
      <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">;
        <span className="text-3xl">{emoji}</span>;
      </div>;
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>;
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</p>;
      {action && <div className="mt-3">{action}</div>}

<<<<<<< HEAD
  );
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

    </div>

  );

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </div>
  )

}
=======
    <div className="text-center py-12">
      <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">
        <span className="text-3xl">{emoji}</span>
      </div>
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>;
    </div>
  );
}
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
