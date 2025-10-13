import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  ClockIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function StatusPage() {
  const services = [
    {
      name: "AI Analytics API",
      status: "operational",
      uptime: "99.9%",
      responseTime: "120ms",
      lastIncident: "2024-01-10"
    },
    {
      name: "Content Generation API",
      status: "operational",
      uptime: "99.8%",
      responseTime: "95ms",
      lastIncident: "2024-01-05"
    },
    {
      name: "Cloud Management API",
      status: "operational",
      uptime: "99.9%",
      responseTime: "80ms",
      lastIncident: "2023-12-20"
    },
    {
      name: "Security Monitoring API",
      status: "operational",
      uptime: "99.7%",
      responseTime: "150ms",
      lastIncident: "2024-01-12"
    },
    {
      name: "Authentication Service",
      status: "operational",
      uptime: "99.9%",
      responseTime: "50ms",
      lastIncident: "2023-12-15"
    },
    {
      name: "Database Services",
      status: "operational",
      uptime: "99.9%",
      responseTime: "25ms",
      lastIncident: "2023-11-30"
    }
  ];

  const recentIncidents = [
    {
      title: "AI Analytics API - Slow Response Times",
      status: "resolved",
      date: "2024-01-10",
      description: "Some users experienced slower response times due to increased load. Issue resolved within 2 hours.",
      duration: "2 hours"
    },
    {
      title: "Content Generation API - Intermittent Errors",
      status: "resolved",
      date: "2024-01-05",
      description: "Intermittent 500 errors were reported. Root cause identified and fixed.",
      duration: "45 minutes"
    },
    {
      title: "Security Monitoring API - Maintenance Window",
      status: "scheduled",
      date: "2024-01-15",
      description: "Planned maintenance window for security updates. Expected downtime: 30 minutes.",
      duration: "30 minutes"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircleIcon className="w-6 h-6 text-green-400" />;
      case 'degraded':
        return <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />;
      case 'outage':
        return <XCircleIcon className="w-6 h-6 text-red-400" />;
      case 'maintenance':
        return <ClockIcon className="w-6 h-6 text-blue-400" />;
      default:
        return <CheckCircleIcon className="w-6 h-6 text-green-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-green-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Service Status - Zion Tech Group</title>
        <meta name="description" content="Check the current status of Zion Tech Group services. Real-time monitoring of API uptime, performance, and incident reports." />
        <meta name="keywords" content="service status, uptime, API status, monitoring, incidents, system health" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Service Status
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real-time monitoring of our services
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Stay informed about the current status of all our services, 
              including uptime, performance metrics, and any ongoing incidents.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Overall System Status
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <CheckCircleIcon className="w-12 h-12 text-green-400" />
              <span className="text-3xl font-bold text-green-400">All Systems Operational</span>
            </div>
            <p className="text-xl text-gray-300">
              All services are running normally
            </p>
          </div>
        </div>
      </section>

      {/* Service Status Grid */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Status
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed status of all our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status</span>
                    <span className={`font-semibold ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-green-400 font-semibold">{service.uptime}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-blue-400 font-semibold">{service.responseTime}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Last Incident</span>
                    <span className="text-gray-300 text-sm">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recent Incidents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Latest updates on service incidents and maintenance
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {recentIncidents.map((incident, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{incident.title}</h3>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(incident.status)}
                    <span className={`font-semibold ${getStatusColor(incident.status)}`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{incident.description}</p>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span>Date: {incident.date}</span>
                  <span>Duration: {incident.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key performance indicators for our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "99.9%", label: "Average Uptime" },
              { metric: "95ms", label: "Average Response Time" },
              { metric: "99.99%", label: "SLA Compliance" },
              { metric: "< 1min", label: "Mean Time to Resolution" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              If you're experiencing issues not reflected here, please contact our support team
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/support" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Support
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Report Issue
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>support@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}