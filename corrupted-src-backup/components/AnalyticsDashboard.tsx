import React, { useState, useEffect } from 'react';
:corrupted-src-backup/components/AnalyticsDashboard.tsx

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{
    path: string;
    views: number;
  }>;
  trafficSources: Array<{
    source: string;
    percentage: number;
  }>;
}

export default AnalyticsDashboard;
