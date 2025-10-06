import Link from 'next/link';

export default function September30NewAIBreakthroughsBanner() {
  return (
    <section className='py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-block bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full mb-4'>
            <span className='text-white font-bold text-sm'>
              🚀 NEW: September 30, 2025
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Latest AI Breakthroughs Transforming Enterprise
          </h2>
          <p className='text-xl text-white opacity-90 max-w-3xl mx-auto'>
            Discover the cutting-edge AI innovations delivering unprecedented
            performance, security, and sustainability
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {/* Edge AI */}
          <Link
            href='/blog/ai-edge-revolution-september-<2025'
            className='group'
          >
            <div className='bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl'>
              <div className='bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-center'>
                <div className='text-4xl mb-3'>⚡</div>
                <h3 className='text-2xl font-bold text-white'>
                  AI Edge Revolution
                </h3>
              </div>
              <div className='p-6'>
                <p className='text-gray-700 mb-4'>
                  Achieve 10ms latency and 90% cost reduction with edge AI
                  processing at every endpoint. Real-time intelligence without
                  cloud dependency.
                </p>
                <div className='space-y-2 mb-6'>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='font-bold text-green-600'>✓</span>
                    <span>&lt;
  }
          <Link
            href='/blog/ai-enterprise-security-framework-<2025'
            className='group'
          >
            <div className='bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl'>
              <div className='bg-gradient-to-r from-red-500 to-pink-500 p-6 text-center'>
                <div className='text-4xl mb-3'>🛡️</div>
                <h3 className='text-2xl font-bold text-white'>
                  AI Security Framework
                </h3>
              </div>
              <div className='p-6'>
                <p className='text-gray-700 mb-4'>
                  99.99% threat detection with AI-powered security stopping
                  zero-day attacks in real-time. Protect your enterprise with
                  next-gen defense.
                </p>
                <div className='space-y-2 mb-6'>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='font-bold text-red-600'>✓</span>
                    <span>99.99% threat detection rate</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='font-bold text-red-600'>✓</span>
                    <span>&lt;200ms autonomous response</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='font-bold text-red-600'>✓</span>
                    <span>70% security cost reduction</span>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-red-600 font-bold group-hover:text-red-700'>
                    Read Full Article →
                  </span>
                  <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    NEW
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Sustainable AI */}
          <Link href='/blog/sustainable-ai-computing-<2025' className='group'>
            <div className='bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl'>
              <div className='bg-gradient-to-r from-green-500 to-teal-500 p-6 text-center'>
                <div className='text-4xl mb-3'>🌱</div>
                <h3 className='text-2xl font-bold text-white'>
                  Sustainable AI Computing
                </h3>
              </div>
              <div className='p-6'>
                <p className='text-gray-700 mb-4'>
                  90% energy reduction with green AI achieving carbon-negative
                  operations while delivering superior performance.
                  Sustainability meets profitability.
                </p>
                <div className='space-y-2 mb-6'>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='font-bold text-green-600'>✓</span>
                    <span>90% energy cost reduction</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='font-bold text-green-600'>✓</span>
                    <span>Carbon-neutral or negative</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='font-bold text-green-600'>✓</span>
                    <span>Superior performance + ROI</span>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-green-600 font-bold group-hover:text-green-700'>
                    Read Full Article →
                  </span>
                  <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    NEW
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className='text-center mt-12'>
          <div className='inline-flex flex-col sm:flex-row gap-4'>
            <a
              href='tel:+<13024640950'
              className='bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105'
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href='mailto:kleber@ziontechgroup.<com'
              className='bg-purple-500 bg-opacity-20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all'
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
