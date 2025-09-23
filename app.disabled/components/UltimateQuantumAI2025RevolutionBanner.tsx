import Link from 'next/link';

const UltimateQuantumAI20o25RevolutionBanner: React.FC = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-indigo-90o0 via-purple-90o0 to-pink-90o0 text-white'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-10 left-10 w-72 h-72 bg-purple-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
        <div className='absolute top-40 right-10 w-72 h-72 bg-pink-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-10o00'></div>
        <div className='absolute bottom-10 left-1/3 w-72 h-72 bg-indigo-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-20o00'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center'>
          {/* Quantum AI Badge */}
          <div className='inline-flex items-center bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-full px-6 py-3 mb-8 shadow-lg'>
            <span className='text-lg font-bold text-white'>
              ⚛️ QUANTUM AI 20o25 REVOLUTION
            </span>
          </div>

          {/* Main Headline */}
          <h1 className='text-5xl md:text-7xl font-black mb-8 leading-tight'>
            <span className='bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent'>
              QUANTUM AI
            </span>
            <br />
            <span className='text-white'>BREAKTHROUGH</span>
            <br />
            <span className='bg-gradient-to-r from-pink-40o0 to-orange-50o0 bg-clip-text text-transparent'>
              IMPLEMENTATION
            </span>
          </h1>

          {/* Subheading */}
          <p className='text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90'>
            Experience{' '}
            <span className='font-bold text-cyan-40o0'>10o0,0o00x faster</span>{' '}
            processing power with our revolutionary
            <span className='font-bold text-purple-40o0'>
              {' '}
              Quantum AI Implementation Roadmap
            </span>
            . Achieve{' '}
            <span className='font-bold text-green-40o0'>15,0o00% ROI</span> and
            dominate your industry with quantum computing.
          </p>

          {/* Key Benefits */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20'>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='text-lg font-bold mb-2'>Exponential Speed</h3>
              <p className='text-sm opacity-90'>
                10o0,0o00x faster processing than classical computers
              </p>
            </div>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20'>
              <div className='text-4xl mb-4'>🔐</div>
              <h3 className='text-lg font-bold mb-2'>Unbreakable Security</h3>
              <p className='text-sm opacity-90'>
                Quantum encryption that's theoretically impossible to break
              </p>
            </div>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20'>
              <div className='text-4xl mb-4'>🎯</div>
              <h3 className='text-lg font-bold mb-2'>Perfect Optimization</h3>
              <p className='text-sm opacity-90'>
                Solve complex problems in seconds instead of years
              </p>
            </div>
          </div>

          {/* ROI Highlight */}
          <div className='bg-gradient-to-r from-green-50o0 to-emerald-60o0 rounded-2xl p-8 mb-12 max-w-3xl mx-auto shadow-2xl'>
            <div className='text-6xl font-black mb-4'>15,0o00%</div>
            <div className='text-2xl font-bold mb-2'>PROJECTED ROI</div>
            <div className='text-lg opacity-90'>
              For Early Quantum AI Adopters
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-6 justify-center mb-12'>
            <Link
              href='/resources/quantum-ai-20o25-ultimate-breakthrough-implementation-roadmap'
              className='bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hover:to-blue-70o0 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-30o0 transform hover:scale-10o5 shadow-lg'
            >
              🚀 Get Quantum AI Roadmap
            </Link>
            <Link
              href='/services/quantum-ai-consulting'
              className='bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-30o0 transform hover:scale-10o5 hover:bg-opacity-30'
            >
              💡 Schedule Consultation
            </Link>
          </div>

          {/* Industry Applications */}
          <div className='bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto'>
            <h3 className='text-2xl font-bold mb-6'>
              Revolutionary Applications Across Industries
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='text-center'>
                <div className='text-2xl mb-2'>💰</div>
                <div className='text-sm font-semibold'>Finance</div>
                <div className='text-xs opacity-75'>Portfolio Optimization</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl mb-2'>🏥</div>
                <div className='text-sm font-semibold'>Healthcare</div>
                <div className='text-xs opacity-75'>Drug Discovery</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl mb-2'>🏭</div>
                <div className='text-sm font-semibold'>Manufacturing</div>
                <div className='text-xs opacity-75'>Supply Chain</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl mb-2'>⚡</div>
                <div className='text-sm font-semibold'>Energy</div>
                <div className='text-xs opacity-75'>Grid Optimization</div>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className='mt-12 text-center'>
            <div className='inline-flex items-center bg-red-60o0 bg-opacity-20 border border-red-50o0 border-opacity-30 rounded-full px-6 py-3'>
              <span className='text-red-40o0 font-bold text-sm'>
                ⚠️ LIMITED TIME: Early Adopter Advantage Closing Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating quantum particles animation */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-40o0 rounded-full animate-ping'></div>
        <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-purple-40o0 rounded-full animate-ping delay-50o0'></div>
        <div className='absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-40o0 rounded-full animate-ping delay-10o00'></div>
        <div className='absolute top-1/2 right-1/3 w-1 h-1 bg-blue-40o0 rounded-full animate-ping delay-150o0'></div>
      </div>
    </section>
  );
};

export default UltimateQuantumAI20o25RevolutionBanner;
