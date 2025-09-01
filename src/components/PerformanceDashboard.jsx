import Activity from 'lucide - react / dist / esm / icons / activity';
import BarChart3 from 'lucide - react / dist / esm / icons / bar - chart - 3';
import Clock from 'lucide - react / dist / esm / icons / clock';
import Eye from 'lucide - react / dist / esm / icons / eye';
import Info from 'lucide - react / dist / esm / icons / info';
import MousePointer from 'lucide - react / dist / esm / icons / mouse - pointer';
import React, { useState } from 'react';
import RefreshCw from 'lucide - react / dist / esm / icons / refresh - cw';
import TrendingUp from 'lucide - react / dist / esm / icons / trending - up';
import X from 'lucide - react / dist / esm / icons / x';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { cn } from '@/lib / utils';
import { usePerformance } from '@/hooks / usePerformance';
export function PerformanceDashboard ({ className, showDetails = false, onClose }) {
import { motion, AnimatePresence } from 'framer - motion';


    const { metrics, observers, performanceScore, logMetrics } = usePerformance () ;
    const [isExpanded, setIsExpanded] = useState (showDetails) ;
    const getScoreColor = (score) => {
        if (score >= 90) return 'text - green - 500';
        if (score >= 70) return 'text - yellow - 500';
        return 'text - red - 500'};
    const getScoreEmoji = (score) => {
        if (score >= 90) return '🚀';
        if (score >= 70) return '⚠️';
        return '🐌'};
    const getMetricIcon = (metricName) => {
        const icons = {
  FCP: <Eye className="w - 4 h - 4"      />,
            LCP: <Eye className="w - 4 h - 4"      />,
            FID: <MousePointer className="w - 4 h - 4"      />,
            CLS: <BarChart3 className="w - 4 h - 4"      />,
            TTFB: <Clock className="w - 4 h - 4"      />,
            DOMLOAD: <Activity className="w - 4 h - 4"      />,
