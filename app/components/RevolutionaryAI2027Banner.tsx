import Link from 'next/link';

export default function RevolutionaryAI2027Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 border border-purple-500/20'>
      {/* Animated Background */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 animate-pulse'></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className='relative z-10'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce'>
            <span className='mr-2'>🚀</span>
            Revolutionary Breakthrough 2027
          </div>
          <h2 className='text-5xl md:text-6xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent'>
              The Future is Now
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Experience the revolutionary AI innovations that are transforming
            enterprise operations with unprecedented speed, efficiency, and
            intelligence
          </p>
        </div>

        {/* Feature Highlights */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>⚡</span>
            </div>
            <h3 className='text-lg font-bold text-cyan-300 mb-2'>
              100,000x Faster
            </h3>
            <p className='text-sm text-gray-400'>
              Processing speeds with neuromorphic computing
            </p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>🔮</span>
            </div>
            <h3 className='text-lg font-bold text-purple-300 mb-2'>
              Quantum Advantage
            </h3>
            <p className='text-sm text-gray-400'>
              Solving intractable problems with quantum-AI
            </p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>🎯</span>
            </div>
            <h3 className='text-lg font-bold text-emerald-300 mb-2'>
              99.9% Accuracy
            </h3>
            <p className='text-sm text-gray-400'>
              Autonomous decision-making precision
            </p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>🔥</span>
            </div>
            <h3 className='text-lg font-bold text-orange-300 mb-2'>
              24/7 Operations
            </h3>
            <p className='text-sm text-gray-400'>
              Self-managing enterprise systems
            </p>
          </div>
        </div>

        {/* Latest Articles Preview */}
        <div className='bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10'>
          <h3 className='text-2xl font-bold text-white mb-6 text-center'>
            Latest Revolutionary Insights
          </h3>
          <div className='grid md:grid-cols-3 gap-4'>
            <Link
              href='/blog/ai-2027-neuromorphic-computing-<revolution'
              className='group bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4 hover:from-cyan-600/30 hover:to-blue-600/30 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/40'
            >
              <h4 className='font-semibold text-cyan-300 group-hover:text-cyan-200 mb-2'>
                Neuromorphic Computing Revolution
              </h4>
              <p className='text-sm text-gray-400 group-hover:text-gray-300'>
                Brain-inspired AI that changes everything
              </p>
            </Link>

            <Link
              href='/blog/quantum-ai-hybrid-systems-<2027'
              className='group bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40'
            >
              <h4 className='font-semibold text-purple-300 group-hover:text-purple-200 mb-2'>
                Quantum-AI Hybrid Systems
              </h4>
              <p className='text-sm text-gray-400 group-hover:text-gray-300'>
                The convergence of quantum and AI
              </p>
            </Link>

            <Link
              href='/blog/autonomous-enterprise-operations-<2027'
              className='group bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-lg p-4 hover:from-emerald-600/30 hover:to-green-600/30 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-400/40'
            >
              <h4 className='font-semibold text-emerald-300 group-hover:text-emerald-200 mb-2'>
                Autonomous Enterprise Operations
              </h4>
              <p className='text-sm text-gray-400 group-hover:text-gray-300'>
                Self-managing organizations of the future
              </p>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <div className='inline-flex flex-wrap gap-4 justify-center'>
            <Link
              href='/<services'
              className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              Transform Your Enterprise
            </Link>
            <Link
              href='/<contact'
              className='border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300'
            >
              Schedule Expert Consultation
            </Link>
          </div>
          <p className='text-gray-400 mt-4 text-sm'>
            Join the revolution • Get started in 24 hours • No long-term
            contracts
          </p>
        </div>
      </div>
    </div>
  );
}
