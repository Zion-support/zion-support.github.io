import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, 
  Heart, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  BarChart,
  Server,
  Database,
  Cloud,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const HealthPage: React.FC = () => {
  const healthMetrics = [
    {
      icon: Server,
      title: 'System Uptime',
      value: '99.9%',
      description: 'Average system availability across all services',
      status: 'excellent'
    },
    {
      icon: Database,
      title: 'Database Performance',
      value: '98.5%',
      description: 'Query response time and optimization metrics',
      status: 'excellent'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      value: '99.7%',
      description: 'Cloud service reliability and performance',
      status: 'excellent'
    },
    {
      icon: Shield,
      title: 'Security Status',
      value: '100%',
      description: 'Security monitoring and threat detection',
      status: 'excellent'
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance',
      status: 'resolved',
      time: '2 hours ago',
      description: 'Database optimization completed successfully'
    },
    {
      id: 2,
      title: 'API Performance Update',
      status: 'resolved',
      time: '1 day ago',
      description: 'Improved response times by 15%'
    },
    {
      id: 3,
      title: 'Security Patch Applied',
      status: 'resolved',
      time: '3 days ago',
      description: 'Latest security updates deployed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-400';
      case 'good':
        return 'text-yellow-400';
      case 'warning':
        return 'text-orange-400';
      case 'critical':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'good':
        return <TrendingUp className="w-5 h-5 text-yellow-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-orange-400" />;
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <Activity className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>System Health - Zion Tech Group</title>
        <meta name="description" content="Real-time system health monitoring and status updates for Zion Tech Group services and infrastructure." />
        <meta name="keywords" content="system health, uptime, monitoring, status, infrastructure, performance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Activity className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                System
                <span className="bg-gradient-to-r from-green-400 to-cyan-600 bg-clip-text text-transparent">
                  {' '}Health Status
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-time monitoring of our infrastructure, services, and performance metrics. 
                All systems are operational and running smoothly.
              </p>

              <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 font-semibold">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                All Systems Operational
              </div>
            </div>
          </div>
        </section>

        {/* Health Metrics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                System Performance Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current performance indicators across all our services and infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    {getStatusIcon(metric.status)}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                  <div className={`text-3xl font-bold mb-2 ${getStatusColor(metric.status)}`}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-gray-400">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Recent System Updates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest maintenance activities and system improvements.
              </p>
            </div>

            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                        <p className="text-gray-400">{incident.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{incident.time}</div>
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {incident.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Status Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current status of all our services and platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Web Application', status: 'operational', uptime: '99.9%' },
                { name: 'API Services', status: 'operational', uptime: '99.8%' },
                { name: 'Database', status: 'operational', uptime: '99.9%' },
                { name: 'CDN', status: 'operational', uptime: '99.7%' },
                { name: 'Email Services', status: 'operational', uptime: '99.9%' },
                { name: 'Monitoring', status: 'operational', uptime: '100%' }
              ].map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-medium">{service.status}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.uptime}</div>
                  <div className="text-sm text-gray-400">Uptime (30 days)</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Our support team is available 24/7 to assist with any issues or questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthPage;