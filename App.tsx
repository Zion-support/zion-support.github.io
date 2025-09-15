export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ScrollToTop />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with New Content Promotions */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
            🚀 NEW: Innovation 2025 Showcase
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading the future of technology with AI, blockchain, and innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-x-4 space-y-4 sm:space-y-0">
            <a href="/pages/InnovationLanding2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Innovation 2025
            </a>
            <a href="/pages/InnovativeServicesShowcase2025" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View New Services
            </a>
            <a href="/pages/BlogPost2025" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Read Latest Blog
            </a>
          </div>
        </div>

        {/* Featured Content Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">🌟 Featured: Revolutionary Technology 2025</h2>
            <p className="text-lg opacity-90">Discover our latest innovations that are reshaping industries</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-semibold mb-2">AI Autonomous Agents</h3>
              <p className="text-sm opacity-90 mb-4">Self-learning AI systems that handle complex business processes</p>
              <a href="/pages/InnovativeServicesShowcase2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn More →</a>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quantum Security</h3>
              <p className="text-sm opacity-90 mb-4">Next-generation encryption using quantum computing principles</p>
              <a href="/pages/InnovationLanding2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Explore →</a>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Global IoT Network</h3>
              <p className="text-sm opacity-90 mb-4">Worldwide connected devices for seamless data exchange</p>
              <a href="/pages/BlogPost2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Read More →</a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-gray-600 mb-4">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
            <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
              View AI Services →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p className="text-gray-600 mb-4">
              Secure, decentralized solutions powered by blockchain technology.
            </p>
            <a href="/pages/InnovationLanding2025" className="text-blue-600 hover:text-blue-700 font-semibold">
              Explore Blockchain →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud infrastructure and deployment solutions.
            </p>
            <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
              Cloud Solutions →
            </a>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📰 Latest Technology Insights</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest trends and innovations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">NEW</span>
                <span className="text-sm text-gray-500">January 20, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology Trends 2025</h3>
              <p className="text-gray-600 mb-4">Discover the most significant trends shaping our digital future...</p>
              <a href="/pages/BlogPost2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read Full Article →
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">FEATURED</span>
                <span className="text-sm text-gray-500">January 18, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Showcase 2025</h3>
              <p className="text-gray-600 mb-4">Explore our revolutionary services across cutting-edge technology domains...</p>
              <a href="/pages/InnovationLanding2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore Innovations →
              </a>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">What's New</h2>
            <a href="/news" className="text-blue-600 hover:underline">View all updates</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHATS_NEW_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`block bg-white p-6 rounded-lg shadow-lg border transition-transform hover:-translate-y-0.5 ${item.highlight ? 'border-blue-600' : 'border-gray-100'}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl" aria-hidden>{item.emoji || '✨'}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      {item.date && (
                        <span className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <span className="inline-flex items-center text-blue-600 font-medium">
                      {item.ctaLabel}
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10 10.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We combine cutting-edge technology with deep industry expertise to deliver 
            solutions that drive real business value. Our team of experts is dedicated 
            to helping you succeed in the digital age.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/InnovationLanding2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Your Journey
            </a>
            <a href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}