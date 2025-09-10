export const metadata = {
  title: 'AI Chatbot Platform | Zion Tech Group',
  description:
    'Build intelligent chatbots with natural language processing, multi-channel deployment, and advanced conversation management. No coding required.',
};

export default function AIChatbotPlatformPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Chatbot Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build intelligent chatbots with natural language processing, multi-channel deployment, and advanced conversation management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🤖"
            title="Natural Language Processing"
            description="Advanced NLP for human-like conversations"
            features={[
              'Intent recognition',
              'Entity extraction',
              'Sentiment analysis',
              'Context awareness',
            ]}
          />
          <FeatureCard
            icon="💬"
            title="Multi-Channel Deployment"
            description="Deploy across all your customer touchpoints"
            features={[
              'Website chat',
              'Mobile apps',
              'Social media',
              'Voice assistants',
            ]}
          />
          <FeatureCard
            icon="🧠"
            title="Machine Learning"
            description="Self-improving chatbots that learn from interactions"
            features={[
              'Conversation learning',
              'Performance optimization',
              'A/B testing',
              'Analytics insights',
            ]}
          />
          <FeatureCard
            icon="🎨"
            title="Visual Builder"
            description="Drag-and-drop interface for easy chatbot creation"
            features={[
              'No-code builder',
              'Pre-built templates',
              'Custom workflows',
              'Rich media support',
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Analytics & Insights"
            description="Comprehensive analytics for chatbot performance"
            features={[
              'Conversation analytics',
              'User satisfaction',
              'Conversion tracking',
              'Custom reports',
            ]}
          />
          <FeatureCard
            icon="🔗"
            title="Integrations"
            description="Connect with your existing business tools"
            features={[
              'CRM integration',
              'Help desk systems',
              'Payment processing',
              'Database connections',
            ]}
          />
        </div>

        <UseCasesSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

  icon,
  title,
  description,
  features,
}: {}
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {}
  return ("
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>"
      <p className="text-indigo-100 mb-6">{description}</p>"
      <ul className="space-y-2">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-center text-indigo-100">
            <svg"
              className="w-4 h-4 text-green-400 mr-3 flex-shrink-0""
              fill="currentColor""
              viewBox="0 0 20 20"
            >
              <path"
                fillRule="evenodd""
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z""
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer support with instant responses',
      icon: '🎧',
      benefits: [
        'Reduce support costs by 60%',
        'Instant response times',
        'Handle 80% of queries automatically',
      ],
    },
    {
      title: 'Sales Assistant',
      description: 'Qualify leads and guide prospects through the sales funnel',
      icon: '💼',
      benefits: [
        'Increase lead conversion by 40%',
        'Qualify leads 24/7',
        'Schedule meetings automatically',
      ],
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products and complete purchases',
      icon: '🛒',
      benefits: [
        'Boost sales by 25%',
        'Reduce cart abandonment',
        'Personalized recommendations',
      ],
    },
    {
      title: 'HR Assistant',
      description: 'Answer employee questions and streamline HR processes',
      icon: '👥',
      benefits: [
        'Reduce HR workload by 50%',
        'Instant policy answers',
        'Automated onboarding',
      ],
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads through engaging conversations',
      icon: '📈',
      benefits: [
        'Generate 3x more leads',
        'Qualify prospects automatically',
        'Nurture leads effectively',
      ],
    },
    {
      title: 'Appointment Booking',
      description: 'Automate appointment scheduling and reminders',
      icon: '📅',
      benefits: [
        'Reduce no-shows by 30%',
        '24/7 availability',
        'Automatic confirmations',
      ],
    },
  ];

  return ("
    <div className="bg-white rounded-2xl p-8 mb-16">"
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Popular Use Cases;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div;
            key={index}"
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >"
            <div className="text-3xl mb-4">{useCase.icon}</div>"
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {useCase.title}
            </h3>"
            <p className="text-gray-600 mb-4">{useCase.description}</p>"
            <ul className="space-y-2">
              {useCase.benefits.map((benefit, benefitIndex) => (
                <li;
                  key={benefitIndex}"
                  className="flex items-center text-sm text-gray-600"
                >
                  <svg"
                    className="w-4 h-4 text-green-500 mr-2 flex-shrink-0""
                    fill="currentColor""
                    viewBox="0 0 20 20"
                  >
                    <path"
                      fillRule="evenodd""
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z""
                      clipRule="evenodd"
                    />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

function PricingSection() {}
  return ("
    <div className="bg-white rounded-2xl p-8 mb-16">"
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Pricing Plans;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard"
          name="Starter""
          price="$99""
          period="month""
          description="Perfect for small businesses getting started with chatbots"
          features={[
            '1 chatbot',
            '1,000 conversations/month',
            'Basic templates',
            'Email support',
            'Website integration',
          ]}
          popular={false}
        />
        <PricingCard"
          name="Professional""
          price="$299""
          period="month""
          description="Advanced features for growing businesses"
          features={[
            '5 chatbots',
            '10,000 conversations/month',
            'Advanced NLP',
            'Priority support',
            'Multi-channel deployment',
            'Analytics dashboard',
          ]}
          popular={true}
        />
        <PricingCard"
          name="Enterprise""
          price="Custom""
          period="""
          description="Full-scale solution for large organizations"
          features={[
            'Unlimited chatbots',
            'Unlimited conversations',
            'Custom integrations',
            '24/7 support',
            'Dedicated account manager',
            'White-label solution',
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({}
  name,
  price,
  period,
  description,
  features,
  popular,
}: {}
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {}
  return (
    <div
      className={`relative border-2 rounded-xl p-8 ${popular ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
    >
      {popular && ("
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
          <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular;
          </span>
        </div>
      )}"
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <div className="mb-6">"
        <span className="text-4xl font-bold text-gray-900">{price}</span>"
        {period && <span className="text-gray-600">/{period}</span>}
      </div>"
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-center">
            <svg"
              className="w-5 h-5 text-green-500 mr-3 flex-shrink-0""
              fill="currentColor""
              viewBox="0 0 20 20"
            >
              <path"
                fillRule="evenodd""
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z""
                clipRule="evenodd"
              />
            </svg>"
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started;
      </a>
    </div>
  );
}

function ContactSection() {}
  return ("
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl text-center">"
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to Build Your AI Chatbot?
      </h2>"
      <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
        Contact our chatbot experts to discuss your requirements and get a;
        custom solution.
      </p>"
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a"
          href="tel:+13024640950""
          className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Call +1 302 464 0950;
        </a>
        <a"
          href="mailto:kleber@ziontechgroup.com""
          className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Email Us;
        </a>
      </div>"
      <div className="mt-6 text-sm text-indigo-100">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}

"`

