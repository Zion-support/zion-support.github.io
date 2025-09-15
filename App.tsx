
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

        <section aria-labelledby="featured-content-heading" className="mb-12">
          <div className="text-center mb-8">
            <h2 id="featured-content-heading" className="text-3xl font-bold text-gray-900">Featured Content</h2>
            <p className="text-gray-600">Fresh insights, case studies, and announcements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow" role="article">
              <span className="text-sm text-blue-600 font-semibold">Case Study</span>
              <h3 className="text-xl font-semibold mt-2 mb-2">RAG Assistant Reduces Support Tickets 37%</h3>
              <p className="text-gray-600 mb-4">How our AI knowledge assistant improved deflection and speed to answer.</p>
              <a href="/case-studies/rag-assistant" className="text-blue-600 hover:underline">Read more</a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow" role="article">
              <span className="text-sm text-purple-600 font-semibold">Announcement</span>
              <h3 className="text-xl font-semibold mt-2 mb-2">Free Tech Marketplace Launch</h3>
              <p className="text-gray-600 mb-4">Connect with AI professionals and publish services at zero cost.</p>
              <a href="/marketplace" className="text-blue-600 hover:underline">Explore</a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow" role="article">
              <span className="text-sm text-emerald-600 font-semibold">Insight</span>
              <h3 className="text-xl font-semibold mt-2 mb-2">Optimizing Cloud Costs with AI</h3>
              <p className="text-gray-600 mb-4">Practical steps to reduce spend while improving reliability.</p>
              <a href="/insights/ai-cloud-cost-optimizer" className="text-blue-600 hover:underline">Learn how</a>
            </article>
          </div>
        </section>

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
