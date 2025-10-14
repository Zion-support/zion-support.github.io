import React, { Suspense } from &apos;react&apos;;
export const errorBoundaryConfig = {fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV === &apos;development&apos;) {;
      console.error(&apos;Error caught by boundary: &apos;, error)}
  }
};
