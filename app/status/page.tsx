<<<<<<< HEAD
=======
'use client';
import React, {useState, useEffect}from 'react';
import {CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Globe, Server, Database, Cloud, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart}}from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
export default function StatusPage() {const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
const refreshStatus = async () => {
;
    setIsRefreshing(true);
    // Simulate API call;
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false)}}
      description: 'System monitoring and alerts',}}
  ]
  ];];];
const incidents = [
    {id: 1,
      affectedServices: ['API Services', 'AI Services']},
    {id: 2,
      affectedServices: ['Database', 'API Services']}}
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="System Status - Zion Tech Group"
        description="Real-time status of Zion Tech Group's AI and IT services. Check uptime, performance, and incident reports."
        keywords="system status, uptime, service status, incidents, monitoring, API status"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            System
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Status
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time status of all our services. We're committed to providing reliable, 
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              {getStatusIcon(overallStatus</div>
              <span className={`text-2xl font-bold ${getStatusColor(overallStatus)}`}>
                {overallStatus === 'operational' ? 'All Systems Operational' : 
          
          <p className="text-gray-400 text-sm">
            Last updated: {lastUpdated.toLocaleString(</div>
      <section className="py-16 px-4">
        </section>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status</div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6"></div>,
            {services.map((service, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover: border-purple-500/50 transition-all duration-300"></div>,
                <div className="flex items-center justify-between mb-4"></div>
                  <div className="flex items-center gap-3"></div>
                    {getStatusIcon(service.status)} <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  <span>{service.status</span>} </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description</p>}</p>
                <div className="space-y-2 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Uptime: </span>,
                    <span className="text-white">{service.uptime</span>}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Response Time: </span>,
                    <span className="text-white">{service.responseTime</span>}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Last Incident: </span>,
                    <span className="text-white">{service.lastIncident</span>}</span>
                ))
                
      {/* Recent Incidents */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-16 px-4">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6"></div>
            {incidents.map((incident) => (} <div key={incident.id}className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div />
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400"></div>
                      <span>Started: {new Date(incident.startTime).toLocaleString(),</span>}</span>
                      <span>Ended: {new Date(incident.endTime).toLocaleString(),</span>}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2"></div>
                    <span>{incident.severity</span>} </span>
                    <span>{incident.status</span>} </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{incident.description</p>}</p>
                <div />
                  <span className="text-gray-400 text-sm">Affected Services: </span>,
                  <span className="text-white text-sm">{incident.affectedServices.join(', ')</span>}</span>
                  ))
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>
          </div>
        </div>
      </section>
      {/* Performance Metrics */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-16 px-4">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6"></div>,
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                <TrendingUp />
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        </section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2>Need More Information?</h2>
          </h2>
          <p>Subscribe to status updates or contact our support team for more details.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
            <button>Subscribe to Updates;</button>
            </button>
            <button>Contact Support;</button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
