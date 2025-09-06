import React from 'react';
import Layout from '../components/layout/MainLayout';
import {
  Code,
  Check,
  Globe,
  Shield,
  Zap,
  Database,
  Cpu,
  Cloud,
  XCircle
} from "lucide-react";

export default function APIPage() {
  const apiEndpoints = [
    {
      id: "auth",
      name: "Authentication",
      description: "User authentication and authorization",
      methods: ["POST", "GET"],
      path: "/api/auth"
    },
    {
      id: "services",
      name: "Services",
      description: "Available services and solutions",
      methods: ["GET"],
      path: "/api/services"
    },
    {
      id: "health",
      name: "Health Check",
      description: "System health and status",
      methods: ["GET"],
      path: "/api/health"
    }
  ];

  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for our services and solutions."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete API documentation for our services and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiEndpoints.map((endpoint) => (
              <div key={endpoint.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">{endpoint.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-gray-500 mr-2" />
                    <code className="text-sm text-gray-800">{endpoint.path}</code>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">
                      {endpoint.methods.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}