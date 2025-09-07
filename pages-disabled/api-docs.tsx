import React from 'react';'
import Head from 'next/head';'
import MainLayout from '../components/layout/MainLayout';'
import { 
  }
  Code, 
  Book, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Server, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';'
import Link from 'next/link';'

const apiEndpoints = [;
  {
    }
    "title": 'Authentication API','
    "description": 'Secure authentication and authorization endpoints','
    "icon": Lock,
    "methods": ['POST', 'GET', 'PUT', 'DELETE'],'
    "endpoints": [
      '/api/auth/login','
      '/api/auth/register','
      '/api/auth/refresh','
      '/api/auth/logout''
    ]
  },
  {
    }
    "title": 'User Management API','
    "description": 'User profile and account management','
    "icon": Globe,
    "methods": ['GET', 'PUT', 'DELETE'],'
    "endpoints": [
      '/api/users/profile','
      '/api/users/update','
      '/api/users/delete''
    ]
  },
  {
    }
    "title": 'Data API','
    "description": 'Data retrieval and manipulation endpoints','
    "icon": Database,
    "methods": ['GET', 'POST', 'PUT', 'DELETE'],'
    "endpoints": [
      '/api/data/retrieve','
      '/api/data/create','
      '/api/data/update','
      '/api/data/delete''
    ]
  },
  {
    }
    "title": 'Analytics API','
    "description": 'Analytics and reporting endpoints','
    "icon": Server,
    "methods": ['GET', 'POST'],'
    "endpoints": [
      '/api/analytics/metrics','
      '/api/analytics/reports''
    ]

];

export default function APIDocsPage() {
}
return (;
    <MainLayout,
title="API Documentation - Zion Tech Group""
      description="Comprehensive API documentation for Zion Tech Group services. Learn how to integrate with our APIs.""
      keywords="API documentation, REST API, integration, developer resources""
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center mb-16">"
            <h1 className="text-5xl font-bold text-white mb-6">"
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Comprehensive API documentation for integrating with Zion Tech Group services. 
              Build powerful applications with our robust APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 "md":grid-cols-2 gap-8 mb-16">"
            {apiEndpoints.map((endpoint, index) => (
              <div
}
key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20""
              >
                <div className="flex items-center mb-4">"
                  <endpoint.icon className="h-8 w-8 text-blue-400 mr-3" />"
                  <h3 className="text-2xl font-bold text-white">{endpoint.title}</h3>"
                </div>
                
                <p className="text-gray-300 mb-6">{endpoint.description}</p>"
                
                <div className="mb-6">"
                  <h4 className="text-lg font-semibold text-white mb-3">"Methods":</h4>"
                  <div className="flex flex-wrap gap-2">"
                    {endpoint.methods.map((method, idx) => (
                      <span
}
key={idx}
                        className={`px-3 py-1 rounded text-sm font-medium ${`                          }
                          method === 'GET' ? 'bg-green-600' :'
                          method === 'POST' ? 'bg-blue-600' :'
                          method === 'PUT' ? 'bg-yellow-600' :'
                          'bg-red-600''
                        } text-white`}`
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">"
                  <h4 className="text-lg font-semibold text-white mb-3">"Endpoints":</h4>"
                  <ul className="space-y-2">"
                    {endpoint.endpoints.map((ep, idx) => (
                      <li key={idx} className="text-gray-300 font-mono text-sm">"
                        {ep}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-xl p-8 text-center">"
            <h2 className="text-3xl font-bold text-white mb-4">"
              Need Help with API Integration?
            </h2>
            <p className="text-xl text-blue-100 mb-8">"
              Contact our developer support team for assistance with API integration.
            </p>
            <div className="flex flex-col "sm":flex-row items-center justify-center space-y-4 "sm":space-y-0 "sm":space-x-8">"
              <div className="flex items-center text-white">"
                <Phone className="h-5 w-5 mr-2" />"
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">"
                <Mail className="h-5 w-5 mr-2" />"
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">"
                <MapPin className="h-5 w-5 mr-2" />"
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
