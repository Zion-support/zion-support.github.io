import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Cpu,
  Database,
  Cloud,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Zap className='w-8 h-8' />,
      title: 'AI-Powered Automation',
      description:
        'Streamline your workflows with intelligent automation solutions.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Intelligent Routing',
        'Performance Monitoring',
      ],
      link: '/solutions/automation',
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'AI Security Solutions',
      description:
        'Protect your business with advanced AI-powered security systems.',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Risk Assessment',
        'Compliance Monitoring',
      ],
      link: '/solutions/security',
    },
    {
      icon: <Globe className='w-8 h-8' />,
      title: 'Global AI Platform',
      description:
        'Deploy AI solutions across multiple regions with our global platform.',
      features: [
        'Multi-Region Deployment',
        'Edge Computing',
        'Global CDN',
        'Localized Processing',
      ],
      link: '/solutions/global',
    },
    {
      icon: <Cpu className='w-8 h-8' />,
      title: 'Edge AI Computing',
      description:
        'Bring AI processing closer to your data with edge computing solutions.',
      features: [
        'Edge Processing',
        'Real-time Inference',
        'Low Latency',
        'Offline Capability',
      ],
      link: '/solutions/edge',
    },
    {
      icon: <Database className='w-8 h-8' />,
      title: 'Data Intelligence',
      description:
        'Transform your data into actionable insights with AI-powered analytics.',
      features: [
        'Data Processing',
        'Predictive Analytics',
        'Real-time Insights',
        'Data Visualization',
      ],
      link: '/solutions/data',
    },
    {
      icon: <Cloud className='w-8 h-8' />,
      title: 'Cloud AI Services',
      description:
        'Scalable AI solutions hosted on secure, high-performance cloud infrastructure.',
      features: [
        'Scalable Infrastructure',
        'High Performance',
        'Global Availability',
        'Cost Optimization',
      ],
      link: '/solutions/cloud',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta
          name='description'
          content='Comprehensive AI solutions for every business need.'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>Solutions</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive AI solutions for every business need.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <div className='flex items-center mb-4'>
                <Cpu className='h-8 w-8 text-blue-600 mr-3' />
                <h3 className='text-xl font-semibold'>AI Platform</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Comprehensive AI platform with advanced machine learning
                capabilities.
              </p>
              <Link
                to='/solutions/ai-platform'
                className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
              >
                Learn More <ArrowRight className='h-4 w-4 ml-2' />
              </Link>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <div className='flex items-center mb-4'>
                <Shield className='h-8 w-8 text-green-600 mr-3' />
                <h3 className='text-xl font-semibold'>AI Security</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Advanced security solutions powered by AI to protect your
                business.
              </p>
              <Link
                to='/solutions/ai-security'
                className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
              >
                Learn More <ArrowRight className='h-4 w-4 ml-2' />
              </Link>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <div className='flex items-center mb-4'>
                <Zap className='h-8 w-8 text-yellow-600 mr-3' />
                <h3 className='text-xl font-semibold'>AI Performance</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Optimize your AI systems for maximum performance and efficiency.
              </p>
              <Link
                to='/solutions/ai-performance'
                className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
              >
                Learn More <ArrowRight className='h-4 w-4 ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
