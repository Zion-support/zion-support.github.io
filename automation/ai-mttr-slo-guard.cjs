#!/usr/bin/env node
'use strict';

// Fail explicitly until this component has a reviewed implementation.
require('./lib/mttr-unavailable.cjs').reportUnavailable('slo-guard');
