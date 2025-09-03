<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Server, Shield, Users, TrendingUp, BarChart3, PieChart, LineChart, TrendingDown, Clock3, RefreshCw, Loader2 } from 'lucide-react';
;
export const EnterpriseDashboard = () => {;
    const { trackEvent } = useAnalytics({        enableTracking: true,;
        enableUserBehaviorTracking: true})';
    const [activeTab, setActiveTab] = useState('overview');
    const [refreshInterval, setRefreshInterval] = useState(30000) // 30 seconds;
    const [isRefreshing, setIsRefreshing] = useState(false)';
    const [dateRange, setDateRange] = useState('24h')';
    const [searchQuery, setSearchQuery] = useState(')';
    const [filterStatus, setFilterStatus] = useState('all');
    // Mock data - in production, this would come from real-time APIs;
    const [systemMetrics] = useState([]{}
';
';
'';
            id: 'cpu','';
            name: 'CPU Usage',';
            value: 45,'';
            unit: '%','';
            status: 'healthy','';
            trend: 'stable',;
            change: 2,;
            threshold: { warning: 70, critical: 90 },;
            lastUpdated: new Date () },;
        {}
';
';
'';
            id: 'memory','';
            name: 'Memory Usage',';
            value: 78,'';
            unit: '%','';
            status: 'warning','';
            trend: 'up',;
            change: 8,;
            threshold: { warning: 75, critical: 90 },;
            lastUpdated: new Date () },;
        {}
';
';
'';
            id: 'disk','';
            name: 'Disk Usage',';
            value: 65,'';
            unit: '%','';
            status: 'healthy','';
            trend: 'stable',;
            change: 1,;
            threshold: { warning: 80, critical: 95 },;
            lastUpdated: new Date () },;
        {}
';
';
'';
            id: 'network','';
            name: 'Network Load',';
            value: 32,'';
            unit: 'Mbps','';
            status: 'healthy','';
            trend: 'down',;
            change: -5,;
            threshold: { warning: 100, critical: 150 },;
=======
<<<<<<< HEAD
import React, {useState, useEffect, useCallback, useMemo } from 'react'';'
import {motion, AnimatePresence } from 'framer-motion'';'
import {Activity, Server, Shield, Users, TrendingUp, BarChart3, PieChart, LineChart, TrendingDown, Clock3, RefreshCw, Loader2 } from 'lucide-react';
=======
<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useMemo } from &apos;
import { motion } from &apos;framer-motion';;react&apos;';
import { motion, AnimatePresence } from &apos;framer-motion&apos;';
import { Activity, Server, Shield, Users, TrendingUp, BarChart3, PieChart, LineChart, TrendingDown, Clock3, RefreshCw, Loader2 } from &apos;lucide-react';&apos;&apos;

export const EnterpriseDashboard = () => {}
    const;const;const { trackEvent } = useAnalytics({        enableTracking: true,
        enableUserBehaviorTracking: true})';&apos;&apos;
    const [activeTab, setActiveTab] = useState(&apos;overview&apos;);&apos;
    const [refreshInterval, setRefreshInterval] = useState(30000) // 30 seconds;
    const [isRefreshing, setIsRefreshing] = useState(false)';&apos;&apos;
    const [dateRange, setDateRange] = useState(&apos;24h&apos;)';&apos;&apos;
    const [searchQuery, setSearchQuery] = useState(&apos;&apos;)';&apos;&apos;
    const [filterStatus, setFilterStatus] = useState(&apos;all&apos;);
    // Mock data - in production, this would come from real-time APIs;&apos;
    const [systemMetrics] = useState([]{}
';
&apos;';
&apos;&apos;';
            id: &apos;cpu&apos;,'&apos;';
            name: &apos;CPU Usage&apos;,&apos;';
            value: 45,&apos;&apos;';
            unit: &apos;%&apos;,&apos;&apos;';
            status: &apos;healthy&apos;,'&apos;';
            trend: &apos;stable&apos;,
            change: 2,
            threshold: { warnin,g: 70, critical: 90 },
            lastUpdated: new Date () },
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;memory&apos;,'&apos;';
            name: &apos;Memory Usage&apos;,&apos;';
            value: 78,&apos;&apos;';
            unit: &apos;%&apos;,&apos;&apos;';
            status: &apos;warning&apos;,'&apos;';
            trend: &apos;up&apos;,
            change: 8,
            threshold: { warnin,g: 75, critical: 90 },
            lastUpdated: new Date () },
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;disk&apos;,'&apos;';
            name: &apos;Disk Usage&apos;,&apos;';
            value: 65,&apos;&apos;';
            unit: &apos;%&apos;,&apos;&apos;';
            status: &apos;healthy&apos;,'&apos;';
            trend: &apos;stable&apos;,
            change: 1,
            threshold: { warnin,g: 80, critical: 95 },
            lastUpdated: new Date () },
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;network&apos;,'&apos;';
            name: &apos;Network Load&apos;,&apos;';
            value: 32,&apos;&apos;';
            unit: &apos;Mbps&apos;,'&apos;';
            status: &apos;healthy&apos;,'&apos;';
            trend: &apos;down&apos;,
            change: -5,
            threshold: { warnin,g: 100, critical: 150 },
=======
<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useMemo } from 'react'';'
import { motion, AnimatePresence } from 'framer-motion';';'
import { Activity, Server, Shield, Users, TrendingUp, BarChart3, PieChart, LineChart, TrendingDown, Clock3, RefreshCw, Loader2 } from 'lucide-react';
<<<<<<< HEAD
""
=======

export const EnterpriseDashboard = () => {
    const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: true})';'
    const [activeTab, setActiveTab] = useState('overview');
    const [refreshInterval, setRefreshInterval] = useState(30000) // 30 seconds;
    const [isRefreshing, setIsRefreshing] = useState(false)';'
    const [dateRange, setDateRange] = useState('24h')';'
    const [searchQuery, setSearchQuery] = useState('')';'
    const [filterStatus, setFilterStatus] = useState('all');
    // Mock data - in production, this would come from real-time APIs;
    const [systemMetrics] = useState([]{}
';'
'';
''';'
            id: 'cpu', ''';'
            name: 'CPU Usage', '';
            value: 45, ''';'
            unit: '%', ''';'
            status: 'healthy', ''';'
            trend: 'stable', change: 2,
            threshold: { warning: 70, critical: 90 },
            lastUpdated: new Date () }, {}
';'
'';
''';'
            id: 'memory', ''';'
            name: 'Memory Usage', '';
            value: 78, ''';'
            unit: '%', ''';'
            status: 'warning', ''';'
            trend: 'up', change: 8,
            threshold: { warning: 75, critical: 90 },
            lastUpdated: new Date () }, {}
';'
'';
''';'
            id: 'disk', ''';'
            name: 'Disk Usage', '';
            value: 65, ''';'
            unit: '%', ''';'
            status: 'healthy', ''';'
            trend: 'stable', change: 1,
            threshold: { warning: 80, critical: 95 },
            lastUpdated: new Date () }, {}
';'
'';
''';'
            id: 'network', ''';'
            name: 'Network Load', '';
            value: 32, ''';'
            unit: 'Mbps', ''';'
            status: 'healthy', ''';'
            trend: 'down', change: -5,
            threshold: { warning: 100, critical: 150 },
>>>>>>> main
>>>>>>> main
            lastUpdated: new Date () }
    ]) ;&apos;&apos;
    const [serviceStatuses] = useState ([]{}
<<<<<<< HEAD
';
<<<<<<< HEAD
';
'';
            id: 'web-server','';
            name: 'Web Server','';
            status: 'online',;
            uptime: 99.98,;
            responseTime: 45,;
            errorRate: 0.02},;
        {}
';
';
'';
            id: 'database','';
            name: 'Database','';
            status: 'online',;
            uptime: 99.95,;
            responseTime: 12,;
            errorRate: 0.01},;
        {}
';
';
'';
            id: 'api-gateway','';
            name: 'API Gateway','';
            status: 'degraded',;
            uptime: 99.87,;
            responseTime: 89,;
            errorRate: 0.15},;
        {}
';
';
'';
            id: 'cache-server','';
            name: 'Cache Server','';
            status: 'online',;
            uptime: 99.99,;
            responseTime: 2,;
=======
&apos;';
&apos;&apos;';
            id: &apos;web-server&apos;,'&apos;';
            name: &apos;Web Server&apos;,'&apos;';
            status: &apos;online&apos;,
            uptime: 99.98,
            responseTime: 45,
            errorRate: 0.02},
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;database&apos;,'&apos;';
            name: &apos;Database&apos;,'&apos;';
            status: &apos;online&apos;,
            uptime: 99.95,
            responseTime: 12,
            errorRate: 0.01},
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;api-gateway&apos;,'&apos;';
            name: &apos;API Gateway&apos;,'&apos;';
            status: &apos;degraded&apos;,
            uptime: 99.87,
            responseTime: 89,
            errorRate: 0.15},
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;cache-server&apos;,'&apos;';
            name: &apos;Cache Server&apos;,'&apos;';
            status: &apos;online&apos;,
            uptime: 99.99,
            responseTime: 2,
>>>>>>> main
            errorRate: 0.001}
    ]) ;&apos;&apos;
    const [securityAlerts] = useState ([]{}
';
<<<<<<< HEAD
=======
&apos;';
&apos;&apos;';
            id: &apos;alert-1&apos;,'&apos;';
            severity: &apos;medium&apos;,'&apos;';
            type: &apos;anomaly&apos;,'&apos;';
            title: &apos;Unusual Login Pattern Detected&apos;,'&apos;';
            description: &apos;Multiple login attempts from different locations within short time frame&apos;,'&apos;';
            timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago&apos;&apos;'';
            status: &apos;investigating&apos;,'&apos;';
            affected[&apos;user-123&apos;,user-456&apos;],';';
            source: &apos;Security Monitoring System&apos;},
        {}
>>>>>>> main
';
&apos;';
&apos;&apos;';
            id: &apos;alert-2&apos;,'&apos;';
            severity: &apos;low&apos;,'&apos;';
            type: &apos;access_violation&apos;,'&apos;';
            title: &apos;Failed Authentication Attempt&apos;,'&apos;';
            description: &apos;User attempted to access restricted resource without proper permissions&apos;,'&apos;';
            timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago&apos;&apos;'';
            status: &apos;resolved&apos;,'&apos;';
            affected[&apos;user-789&apos;],';';
            source: &apos;Access Control System&apos;}
    ]) ;&apos;&apos;
    const [userActivities] = useState ([]{}
';
&apos;';
&apos;&apos;';
            id: &apos;activity-1&apos;,'&apos;';
            userId: &apos;user-123&apos;,'&apos;';
            userName: &apos;John Doe&apos;,'&apos;';
            action: &apos;login&apos;,'&apos;';
            resource: &apos;dashboard&apos;,&apos;';
            timestamp: new Date(Date.now() - 1000 * 60 * 2),&apos;&apos;';
            ipAddress: &apos;192.168.1.100&apos;,'&apos;';
            userAgent: &apos;Chrome/91.0.4472.124&apos;,'&apos;';
            status: &apos;success&apos;},
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;activity-2&apos;,'&apos;';
            userId: &apos;user-456&apos;,'&apos;';
            userName: &apos;Jane Smith&apos;,'&apos;';
            action: &apos;data_&apos;&apos;export&apos;,'&apos;';
            resource: &apos;reports&apos;,&apos;';
            timestamp: new Date(Date.now() - 1000 * 60 * 5),&apos;&apos;';
            ipAddress: &apos;192.168.1.101&apos;,'&apos;';
            userAgent: &apos;Firefox/89.0.2&apos;,'&apos;';
            status: &apos;success&apos;}
=======
';'
'';
<<<<<<< HEAD
            id: 'alert-1','';
            severity: 'medium','';
            type: 'anomaly','';
            title: 'Unusual Login Pattern Detected','';
            description: 'Multiple login attempts from different locations within short time frame','';
            timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago'';
            status: 'investigating','';
            affected['user-123',user-456'],';';
            source: 'Security Monitoring System'},;
        {}
';
';
'';
            id: 'alert-2','';
            severity: 'low','';
            type: 'access_violation','';
            title: 'Failed Authentication Attempt','';
            description: 'User attempted to access restricted resource without proper permissions','';
            timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago'';
            status: 'resolved','';
            affected['user-789'],';';
            source: 'Access Control System'}
    ]) ;
    const [userActivities] = useState ([]{}
';
';
'';
            id: 'activity-1','';
            userId: 'user-123','';
            userName: 'John Doe','';
            action: 'login','';
            resource: 'dashboard',';
            timestamp: new Date(Date.now() - 1000 * 60 * 2),'';
            ipAddress: '192.168.1.100','';
            userAgent: 'Chrome/91.0.4472.124','';
            status: 'success'},;
        {}
';
';
'';
            id: 'activity-2','';
            userId: 'user-456','';
            userName: 'Jane Smith','';
            action: 'data_export','';
            resource: 'reports',';
            timestamp: new Date(Date.now() - 1000 * 60 * 5),'';
            ipAddress: '192.168.1.101','';
            userAgent: 'Firefox/89.0.2','';
=======
''';'
            id: 'web-server', ''';'
            name: 'Web Server', ''';'
            status: 'online', uptime: 99.98,
            responseTime: 45, errorRate: 0.02},
        {}
';'
'';
''';'
            id: 'database', ''';'
            name: 'Database', ''';'
            status: 'online', uptime: 99.95,
            responseTime: 12, errorRate: 0.01},
        {}
';'
'';
''';'
            id: 'api-gateway', ''';'
            name: 'API Gateway', ''';'
            status: 'degraded', uptime: 99.87,
            responseTime: 89, errorRate: 0.15},
        {}
';'
'';
''';'
            id: 'cache-server', ''';'
            name: 'Cache Server', ''';'
            status: 'online', uptime: 99.99,
            responseTime: 2, errorRate: 0.001}
    ]) ;
    const [securityAlerts] = useState ([]{}
';'
'';
''';'
            id: 'alert-1', ''';'
            severity: 'medium', ''';'
            type: 'anomaly', ''';'
            title: 'Unusual Login Pattern Detected', ''';'
            description: 'Multiple login attempts from different locations within short time frame', ''';'
            timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago'''';
            status: 'investigating', ''';'
            affected['user-123', user-456'], ';';'
            source: 'Security Monitoring System'}, {}
';'
'';
''';'
            id: 'alert-2', ''';'
            severity: 'low', ''';'
            type: 'access_violation', ''';'
            title: 'Failed Authentication Attempt', ''';'
            description: 'User attempted to access restricted resource without proper permissions', ''';'
            timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago'''';
            status: 'resolved', ''';'
            affected['user-789'], ';';
            source: 'Access Control System'}
    ]) ;
    const [userActivities] = useState ([]{}
';'
'';
''';'
            id: 'activity-1', ''';'
            userId: 'user-123', ''';'
            userName: 'John Doe', ''';'
            action: 'login', ''';'
            resource: 'dashboard', '';
            timestamp: new Date(Date.now() - 1000 * 60 * 2), ''';'
            ipAddress: '192.168.1.100', ''';'
            userAgent: 'Chrome/91.0.4472.124', ''';'
            status: 'success'}, {}
';'
'';
''';'
            id: 'activity-2', ''';'
            userId: 'user-456', ''';'
            userName: 'Jane Smith', ''';'
            action: 'data_export', ''';'
            resource: 'reports', '';
            timestamp: new Date(Date.now() - 1000 * 60 * 5), ''';'
            ipAddress: '192.168.1.101', ''';'
            userAgent: 'Firefox/89.0.2', ''';'
>>>>>>> main
            status: 'success'}
>>>>>>> main
    ]) ;
    // Refresh data;&apos;&apos;
    const refreshData = useCallback(async () => {}
        setIsRefreshing(true) ;
        try {}
            // Simulate API call;
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Update timestamps (simplified for demo);
<<<<<<< HEAD
            const now = new Date()';
<<<<<<< HEAD
            // console.log('Data refreshed at:', now.toLocaleTimeString())';
            trackEvent('enterprise_dashboard',data_refreshed',manual', null, {}
                tab: activeTab,;
=======
            // console.log(&apos;Data refreshed at:&apos;, now.toLocaleTimeString())';
            trackEvent(&apos;enterprise_dashboard&apos;,data_refreshed&apos;,manual&apos;, null, {}
                tab: activeTab,
>>>>>>> main
                dateRange})}
        catch (error) {}
';
            // console.error(&apos;Failed to refresh data:&apos;, error)';
            trackEvent(&apos;enterprise_dashboard&apos;,refresh_failed&apos;,error&apos;, null, {}
';
<<<<<<< HEAD
';
'';
=======
&apos;';
&apos;&apos;';
                error: error instanceof Error ? error.message : &apos;Unknown error&apos;})}
=======
            const now = new Date()';'
            // console.log('Data refreshed at: ', now.toLocaleTimeString())';'
            trackEvent('enterprise_dashboard', data_refreshed',manual', null, {}
                tab: activeTab, dateRange})}
        catch (error) {}
';'
            // console.error('Failed to refresh data: ', error)';'
            trackEvent('enterprise_dashboard', refresh_failed',error', null, {}
';'
'';
''';'
>>>>>>> main
                error: error instanceof Error ? error.message : 'Unknown error'})}
>>>>>>> main
        finally {}
            setIsRefreshing(false)}
    }, [activeTab, dateRange, trackEvent]);
    // Auto-refresh effect;
    useEffect(() => {}&apos;&apos;
        const interval = setInterval(refreshData, refreshInterval);
        return () => clearInterval(interval)}, [refreshInterval, refreshData]);
    // Filtered data;
<<<<<<< HEAD
    const filtered = securityAlerts';
        if (filterStatus !== &apos;all&apos;) {}
=======
    const filtered = securityAlerts';'
        if (filterStatus !== 'all') {}
>>>>>>> main
            filtered = filtered.filter(alert => alert.status === filterStatus)}
        if(searchQuery) {}
            filtered = filtered.filter(alert => alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                alert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                alert.type.toLowerCase().includes(searchQuery.toLowerCase()))}
        return filtered}, [securityAlerts, filterStatus, searchQuery]);&apos;&apos;
    const filtered = userActivities;
        if(searchQuery) {}
            filtered = filtered.filter(activity => activity.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                activity.resource.toLowerCase().includes(searchQuery.toLowerCase()))}
        return filtered}, [userActivities, searchQuery]);
    // Get status color;
    const getStatusColor = (status) => {}
        switch (status) {}
<<<<<<< HEAD
';
<<<<<<< HEAD
';
'';
            case 'healthy':'';
            case 'online':'';
            case 'success':'';
                return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
            case 'warning':'';
            case 'degraded':'';
            case 'pending':'';
                return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
            case 'critical':'';
            case 'offline':'';
            case 'failure':'';
                return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
            case 'maintenance':'';
                return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
            default:'';
                return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30'}
=======
&apos;';
&apos;&apos;';
            case &apos;healthy&apos;:'&apos;&apos;';
            case &apos;online&apos;:'&apos;&apos;';
            case &apos;success&apos;:'&apos;&apos;';
                return &apos;text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30&apos;';
            case &apos;warning&apos;:'&apos;&apos;';
            case &apos;degraded&apos;:'&apos;&apos;';
            case &apos;pending&apos;:'&apos;&apos;';
                return &apos;text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30&apos;';
            case &apos;critical&apos;:'&apos;&apos;';
            case &apos;offline&apos;:'&apos;&apos;';
            case &apos;failure&apos;:'&apos;&apos;';
                return &apos;text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30&apos;';
            case &apos;maintenance&apos;:'&apos;&apos;';
                return &apos;text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30&apos;';
            default:&apos;&apos;'';
                return &apos;text-gray-600 bg-gray-100 dark:text-gray-400 dar,k:bg-gray-900/30&apos;}
=======
';'
'';
''';'
            case 'healthy': '''';
            case 'online': '''';
            case 'success': '''';
                return 'text-green-600 bg-green-100 dark: text-green-400 dark:bg-green-900/30'';'
            case 'warning': '''';
            case 'degraded': '''';
            case 'pending': '''';
                return 'text-yellow-600 bg-yellow-100 dark: text-yellow-400 dark:bg-yellow-900/30'';'
            case 'critical': '''';
            case 'offline': '''';
            case 'failure': '''';
                return 'text-red-600 bg-red-100 dark: text-red-400 dark:bg-red-900/30'';'
            case 'maintenance': '''';
                return 'text-blue-600 bg-blue-100 dark: text-blue-400 dark:bg-blue-900/30'';'
            default: '''';
                return 'text-gray-600 bg-gray-100 dark: text-gray-400 dark:bg-gray-900/30'}
>>>>>>> main
>>>>>>> main
    }
    // Get severity color;&apos;&apos;
    const getSeverityColor = (severity) => {}
        switch (severity) {}
<<<<<<< HEAD
';
<<<<<<< HEAD
            case 'critical':';
                return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
            case 'high':';
                return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
            case 'medium':';
                return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
            case 'low':';
                return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
            default:';
                return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30'}''}';';
    return (<div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden'>''{/* Header */}'';
      <div className='bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white'>'';
        <div className='flex items-center justify-between'>'';
          <h2 className='text-2xl font-bold flex items-center gap-3'>'';
            <Activity className='w-8 h-8'/>'';
            Enterprise Dashboard'';
            <div className='flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm'>'';
              <Server className='w-4 h-4'/>;
              Production;
            </div>;
          </h2>'';
          '';
          <div className='flex items-center gap-3'>'';
            <select value={refreshInterval / 1000} onChange={(e) => setRefreshInterval(Number(e.target.value) * 1000)} className='px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors'>;
              <option value={15}>15s</option>;
              <option value={30}>30s</option>;
              <option value={60}>1m</option>;
              <option value={300}>5m</option>;
            </select>'';
            '';
            <button onClick={refreshData} disabled={isRefreshing} className='px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50'>''{isRefreshing ? (<Loader2 className='w-4 h-4 animate-spin'/>) : (<RefreshCw className='w-4 h-4'/>)}
              Refresh;
            </button>;
          </div>;
        </div>;
      </div>;
''{/* Navigation Tabs */}'';
      <div className='border-b border-gray-200 dark:border-gray-700'>'';
        <nav className='flex space-x-8 px-6'>'{['{ id: 'overview', label: 'Overview', icon: BarChart3 },'{ id: 'performance', label: 'Performance', icon: TrendingUp },'{ id: 'security', label: 'Security', icon: Shield },'{ id: 'users', label: 'Users', icon: Users },'{ id: 'services', label: 'Services', icon: Server },'{ id: 'analytics', label: 'Analytics', icon: PieChart }';
        ].map(({ id, label, icon: Icon }) => (<button key={id} onClick={() => setActiveTab(id)} className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === id'`;
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'`'`;
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>'';
              <Icon className='w-4 h-4'/>;
              {label}
            </button>) ) }
        </nav>;
      </div>;
''{/* Main Content */}'';
      <div className='p-6'>''';
        <AnimatePresence mode='wait'>'''{activeTab === 'overview' && (<motion.div key='overview' initial = {}
  { opacity: 0,;
  y: 20}} animate = {}
  { opacity: 1,;
  y: 0}} exit = {}
  { opacity: 0,;
  y: -20 '';
''}} className='space-y-6'>''{/* System Metrics Overview */}'';
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>;
                {systemMetrics.map((metric) => (<motion.div key={metric.id} initial = {}
  { opacity: 0,;
  scale: 0.9}} animate = {}
  { opacity: 1,;
  scale: 1 '';
''}} className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                    <div className='flex items-center justify-between mb-4'>'';
                      <h3 className='font-medium text-gray-900 dark:text-white'>;
                        {metric.name}`;
                      </h3>``;
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(metric.status)}`}>;
                        {metric.status}
                      </span>;
                    </div>'';
                    '';
                    <div className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>;
                      {metric.value}{metric.unit}
                    </div>'';
                    ''`;
                    <div className='flex items-center gap-2 text-sm'>'`'`;
                      <span className={`flex items-center gap-1 ${metric.trend === 'up' ? 'text-red-600' :'`'`;
                    metric.trend === 'down' ? 'text-green-600' : 'text-gray-600'}`}>'''{metric.trend === 'up' ? <TrendingUp className='w-4 h-4'/> :''';
                    metric.trend === 'down' ? <TrendingDown className='w-4 h-4'/> :'';
                        <Clock3 className='w-4 h-4'/>}'{metric.change > 0 ? '+' : '}{metric.change}%'';
                      </span>'';
                      <span className='text-gray-500'>;
                        {metric.lastUpdated.toLocaleTimeString()}
                      </span>;
                    </div>;
                  </motion.div>) ) }
              </div>;
''{/* Service Status Overview */}'';
              <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>;
                  Service Status'';
                </h3>'';
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>''`{serviceStatuses.map((service) => (<div key={service.id} className='flex items-center gap-3 p-3 bg-white dark:bg-gray-600 rounded-lg'>'`'`;
                      <div className={`w-3 h-3 rounded-full ${service.status === 'online' ? 'bg-green-500' :';
                    service.status === 'degraded' ? 'bg-yellow-500' :'`;
                        service.status === 'offline' ? 'bg-red-500' :'`'`;
                            'bg-blue-500'}`}></div>'';
                      <div className='flex-1'>'';
                        <div className='font-medium text-gray-900 dark:text-white'>;
                          {service.name}'';
                        </div>'';
                        <div className='text-sm text-gray-600 dark:text-gray-400'>;
                          {service.uptime}% uptime;
                        </div>'';
                      </div>'';
                      <div className='text-right'>'';
                        <div className='text-sm font-medium text-gray-900 dark:text-white'>;
                          {service.responseTime}ms'';
                        </div>'';
                        <div className='text-xs text-gray-500'>;
                          {service.errorRate}% errors;
                        </div>;
                      </div>;
                    </div>) ) }
                </div>;
              </div>;
''{/* Recent Security Alerts */}'';
              <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                <div className='flex items-center justify-between mb-4'>'';
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>;
                    Recent Security Alerts'';
                  </h3>'';
                  <span className='text-sm text-gray-600 dark:text-gray-400'>'{securityAlerts.filter(a => a.status === 'new').length} new;
                  </span>'';
                </div>'';
                <div className='space-y-3'>''`{securityAlerts.slice(0, 3).map((alert) => (<div key={alert.id} className='flex items-start gap-3 p-3 bg-white dark:bg-gray-600 rounded-lg'>'`'`;
                      <div className={`w-2 h-2 rounded-full mt-2 ${alert.severity === 'critical' ? 'bg-red-500' :';
                    alert.severity === 'high' ? 'bg-orange-500' :'`;
                        alert.severity === 'medium' ? 'bg-yellow-500' :'`'`;
                            'bg-blue-500'}`}></div>'';
                      <div className='flex-1'>'';
                        <div className='flex items-center gap-2 mb-1'>'';
                          <span className='font-medium text-gray-900 dark:text-white'>;
                            {alert.title}`;
                          </span>``;
                          <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(alert.severity)}`}>;
                            {alert.severity}
                          </span>'';
                        </div>'';
                        <div className='text-sm text-gray-600 dark:text-gray-400 mb-2'>;
                          {alert.description}'';
                        </div>'';
                        <div className='flex items-center gap-4 text-xs text-gray-500'>;
                          <span>{alert.timestamp.toLocaleTimeString()}</span>`;
                          <span>{alert.source}</span>``;
                          <span className={`px-2 py-1 rounded ${getStatusColor(alert.status)}`}>;
=======
            case &apos;critical&apos;:&apos;';
                return &apos;text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
            case &apos;high&apos;:&apos;';
                return &apos;text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
            case &apos;medium&apos;:&apos;';
                return &apos;text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
            case &apos;low&apos;:&apos;';
                return &apos;text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
            default:&apos;';
                return &apos;text-gray-600 bg-gray-100 dark:text-gray-400 dar,k:bg-gray-900/30&apos;}'&apos;&apos;}';&apos;&apos;
    return (&apos;&apos;<div className=&apos;bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar,k:border-gray-700 overflow-hidden&apos;>'&apos;&apos;{/* Header */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
          <h2 className=&apos;text-2xl font-bold flex items-center gap-3&apos;>'&apos;&apos;'&apos;&apos;
            <Activity className=&apos;w-8 h-8&apos;/>&apos;&apos;';
            Enterprise Dashboard&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm&apos;>'&apos;&apos;'&apos;&apos;
              <Server className=&apos;w-4 h-4&apos;/>
              Production&apos;
            </div>
          </h2>&apos;&apos;';
          &apos;&apos;'&apos;&apos;'
          <div className=&apos;flex items-center gap-3&apos;>'&apos;&apos;'&apos;&apos;
            <select value={refreshInterval / 1000} onChange={(e) => setRefreshInterval(Number(e.target.value) * 1000)} className=&apos;px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors&apos;>&apos;'
=======
';'
            case 'critical': '';
                return 'text-red-600 bg-red-100 dark: text-red-400 dark:bg-red-900/30';
            case 'high': '';
                return 'text-orange-600 bg-orange-100 dark: text-orange-400 dark:bg-orange-900/30';
            case 'medium': '';
                return 'text-yellow-600 bg-yellow-100 dark: text-yellow-400 dark:bg-yellow-900/30';
            case 'low': '';
                return 'text-blue-600 bg-blue-100 dark: text-blue-400 dark:bg-blue-900/30';
            default: '';
                return 'text-gray-600 bg-gray-100 dark: text-gray-400 dark:bg-gray-900/30'}'''}'''
    return (<div className='bg-white dark: bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden'>'''{/* Header */}'''''
      <div className='bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white'>''''
        <div className='flex items-center justify-between'>''''
          <h2 className='text-2xl font-bold flex items-center gap-3'>''''
            <Activity className='w-8 h-8'/>''''
            Enterprise Dashboard''''
            <div className='flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm'>''''
              <Server className='w-4 h-4'/>
              Production
            </div>
          </h2>''''
          ''''
          <div className='flex items-center gap-3'>''''
            <select value={refreshInterval / 1000} onChange={(e) => setRefreshInterval(Number(e.target.value) * 1000)} className='px-3 py-2 bg-white/20 hover: bg-white/30 rounded-lg text-sm transition-colors'>
>>>>>>> main
              <option value={15}>15s</option>
              <option value={30}>30s</option>
              <option value={60}>1m</option>
              <option value={300}>5m</option>
<<<<<<< HEAD
            </select>''''
=======
<<<<<<< HEAD
            </select>&apos;&apos;';
            &apos;&apos;'&apos;&apos;'
            <button onClick={refreshData} disabled={isRefreshing} className=&apos;px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 disable,d:opacity-50&apos;>'&apos;&apos;'{isRefreshing ? (&apos;}&apos;<Loader2 className=&apos;w-4 h-4 animate-spin&apos;/>) : (&apos;<RefreshCw className=&apos;w-4 h-4&apos;/>)}
              Refresh&apos;
=======
            </select>''';'
>>>>>>> main
            ''''
            <button onClick={refreshData} disabled={isRefreshing} className='px-4 py-2 bg-white/20 hover: bg-white/30 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50'>''''{isRefreshing ? (<Loader2 className='w-4 h-4 animate-spin'/>) : (<RefreshCw className='w-4 h-4'/>)}
              Refresh
>>>>>>> main
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
&apos;&apos;'{/* Navigation Tabs */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;border-b border-gray-200 dark:border-gray-700&apos;>'&apos;&apos;'&apos;&apos;
        <nav className=&apos;flex space-x-8 px-6&apos;>&apos;{[&apos;&apos;{ i,d: &apos;overview&apos;, label: &apos;Overview&apos;, icon: BarChart3 },&apos;{ id: &apos;performance&apos;, label: &apos;Performance&apos;, icon: TrendingUp },&apos;{ id: &apos;security&apos;, label: &apos;Security&apos;, icon: Shield },&apos;{ id: &apos;users&apos;, label: &apos;Users&apos;, icon: Users },&apos;{ id: &apos;services&apos;, label: &apos;Services&apos;, icon: Server },&apos;{ id: &apos;analytics&apos;, label: &apos;Analytics&apos;, icon: PieChart }&apos;
        ].map(({ id, label, icon: Icon }) => (&apos;&apos;<button key={id} onClick={() => setActiveTab(id)} className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === id&apos;&apos;`;
                ? &apos;border-indigo-500 text-indigo-600 dark:text-indigo-400&apos;&apos;`&apos;&apos;`;
                : &apos;border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hove,r:text-gray-300&apos;}`}>&apos;&apos;'&apos;&apos;'
              <Icon className=&apos;w-4 h-4&apos;/>
              {label}&apos;
            </button>) ) }
        </nav>
      </div>
&apos;&apos;'{/* Main Content */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;p-6&apos;>'&apos;&apos;'&apos;&apos;'
        <AnimatePresence mode=&apos;wait&apos;>'&apos;&apos;'&apos;&apos;{activeTab === &apos;overview&apos; && (&apos;}&apos;<motion.div key=&apos;overview&apos; initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-6&apos;>'&apos;&apos;{/* System Metrics Overview */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-6&apos;>
                {systemMetrics.map((metric) => (&apos;}<motion.div key={metric.id} initial = {}
  { opacity: 0,
  scale: 0.9}} animate = {}
  { opacity: 1,
  scale: 1 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex items-center justify-between mb-4&apos;>'&apos;&apos;'&apos;&apos;
                      <h3 className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>
                        {metric.name}`&apos;
=======
'''{/* Navigation Tabs */}'''''
      <div className='border-b border-gray-200 dark: border-gray-700'>''''
        <nav className='flex space-x-8 px-6'>'{[''{ id: 'overview', label: 'Overview', icon: BarChart3 }, '{ id: 'performance', label: 'Performance', icon: TrendingUp },'{ id: 'security', label: 'Security', icon: Shield }, '{ id: 'users', label: 'Users', icon: Users },'{ id: 'services', label: 'Services', icon: Server }, '{ id: 'analytics', label: 'Analytics', icon: PieChart }''
        ].map(({ id, label, icon: Icon }) => (<button key={id} onClick={() => setActiveTab(id)} className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === id''`;
                ? 'border-indigo-500 text-indigo-600 dark: text-indigo-400''`''`'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>''''
              <Icon className='w-4 h-4'/>
              {label}
            </button>) ) }
        </nav>
      </div>
'''{/* Main Content */}'''''
      <div className='p-6'>''''''
        <AnimatePresence mode='wait'>''''''{activeTab === 'overview' && (<motion.div key='overview' initial = {}
  { opacity: 0, y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0, y: -20 ''';'
''''}} className='space-y-6'>'''{/* System Metrics Overview */}'''''
              <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6'>
                {systemMetrics.map((metric) => (<motion.div key={metric.id} initial = {}
  { opacity: 0, scale: 0.9}} animate = {}
  { opacity: 1,
  scale: 1 ''';'
''''}} className='bg-gray-50 dark: bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                    <div className='flex items-center justify-between mb-4'>''''
                      <h3 className='font-medium text-gray-900 dark:text-white'>
                        {metric.name}`
>>>>>>> main
                      </h3>``
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
<<<<<<< HEAD
                    </div>''''
=======
<<<<<<< HEAD
                    </div>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <div className=&apos;text-3xl font-bold text-gray-900 dark:text-white mb-2&apos;>
                      {metric.value}{metric.unit}&apos;
                    </div>&apos;&apos;';
                    &apos;&apos;'`&apos;&apos;
                    <div className=&apos;flex items-center gap-2 text-sm&apos;>&apos;`&apos;`&apos;'
                      <span className={`flex items-center gap-1 ${metric.trend === &apos;up&apos; ? &apos;text-red-600&apos; :&apos;`'&apos;`;
                    metric.trend === &apos;down&apos; ? &apos;text-green-600&apos; : &apos;text-gray-600&apos;}`}>&apos;&apos;'&apos;&apos;'{metric.trend === &apos;up&apos; ?&apos;}&apos; <TrendingUp className=&apos;w-4 h-4&apos;/> :&apos;&apos;'&apos;&apos;'
                    metric.trend === &apos;down&apos; ?&apos;&apos; <TrendingDown className=&apos;w-4 h-4&apos;/> :&apos;&apos;'&apos;&apos;'
                        <Clock3 className=&apos;w-4 h-4&apos;/>}&apos;{metric.change > 0 ? &apos;+&apos; : &apos;&apos;}{metric.change}%&apos;&apos;'&apos;&apos;
                      </span>&apos;&apos;'&apos;&apos;'
                      <span className=&apos;text-gray-500&apos;>
                        {metric.lastUpdated.toLocaleTimeString()}&apos;
=======
                    </div>''';'
>>>>>>> main
                    ''''
                    <div className='text-3xl font-bold text-gray-900 dark: text-white mb-2'>
                      {metric.value}{metric.unit}
                    </div>''''
                    '''`'
                    <div className='flex items-center gap-2 text-sm'>'`'`
                      <span className={`flex items-center gap-1 ${metric.trend === 'up' ? 'text-red-600' : '`''`;'
                    metric.trend === 'down' ? 'text-green-600' : 'text-gray-600'}`}>''''''{metric.trend === 'up' ? <TrendingUp className='w-4 h-4'/> :''''''
                    metric.trend === 'down' ? <TrendingDown className='w-4 h-4'/> :''''
                        <Clock3 className='w-4 h-4'/>}"{metric.change > 0 ?  : "'}{metric.change}%'''
                      </span>''''
                      <span className='text-gray-500'>
                        {metric.lastUpdated.toLocaleTimeString()}
>>>>>>> main
                      </span>
                    </div>
                  </motion.div>) ) }
              </div>
<<<<<<< HEAD
&apos;&apos;'{/* Service Status Overview */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white mb-4&apos;>
                  Service Status&apos;&apos;'&apos;&apos;
                </h3>&apos;&apos;'&apos;&apos;'
                <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-4&apos;>'&apos;&apos;`{serviceStatuses.map((service) => (&apos;}&apos;<div key={service.id} className=&apos;flex items-center gap-3 p-3 bg-white dark:bg-gray-600 rounded-lg&apos;>&apos;`&apos;`&apos;'
                      <div className={`w-3 h-3 rounded-full ${service.status === &apos;online&apos; ? &apos;bg-green-500&apos; :&apos;';
                    service.status === &apos;degraded&apos; ? &apos;bg-yellow-500&apos; :&apos;&apos;`;
                        service.status === &apos;offline&apos; ? &apos;bg-red-500&apos; :&apos;`'&apos;`;
                            &apos;bg-blue-500&apos;}`}>&apos;&apos;</div>&apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex-1&apos;>'&apos;&apos;'&apos;&apos;
                        <div className=&apos;font-medium text-gray-900 dark:text-white&apos;>
                          {service.name}&apos;&apos;'&apos;&apos;
                        </div>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;text-sm text-gray-600 dark:text-gray-400&apos;>
                          {service.uptime}% uptime&apos;
                        </div>&apos;&apos;'&apos;&apos;
                      </div>&apos;&apos;'&apos;&apos;'
                      <div className=&apos;text-right&apos;>'&apos;&apos;'&apos;&apos;
                        <div className=&apos;text-sm font-medium text-gray-900 dark:text-white&apos;>
                          {service.responseTime}ms&apos;&apos;'&apos;&apos;
                        </div>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;text-xs text-gray-500&apos;>
                          {service.errorRate}% errors&apos;
=======
'''{/* Service Status Overview */}'''''
              <div className='bg-gray-50 dark: bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                  Service Status''''
                </h3>''''
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>'''`{serviceStatuses.map((service) => (<div key={service.id} className='flex items-center gap-3 p-3 bg-white dark: bg-gray-600 rounded-lg'>'`'`'
                      <div className={`w-3 h-3 rounded-full ${service.status === 'online' ? 'bg-green-500' :'';
                    service.status === 'degraded' ? 'bg-yellow-500' : ''`;
                        service.status === 'offline' ? 'bg-red-500' : '`''`;'
                            'bg-blue-500'}`}></div>''''
                      <div className='flex-1'>''''
                        <div className='font-medium text-gray-900 dark: text-white'>
                          {service.name}''''
                        </div>''''
                        <div className='text-sm text-gray-600 dark:text-gray-400'>
                          {service.uptime}% uptime
                        </div>''''
                      </div>''''
                      <div className='text-right'>''''
                        <div className='text-sm font-medium text-gray-900 dark:text-white'>
                          {service.responseTime}ms''''
                        </div>''''
                        <div className='text-xs text-gray-500'>
                          {service.errorRate}% errors
>>>>>>> main
                        </div>
                      </div>
                    </div>) ) }
                </div>
              </div>
<<<<<<< HEAD
&apos;&apos;'{/* Recent Security Alerts */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;flex items-center justify-between mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white&apos;>
                    Recent Security Alerts&apos;&apos;'&apos;&apos;
                  </h3>&apos;&apos;'&apos;&apos;'
                  <span className=&apos;text-sm text-gray-600 dar,k:text-gray-400&apos;>&apos;{securityAlerts.filter(a => a.status === &apos;new&apos;).length} new&apos;&apos;
                  </span>&apos;&apos;'&apos;&apos;
                </div>&apos;&apos;'&apos;&apos;'
                <div className=&apos;space-y-3&apos;>'&apos;&apos;`{securityAlerts.slice(0, 3).map((alert) => (&apos;}&apos;<div key={alert.id} className=&apos;flex items-start gap-3 p-3 bg-white dark:bg-gray-600 rounded-lg&apos;>&apos;`&apos;`&apos;'
                      <div className={`w-2 h-2 rounded-full mt-2 ${alert.severity === &apos;critical&apos; ? &apos;bg-red-500&apos; :&apos;';
                    alert.severity === &apos;high&apos; ? &apos;bg-orange-500&apos; :&apos;&apos;`;
                        alert.severity === &apos;medium&apos; ? &apos;bg-yellow-500&apos; :&apos;`'&apos;`;
                            &apos;bg-blue-500&apos;}`}>&apos;&apos;</div>&apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex-1&apos;>'&apos;&apos;'&apos;&apos;
                        <div className=&apos;flex items-center gap-2 mb-1&apos;>'&apos;&apos;'&apos;&apos;
                          <span className=&apos;font-medium text-gray-900 dark:text-white&apos;>
                            {alert.title}`&apos;
                          </span>``
                          <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(alert.severity)}`}>
                            {alert.severity}
                          </span>&apos;&apos;'&apos;&apos;
                        </div>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;text-sm text-gray-600 dark:text-gray-400 mb-2&apos;>
                          {alert.description}&apos;&apos;'&apos;&apos;
                        </div>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;flex items-center gap-4 text-xs text-gray-500&apos;>&apos;'
=======
'''{/* Recent Security Alerts */}'''''
              <div className='bg-gray-50 dark: bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                <div className='flex items-center justify-between mb-4'>''''
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Recent Security Alerts''''
                  </h3>''''
                  <span className='text-sm text-gray-600 dark:text-gray-400'>'{securityAlerts.filter(a => a.status === 'new').length} new'
                  </span>''''
                </div>''''
                <div className='space-y-3'>'''`{securityAlerts.slice(0, 3).map((alert) => (<div key={alert.id} className='flex items-start gap-3 p-3 bg-white dark: bg-gray-600 rounded-lg'>'`'`'
                      <div className={`w-2 h-2 rounded-full mt-2 ${alert.severity === 'critical' ? 'bg-red-500' :'';
                    alert.severity === 'high' ? 'bg-orange-500' : ''`;
                        alert.severity === 'medium' ? 'bg-yellow-500' : '`''`;'
                            'bg-blue-500'}`}></div>''''
                      <div className='flex-1'>''''
                        <div className='flex items-center gap-2 mb-1'>''''
                          <span className='font-medium text-gray-900 dark: text-white'>
                            {alert.title}`
                          </span>``
                          <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(alert.severity)}`}>
                            {alert.severity}
                          </span>''''
                        </div>''''
                        <div className='text-sm text-gray-600 dark: text-gray-400 mb-2'>
                          {alert.description}''''
                        </div>''''
                        <div className='flex items-center gap-4 text-xs text-gray-500'>
>>>>>>> main
                          <span>{alert.timestamp.toLocaleTimeString()}</span>`
                          <span>{alert.source}</span>``
                          <span className={`px-2 py-1 rounded ${getStatusColor(alert.status)}`}>
>>>>>>> main
                            {alert.status}
                          </span>;
                        </div>;
                      </div>;
                    </div>) ) }
<<<<<<< HEAD
                </div>;
              </div>;
            </motion.div>)}'';
'''{activeTab === 'performance' && (<motion.div key='performance' initial = {}
  { opacity: 0,;
=======
                </div>
              </div>
<<<<<<< HEAD
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;performance&apos; && (&apos;}&apos;<motion.div key=&apos;performance&apos; initial = {}
  { opacity: 0,
>>>>>>> main
  y: 20}} animate = {}
  { opacity: 1,;
  y: 0}} exit = {}
<<<<<<< HEAD
  { opacity: 0,;
  y: -20 '';
''}} className='space-y-6'>'';
              <div className='text-center py-8'>'';
                <TrendingUp className='w-16 h-16 text-blue-500 mx-auto mb-4'/>'';
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>;
                  Performance Monitoring'';
                </h3>'';
                <p className='text-gray-600 dark:text-gray-400'>;
                  Real-time performance metrics and system health monitoring;
                </p>;
              </div>;
''{/* Performance Charts Placeholder */}'';
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>'';
                <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                  <h4 className='font-medium text-gray-900 dark:text-white mb-4'>CPU & Memory Usage</h4>'';
                  <div className='h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center'>'';
                    <div className='text-center text-gray-500'>'';
                      <LineChart className='w-12 h-12 mx-auto mb-2'/>;
                      <p>Performance Chart</p>;
                    </div>;
                  </div>;
                </div>'';
                '';
                <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                  <h4 className='font-medium text-gray-900 dark:text-white mb-4'>Response Time & Throughput</h4>'';
                  <div className='h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center'>'';
                    <div className='text-center text-gray-500'>'';
                      <BarChart3 className='w-12 h-12 mx-auto mb-2'/>;
                      <p>Performance Chart</p>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>)}'';
'''{activeTab === 'security' && (<motion.div key='security' initial = {}
  { opacity: 0,;
=======
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-6&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;text-center py-8&apos;>'&apos;&apos;'&apos;&apos;
                <TrendingUp className=&apos;w-16 h-16 text-blue-500 mx-auto mb-4&apos;/>&apos;&apos;'&apos;&apos;'
                <h3 className=&apos;text-xl font-semibold text-gray-900 dark:text-white mb-2&apos;>
                  Performance Monitoring&apos;&apos;'&apos;&apos;
                </h3>&apos;&apos;'&apos;&apos;'
                <p className=&apos;text-gray-600 dar,k:text-gray-400&apos;>
                  Real-time performance metrics and system health monitoring&apos;
                </p>
              </div>
&apos;&apos;'{/* Performance Charts Placeholder */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;grid grid-cols-1 lg:grid-cols-2 gap-6&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                  <h4 className=&apos;font-medium text-gray-900 dark:text-white mb-4&apos;>CPU & Memory Usage&apos;</h4>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;text-center text-gray-500&apos;>'&apos;&apos;'&apos;&apos;
                      <LineChart className=&apos;w-12 h-12 mx-auto mb-2&apos;/>&apos;
                      <p>Performance Chart</p>
                    </div>
                  </div>
                </div>&apos;&apos;';
                &apos;&apos;'&apos;&apos;'
                <div className=&apos;bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                  <h4 className=&apos;font-medium text-gray-900 dark:text-white mb-4&apos;>Response Time & Throughput&apos;</h4>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;h-64 bg-gray-100 dar,k:bg-gray-600 rounded flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;text-center text-gray-500&apos;>'&apos;&apos;'&apos;&apos;
                      <BarChart3 className=&apos;w-12 h-12 mx-auto mb-2&apos;/>&apos;
=======
            </motion.div>)}''''
''''''{activeTab === 'performance' && (<motion.div key='performance' initial = {}
  { opacity: 0, y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0, y: -20 ''';'
''''}} className='space-y-6'>''''
              <div className='text-center py-8'>''''
                <TrendingUp className='w-16 h-16 text-blue-500 mx-auto mb-4'/>''''
                <h3 className='text-xl font-semibold text-gray-900 dark: text-white mb-2'>
                  Performance Monitoring''''
                </h3>''''
                <p className='text-gray-600 dark:text-gray-400'>
                  Real-time performance metrics and system health monitoring
                </p>
              </div>
'''{/* Performance Charts Placeholder */}'''''
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>''''
                <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                  <h4 className='font-medium text-gray-900 dark:text-white mb-4'>CPU & Memory Usage</h4>''''
                  <div className='h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center'>''''
                    <div className='text-center text-gray-500'>''''
                      <LineChart className='w-12 h-12 mx-auto mb-2'/>
                      <p>Performance Chart</p>
                    </div>
                  </div>
                </div>''''
                ''''
                <div className='bg-gray-50 dark: bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                  <h4 className='font-medium text-gray-900 dark:text-white mb-4'>Response Time & Throughput</h4>''''
                  <div className='h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center'>''''
                    <div className='text-center text-gray-500'>''''
                      <BarChart3 className='w-12 h-12 mx-auto mb-2'/>
>>>>>>> main
                      <p>Performance Chart</p>
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;security&apos; && (&apos;}&apos;<motion.div key=&apos;security&apos; initial = {}
  { opacity: 0,
>>>>>>> main
  y: 20}} animate = {}
  { opacity: 1,;
  y: 0}} exit = {}
<<<<<<< HEAD
  { opacity: 0,;
  y: -20 '';
''}} className='space-y-6'>''{/* Security Controls */}'';
              <div className='flex items-center gap-4 mb-6'>'';
                <div className='flex-1'>'';
                  <input type='text' placeholder='Search security alerts...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'/>'';
                </div>'';
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'>'';
                  <option value='all'>All Status</option>'';
                  <option value='new'>New</option>'';
                  <option value='investigating'>Investigating</option>'';
                  <option value='resolved'>Resolved</option>'';
                  <option value='false_positive'>False Positive</option>;
                </select>;
              </div>;
''{/* Security Alerts */}'';
              <div className='space-y-4'>;
                {filteredSecurityAlerts.map((alert) => (<motion.div key={alert.id} initial = {}
  { opacity: 0,;
  x: 20}} animate = {}
  { opacity: 1,;
  x: 0 '';
''}} className='bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                    <div className='flex items-start justify-between mb-4'>'`;
                      <div className='flex items-center gap-3'>``;
                        <span className={`px-3 py-1 text-sm rounded-full ${getSeverityColor(alert.severity)}`}>;
                          {alert.severity.toUpperCase()}`;
                        </span>``;
                        <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(alert.status)}`}>;
                          {alert.status}'';
                        </span>'';
                        <span className='px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300'>'{alert.type.replace('_',)}
                        </span>'';
                      </div>'';
                      <span className='text-sm text-gray-500'>;
                        {alert.timestamp.toLocaleString()}
                      </span>;
                    </div>'';
                    '';
                    <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>;
                      {alert.title}'';
                    </h4>'';
                    <p className='text-gray-600 dark:text-gray-400 mb-4'>;
                      {alert.description}
                    </p>'';
                    '';
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>'';
                      <div>'';
                        <span className='font-medium text-gray-700 dark:text-gray-300'>Source:</span>'';
                        <span className='ml-2 text-gray-600 dark:text-gray-400'>{alert.source}</span>;
                      </div>'';
                      <div>'';
                        <span className='font-medium text-gray-700 dark:text-gray-300'>Affected:</span>'';
                        <span className='ml-2 text-gray-600 dark:text-gray-400'>{alert.affected.length} items</span>;
                      </div>'';
                      <div>'';
                        <span className='font-medium text-gray-700 dark:text-gray-300'>Time:</span>'';
                        <span className='ml-2 text-gray-600 dark:text-gray-400'>;
                          {Math.round((Date.now() - alert.timestamp.getTime()) / (1000 * 60))}m ago;
                        </span>;
                      </div>;
                    </div>;
                  </motion.div>) ) }
              </div>;
            </motion.div>)}'';
'''{activeTab === 'users' && (<motion.div key='users' initial = {}
  { opacity: 0,;
=======
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-6&apos;>'&apos;&apos;{/* Security Controls */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex items-center gap-4 mb-6&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;flex-1&apos;>'&apos;&apos;'&apos;&apos;
                  <input type=&apos;text&apos; placeholder=&apos;Search security alerts...&apos; value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className=&apos;w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dar,k:text-gray-100&apos;/>&apos;&apos;'&apos;&apos;
                </div>&apos;&apos;'&apos;&apos;'
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className=&apos;px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dar,k:text-gray-100&apos;>'&apos;&apos;'&apos;&apos;
                  <option value=&apos;all&apos;>All Status&apos;</option>&apos;&apos;'&apos;&apos;'
                  <option value=&apos;new&apos;>New&apos;</option>&apos;&apos;'&apos;&apos;'
                  <option value=&apos;investigating&apos;>Investigating&apos;</option>&apos;&apos;'&apos;&apos;'
                  <option value=&apos;resolved&apos;>Resolved&apos;</option>&apos;&apos;'&apos;&apos;'
                  <option value=&apos;false_positive&apos;>False Positive&apos;</option>
                </select>
              </div>
&apos;&apos;'{/* Security Alerts */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;space-y-4&apos;>
                {filteredSecurityAlerts.map((alert) => (&apos;}<motion.div key={alert.id} initial = {}
  { opacity: 0,
  x: 20}} animate = {}
  { opacity: 1,
  x: 0 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dar,k:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex items-start justify-between mb-4&apos;>'&apos;`&apos;'
                      <div className=&apos;flex items-center gap-3&apos;>``&apos;
=======
            </motion.div>)}''''
''''''{activeTab === 'security' && (<motion.div key='security' initial = {}
  { opacity: 0, y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0, y: -20 ''';'
''''}} className='space-y-6'>'''{/* Security Controls */}'''''
              <div className='flex items-center gap-4 mb-6'>''''
                <div className='flex-1'>''''
                  <input type='text' placeholder='Search security alerts...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'/>''''
                </div>''''
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className='px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'>''''
                  <option value='all'>All Status</option>''''
                  <option value='new'>New</option>''''
                  <option value='investigating'>Investigating</option>''''
                  <option value='resolved'>Resolved</option>''''
                  <option value='false_positive'>False Positive</option>
                </select>
              </div>
'''{/* Security Alerts */}'''''
              <div className='space-y-4'>
                {filteredSecurityAlerts.map((alert) => (<motion.div key={alert.id} initial = {}
  { opacity: 0, x: 20}} animate = {}
  { opacity: 1,
  x: 0 ''';'
''''}} className='bg-white dark: bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                    <div className='flex items-start justify-between mb-4'>''`
                      <div className='flex items-center gap-3'>``
>>>>>>> main
                        <span className={`px-3 py-1 text-sm rounded-full ${getSeverityColor(alert.severity)}`}>
                          {alert.severity.toUpperCase()}`
                        </span>``
                        <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(alert.status)}`}>
<<<<<<< HEAD
                          {alert.status}&apos;&apos;'&apos;&apos;
                        </span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-600 text-gray-700 dar,k:text-gray-300&apos;>&apos;{alert.type.replace(&apos;_&apos;,)}&apos;&apos;
                        </span>&apos;&apos;'&apos;&apos;
                      </div>&apos;&apos;'&apos;&apos;'
                      <span className=&apos;text-sm text-gray-500&apos;>
                        {alert.timestamp.toLocaleString()}&apos;
                      </span>
                    </div>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <h4 className=&apos;text-lg font-semibold text-gray-900 dark:text-white mb-2&apos;>
                      {alert.title}&apos;&apos;'&apos;&apos;
                    </h4>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-gray-600 dark:text-gray-400 mb-4&apos;>
                      {alert.description}&apos;
                    </p>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&apos;>'&apos;&apos;''
                      <div>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium text-gray-700 dark:text-gray-300&apos;>Source:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;ml-2 text-gray-600 dar,k:text-gray-400&apos;>{alert.source}&apos;</span>
                      </div>&apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium text-gray-700 dark:text-gray-300&apos;>Affected:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;ml-2 text-gray-600 dar,k:text-gray-400&apos;>{alert.affected.length} items&apos;</span>
                      </div>&apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium text-gray-700 dark:text-gray-300&apos;>Time:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;ml-2 text-gray-600 dar,k:text-gray-400&apos;>
                          {Math.round((Date.now() - alert.timestamp.getTime()) / (1000 * 60))}m ago&apos;
=======
                          {alert.status}''''
                        </span>''''
                        <span className='px-3 py-1 text-sm rounded-full bg-gray-100 dark: bg-gray-600 text-gray-700 dark:text-gray-300'>'{alert.type.replace('_',)}'
                        </span>''''
                      </div>''''
                      <span className='text-sm text-gray-500'>
                        {alert.timestamp.toLocaleString()}
                      </span>
                    </div>''''
                    ''''
                    <h4 className='text-lg font-semibold text-gray-900 dark: text-white mb-2'>
                      {alert.title}''''
                    </h4>''''
                    <p className='text-gray-600 dark:text-gray-400 mb-4'>
                      {alert.description}
                    </p>''''
                    ''''
                    <div className='grid grid-cols-1 md: grid-cols-3 gap-4 text-sm'>''''
                      <div>''''
                        <span className='font-medium text-gray-700 dark:text-gray-300'>Source:</span>''''
                        <span className='ml-2 text-gray-600 dark:text-gray-400'>{alert.source}</span>
                      </div>''''
                      <div>''''
                        <span className='font-medium text-gray-700 dark:text-gray-300'>Affected:</span>''''
                        <span className='ml-2 text-gray-600 dark:text-gray-400'>{alert.affected.length} items</span>
                      </div>''''
                      <div>''''
                        <span className='font-medium text-gray-700 dark:text-gray-300'>Time:</span>''''
                        <span className='ml-2 text-gray-600 dark:text-gray-400'>
                          {Math.round((Date.now() - alert.timestamp.getTime()) / (1000 * 60))}m ago
>>>>>>> main
                        </span>
                      </div>
                    </div>
                  </motion.div>) ) }
              </div>
<<<<<<< HEAD
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;users&apos; && (&apos;}&apos;<motion.div key=&apos;users&apos; initial = {}
  { opacity: 0,
>>>>>>> main
  y: 20}} animate = {}
  { opacity: 1,;
  y: 0}} exit = {}
<<<<<<< HEAD
  { opacity: 0,;
  y: -20 '';
''}} className='space-y-6'>''{/* User Activity Controls */}'';
              <div className='flex items-center gap-4 mb-6'>'';
                <div className='flex-1'>'';
                  <input type='text' placeholder='Search user activities...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'/>'';
                </div>'';
                <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'>'';
                  <option value='1h'>Last Hour</option>'';
                  <option value='24h'>Last 24 Hours</option>'';
                  <option value='7d'>Last 7 Days</option>'';
                  <option value='30d'>Last 30 Days</option>;
                </select>;
              </div>;
''{/* User Activities */}'';
              <div className='space-y-4'>;
                {filteredUserActivities.map((activity) => (<motion.div key={activity.id} initial = {}
  { opacity: 0,;
  x: 20}} animate = {}
  { opacity: 1,;
  x: 0 '';
''}} className='bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600'>'';
                    <div className='flex items-center justify-between mb-3'>'';
                      <div className='flex items-center gap-3'>'';
                        <div className='w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center'>'';
                          <Users className='w-5 h-5 text-indigo-600 dark:text-indigo-400'/>;
                        </div>'';
                        <div>'';
                          <div className='font-medium text-gray-900 dark:text-white'>;
                            {activity.userName}'';
                          </div>'';
                          <div className='text-sm text-gray-600 dark:text-gray-400'>;
                            {activity.action} • {activity.resource}
                          </div>;
                        </div>'';
                      </div>'`;
                      <div className='text-right'>``;
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>;
                          {activity.status}'';
                        </span>'';
                        <div className='text-sm text-gray-500 mt-1'>;
                          {activity.timestamp.toLocaleTimeString()}
                        </div>;
                      </div>;
                    </div>'';
                    '';
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400'>'';
                      <div>'';
=======
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-6&apos;>'&apos;&apos;{/* User Activity Controls */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex items-center gap-4 mb-6&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;flex-1&apos;>'&apos;&apos;'&apos;&apos;
                  <input type=&apos;text&apos; placeholder=&apos;Search user activities...&apos; value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className=&apos;w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dar,k:text-gray-100&apos;/>&apos;&apos;'&apos;&apos;
                </div>&apos;&apos;'&apos;&apos;'
                <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className=&apos;px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dar,k:text-gray-100&apos;>'&apos;&apos;'&apos;&apos;
                  <option value=&apos;1h&apos;>Last Hour&apos;</option>&apos;&apos;'&apos;&apos;'
                  <option value=&apos;24h&apos;>Last 24 Hours&apos;</option>&apos;&apos;'&apos;&apos;'
                  <option value=&apos;7d&apos;>Last 7 Days&apos;</option>&apos;&apos;'&apos;&apos;'
                  <option value=&apos;30d&apos;>Last 30 Days&apos;</option>
                </select>
              </div>
&apos;&apos;'{/* User Activities */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;space-y-4&apos;>
                {filteredUserActivities.map((activity) => (&apos;}<motion.div key={activity.id} initial = {}
  { opacity: 0,
  x: 20}} animate = {}
  { opacity: 1,
  x: 0 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex items-center justify-between mb-3&apos;>'&apos;&apos;'&apos;&apos;
                      <div className=&apos;flex items-center gap-3&apos;>'&apos;&apos;'&apos;&apos;
                        <div className=&apos;w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                          <Users className=&apos;w-5 h-5 text-indigo-600 dark:text-indigo-400&apos;/>&apos;
                        </div>&apos;&apos;'&apos;&apos;
                        <div>&apos;&apos;'&apos;&apos;'
                          <div className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>
                            {activity.userName}&apos;&apos;'&apos;&apos;
                          </div>&apos;&apos;'&apos;&apos;'
                          <div className=&apos;text-sm text-gray-600 dark:text-gray-400&apos;>
                            {activity.action} • {activity.resource}&apos;
                          </div>
                        </div>&apos;&apos;'&apos;&apos;
                      </div>&apos;&apos;`&apos;&apos;
                      <div className=&apos;text-right&apos;>``&apos;
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                          {activity.status}&apos;&apos;'&apos;&apos;
                        </span>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;text-sm text-gray-500 mt-1&apos;>
                          {activity.timestamp.toLocaleTimeString()}&apos;
                        </div>
                      </div>
                    </div>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400&apos;>'&apos;&apos;''
                      <div>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium&apos;>I,P:&apos;</span> {activity.ipAddress}
                      </div>&apos;&apos;'&apos;&apos;'
                      <div>&apos;&apos;'&apos;&apos;'&apos;&apos;
                        <span className=&apos;font-medium&apos;>Browser:&apos;</span> {activity.userAgent.split(&apos;/&apos;)[0]}&apos;&apos;
                      </div>&apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium&apos;>Time:&apos;</span> {activity.timestamp.toLocaleString()}
=======
            </motion.div>)}''''
''''''{activeTab === 'users' && (<motion.div key='users' initial = {}
  { opacity: 0, y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0, y: -20 ''';'
''''}} className='space-y-6'>'''{/* User Activity Controls */}'''''
              <div className='flex items-center gap-4 mb-6'>''''
                <div className='flex-1'>''''
                  <input type='text' placeholder='Search user activities...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'/>''''
                </div>''''
                <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className='px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'>''''
                  <option value='1h'>Last Hour</option>''''
                  <option value='24h'>Last 24 Hours</option>''''
                  <option value='7d'>Last 7 Days</option>''''
                  <option value='30d'>Last 30 Days</option>
                </select>
              </div>
'''{/* User Activities */}'''''
              <div className='space-y-4'>
                {filteredUserActivities.map((activity) => (<motion.div key={activity.id} initial = {}
  { opacity: 0, x: 20}} animate = {}
  { opacity: 1,
  x: 0 ''';'
''''}} className='bg-white dark: bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600'>''''
                    <div className='flex items-center justify-between mb-3'>''''
                      <div className='flex items-center gap-3'>''''
                        <div className='w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center'>''''
                          <Users className='w-5 h-5 text-indigo-600 dark:text-indigo-400'/>
                        </div>''''
                        <div>''''
                          <div className='font-medium text-gray-900 dark:text-white'>
                            {activity.userName}''''
                          </div>''''
                          <div className='text-sm text-gray-600 dark:text-gray-400'>
                            {activity.action} • {activity.resource}
                          </div>
                        </div>''''
                      </div>''`
                      <div className='text-right'>``
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                          {activity.status}''''
                        </span>''''
                        <div className='text-sm text-gray-500 mt-1'>
                          {activity.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>''''
                    ''''
                    <div className='grid grid-cols-1 md: grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400'>''''
                      <div>''''
>>>>>>> main
                        <span className='font-medium'>IP:</span> {activity.ipAddress}
                      </div>'';
                      <div>''';
                        <span className='font-medium'>Browser:</span> {activity.userAgent.split('/')[0]}
<<<<<<< HEAD
                      </div>'';
                      <div>'';
                        <span className='font-medium'>Time:</span> {activity.timestamp.toLocaleString()}
                      </div>;
                    </div>;
                  </motion.div>) ) }
              </div>;
            </motion.div>)}'';
'''{activeTab === 'services' && (<motion.div key='services' initial = {}
  { opacity: 0,;
=======
                      </div>''''
                      <div>''''
                        <span className='font-medium'>Time: </span> {activity.timestamp.toLocaleString()}
>>>>>>> main
                      </div>
                    </div>
                  </motion.div>) ) }
              </div>
<<<<<<< HEAD
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;services&apos; && (&apos;}&apos;<motion.div key=&apos;services&apos; initial = {}
  { opacity: 0,
>>>>>>> main
  y: 20}} animate = {}
  { opacity: 1,;
  y: 0}} exit = {}
<<<<<<< HEAD
  { opacity: 0,;
  y: -20 '';
''}} className='space-y-6'>'';
              <div className='text-center py-8'>'';
                <Server className='w-16 h-16 text-green-500 mx-auto mb-4'/>'';
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>;
                  Service Management'';
                </h3>'';
                <p className='text-gray-600 dark:text-gray-400'>;
                  Monitor and manage all system services;
                </p>;
              </div>;
''{/* Service Status Grid */}'';
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
                {serviceStatuses.map((service) => (<motion.div key={service.id} initial = {}
  { opacity: 0,;
  scale: 0.9}} animate = {}
  { opacity: 1,;
  scale: 1 '';
''}} className='bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                    <div className='flex items-center justify-between mb-4'>'';
                      <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>;
                        {service.name}`;
                      </h4>``;
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(service.status)}`}>;
                        {service.status}
                      </span>;
                    </div>'';
                    '';
                    <div className='space-y-3'>'';
                      <div className='flex justify-between'>'';
                        <span className='text-gray-600 dark:text-gray-400'>Uptime</span>'';
                        <span className='font-medium text-gray-900 dark:text-white'>;
                          {service.uptime}%;
                        </span>'';
                      </div>'';
                      <div className='flex justify-between'>'';
                        <span className='text-gray-600 dark:text-gray-400'>Response Time</span>'';
                        <span className='font-medium text-gray-900 dark:text-white'>;
                          {service.responseTime}ms;
                        </span>'';
                      </div>'';
                      <div className='flex justify-between'>'';
                        <span className='text-gray-600 dark:text-gray-400'>Error Rate</span>'';
                        <span className='font-medium text-gray-900 dark:text-white'>;
                          {service.errorRate}%;
                        </span>;
                      </div>;
                    </div>'';
                    ''{service.lastIncident && (<div className='mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>'';
                        <div className='text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1'>;
                          Last Incident'';
                        </div>'';
                        <div className='text-xs text-yellow-700 dark:text-yellow-300'>;
                          {service.lastIncident.type} - {service.lastIncident.timestamp.toLocaleDateString()}
                        </div>;
                      </div>) }
                  </motion.div>) ) }
              </div>;
            </motion.div>)}'';
'''{activeTab === 'analytics' && (<motion.div key='analytics' initial = {}
  { opacity: 0,;
=======
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-6&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;text-center py-8&apos;>'&apos;&apos;'&apos;&apos;
                <Server className=&apos;w-16 h-16 text-green-500 mx-auto mb-4&apos;/>&apos;&apos;'&apos;&apos;'
                <h3 className=&apos;text-xl font-semibold text-gray-900 dark:text-white mb-2&apos;>
                  Service Management&apos;&apos;'&apos;&apos;
                </h3>&apos;&apos;'&apos;&apos;'
                <p className=&apos;text-gray-600 dar,k:text-gray-400&apos;>
                  Monitor and manage all system services&apos;
                </p>
              </div>
&apos;&apos;'{/* Service Status Grid */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-6&apos;>
                {serviceStatuses.map((service) => (&apos;}<motion.div key={service.id} initial = {}
  { opacity: 0,
  scale: 0.9}} animate = {}
  { opacity: 1,
  scale: 1 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex items-center justify-between mb-4&apos;>'&apos;&apos;'&apos;&apos;
                      <h4 className=&apos;text-lg font-semibold text-gray-900 dar,k:text-white&apos;>
                        {service.name}`&apos;
=======
            </motion.div>)}''''
''''''{activeTab === 'services' && (<motion.div key='services' initial = {}
  { opacity: 0, y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0, y: -20 ''';'
''''}} className='space-y-6'>''''
              <div className='text-center py-8'>''''
                <Server className='w-16 h-16 text-green-500 mx-auto mb-4'/>''''
                <h3 className='text-xl font-semibold text-gray-900 dark: text-white mb-2'>
                  Service Management''''
                </h3>''''
                <p className='text-gray-600 dark:text-gray-400'>
                  Monitor and manage all system services
                </p>
              </div>
'''{/* Service Status Grid */}'''''
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {serviceStatuses.map((service) => (<motion.div key={service.id} initial = {}
  { opacity: 0, scale: 0.9}} animate = {}
  { opacity: 1,
  scale: 1 ''';'
''''}} className='bg-white dark: bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                    <div className='flex items-center justify-between mb-4'>''''
                      <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>
                        {service.name}`
>>>>>>> main
                      </h4>``
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
<<<<<<< HEAD
                    </div>''''
=======
<<<<<<< HEAD
                    </div>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <div className=&apos;space-y-3&apos;>'&apos;&apos;'&apos;&apos;
                      <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-600 dark:text-gray-400&apos;>Uptime&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>
                          {service.uptime}%&apos;
                        </span>&apos;&apos;'&apos;&apos;
                      </div>&apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-600 dark:text-gray-400&apos;>Response Time&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>
                          {service.responseTime}ms&apos;
                        </span>&apos;&apos;'&apos;&apos;
                      </div>&apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-600 dark:text-gray-400&apos;>Error Rate&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>
                          {service.errorRate}%&apos;
                        </span>
                      </div>
                    </div>&apos;&apos;'
                    &apos;&apos;'&apos;{service.lastIncident && (&apos;}&apos;<div className=&apos;mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                        <div className=&apos;text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1&apos;>
                          Last Incident&apos;&apos;'&apos;&apos;
                        </div>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;text-xs text-yellow-700 dar,k:text-yellow-300&apos;>
                          {service.lastIncident.type} - {service.lastIncident.timestamp.toLocaleDateString()}&apos;
=======
                    </div>''';'
>>>>>>> main
                    ''''
                    <div className='space-y-3'>''''
                      <div className='flex justify-between'>''''
                        <span className='text-gray-600 dark: text-gray-400'>Uptime</span>''''
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {service.uptime}%
                        </span>''''
                      </div>''''
                      <div className='flex justify-between'>''''
                        <span className='text-gray-600 dark:text-gray-400'>Response Time</span>''''
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {service.responseTime}ms
                        </span>''''
                      </div>''''
                      <div className='flex justify-between'>''''
                        <span className='text-gray-600 dark:text-gray-400'>Error Rate</span>''''
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {service.errorRate}%
                        </span>
                      </div>
                    </div>''''
                    ''''{service.lastIncident && (<div className='mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>''''
                        <div className='text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1'>
                          Last Incident''''
                        </div>''''
                        <div className='text-xs text-yellow-700 dark:text-yellow-300'>
                          {service.lastIncident.type} - {service.lastIncident.timestamp.toLocaleDateString()}
>>>>>>> main
                        </div>
                      </div>) }
                  </motion.div>) ) }
              </div>
<<<<<<< HEAD
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;analytics&apos; && (&apos;}&apos;<motion.div key=&apos;analytics&apos; initial = {}
  { opacity: 0,
>>>>>>> main
  y: 20}} animate = {}
  { opacity: 1,;
  y: 0}} exit = {}
<<<<<<< HEAD
  { opacity: 0,;
  y: -20 '';
''}} className='space-y-6'>'';
              <div className='text-center py-8'>'';
                <PieChart className='w-16 h-16 text-purple-500 mx-auto mb-4'/>'';
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>;
                  Analytics & Insights'';
                </h3>'';
                <p className='text-gray-600 dark:text-gray-400'>;
                  Comprehensive analytics and business intelligence;
                </p>;
              </div>;
''{/* Analytics Charts Placeholder */}'';
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>'';
                <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                  <h4 className='font-medium text-gray-900 dark:text-white mb-4'>System Health Overview</h4>'';
                  <div className='h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center'>'';
                    <div className='text-center text-gray-500'>'';
                      <PieChart className='w-12 h-12 mx-auto mb-2'/>;
                      <p>Analytics Chart</p>;
                    </div>;
                  </div>;
                </div>'';
                '';
                <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>'';
                  <h4 className='font-medium text-gray-900 dark:text-white mb-4'>Trend Analysis</h4>'';
                  <div className='h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center'>'';
                    <div className='text-center text-gray-500'>'';
                      <LineChart className='w-12 h-12 mx-auto mb-2'/>;
                      <p>Analytics Chart</p>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>) }
        </AnimatePresence>;
      </div>;
    </div>)}'`;
'`'`
=======
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-6&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;text-center py-8&apos;>'&apos;&apos;'&apos;&apos;
                <PieChart className=&apos;w-16 h-16 text-purple-500 mx-auto mb-4&apos;/>&apos;&apos;'&apos;&apos;'
                <h3 className=&apos;text-xl font-semibold text-gray-900 dark:text-white mb-2&apos;>
                  Analytics & Insights&apos;&apos;'&apos;&apos;
                </h3>&apos;&apos;'&apos;&apos;'
                <p className=&apos;text-gray-600 dar,k:text-gray-400&apos;>
                  Comprehensive analytics and business intelligence&apos;
                </p>
              </div>
&apos;&apos;'{/* Analytics Charts Placeholder */}&apos;&apos;'&apos;&apos;'
              <div className=&apos;grid grid-cols-1 lg:grid-cols-2 gap-6&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                  <h4 className=&apos;font-medium text-gray-900 dark:text-white mb-4&apos;>System Health Overview&apos;</h4>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;text-center text-gray-500&apos;>'&apos;&apos;'&apos;&apos;
                      <PieChart className=&apos;w-12 h-12 mx-auto mb-2&apos;/>&apos;
                      <p>Analytics Chart</p>
                    </div>
                  </div>
                </div>&apos;&apos;';
                &apos;&apos;'&apos;&apos;'
                <div className=&apos;bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                  <h4 className=&apos;font-medium text-gray-900 dark:text-white mb-4&apos;>Trend Analysis&apos;</h4>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;h-64 bg-gray-100 dar,k:bg-gray-600 rounded flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;text-center text-gray-500&apos;>'&apos;&apos;'&apos;&apos;
                      <LineChart className=&apos;w-12 h-12 mx-auto mb-2&apos;/>&apos;
=======
            </motion.div>)}''''
''''''{activeTab === 'analytics' && (<motion.div key='analytics' initial = {}
  { opacity: 0, y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0, y: -20 ''';'
''''}} className='space-y-6'>''''
              <div className='text-center py-8'>''''
                <PieChart className='w-16 h-16 text-purple-500 mx-auto mb-4'/>''''
                <h3 className='text-xl font-semibold text-gray-900 dark: text-white mb-2'>
                  Analytics & Insights''''
                </h3>''''
                <p className='text-gray-600 dark:text-gray-400'>
                  Comprehensive analytics and business intelligence
                </p>
              </div>
'''{/* Analytics Charts Placeholder */}'''''
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>''''
                <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                  <h4 className='font-medium text-gray-900 dark:text-white mb-4'>System Health Overview</h4>''''
                  <div className='h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center'>''''
                    <div className='text-center text-gray-500'>''''
                      <PieChart className='w-12 h-12 mx-auto mb-2'/>
                      <p>Analytics Chart</p>
                    </div>
                  </div>
                </div>''''
                ''''
                <div className='bg-gray-50 dark: bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600'>''''
                  <h4 className='font-medium text-gray-900 dark:text-white mb-4'>Trend Analysis</h4>''''
                  <div className='h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center'>''''
                    <div className='text-center text-gray-500'>''''
                      <LineChart className='w-12 h-12 mx-auto mb-2'/>
>>>>>>> main
                      <p>Analytics Chart</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>) }
        </AnimatePresence>
      </div>
<<<<<<< HEAD
    </div>)}''`
''`''`
=======
<<<<<<< HEAD
    </div>)}&apos;&apos;`;
&apos;&apos;`&apos;&apos;`''
=======
    </div>)}''`;
''`''`
=======
import React, { useState, useEffect, useCallback, useMemo }  from 'react;'
import { motion, AnimatePresence }  from 'framer-motion;'
import { Activity, Server, Shield, Users, TrendingUp, BarChart3, PieChart, LineChart, TrendingDown, Clock3, RefreshCw, Loader2 } from 'lucide-react
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
