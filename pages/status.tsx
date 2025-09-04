import React from 'react';
import Head from 'next/head';
import { CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';

export default function Status() {
  const incidents = [
    {
      id: '1',
      title: 'Scheduled Maintenance - Cloud Infrastructure',
      status: 'resolved',
      severity: 'minor',
      startTime: '2025-01-25T02:00:00Z',
      endTime: '2025-01-25T04:00:00Z',
      description: 'Routine maintenance completed successfully. All services are now operational.'
    },
    {
      id: '2',
      title: 'API Rate Limiting Update',
      status: 'monitoring',
      severity: 'low',
      startTime: '2025-01-24T10:00:00Z',
      endTime: null,
      description: 'Updated rate limiting policies. Monitoring for any impact on service performance.'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'monitoring':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'investigating':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved':
        return 'text-green-500';
      case 'monitoring':
        return 'text-yellow-500';
      case 'investigating':
        return 'text-orange-500';
      case 'outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <>
      <Head>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time system status and incident reports for Zion Tech Group services." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              System Status
            </h1>
            <p className="text-xl text-gray-600">
              Real-time status of our services and systems
            </p>
          </div>

          {/* Status Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Services</h3>
                <p className="text-green-600 font-medium">Operational</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Website</h3>
                <p className="text-green-600 font-medium">Operational</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Database</h3>
                <p className="text-green-600 font-medium">Operational</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CDN</h3>
                <p className="text-green-600 font-medium">Operational</p>
              </div>
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      {getStatusIcon(incident.status)}
                      <h3 className="text-lg font-semibold text-gray-900 ml-3">
                        {incident.title}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{incident.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>Started: {new Date(incident.startTime).toLocaleString()}</p>
                    {incident.endTime && (
                      <p>Resolved: {new Date(incident.endTime).toLocaleString()}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}