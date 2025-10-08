// import Link from 'next/link';




export default function AIFutureWorkforceBanner2026() {
  return (
    <section className='py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-20'></div>
          <div className='absolute top-32 right-20 w-16 h-16 bg-white rounded-full opacity-15'></div>
          <div className='absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full opacity-25'></div>
          <div className='absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full opacity-20'></div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6'>
              <Brain className='w-4 h-4 mr-2' />
              FUTURE OF WORK 2026
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              The AI Workforce Revolution is Here
            </h2>
            <p className='text-xl opacity-90 mb-8'>
              Discover how AI is transforming the workplace with 85% job
              transformation, 60% productivity gains, and revolutionary human-AI
              collaboration patterns that are reshaping careers and
              organizations.
            </p>

            {/* Key Stats */}
            <div className='grid grid-cols-2 gap-6 mb-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                <div className='text-2xl font-bold text-yellow-300 mb-1'>
                  85%
                </div>
                <div className='text-white/80 text-sm'>
                  Jobs Transformed by AI
                </div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                <div className='text-2xl font-bold text-green-300 mb-1'>
                  60%
                </div>
                <div className='text-white/80 text-sm'>
                  Productivity Increase
                </div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                <div className='text-2xl font-bold text-blue-300 mb-1'>40%</div>
                <div className='text-white/80 text-sm'>Cost Reduction</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                <div className='text-2xl font-bold text-purple-300 mb-1'>
                  70%
                </div>
                <div className='text-white/80 text-sm'>Enhanced Creativity</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ArrowRight
                href="/blog/ai-future-workforce-2026"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Users className='w-5 h-5 mr-2' />
                Read Full Article
              </Link>
              <Link
                href='/services'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center'
              >
                <TrendingUp className='w-5 h-5 mr-2' />
                Transform Your Workforce
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className='relative'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
              <h3 className='text-2xl font-bold mb-6'>
                Key Workforce Transformations
              </h3>

              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Users className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='font-bold text-lg mb-1'>
                      AI-Augmented Roles
                    </h4>
                    <p className='text-white/80 text-sm'>
                      AI-assisted content creators, human-AI design teams, and
                      collaborative data analysts
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Brain className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='font-bold text-lg mb-1'>Enhanced Skills</h4>
                    <p className='text-white/80 text-sm'>
                      AI literacy, prompt engineering, and human-AI
                      collaboration expertise
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <TrendingUp className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='font-bold text-lg mb-1'>
                      Organizational Impact
                    </h4>
                    <p className='text-white/80 text-sm'>
                      60% faster decision making, 45% improved accuracy, and 70%
                      reduced repetitive tasks
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <ArrowRight
                  href="/blog/ai-future-workforce-2026"
                  className="inline-flex items-center text-white hover:text-yellow-200 transition-colors font-semibold"
                >
                  Learn More About Workforce Transformation
                  <Link className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
