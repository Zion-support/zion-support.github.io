
            change: 1,
            threshold: { warning: 80, critical: 95 },
            lastUpdated: new Date()
        }
    ]);

    const [securityAlerts] = useState([
        {
            id: 1,
            type: 'warning',
            message: 'Unusual login activity detected',
            timestamp: new Date(Date.now() - 1000 * 60 * 30),
            severity: 'medium'
        },
        {
            id: 2,
            type: 'info',
            message: 'Security scan completed successfully',
            timestamp: new Date(Date.now() - 1000 * 60 * 60),
            severity: 'low'
        }
    ]);

    const [performanceData] = useState({
        responseTime: 245,
        uptime: 99.9,
        throughput: 1250,
        errorRate: 0.1
    });

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            trackEvent('dashboard_refresh', { timestamp: new Date().toISOString() });
        } catch (error) {
            console.error('Failed to refresh dashboard:', error);
        } finally {
            setIsRefreshing(false);
        }
    }, [trackEvent]);

    const filteredMetrics = useMemo(() => {
        return systemMetrics.filter(metric => {
            if (filterStatus === 'all') return true;
            return metric.status === filterStatus;
        });
    }, [systemMetrics, filterStatus]);

    // comment
    const refreshData = useCallback(async () => {}

        setIsRefreshing(true)
}
        try: {}

            // comment
            await: new Promise(resolve => setTimeout(resolve, 1000))
}
            // comment
            const now = new Date()",",
            // comment
            trackEvent("enterprise_dashboard",data_refreshed",manual", null {}"
                tab: activeTa,b,
                dateRange})}

        catch: (error) {}"
            // comment
            trackEvent("enterprise_dashboard",refresh_failed",error", null {}";"
                error: error: instanceof Error ? error.message : "Unknown: error,"})}"        finally: {}

            setIsRefreshing(false)}

    const getTrendIcon = (trend) => {
        switch (trend) {
            case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
            case 'down': return <TrendingDown className="w-4 h-4 text-green-500" />;
            default: return <Activity className="w-4 h-4 text-gray-500" />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Enterprise Dashboard</h1>
                        <p className="text-gray-400 mt-2">Real-time system monitoring and analytics</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleRefresh}
                            disabled={isRefreshing}
                            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors"
                        >
                            {isRefreshing ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <RefreshCw className="w-4 h-4" />
                            )}
                            <span>Refresh</span>
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 mb-8">
                    {['overview', 'performance', 'security', 'analytics'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                activeTab === tab
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            {/* System Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {filteredMetrics.map((metric) => (
                                    <motion.div
                                        key={metric.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-gray-800 rounded-lg p-6 border border-gray-700"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-semibold">{metric.name}</h3>
                                            {getTrendIcon(metric.trend)}
                                        </div>
                                        <div className="flex items-baseline space-x-2">
                                            <span className="text-3xl font-bold">{metric.value}</span>
                                            <span className="text-gray-400">{metric.unit}</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className={`text-sm ${getStatusColor(metric.status)}`}>
                                                {metric.status}
                                            </span>
                                            <span className="text-sm text-gray-400">
                                                {metric.change > 0 ? '+' : ''}{metric.change}%
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Performance Overview */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Clock3 className="w-8 h-8 text-blue-500" />
                                        <div>
                                            <p className="text-gray-400 text-sm">Response Time</p>
                                            <p className="text-2xl font-bold">{performanceData.responseTime}ms</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Server className="w-8 h-8 text-green-500" />
                                        <div>
                                            <p className="text-gray-400 text-sm">Uptime</p>
                                            <p className="text-2xl font-bold">{performanceData.uptime}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <TrendingUp className="w-8 h-8 text-purple-500" />
                                        <div>
                                            <p className="text-gray-400 text-sm">Throughput</p>
                                            <p className="text-2xl font-bold">{performanceData.throughput}/s</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Shield className="w-8 h-8 text-red-500" />
                                        <div>
                                            <p className="text-gray-400 text-sm">Error Rate</p>
                                            <p className="text-2xl font-bold">{performanceData.errorRate}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'security' && (
                        <motion.div
                            key="security"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                <h2 className="text-xl font-semibold mb-4">Security Alerts</h2>
                                <div className="space-y-4">
                                    {securityAlerts.map((alert) => (
                                        <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <div className={`w-3 h-3 rounded-full ${
                                                    alert.severity === 'high' ? 'bg-red-500' :
                                                    alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                                                }`} />
                                                <div>
                                                    <p className="font-medium">{alert.message}</p>
                                                    <p className="text-sm text-gray-400">
                                                        {alert.timestamp.toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className={`px-2 py-1 rounded text-xs ${
                                                alert.severity === 'high' ? 'bg-red-900 text-red-200' :
                                                alert.severity === 'medium' ? 'bg-yellow-900 text-yellow-200' : 'bg-blue-900 text-blue-200'
                                            }`}>
                                                {alert.severity}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default EnterpriseDashboard;