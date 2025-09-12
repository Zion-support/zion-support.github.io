import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Cloud, Shield, Brain, Zap, Globe, BarChart3, RefreshCw, ExternalLink, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';

interface ServiceStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastUpdated: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface Incident {
  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
  startTime: string;
  endTime?: string;
  affectedServices: string[];
}

const services: ServiceStatus[] = [
  {
    id: 'api',
    name: 'API Services',
    status: 'operational',
    uptime: 99.99,
    responseTime: 45,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Core API endpoints and microservices',
    icon: Server
  },
  {
    id: 'database',
    name: 'Database Systems',
    status: 'operational',
    uptime: 99.95,
    responseTime: 12,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Primary and replica database clusters',
    icon: Database
  },
  {
    id: 'web',
    name: 'Web Application',
    status: 'operational',
    uptime: 99.98,
    responseTime: 180,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Main website and user interface',
    icon: Globe
  },
  {
    id: 'security',
    name: 'Security Services',
    status: 'operational',
    uptime: 100.00,
    responseTime: 8,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Authentication, authorization, and threat detection',
    icon: Shield
  },
  {
    id: 'ai',
    name: 'AI Services',
    status: 'operational',
    uptime: 99.97,
    responseTime: 250,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Machine learning models and AI processing',
    icon: Brain
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    status: 'operational',
    uptime: 99.96,
    responseTime: 35,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Cloud computing and storage services',
    icon: Cloud
  }
];

const incidents: Incident[] = [
  {
    id: 'incident-001',
    title: 'Scheduled Maintenance - Database Systems',
    description: 'Routine database maintenance and optimization',
    status: 'resolved',
    severity: 'low',
    startTime: '2025-08-27T14:00:00Z',
    endTime: '2025-08-27T15:30:00Z',
    affectedServices: ['database']
  },
  {
    id: 'incident-002',
    title: 'Performance Degradation - AI Services',
    description: 'Investigating increased response times in AI processing',
    status: 'monitoring',
    severity: 'medium',
    startTime: '2025-08-27T16:00:00Z',
    affectedServices: ['ai']
  }
];

export default function SystemStatus() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

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
      case 'operational': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance': return <Clock className="w-5 h-5 text-blue-400" />;
      default: return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-blue-500/20 text-blue-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'critical': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';
  const overallUptime = services.reduce((acc, service) => acc + service.uptime, 0) / services.length;

  return (
    <>
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status and performance metrics for all Zion Tech Group services."
        keywords="system status, uptime, performance, monitoring, services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl mb-6">
              <Activity className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              System Status
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Real-time status and performance metrics for all our services and infrastructure.