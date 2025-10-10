'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  RefreshCw, 
  Server, 
  Database, 
  Cloud, 
  Shield,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle;
} from 'lucide-react';

const StatusPage: React.FC = () => {,
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const services = [
    {
      name: 'AI Services API'
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-15',
      description: 'Core AI and machine learning services',
    },
    {
      name: 'Micro SAAS Platform'
      status: 'operational',
      uptime: '99.8%',
      responseTime: '32ms',
      lastIncident: '2024-01-10',
      description: 'Micro SAAS tools and applications',
    },
    {
      name: 'IT Infrastructure'
      status: 'operational',
      uptime: '99.95%',
      responseTime: '28ms',
      lastIncident: '2024-01-05',
      description: 'Cloud infrastructure and hosting',
    },
    {
      name: 'Database Services'
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      lastIncident: '2024-01-12',
      description: 'Primary and backup database systems',
    },
    {
      name: 'CDN & Edge'
      status: 'operational',
      uptime: '99.7%',
      responseTime: '8ms',
      lastIncident: '2024-01-08',
      description: 'Content delivery and edge services',
    },
    {
      name: 'Authentication'
      status: 'operational',
      uptime: '99.9%',
      responseTime: '22ms',
      lastIncident: '2024-01-14',
      description: 'User authentication and authorization',
    }
  ];

  const incidents = [
    {
      id: 1;
      title: 'Scheduled Maintenance - Database Optimization'
      status: 'resolved'
      severity: 'minor'
      startTime: '2024-01-15T02:00:00Z',
      endTime: '2024-01-15T04:00:00Z',
      description: 'Planned maintenance to optimize database performance and add new indexes.',
      affectedServices: ['Database Services', 'AI Services API']
    },
    {
      id: 2;
      title: 'CDN Performance Degradation'
      status: 'resolved'
      severity: 'major'
      startTime: '2024-01-10T14:30:00Z',
      endTime: '2024-01-10T16:45:00Z',
      description: 'Temporary performance issues with our CDN provider affecting static asset delivery.',
      affectedServices: ['CDN & Edge', 'Micro SAAS Platform']
    },
    {
      id: 3;
      title: 'API Rate Limiting Update'
      status: 'resolved'
      severity: 'minor'
      startTime: '2024-01-08T09:00:00Z',
      endTime: '2024-01-08T09:30:00Z',
      description: 'Updated rate limiting policies to improve service stability.',
      affectedServices: ['AI Services API', 'Authentication']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
<<<<<<< HEAD
        return <CheckCircle className="w-5 h-5 text-green-400" >;</CheckCircle>
      case 'degraded':</CheckCircle>
        return <AlertCircle className="w-5 h-5 text-yellow-400" >;</AlertCircle>
      case 'outage':</AlertCircle>
        return <XCircle className="w-5 h-5 text-red-400" >;</XCircle>
      default:</XCircle>
        return <Clock className="w-5 h-5 text-gray-400" >;
=======
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:,
        return <Clock className="w-5 h-5 text-gray-400" />;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/10';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/10';
      case 'outage':
        return 'text-red-400 bg-red-500/10';
      default:,
        return 'text-gray-400 bg-gray-500/10';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-500/10';
      case 'major':
        return 'text-orange-400 bg-orange-500/10';
      case 'minor':
        return 'text-yellow-400 bg-yellow-500/10';
      default:,
        return 'text-gray-400 bg-gray-500/10';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';
<<<<<<< HEAD
</Clock>
  return (</Clock>
    </Clock><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">System Status</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Real-time status of all our services and systems. We monitor our infrastructure 24/7 to ensure optimal performance.</p>
          </p>
          
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${getStatusColor(overallStatus)}`}>{getStatusIcon(overallStatus)}<span className="font-semibold">{overallStatus === 'operational' ? 'All Systems Operational' : 'Some Issues Detected'}</span>
=======

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
            System Status;
          </h1>)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            Real-time status of all our services and systems. We monitor our infrastructure 24/7 to ensure optimal performance.)
          </p>)
          ),
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">),
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${getStatusColor(overallStatus)}`}>
              {getStatusIcon(overallStatus)}
              <span className="font-semibold">
                {overallStatus === 'operational' ? 'All Systems Operational' : 'Some Issues Detected'}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"></section>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${getStatusColor(overallStatus)}`}>{getStatusIcon(overallStatus)}</div><span className="font-semibold">{overallStatus === 'operational' ? 'All Systems Operational' : 'Some Issues Detected'}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </span>
            </div>
            <button;
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover: bg-cyan-500/30 transition-colors disabled:opacity-50",
            >,
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span><div className="text-sm text-gray-400">Last updated: {lastUpdated.toLocaleString()}</div>
          </div>
        </section>

        {/* Service Status */}
        <section className="mb-16">
<<<<<<< HEAD
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((service, index) => (</div>
=======
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,
            {services.map((service, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center justify-between mb-4">
=======
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((service, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center justify-between mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-3"></div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-400 text-sm">Uptime</span><span className="text-green-400 font-semibold">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-400 text-sm">Response Time</span><span className="text-cyan-400 font-semibold">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-400 text-sm">Last Incident</span><span className="text-gray-300 text-sm">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2><div className="space-y-4">{incidents.map((incident) => (</section>
              <div key={incident.id} className="cyber-card p-6"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="flex-1"></div>
                    <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3><p className="text-gray-300 mb-4">{incident.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4"></div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>{incident.severity}</span><span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>{incident.status}</span>
                    </span>
                  </div>
                </div>
                
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Start Time:<div className="text-white">{new Date(incident.startTime).toLocaleString()}</div>
=======
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"></div>
                  <div></div>
                    <span className="text-gray-400">Start Time:</span><div className="text-white">{new Date(incident.startTime).toLocaleString()}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  </div>
                  <div></div>
                    <span className="text-gray-400">End Time:</span><div className="text-white">{new Date(incident.endTime).toLocaleString()}</div>
                  </div>
<<<<<<< HEAD
                  <div>
                    <span className="text-gray-400">Affected Services:<div className="text-white">{incident.affectedServices.join(', ')}</div>
=======
                <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">,
                  <div>,
                    <span className="text-gray-400">Start Time:</span>,
                    <div className="text-white">{new Date(incident.startTime).toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">End Time: </span>,
                    <div className="text-white">{new Date(incident.endTime).toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Affected Services: </span>,
                    <div className="text-white">{incident.affectedServices.join(', ')}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
                  <div></div>
                    <span className="text-gray-400">Affected Services:</span><div className="text-white">{incident.affectedServices.join(', ')}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></section>
            <div className="cyber-card p-6 text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div><div className="text-gray-400 text-sm">Overall Uptime</div>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">28ms</div><div className="text-gray-400 text-sm">Average Response Time</div>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <Server className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">6</div><div className="text-gray-400 text-sm">Active Services</div>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="text-3xl font-bold text-white mb-2">0<div className="text-gray-400 text-sm">Active Incidents</div>
=======
              <div className="text-3xl font-bold text-white mb-2">0</div><div className="text-gray-400 text-sm">Active Incidents</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </div>
          </div>
        </section>

=======
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-gray-400 text-sm">Active Incidents</div>,
            </div>,
          </div>,
        </section>,
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        {/* Contact Information */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2><p className="text-xl text-gray-300 mb-8">If you're experiencing issues not reflected in our status page, please contact our support team.</p>
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link;
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                to="/support"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"
              >
<<<<<<< HEAD
                <AlertTriangle className="w-5 h-5 mr-2" >Report an Issue</AlertTriangle>
              </AlertTriangle>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
              >
                <Clock className="w-5 h-5 mr-2" >Call: (302) 464-0950</Clock>
              </Clock>
=======
                <AlertTriangle className="w-5 h-5 mr-2" />
                Report an Issue;
              </Link>
              <a;
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
              >
                <Clock className="w-5 h-5 mr-2" />
                Call: (302) 464-0950;
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </div>
          </div>
        </section>
      </main>

      <Footer />,
    </div>,
  );
};

export default StatusPage;
