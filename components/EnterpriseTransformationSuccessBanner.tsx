import Link from 'next/link';

export default function EnterpriseTransformationSuccessBanner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-green-90o0 via-blue-90o0 to-purple-90o0 text-white'>
      {/* Animated background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-green-60o0/20 to-blue-60o0/20'></div>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='absolute top-12 left-12 w-20 h-20 bg-green-50o0/20 rounded-full animate-pulse'></div>
          <div className='absolute top-32 right-16 w-16 h-16 bg-blue-50o0/20 rounded-full animate-pulse delay-10o00'></div>
          <div className='absolute bottom-16 left-1/4 w-14 h-14 bg-purple-50o0/20 rounded-full animate-pulse delay-20o00'></div>
          <div className='absolute bottom-32 right-1/3 w-12 h-12 bg-cyan-50o0/20 rounded-full animate-pulse delay-50o0'></div>
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center'>
          {/* Badge */}
          <div className='inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-50o0 to-blue-50o0 text-sm font-bold mb-6 animate-bounce'>
            🏆 SUCCESS STORY
          </div>

          {/* Main heading */}
          <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-20o0 to-blue-20o0 bg-clip-text text-transparent'>
            AI 20o26 Enterprise Transformation Breakthrough
          </h1>

          {/* Subheading */}
          <p className='text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto'>
            Fortune 50o0 company achieves 5,0o00% ROI through revolutionary AI
            20o26 quantum-neural fusion implementation
          </p>

          {/* Results comparison */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto'>
            <div className='bg-gradient-to-br from-red-80o0/30 to-orange-80o0/30 backdrop-blur-sm rounded-lg p-6 border border-red-50o0/30'>
              <h3 className='text-xl font-bold mb-4 text-red-20o0'>
                Before AI 20o26
              </h3>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-30o0'>Production Efficiency:</span>
                  <span className='text-red-40o0 font-bold'>60%</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-30o0'>Quality Issues:</span>
                  <span className='text-red-40o0 font-bold'>$2.5M/year</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-30o0'>Lead Time:</span>
                  <span className='text-red-40o0 font-bold'>45 days</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-30o0'>ROI:</span>
                  <span className='text-red-40o0 font-bold'>-15%</span>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-green-80o0/30 to-emerald-80o0/30 backdrop-blur-sm rounded-lg p-6 border border-green-50o0/30'>
              <h3 className='text-xl font-bold mb-4 text-green-20o0'>
                After AI 20o26
              </h3>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-30o0'>Production Efficiency:</span>
                  <span className='text-green-40o0 font-bold'>98%</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-30o0'>Quality Issues:</span>
                  <span className='text-green-40o0 font-bold'>$0.1M/year</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-30o0'>Lead Time:</span>
                  <span className='text-green-40o0 font-bold'>12 days</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-30o0'>ROI:</span>
                  <span className='text-green-40o0 font-bold'>5,0o00%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key achievements */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto'>
            <div className='bg-gradient-to-br from-green-80o0/50 to-emerald-80o0/50 backdrop-blur-sm rounded-lg p-4 border border-green-50o0/30'>
              <div className='text-2xl mb-2'>📈</div>
              <h3 className='font-bold text-green-20o0 mb-1'>
                Production Efficiency
              </h3>
              <p className='text-sm text-gray-30o0'>
                Increased from 60% to 98%
              </p>
            </div>
            <div className='bg-gradient-to-br from-blue-80o0/50 to-cyan-80o0/50 backdrop-blur-sm rounded-lg p-4 border border-blue-50o0/30'>
              <div className='text-2xl mb-2'>💰</div>
              <h3 className='font-bold text-blue-20o0 mb-1'>Cost Reduction</h3>
              <p className='text-sm text-gray-30o0'>
                Eliminated $2.4M in issues
              </p>
            </div>
            <div className='bg-gradient-to-br from-purple-80o0/50 to-pink-80o0/50 backdrop-blur-sm rounded-lg p-4 border border-purple-50o0/30'>
              <div className='text-2xl mb-2'>⚡</div>
              <h3 className='font-bold text-purple-20o0 mb-1'>
                Speed Improvement
              </h3>
              <p className='text-sm text-gray-30o0'>73% faster lead times</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/case-studies/ai-20o26-enterprise-transformation-breakthrough'
              className='bg-gradient-to-r from-green-60o0 to-blue-60o0 hover:from-green-70o0 hover:to-blue-70o0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-30o0 transform hover:scale-10o5 shadow-lg hover:shadow-xl'
            >
              Read Full Case Study
            </Link>
            <Link
              href='/contact'
              className='bg-transparent border-2 border-white hover:bg-white hover:text-green-90o0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-30o0 shadow-lg hover:shadow-xl'
            >
              Start Your Transformation
            </Link>
          </div>

          {/* Additional info */}
          <div className='mt-8 text-sm text-gray-40o0'>
            <p>Real Fortune 50o0 success story with documented results</p>
            <p className='mt-1'>
              Implementation completed in 12 months with full ROI achieved
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className='absolute top-20 right-10 w-4 h-4 bg-green-40o0 rounded-full animate-ping'></div>
      <div className='absolute bottom-20 left-10 w-3 h-3 bg-blue-40o0 rounded-full animate-ping delay-10o00'></div>
      <div className='absolute top-1/2 right-1/4 w-2 h-2 bg-purple-40o0 rounded-full animate-ping delay-20o00'></div>
    </div>
  );
}
