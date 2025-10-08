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
              <p className='text-xl text-gray-600 mb-8'>
                Advanced AI and IT solutions designed for large organizations
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
                Transform your enterprise with our proven AI solutions. Achieve
                significant cost savings, productivity gains, and system
                uptime with enterprise-grade security and compliance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span>Schedule Enterprise Demo</span>
                  <span>→</span>
                </Link>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-300"
                >
                  <span>View Solutions</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Solutions Section */}
            <section id="solutions" className="py-12">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Enterprise Solutions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI and IT solutions tailored for enterprise needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🤖',
                    title: 'Autonomous Operations',
                    description: 'Self-managing systems that optimize enterprise operations automatically with AI-powered decision making.',
                  },
                  {
                    icon: '📊',
                    title: 'Business Intelligence',
                    description: 'Advanced analytics and insights to drive strategic decisions with real-time data processing.',
                  },
                  {
                    icon: '🔐',
                    title: 'Quantum Security',
                    description: 'Next-generation security solutions powered by quantum computing for unbreakable protection.',
                  },
                  {
                    icon: '☁️',
                    title: 'Cloud Integration',
                    description: 'Seamless cloud migration and integration services for scalable enterprise infrastructure.',
                  },
                  {
                    icon: '⚡',
                    title: 'Process Automation',
                    description: 'End-to-end automation of business processes to increase efficiency and reduce costs.',
                  },
                  {
                    icon: '🎯',
                    title: 'AI Consulting',
                    description: 'Expert guidance and strategy development for successful AI implementation in your organization.',
                  },
                ].map((solution, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4">
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join leading Fortune 500 companies achieving unprecedented
              transformation with our enterprise AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="text-xl">📞</span>
                <span>Call Us Now</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
              >
                <span className="text-xl">📧</span>
                <span>Get Enterprise Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}