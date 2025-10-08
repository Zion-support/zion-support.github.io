import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Cloud, Database, Users, BarChart3, Cog, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ComprehensiveServices: React.FC = () => {
  const services = [
    {
      id: 'ai-consulting',
      name: 'AI Consulting',
      description:
        'Strategic AI consulting to help you identify opportunities and plan your AI transformation journey.',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Planning',
        'ROI Analysis',
      ],
      icon: <Brain className="w-8 h-8" />,
      link: '/services/ai-consulting',
    },
    {
      id: 'ai-development',
      name: 'AI Development',
      description: 'Custom AI solutions built to your specific requirements and business needs.',
      features: [
        'Custom AI Models',
        'API Development',
        'Integration Services',
        'Performance Optimization',
      ],
      icon: <Cog className="w-8 h-8" />,
      link: '/services/ai-development',
    },
    {
      id: 'ai-training',
      name: 'AI Training',
      description:
        'Comprehensive training programs to upskill your team in AI technologies and best practices.',
      features: [
        'Technical Training',
        'Best Practices',
        'Hands-on Workshops',
        'Certification Programs',
      ],
      icon: <Users className="w-8 h-8" />,
      link: '/services/ai-training',
    },
    {
      id: 'ai-support',
      name: 'AI Support',
      description:
        'Ongoing support and maintenance for your AI systems to ensure optimal performance.',
      features: ['24/7 Support', 'System Monitoring', 'Performance Tuning', 'Regular Updates'],
      icon: <Shield className="w-8 h-8" />,
      link: '/services/ai-support',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Comprehensive Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI services delivering unprecedented business value and transformation."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services delivering unprecedented business value and transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">AI Platform 2025</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Revolutionary AI platform delivering unprecedented business transformation with
                measurable results.
              </p>
              <Link
                to="/services/ai-platform"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More <Rocket className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Quantum AI Security</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced quantum AI security framework providing unprecedented protection against
                emerging threats.
              </p>
              <Link
                to="/services/quantum-ai-security"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More <Rocket className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold">AI Performance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Optimize AI performance with advanced monitoring and optimization tools.
              </p>
              <Link
                to="/services/ai-performance"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More <Rocket className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;
