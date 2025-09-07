import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered CRM Platform - Intelligent Customer Relationship Management | Zion Tech Group',
  description: 'Revolutionary CRM with AI-powered lead scoring, automated follow-ups, predictive analytics, and intelligent sales insights. Boost conversion rates by 40%.',
  keywords: 'AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, sales intelligence',
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureCardComponent({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-300 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingTier({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular?: boolean; 
}) {
  return (
    <div className={`p-6 rounded-xl text-center ${popular ? 'bg-blue-600 text-white' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'}`}>
      {popular && <div className="bg-yellow-400 text-blue-900 text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">Most Popular</div>}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="text-4xl font-bold mb-2">{price}</div>
      <div className="text-sm opacity-75 mb-4">{period}</div>
      <p className="text-sm mb-6 opacity-75">{description}</p>
      <ul className="space-y-3 mb-8 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-white text-blue-600 hover:bg-gray-100' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}>
        {popular ? 'Get Started' : 'Choose Plan'}
      </button>
    </div>
  );
}


export default function AIPoweredCRMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered CRM Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary CRM with AI-powered lead scoring, automated follow-ups, 
            predictive analytics, and intelligent sales insights. Boost conversion rates by 40%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCardComponent
            icon="🎯"
            title="AI Lead Scoring"
            description="Intelligent lead scoring using machine learning to identify high-value prospects and prioritize sales efforts."
            benefits={[
              'Predictive lead scoring',
              'Behavioral analysis',
              'Engagement tracking',
              'Conversion probability',
              'Custom scoring models'
            ]}
          />
          <FeatureCardComponent
            icon="🤖"
            title="Automated Follow-ups"
            description="Smart automation for follow-up sequences, email campaigns, and task management based on customer behavior."
            benefits={[
              'Automated email sequences',
              'Smart task creation',
              'Behavioral triggers',
              'Personalized messaging',
              'A/B testing optimization'
            ]}
          />
          <FeatureCardComponent
            icon="📊"
            title="Predictive Analytics"
            description="Advanced analytics and forecasting to predict sales trends, customer lifetime value, and churn risk."
            benefits={[
              'Sales forecasting',
              'Customer lifetime value',
              'Churn prediction',
              'Revenue optimization',
              'Trend analysis'
            ]}
          />
          <FeatureCardComponent
            icon="💬"
            title="Intelligent Chat"
            description="AI-powered chat support and lead qualification with natural language processing and context awareness."
            benefits={[
              'Natural language processing',
              'Context-aware responses',
              'Lead qualification',
              'Multi-language support',
              'Integration with CRM data'
            ]}
          />
          <FeatureCardComponent
            icon="📈"
            title="Sales Intelligence"
            description="Comprehensive sales insights and recommendations to improve performance and close more deals."
            benefits={[
              'Performance analytics',
              'Deal insights',
              'Competitor analysis',
              'Sales coaching',
              'ROI tracking'
            ]}
          />
          <FeatureCardComponent
            icon="🔗"
            title="Seamless Integration"
            description="Connect with your existing tools and workflows for a unified sales and marketing experience."
            benefits={[
              'Email integration',
              'Calendar sync',
              'Document management',
              'API access',
              'Custom integrations'
            ]}
          />
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingTier
              name="Starter"
              price="$99"
              period="per user/month"
              description="Perfect for small teams getting started with AI-powered CRM"
              features={[
                'Up to 1,000 contacts',
                'Basic AI lead scoring',
                'Email automation',
                'Standard reporting',
                'Email support'
              ]}
            />
            <PricingTier
              name="Professional"
              price="$199"
              period="per user/month"
              description="Advanced features for growing sales teams"
              features={[
                'Up to 10,000 contacts',
                'Advanced AI features',
                'Predictive analytics',
                'Custom integrations',
                'Priority support',
                'Advanced reporting'
              ]}
              popular={true}
            />
            <PricingTier
              name="Enterprise"
              price="$399"
              period="per user/month"
              description="Complete solution for large organizations"
              features={[
                'Unlimited contacts',
                'Custom AI models',
                'Advanced analytics',
                'White-label solution',
                '24/7 dedicated support',
                'Custom development'
              ]}
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams who trust our AI-Powered CRM to boost productivity and close more deals.
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