import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description:
    'Enterprise-grade AI and IT solutions designed for large organizations. Scalable, secure, and reliable technology solutions.',
};

export default function EnterprisePage() {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-5xl font-bold text-white mb-6'>
                Enterprise Solutions
              </h1>
              <p className='text-xl text-gray-300 mb-6'>
                Advanced AI and IT solutions designed for large organizations
              </p>
              <p className='text-lg text-gray-400 mb-12 max-w-3xl mx-auto'>
                Transform your enterprise with our proven AI solutions. Achieve
                $100M+ cost savings, 500% productivity gains, and 99.9% system
                uptime with enterprise-grade security and compliance.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
                <Link
                  href='/contact'
                  className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
                >
                  <span>Schedule Enterprise Demo</span>
                  <span className='group-hover:translate-x-1 transition-transform'>
                    →
                  </span>
                </Link>
                <Link
                  href='#solutions'
                  className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
                >
                  <span>View Solutions</span>
                  <span className='group-hover:translate-x-1 transition-transform'>
                    ↓
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section id='solutions' className='py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-white mb-6'>
                Enterprise AI Solutions
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Comprehensive solutions designed for Fortune 500 companies
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: '🤖',
                  title: 'Autonomous Operations',
                  description:
                    'Self-managing systems that optimize enterprise operations automatically with AI-driven decision making.',
                },
                {
                  icon: '📊',
                  title: 'Business Intelligence',
                  description:
                    'Advanced analytics and insights platform delivering real-time business intelligence across your organization.',
                },
                {
                  icon: '🔒',
                  title: 'Quantum Security',
                  description:
                    'Next-generation quantum encryption protecting your enterprise data with unbreakable security.',
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300'
                >
                  <div className='text-4xl mb-4'>{solution.icon}</div>
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {solution.title}
                  </h3>
                  <p className='text-gray-300 mb-6'>{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20'>
              <h3 className='text-4xl font-bold text-white mb-6'>
                Ready to Transform Your Enterprise?
              </h3>
              <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                Join 500+ Fortune 500 companies achieving unprecedented
                transformation with our enterprise AI solutions.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
                <Link
                  href='tel:+13024640950'
                  className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
                >
                  <span className='text-xl'>📞</span>
                  <span>Call: +1 (302) 464-0950</span>
                </Link>
                <Link
                  href='/contact'
                  className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
                >
                  <span className='text-xl'>📧</span>
                  <span>Get Enterprise Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}