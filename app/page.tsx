import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Build and scale with{' '}
          <span className="text-blue-400">AI</span>,{' '}
          <span className="text-green-400">Micro SaaS</span>{' '}
          and{' '}
          <span className="text-purple-400">Enterprise IT</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, 
          automation, cloud infrastructure, and secure micro SaaS products. Trusted by 500+ companies worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Services
          </Link>
          <Link 
            href="/contact" 
            className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Custom AI models, automation, and intelligent systems that transform your business operations.
              </p>
              <Link href="/services/ai-services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Micro SaaS</h3>
              <p className="text-gray-300 mb-4">
                Scalable, secure micro SaaS products that solve specific business challenges.
              </p>
              <Link href="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">IT Services</h3>
              <p className="text-gray-300 mb-4">
                Cloud migration, DevOps, SRE, and infrastructure management for enterprise scale.
              </p>
              <Link href="/services/it-services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}