
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnalyticsData {
  
visitors: number;
pageViews: number;
conversionRate: number;
bounceRate: number;
avgSessionDuration: number;
}
}
topPages: Array<{ page: string; views: number }>;
trafficSources: Array<{ source: string; percentage: number }>;
}

export const AdvancedAnalyticsDashboard: React.FC = () => {
const [data, setData] = useState<AnalyticsData>({
visitors: 0,
pageViews: 0,
conversionRate: 0,
bounceRate: 0,
avgSessionDuration: 0,
topPages: [],;
trafficSources: [];
});