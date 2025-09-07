import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Support Platform - Intelligent Support Solutions | Zion Tech Group',
  description: 'AI-powered customer support with intelligent chatbots, automated ticket routing, and sentiment analysis. Deliver exceptional customer experiences 24/7.',
  keywords: 'AI customer support, chatbots, ticket management, sentiment analysis, customer service automation, virtual assistants',
};

function FeatureCard({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AICustomerSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Customer Support Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent customer support solution with AI-powered chatbots,
            automated ticket routing, and sentiment analysis to deliver
            exceptional customer experiences 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="AI Chatbots & Virtual Assistants"
            features={[
              'Natural language processing (NLP)',
              'Multi-language support',
              'Context-aware conversations',
              'Escalation to human agents',
              'Knowledge base integration',
              'Voice & text interactions',
            ]}
            icon="🤖"
          />
          <FeatureCard
            title="Ticket Management"
            features={[
              'Automated ticket routing',
              'Priority-based queuing',
              'SLA monitoring & alerts',
              'Ticket categorization',
              'Auto-resolution suggestions',
              'Performance analytics',
            ]}
            icon="🎫"
          />
          <FeatureCard
            title="Sentiment Analysis & Insights"
            features={[
              'Real-time sentiment tracking',
              'Customer satisfaction scoring',
              'Trend analysis & reporting',
              'Proactive issue detection',
              'Agent performance insights',
              'Customer journey mapping',
            ]}
            icon="📊"
          />
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
              <p className="text-gray-300">Faster Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Always Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
              <p className="text-gray-300">Issue Resolution Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
              <p className="text-gray-300">Cost Reduction</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$299<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 1,000 conversations/month</li>
                <li>Basic AI chatbot</li>
                <li>Email support</li>
                <li>Basic analytics</li>
                <li>Standard integrations</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$599<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 10,000 conversations/month</li>
                <li>Advanced AI capabilities</li>
                <li>Sentiment analysis</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$1,299<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Unlimited conversations</li>
                <li>Custom AI models</li>
                <li>Advanced sentiment analysis</li>
                <li>Real-time analytics</li>
                <li>24/7 dedicated support</li>
                <li>White-label solution</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies who trust our AI Customer Support Platform to deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}