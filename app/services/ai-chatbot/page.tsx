export const metadata = {
  title: 'AI-Powered Chatbot Solutions | Zion Tech Group',
  description: 'Intelligent AI chatbots that understand context, learn from interactions, and provide 24/7 customer support. Reduce response time by 90% and increase customer satisfaction.',
  keywords: 'ai-chatbot, customer support, automation, nlp, machine learning, business intelligence'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Chatbot Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your customer support with intelligent AI chatbots that understand context, 
            learn from interactions, and provide instant, accurate responses 24/7. 
            Reduce response time by 90% and increase customer satisfaction by 40%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
            <p className="text-gray-300 mb-6">Advanced NLP capabilities that understand context, sentiment, and intent for human-like conversations.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Multi-language support (50+ languages)</li>
              <li>• Sentiment analysis and emotion detection</li>
              <li>• Context-aware responses</li>
              <li>• Intent recognition and classification</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Learning</h3>
            <p className="text-gray-300 mb-6">Machine learning algorithms that continuously improve from every interaction and customer feedback.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Continuous learning from conversations</li>
              <li>• A/B testing for response optimization</li>
              <li>• Performance analytics and insights</li>
              <li>• Custom model training for your industry</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold text-white mb-4">Seamless Integration</h3>
            <p className="text-gray-300 mb-6">Easy integration with your existing systems, CRM, helpdesk, and communication platforms.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• REST API and webhook support</li>
              <li>• CRM integration (Salesforce, HubSpot)</li>
              <li>• Live chat handoff capabilities</li>
              <li>• Multi-channel deployment</li>
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$299<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Up to 1,000 conversations/month</li>
                <li>• Basic NLP capabilities</li>
                <li>• Email support</li>
                <li>• Standard integrations</li>
                <li>• Basic analytics dashboard</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Starter Plan Inquiry"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-400">
              <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$799<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Up to 10,000 conversations/month</li>
                <li>• Advanced NLP & ML capabilities</li>
                <li>• Priority support</li>
                <li>• Custom integrations</li>
                <li>• Advanced analytics & reporting</li>
                <li>• Multi-language support</li>
                <li>• A/B testing tools</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Professional Plan Inquiry"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-gray-300"> pricing</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Unlimited conversations</li>
                <li>• Custom AI model training</li>
                <li>• Dedicated support team</li>
                <li>• White-label solution</li>
                <li>• Advanced security features</li>
                <li>• On-premise deployment</li>
                <li>• SLA guarantees</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Plan Inquiry"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Proven ROI & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Reduction in response time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Increase in customer satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300">Reduction in support costs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Always available support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 500+ businesses already using our AI chatbot solutions. 
            Get a free consultation and see how we can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}