import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Cloud,
  Database,
  Users,
  BarChart3,
  Cog,
  Rocket,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AISolutions: React.FC = () => {
  const aiSolutions = [
    {
      icon: <Brain className='w-8 h-8' />,
      title: 'Machine Learning & Deep Learning',
      description:
        'Advanced ML models for predictive analytics, pattern recognition, and intelligent automation.',
      features: [
        'Predictive Analytics',
        'Pattern Recognition',
        'Automated Decision Making',
        'Real-time Processing',
      ],
      link: '/solutions/machine-learning',
    },
    {
      icon: <Zap className='w-8 h-8' />,
      title: 'Natural Language Processing',
      description:
        'Transform text and speech into actionable insights with our NLP solutions.',
      features: [
        'Text Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Chatbot Development',
      ],
      link: '/solutions/nlp',
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'AI Security & Compliance',
      description:
        'Protect your data and ensure compliance with AI-powered security solutions.',
      features: [
        'Threat Detection',
        'Data Privacy',
        'Compliance Monitoring',
        'Risk Assessment',
      ],
      link: '/solutions/security',
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
    {
      icon: <Database className='w-8 h-8' />,
      title: 'Data Intelligence',
      description:
        'Turn your data into actionable insights with our comprehensive data intelligence platform.',
      features: [
        'Data Integration',
        'Advanced Analytics',
        'Visualization',
        'Real-time Insights',
      ],
      link: '/solutions/data',
    },
    {
      icon: <Users className='w-8 h-8' />,
      title: 'Customer Experience AI',
      description:
        'Enhance customer interactions with AI-powered personalization and support.',
      features: [
        'Personalization',
        'Customer Support',
        'Recommendation Engines',
        'Behavior Analysis',
      ],
      link: '/solutions/customer',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta
          name='description'
          content='Revolutionary AI solutions delivering unprecedented business value.'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
              AI Solutions
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Revolutionary AI solutions delivering unprecedented business value
              and transformation.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <div className='flex items-center mb-4'>
                <Brain className='h-8 w-8 text-blue-600 mr-3' />
                <h3 className='text-xl font-semibold'>AI Platform 2025</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Revolutionary AI platform delivering unprecedented business
                transformation with measurable results.
              </p>
              <Link
                to='/services/ai-platform'
                className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
              >
                Learn More <Rocket className='h-4 w-4 ml-2' />
              </Link>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <div className='flex items-center mb-4'>
                <Shield className='h-8 w-8 text-green-600 mr-3' />
                <h3 className='text-xl font-semibold'>Quantum AI Security</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Advanced quantum AI security framework providing unprecedented
                protection against emerging threats.
              </p>
              <Link
                to='/services/quantum-ai-security'
                className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
              >
                Learn More <Rocket className='h-4 w-4 ml-2' />
              </Link>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <div className='flex items-center mb-4'>
                <Zap className='h-8 w-8 text-yellow-600 mr-3' />
                <h3 className='text-xl font-semibold'>AI Performance</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Optimize AI performance with advanced monitoring and
                optimization tools.
              </p>
              <Link
                to='/services/ai-performance'
                className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
              >
                Learn More <Rocket className='h-4 w-4 ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
