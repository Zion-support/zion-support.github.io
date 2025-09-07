export const metadata = {
  title: 'AI Chatbot Builder | Zion Tech Group',
  description: 'Professional AI chatbot builder services for your business needs.',
  keywords: 'ai-chatbot-builder, services, business, technology'
};

export default function AIChatbotBuilderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Chatbot Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build intelligent AI chatbots with natural language processing, multi-channel support, and custom integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Natural Language Processing
          </h3>
          <p className="text-gray-600">
            Advanced NLP capabilities for understanding and responding to user queries naturally.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">💬</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Multi-Channel Support
          </h3>
          <p className="text-gray-600">
            Deploy across websites, mobile apps, social media, and messaging platforms.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🔧</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Custom Integrations
          </h3>
          <p className="text-gray-600">
            Seamlessly integrate with your existing systems and databases.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build Your AI Chatbot?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your chatbot requirements and get started with a custom solution.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}