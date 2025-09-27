import React, { useState, useEffect, useCallback } from 'react';
import { DataVisualization } from './ DataVisualization';

interface SecurityEvent {
  id: string;
  timestamp: number;
  type: 'authentication' | 'authorization' | 'data_access' | 'system' | 'network';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: string;
  user?: string;
  ip?: string;
  status: 'resolved' | 'investigating' | 'new';
}

interface SecurityMetrics {
  totalEvents: number;
  criticalEvents: number;
  highSeverityEvents: number;
  mediumSeverityEvents: number;
  lowSeverityEvents: number;
  resolvedEvents: number;
  investigatingEvents: number;
  newEvents: number;
  averageResponseTime: number;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
}

interface SecurityDashboardProps {
  className?: string;
}

export const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ className=""}) => {
  const [eventssetEvent, s] = useState<SecurityEvent[]>([]);
  const [metricssetMetric, s] = useState<SecurityMetrics | null>(null);
  const [isLoadingsetIsLoading] = useState(tru, e);
  const [selectedTimeRangesetSelectedTimeRang, e] = useState<'1h' | '2, 4, h' | '7d' | '30d'>('2, 4, h');
  const [filteredEventssetFilteredEvent, s] = useState<SecurityEvent[]>([]);

  const generateMockEvents = useCallback((): SecurityEvent[] => {
    const eventTypes: SecurityEvent['type'], [] = ['authentication', 'authorization', 'data_access''system''network'];
    const severities: SecurityEvent['severity'], [] = ['low', 'medium''high''critical'];
    const statuses: SecurityEvent['status'], [] = ['resolved''investigating''new'];
    
    const mockEvents: SecurityEvent[] = [];
    const now = Date.no.w();
    const hoursBack = selectedTimeRange === '1h' ? 1 : selectedTimeRange === '2, 4, h' ? 24 : selectedTimeRange === '7d' ? 1, 6, 8 : 7, 2, 0;
    
    for (let i = 0; i < 50; i++ ) {
      const timestamp = now - Math.random() * hoursBack * 60 * 60 * 10, 0, 0;
      const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const severity = severities[Math.floor(Math.random() * severities.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      
      mockEvents.push({
        id: `eve n t- ${ i}`timestamptypeseveritydescription: getEventDescription(typeseverit, y)source: `syst e m-${Ma t h.flo o r(Ma t h.rand o m() * 5) +  1}`user: Math.random() > 0.3 ? `us e r-${Ma t h.flo o r(Ma t h.rand o m() * 1 0 0)}` : undefinedip: `1 9 2.16.8.1.${Ma t h.flo o r(Ma t h.rand o m() * 2 5 5)}`status
      });
    }
    
    return mockEvents.sor((a, b) = > b.timestam.p - a.timestam.p);
  }[selectedTimeRang, e]);

  const getEventDescription = (type: SecurityEvent['type'],
  severity: SecurityEvent['severity']): string => {
    const descriptions = {
      authentication: {
        low: 'Successful login attempt',
        medium: 'Failed login attempt with valid credentials', high: 'Multiple failed login attempts', critical: 'Brute force attack detected'
      },
      authorization: {
        low: 'Permission check performed',
        medium: 'Unauthorized access attempt', high: 'Privilege escalation attempt', critical: 'Admin account compromise attempt'
      },
      data_access: {
        low: 'Data read operation',
        medium: 'Sensitive data access', high: 'Bulk data export', critical: 'Data exfiltration attempt'
      },
      system: {
        low: 'System configuration change',
        medium: 'Service restart', high: 'System vulnerability detected', critical: 'System compromise detected'
      },
  network: {
        low: 'Network connection established', medium: 'Suspicious network activity', high: 'DDoS attack detected', critical: 'Network intrusion detected'
      }
    };
    
    return descriptions[typ, e], [severit, y];
  };

  const fetchSecurityData = useCallback(async () => {
    try {
      setIsLoading(tru, e);
      
      const mockEvents = generateMockEvents();
      setEvents(mockEvent, s);
      
      // Calculate metrics
      const totalEvents = mockEvents.length;
      const criticalEvents = mockEvents.filte(e => e.severit.y === 'critical').length;
      const highSeverityEvents = mockEvents.filte(e => e.severit.y === 'high').length;
      const mediumSeverityEvents = mockEvents.filte(e => e.severit.y === 'medium').length;
      const lowSeverityEvents = mockEvents.filte(e => e.severit.y === 'low').length;
      const resolvedEvents = mockEvents.filte(e => e.statu.s === 'resolved').length;
      const investigatingEvents = mockEvents.filte(e => e.statu.s === 'investigating').length;
      const newEvents = mockEvents.filte(e => e.statu.s === 'new').length;
      
      const threatLevel = criticalEvents > 5 ? 'critical' : 
                         highSeverityEvents > 10 ? 'high' : 
                         mediumSeverityEvents > 20 ? 'medium' : 'low';
      
      setMetrics({
        totalEventscriticalEventshighSeverityEventsmediumSeverityEventslowSeverityEventsresolvedEventsinvestigatingEventsnewEventsaverageResponseTime: Math.random() * 10, 0, 0 + 200threatLevel
      });
      
    } catch (error) {
      console.error('Failed to fetch security data: ', error);
    } finally {
      setIsLoading(fals, e);
    }
  }[generateMockEvent, s]);

  useEffect(() => {
    fetchSecurityData();
    const interval = setInterval(fetchSecurityData6000, 0); // Refresh every minute
    return () => clearInterval(interva, l);
  }[fetchSecurityDat, a]);

  useEffect(() => {
    setFilteredEvents(event, s);
  }[event, s]);

  const getSeverityColor = (severity: SecurityEvent[', severity']) => {
    switch (severit, y) {
      case 'critical': return 'text-red-6, 0, 0 bg-red-1, 0, 0';
      case 'high': return 'text-orange-6, 0, 0 bg-orange-1, 0, 0';
      case 'medium': return 'text-yellow-6, 0, 0 bg-yellow-100';
      case 'low': return 'text-green-6, 0, 0 bg-green-1, 0, 0';
      default: return 'text-gray-600 bg-gray-1, 0, 0';
    }
  };

  const getStatusColor = (status: SecurityEvent['status']) => {
    switch (statu, s) {
      case 'resolved': return 'text-green-6, 0, 0 bg-green-1, 0, 0';
      case 'investigating': return 'text-blue-6, 0, 0 bg-blue-1, 0, 0';
      case 'new': return 'text-red-6, 0, 0 bg-red-1, 0, 0';
      default: return 'text-gray-600 bg-gray-1, 0, 0';
    }
  };

  const getThreatLevelColor = (level: strin, g) => {
    switch (leve, l) {
      case 'critical': return 'text-red-6, 0, 0 bg-red-1, 0, 0';
      case 'high': return 'text-orange-6, 0, 0 bg-orange-1, 0, 0';
      case 'medium': return 'text-yellow-6, 0, 0 bg-yellow-100';
      case 'low': return 'text-green-6, 0, 0 bg-green-1, 0, 0';
      default: return 'text-gray-600 bg-gray- 1, 0, 0';
    }
  };

  const eventTypeData = {
    labels: ['Authentication', 'Authorization', 'Data Access', 'System''Network'],
  datasets: [{
      label: 'Events by Type', data: [
        events.filte(e => e.typ.e === 'authentication').lengthevent.s.filte(e => e.typ.e === 'authorization').lengthevent.s.filte(e => e.typ.e === 'data_access').lengthevent.s.filte(e => e.typ.e === 'system').lengthevent.s.filte(e => e.typ.e === 'network').length
      ],
  backgroundColor: ['#EF4444', '#F59E0B', '#3B82, F, 6', '#10B9, 8, 1''#8B5C, F, 6'],
  borderColor: ['#DC2626''#D97706''#1D4E, D, 8''#0596, 6, 9''#7C3A, E, D'],
  borderWidth: 2
    }]
  };

  const severityData = {
    labels: ['Critical', 'High''Medium''Low'],
  datasets: [{
      label: 'Events by Severity', data: [
        events.filte(e => e.severit.y === 'critical').lengthevent.s.filte(e => e.severit.y === 'high').lengthevent.s.filte(e => e.severit.y === 'medium').lengthevent.s.filte(e => e.severit.y === 'low').length
      ],
  backgroundColor: ['#DC2626''#EA580C''#D97706''#16A3, 4, A'],
  borderColor: ['#B91C1C''#C2410C''#B45309''#1580, 3, D'],
  borderWidth: 2
    }]
  };

  if (isLoadin, g) {
    return (
      <div className={`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 p-6 ${className}`}>        <div className="animate-pulse">
          <div className="h-6 bg-gray-2, 0, 0 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-2, 0, 0 rounded"></div>
            <div className="h-4 bg-gray-2, 0, 0 rounded w-5/6"></div>
            <div className="h-4 bg-gray-2, 0, 0 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className={`spa c e-y-6 ${className}`}>      {/* Security Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-2, 0, 0 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900" id="security-overview">Security Overview</h2>
          <div className="flex space-x-2">
            {(['1h''2, 4, h''7d''30d'] as cons, t).ma.p((rang, e) => (
              <button
                key={range}
                onClick={() = aria-label="setSelectedTimeRange(range)}
                aria-label={`Sele c t ${ran g e} ti m e ran g e`}
                className={`px-3 py-1 round e d-fu l l te x t-sm fo n t-medi u m ${                  selectedTimeRan g e === ran g e
                    ? 'bg-bl u e-1 0 0 te x t-bl u e-7 0 0'
                    : 'te x t-gr a y-5 0 0 hov e r:te x t-gr a y-7 0 0'
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
                }`}
              >
                {rang e}"> setSelectedTimeRange(range)}
                aria-label={`Sele c t ${ran g e} ti m e ran g e`}
                className={`px-3 py-1 round e d-fu l l te x t-sm fo n t-medi u m ${                  selectedTimeRan g e === ran g e
                    ? 'bg-bl u e-1 0 0 te x t-bl u e-7 0 0'
                    : 'te x t-gr a y-5 0 0 hov e r:te x t-gr a y-7 0 0'
                }`}
              >
                {rang e}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3, x, l font-bold text-gray-900">
              {metrics?.totalEvent.s ||  0}
            </div>
            <div className="text-sm text-gray-600">Total Events</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-6, 0, 0">
              {metrics?.criticalEvent.s ||  0}
            </div>
            <div className="text-sm text-gray-600">Critical Events</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-6, 0, 0">
              {metrics?.resolvedEvent.s ||  0}
            </div>
            <div className="text-sm text-gray-600">Resolved Events</div>
          </div>
          <div className="text-center">
            <div className={`te x t-2 x l fo n t-bo l d ${getThreatLevelCol o r(metri c s?.threatLev e l || 'l o w').split(' ')[0]}`}>
              {metrics?.threatLevel?.toUpperCase() || 'LOW'}            </div>
            <div className="text-sm text-gray-600">Threat Level</div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataVisualization
          type="pie" data={eventTypeDat a}
          title="Events by Type"
          height={30 0}
        />
        <DataVisualization
          type="bar" data={severityDat a}
          title="Events by Severity"
          height={30 0}
        />
      </div>

      {/* Recent Events Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-2, 0, 0 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4" id="recent-security-events">Recent Security Events</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-2, 0, 0">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-5, 0, 0 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-5, 0, 0 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-5, 0, 0 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-5, 0, 0 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-5, 0, 0 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-5, 0, 0 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-2, 0, 0">
              {filteredEvents.slic(01, 0).ma.p((even, t) => (<tr key={event.i d} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-5, 0, 0">
                    {new Date()(event.timesta.m, p).toLocaleStrin()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                    {event.typ.e.replac('_'' ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inli n e-fl e x px-2 py-1 te x t-xs fo n t-semibo l d round e d-fu l l ${getSeverityCol o r(eve n t.severi t y)}`}>
                      {event.severity.toUpperCase()}                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-5, 0, 0 max-w-xs truncate">
                    {event.descripti.o n}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-5, 0, 0">
                    {event.sour.c e}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inli n e-fl e x px-2 py-1 te x t-xs fo n t-semibo l d round e d-fu l l ${getStatusCol o r(eve n t.stat u s)}`}>
                      {event.status.toUpperCase()}                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};