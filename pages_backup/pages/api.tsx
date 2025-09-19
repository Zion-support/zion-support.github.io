import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {,
  Code;
  Check;
  Globe;
  Shield;
  Zap;
  Database;
  Cpu;
  Cloud;
  XCircle,
} from 'lucide-react';
export default function APIPage() {,
  const apiEndpoints = [,
    {,
      id: 'auth';
      title: 'Authentication';
      description: 'Secure authentication and authorization endpoints';
      baseUrl: '/api/v1/auth';
      methods: [,
        {,
          method: 'POST';
          endpoint: '/login';
          description: 'Authenticate user with email and password';
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/login \\,
  -H "Content-Type: application/json" \\,
  -d '{,
    "email": "user@example.com";
    "password": "your_password",
  }'`,
        };
        {,
          method: 'POST';
          endpoint: '/register';
          description: 'Register a new user account';
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/register \\,
  -H "Content-Type: application/json" \\,
  -d '{,
    "email": "user@example.com";
    "password": "your_password";
    "name": "John Doe",
  }'`,
        }
      ],
    };
    {,
      id: 'ai-services';
      title: 'AI Services';
      description: 'Access our AI-powered services and models';
      baseUrl: '/api/v1/ai';
      methods: [,
        {,
          method: 'POST';
          endpoint: '/chat';
          description: 'Send messages to our AI chat service';
          code: `curl -X POST https://api.ziontechgroup.com/v1/ai/chat \\,
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\,
  -H "Content-Type: application/json" \\,
  -d '{,
    "message": "Hello, how can you help me?";
    "model": "gpt-4";
    "temperature": 0.7,
  }'`,
        }
      ],
    }
  ];
  const responseExamples = {,
    success: {,
      status: 200;
      data: {,
        message: "Request successful";
        data: {,
          id: "12345";
          name: "Example Response";
          created_at: "2024-01-01T00:00:00Z",}
      }
    };
    error: {,
      status: 400;
      error: {,
        code: "VALIDATION_ERROR";
        message: "Invalid request parameters";
        details: {,
          field: "email";
          issue: "Invalid email format",}
      }
    }
  };
  return (,
    <MainLayout,
      title="API Documentation - Zion Tech Group",
      description="Comprehensive API documentation for Zion Tech Group services. Access our AI, cloud, and enterprise APIs with detailed examples and guides.",
      keywords="API documentation, REST API, AI API, cloud API, developer resources",
    >,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">,
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">,
          <div className="absolute inset-0">,
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>,
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>,
          </div>,
          <div className="container mx-auto px-4 relative z-10">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className="text-center",
            >,
              <h1 className="text-4xl md: text-6xl font-bold mb-6">,
                API{' ',}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">,
                  Documentation,
                </span>,
              </h1>,
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
                Integrate with Zion Tech Group's powerful APIs to build amazing applications,
                with AI, cloud services, and enterprise solutions.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Quick Start */}
        <section className="py-20 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              className="text-center mb-16",
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-6">,
                Quick Start Guide,
              </h2>,
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">,
                Get started with our APIs in minutes. Follow these simple steps to make your first API call.,
              </p>,
            </motion.div>,
            <div className="max-w-4xl mx-auto">,
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
                <motion.div,
                  className="text-center",
                  initial={{ opacity: 0, y: 30 ,}}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.8 ,}}
                  viewport={{ once: true ,}}
                >,
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">,
                    <Shield className="w-8 h-8 text-indigo-600" />,
                  </div>,
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Get API Key</h3>,
                  <p className="text-gray-600">Sign up and obtain your API key from the dashboard</p>,
                </motion.div>,
                <motion.div,
                  className="text-center",
                  initial={{ opacity: 0, y: 30 ,}}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.8, delay: 0.1 ,}}
                  viewport={{ once: true ,}}
                >,
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">,
                    <Code className="w-8 h-8 text-purple-600" />,
                  </div>,
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Make Request</h3>,
                  <p className="text-gray-600">Use our RESTful APIs with your preferred language</p>,
                </motion.div>,
                <motion.div,
                  className="text-center",
                  initial={{ opacity: 0, y: 30 ,}}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.8, delay: 0.2 ,}}
                  viewport={{ once: true ,}}
                >,
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">,
                    <Zap className="w-8 h-8 text-green-600" />,
                  </div>,
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Build & Scale</h3>,
                  <p className="text-gray-600">Create powerful applications with our APIs</p>,
                </motion.div>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Response Examples */}
        <section className="py-20 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <motion.div,
              className="text-center mb-16",
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-6">,
                Response Examples,
              </h2>,
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">,
                Understand the structure of our API responses with these examples.,
              </p>,
            </motion.div>,
            <div className="max-w-4xl mx-auto">,
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
                <motion.div,
                  className="bg-white border border-gray-200 rounded-lg p-6",
                  initial={{ opacity: 0, y: 30 ,}}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.8 ,}}
                  viewport={{ once: true ,}}
                >,
                  <div className="flex items-center mb-4">,
                    <Check className="w-6 h-6 text-green-500 mr-3" />,
                    <h3 className="text-lg font-semibold text-gray-900">Success Response</h3>,
                  </div>,
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">,
                    <pre className="text-green-400 text-sm font-mono">,
                      <code>{JSON.stringify(responseExamples.success, null, 2)}</code>,
                    </pre>,
                  </div>,
                </motion.div>,
                <motion.div,
                  className="bg-white border border-gray-200 rounded-lg p-6",
                  initial={{ opacity: 0, y: 30 ,}}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.8, delay: 0.1 ,}}
                  viewport={{ once: true ,}}
                >,
                  <div className="flex items-center mb-4">,
                    <XCircle className="w-6 h-6 text-red-500 mr-3" />,
                    <h3 className="text-lg font-semibold text-gray-900">Error Response</h3>,
                  </div>,
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">,
                    <pre className="text-red-400 text-sm font-mono">,
                      <code>{JSON.stringify(responseExamples.error, null, 2)}</code>,
                    </pre>,
                  </div>,
                </motion.div>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              className="text-center",
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-3xl md: text-4xl font-bold mb-6">,
                Ready to Get Started?,
              </h2>,
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">,
                Start building with our APIs today. Get your API key and begin integrating,
                with our powerful services.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <a,
                  href="/contact",
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold",
                >,
                  Get API Key,
                </a>,
                <a,
                  href="/docs",
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold",
                >,
                  View Documentation,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </MainLayout>,
  ),}