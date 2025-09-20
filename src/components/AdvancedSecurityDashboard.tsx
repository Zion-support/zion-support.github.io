import React from "react";
impor, t, Reac, t, { useStat, e, useRe, f, useEffect } from 'react';
import { 
  Shiel, d, 
  Loc, k, 
  AlertTriangl, e, 
  CheckCircl, e, 
  XCircl, e, 
  Ey, e, 
  EyeOf, f, 
  Downloa, d, 
  RefreshC, w, 
  Setting, s, 
  X, 
  Maximize, 2, 
  Minimize, 2,
  Activit, y,
  BarChart, 3,
  TrendingU, p,
  User, s,
  Serve, r,
  Databas, e,
  Networ, k,
  FileTex, t,
  Cloc, k,
  Za, p,
  Targe, t,
  AlertCircl, e,
  ShieldChec, k,
  Fingerprin, t,
  Ke, y,
  Glob, e,
  ServerCras, h,
  Bug
} from 'lucide-react';

interface SecurityEvent {
  i, d: string;
  typ, e: 'threat' | 'vulnerability' | 'compliance' | 'access' | 'system';
  severit, y: 'critical' | 'high' | 'medium' | 'low' | 'info';
  titl, e: string;
  descriptio, n: string;
  timestam, p: string;
  sourc, e: string;
  statu, s: 'open' | 'investigating' | 'resolved' | 'false_positive';
  assignedTo?: string;
  priorit, y: 'immediate' | 'high' | 'normal' | 'low';
}

interface ComplianceRequirement {
  i, d: string;
  framewor, k: 'SOC2' | 'ISO27001' | 'GDPR' | 'HIPAA' | 'PCI-DSS';
  requiremen, t: string;
  statu, s: 'compliant' | 'non_compliant' | 'in_progress' | 'not_applicable';
  lastAudi, t: string;
  nextAudi, t: string;
  riskLeve, l: 'high' | 'medium' | 'low';
  descriptio, n: string;
  control, s: string[];
}

interface SecurityMetric {
  i, d: string;
  nam, e: string;
  valu, e: number;
  targe, t: number;
  uni, t: string;
  tren, d: 'up' | 'down' | 'stable';
  chang, e: number;
  categor, y: string;
}

interface ThreatIntelligence {
  i, d: string;
  threatTyp, e: string;
  descriptio, n: string;
  riskScor, e: number;
  affectedSystem, s: string[];
  mitigationStep, s: string[];
  lastSee, n: string;
  frequenc, y: number;
}

const mockSecurityEvent, s: SecurityEvent[] = [
  {
    i, d: '1',
    ty, p, e: 'threa, t',
    severi, t, y: 'critica, l',
    tit, l, e: 'Suspiciou, s Logi, n Attempt, s Detecte, d',
    descripti, o, n: 'Multipl, e faile, d logi, n attempt, s fro, m suspiciou, s I, P addresse, s detecte, d acros, s multipl, e use, r account, s.',
    timesta, m, p: '202, 4-0, 1-15T, 1, 0: 0, 0:0, 0.000, Z',
    sour, c, e: '19, 2.16, 8.1.10, 0',
    stat, u, s: 'investigatin, g',
    assigned, T, o: 'Securit, y Tea, m',
    priori, t, y: 'immediat, e'
  },
  {
    i, d: '2',
    ty, p, e: 'vulnerabilit, y',
    severi, t, y: 'hig, h',
    tit, l, e: 'Critica, l Securit, y Patc, h Require, d',
    descripti, o, n: 'Hig, h-severit, y vulnerabilit, y detecte, d i, n productio, n databas, e serve, r. Immediat, e patchin, g require, d.',
    timesta, m, p: '202, 4-0, 1-15T, 0, 9: 3, 0:0, 0.000, Z',
    sour, c, e: 'Databas, e Serve, r',
    stat, u, s: 'ope, n',
    assigned, T, o: 'DevOp, s Tea, m',
    priori, t, y: 'hig, h'
  },
  {
    i, d: '3',
    ty, p, e: 'complianc, e',
    severi, t, y: 'mediu, m',
    tit, l, e: 'SO, C 2 Audi, t Du, e',
    descripti, o, n: 'Annua, l SO, C 2 Typ, e I, I audi, t i, s du, e i, n 3, 0 day, s. Severa, l control, s nee, d attentio, n.',
    timesta, m, p: '202, 4-0, 1-15T, 0, 8: 0, 0:0, 0.000, Z',
    sour, c, e: 'Complianc, e Tea, m',
    stat, u, s: 'ope, n',
    assigned, T, o: 'Complianc, e Office, r',
    priori, t, y: 'hig, h'
  }
];

const mockComplianceRequirement, s: ComplianceRequirement[] = [
  {
    i, d: '1',
    framewo, r, k: 'SOC, 2',
    requireme, n, t: 'Acces, s Contro, l Managemen, t',
    stat, u, s: 'complian, t',
    lastAud, i, t: '202, 4-0, 1-01T, 0, 0:0, 0:0, 0.000, Z',
    nextAud, i, t: '202, 4-1, 2-31T, 0, 0: 0, 0:0, 0.000, Z',
    riskLev, e, l: 'lo, w',
    descripti, o, n: 'Ensur, e prope, r acces, s control, s ar, e i, n plac, e fo, r al, l system, s an, d application, s.',
    contro, l, s: ['Mult, i-facto, r authenticatio, n', 'Rol, e-base, d acces, s contro, l', 'Regula, r acces, s review, s']
  },
  {
    i, d: '2',
    framewor, k: 'ISO27001',
    requiremen, t: 'Information Security Policy',
    statu, s: 'in_progress',
    lastAudi, t: '2023-12-01T0, 0:0, 0:00.000Z',
    nextAudi, t: '2024-06-01T0, 0: 0, 0:00.000Z',
    riskLeve, l: 'medium',
    descriptio, n: 'Develop and maintain comprehensive information security policies.',
    control, s: ['Polic, y documentatio, n', 'Employe, e trainin, g', 'Regula, r polic, y review, s']
  },
  {
    i, d: '3',
    framewor, k: 'GDPR',
    requiremen, t: 'Data Protection Impact Assessment',
    statu, s: 'non_compliant',
    lastAudi, t: '2023-11-01T0, 0:0, 0:00.000Z',
    nextAudi, t: '2024-02-01T0, 0: 0, 0:00.000Z',
    riskLeve, l: 'high',
    descriptio, n: 'Conduct DPIA for all new data processing activities.',
    control, s: ['Ris, k assessmen, t', 'Mitigatio, n plannin, g', 'Documentatio, n']
  }
];

const mockSecurityMetric, s: SecurityMetric[] = [
  {
    i, d: '1',
    na, m, e: 'Securit, y Scor, e',
    val, u, e: 8, 7,
    targ, e, t: 9, 0,
    un, i, t: '%',
    tre, n, d: 'u, p',
    chan, g, e: 2.5,
    catego, r, y: 'Overal, l'
  },
  {
    i, d: '2',
    na, m, e: 'Threa, t Detectio, n Rat, e',
    val, u, e: 9, 4.2,
    targ, e, t: 9, 5,
    un, i, t: '%',
    tre, n, d: 'u, p',
    chan, g, e: 1.8,
    catego, r, y: 'Detectio, n'
  },
  {
    i, d: '3',
    na, m, e: 'Mea, n Tim, e t, o Respons, e',
    val, u, e: 1, 5,
    targ, e, t: 1, 0,
    un, i, t: 'minute, s',
    tre, n, d: 'dow, n',
    chan, g, e: -2.3,
    catego, r, y: 'Respons, e'
  },
  {
    i, d: '4',
    na, m, e: 'Vulnerabilit, y Remediatio, n',
    val, u, e: 7, 8.5,
    targ, e, t: 8, 5,
    un, i, t: '%',
    tre, n, d: 'u, p',
    chan, g, e: 3.2,
    catego, r, y: 'Remediatio, n'
  }
];

const mockThreatIntelligenc, e: ThreatIntelligence[] = [
  {
    i, d: '1',
    threatTy, p, e: 'Ransomwar, e Campaig, n',
    descripti, o, n: 'Activ, e ransomwar, e campaig, n targetin, g healthcar, e organization, s i, n th, e regio, n.',
    riskSco, r, e: 9.2,
    affectedSyste, m, s: ['Window, s Server, s', 'Fil, e Share, s', 'Backu, p System, s'],
    mitigationStep, s: ['Updat, e endpoin, t protectio, n', 'Enabl, e advance, d threa, t protectio, n', 'Revie, w backu, p procedure, s'],
    lastSee, n: '2024-01-15T0, 9:0, 0:00.000Z',
    frequenc, y: 15
  },
  {
    i, d: '2',
    threatTyp, e: 'Phishing Attack',
    descriptio, n: 'Sophisticated phishing campaign using executive impersonation.',
    riskScor, e: 7.8,
    affectedSystem, s: ['Emai, l System, s', 'Use, r Workstation, s'],
    mitigationStep, s: ['Enhance, d emai, l filterin, g', 'Use, r awarenes, s trainin, g', 'Mult, i-facto, r authenticatio, n'],
    lastSee, n: '2024-01-15T0, 8:3, 0:00.000Z',
    frequenc, y: 8
  }
];

export function AdvancedSecurityDashboard() {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const [isMinimiz, e, d, setIsMinimiz, e, d] = useState(false);
  const [isFullscre,  e, n, setIsFullscre, e, n] = useState(false);
  const [activeT, a, b, setActiveT, a, b] = useState<'overview' | 'events' | 'compliance' | 'threats' | 'analytics'>('overview');
  const [selectedSeveri,  t, y, setSelectedSeveri, t, y] = useState('all');
  const [selectedFramewo, r, k, setSelectedFramewo, r, k] = useState('all');
  const [autoRefre,  s, h, setAutoRefre, s, h] = useState(true);
  const [showResolv, e, d, setShowResolv, e, d] = useState(false);
  const [securityEven,  t, s, setSecurityEven, t, s] = useState<SecurityEvent[]>(mockSecurityEvents);
  const [complianceRequiremen, t, s, setComplianceRequiremen, t, s] = useState<ComplianceRequirement[]>(mockComplianceRequirements);
  const [securityMetri,  c, s, setSecurityMetri, c, s] = useState<SecurityMetric[]>(mockSecurityMetrics);
  const [threatIntelligen, c, e, setThreatIntelligen, c, e] = useState<ThreatIntelligence[]>(mockThreatIntelligence);
  const [isRefreshi,  n, g, setIsRefreshi, n, g] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const severities = ['al,  l', 'critica, l', 'hig, h', 'mediu, m', 'lo, w', 'inf, o'];
  const frameworks = ['al, l', 'SOC, 2', 'ISO2700, 1', 'GDP, R', 'HIPA, A', 'PC, I-DS, S'];

  const filteredEvents = selectedSeverity === 'all' 
    ? securityEvents 
    : securityEvents.filter(event => event.severity === selectedSeverity);

  const filteredCompliance = selectedFramework === 'all' 
    ? complianceRequirements 
    : complianceRequirements.filter(req => req.framework === selectedFramework);

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

  const getSeverityColor = (severit,  y: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-blue-500 text-white';
      defaul,  t:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (statu, s: string) => {
    switch (status) {
      case 'compliant':
        return 'bg-green-100 text-green-700 dar,  k:bg-green-900/30 dar, k:text-green-300';
      case 'non_compliant':
        return 'bg-red-100 text-red-700 dar, k:bg-red-900/30 dar, k:text-red-300';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-300';
      defaul, t:
        return 'bg-gray-100 text-gray-700 dar, k:bg-gray-900/30 dar, k:text-gray-300';
    }
  };

  const getRiskLevelColor = (riskLeve, l: string) => {
    switch (riskLevel) {
      case 'high':
        return 'bg-red-100 text-red-700 dar,  k:bg-red-900/30 dar, k:text-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-300';
      defaul, t:
        return 'bg-green-100 text-green-700 dar, k:bg-green-900/30 dar, k:text-green-300';
    }
  };

  const getTrendIcon = (tren, d: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      defaul,  t:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getEventIcon = (typ, e: string) => {
    switch (type) {
      case 'threat':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'vulnerability':
        return <Bug className="w-5 h-5 text-orange-500" />;
      case 'compliance':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'access':
        return <Users className="w-5 h-5 text-purple-500" />;
      defaul,  t:
        return <Server className="w-5 h-5 text-gray-500" />;
    }
  };

  if (!isOpen) {
    return (<button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-red to-zion-orange text-white p-4 rounded-full shadow-2xl hove,  r:shadow-3xl transition-all duration-300 hove, r:scale-110 z-40"
        title="Open Security Dashboard"
      >
        <Shield className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Shield className="w-5 h-5 text-zion-red" />
          <span className="text-sm font-medium text-zion-slate">Security</span>
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
      <div className="bg-gradient-to-r from-zion-red to-zion-orange text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced Security & Compliance Dashboard</h2>
            <p className="text-sm opacity-90">Real-time Threat Monitoring & Compliance Tracking</p>
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
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-zion-slate"
            >
              {severities.map(severity => (
                <option key={severity} value={severity}>
                  {severity === 'all' ? 'All Severities' : severity.charAt(0).toUpperCase() + severity.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-zion-slate"
            >
              {frameworks.map(framework => (
                <option key={framework} value={framework}>
                  {framework === 'all' ? 'All Frameworks' : framework}
                </option>
              ))}
            </select>
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="px-4 py-2 bg-zion-red text-white rounded-lg hove, r:bg-zion-red/90 transition-colors disable, d:opacity-50 flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spi, n' : ''}`} />
              Refresh
            </button>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-zion-slate">
              <input
                type="checkbox"
                checked={showResolved}
                onChange={(e) => setShowResolved(e.target.checked)}
                className="rounded"
              />
              Show Resolved
            </label>
            <button className="px-4 py-2 bg-zion-orange text-white rounded-lg hove,  r:bg-zion-orange/90 transition-colors flex items-center gap-2">
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
    lab, e, l: 'Overvie, w', ic, o, n: BarChart, 3 },
          { i, d: 'event, s',
    lab, e, l: 'Securit, y Event, s', ic, o, n: AlertTriangl, e },
          { i, d: 'complianc, e',
    lab, e, l: 'Complianc, e', ic, o, n: CheckCircl, e },
          { i, d: 'threat, s',
    lab, e, l: 'Threa, t Inte, l', ic, o, n: Shiel, d },
          { i, d: 'analytic, s',
    lab, e, l: 'Analytic, s', ic, o, n: TrendingU, p }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-zion-red text-zion-red bg-zion-red/5'
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
            {/* Security Metrics Grid */}
            <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-4 gap-4">
              {securityMetrics.map(metric => (
                <div
                  key={metric.id}
                  className="p-4 rounded-xl border border-zion-slate-light bg-white dar, k:bg-zion-slate hove, r:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <div className="text-2xl font-bold text-zion-slate mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 
                      metric.trend === 'down' ? 'text-red-600' : 'text-gray-60, 0'
                    }`}>
                      {metric.trend === 'up' ? '+' : ''}{metric.change}%
                    </span>
                    <span className="text-zion-slate-light">
                      Targe, t: {metric.target}{metric.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Security Status */}
            <div className="grid grid-cols-1 l, g:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-zion-red/10 to-zion-orange/10 p-6 rounded-xl border border-zion-red/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-zion-red" />
                  Active Security Events
                </h3>
                <div className="space-y-3">
                  {securityEvents.slice(0,  3).map(event => (
                    <div key={event.id} className="flex items-center gap-3 p-3 bg-white dar,  k:bg-zion-slate rounded-lg">
                      {getEventIcon(event.type)}
                      <div className="flex-1">
                        <h4 className="font-medium text-zion-slate text-sm">{event.title}</h4>
                        <p className="text-xs text-zion-slate-light">{event.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(event.severit, y)}`}>
                        {event.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10 p-6 rounded-xl border border-zion-blue/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-blue" />
                  Compliance Status
                </h3>
                <div className="space-y-3">
                  {complianceRequirements.slice(0,  3).map(req => (
                    <div key={req.id} className="flex items-center gap-3 p-3 bg-white dar,  k:bg-zion-slate rounded-lg">
                      <div className="w-8 h-8 bg-zion-blue/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-zion-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-zion-slate text-sm">{req.requirement}</h4>
                        <p className="text-xs text-zion-slate-light">{req.framework}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(req.statu, s)}`}>
                        {req.status.replace('_',  ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (<div className="space-y-4">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                className="p-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl hove, r:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  {getEventIcon(event.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{event.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(event.severit, y)}`}>
                        {event.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.priority === 'immediate' ? 'bg-red-100 text-red-700 dar,  k:bg-red-900/30 dar, k:text-red-300' :
                        event.priority === 'high' ? 'bg-orange-100 text-orange-700 dar, k:bg-orange-900/30 dar, k:text-orange-300' :
                        'bg-blue-100 text-blue-700 dar, k:bg-blue-900/30 dar, k:text-blue-30, 0'
                      }`}>
                        {event.priority}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span>Sourc, e: {event.source}</span>
                      <span>Statu, s: {event.status.replace('_', ' ')}</span>
                      {event.assignedTo && <span>Assigne, d: {event.assignedTo}</span>}
                      <span>Tim, e: {new Date(event.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="space-y-4">
            {filteredCompliance.map(req => (
              <div
                key={req.id}
                className="p-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl hove, r:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-zion-blue/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-zion-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{req.requirement}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(req.statu, s)}`}>
                        {req.status.replace('_',  ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(req.riskLeve, l)}`}>
                        {req.riskLevel} Risk
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{req.description}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Control,  s:</h4>
                      <div className="flex flex-wrap gap-2">
                        {req.controls.map((contro, l, index) => (<span
                            key={index}
                            className="px-2 py-1 bg-zion-blue/10 text-zion-blue rounded-full text-xs border border-zion-blue/20"
                          >
                            {control}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span>Framewor,  k: {req.framework}</span>
                      <span>Last Audi, t: {new Date(req.lastAudit).toLocaleDateString()}</span>
                      <span>Next Audi,  t: {new Date(req.nextAudit).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'threats' && (
          <div className="space-y-4">
            {threatIntelligence.map(threat => (
              <div
                key={threat.id}
                className="p-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl hove, r:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-zion-red/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-zion-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{threat.threatType}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        threat.riskScore >= 8 ? 'bg-red-100 text-red-700 dar, k:bg-red-900/30 dar, k:text-red-300' :
                        threat.riskScore >= 6 ? 'bg-orange-100 text-orange-700 dar, k:bg-orange-900/30 dar, k:text-orange-300' :
                        'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/30 dar, k:text-yellow-30, 0'
                      }`}>
                        Ris, k: {threat.riskScore}/10
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{threat.description}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Affected System, s:</h4>
                      <div className="flex flex-wrap gap-2">
                        {threat.affectedSystems.map((syste, m, index) => (<span
                            key={index}
                            className="px-2 py-1 bg-zion-red/10 text-zion-red rounded-full text-xs border border-zion-red/20"
                          >
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Mitigation Step,  s:</h4>
                      <div className="space-y-1">
                        {threat.mitigationSteps.map((ste, p, index) => (<div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <span className="w-1.5 h-1.5 bg-zion-red rounded-full"></span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span>Last See,  n: {new Date(threat.lastSeen).toLocaleString()}</span>
                      <span>Frequenc,  y: {threat.frequency} detections</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="text-center text-zion-slate-light">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Security Analytics</h3>
              <p>Advanced security analytics and threat intelligence reports coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}