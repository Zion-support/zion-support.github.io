import React from 'react';
// Hooks index file,
export { default as useWebhooks } from './useWebhooks';
// Placeholder for useScrollToTop - implement if needed,
export const useScrollToTop = () => {,
  // Simple scroll to top implementation,
  React.useEffect(() => {,
    window.scrollTo(0, 0);
  }, []);
};