import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Lock, 
  Eye, 
  AlertCircle,
  Activity,
  Clock,
  Database,
  Globe
} from 'lucide-react';

interface SecurityEvent {
  id: string;
  type: 'threat' | 'vulnerability' | 'breach' | 'suspicious' | 'normal';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  timestamp: Date;
  source: string;
  status: 'active' | 'resolved' | 'investigating';
  affectedSystem, s: string[];
  recommendedAction, s: string[];
}

interface SecurityMetrics {
  totalThreats: number;
  activeThreats: number;
  resolvedThreats: number;
  vulnerabilityScore: number;
  securityScore: number;
  lastScan: Date;
  protectedAsset, s: number;
  blockedRequest, s: number;
}

interface SecurityMonitorProps {
  refreshInterval?: number;
  enableAlerts?: boolean;
  onSecurityAlert?: (alert: SecurityEvent) => void;
}

export const SecurityMonitor: React.FC<SecurityMonitorProps> = ({
  refreshInterval = 10000,
  enableAlerts = true,
  onSecurityAlert
}) => {
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    totalThreats: 0,
    activeThreats: 0,
    resolvedThreats: 0,
    vulnerabilityScore: 0,
    securityScore: 0,
    lastScan: new Date(),
    protectedAssets: 0,
    blockedRequests: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const generateMockEvents = useCallback((): SecurityEvent[] => {
    const eventTypes: SecurityEvent['type'][] = ['threat', 'vulnerability', 'breach', 'suspicious', 'normal'];
    const severities: SecurityEvent['severity'][] = ['low', 'medium', 'high', 'critical'];
    const statuses: SecurityEvent['status'][] = ['active', 'resolved', 'investigating'];
    
    return Array.from({ length: Math.floor(Math.random() * 10) + 5 }, (_, i) => ({
      id: `event-${i}`,
      type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
      severity: severities[Math.floor(Math.random() * severities.length)],
      title: `Security Event ${i + 1}`,
      description: `Description of security event ${i + 1}`,
      timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000),
      source: `Source ${i + 1}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      affectedSystems: [`System ${i + 1}`, `System ${i + 2}`],
      recommendedActions: [`Action ${i + 1}`, `Action ${i + 2}`]
    }));
  }, []);

  const generateMockMetrics = useCallback((): SecurityMetrics => {
    return {
      totalThreats: Math.floor(Math.random() * 100) + 50,
      activeThreats: Math.floor(Math.random() * 20) + 5,
      resolvedThreats: Math.floor(Math.random() * 80) + 20,
      vulnerabilityScore: Math.random() * 100,
      securityScore: Math.random() * 100,
      lastScan: new Date(),
      protectedAssets: Math.floor(Math.random() * 1000) + 500,
      blockedRequests: Math.floor(Math.random() * 10000) + 1000
    };
  }, []);

  const updateData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newEvents = generateMockEvents();
      const newMetrics = generateMockMetrics();
      
      setEvents(newEvents);
      setMetrics(newMetrics);
      setIsLoading(false);

      // Check for critical security alerts
      if (enableAlerts) {
        const criticalEvents = newEvents.filter(event => 
          event.severity === 'critical' && event.status === 'active'
        );
        criticalEvents.forEach(event => {
          onSecurityAlert?.(event);
        });
      }
    }, 800);
  }, [generateMockEvents, generateMockMetrics, enableAlerts, onSecurityAlert]);

  useEffect(() => {
    updateData();
    const interval = setInterval(updateData, refreshInterval);
    return () => clearInterval(interval);
  }, [updateData, refreshInterval]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low': return 'text-blue-600 bg-blue-100 border-blue-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'threat': return <AlertTriangle className="w-4h-4" />;
      case 'vulnerability': return <Shield className="w-4h-4" />;
      case 'breach': return <AlertCircle className="w-4h-4" />;
      case 'suspicious': return <Eye className="w-4h-4" />;
      case 'normal': return <CheckCircle className="w-4h-4" />;
      default: return <Activity className="w-4h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-600 bg-red-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'investigating': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lgp-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flexitems-center">
          <Shield className="w-6h-6mr-2text-red-600" />
          Security Monitor
        </h2>
        <div className="flex items-center text-smtext-gray-500">
          <Clock className="w-4h-4mr-1" />
          Last scan: {metrics.lastScan.toLocaleTimeString()}
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-2md:grid-cols-4gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4text-center">
          <div className="text-2xl font-boldtext-red-600">{metrics.activeThreats}</div>
          <div className="text-sm text-gray-600">Active Threats</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4text-center">
          <div className="text-2xl font-boldtext-green-600">{metrics.resolvedThreats}</div>
          <div className="text-sm text-gray-600">Resolved</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4text-center">
          <div className="text-2xl font-boldtext-blue-600">{metrics.protectedAssets}</div>
          <div className="text-sm text-gray-600">Protected Assets</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4text-center">
          <div className="text-2xl font-boldtext-purple-600">{metrics.blockedRequests}</div>
          <div className="text-sm text-gray-600">Blocked Requests</div>
        </div>
      </div>

      {/* Security Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-mediumtext-gray-700">Security Score</span>
          <span className="text-smtext-gray-500">{metrics.securityScore.toFixed(1)}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-fullh-2">
          <div 
            className={`h-2rounded-full ${
              metrics.securityScore >= 80 ? 'bg-green-500' : 
              metrics.securityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${metrics.securityScore}%` }}</p></div>
        </div>
      </div>

      {/* Security Events */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-4" id="recent-security-events">Recent Security Events</h3>
        <AnimatePresence>
          {events.slice(0, 5).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-lg p-4 ${getSeverityColor(event.severity)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flexitems-center">
                  {getTypeIcon(event.type)}
                  <span className="ml-2font-medium">{event.title}</span>
                </div>
                <div className={`px-2py-1rounded-full text-xs ${getStatusColor(event.status)}`}
                  {event.status}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
              <div className="flex items-center justify-between text-xstext-gray-500">
                <span>Source: {event.source}</span>
                <span>{event.timestamp.toLocaleString()}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {isLoading && (
        <div className="flex items-center justify-centerpy-8">
          <div className="animate-spin rounded-full h-8w-8border-b-2border-red-600"></div>
        </div>
      )}
    </div>
  );
};

export default SecurityMonitor;