import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react';
<<<<<<< HEAD
import Layout from './components/layout/MainLayout';

const services = [
  {
    name: 'AI Services',
    status: 'operational',
    uptime: '99.9%',
    lastIncident: '2024-01-07'
  },
  {
    name: 'IT Services',
    status: 'operational',
    uptime: '99.8%',
    lastIncident: '2024-01-05'
  },
  {
    name: 'Micro SaaS',
    status: 'operational',
    uptime: '99.9%',
    lastIncident: '2024-01-03'
  },
  {
    name: 'Cloud Infrastructure',
    status: 'operational',
    uptime: '99.7%',
    lastIncident: '2024-01-01'
  }
];

const incidents = [
  {
    id: 1,
    title: 'Scheduled Maintenance - AI Services',
    description: 'Planned maintenance window for AI service infrastructure updates.',
    status: 'resolved',
    startTime: '2024-01-07T02:00:00Z',
    endTime: '2024-01-07T04:00:00Z',
    impact: 'minor'
  },
  {
    id: 2,
    title: 'Database Performance Issue',
    description: 'Temporary performance degradation in database queries.',
    status: 'resolved',
    startTime: '2024-01-05T14:30:00Z',
    endTime: '2024-01-05T16:45:00Z',
    impact: 'minor'
  },
  {
    id: 3,
    title: 'CDN Outage',
    description: 'Content delivery network experiencing intermittent issues.',
    status: 'resolved',
    startTime: '2024-01-03T09:15:00Z',
    endTime: '2024-01-03T11:30:00Z',
    impact: 'major'
  }
];

const getStatusIcon = (status: string) => {
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

const getStatusColor = (status: string) => {
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
=======
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">System Status</h1>
          <p className="text-xl text-gray-600">Real-time monitoring of our services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-lg font-semibold">All Systems Operational</h3>
            </div>
            <p className="text-gray-600">All services are running normally</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Server className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold">Server Status</h3>
            </div>
            <p className="text-gray-600">99.9% uptime</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Database className="h-8 w-8 text-purple-500 mr-3" />
              <h3 className="text-lg font-semibold">Database</h3>
            </div>
            <p className="text-gray-600">All databases operational</p>
          </div>
        </div>
      </div>
    </div>
  );
}
