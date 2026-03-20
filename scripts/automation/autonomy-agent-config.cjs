#!/usr/bin/env node

const AUTONOMY_AGENT_CONFIG = {
  releaseGuardian: {
    scheduleCron: '*/30 * * * *',
    attempts: 3,
    intervalMs: 15000,
    unhealthyRoutesAlertThreshold: 2,
    strictFailureThreshold: 4,
    maxRoutesToCheck: 20,
  },
  qualityDrift: {
    scheduleCron: '45 */6 * * *',
    historyWindow: 30,
    failureStreakAlertThreshold: 2,
    strictFailureCountThreshold: 2,
    commandTimeoutMs: 12 * 60 * 1000,
  },
  growthSignal: {
    scheduleCron: '15 */8 * * *',
    minPromotedRoutes: 6,
    liveUnhealthyThreshold: 2,
    maxLiveRoutesToCheck: 12,
  },
  queueGuard: {
    scheduleCron: '*/20 * * * *',
    maxConcurrentWriters: 1,
    writerWorkflowKeywords: [
      'content',
      'improvement',
      'evolution',
      'development',
      'autonomous',
      'automation',
      'layout',
      'navigation',
    ],
  },
};

module.exports = { AUTONOMY_AGENT_CONFIG };
