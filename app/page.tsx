import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        <div className="particles absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="holographic">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Advanced AI & IT Solutions for the Future
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link
                href="/about"
                className="cyber-button text-lg px-8 py-4"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="cyber-button text-lg px-8 py-4 border-purple-400 text-purple-400 hover:border-purple-300 hover:text-purple-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions to automate and optimize your business processes.
              </p>
              <div className="mt-4">
                <Link href="/ai-services" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive security solutions to protect your digital assets and infrastructure.
              </p>
              <div className="mt-4">
                <Link href="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Computing</h3>
              <p className="text-gray-300">
                Scalable cloud infrastructure and migration services for modern applications.
              </p>
              <div className="mt-4">
                <Link href="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by <span className="gradient-text">Leading Companies</span>
            </h2>
            <p className="text-xl text-gray-300">
              Delivering results that matter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 animate-pulse-slow">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 animate-pulse-slow">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 animate-pulse-slow">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 animate-pulse-slow">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-dark rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that trust us with their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Start Your Journey
              </Link>
              <Link
                href="/ai-services"
                className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300"
              >
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}