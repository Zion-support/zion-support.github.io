// import Link from 'next/link'; // Unused for now
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
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve
              $100M+ cost savings, 500% productivity gains, and 99.9% system
              uptime with enterprise-grade security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Get Enterprise Quote</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#solutions"
                className="text-gray-300 hover:text-white font-medium py-4 px-8 transition-colors"
              >
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Solutions Section */}
      <section id="solutions" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for enterprise-scale
              transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Autonomous AI Systems
              </h3>
              <p className="text-gray-400 mb-6">
                Self-managing AI systems that optimize operations, reduce costs,
                and improve efficiency across your entire organization.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 99.9% uptime guarantee</li>
                <li>• $50M+ annual cost savings</li>
                <li>• 24/7 autonomous operation</li>
              </ul>
            </div>

>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
            {/* Solution 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Quantum Computing
              </h3>
              <p className="text-gray-400 mb-6">
                Next-generation quantum computing solutions for complex
                optimization problems and advanced analytics.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 1000x faster processing</li>
                <li>• Advanced cryptography</li>
                <li>• Future-proof technology</li>
              </ul>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Fortune 500 Clients' },
              { number: '$2.5T+', label: 'Cost Savings Delivered' },
              { number: '99.9%', label: 'System Uptime' },
              { number: '500%', label: 'Productivity Increase' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e42d
            {/* Solution 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-400 mb-6">
                Military-grade security solutions with zero-trust architecture
                and advanced threat detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• SOC 2 Type II certified</li>
                <li>• Zero-trust architecture</li>
                <li>• Real-time threat detection</li>
              </ul>
            </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e42d
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Join 500+ Fortune 500 companies already using our AI solutions to
            drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Schedule Enterprise Demo
            </a>
            <a
              href="tel:+13024640950"
              className="text-cyan-400 hover:text-cyan-300 font-medium py-4 px-8 transition-colors"
            >
              Call: +1 (302) 464-0950
            </a>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e42d
          </div>
        </div>
      </section>
    </div>
  );
}