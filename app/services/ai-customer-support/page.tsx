export const metadata = { title: 'AI Customer Support | Zion Tech Group' };

export default function AICustomerSupportPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Customer Support Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
          icon="😊"
        />
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Support Platform Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              80% Faster Resolution
            </h3>
            <p className="text-gray-600">
              AI-powered responses reduce resolution time
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              60% Cost Reduction
            </h3>
            <p className="text-gray-600">
              Automated support reduces operational costs
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              95% Satisfaction
            </h3>
            <p className="text-gray-600">
              Consistent, high-quality customer service
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              24/7 Availability
            </h3>
            <p className="text-gray-600">Round-the-clock customer support</p>
          </div>
        </div>
      </div>

      <PricingSection />

      <ContactSection />
    </div>
  );
}

function FeatureCard({
  title,
  features,
  icon,
}: {
  title: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-pink-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Support Platform Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Basic Support"
          price="$99/mo"
          duration="Up to 1,000 tickets"
          features={[
            'Basic AI chatbot',
            'Email & chat support',
            'Basic ticket management',
            'Standard reporting',
            'Email support',
            'Mobile app access',
          ]}
          popular={false}
        />
        <PricingCard
          name="Professional Support"
          price="$299/mo"
          duration="Up to 10,000 tickets"
          features={[
            'Everything in Basic Support',
            'Advanced AI chatbot',
            'Multi-channel support',
            'Sentiment analysis',
            'Advanced analytics',
            'API access & integrations',
            'Priority support',
          ]}
          popular={true}
        />
        <PricingCard
          name="Enterprise Support"
          price="$799/mo"
          duration="Unlimited tickets"
          features={[
            'Everything in Professional Support',
            'Custom AI model training',
            'Advanced security & compliance',
            'Dedicated account manager',
            'Custom integrations',
            'White-label options',
            '24/7 phone support',
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  duration,
  features,
  popular,
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-pink-500 shadow-lg' : 'border-gray-200'}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-pink-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-pink-600 text-white hover:bg-pink-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Transform Your Customer Support?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your support needs and create an AI-powered solution that
        delivers exceptional customer experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
