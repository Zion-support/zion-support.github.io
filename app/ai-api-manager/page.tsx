'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, BarChart } from 'lucide-react';

const AIAPIManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent API Management',
      description: 'AI-driven API lifecycle management with automated optimization and intelligent routing',
      benefits: ['Smart API discovery', 'Auto-versioning', 'Intelligent caching', 'Performance optimization']
    },
    {
      icon: Settings,
      title: 'Advanced Configuration',
      description: 'Comprehensive API configuration with visual editor and code generation',
      benefits: ['Visual API designer', 'Code generation', 'Schema validation', 'Environment management']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Real-time API analytics with AI-powered insights and performance monitoring',
      benefits: ['Real-time metrics', 'AI insights', 'Performance tracking', 'Usage analytics']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with advanced threat detection and compliance features',
      benefits: ['OAuth 2.0 & OpenID', 'API encryption', 'Threat detection', 'Compliance tools']
    }
  ];

  const capabilities = [
    'Automated API documentation generation',
    'Intelligent load balancing and scaling',
    'Real-time API performance monitoring',
    'Advanced security and access control',
    'Multi-cloud deployment support',
    'Custom API gateway configuration',
    'Integration with popular development tools',
    'Comprehensive API testing suite'
  ];

  const integrations = [
    { name: 'AWS', logo: 'AWS' },
    { name: 'Azure', logo: 'Azure' },
    { name: 'Google Cloud', logo: 'GCP' },
    { name: 'Kubernetes', logo: 'K8s' },
    { name: 'Docker', logo: 'Docker' },
    { name: 'Terraform', logo: 'Terraform' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Helmet><>
</Helmet>
<title>AI API Manager | Zion Tech Group</title><>
<//title>
<meta name="description" content="Advanced AI-powered API management platform by Zion Tech Group. Intelligent API lifecycle management and optimization." /><>
</meta name="description" content="Advanced AI-powered API management platform by Zion Tech Group. Intelligent API lifecycle management and optimization." />
<meta name="keywords" content="API manager, AI APIs, API lifecycle, API optimization, microservices management" /><>
</meta name="keywords" content="API manager, AI APIs, API lifecycle, API optimization, microservices management" />
</Helmet><>
<//Helmet>
<Navigation /></Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"><>
</section className="relative py-20 px-4 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div><>
<//div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div><>
<//div>
<div className="relative max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1><>
<//h1>
<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI API Manager
            </span><>
<//span>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p><//p>
            The most intelligent API management platform that adapts, learns, and optimizes your APIs automatically.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button><//button>
              Start Managing</button><>
<//button>
<ArrowRight className="ml-2 h-5 w-5" /><>
</ArrowRight className="ml-2 h-5 w-5" />
</button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button><//button>
              View Demo</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Features Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4">Powerful Management Features</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Everything you need to manage, monitor, and optimize your APIs with AI-powered intelligence.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
            {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<feature.icon className="w-8 h-8 text-white" /><>
</feature.icon className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{feature.description}</p><>
<//p>
<ul className="space-y-2 text-sm text-gray-400"></ul className="space-y-2 text-sm text-gray-400">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center"><>
</li key={benefitIndex} className="flex items-center">
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5"><>
</section className="py-20 px-4 bg-white bg-opacity-5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4">Platform Capabilities</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Comprehensive API management capabilities powered by artificial intelligence.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"></div><//div>
            {capabilities.map((capability, index) => (</div><>
<//div>
<div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6"></div><>
<//div>
<div className="flex items-center mb-4"></div><>
<//div>
<CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" /><>
</CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
<p className="text-white font-medium">{capability}</p><>
<//p>
</div><>
<//div>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Integrations Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Works with your existing tools and cloud providers for a seamless experience.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"></div><//div>
            {integrations.map((integration, index) => (</div><>
<//div>
<div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300"></div><>
<//div>
<div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div><>
<//div>
<span className="text-white font-bold text-sm">{integration.logo}</span><>
<//span>
</div><>
<//div>
<p className="text-white text-sm font-medium">{integration.name}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600"><>
</section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-6">Ready to Manage Your APIs Intelligently?</h2><>
<//h2>
<p className="text-xl text-purple-100 mb-8"></p><//p>
            Experience the future of API management with AI-powered automation and optimization.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"></button><//button>
              Start Free Trial</button><>
<//button>
</button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button><//button>
              Schedule Demo</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
<Footer /><>
</Footer />
</div><//div>
  );
};

export default AIAPIManagerPage;
