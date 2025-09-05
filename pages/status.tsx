import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react';

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
