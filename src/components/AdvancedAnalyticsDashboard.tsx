
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
topPages: [],;
trafficSources: [];
});