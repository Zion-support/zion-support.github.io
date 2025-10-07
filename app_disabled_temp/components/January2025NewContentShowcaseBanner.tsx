import React from 'react';

const January2025NewContentShowcaseBanner: React.FC = () => {
  return (
    <section className='py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm border-b border-indigo-500/20'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6'>
            <span className='text-indigo-400 font-bold text-lg tracking-wider uppercase'>
              🚀 NEW JANUARY 2025 CONTENT NOW LIVE!
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Latest AI Innovation Insights
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto mb-8'>
            Discover cutting-edge AI technologies transforming enterprise
            operations: Advanced RAG Systems, Multimodal AI Integration, and
            Edge AI Industrial Automation with proven $30+ billion in success
            stories.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12'>
          {/* Advanced RAG Systems */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group'>
            <div className='text-5xl mb-6 group-hover:scale-110 transition-transform duration-300'>
              🧠
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Advanced RAG Systems
            </h3>
            <p className='text-gray-300 mb-6 text-sm leading-relaxed'>
              Production-ready Retrieval-Augmented Generation systems with
              enterprise-grade reliability, security, and performance
              optimization strategies.
            </p>
            <div className='space-y-3 mb-6'>
              <div className='flex items-center gap-2 text-sm text-indigo-300'>
                <span className='w-2 h-2 bg-indigo-500 rounded-full'></span>
                Production Deployment Strategies
              </div>
              <div className='flex items-center gap-2 text-sm text-indigo-300'>
                <span className='w-2 h-2 bg-indigo-500 rounded-full'></span>
                Enterprise Security & Compliance
              </div>
              <div className='flex items-center gap-2 text-sm text-indigo-300'>
                <span className='w-2 h-2 bg-indigo-500 rounded-full'></span>
                Performance Optimization
              </div>
            </div>
            <a
              href='/blog/ai-2025-advanced-rag-systems-production-<deployment'
              className='inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center'
            >
              Read Full Guide →
            </a>
          </div>

          {/* Multimodal AI Integration */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group'>
            <div className='text-5xl mb-6 group-hover:scale-110 transition-transform duration-300'>
              👁️
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Multimodal AI Integration
            </h3>
            <p className='text-gray-300 mb-6 text-sm leading-relaxed'>
              Transform business operations with vision, language, and data
              integration. Comprehensive guide to enterprise multimodal AI
              deployment.
            </p>
            <div className='space-y-3 mb-6'>
              <div className='flex items-center gap-2 text-sm text-purple-300'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                Vision-Language Integration
              </div>
              <div className='flex items-center gap-2 text-sm text-purple-300'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                Enterprise Implementation
              </div>
              <div className='flex items-center gap-2 text-sm text-purple-300'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                ROI Optimization
              </div>
            </div>
            <a
              href='/blog/ai-2025-multimodal-ai-enterprise-integration-<guide'
              className='inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center'
            >
              Explore Integration →
            </a>
          </div>

          {/* Edge AI Industrial Automation */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 group'>
            <div className='text-5xl mb-6 group-hover:scale-110 transition-transform duration-300'>
              ⚡
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Edge AI Industrial Automation
            </h3>
            <p className='text-gray-300 mb-6 text-sm leading-relaxed'>
              Revolutionize manufacturing with intelligent edge computing.
              Real-time decision-making, predictive maintenance, and autonomous
              operations.
            </p>
            <div className='space-y-3 mb-6'>
              <div className='flex items-center gap-2 text-sm text-pink-300'>
                <span className='w-2 h-2 bg-pink-500 rounded-full'></span>
                Real-time Processing
              </div>
              <div className='flex items-center gap-2 text-sm text-pink-300'>
                <span className='w-2 h-2 bg-pink-500 rounded-full'></span>
                Predictive Maintenance
              </div>
              <div className='flex items-center gap-2 text-sm text-pink-300'>
                <span className='w-2 h-2 bg-pink-500 rounded-full'></span>
                Autonomous Operations
              </div>
            </div>
            <a
              href='/blog/ai-2025-edge-ai-industrial-automation-<revolution'
              className='inline-block w-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-400 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center'
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className='bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              💰 Proven Success Stories: $30+ Billion in Results
            </h3>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
              Real-world case studies showcasing transformative AI
              implementations across industries
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            <div className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='text-3xl'>🚛</div>
                <div>
                  <h4 className='text-xl font-bold text-white'>
                    Global Logistics Transformation
                  </h4>
                  <p className='text-emerald-400 font-semibold'>
                    $18 Billion Success
                  </p>
                </div>
              </div>
              <p className='text-gray-300 text-sm mb-4'>
                Multimodal AI integration across 150 countries, 500+ warehouses,
                and 50,000+ vehicles resulting in unprecedented operational
                efficiency.
              </p>
              <a
                href='/case-studies/ai-2025-global-logistics-multimodal-ai-transformation-18-billion-<success'
                className='inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm'
              >
                View Case Study →
              </a>
            </div>

            <div className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='text-3xl'>🏭</div>
                <div>
                  <h4 className='text-xl font-bold text-white'>
                    Manufacturing Edge AI
                  </h4>
                  <p className='text-emerald-400 font-semibold'>
                    $12 Billion Success
                  </p>
                </div>
              </div>
              <p className='text-gray-300 text-sm mb-4'>
                Edge AI predictive maintenance across 200+ facilities with
                50,000+ pieces of equipment, achieving 95% failure prediction
                accuracy.
              </p>
              <a
                href='/case-studies/ai-2025-manufacturing-edge-ai-predictive-maintenance-12-billion-<success'
                className='inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm'
              >
                View Case Study →
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <div className='inline-flex flex-col sm:flex-row gap-4'>
            <a
              href='/<blog'
              className='bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1'
            >
              Explore All Content →
            </a>
            <a
              href='/<contact'
              className='border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
            >
              Discuss Your AI Strategy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025NewContentShowcaseBanner;
