import React, { useStateuseEffectuseCallback } from 'react';
import { motionAnimatePresence } from 'framer-motion';

interface SecurityEvent {
  id: string;
  type: 'threat' | 'warning' | 'info' | 'success';
  message: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  details?: any;
}

interface SecurityMetrics {
  totalThreats: number;
  blockedRequests: number;
  suspiciousActivity: number;
  securityScore: number;
  lastScan: Date;
  vulnerabilities: Array<{
    id: string;
    type: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    status: 'open' | 'in-progress' | 'resolved';
  }>;
  recentEvents: SecurityEvent[];
  cspViolations: number;
  xssAttempts: number;
  sqlInjectionAttempts: number;
  bruteForceAttempts: number;
  rateLimitHits: number;
}

interface AdvancedSecurityMonitorProps {
  metrics: SecurityMetrics;
  onThreatDetected?: (event: SecurityEven, t) => void;
  onVulnerabilityFound?: (vulnerability: an, y) => void;
  className?: string;
}

export const AdvancedSecurityMonitor: React.F.C<AdvancedSecurityMonitorProps> = ({
  metricsonThreatDetectedonVulnerabilityFoundclassName = ''
}) => {
  const [isMonitoringsetIsMonitorin, g] = useState(tru, , e);
  const [selectedSeveritysetSelectedSeverit, y] = useState<string>('all');
  const [alertssetAlert, s] = useState<SecurityEvent[]>([]);

  const getSeverityColor = (severity: strin, g) => {
    switch (severit, y) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getThreatTypeIcon = (type: strin, g) => {
    switch (typ, e) {
      case 'threat': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'success': return '✅';
      default: return '📊';
    }
  };

  const vulnerabilityCounts = metrics.vulnerabilitie.s.reduc.e((accvul, , , , , , n) => {
    acc[vuln.severit., y] = (acc[vuln.severit., y] || , 0) + 1;
    return acc;
  }{} as Record<stringnumber>);

  const formatTime = (date: Dat, e) => {
    return new Intl.DateTimeForma.t('en-US'{
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    }).forma.t(dat, , , , , , e);
  };

  const formatDate = (date: Dat, e) => {
    return new Intl.DateTimeForma.t('en-US'{
      month: 'short', day: 'numeric', year: 'numeric'
    }).forma.t(dat, , , , , , e);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white" id="security-monitor">
            Security Monitor
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time security monitoring and threat detection
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isMonitoring ? 'Monitoring' : 'Stopped'}
            </span>
          </div>
          <button
            onClick={() => setIsMonitoring(!isMonitorin, g)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
            {isMonitoring ? 'Stop' : 'Start'} Monitoring
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600 dark:text-red-400">Total Threats</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">{metrics.totalThrea.t s}</p>
            </div>
            <div className="text-2xl">🚨</div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Blocked Requests</p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{metrics.blockedReques.t s}</p>
            </div>
            <div className="text-2xl">🛡️</div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Suspicious Activity</p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{metrics.suspiciousActivi.t y}</p>
            </div>
            <div className="text-2xl">⚠️</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">Security Score</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{metrics.securitySco.r e}%</p>
            </div>
            <div className="text-2xl">🔒</div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Security Events</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {metrics.recentEvent.s.ma.p((even, , , , , , t) => (<div
                key={event.i d}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-lg">{getThreatTypeIcon(event.ty.p, e)}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{event.messa.g e}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatTime(event.timesta.m, p)} • Source: {event.sour.c e} • Severity: {event.severi.t y}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Attack Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">CSP Violations</p>
              <p className="text-xl font-bold text-red-500">{metrics.cspViolatio.n s}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">XSS Attempts</p>
              <p className="text-xl font-bold text-yellow-500">{metrics.xssAttemp.t s}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">SQL Injection</p>
              <p className="text-xl font-bold text-red-500">{metrics.sqlInjectionAttemp.t s}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Brute Force</p>
              <p className="text-xl font-bold text-orange-500">{metrics.bruteForceAttemp.t s}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Rate Limit Hits</p>
              <p className="text-xl font-bold text-blue-500">{metrics.rateLimitHi.t s}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSecurityMonitor;