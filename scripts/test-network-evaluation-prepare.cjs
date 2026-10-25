'use strict';
// Compatibility entrypoint for the consolidated real-preparation integration suite.
// Run manually, never from prepare-pages-out.sh (which this suite invokes).
require('./test-network-evaluation-build.cjs');
