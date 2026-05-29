'use client';

import { useState, useEffect, useMemo } from 'react';

interface ServiceHealth {
  id: string;
  name: string;
  category: string;
  status: 'healthy' | 'degraded' | 'down' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastChecked: string;
  icon: string;
}

interface Alert {
  id: string;
  serviceId: string;
  serviceName: string;
  type: 'critical' | 'warning' | 'info' | 'success';
  message: string;
  timestamp: string;
  resolved: boolean;
  recommendation: string;
}

const SERVICE_CATEGORIES = [
  { key: 'ai', label: 'AI Services', emoji: '🧠' },
  { key: 'it', label: 'IT Services', emoji: '🖥️' },
  { key: 'cloud', label: 'Cloud Services', emoji: '☁️' },
  { key: 'security', label: 'Security', emoji: '🔐' },
  { key: 'data', label: 'Data Analytics', emoji: '📊' },
  { key: 'automation', label: 'Automation', emoji: '🤖' },
];

const generateMockServices = (): ServiceHealth[] => {
  const services: ServiceHealth[] = [];
  const statuses: ServiceHealth['status'][] = ['healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'degraded', 'healthy', 'maintenance'];
  
  SERVICE_CATEGORIES.forEach(cat => {
    for (let i = 1; i <= 8; i++) {
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      services.push({
        id: `${cat.key}-service-${i}`,
        name: `${cat.label} - Module ${i}`,
        category: cat.key,
        status,
        uptime: status === 'healthy' ? 99.9 + Math.random() * 0.1 : status === 'degraded' ? 95 + Math.random() * 4 : 0,
        responseTime: status === 'healthy' ? 50 + Math.random() * 150 : status === 'degraded' ? 500 + Math.random() * 1000 : 0,
        lastChecked: new Date(Date.now() - Math.random() * 300000).toISOString(),
        icon: cat.emoji,
      });
    }
  });
  
  return services;
};

const generateAlerts = (services: ServiceHealth[]): Alert[] => {
  const alerts: Alert[] = [];
  
  services.forEach(service => {
    if (service.status === 'degraded') {
      alerts.push({
        id: `alert-${service.id}-1`,
        serviceId: service.id,
        serviceName: service.name,
        type: 'warning',
        message: `${service.name} is experiencing degraded performance. Response time: ${Math.round(service.responseTime)}ms`,
        timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString(),
        resolved: false,
        recommendation: 'Consider scaling up resources or optimizing queries. Contact support for immediate assistance.',
      });
    }
    if (service.status === 'down') {
      alerts.push({
        id: `alert-${service.id}-2`,
        serviceId: service.id,
        serviceName: service.name,
        type: 'critical',
        message: `${service.name} is currently unavailable`,
        timestamp: new Date(Date.now() - Math.random() * 1800000).toISOString(),
        resolved: false,
        recommendation: 'Immediate investigation required. Failover systems activated. ETA: 15-30 minutes.',
      });
    }
    if (service.status === 'maintenance') {
      alerts.push({
        id: `alert-${service.id}-3`,
        serviceId: service.id,
        serviceName: service.name,
        type: 'info',
        message: `${service.name} is undergoing scheduled maintenance`,
        timestamp: new Date(Date.now() - Math.random() * 7200000).toISOString(),
        resolved: false,
        recommendation: 'Maintenance window: 2-4 hours. Services will be restored automatically.',
      });
    }
  });
  
  // Add success alerts for healthy services
  const healthyServices = services.filter(s => s.status === 'healthy').slice(0, 3);
  healthyServices.forEach(service => {
    alerts.push({
      id: `alert-${service.id}-success`,
      serviceId: service.id,
      serviceName: service.name,
      type: 'success',
      message: `${service.name} is performing optimally. Uptime: ${service.uptime.toFixed(2)}%`,
      timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString(),
      resolved: true,
      recommendation: 'No action needed. Service is healthy.',
    });
  });
  
  return alerts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

export default function ServiceHealthMonitor() {
  const [services, setServices] = useState<ServiceHealth[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showResolved, setShowResolved] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const mockServices = generateMockServices();
    setServices(mockServices);
    setAlerts(generateAlerts(mockServices));
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return services;
    return services.filter(s => s.category === selectedCategory);
  }, [services, selectedCategory]);

  const filteredAlerts = useMemo(() => {
    if (showResolved) return alerts;
    return alerts.filter(a => !a.resolved);
  }, [alerts, showResolved]);

  const stats = useMemo(() => {
    const total = services.length;
    const healthy = services.filter(s => s.status === 'healthy').length;
    const degraded = services.filter(s => s.status === 'degraded').length;
    const down = services.filter(s => s.status === 'down').length;
    const maintenance = services.filter(s => s.status === 'maintenance').length;
    const avgUptime = services.reduce((sum, s) => sum + s.uptime, 0) / total;
    const criticalAlerts = alerts.filter(a => a.type === 'critical' && !a.resolved).length;
    
    return { total, healthy, degraded, down, maintenance, avgUptime, criticalAlerts };
  }, [services, alerts]);

  const getStatusColor = (status: ServiceHealth['status']) => {
    switch (status) {
      case 'healthy': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'down': return 'bg-red-500';
      case 'maintenance': return 'bg-blue-500';
    }
  };

  const getStatusLabel = (status: ServiceHealth['status']) => {
    switch (status) {
      case 'healthy': return '✅ Healthy';
      case 'degraded': return '⚠️ Degraded';
      case 'down': return '🔴 Down';
      case 'maintenance': return '🔧 Maintenance';
    }
  };

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'critical': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'success': return '✅';
    }
  };

  const getAlertColor = (type: Alert['type']) => {
    switch (type) {
      case 'critical': return 'border-red-500 bg-red-500/10';
      case 'warning': return 'border-yellow-500 bg-yellow-500/10';
      case 'info': return 'border-blue-500 bg-blue-500/10';
      case 'success': return 'border-green-500 bg-green-500/10';
    }
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-page max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🏥 AI Service Health Monitor
          </h2>
          <p className="text-slate-400 text-lg mb-2">
            Real-time monitoring and intelligent alerts for all {stats.total} services
          </p>
          <p className="text-slate-500 text-sm">
            Last updated: {lastUpdate.toLocaleTimeString()} • Auto-refreshes every 30 seconds
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-white">{stats.total}</div>
            <div className="text-xs text-slate-400 mt-1">Total Services</div>
          </div>
          <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30 text-center">
            <div className="text-3xl font-bold text-green-400">{stats.healthy}</div>
            <div className="text-xs text-green-300 mt-1">Healthy</div>
          </div>
          <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30 text-center">
            <div className="text-3xl font-bold text-yellow-400">{stats.degraded}</div>
            <div className="text-xs text-yellow-300 mt-1">Degraded</div>
          </div>
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30 text-center">
            <div className="text-3xl font-bold text-red-400">{stats.down}</div>
            <div className="text-xs text-red-300 mt-1">Down</div>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30 text-center">
            <div className="text-3xl font-bold text-blue-400">{stats.maintenance}</div>
            <div className="text-xs text-blue-300 mt-1">Maintenance</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400">{stats.avgUptime.toFixed(1)}%</div>
            <div className="text-xs text-purple-300 mt-1">Avg Uptime</div>
          </div>
          <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30 text-center">
            <div className="text-3xl font-bold text-orange-400">{stats.criticalAlerts}</div>
            <div className="text-xs text-orange-300 mt-1">Critical Alerts</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat.key
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              Service Status ({filteredServices.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
              {filteredServices.map(service => (
                <div
                  key={service.id}
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{service.name}</h4>
                        <p className="text-xs text-slate-500">{service.category}</p>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`} />
                  </div>
                  
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-white font-medium">{getStatusLabel(service.status)}</span>
                    </div>
                    {service.status !== 'down' && (
                      <>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Uptime:</span>
                          <span className="text-green-400 font-medium">{service.uptime.toFixed(2)}%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Response:</span>
                          <span className={`font-medium ${
                            service.responseTime < 200 ? 'text-green-400' :
                            service.responseTime < 500 ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {Math.round(service.responseTime)}ms
                          </span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Last Check:</span>
                      <span className="text-slate-300">{formatTime(service.lastChecked)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts Panel */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">
                Alerts ({filteredAlerts.length})
              </h3>
              <label className="flex items-center gap-2 text-sm text-slate-400">
                <input
                  type="checkbox"
                  checked={showResolved}
                  onChange={(e) => setShowResolved(e.target.checked)}
                  className="rounded"
                />
                Show resolved
              </label>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {filteredAlerts.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <div className="text-4xl mb-2">✅</div>
                  <p>No active alerts</p>
                </div>
              ) : (
                filteredAlerts.map(alert => (
                  <div
                    key={alert.id}
                    className={`rounded-lg p-4 border ${getAlertColor(alert.type)} ${
                      alert.resolved ? 'opacity-60' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{getAlertIcon(alert.type)}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-semibold text-white truncate">
                            {alert.serviceName}
                          </h4>
                          <span className="text-xs text-slate-400 ml-2 whitespace-nowrap">
                            {formatTime(alert.timestamp)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mb-2">{alert.message}</p>
                        <div className="bg-slate-900/50 rounded p-2 mt-2">
                          <p className="text-xs text-slate-400">
                            <span className="font-semibold text-purple-400">💡 Recommendation:</span>{' '}
                            {alert.recommendation}
                          </p>
                        </div>
                        {alert.resolved && (
                          <span className="inline-block mt-2 text-xs text-green-400 font-medium">
                            ✅ Resolved
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our 24/7 support team is ready to help with any service issues or questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-all"
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all"
            >
              ✉️ Email Support
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            📍 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </div>
      </div>
    </section>
  );
}
