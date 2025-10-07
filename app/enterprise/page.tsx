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
                href="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Fortune 500 Clients</div>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$100M+</div>
              <div className="text-gray-300">Average Cost Savings</div>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500%</div>
              <div className="text-gray-300">Productivity Increase</div>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for large-scale enterprise operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-6">
                Self-managing AI systems that operate independently, reducing human intervention by 90%
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Automated decision making</li>
                <li>• Self-healing infrastructure</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Next-generation quantum algorithms for complex enterprise optimization problems
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Quantum optimization</li>
                <li>• Advanced cryptography</li>
                <li>• Complex data analysis</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 mb-6">
                Military-grade security protocols with zero-trust architecture
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• End-to-end encryption</li>
                <li>• Zero-trust security</li>
                <li>• Compliance automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join 500+ Fortune 500 companies already using our AI solutions to achieve unprecedented growth and efficiency.
          </p>
          <Link
            href="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Schedule Enterprise Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}