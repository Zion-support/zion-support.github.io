
export const metadata = {
  title: "AI Chatbot Builder | Zion Tech Group",
  description:
    "Build intelligent chatbots with no-code platform. Custom AI assistants for customer support, sales, and engagement.",
};

export default function AIChatbotBuilderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Chatbot Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create intelligent, conversational AI chatbots without coding. Perfect for customer support, sales, and user engagement.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">No-Code Builder</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Drag-and-drop interface</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Visual conversation flows</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Pre-built templates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Real-time testing</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced AI Features</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Natural language processing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Intent recognition</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Context awareness</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Multi-language support</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration & Deployment</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Website integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Social media platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Mobile apps</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">API access</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Customer Support</h3>
              <p className="text-gray-600">
                24/7 automated support with human handoff capabilities
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Sales & Lead Generation</h3>
              <p className="text-gray-600">
                Qualify leads and guide prospects through your sales funnel
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">User Engagement</h3>
              <p className="text-gray-600">
                Keep users engaged with interactive conversations and content
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Data Collection</h3>
              <p className="text-gray-600">
                Gather user information and feedback through natural conversations
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your AI Chatbot?
        </h2>
        <p className="text-gray-600 mb-6">
          Start building your intelligent chatbot today with our no-code platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}