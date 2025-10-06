import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description:
    'Comprehensive enterprise AI and IT solutions designed for Fortune 500 companies. Transform your business with our advanced autonomous systems and quantum computing solutions.',
  keywords:
    'enterprise AI, Fortune 500, autonomous systems, quantum computing, enterprise transformation, business intelligence',
};

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-2xl">🏢</span>
              <span className="text-cyan-400 font-bold text-xl">
                Enterprise AI Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve
              $100M+ cost savings, 500% productivity gains, and 99.9% system
              uptime with enterprise-grade security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Enterprise Demo
              </Link>
              <Link
                href="#solutions"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for enterprise-scale operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Autonomous Operations
              </h3>
              <p className="text-gray-300 mb-4">
                Fully autonomous business processes with 99.9% uptime and
                self-healing capabilities.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Self-managing infrastructure</li>
                <li>• Automated decision making</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Quantum AI Systems
              </h3>
              <p className="text-gray-300 mb-4">
                Next-generation quantum-enhanced AI for complex problem solving
                and optimization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Quantum neural networks</li>
                <li>• Advanced optimization</li>
                <li>• Exponential speedup</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-300 mb-4">
                Military-grade security with zero-trust architecture and
                advanced threat detection.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Zero-trust security</li>
                <li>• Real-time threat detection</li>
                <li>• Compliance automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ Fortune 500 companies already using our AI solutions
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Enterprise Demo
              </Link>
              <Link
                href="/about"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}