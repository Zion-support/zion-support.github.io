'use client';
import React, { useState } from 'react';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Globe, Brain, Cloud, Shield, Settings, Users, Database, Zap, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
      ];
    },;
    {;
      title: 'API Reference',;
      icon: 'code',;
      description: 'Complete API documentation and endpoints',;
      docs: [;}
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },;
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },;
        { title: 'SDKs', description: 'Client SDKs and libraries', link: '/docs/api/sdks' }
      ];
    },;
    {;
      title: 'AI Solutions',;
      icon: 'brain',;
      description: 'AI and machine learning documentation',;
      docs: [;}
        { title: 'AI Models', description: 'Available AI models and capabilities', link: '/docs/ai/models' },;
        { title: 'Training Data', description: 'Data preparation and training', link: '/docs/ai/training' },;
        { title: 'Deployment', description: 'Deploying AI models to production', link: '/docs/ai/deployment' }
      ];
    },;
    {;
      title: 'Cloud Services',;
      icon: 'cloud',;
      description: 'Cloud infrastructure and services',;
      docs: [;}
        { title: 'Infrastructure', description: 'Cloud infrastructure setup', link: '/docs/cloud/infrastructure' },;
        { title: 'Security', description: 'Cloud security best practices', link: '/docs/cloud/security' },;
        { title: 'Monitoring', description: 'Monitoring and logging', link: '/docs/cloud/monitoring' }
      ];
    }
  ];
      {/* Popular Docs */}
      <section className="py-16 px-4"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Documentation</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>;
            {popularDocs.map((doc, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"></div>;
                <div className="flex items-center gap-3 mb-4"></div>;
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div>;
                    <BookOpen className="w-5 h-5 text-white" />;
                  </div>;
                  <span className="text-purple-400 text-sm font-medium">{doc.category}</span>;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">;
                  {doc.title}
                </h3>;
                <p className="text-gray-300 text-sm mb-4">{doc.description}</p>;
                <a;
                  href={doc.link}
                            {doc.title}
                          </h4>;
                          <p className="text-gray-300 text-sm">{doc.description}</p>;
                        </div>;
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />;
                      </div>;
                    </a>;
                  ))}
                </div>;
              </div>;
            ))}
