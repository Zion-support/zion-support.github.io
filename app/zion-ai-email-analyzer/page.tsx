import React from 'react';
import { ArrowRight, CheckCircle, Star, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../components/SEOOptimizer';

export default function ZionAiEmailAnalyzer() {
  const features = [
    'AI-powered automation',
    'Real-time analytics',
    'Custom integrations',
    'Team collaboration',
    'Advanced reporting',
    'Mobile accessibility'
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Analyzer | Zion Tech Group</title>
        <meta name='description' content='AI-powered email analysis tool that provides insights, sentiment analysis, and automated responses.' />
        <link rel='canonical' href='https://ziontechgroup.com/zion-ai-email-analyzer' />
      </Helmet>
      <SEOOptimizer title='Zion AI Email Analyzer | Zion Tech Group' description='AI-powered email analysis tool that provides insights, sentiment analysis, and automated responses.' />

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse'></div>
        
        <section className='pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'>
                  Zion AI Email Analyzer
                </span>
              </h1>
              
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
                AI-powered email analysis tool that provides insights, sentiment analysis, and automated responses.
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
                <Link
                  to='/contact'
                  className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105'
                >
                  Start Free Trial
                  <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
                </Link>
                <Link
                  to='/demo'
                  className='border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105'
                >
                  Watch Demo
                  <BarChart3 className='w-5 h-5 ml-2 group-hover:rotate-12 transition-transform' />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                Powerful Features
              </h2>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10'
                >
                  <div className='flex items-center mb-4'>
                    <CheckCircle className='w-6 h-6 text-green-400 mr-3 flex-shrink-0' />
                    <h3 className='text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors'>
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}