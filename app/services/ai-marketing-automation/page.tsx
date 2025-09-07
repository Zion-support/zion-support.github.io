import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Automation Platform - Intelligent Marketing Solutions | Zion Tech Group',
  description: 'AI-powered marketing automation with personalization, predictive analytics, and automated campaign optimization to maximize ROI and customer engagement.',
  keywords: 'AI marketing automation, personalized marketing, campaign optimization, customer segmentation, marketing analytics, lead generation',
};

function FeatureCard({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AIMarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Marketing Automation Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent marketing automation with AI-powered personalization,
            predictive analytics, and automated campaign optimization to maximize
            ROI and customer engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="AI-Powered Campaigns"
            features={[
              'Automated email marketing sequences',
              'Social media content generation',
              'Personalized ad targeting',
              'A/B testing optimization',
              'Cross-channel campaign orchestration',
              'Real-time campaign adjustments',
            ]}
            icon="📧"
          />
          <FeatureCard
            title="Customer Segmentation"
            features={[
              'AI-driven customer profiling',
              'Behavioral segmentation',
              'Predictive customer scoring',
              'Dynamic audience creation',
              'Lifecycle stage identification',
              'Churn prediction & prevention',
            ]}
            icon="🎯"
          />
          <FeatureCard
            title="Analytics & Optimization"
            features={[
              'Real-time performance tracking',
              'ROI analysis & attribution',
              'Predictive analytics & forecasting',
              'Automated optimization recommendations',
              'Customer journey mapping',
              'Competitive intelligence',
            ]}
            icon="📊"
          />
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
              <p className="text-gray-300">Higher ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
              <p className="text-gray-300">Time Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">250%</div>
              <p className="text-gray-300">Lead Generation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$399<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 10,000 contacts</li>
                <li>Basic automation</li>
                <li>Email marketing</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$799<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 50,000 contacts</li>
                <li>Advanced automation</li>
                <li>Multi-channel campaigns</li>
                <li>AI-powered personalization</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$1,599<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Unlimited contacts</li>
                <li>Full AI capabilities</li>
                <li>Advanced analytics</li>
                <li>Custom AI models</li>
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
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies who trust our AI Marketing Automation Platform to drive growth and maximize ROI.
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