export const metadata = {
  title: 'AI Chatbot Builder | Zion Tech Group',
  description: 'Build intelligent chatbots with no-code platform. Custom AI assistants for customer support, sales, and engagement.',
  keywords: 'ai-chatbot-builder, chatbot development, AI assistants, customer support, automation'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build intelligent chatbots with our no-code platform. Create custom AI assistants for customer support, sales, and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">No-Code Builder</h3>
            <p className="text-gray-300">Create sophisticated chatbots without coding knowledge using our intuitive drag-and-drop interface.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Multi-Channel Support</h3>
            <p className="text-gray-300">Deploy your chatbot across websites, social media, messaging apps, and more.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">AI-Powered</h3>
            <p className="text-gray-300">Leverage advanced AI and machine learning for natural conversations and smart responses.</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}