
export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ScrollToTop />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading the future of technology with AI, blockchain, and innovative solutions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white">
            <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  New: 2025 AI Trends & Playbook
                </h2>
                <p className="text-white/90 max-w-2xl">
                  Explore practical strategies to adopt Generative AI, automate operations, and cut cloud costs.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a href="/insights/ai-trends-2025" className="inline-block bg-white text-indigo-700 font-semibold px-5 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Read the guide
                </a>
                <a href="/contact" className="inline-block border border-white/70 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Talk to an expert
                </a>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p className="text-gray-600">
              Secure, decentralized solutions powered by blockchain technology.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
        </div>

        {/* Featured Content */}
        <section aria-labelledby="featured-content" className="mb-16">
          <h2 id="featured-content" className="text-3xl font-bold text-gray-900 mb-6">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Generative AI in the Enterprise: A Practical Roadmap
                </h3>
                <p className="text-gray-600 mb-4">
                  A concise guide to prioritize use cases, data readiness, and compliance.
                </p>
                <a href="/insights/genai-enterprise-roadmap" className="text-blue-700 font-semibold hover:underline">
                  Read article
                </a>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Cut Cloud Spend 25% With FinOps Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  Tactics that deliver quick savings with policy-driven governance.
                </p>
                <a href="/insights/finops-automation-savings" className="text-blue-700 font-semibold hover:underline">
                  Read article
                </a>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Secure AI: From Model Risks to SOC Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  A checklist to operationalize AI security across lifecycle stages.
                </p>
                <a href="/insights/secure-ai-checklist" className="text-blue-700 font-semibold hover:underline">
                  Read article
                </a>
              </div>
            </article>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver 
            solutions that drive real business value. Our team of experts is dedicated 
            to helping you succeed in the digital age.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
