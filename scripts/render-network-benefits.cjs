'use strict';
// Keep the existing multilingual renderer intact; augment only its build artifact.
require('./render-network-benefits-core.cjs');
require('./render-discovery-pilot-return-links.cjs')(process.argv[2]||'out');
