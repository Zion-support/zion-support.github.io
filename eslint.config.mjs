// Flat ESLint config for ESLint v9 + Next.js
// Uses eslint-config-next (flat) and TypeScript support

import next from 'eslint-config-next';

export default [
  // Base Next.js rules (includes React, JSX, etc.)
  ...next,

  // Project overrides
  {
    rules: {
      // Keep initial set minimal; rely on Next defaults
    },
  },
];

