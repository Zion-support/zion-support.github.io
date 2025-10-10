'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Globe, Server, Database, Cloud, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
    setIsRefreshing(true);
    // Simulate API call;
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);}
  };
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':;
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':;
        return <XCircle className="w-5 h-5 text-red-400" />;
              {getStatusIcon(overallStatus)}
              <span className={`text-2xl font-bold ${getStatusColor(overallStatus)}`}>;
                {overallStatus === 'operational' ? 'All Systems Operational' :;}
                 overallStatus === 'degraded' ? 'Degraded Performance' : 'Service Outage'}
              </span>;
            </div>;
            <button;
              onClick={refreshStatus}
              disabled={isRefreshing}
      {/* Services Status */}
      <section className="py-16 px-4"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>;
            {services.map((service, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"></div>;
                <div className="flex items-center justify-between mb-4"></div>;
                  <div className="flex items-center gap-3"></div>;
                    {getStatusIcon(service.status)}
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>;
                  </div>;
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>;
                    {service.status}
      {/* Recent Incidents */}
      <section className="py-16 px-4"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>;
          <div className="space-y-6"></div>;
            {incidents.map((incident) => (;}
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>;
                <div className="flex items-start justify-between mb-4"></div>;
                  <div></div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>;
                    <div className="flex items-center gap-4 text-sm text-gray-400"></div>;
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>;
                      <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>;
                    </div>;
                  </div>;
                  <div className="flex items-center gap-2"></div>;
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>;
                      {incident.severity}
                    </span>;
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${;
                      incident.status === 'resolved';
                        ? 'bg-green-500/20 text-green-400';
                        : 'bg-yellow-500/20 text-yellow-400';}
                    }`}>;
                      {incident.status}
