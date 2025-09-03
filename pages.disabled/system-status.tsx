import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe } from 'lucide-react';

const SystemStatus: NextPage = () => {
  const services = [;
    {
      name: 'Website',;
      status: 'operational',;
      uptime: '99.9%',;
      responseTime: '120ms',;
      lastIncident: '2025-01-15'},;
    {
      name: 'API Services',;
      status: 'operational',;
      uptime: '99.8%',;
      responseTime: '85ms',;
      lastIncident: '2025-01-10'},;
    {
      name: 'Database',;
      status: 'operational',;
      uptime: '99.95%',;
      responseTime: '45ms',;
      lastIncident: '2025-01-05'},;
    {
      name: 'CDN',;
      status: 'operational',;
      uptime: '99.9%',;
      responseTime: '25ms',;
      lastIncident: '2024-12-28'},;
    {
      name: 'Email Services',;
      status: 'operational',;
      uptime: '99.7%',;
      responseTime: '200ms',;
      lastIncident: '2024-12-20'},;
    {
      name: 'Monitoring',;
      status: 'operational',;
      uptime: '99.9%',;
      responseTime: '50ms',;
      lastIncident: '2024-12-15'}
  ];

  const incidents = [;
    {
      id: 1,;
      title: 'Scheduled Maintenance - API Services',;
      status: 'resolved',;
      severity: 'minor',;
      startTime: '2025-01-15T02:00:00Z',;
      endTime: '2025-01-15T04:00:00Z',;
      description: 'Scheduled maintenance window for API service updates and security patches.'},;
    {
      id: 2,;
      title: 'Database Performance Issue',;
      status: 'resolved',;
      severity: 'major',;
      startTime: '2025-01-10T14:30:00Z',;
      endTime: '2025-01-10T16:45:00Z',;
      description: 'Temporary performance degradation in database queries affecting API response times.'},;
    {
      id: 3,;
      title: 'CDN Edge Server Outage',;
      status: 'resolved',;
      severity: 'minor',;
      startTime: '2024-12-28T08:15:00Z',;
      endTime: '2024-12-28T09:30:00Z',;
      description: 'Brief outage affecting content delivery in the Asia-Pacific region.'}
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':;
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':;
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':;
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:;
        return <Clock className="w-5 h-5 text-gray-500" />}
  }
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':;
        return 'text-green-600 bg-green-100';
      case 'degraded':;
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':;
        return 'text-red-600 bg-red-100';
      default:;
        return 'text-gray-600 bg-gray-100'}
  }
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':;
        return 'text-red-600 bg-red-100';
      case 'major':;
        return 'text-orange-600 bg-orange-100';
      case 'minor':;
        return 'text-yellow-600 bg-yellow-100';
      default:;
        return 'text-gray-600 bg-gray-100'}
  }
  return (;
    <MainLayout;
      title="System Status - Zion Tech Group";
      description="Real-time status of Zion Tech Group's services and systems. Check uptime, performance, and incident reports.";
      keywords="system status, uptime, service status, incidents, monitoring, Zion Tech Group">;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">;
          <div className="container mx-auto px-4 text-center">;
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">;
              <Activity className="w-8 h-8 text-green-300" />;
            </div>;
            <h1 className="text-4xl md:text-5xl font-bold mb-4">;
              System Status;
            </h1>;
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">;
              Real-time status of all Zion Tech Group services and systems. ;
              We maintain 99.9% uptime across all our services.;
            </p>;
          </div>;
        </div>;

        <div className="container mx-auto px-4 py-12">;
          {/* Overall Status */}
          <div className="max-w-6xl mx-auto mb-12">;
            <div className="bg-white rounded-lg shadow-lg p-8">;
              <div className="flex items-center justify-between mb-6">;
                <h2 className="text-2xl font-bold text-gray-900">All Systems Operational</h2>;
                <div className="flex items-center gap-2">;
                  <CheckCircle className="w-6 h-6 text-green-500" />;
                  <span className="text-green-600 font-semibold">All Systems Operational</span>;
                </div>;
              </div>;
              <p className="text-gray-600">;
                All services are running normally. No incidents reported in the last 24 hours.;
              </p>;
            </div>;
          </div>;

          {/* Services Status */}
          <div className="max-w-6xl mx-auto mb-12">;
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Status</h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {services.map((service, index) => (;
                <div key={index} className="bg-white rounded-lg shadow-md p-6">;
                  <div className="flex items-center justify-between mb-4">;
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>;
                    {getStatusIcon(service.status)}
                  </div>;

                  <div className="space-y-3">;
                    <div className="flex justify-between items-center">;
                      <span className="text-gray-600">Status</span>;
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>;
                        {service.status}
                      </span>;
                    </div>;

                    <div className="flex justify-between items-center">;
                      <span className="text-gray-600">Uptime</span>;
                      <span className="font-semibold text-gray-900">{service.uptime}</span>;
                    </div>;

                    <div className="flex justify-between items-center">;
                      <span className="text-gray-600">Response Time</span>;
                      <span className="font-semibold text-gray-900">{service.responseTime}</span>;
                    </div>;

                    <div className="flex justify-between items-center">;
                      <span className="text-gray-600">Last Incident</span>;
                      <span className="text-sm text-gray-500">{service.lastIncident}</span>;
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;

          {/* Recent Incidents */}
          <div className="max-w-6xl mx-auto mb-12">;
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Incidents</h2>;
            <div className="space-y-4">;
              {incidents.map((incident) => (;
                <div key={incident.id} className="bg-white rounded-lg shadow-md p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex-1">;
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h3>;
                      <p className="text-gray-600 mb-4">{incident.description}</p>;
                    </div>;
                    <div className="flex items-center gap-2 ml-4">;
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>;
                        {incident.severity}
                      </span>;
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>;
                        {incident.status}
                      </span>;
                    </div>;
                  </div>;

                  <div className="flex items-center gap-4 text-sm text-gray-500">;
                    <div className="flex items-center gap-1">;
                      <Clock className="w-4 h-4" />;
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>;
                    </div>;
                    <div className="flex items-center gap-1">;
                      <CheckCircle className="w-4 h-4" />;
                      <span>Resolved: {new Date(incident.endTime).toLocaleString()}</span>;
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;

          {/* Performance Metrics */}
          <div className="max-w-6xl mx-auto mb-12">;
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Performance Metrics</h2>;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">;
              <div className="bg-white rounded-lg shadow-md p-6 text-center">;
                <Server className="w-8 h-8 text-blue-600 mx-auto mb-4" />;
                <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9%</h3>;
                <p className="text-gray-600">Overall Uptime</p>;
              </div>;
              <div className="bg-white rounded-lg shadow-md p-6 text-center">;
                <Activity className="w-8 h-8 text-green-600 mx-auto mb-4" />;
                <h3 className="text-2xl font-bold text-gray-900 mb-2">85ms</h3>;
                <p className="text-gray-600">Average Response Time</p>;
              </div>;
              <div className="bg-white rounded-lg shadow-md p-6 text-center">;
                <Database className="w-8 h-8 text-purple-600 mx-auto mb-4" />;
                <h3 className="text-2xl font-bold text-gray-900 mb-2">0</h3>;
                <p className="text-gray-600">Active Incidents</p>;
              </div>;
              <div className="bg-white rounded-lg shadow-md p-6 text-center">;
                <Globe className="w-8 h-8 text-orange-600 mx-auto mb-4" />;
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>;
                <p className="text-gray-600">Services Monitored</p>;
              </div>;
            </div>;
          </div>;

          {/* Status Page Info */}
          <div className="max-w-4xl mx-auto">;
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white">;
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>;
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">;
                Subscribe to status updates to be notified of any service incidents or maintenance windows.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">;
                <input;
                  type="email";
                  placeholder="Enter your email";
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white";
                />;
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Subscribe;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </MainLayout>;
  )}
export default SystemStatus;