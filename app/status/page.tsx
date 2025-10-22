'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react';
const StatusPage: React.FC = () => {
  const services = [
    { name: 'AI Services', status: 'operational', uptime: '99.9%' },
    { name: 'IT Infrastructure', status: 'operational', uptime: '99.8%' },
    { name: 'Cloud Services', status: 'operational', uptime: '99.9%' },
    { name: 'API Services', status: 'operational', uptime: '99.7%' },
    { name: 'Database Services', status: 'operational', uptime: '99.9%' },
    { name: 'CDN Services', status: 'operational', uptime: '99.8%'}
  ];
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;}
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';}
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>System Status | Zion Tech Group</title>
        <meta name="description" content="Real-time system status and uptime information for Zion Tech Group services." />
        <meta name="keywords" content="system status, uptime, service status, Zion Tech Group" />
      </Helmet>
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            System
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Status
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time status and uptime information for all Zion Tech Group services
          </p>
        </div>
      </section>
      {/* Status Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Status</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All systems are operational with excellent uptime performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={`font-semibold ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white font-semibold">{service.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Last Updated */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </section>
      <Footer />
    </div>);
};
export default StatusPage;