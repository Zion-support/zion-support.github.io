import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe } from 'lucide-react';
const SystemStatus: NextPage = () => {;
  const services = [;
    {;
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2025-01-15';
},
    {;
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      lastIncident: '2025-01-10';
},
    {;
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      lastIncident: '2025-01-05';
},
    {;
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      lastIncident: '2024-12-28';
},
    {;
      name: 'Email Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      lastIncident: '2024-12-20';
},
    {;
      name: 'Monitoring',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '50ms',
      lastIncident: '2024-12-15';
}
  ];
  const incidents = [;
    {;
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      severity: 'minor',
      startTime: '2025-01-15T02:00:00Z',
      endTime: '2025-01-15T04:00:00Z',
      description: 'Scheduled maintenance window for API service updates and security patches.';
},
    {;
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      severity: 'major',
      startTime: '2025-01-10T14:30:00Z',
      endTime: '2025-01-10T16:45:00Z',
      description: 'Temporary performance degradation in database queries affecting API response times.';
},
    {;
      id: 3,
      title: 'CDN Edge Server Outage',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-12-28T08:15:00Z',
      endTime: '2024-12-28T09:30:00Z',
      description: 'Brief outage affecting content delivery in the Asia-Pacific region.';
}
  ];
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'operational':;