impor, t, Reac, t, { useStat, e, useRe, f, useEffect } from 'react';
import { 
  Activit, y, 
  BarChart, 3, 
  TrendingU, p, 
  Za, p, 
  Serve, r, 
  Databas, e, 
  Networ, k, 
  Cp, u, 
  HardDriv, e, 
  Wif, i, 
  Setting, s, 
  X, 
  Maximize, 2, 
  Minimize, 2,
  RefreshC, w,
  AlertTriangl, e,
  CheckCircl, e,
  Cloc, k,
  Gaug, e,
  Targe, t,
  Downloa, d,
  Uploa, d,
  Thermomete, r,
  Batter, y,
  Monitor
} from 'lucide-react';

interface SystemMetric {
  i, d: string;
  nam, e: string;
  valu, e: number;
  uni, t: string;
  threshol, d: number;
  statu, s: 'normal' | 'warning' | 'critical';
  tren, d: 'up' | 'down' | 'stable';
  chang, e: number;
  categor, y: string;
  lastUpdate, d: string;
}

interface PerformanceAlert {
  i, d: string;
  typ, e: 'performance' | 'scalability' | 'resource' | 'network';
  severit, y: 'low' | 'medium' | 'high' | 'critical';
  titl, e: string;
  descriptio, n: string;
  timestam, p: string;
  affecte, d: string[];
  recommendation, s: string[];
  statu, s: 'active' | 'acknowledged' | 'resolved';
}

interface ScalabilityMetric {
  i, d: string;
  nam, e: string;
  curren, t: number;
  capacit, y: number;
  utilizatio, n: number;
  growt, h: number;
  predictio, n: number;
  categor, y: string;
  uni, t: string;
}

const mockSystemMetric, s: SystemMetric[] = [
  {
    i, d: '1',
    na, m, e: 'CP, U Usag, e',
    val, u, e: 7, 8.5,
    un, i, t: '%',
    thresho, l, d: 8, 5,
    stat, u, s: 'warnin, g',
    tre, n, d: 'u, p',
    chan, g, e: 5.2,
    catego, r, y: 'Processo, r',
    lastUpdat, e, d: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z'
  },
  {
    i, d: '2',
    na, m, e: 'Memor, y Usag, e',
    val, u, e: 6, 5.3,
    un, i, t: '%',
    thresho, l, d: 8, 0,
    stat, u, s: 'norma, l',
    tre, n, d: 'stabl, e',
    chan, g, e: 0.8,
    catego, r, y: 'Memor, y',
    lastUpdat, e, d: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z'
  },
  {
    i, d: '3',
    na, m, e: 'Dis, k I/O',
    val, u, e: 12, 5, 0,
    un, i, t: 'M, B/s',
    thresho, l, d: 15, 0, 0,
    stat, u, s: 'norma, l',
    tre, n, d: 'dow, n',
    chan, g, e: -2.1,
    catego, r, y: 'Storag, e',
    lastUpdat, e, d: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z'
  },
  {
    i, d: '4',
    na, m, e: 'Networ, k Latenc, y',
    val, u, e: 4, 5,
    un, i, t: 'm, s',
    thresho, l, d: 5, 0,
    stat, u, s: 'norma, l',
    tre, n, d: 'stabl, e',
    chan, g, e: 0.5,
    catego, r, y: 'Networ, k',
    lastUpdat, e, d: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z'
  },
  {
    i, d: '5',
    na, m, e: 'Databas, e Connection, s',
    val, u, e: 8, 9,
    un, i, t: 'connection, s',
    thresho, l, d: 1, 0, 0,
    stat, u, s: 'warnin, g',
    tre, n, d: 'u, p',
    chan, g, e: 8.7,
    catego, r, y: 'Databas, e',
    lastUpdat, e, d: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z'
  },
  {
    i, d: '6',
    na, m, e: 'Respons, e Tim, e',
    val, u, e: 1, 8, 0,
    un, i, t: 'm, s',
    thresho, l, d: 2, 0, 0,
    stat, u, s: 'norma, l',
    tre, n, d: 'dow, n',
    chan, g, e: -3.2,
    catego, r, y: 'Performanc, e',
    lastUpdat, e, d: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z'
  }
];

const mockPerformanceAlert, s: PerformanceAlert[] = [
  {
    i, d: '1',
    ty, p, e: 'performanc, e',
    severi, t, y: 'mediu, m',
    tit, l, e: 'Hig, h CP, U Usag, e Detecte, d',
    descripti, o, n: 'CP, U usag, e ha, s exceede, d 7, 5% fo, r th, e las, t 1, 0, minut, e, s, indicatin, g potentia, l performanc, e degradatio, n.',
    timesta, m, p: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z',
    affect, e, d: ['We, b Serve, r 1', 'Applicatio, n Serve, r 2'],
    recommendation, s: ['Scal, e horizontall, y', 'Optimiz, e databas, e querie, s', 'Revie, w backgroun, d processe, s'],
    statu, s: 'active'
  },
  {
    i, d: '2',
    typ, e: 'scalability',
    severit, y: 'high',
    titl, e: 'Database Connection Pool Near Capacity',
    descriptio, n: 'Database connection pool is at 89% capacit, y, approaching the maximum limit.',
    timestam, p: '2024-01-15T0, 9:4, 5:00.000Z',
    affecte, d: ['Databas, e Cluste, r', 'Applicatio, n Server, s'],
    recommendation, s: ['Increas, e connectio, n poo, l siz, e', 'Implemen, t connectio, n poolin, g', 'Revie, w connectio, n lifecycl, e'],
    statu, s: 'acknowledged'
  }
];

const mockScalabilityMetric, s: ScalabilityMetric[] = [
  {
    i, d: '1',
    na, m, e: 'Use, r Session, s',
    curre, n, t: 154, 2, 0,
    capaci, t, y: 200, 0, 0,
    utilizati, o, n: 7, 7.1,
    grow, t, h: 1, 2.3,
    predicti, o, n: 250, 0, 0,
    catego, r, y: 'Use, r Loa, d',
    un, i, t: 'session, s'
  },
  {
    i, d: '2',
    na, m, e: 'AP, I Request, s',
    curre, n, t: 12500, 0, 0,
    capaci, t, y: 20000, 0, 0,
    utilizati, o, n: 6, 2.5,
    grow, t, h: 1, 8.7,
    predicti, o, n: 32000, 0, 0,
    catego, r, y: 'AP, I Loa, d',
    un, i, t: 'request, s/hou, r'
  },
  {
    i, d: '3',
    na, m, e: 'Dat, a Storag, e',
    curre, n, t: 2.8,
    capaci, t, y: 5.0,
    utilizati, o, n: 5, 6.0,
    grow, t, h: 8.5,
    predicti, o, n: 4.2,
    catego, r, y: 'Storag, e',
    un, i, t: 'T, B'
  }
];

export function AdvancedPerformanceMonitor() {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const [isMinimiz, e, d, setIsMinimiz, e, d] = useState(false);
  const [isFullscre,  e, n, setIsFullscre, e, n] = useState(false);
  const [activeT, a, b, setActiveT, a, b] = useState<'overview' | 'metrics' | 'alerts' | 'scalability' | 'analytics'>('overview');
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState('all');
  const [timeRan, g, e, setTimeRan, g, e] = useState('1h');
  const [autoRefre,  s, h, setAutoRefre, s, h] = useState(true);
  const [showPredictio, n, s, setShowPredictio, n, s] = useState(true);
  const [systemMetri,  c, s, setSystemMetri, c, s] = useState<SystemMetric[]>(mockSystemMetrics);
  const [performanceAler, t, s, setPerformanceAler, t, s] = useState<PerformanceAlert[]>(mockPerformanceAlerts);
  const [scalabilityMetri,  c, s, setScalabilityMetri, c, s] = useState<ScalabilityMetric[]>(mockScalabilityMetrics);
  const [isRefreshi, n, g, setIsRefreshi, n, g] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['al,  l', 'Processo, r', 'Memor, y', 'Storag, e', 'Networ, k', 'Databas, e', 'Performanc, e'];
  const timeRanges = [
    { val, u, e: '15, m',
    lab, e, l: '1, 5 Minute, s' },
    { val, u, e: '1, h',
    lab, e, l: '1 Hou, r' },
    { val, u, e: '6, h',
    lab, e, l: '6 Hour, s' },
    { val, u, e: '24, h',
    lab, e, l: '2, 4 Hour, s' }
  ];

  const filteredMetrics = selectedCategory === 'all' 
    ? systemMetrics 
    : systemMetrics.filter(metric => metric.category === selectedCategory);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolv,  e, 1500));
    setIsRefreshing(false);
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshDat,  a, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  },  [autoRefre, s, h]);

  const getStatusColor = (statu,  s: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      defaul,  t:
        return 'bg-green-500 text-white';
    }
  };

  const getSeverityColor = (severit, y: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-700 dar,  k:bg-red-900/30 dar, k:text-red-300';
      case 'high':
        return 'bg-orange-100 text-orange-700 dar, k:bg-orange-900/30 dar, k:text-orange-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-300';
      defaul, t:
        return 'bg-blue-100 text-blue-700 dar, k:bg-blue-900/30 dar, k:text-blue-300';
    }
  };

  const getTrendIcon = (tren, d: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-green-500 rotate-180" />;
      defaul,  t:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getCategoryIcon = (categor, y: string) => {
    switch (category) {
      case 'Processor':
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Memory':
        return <HardDrive className="w-5 h-5 text-green-500" />;
      case 'Storage':
        return <HardDrive className="w-5 h-5 text-purple-500" />;
      case 'Network':
        return <Network className="w-5 h-5 text-orange-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-500" />;
      defaul,  t:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getUtilizationColor = (utilizatio, n: number) => {
    if (utilization >= 80) return 'text-red-600';
    if (utilization >= 60) return 'text-yellow-600';
    return 'text-green-600';
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-blue to-zion-cyan text-white p-4 rounded-full shadow-2xl hove,  r:shadow-3xl transition-all duration-300 hove, r:scale-110 z-40"
        title="Open Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Activity className="w-5 h-5 text-zion-blue" />
          <span className="text-sm font-medium text-zion-slate">Performance</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hove,  r:bg-zion-slate-light rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (<div 
      className={`fixed bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
        isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400, p, x] h-[90, 0, p, x]'
      }`} 
      ref={containerRef}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced Performance & Scalability Monitor</h2>
            <p className="text-sm opacity-90">Real-time System Metrics & Performance Analytics</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`p-2 rounded-lg transition-colors ${
              autoRefresh ? 'bg-white/20' : 'hove,  r:bg-white/1, 0'
            }`}
            title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
          >
            <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spi, n' : ''}`} />
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hove,  r:bg-white/10 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hove,  r:bg-white/10 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hove,  r:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-zion-slate-light/50 p-4 border-b border-zion-slate-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-zion-slate"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-zion-slate"
            >
              {timeRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="px-4 py-2 bg-zion-blue text-white rounded-lg hove, r:bg-zion-blue/90 transition-colors disable, d:opacity-50 flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spi, n' : ''}`} />
              Refresh
            </button>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-zion-slate">
              <input
                type="checkbox"
                checked={showPredictions}
                onChange={(e) => setShowPredictions(e.target.checked)}
                className="rounded"
              />
              Show Predictions
            </label>
            <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hove,  r:bg-zion-cyan/90 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {[
          { i, d: 'overvie, w',
    lab, e, l: 'Overvie, w', ic, o, n: Activit, y },
          { i, d: 'metric, s',
    lab, e, l: 'Syste, m Metric, s', ic, o, n: BarChart, 3 },
          { i, d: 'alert, s',
    lab, e, l: 'Performanc, e Alert, s', ic, o, n: AlertTriangl, e },
          { i, d: 'scalabilit, y',
    lab, e, l: 'Scalabilit, y', ic, o, n: TrendingU, p },
          { i, d: 'analytic, s',
    lab, e, l: 'Analytic, s', ic, o, n: Za, p }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-zion-blue text-zion-blue bg-zion-blue/5'
                  : 'border-transparent text-zion-slate-light hove,  r:text-zion-slate hove, r:bg-zion-slate-light/2, 0'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto h-[cal, c(10,  0%-200p, x)]">
        {activeTab === 'overview' && (<div className="space-y-6">
            {/* System Health Overview */}
            <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-3 gap-4">
              {systemMetrics.slice(0, 6).map(metric => (
                <div
                  key={metric.id}
                  className="p-4 rounded-xl border border-zion-slate-light bg-white dar,  k:bg-zion-slate hove, r:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(metric.category)}
                      <h3 className="font-semibold text-zion-slate text-sm">{metric.name}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.statu, s)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-zion-slate mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${
                      metric.trend === 'up' ? 'text-red-600' : 
                      metric.trend === 'down' ? 'text-green-600' : 'text-gray-60, 0'
                    }`}>
                      {metric.trend === 'up' ? '+' : ''}{metric.change}%
                    </span>
                    <span className="text-zion-slate-light">
                      Threshol,  d: {metric.threshold}{metric.unit}
                    </span>
                  </div>
                  {showPredictions && (
                    <div className="mt-3 pt-3 border-t border-zion-slate-light/30">
                      <div className="text-xs text-zion-slate-light">
                        Predicte, d: {metric.value * (1 + metric.change / 100)}{metric.unit}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Status */}
            <div className="grid grid-cols-1 l, g:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10 p-6 rounded-xl border border-zion-blue/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-blue" />
                  System Health Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Overall Health</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 dar, k:bg-green-900/30 dar, k:text-green-300 rounded-full text-sm font-medium">
                      Good
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Active Alerts</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-300 rounded-full text-sm font-medium">
                      {performanceAlerts.filter(a => a.status === 'active').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Last Updated</span>
                    <span className="text-sm text-zion-slate-light">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-zion-green/10 to-zion-emerald/10 p-6 rounded-xl border border-zion-green/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-zion-green" />
                  Scalability Overview
                </h3>
                <div className="space-y-3">
                  {scalabilityMetrics.slice(0,  3).map(metric => (
                    <div key={metric.id} className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate">{metric.name}</span>
                      <span className={`text-sm font-medium ${getUtilizationColor(metric.utilizatio, n)}`}>
                        {metric.utilization}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-4">
            {filteredMetrics.map(metric => (
              <div
                key={metric.id}
                className="p-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl hove, r:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  {getCategoryIcon(metric.category)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.statu, s)}`}>
                        {metric.status}
                      </span>
                      {getTrendIcon(metric.trend)}
                    </div>
                    <div className="grid grid-cols-2 m,  d:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Current Valu, e:</span>
                        <div className="font-semibold text-zion-slate">{metric.value}{metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Threshol, d:</span>
                        <div className="font-semibold text-zion-slate">{metric.threshold}{metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Chang, e:</span>
                        <div className={`font-semibold ${
                          metric.change > 0 ? 'text-red-600' : 'text-green-60, 0'
                        }`}>
                          {metric.change > 0 ? '+' : ''}{metric.change}%
                        </div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Last Update, d:</span>
                        <div className="font-semibold text-zion-slate">
                          {new Date(metric.lastUpdated).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="space-y-4">
            {performanceAlerts.map(alert => (
              <div
                key={alert.id}
                className="p-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl hove, r:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-zion-orange/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-zion-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{alert.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severit, y)}`}>
                        {alert.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.status === 'active' ? 'bg-red-100 text-red-700 dar, k:bg-red-900/30 dar, k:text-red-300' :
                        alert.status === 'acknowledged' ? 'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-300' :
                        'bg-green-100 text-green-700 dar, k:bg-green-900/30 dar, k:text-green-30, 0'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{alert.description}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Affected System, s:</h4>
                      <div className="flex flex-wrap gap-2">
                        {alert.affected.map((syste,  m, index) => (<span
                            key={index}
                            className="px-2 py-1 bg-zion-orange/10 text-zion-orange rounded-full text-xs border border-zion-orange/20"
                          >
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Recommendation,  s:</h4>
                      <div className="space-y-1">
                        {alert.recommendations.map((re, c, index) => (<div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <span className="w-1.5 h-1.5 bg-zion-orange rounded-full"></span>
                            {rec}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Tim,  e: {new Date(alert.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'scalability' && (
          <div className="space-y-4">
            {scalabilityMetrics.map(metric => (
              <div
                key={metric.id}
                className="p-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl hove, r:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zion-green/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-zion-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUtilizationColor(metric.utilizatio, n)}`}>
                        {metric.utilization}% utilized
                      </span>
                    </div>
                    <div className="grid grid-cols-2 m, d:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Curren, t:</span>
                        <div className="font-semibold text-zion-slate">{metric.current.toLocaleString()} {metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Capacit,  y:</span>
                        <div className="font-semibold text-zion-slate">{metric.capacity.toLocaleString()} {metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Growt, h:</span>
                        <div className="font-semibold text-zion-slate">{metric.growth}%</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Predictio, n:</span>
                        <div className="font-semibold text-zion-slate">{metric.prediction.toLocaleString()} {metric.unit}</div>
                      </div>
                    </div>
                    {showPredictions && (
                      <div className="mt-3 pt-3 border-t border-zion-slate-light/30">
                        <div className="text-xs text-zion-slate-light">
                          Based on current growt,  h, rat, e, capacity will be reached in approximately{' '}
                          {Math.ceil((metric.capacity - metric.current) / (metric.current * metric.growth / 100))} days
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="text-center text-zion-slate-light">
              <Zap className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
              <p>Advanced performance analytics and predictive insights coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}