<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect, useCallback, useMemo } from 'react';

import { Activity, Server, Shield, Users, TrendingUp, BarChart3, PieChart, LineChart, TrendingDown, Clock3, RefreshCw, Loader2 } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';
export const EnterpriseDashboard = () => {
    const { trackEvent } = useAnalytics({
        enableTracking: true,
        enableUserBehaviorTracking: true
    });
    const [activeTab, setActiveTab] = useState('overview');
    const [refreshInterval, setRefreshInterval] = useState(30000); // 30 seconds
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [dateRange, setDateRange] = useState('24h');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    // Mock data - in production, this would come from real-time APIs
    const [systemMetrics] = useState([
        {
            id: 'cpu',
            name: 'CPU Usage',
            value: 45,
            unit: '%',
            status: 'healthy',
            trend: 'stable',
            change: 2,
            threshold: { warning: 70, critical: 90 },
            lastUpdated: new Date()
        },
        {
            id: 'memory',
            name: 'Memory Usage',
            value: 78,
            unit: '%',
            status: 'warning',
            trend: 'up',
            change: 8,
            threshold: { warning: 75, critical: 90 },
            lastUpdated: new Date()
        },
        {
            id: 'disk',
            name: 'Disk Usage',
            value: 65,
            unit: '%',
            status: 'healthy',
            trend: 'stable',
            change: 1,
            threshold: { warning: 80, critical: 95 },
            lastUpdated: new Date()
        },
        {
            id: 'network',
            name: 'Network Load',
            value: 32,
            unit: 'Mbps',
            status: 'healthy',
            trend: 'down',
            change: -5,
            threshold: { warning: 100, critical: 150 },
            lastUpdated: new Date()
        }
    ]);
    const [serviceStatuses] = useState([
        {
            id: 'web-server',
            name: 'Web Server',
            status: 'online',
            uptime: 99.98,
            responseTime: 45,
            errorRate: 0.02
        },
        {
            id: 'database',
            name: 'Database',
            status: 'online',
            uptime: 99.95,
            responseTime: 12,
            errorRate: 0.01
        },
        {
            id: 'api-gateway',
            name: 'API Gateway',
            status: 'degraded',
            uptime: 99.87,
            responseTime: 89,
            errorRate: 0.15
        },
        {
            id: 'cache-server',
            name: 'Cache Server',
            status: 'online',
            uptime: 99.99,
            responseTime: 2,
            errorRate: 0.001
        }
    ]);
    const [securityAlerts] = useState([
        {
            id: 'alert-1',
            severity: 'medium',
            type: 'anomaly',
            title: 'Unusual Login Pattern Detected',
            description: 'Multiple login attempts from different locations within short time frame',
            timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
            status: 'investigating',
            affected: ['user-123', 'user-456'],
            source: 'Security Monitoring System'
        },
        {
            id: 'alert-2',
            severity: 'low',
            type: 'access_violation',
            title: 'Failed Authentication Attempt',
            description: 'User attempted to access restricted resource without proper permissions',
            timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
            status: 'resolved',
            affected: ['user-789'],
            source: 'Access Control System'
        }
    ]);
    const [userActivities] = useState([
        {
            id: 'activity-1',
            userId: 'user-123',
            userName: 'John Doe',
            action: 'login',
            resource: 'dashboard',
            timestamp: new Date(Date.now() - 1000 * 60 * 2),
            ipAddress: '192.168.1.100',
            userAgent: 'Chrome/91.0.4472.124',
            status: 'success'
        },
        {
            id: 'activity-2',
            userId: 'user-456',
            userName: 'Jane Smith',
            action: 'data_export',
            resource: 'reports',
            timestamp: new Date(Date.now() - 1000 * 60 * 5),
            ipAddress: '192.168.1.101',
            userAgent: 'Firefox/89.0.2',
            status: 'success'
        }
    ]);
    // Refresh data
    const refreshData = useCallback(async () => {
        setIsRefreshing(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Update timestamps (simplified for demo)
            const now = new Date();
            console.log('Data refreshed at:', now.toLocaleTimeString());
            trackEvent('enterprise_dashboard', 'data_refreshed', 'manual', undefined, {
                tab: activeTab,
                dateRange
            });
        }
        catch (error) {
            console.error('Failed to refresh data:', error);
            trackEvent('enterprise_dashboard', 'refresh_failed', 'error', undefined, {
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
        finally {
            setIsRefreshing(false);
        }
    }, [activeTab, dateRange, trackEvent]);
    // Auto-refresh effect
    useEffect(() => {
        const interval = setInterval(refreshData, refreshInterval);
        return () => clearInterval(interval);
    }, [refreshInterval, refreshData]);
    // Filtered data
    const filteredSecurityAlerts = useMemo(() => {
        let filtered = securityAlerts;
        if (filterStatus !== 'all') {
            filtered = filtered.filter(alert => alert.status === filterStatus);
        }
        if (searchQuery) {
            filtered = filtered.filter(alert => alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                alert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                alert.type.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return filtered;
    }, [securityAlerts, filterStatus, searchQuery]);
    const filteredUserActivities = useMemo(() => {
        let filtered = userActivities;
        if (searchQuery) {
            filtered = filtered.filter(activity => activity.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                activity.resource.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return filtered;
    }, [userActivities, searchQuery]);
    // Get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'healthy':
            case 'online':
            case 'success':
                return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
            case 'warning':
            case 'degraded':
            case 'pending':
                return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
            case 'critical':
            case 'offline':
            case 'failure':
                return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
            case 'maintenance':
                return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
            default:
                return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30';
        }
    };
    // Get severity color
    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'critical':
                return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
            case 'high':
                return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
            case 'medium':
                return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
            case 'low':
                return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
            default:
                return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30';
        }
    };
    return (<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Activity className="w-8 h-8"/>
            Enterprise Dashboard
            <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm">
              <Server className="w-4 h-4"/>
              Production
            </div>
          </h2>
          
          <div className="flex items-center gap-3">
            <select value={refreshInterval / 1000} onChange={(e) => setRefreshInterval(Number(e.target.value) * 1000)} className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors">
              <option value={15}>15s</option>
              <option value={30}>30s</option>
              <option value={60}>1m</option>
              <option value={300}>5m</option>
            </select>
            
            <button onClick={refreshData} disabled={isRefreshing} className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50">
              {isRefreshing ? (<Loader2 className="w-4 h-4 animate-spin"/>) : (<RefreshCw className="w-4 h-4"/>)}
              Refresh
            </button>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const EnterpriseDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnterpriseDashboard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnterpriseDashboard;