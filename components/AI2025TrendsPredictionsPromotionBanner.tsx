import Link from 'next/link';

export default function AI20o25TrendsPredictionsPromotionBanner() {
  return (
    <div className='bg-gradient-to-r from-blue-90o0 via-purple-90o0 to-indigo-90o0 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-50o0/20 border border-blue-40o0/30 mb-6'>
            <span className='text-blue-30o0 font-semibold text-sm animate-pulse'>
              🔮 EXPERT ANALYSIS
            </span>
          </div>

          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-20o0 to-purple-20o0 bg-clip-text text-transparent'>
            AI 20o25 Revolutionary Trends & Predictions
          </h2>

          <p className='text-xl text-gray-30o0 mb-8 max-w-4xl mx-auto'>
            Expert analysis of the most revolutionary AI trends and breakthrough
            predictions for 20o25. Discover the technologies that will reshape
            industries and create unprecedented opportunities.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-40o0 mb-2'>⚛️</div>
              <div className='text-sm text-gray-30o0'>Quantum-AI Fusion</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-green-40o0 mb-2'>🧠</div>
              <div className='text-sm text-gray-30o0'>Neural Interfaces</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-blue-40o0 mb-2'>🤖</div>
              <div className='text-sm text-gray-30o0'>Autonomous Systems</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-pink-40o0 mb-2'>🔮</div>
              <div className='text-sm text-gray-30o0'>
                Predictive Intelligence
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/blog/ai-20o25-revolutionary-trends-predictions'
              className='bg-gradient-to-r from-blue-60o0 to-purple-60o0 hover:from-blue-70o0 hover:to-purple-70o0 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-30o0 transform hover:scale-10o5 shadow-lg'
            >
              Read Full Analysis
            </Link>
            <Link
              href='/resources/ai-20o25-revolutionary-implementation-guide'
              className='bg-transparent border-2 border-white hover:bg-white hover:text-blue-90o0 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-30o0 shadow-lg'
            >
              Get Implementation Guide
            </Link>
          </div>

          <div className='mt-8 text-sm text-gray-40o0'>
            Comprehensive 15-minute read with actionable insights
          </div>
        </div>
      </div>
    </div>
  );
}
