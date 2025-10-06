export default function EnterprisePage() {
  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-slate-950'>
      {/* Hero Section */}
      <header className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 py-20'>
        <div className='absolute inset-0 overflow-hidden opacity-20'>
          <div className='absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center max-w-5xl mx-auto'>
            <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mb-8'>
              <span className='text-blue-400 font-bold text-sm tracking-wider uppercase'>
                🏢 Enterprise AI Solutions
              </span>
            </div>

            <h1 className='text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent leading-tight'>
              Enterprise Solutions
            </h1>

            <p className='text-2xl md:text-3xl text-gray-300 mb-8 font-semibold'>
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>

            <p className='text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed'>
              Transform your enterprise with our proven AI solutions. Achieve
              $100M+ cost savings, 500% productivity gains, and 99.9% system
              uptime with enterprise-grade security and compliance.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1'
              >
                Schedule Enterprise Demo
              </a>
              <a
                href='#solutions'
                className='border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
              >
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                🏢 Enterprise AI Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Enterprise Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve $100M+ cost savings, 
              500% productivity gains, and 99.9% system uptime with enterprise-grade security and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200">
                Schedule Enterprise Demo
              </Link>
              <Link 
                href="#solutions"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-lg transition-colors duration-200">
>>>>>>> origin/fix-errors-and-merge-final
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </header>

<<<<<<< HEAD
      {/* Enterprise Solutions Banner */}
      <section id='solutions'></section>

      {/* Footer */}
      <footer className='py-12 bg-slate-950 border-t border-white/10'>
        <div className='container mx-auto px-6'>
          <div className='text-center text-gray-400'>
            <p className='mb-4'>
              © 2025 Zion Tech Group. All rights reserved.
            </p>
            <div className='flex justify-center gap-6 text-sm'>
              <a
                href='/privacy'
                className='hover:text-blue-400 transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='/terms'
                className='hover:text-blue-400 transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='/contact'
                className='hover:text-blue-400 transition-colors'
              >
                Contact Us
              </a>
            </div>
          </div>
=======
      {/* Solutions Section */}
<<<<<<< HEAD
      <section id="solutions" className="text-left">
        <div className="text-left">
          <div className="text-left">
            <h2 className="text-left">Enterprise Solutions</h2>"
            <p className="text-left">Comprehensive AI solutions for enterprise needs</p>"
          </div>
          
          <div className="text-left">
            <div className="text-left">
              <h3 className="text-left">AI Automation</h3>"
              <p className="text-left">Automate complex business processes with AI</p>"
            </div>
            
            <div className="text-left">
              <h3 className="text-left">Data Analytics</h3>"
              <p className="text-left">Advanced analytics and insights for decision making</p>"
            </div>
            
            <div className="text-left">
              <h3 className="text-left">Security</h3>"
              <p className="text-left">Enterprise-grade security and compliance</p>"
=======
      <section id="solutions" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-gray-400">Comprehensive AI solutions for enterprise needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors duration-200">
              <h3 className="text-2xl font-semibold text-white mb-4">AI Automation</h3>
              <p className="text-gray-400">Automate complex business processes with AI-driven solutions that reduce costs and improve efficiency.</p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors duration-200">
              <h3 className="text-2xl font-semibold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-400">Advanced analytics and insights for data-driven decision making across your organization.</p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors duration-200">
              <h3 className="text-2xl font-semibold text-white mb-4">Security</h3>
              <p className="text-gray-400">Enterprise-grade security and compliance solutions to protect your critical business data.</p>
>>>>>>> ee8c8fcc44b7459b7ff777ed9c3625df38663142
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Zion Tech Group. All rights reserved.</p>
>>>>>>> origin/fix-errors-and-merge-final
        </div>
      </footer>
    </div>
  );
}
