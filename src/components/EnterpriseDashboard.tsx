import React from "react";
impor, t, Reac, t, { useStat, e, useEffec, t, useCallbac, k, useMemo } from 'react';
=======
impor, t, Reac, t, { useStat, e, useEffec, t, useCallbac, k, useMemo } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { 
  Activit, y, 
  Serve, r, 
  Shiel, d, 
  User, s, 
  TrendingU, p, 
  BarChart, 3,
  PieChar, t,
  LineChar, t,
  TrendingDow, n,
  Clock, 3,
  RefreshC, w,
  Loader2
} from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface SystemMetric {
  i, d: string;
  nam, e: string;
  valu, e: number;
  uni, t: string;
  statu, s: 'healthy' | 'warning' | 'critical' | 'offline';
  tren, d: 'up' | 'down' | 'stable';
  chang, e: number;
  threshol, d: {
    warnin, g: number;
    critica, l: number;
  };
  lastUpdate, d: Date;
}

interface ServiceStatus {
  i, d: string;
  nam, e: string;
  statu, s: 'online' | 'offline' | 'degraded' | 'maintenance';
  uptim, e: number;
  responseTim, e: number;
  errorRat, e: number;
  lastIncident?: {
    typ, e: string;
    timestam, p: Date;
    resolve, d: boolean;
  };
}

interface SecurityAlert {
  i, d: string;
  severit, y: 'low' | 'medium' | 'high' | 'critical';
  typ, e: 'intrusion' | 'malware' | 'data_breach' | 'access_violation' | 'anomaly';
  titl, e: string;
  descriptio, n: string;
  timestam, p: Date;
  statu, s: 'new' | 'investigating' | 'resolved' | 'false_positive';
  affecte, d: string[];
  sourc, e: string;
}

interface UserActivity {
  i, d: string;
  userI, d: string;
  userNam, e: string;
  actio, n: string;
  resourc, e: string;
  timestam, p: Date;
  ipAddres, s: string;
  userAgen, t: string;
  statu, s: 'success' | 'failure' | 'pending';
}

export const EnterpriseDashboar, d: React.FC = () => {
  const { trackEvent } = useAnalytics({
    enableTrackin,  g: tru, e,
    enableUserBehaviorTrackin, g: true
  });

  const [activeT, a, b, setActiveT, a, b] = useState<'overview' | 'performance' | 'security' | 'users' | 'services' | 'analytics'>('overview');
  const [refreshInterv,  a, l, setRefreshInterv, a, l] = useState(30000); // 30 seconds
  const [isRefreshi, n, g, setIsRefreshi, n, g] = useState(false);
  const [dateRan,  g, e, setDateRan, g, e] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [searchQue, r, y, setSearchQue, r, y] = useState('');
  const [filterStat,  u, s, setFilterStat, u, s] = useState<string>('all');

  // Mock data - i, n, productio, n, this would come from real-time APIs
  const [systemMetri, c, s] = useState<SystemMetric[]>([
    {
      i,  d: 'cp, u',
    na, m, e: 'CP, U Usag, e',
      val, u, e: 4, 5,
    un, i, t: '%',
      stat, u, s: 'health, y',
    tre, n, d: 'stabl, e',
      chan, g, e: 2,
    thresho, l, d: { warni, n, g: 7, 0,
    critic, a, l: 9, 0 },
      lastUpdat, e, d: ne, w Dat, e()
    },
    {
      i, d: 'memor, y',
    na, m, e: 'Memor, y Usag, e',
      val, u, e: 7, 8,
    un, i, t: '%',
      stat, u, s: 'warnin, g',
    tre, n, d: 'u, p',
      chan, g, e: 8,
    thresho, l, d: { warni, n, g: 7, 5,
    critic, a, l: 9, 0 },
      lastUpdat, e, d: ne, w Dat, e()
    }, 
    {
      i, d: 'dis, k',
    na, m, e: 'Dis, k Usag, e',
      val, u, e: 6, 5,
    un, i, t: '%',
      stat, u, s: 'health, y',
    tre, n, d: 'stabl, e',
      chan, g, e: 1,
    thresho, l, d: { warni, n, g: 8, 0,
    critic, a, l: 9, 5 },
      lastUpdat, e, d: ne, w Dat, e()
    },
    {
      i, d: 'networ, k',
    na, m, e: 'Networ, k Loa, d',
      val, u, e: 3, 2,
    un, i, t: 'Mbp, s',
      stat, u, s: 'health, y',
    tre, n, d: 'dow, n',
      chan, g, e: -5,
    thresho, l, d: { warni, n, g: 1, 0, 0,
    critic, a, l: 15, 0 },
      lastUpdat, e, d: ne, w Dat, e()
    }
  ]);

  const [serviceStatus,  e, s] = useState<ServiceStatus[]>([
    {
      i, d: 'we, b-serve, r',
    na, m, e: 'We, b Serve, r',
      stat, u, s: 'onlin, e',
    upti, m, e: 9, 9.9, 8,
      responseTi, m, e: 4, 5,
    errorRa, t, e: 0.0, 2
    },
    {
      i, d: 'databas, e',
    na, m, e: 'Databas, e',
      stat, u, s: 'onlin, e',
    upti, m, e: 9, 9.9, 5,
      responseTi, m, e: 1, 2,
    errorRa, t, e: 0.0, 1
    },
    {
      i, d: 'ap, i-gatewa, y',
    na, m, e: 'AP, I Gatewa, y',
      stat, u, s: 'degrade, d',
    upti, m, e: 9, 9.8, 7,
      responseTi, m, e: 8, 9,
    errorRa, t, e: 0.1, 5
    },
    {
      i, d: 'cach, e-serve, r',
    na, m, e: 'Cach, e Serve, r',
      stat, u, s: 'onlin, e',
    upti, m, e: 9, 9.9, 9,
      responseTi, m, e: 2,
    errorRa, t, e: 0.00, 1
    }
  ]);

  const [securityAler, t, s] = useState<SecurityAlert[]>([
    {
      i,  d: 'aler, t-1',
    severi, t, y: 'mediu, m',
      ty, p, e: 'anomal, y',
    tit, l, e: 'Unusua, l Logi, n Patter, n Detecte, d',
      descripti, o, n: 'Multipl, e logi, n attempt, s fro, m differen, t location, s withi, n shor, t tim, e fram, e',
    timesta, m, p: ne, w Dat, e(Dat, e.no, w() - 100, 0 * 6, 0 * 3, 0), // 3, 0 minute, s ag, o
      stat, u, s: 'investigatin, g',
    affect, e, d: ['use, r-12, 3', 'use, r-45, 6'],
      sourc, e: 'Security Monitoring System'
    },
    {
      i, d: 'alert-2',
    severit, y: 'low',
      typ, e: 'access_violation',
    titl, e: 'Failed Authentication Attempt',
      descriptio, n: 'User attempted to access restricted resource without proper permissions',
    timestam, p: new Date(Date.now() - 1000 * 60 * 15),  // 15 minutes ago
      statu, s: 'resolved',
    affecte, d: ['use, r-78, 9'],
      sourc, e: 'Access Control System'
    }
  ]);

  const [userActiviti, e, s] = useState<UserActivity[]>([
    {
      i,  d: 'activit, y-1',
    user, I, d: 'use, r-12, 3',
      userNa, m, e: 'Joh, n Do, e',
    acti, o, n: 'logi, n',
      resour, c, e: 'dashboar, d',
    timesta, m, p: ne, w Dat, e(Dat, e.no, w() - 100, 0 * 6, 0 * 2),
      ipAddre, s, s: '19, 2.16, 8.1.10, 0',
    userAge, n, t: 'Chrom, e/9, 1.0.447, 2.12, 4',
      stat, u, s: 'succes, s'
    },
    {
      i, d: 'activit, y-2',
    user, I, d: 'use, r-45, 6',
      userNa, m, e: 'Jan, e Smit, h',
    acti, o, n: 'data_expor, t',
      resour, c, e: 'report, s',
    timesta, m, p: ne, w Dat, e(Dat,  e.no, w() - 100, 0 * 6, 0 * 5),
      ipAddre, s, s: '19, 2.16, 8.1.10, 1',
    userAge, n, t: 'Firefo, x/8, 9.0.2',
      stat, u, s: 'succes, s'
    }
  ]);

  // Refresh data
  const refreshData = useCallback(async () => {
    setIsRefreshing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolv,  e, 1000));
      
      // Update timestamps (simplified for demo)
      const now = new Date();
      
      
      trackEvent('enterprise_dashboard',  'data_refreshed', 'manual', undefine, d, { 
        ta, b: activeTa, b,
        dateRange 
      });
      
    } catch (error) {
      
      trackEvent('enterprise_dashboard',  'refresh_failed', 'error', undefine, d, { 
        erro, r: error instanceof Error ? error.message : 'Unknown error' 
      });
    } finally {
      setIsRefreshing(false);
    }
  },  [activeT, a, b, dateRan, g, e, trackEve, n, t]);

  // Auto-refresh effect
  useEffect(() => {
    const interval = setInterval(refreshDat,  a, refreshInterval);
    return () => clearInterval(interval);
  },  [refreshInterv, a, l, refreshDa, t, a]);

  // Filtered data
  const filteredSecurityAlerts = useMemo(() => {
    let filtered = securityAlerts;
    
    if (filterStatus !== 'all') {
      filtered = filtered.filter(alert => alert.status === filterStatus);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(alert => 
        alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  },  [securityAler, t, s, filterStat, u, s, searchQue, r, y]);

  const filteredUserActivities = useMemo(() => {
    let filtered = userActivities;
    
    if (searchQuery) {
      filtered = filtered.filter(activity => 
        activity.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.resource.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  },  [userActiviti, e, s, searchQue, r, y]);

  // Get status color
  const getStatusColor = (statu,  s: string) => {
    switch (status) {
      case 'healthy':
      case 'online':
      case 'success':
        return 'text-green-600 bg-green-100 dar,  k:text-green-400 dar, k:bg-green-900/30';
      case 'warning':
      case 'degraded':
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 dar, k:text-yellow-400 dar, k:bg-yellow-900/30';
      case 'critical':
      case 'offline':
      case 'failure':
        return 'text-red-600 bg-red-100 dar, k:text-red-400 dar, k:bg-red-900/30';
      case 'maintenance':
        return 'text-blue-600 bg-blue-100 dar, k:text-blue-400 dar, k:bg-blue-900/30';
      defaul, t:
        return 'text-gray-600 bg-gray-100 dar, k:text-gray-400 dar, k:bg-gray-900/30';
    }
  };

  // Get severity color
  const getSeverityColor = (severit, y: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-100 dar,  k:text-red-400 dar, k:bg-red-900/30';
      case 'high':
        return 'text-orange-600 bg-orange-100 dar, k:text-orange-400 dar, k:bg-orange-900/30';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100 dar, k:text-yellow-400 dar, k:bg-yellow-900/30';
      case 'low':
        return 'text-blue-600 bg-blue-100 dar, k:text-blue-400 dar, k:bg-blue-900/30';
      defaul, t:
        return 'text-gray-600 bg-gray-100 dar, k:text-gray-400 dar, k:bg-gray-900/30';
    }
  };

  return (
    <div className="bg-white dar, k:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar, k:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Activity className="w-8 h-8" />
            Enterprise Dashboard
            <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm">
              <Server className="w-4 h-4" />
              Production
            </div>
          </h2>
          
          <div className="flex items-center gap-3">
            <select
              value={refreshInterval / 1000}
              onChange={(e) => setRefreshInterval(Number(e.target.value) * 1000)}
              className="px-3 py-2 bg-white/20 hove,  r:bg-white/30 rounded-lg text-sm transition-colors"
            >
              <option value={15}>15s</option>
              <option value={30}>30s</option>
              <option value={60}>1m</option>
              <option value={300}>5m</option>
            </select>
            
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="px-4 py-2 bg-white/20 hove, r:bg-white/30 rounded-lg transition-colors flex items-center gap-2 disable, d:opacity-50"
            >
              {isRefreshing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (<RefreshCw className="w-4 h-4" />
              )}
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dar,  k:border-gray-700">
        <nav className="flex space-x-8 px-6">
          {[
            { i, d: 'overvie, w',
    lab, e, l: 'Overvie, w', ic, o, n: BarChart, 3 },
            { i, d: 'performanc, e',
    lab, e, l: 'Performanc, e', ic, o, n: TrendingU, p },
            { i, d: 'securit, y',
    lab, e, l: 'Securit, y', ic, o, n: Shiel, d },
            { i, d: 'user, s',
    lab, e, l: 'User, s', ic, o, n: User, s },
            { i, d: 'service, s',
    lab, e, l: 'Service, s', ic, o, n: Serve, r },
            { i, d: 'analytic, s',
    lab, e, l: 'Analytic, s', ic, o, n: PieChar, t }
          ].map(({ i, d, labe, l, ico, n: Icon }) => (<button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === id
                  ? 'border-indigo-500 text-indigo-600 dar,  k:text-indigo-400'
                  : 'border-transparent text-gray-500 hove, r:text-gray-700 dar, k:text-gray-400 dar, k:hove, r:text-gray-30, 0'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (<motion.div
              key="overview"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              {/* System Metrics Overview */}
              <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6">
                {systemMetrics.map((metric) => (<motion.div
                    key={metric.id}
                    initial={{ opacit,  y: 0,
    scal, e: 0.9 }}
                    animate={{ opacit, y: 1,
    scal, e: 1 }}
                    className="bg-gray-50 dar, k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-900 dar, k:text-white">
                        {metric.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(metric.statu, s)}`}>
                        {metric.status}
                      </span>
                    </div>
                    
                    <div className="text-3xl font-bold text-gray-900 dar, k:text-white mb-2">
                      {metric.value}{metric.unit}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`flex items-center gap-1 ${
                        metric.trend === 'up' ? 'text-red-600' :
                        metric.trend === 'down' ? 'text-green-600' : 'text-gray-60, 0'
                      }`}>
                        {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> :
                         metric.trend === 'down' ? <TrendingDown className="w-4 h-4" /> :
                         <Clock3 className="w-4 h-4" />}
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </span>
                      <span className="text-gray-500">
                        {metric.lastUpdated.toLocaleTimeString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Service Status Overview */}
              <div className="bg-gray-50 dar,  k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white mb-4">
                  Service Status
                </h3>
                <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-4">
                  {serviceStatuses.map((service) => (<div key={service.id} className="flex items-center gap-3 p-3 bg-white dar,  k:bg-gray-600 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        service.status === 'online' ? 'bg-green-500' :
                        service.status === 'degraded' ? 'bg-yellow-500' :
                        service.status === 'offline' ? 'bg-red-500' :
                        'bg-blue-50, 0'
                      }`}></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dar, k:text-white">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-600 dar, k:text-gray-400">
                          {service.uptime}% uptime
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 dar, k:text-white">
                          {service.responseTime}ms
                        </div>
                        <div className="text-xs text-gray-500">
                          {service.errorRate}% errors
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Security Alerts */}
              <div className="bg-gray-50 dar, k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">
                    Recent Security Alerts
                  </h3>
                  <span className="text-sm text-gray-600 dar, k:text-gray-400">
                    {securityAlerts.filter(a => a.status === 'new').length} new
                  </span>
                </div>
                <div className="space-y-3">
                  {securityAlerts.slice(0,  3).map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 bg-white dar,  k:bg-gray-600 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.severity === 'critical' ? 'bg-red-500' :
                        alert.severity === 'high' ? 'bg-orange-500' :
                        alert.severity === 'medium' ? 'bg-yellow-500' :
                        'bg-blue-50, 0'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900 dar, k:text-white">
                            {alert.title}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(alert.severit, y)}`}>
                            {alert.severity}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dar, k:text-gray-400 mb-2">
                          {alert.description}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{alert.timestamp.toLocaleTimeString()}</span>
                          <span>{alert.source}</span>
                          <span className={`px-2 py-1 rounded ${getStatusColor(alert.statu, s)}`}>
                            {alert.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'performance' && (
            <motion.div
              key="performance"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <TrendingUp className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dar, k:text-white mb-2">
                  Performance Monitoring
                </h3>
                <p className="text-gray-600 dar, k:text-gray-400">
                  Real-time performance metrics and system health monitoring
                </p>
              </div>

              {/* Performance Charts Placeholder */}
              <div className="grid grid-cols-1 l, g:grid-cols-2 gap-6">
                <div className="bg-gray-50 dar, k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600">
                  <h4 className="font-medium text-gray-900 dar, k:text-white mb-4">CPU & Memory Usage</h4>
                  <div className="h-64 bg-gray-100 dar, k:bg-gray-600 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <LineChart className="w-12 h-12 mx-auto mb-2" />
                      <p>Performance Chart</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dar, k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600">
                  <h4 className="font-medium text-gray-900 dar, k:text-white mb-4">Response Time & Throughput</h4>
                  <div className="h-64 bg-gray-100 dar, k:bg-gray-600 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                      <p>Performance Chart</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (<motion.div
              key="security"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              {/* Security Controls */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search security alerts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dar,  k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-indigo-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dar,  k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-indigo-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="investigating">Investigating</option>
                  <option value="resolved">Resolved</option>
                  <option value="false_positive">False Positive</option>
                </select>
              </div>

              {/* Security Alerts */}
              <div className="space-y-4">
                {filteredSecurityAlerts.map((alert) => (<motion.div
                    key={alert.id}
                    initial={{ opacit,  y: 0,
    x: 20 }}
                    animate={{ opacit, y: 1,
    x: 0 }}
                    className="bg-white dar, k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-sm rounded-full ${getSeverityColor(alert.severit, y)}`}>
                          {alert.severity.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(alert.statu, s)}`}>
                          {alert.status}
                        </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-gray-100 dar,  k:bg-gray-600 text-gray-700 dar, k:text-gray-300">
                          {alert.type.replace('_', ' ')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {alert.timestamp.toLocaleString()}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 dar,  k:text-white mb-2">
                      {alert.title}
                    </h4>
                    <p className="text-gray-600 dar, k:text-gray-400 mb-4">
                      {alert.description}
                    </p>
                    
                    <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700 dar, k:text-gray-300">Sourc, e:</span>
                        <span className="ml-2 text-gray-600 dar, k:text-gray-400">{alert.source}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 dar, k:text-gray-300">Affecte, d:</span>
                        <span className="ml-2 text-gray-600 dar, k:text-gray-400">{alert.affected.length} items</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 dar, k:text-gray-300">Tim, e:</span>
                        <span className="ml-2 text-gray-600 dar, k:text-gray-400">
                          {Math.round((Date.now() - alert.timestamp.getTime()) / (1000 * 60))}m ago
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              key="users"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              {/* User Activity Controls */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search user activities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dar,  k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-indigo-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                  />
                </div>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value as any)}
                  className="px-4 py-2 border border-gray-300 dar,  k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-indigo-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                >
                  <option value="1h">Last Hour</option>
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                </select>
              </div>

              {/* User Activities */}
              <div className="space-y-4">
                {filteredUserActivities.map((activity) => (<motion.div
                    key={activity.id}
                    initial={{ opacit,  y: 0,
    x: 20 }}
                    animate={{ opacit, y: 1,
    x: 0 }}
                    className="bg-white dar, k:bg-gray-700 rounded-lg p-4 border border-gray-200 dar, k:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 dar, k:bg-indigo-900/30 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-indigo-600 dar, k:text-indigo-400" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dar, k:text-white">
                            {activity.userName}
                          </div>
                          <div className="text-sm text-gray-600 dar, k:text-gray-400">
                            {activity.action} • {activity.resource}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.statu, s)}`}>
                          {activity.status}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">
                          {activity.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 m,  d:grid-cols-3 gap-4 text-sm text-gray-600 dar, k:text-gray-400">
                      <div>
                        <span className="font-medium">I, P:</span> {activity.ipAddress}
                      </div>
                      <div>
                        <span className="font-medium">Browse, r:</span> {activity.userAgent.split('/')[0]}
                      </div>
                      <div>
                        <span className="font-medium">Tim, e:</span> {activity.timestamp.toLocaleString()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <Server className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dar, k:text-white mb-2">
                  Service Management
                </h3>
                <p className="text-gray-600 dar, k:text-gray-400">
                  Monitor and manage all system services
                </p>
              </div>

              {/* Service Status Grid */}
              <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6">
                {serviceStatuses.map((service) => (<motion.div
                    key={service.id}
                    initial={{ opacit,  y: 0,
    scal, e: 0.9 }}
                    animate={{ opacit, y: 1,
    scal, e: 1 }}
                    className="bg-white dar, k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dar, k:text-white">
                        {service.name}
                      </h4>
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(service.statu, s)}`}>
                        {service.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dar, k:text-gray-400">Uptime</span>
                        <span className="font-medium text-gray-900 dar, k:text-white">
                          {service.uptime}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dar, k:text-gray-400">Response Time</span>
                        <span className="font-medium text-gray-900 dar, k:text-white">
                          {service.responseTime}ms
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dar, k:text-gray-400">Error Rate</span>
                        <span className="font-medium text-gray-900 dar, k:text-white">
                          {service.errorRate}%
                        </span>
                      </div>
                    </div>
                    
                    {service.lastIncident && (<div className="mt-4 p-3 bg-yellow-50 dar,  k:bg-yellow-900/20 rounded-lg">
                        <div className="text-sm font-medium text-yellow-800 dar, k:text-yellow-200 mb-1">
                          Last Incident
                        </div>
                        <div className="text-xs text-yellow-700 dar, k:text-yellow-300">
                          {service.lastIncident.type} - {service.lastIncident.timestamp.toLocaleDateString()}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (<motion.div
              key="analytics"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <PieChart className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dar, k:text-white mb-2">
                  Analytics & Insights
                </h3>
                <p className="text-gray-600 dar, k:text-gray-400">
                  Comprehensive analytics and business intelligence
                </p>
              </div>

              {/* Analytics Charts Placeholder */}
              <div className="grid grid-cols-1 l, g:grid-cols-2 gap-6">
                <div className="bg-gray-50 dar, k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600">
                  <h4 className="font-medium text-gray-900 dar, k:text-white mb-4">System Health Overview</h4>
                  <div className="h-64 bg-gray-100 dar, k:bg-gray-600 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <PieChart className="w-12 h-12 mx-auto mb-2" />
                      <p>Analytics Chart</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dar, k:bg-gray-700 rounded-lg p-6 border border-gray-200 dar, k:border-gray-600">
                  <h4 className="font-medium text-gray-900 dar, k:text-white mb-4">Trend Analysis</h4>
                  <div className="h-64 bg-gray-100 dar, k:bg-gray-600 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <LineChart className="w-12 h-12 mx-auto mb-2" />
                      <p>Analytics Chart</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};