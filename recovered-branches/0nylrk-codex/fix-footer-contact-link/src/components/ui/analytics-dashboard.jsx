<<<<<<< HEAD

export default analytics-dashboard;
=======
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Download, RefreshCw, BarChart3, Eye, EyeOff, Target } from 'lucide-react';
import { Button } from './button';
export function AnalyticsDashboard({ enabled = true, isExpanded = false, onMetricClick, className = '' }) {
    const [showTargets, setShowTargets] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMetric, setSelectedMetric] = useState(null);
    // Mock analytics data
    const [metrics, setMetrics] = useState({
        totalUsers: 12450,
        activeUsers: 8920,
        revenue: 456780,
        growth: 23.5
    });
    // Simulate real-time data updates
    useEffect(() => {
        if (!enabled || !isExpanded)
            return;
        const interval = setInterval(() => {
            setMetrics(prev => ({
                ...prev,
                revenue: prev.revenue + Math.floor(Math.random() * 1000) - 500,
                growth: prev.growth + (Math.random() * 2 - 1)
            }));
        }, 5000);
        return () => clearInterval(interval);
    }, [enabled, isExpanded]);
    // Handle metric click
    const handleMetricClick = useCallback((metricId) => {
        setSelectedMetric(metricId);
        onMetricClick?.(metricId);
    }, [onMetricClick]);
    // Calculate progress percentage
    const calculateProgress = (current, target) => {
        return Math.min((current / target) * 100, 100);
    };
    // Refresh data
    const refreshData = useCallback(async () => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Update metrics with some randomization
        setMetrics(prev => ({
            ...prev,
            totalUsers: prev.totalUsers + Math.floor(Math.random() * 100) - 50,
            activeUsers: prev.activeUsers + Math.floor(Math.random() * 50) - 25,
            revenue: prev.revenue + Math.floor(Math.random() * 5000) - 2500,
            growth: prev.growth + (Math.random() * 2 - 1)
        }));
        setIsLoading(false);
    }, []);
    if (!enabled)
        return null;
    return (<motion.div className={`bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 ${className}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h3>
          <p className="text-zinc-300 text-sm">Real-time business metrics and insights</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" onClick={() => setShowTargets(!showTargets)} className="text-zinc-400 hover:text-white p-2">
            {showTargets ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
          </Button>
          <Button size="sm" variant="outline" onClick={refreshData} disabled={isLoading} className="border-zion-blue-light/30 text-zinc-300 hover:text-white">
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`}/>
          </Button>
          <Button size="sm" variant="outline" className="border-zion-blue-light/30 text-zinc-300 hover:text-white">
            <Download className="w-4 h-4"/>
          </Button>
        </div>
      </div>

export default analytics-dashboard;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
