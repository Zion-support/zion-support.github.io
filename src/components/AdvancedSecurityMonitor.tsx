import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  onThreatDetected?: (event: SecurityEvent) => void;
  onVulnerabilityFound?: (vulnerability: any) => void;
  className?: string;
}

export const AdvancedSecurityMonitor: React.FC<AdvancedSecurityMonitorProps> = ({
  metrics,
  onThreatDetected,
  onVulnerabilityFound,
  className = ''
}) => {
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [alerts, setAlerts] = useState<SecurityEvent[]>([]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'threat': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'success': return '✅';
      default: return '📊';
    }
  };

  const getSecurityScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const getSecurityScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Fair';
    return 'Poor';
  };

  const filteredEvents = metrics.recentEvents.filter(event => 
    selectedSeverity === 'all' || event.severity === selectedSeverity
  );

  const vulnerabilityCounts = metrics.vulnerabilities.reduce((acc, vuln) => {
    acc[vuln.severity] = (acc[vuln.severity] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 `}
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white" id="security-monitor">Security Monitor</h2>
          <p className="text-gray-600 dark:text-gray-400">Real-time security monitoring and threat detection</p>
        </div> <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isMonitoring ? 'Monitoring' : 'Paused'}
            </span>
          </div>
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            aria-label={isMonitoring ? 'Pause monitoring' : 'Start monitoring'}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isMonitoring
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isMonitoring ? 'Pause' : 'Start'}
          </button>
        </div>
      </div>

      {/* Security Score */}
      <div className="bg-gradient-to-r from-blue-500to-purple-600 rounded-lg p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2" id="security-score">Security Score</h3>
            <div className="flex items-center space-x-4">
              <div className="{`text-4xl font-bold ${getSecurityScoreColor(metrics.securityScore)}`} {metrics.securityScore} </div">
              <div>
                <div className="text-lg font-medium">{getSecurityScoreLabel(metrics.securityScore)}</div> <div className="text-sm opacity-90">Last scan: {formatDate(metrics.lastScan)}</div>
              </div>
            </div>
          </div> <div className="text-right">
            <div className="text-2xl font-bold">{metrics.totalThreats}</div> <div className="text-sm opacity-90">Threats Blocked</div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4ga p-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Blocked Requests</div> <div className="text-2xl font-bold text-red-500">{metrics.blockedRequests}</div> <div className="text-sm text-gray-600 dark:text-gray-400">Last24h</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Suspicious Activity</div> <div className="text-2xl font-bold text-orange-500">{metrics.suspiciousActivity}</div> <div className="text-sm text-gray-600 dark:text-gray-400">Detected</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">XSS Attempts</div> <div className="text-2xl font-bold text-yellow-500">{metrics.xssAttempts}</div> <div className="text-sm text-gray-600 dark:text-gray-400">Blocked</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">SQL Injection</div> <div className="text-2xl font-bold text-red-500">{metrics.sqlInjectionAttempts}</div> <div className="text-sm text-gray-600 dark:text-gray-400">Attempts</div>
        </motion.div>
      </div>

      {/* Vulnerabilities */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" id="vulnerabilities">Vulnerabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-4ga p-4">
          {['critical', 'high', 'medium', 'low'].map(severity => (
            <motion.div
              key={severity}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`rounded-lg p-4 ${getSeverityColor(severity)}`}
            >
              <div className="text-2xl font-bold">
                {vulnerabilityCounts[severity] || 0}
              </div> <div className="text-sm font-medium capitalize">{severity}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Events */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" id="recent-security-events">Recent Security Events</h3>
          <select
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
            className="px-3 py-1border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Severities</option> <option value="critical">Critical</option> <option value="high">High</option> <option value="medium">Medium</option> <option value="low">Low</option>
          </select>
        </div> <div className="space-y-2 max- h-64overflow-y-auto">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`p-3 rounded-lg border-l-4 ${getSeverityColor(event.severity)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getTypeIcon(event.type)}</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {event.message}
                    </span>
                  </div> <div className="text-sm text-gray-600 dark:text-gray-400">
                    {formatTime(event.timestamp)}
                  </div>
                </div> <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Source: {event.source} • Severity: {event.severity}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Attack Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2ga p-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3" id="attack-types">Attack Types</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">CSP Violations</span>
              <span className="font-semibold text-red-500">{metrics.cspViolations}</span>
            </div> <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">XSS Attempts</span>
              <span className="font-semibold text-yellow-500">{metrics.xssAttempts}</span>
            </div> <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">SQL Injection</span>
              <span className="font-semibold text-red-500">{metrics.sqlInjectionAttempts}</span>
            </div> <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Brute Force</span>
              <span className="font-semibold text-orange-500">{metrics.bruteForceAttempts}</span>
            </div> <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Rate Limit Hits</span>
              <span className="font-semibold text-blue-500">{metrics.rateLimitHits}</span>
            </div>
          </div>
        </div> <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3" id="security-actions">Security Actions</h4>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors" aria-label="Block Suspicious IPs">
              Block Suspicious IPs
            </button> <button className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors" aria-label="Update Firewall Rules">
              Update Firewall Rules
            </button> <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors" aria-label="Run Security Scan">
              Run Security Scan
            </button> <button className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors" aria-label="Generate Security Report">
              Generate Security Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSecurityMonitor;