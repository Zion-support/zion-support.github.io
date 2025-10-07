import Link from 'next/link';

export default function January2026ContentShowcaseBanner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 rounded-2xl border border-purple-500/30'>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className='relative p-8 md:p-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full mb-4'>
            <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
            January 2026 Revolutionary Breakthroughs
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
            Transform Your Enterprise with Revolutionary AI Breakthroughs
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Discover the latest autonomous operations, quantum neural
            optimization, and self-driving business intelligence that are
            revolutionizing enterprise operations.
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Autonomous Operations */}
          <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <span className='text-blue-300 text-sm font-medium'>
                Enterprise Operations
              </span>
            </div>
            <h3 className='text-xl font-bold text-white mb-3'>
              Autonomous Enterprise Operations Revolution
            </h3>
            <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
              Revolutionary breakthrough with AI-driven decision making,
              self-healing infrastructure, and predictive analytics that reduces
              operational costs by 45%.
            </p>
            <div className='grid grid-cols-2 gap-3 mb-4'>
              <div className='bg-white/10 p-2 rounded-lg text-center'>
                <div className='text-lg font-bold text-white'>60%</div>
                <div className='text-xs text-blue-200'>Downtime Reduction</div>
              </div>
              <div className='bg-white/10 p-2 rounded-lg text-center'>
                <div className='text-lg font-bold text-white'>94%</div>
                <div className='text-xs text-blue-200'>Failure Prediction</div>
              </div>
            </div>
            <Link
              href='/blog/ai-2026-january-autonomous-enterprise-operations-<revolution'
              className='inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors'
            >
              Read Full Article
              <svg
                className='w-4 h-4 ml-1'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>

          {/* Quantum Neural Optimization */}
          <div className='bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <span className='text-purple-300 text-sm font-medium'>
                Quantum AI
              </span>
            </div>
            <h3 className='text-xl font-bold text-white mb-3'>
              Quantum Neural Optimization Breakthrough
            </h3>
            <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
              Revolutionary quantum-enhanced neural networks achieving
              unprecedented optimization capabilities with 1000x faster training
              and 99.7% accuracy.
            </p>
            <div className='grid grid-cols-2 gap-3 mb-4'>
              <div className='bg-white/10 p-2 rounded-lg text-center'>
                <div className='text-lg font-bold text-white'>1000x</div>
                <div className='text-xs text-purple-200'>Faster Training</div>
              </div>
              <div className='bg-white/10 p-2 rounded-lg text-center'>
                <div className='text-lg font-bold text-white'>99.7%</div>
                <div className='text-xs text-purple-200'>Accuracy</div>
              </div>
            </div>
            <Link
              href='/blog/ai-2026-january-quantum-neural-optimization-<breakthrough'
              className='inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors'
            >
              Explore Breakthrough
              <svg
                className='w-4 h-4 ml-1'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>

          {/* Autonomous Business Intelligence */}
          <div className='bg-gradient-to-br from-green-600/20 to-blue-600/20 p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <span className='text-green-300 text-sm font-medium'>
                Business Intelligence
              </span>
            </div>
            <h3 className='text-xl font-bold text-white mb-3'>
              Autonomous Business Intelligence Revolution
            </h3>
            <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
              Revolutionary autonomous BI systems providing real-time insights,
              predictive analytics, and automated decision support with 85%
              faster insights.
            </p>
            <div className='grid grid-cols-2 gap-3 mb-4'>
              <div className='bg-white/10 p-2 rounded-lg text-center'>
                <div className='text-lg font-bold text-white'>85%</div>
                <div className='text-xs text-green-200'>Faster Insights</div>
              </div>
              <div className='bg-white/10 p-2 rounded-lg text-center'>
                <div className='text-lg font-bold text-white'>300%</div>
                <div className='text-xs text-green-200'>ROI</div>
              </div>
            </div>
            <Link
              href='/blog/ai-2026-january-autonomous-business-intelligence-<revolution'
              className='inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors'
            >
              Read Full Article
              <svg
                className='w-4 h-4 ml-1'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-12'>
          <div className='bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Enterprise?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join the revolution and discover how these breakthrough
              technologies can transform your business operations, reduce costs,
              and accelerate growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/<contact'
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105'
              >
                Schedule Consultation
              </Link>
              <Link
                href='/<services'
                className='bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300'
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
