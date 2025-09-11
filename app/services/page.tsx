export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive technology services including AI, micro SaaS, IT services, and more.',
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Services</h3>
            <p className="text-gray-600 mb-4">Custom AI solutions including LLM apps, RAG, agents, and MLOps.</p>
            <a href="/services/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">Learn More →</a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Micro SaaS</h3>
            <p className="text-gray-600 mb-4">End-to-end product engineering with billing, auth, and analytics.</p>
            <a href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold">Learn More →</a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">IT Services</h3>
            <p className="text-gray-600 mb-4">Cloud migration, DevOps, SRE, and security hardening.</p>
            <a href="/services/it-services" className="text-blue-600 hover:text-blue-700 font-semibold">Learn More →</a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analytics</h3>
            <p className="text-gray-600 mb-4">Transform data into actionable insights with advanced analytics.</p>
            <a href="/services/data-analytics" className="text-blue-600 hover:text-blue-700 font-semibold">Learn More →</a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
            <p className="text-gray-600 mb-4">Comprehensive security solutions to protect your business.</p>
            <a href="/services/cybersecurity" className="text-blue-600 hover:text-blue-700 font-semibold">Learn More →</a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain</h3>
            <p className="text-gray-600 mb-4">Decentralized applications and smart contract development.</p>
            <a href="/services/blockchain" className="text-blue-600 hover:text-blue-700 font-semibold">Learn More →</a>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}