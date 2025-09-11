

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
export type EmptyStateProps = {;
import React from './react';
import React from "react";
export type EmptyStateProps = {;
export type EmptyStateProps = {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react";

export type EmptyStateProps = {

=======
import React from "react";
export type EmptyStateProps = {;
import React from './react';
=======
import React from "react";
export type EmptyStateProps = {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  emoji?: string;
  title: string;
  message: string;

<<<<<<< HEAD
<<<<<<< HEAD
export type EmptyStateProps = {
  emoji?: string;
  title: string;
  message: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  action?: React && React.ReactNode;
};
export default function EmptyState(): any ({;
  emoji = "✨",;
  title,;
  message,;
  action,;
}: EmptyStateProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <div className="text-center py-12">;
      <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">;
        <span className="text-3xl">{emoji}</span>;
      </div>;
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>;
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</p>;
      {action && <div className="mt-3">{action}</div>}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>

  );

}

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
    </div>
  );
}
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
