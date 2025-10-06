// import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description:
    'Comprehensive enterprise AI and IT solutions designed for Fortune 500 companies. Transform your business with our advanced autonomous systems and quantum computing solutions.',
  keywords:
    'enterprise AI, Fortune 500, autonomous systems, quantum computing, enterprise transformation, business intelligence',
};

export default function EnterprisePage() {
  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Hero Section */}
      <header className='relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className='relative z-10 container mx-auto px-4 py-24'>
          <div className='text-center'>
            <div className='flex items-center justify-center gap-3 mb-6'>
              <span className='text-2xl'>🏢</span>
              <span className='text-cyan-400 font-bold text-xl'>
                Enterprise AI Solutions
              </span>
            </div>

            <h1 className='text-5xl md:text-7xl font-extrabold text-white mb-8'>
              Enterprise Solutions
            </h1>

            <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>

            <p className='text-lg text-gray-400 mb-12 max-w-3xl mx-auto'>
              Transform your enterprise with our proven AI solutions. Achieve
              $100M+ cost savings, 500% productivity gains, and 99.9% system
              uptime with enterprise-grade security and compliance.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
              <a
                href='/contact'
                className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
              >
                <span>Schedule Enterprise Demo</span>
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </a>
              <a
                href='#solutions'
                className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
              >
                <span>View Solutions</span>
                <span className='group-hover:translate-x-1 transition-transform'>
                  ↓
                </span>
              </a>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-2xl">🏢</span>
              <span className="text-yellow-400 font-bold text-xl">Enterprise AI Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Enterprise Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                View All Services
              </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
            </div>
          </div>
        </div>
      </header>

<<<<<<< HEAD
      {/* Solutions Section */}
      <section id='solutions' className='py-24'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Enterprise AI Solutions
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Comprehensive AI solutions designed for enterprise-scale
              operations and Fortune 500 requirements.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Solution Cards */}
            {[
              {
                title: 'Autonomous Operations',
                description:
                  'Self-healing infrastructure with 99.99% uptime and 95% cost reduction.',
                icon: '🤖',
                metrics: [
                  '99.99% Uptime',
                  '95% Cost Reduction',
                  'Zero Touch Operations',
                ],
              },
              {
                title: 'Business Intelligence',
                description:
                  'AI-powered analytics delivering 30,000% ROI and real-time insights.',
                icon: '📊',
                metrics: [
                  '30,000% ROI',
                  '$750B+ Savings',
                  'Real-time Analytics',
                ],
              },
              {
                title: 'Quantum Security',
                description:
                  'Quantum-resistant cryptography with 99.99% security against attacks.',
                icon: '🔒',
                metrics: ['99.99% Security', '<1ms Overhead', 'Zero Breaches'],
              },
            ].map((solution, index) => (
              <div
                key={index}
                className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105'
              >
                <div className='text-4xl mb-4'>{solution.icon}</div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {solution.title}
                </h3>
                <p className='text-gray-300 mb-6'>{solution.description}</p>
                <div className='space-y-2'>
                  {solution.metrics.map((metric, i) => (
                    <div key={i} className='flex items-center gap-2'>
                      <span className='w-2 h-2 bg-cyan-400 rounded-full'></span>
                      <span className='text-gray-300 text-sm'>{metric}</span>
                    </div>
                  ))}
                </div>
=======
      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Enterprise-Grade AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed for Fortune 500 companies, delivering unprecedented ROI and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Autonomous Operations',
                description: 'Self-healing infrastructure achieving 99.99% uptime and 95% cost reduction.',
                icon: '🤖',
                metrics: ['99.99% Uptime', '95% Cost Reduction', 'Zero Touch Operations']
              },
              {
                title: 'Business Intelligence',
                description: 'AI-powered analytics delivering 30,000% ROI and unprecedented insights.',
                icon: '📊',
                metrics: ['30,000% ROI', '$750B+ Savings', '99.99% Accuracy']
              },
              {
                title: 'Quantum Security',
                description: 'Quantum-resistant cryptography protecting against classical and quantum attacks.',
                icon: '🔒',
                metrics: ['99.99% Security', '<1ms Overhead', 'Zero Breaches']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.metrics.map((metric, idx) => (
                    <li key={idx} className="text-cyan-400 text-sm">✓ {metric}</li>
                  ))}
                </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className='py-24'>
        <div className='container mx-auto px-4'>
          <div className='text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20'>
            <h3 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Enterprise?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Join 500+ Fortune 500 companies achieving unprecedented
              transformation with our enterprise AI solutions.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
              <a
                href='tel:+13024640950'
                className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
              >
                <span className='text-xl'>📞</span>
                <span>Call +1 302 464 0950</span>
              </a>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
              >
                <span className='text-xl'>📧</span>
                <span>Get Enterprise Consultation</span>
              </a>
=======
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Fortune 500 companies achieving unprecedented success with our enterprise AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                View Case Studies
              </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
            </div>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
