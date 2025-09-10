import React, {useState, useEffect} from 'react';
import {BarChart3, TrendingUp, Activity, Eye, Clock, Target, RefreshCw} from 'lucide-react';
;
export const AnalyticsDashboard = (props: any) => {
    const { isTracking, currentSession, performanceMetrics, events, getAnalyticsSummary, trackEvent, trackConversion } = useAnalytics({enableTracking: true,