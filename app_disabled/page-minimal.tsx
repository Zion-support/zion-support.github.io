// import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description:
    'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
};

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'>
      <header className='relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse'></div>
          <div
            className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse'
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='flex items-center justify-between mb-16'>
            <div>
              <Link href='/' className='text-2xl font-bold text-white'>
                Zion Tech Group
              </Link>
            </div>
            <nav className='flex items-center gap-8'>
              <Link
                href='/'
                className='text-gray-300 hover:text-white transition-colors'
              >
                Home
              </Link>
              <Link
                href='/services'
                className='text-gray-300 hover:text-white transition-colors'
              >
                Services
              </Link>
              <Link
                href='/blog'
                className='text-gray-300 hover:text-white transition-colors'
              >
                Blog
              </Link>
              <Link
                href='/case-studies'
                className='text-gray-300 hover:text-white transition-colors'
              >
                Case Studies
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              Advanced AI Solutions
            </span>
          </h1>

          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
            Transform your enterprise with cutting-edge AI and IT solutions that
            deliver unprecedented performance, automation, and competitive
            advantage.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link
              href='/contact'
              className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <span className='text-xl'>🚀</span>
              <span>Get Started</span>
            </Link>

            <Link
              href='/services'
              className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
            >
              <span>Explore Services</span>
              <span className='group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {[
            {
              title: 'AI Automation',
              description:
                'Automate complex business processes with intelligent AI systems.',
              icon: '🤖',
              metrics: ['95% Automation', '300% ROI', 'Zero Touch'],
            },
            {
              title: 'Enterprise Solutions',
              description:
                'Comprehensive AI solutions designed for enterprise scale.',
              icon: '🏢',
              metrics: ['500+ Clients', '99.9% Uptime', '24/7 Support'],
            },
            {
              title: 'Digital Transformation',
              description:
                'Transform your business with cutting-edge AI technologies.',
              icon: '⚡',
              metrics: ['70% Cost Reduction', '90% Efficiency', 'Future Ready'],
            },
          ].map((feature, index) => (
            <div
              key={index}
              className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500'
            >
              <div className='text-4xl mb-4'>{feature.icon}</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                {feature.title}
              </h3>
              <p className='text-gray-300 mb-6'>{feature.description}</p>
              <div className='space-y-2'>
                {feature.metrics.map((metric, metricIndex) => (
                  <div
                    key={metricIndex}
                    className='flex items-center gap-2 text-cyan-400 text-sm'
                  >
                    <span>✓</span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20'>
          <h2 className='text-3xl font-bold text-white mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Join 500+ enterprises achieving unprecedented results with our AI
            solutions.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link
              href='/contact'
              className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <span className='text-xl'>📞</span>
              <span>Contact Us Today</span>
            </Link>

            <Link
              href='/case-studies'
              className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
            >
              <span>View Case Studies</span>
              <span className='group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </Link>
          </div>
        </div>
      </main>

      <footer className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/20'>
        <div className='text-center text-gray-300'>
          <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
          <p className='mt-2'>
            <Link
              href='/privacy'
              className='hover:text-white transition-colors'
            >
              Privacy Policy
            </Link>
            {' | '}
            <Link href='/terms' className='hover:text-white transition-colors'>
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
