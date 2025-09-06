// Polyfill fetch and enable fetch mocks;

// Set up a mock for Vite environment variables accessed via import.meta.env;
// This assumes that Babel (via babel - plugin - transform - import - meta or similar);
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR;
// or that import.meta itself is transformed into an object where 'env' can be populated.;

}
;
// Polyfill for BroadcastChannel;

// -----------------------------;
// Vitest Compatibility Layer for Jest;
// -----------------------------;
// Some test files were originally written for Vitest and import utilities from 'vitest'.;
// To keep migrating gradually while still running the Jest suite successfully, we create;

}
;
// Ensure all code paths use the mock implementation;
// Some services import the global fetch reference before jest - fetch - mock is enabled.;
// Override it explicitly so those modules receive the mocked version.;

