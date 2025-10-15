'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Activity, Database, Globe, CheckCircle, AlertTriangle, XCircle, Clock, RefreshCw, Footer } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

const [isRefreshing, setIsRefreshing] = useState(false);

const services = [
    // ... features
  ];

  const incidents = [
    {
      id: 1,
      title: 'File Storage Performance Issues',
      status: 'investigating',
      severity: 'minor',
      description: 'We are experiencing slower than usual response times for file uploads. Our team is investigating the issue.',
      startTime: '2024-01-20T14:30:00Z',
      affectedServices: ['File Storage'],
      updates: [
        {
          time: '2024-01-20T15:00:00Z',
          message: 'We have identified the issue and are working on a fix. Expected resolution within 2 hours.'
        },
        {
          time: '2024-01-20T14:30:00Z',
          message: 'We are investigating reports of slow file upload performance.'
        }
      ]
    },
    {
      id: 2,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'maintenance',
      description: 'Scheduled maintenance to optimize database performance and add new indexes.',
      startTime: '2024-01-19T02:00:00Z',
      endTime: '2024-01-19T04:00:00Z',
      affectedServices: ['Database', 'API Services'],
      updates: [
        {
          time: '2024-01-19T04:00:00Z',
          message: 'Maintenance completed successfully. All services are operational.'
        },
        {
          time: '2024-01-19T02:00:00Z',
          message: 'Scheduled maintenance started. Database services may be temporarily unavailable.'
        }
      ]
    }
  ];

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';

const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      case 'maintenance': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5" />;
      case 'outage': return <XCircle className="w-5 h-5" />;
      case 'maintenance': return <Clock className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'major': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'minor': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'maintenance': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);
  
  );
};
export default StatusPage;
</section>
</section>
</section>
</section>
</section>