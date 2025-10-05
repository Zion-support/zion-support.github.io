import React from 'react';
import { Link } from 'react-router-dom';

const December2025RevolutionaryBreakthroughContentBanner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-amber-900/40 via-orange-900/40 to-red-900/40 border-y border-amber-500/20 py-20'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-500/30 mb-8'>
            <span className='text-amber-400 font-bold text-lg tracking-wider uppercase animate-pulse'>
              🚀 DECEMBER 2025 BREAKTHROUGH
            </span>
          </div>
          <h1 className='text-6xl font-extrabold mb-8 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent'>
            Revolutionary Content Breakthrough
          </h1>
          <p className='text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
            Experience the most advanced AI content generation and management system ever created. 
            December 2025 marks the beginning of a new era in intelligent content orchestration.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/revolutionary-content-demo'
              className='bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1 text-lg'
            >
              Experience the Revolution
            </Link>
            <Link to='/contact?offer=december-2025-breakthrough'
              className='border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg'
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* Revolutionary Features Grid */}
        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {/* Central Feature */}
          <div className='lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10'>
            <div className='text-center mb-8'>
              <div className='text-6xl mb-4'>🧠</div>
              <h2 className='text-4xl font-bold text-white mb-4'>
                Revolutionary Content AI
              </h2>
              <p className='text-xl text-gray-300'>
                Next-generation AI that creates, manages, and optimizes content with unprecedented intelligence
              </p>
            </div>
            
            <div className='grid md:grid-cols-2 gap-6'>
              {[
                {
                  title: 'Quantum Content Generation',
                  description: 'AI that generates content 1000x faster with human-level quality',
                  icon: '⚡'
                },
                {
                  title: 'Predictive Content Strategy',
                  description: 'AI that predicts content trends and creates accordingly',
                  icon: '🔮'
                },
                {
                  title: 'Autonomous Content Management',
                  description: 'Self-managing content systems that optimize and update automatically',
                  icon: '🤖'
                },
                {
                  title: 'Multi-Language Mastery',
                  description: 'Seamless content creation in 100+ languages with cultural context',
                  icon: '🌐'
                }
              ].map((feature, index) => (
                <div key={index} className='p-6 bg-white/5 rounded-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300'>
                  <div className='text-3xl mb-3'>{feature.icon}</div>
                  <h3 className='text-xl font-bold text-white mb-2'>{feature.title}</h3>
                  <p className='text-gray-400'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div className='space-y-8'>
            <div className='bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-8 border border-amber-500/30'>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Breakthrough Benefits
              </h3>
              <div className='space-y-4'>
                {[
                  '99% content creation automation',
                  '500% increase in content quality',
                  'Real-time trend adaptation',
                  'Zero manual content management',
                  'Global content synchronization',
                  'AI-powered SEO optimization'
                ].map((benefit, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <span className='text-amber-400'>✓</span>
                    <span className='text-gray-300'>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Performance Metrics
              </h3>
              <div className='space-y-4'>
                {[
                  { metric: 'Content Speed', value: '1000x faster', color: 'text-green-400' },
                  { metric: 'Quality Score', value: '99.8%', color: 'text-blue-400' },
                  { metric: 'Uptime', value: '99.99%', color: 'text-amber-400' },
                  { metric: 'Cost Reduction', value: '90%', color: 'text-orange-400' }
                ].map((stat, index) => (
                  <div key={index} className='flex justify-between items-center'>
                    <span className='text-gray-300'>{stat.metric}</span>
                    <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className='bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 mb-16'>
          <h2 className='text-4xl font-bold text-white text-center mb-12'>
            Revolutionary Applications
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Enterprise Content',
                description: 'Complete content ecosystem for large organizations with intelligent automation',
                icon: '🏢',
                results: '95% content automation'
              },
              {
                title: 'Media & Publishing',
                description: 'Revolutionary content creation and distribution for media companies',
                icon: '📰',
                results: '1000x content output'
              },
              {
                title: 'E-commerce',
                description: 'Intelligent product descriptions, marketing content, and customer communications',
                icon: '🛒',
                results: '300% conversion increase'
              }
            ].map((useCase, index) => (
              <div key={index} className='text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300'>
                <div className='text-5xl mb-4'>{useCase.icon}</div>
                <h3 className='text-2xl font-bold text-white mb-4'>{useCase.title}</h3>
                <p className='text-gray-300 mb-4'>{useCase.description}</p>
                <div className='text-amber-400 font-bold text-lg'>{useCase.results}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready for the Content Revolution?
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Join the December 2025 breakthrough and transform how your organization creates and manages content.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/contact?offer=december-2025-breakthrough'
              className='bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1 text-lg'
            >
              Start Your Revolution
            </Link>
            <Link to='/december-2025-whitepaper'
              className='border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg'
            >
              Download Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </div>