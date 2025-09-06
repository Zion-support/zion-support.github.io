import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner for enterprise-grade AI, micro SaaS, and IT solutions. 
            Transform your business with cutting-edge technology and expert consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Explore Our Services
            </Link>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Micro SaaS Solutions</h3>
              <p className="text-gray-600 mb-4">
                End-to-end product development with billing, authentication, and analytics. 
                From MVP to scale-ready applications.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Foundational architecture
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Billing + subscriptions
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Growth analytics
                </li>
              </ul>
              <Link href="/services/micro-saas" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Services</h3>
              <p className="text-gray-600 mb-4">
                LLM applications, RAG systems, and MLOps pipelines. 
                Harness the power of artificial intelligence for your business.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> RAG and agents
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Evals + guardrails
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> MLOps pipelines
                </li>
              </ul>
              <Link href="/services/ai-services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">IT Services</h3>
              <p className="text-gray-600 mb-4">
                Cloud migration, DevOps, and security solutions. 
                Modernize your infrastructure with expert guidance.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Cloud migration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> DevOps + SRE
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Security solutions
                </li>
              </ul>
              <Link href="/services/it-services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our experts to discuss your project and discover how we can help you achieve your goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}