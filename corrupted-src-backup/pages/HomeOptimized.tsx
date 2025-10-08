import React from 'react';
import { ArrowRight, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HomeOptimized: React.FC = () => {
  const features = [
    {
      icon: <Zap className='w-8 h-8' />,
      title: 'Lightning Fast',
      description:
        'Optimized for speed and performance with cutting-edge technology.',
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    },
    {
      icon: <Target className='w-8 h-8' />,
      title: 'Precision AI',
      description:
        'Advanced AI algorithms for accurate and intelligent solutions.',
    },
    {
      icon: <Globe className='w-8 h-8' />,
      title: 'Global Scale',
      description: 'Deploy anywhere with our worldwide infrastructure.',
    },
  ];

  const stats = [
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Countries', value: '50+' },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta
          name='description'
          content='Revolutionary AI solutions delivering unprecedented business value and transformation.'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='text-6xl font-bold text-gray-900 mb-6'>
              Revolutionary AI Solutions
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Delivering unprecedented business value and transformation with
              cutting-edge AI technology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/services'
                className='inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium'
              >
                Get Started <ArrowRight className='h-5 w-5 ml-2' />
              </Link>
              <Link
                to='/demo'
                className='inline-flex items-center px-8 py-4 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium'
              >
                <Play className='h-5 w-5 mr-2' />
                Watch Demo
              </Link>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>
              Why Choose Us?
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
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
                Learn More <ArrowRight className='h-4 w-4 ml-2' />
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
                Learn More <ArrowRight className='h-4 w-4 ml-2' />
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
                Learn More <ArrowRight className='h-4 w-4 ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOptimized;
