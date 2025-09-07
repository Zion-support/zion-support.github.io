export const metadata = {
  title: 'AI Marketing Automation | Zion Tech Group',
  description: 'Professional AI marketing automation services for your business needs.',
  keywords: 'ai-marketing-automation, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Marketing Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your marketing with intelligent automation. AI-powered campaigns that adapt, learn, and deliver results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Smart Campaigns</h3>
            <p className="text-gray-300 mb-6">AI-driven marketing campaigns that automatically optimize for better performance.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Automated A/B testing</li>
              <li>• Dynamic content optimization</li>
              <li>• Predictive analytics</li>
              <li>• Real-time adjustments</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Customer Segmentation</h3>
            <p className="text-gray-300 mb-6">Intelligent customer segmentation and personalized messaging at scale.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Behavioral analysis</li>
              <li>• Demographic targeting</li>
              <li>• Purchase prediction</li>
              <li>• Lifecycle management</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Multi-Channel Integration</h3>
            <p className="text-gray-300 mb-6">Seamlessly coordinate campaigns across email, social, and web channels.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Email automation</li>
              <li>• Social media management</li>
              <li>• Web personalization</li>
              <li>• Cross-platform analytics</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Marketing?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI marketing automation platform transform your campaigns and drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
