import React from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/SEOHead';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Globe, Zap } from 'lucide-react';

const StatusPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "System Status - Zion Tech Group",
    "description": "Real-time status of all Zion Tech Group services and systems",
    "url": "https://ziontechgroup.com/status"
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      description: 'Main website and all pages',
      uptime: '99.9%'
    },
    {
      name: 'API Services',
      status: 'operational',
      description: 'REST API and GraphQL endpoints',
      uptime: '99.8%'
    },
    {
      name: 'Database',
      status: 'operational',
      description: 'Primary and backup databases',
      uptime: '99.9%'
    },
    {
      name: 'CDN',
      status: 'operational',
      description: 'Content delivery network',
      uptime: '99.9%'
    },
    {
      name: 'Email Services',
      status: 'operational',
      description: 'Email delivery and notifications',
      uptime: '99.7%'
    },
    {
      name: 'Monitoring',
      status: 'operational',
      description: 'System monitoring and alerts',
      uptime: '99.9%'
    }
  ];

  const incidents = [
    {
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2024-01-15',
      description: 'Planned maintenance window for API infrastructure updates'
    },
    {
      title: 'Database Performance Optimization',
      status: 'resolved',
      date: '2024-01-10',
      description: 'Database query optimization and index improvements'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <>
      <SEOHead
        title="System Status - Zion Tech Group"
        description="Real-time status of all Zion Tech Group services and systems. Monitor uptime and performance."
        keywords="system status, uptime, monitoring, service status, API status"
        structuredData={structuredData}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600">
                  <Server className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                System Status
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Real-time status of all Zion Tech Group services and systems. 
                We maintain 99.9% uptime across all our services.
              </p>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-green-500 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-green-800">All Systems Operational</h2>
                  <p className="text-green-600">All services are running normally with no known issues.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Status</h2>
              <p className="text-lg text-gray-600">
                Current status of all our services and systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">Uptime: {service.uptime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Incidents</h2>
              <p className="text-lg text-gray-600">
                Recent maintenance and incident reports
              </p>
            </div>
            
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{incident.description}</p>
                  <p className="text-sm text-gray-500">Date: {incident.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
              <p className="text-lg text-gray-600">
                Key performance indicators for our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-blue-600 w-fit mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9%</h3>
                <p className="text-gray-600">Overall Uptime</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">&lt;100ms</h3>
                <p className="text-gray-600">Average Response Time</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 w-fit mx-auto mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-gray-600">Monitoring</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-red-600 w-fit mx-auto mb-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">99.99%</h3>
                <p className="text-gray-600">SLA Compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you're experiencing issues not reflected on this page, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Support
              </Link>
              <Link href="/support" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Help Center
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default StatusPage;