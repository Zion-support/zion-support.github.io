'use client';

import { Component, type ReactNode } from 'react';

// Catch errors thrown while rendering this subtree. A recoverable React hydration
// report or unrelated rejected network promise must not replace the whole page.
export default class GlobalErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <span className="text-7xl block mb-6">⚠️</span>
          <h1 className="text-4xl font-bold text-white mb-4">Unexpected runtime error</h1>
          <p className="text-slate-400 mb-8">
            {error?.message || 'Something went wrong while loading the site. We’ve caught the error and kept navigation available.'}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                this.setState({ error: null });
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Try Again
            </button>
            <a
              href="/"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center"
            >
              Go Home
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-8">
            Need help? Contact us at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">
              kleber@ziontechgroup.com
            </a>
          </p>
        </div>
      </main>
    );
  }

  return <>{this.props.children}</>;
  }
}
