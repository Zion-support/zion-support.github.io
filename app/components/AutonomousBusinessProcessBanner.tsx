import Link from 'next/link';

export default function AutonomousBusinessProcessBanner() {
  return (
    <section className='py-12 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 border-y border-emerald-500/20'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-8'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4'>
            <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
            AUTONOMOUS ENTERPRISE ERA
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            99.9% Autonomous Business Processes
          </h2>
          <p className='text-xl text-emerald-200 mb-6'>
            Transform Your Business Into a{' '}
            <span className='text-yellow-400 font-bold'>
              Self-Running Enterprise
            </span>
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>99.9%</span>
              </div>
              <div>
                <div className='text-white font-bold'>Automation</div>
                <div className='text-emerald-300 text-sm'>
                  Business Processes
                </div>
              </div>
            </div>
            <div className='text-gray-300 text-sm'>
              Achieve near-complete business process automation with minimal
              human intervention.
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>24/7</span>
              </div>
              <div>
                <div className='text-white font-bold'>Operations</div>
                <div className='text-teal-300 text-sm'>Continuous</div>
              </div>
            </div>
            <div className='text-gray-300 text-sm'>
              Your business runs continuously with intelligent decision-making
              and optimization.
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>0.1s</span>
              </div>
              <div>
                <div className='text-white font-bold'>Decision Speed</div>
                <div className='text-blue-300 text-sm'>Instant Response</div>
              </div>
            </div>
            <div className='text-gray-300 text-sm'>
              Make critical business decisions in milliseconds with autonomous
              intelligence.
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>∞</span>
              </div>
              <div>
                <div className='text-white font-bold'>Scalability</div>
                <div className='text-purple-300 text-sm'>Unlimited Growth</div>
              </div>
            </div>
            <div className='text-gray-300 text-sm'>
              Scale your operations infinitely without proportional cost
              increases.
            </div>
          </div>
        </div>

        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 mb-8'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Revolutionary Capabilities
              </h3>
              <ul className='space-y-3'>
                <li className='flex items-center gap-3 text-emerald-200'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  Autonomous financial operations with real-time reconciliation
                </li>
                <li className='flex items-center gap-3 text-emerald-200'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  Intelligent HR management with predictive performance
                </li>
                <li className='flex items-center gap-3 text-emerald-200'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  Self-optimizing supply chain with predictive inventory
                </li>
                <li className='flex items-center gap-3 text-emerald-200'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  Autonomous customer experience with 95% query resolution
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Proven Results
              </h3>
              <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-emerald-200'>Process Automation</span>
                  <span className='text-white font-bold'>99.7%</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-emerald-200'>Cost Reduction</span>
                  <span className='text-white font-bold'>90%</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-emerald-200'>Decision Speed</span>
                  <span className='text-white font-bold'>864,000x</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-emerald-200'>Error Rate</span>
                  <span className='text-white font-bold'>500x ↓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center'>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='/blog/ai-2026-autonomous-business-<processes'
              className='group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl'
            >
              <span className='flex items-center gap-2'>
                Learn About Autonomous Business
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </span>
            </Link>
            <Link
              href='/case-studies/ai-2026-neural-optimization-success-<story'
              className='group bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300'
            >
              <span className='flex items-center gap-2'>
                View Success Stories
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </span>
            </Link>
          </div>
          <p className='text-emerald-300 text-sm mt-4'>
            Transform your business into an autonomous enterprise today
          </p>
        </div>
      </div>
    </section>
  );
}
