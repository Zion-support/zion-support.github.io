import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description:
    'Enterprise-grade AI and IT solutions designed for large organizations. Scalable, secure, and reliable technology solutions.',
};

export default function EnterprisePage() {
  return (
    <>
      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Enterprise Solutions
              </h1>
              <p className='text-xl text-gray-600'>
                Advanced AI and IT solutions designed for large organizations
              </p>
            </div>

            <p className='text-lg text-gray-600 mb-12 max-w-3xl mx-auto'>
              Transform your enterprise with our proven AI solutions. Achieve
              significant cost savings, productivity gains, and high system
              uptime with enterprise-grade security and compliance.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-16'>
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
                className='group flex items-center gap-3 bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-300'
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

      {/* Solutions Section */}
      <section className='py-24 bg-gradient-to-br from-blue-900 to-indigo-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Enterprise Solutions
            </h2>
            <p className='text-xl text-gray-300'>
              Comprehensive solutions for enterprise-scale operations
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Autonomous Operations',
                description:
                  'Self-managing systems that optimize your enterprise operations automatically.',
                icon: '🤖',
              },
              {
                title: 'Business Intelligence',
                description:
                  'Data-driven insights and analytics for strategic decision making.',
                icon: '📊',
              },
              {
                title: 'Quantum Security',
                description:
                  'Next-generation security solutions powered by quantum computing.',
                icon: '🔐',
              },
            ].map((solution, index) => (
              <div
                key={index}
                className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20'
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
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-12'>
            <h3 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Enterprise?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Join Fortune 500 companies achieving unprecedented transformation
              with our enterprise AI solutions.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
              <Link
                href='tel:+13024640950'
                className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
              >
                <span className='text-xl'>📞</span>
                <span>Call Now: (302) 464-0950</span>
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
      </section>
    </>
  );
}