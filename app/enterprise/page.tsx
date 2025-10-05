import EnterpriseSolutionsBanner from '../../components/EnterpriseSolutionsBanner';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mb-8">
              <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
                🏢 Enterprise AI Solutions
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Enterprise Solutions
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold">
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your enterprise with our proven AI solutions. Achieve $100M+ cost savings, 
              500% productivity gains, and 99.9% system uptime with enterprise-grade security and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Schedule Enterprise Demo
              </a>
              <a 
                href="#solutions" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Enterprise Solutions Banner */}
      <section id="solutions">
        <EnterpriseSolutionsBanner />
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p className="mb-4">© 2025 Zion Tech Group. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}