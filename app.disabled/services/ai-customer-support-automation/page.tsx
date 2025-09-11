export const metadata = {
  title: 'AI Customer Support Automation | Zion Tech Group',
  description: 'Automated customer support solutions powered by AI technology.',
  keywords: 'ai-customer-support-automation, services, business, technology',
};
export default function ServicePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            AI Customer Support Automation
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Automated customer support solutions powered by AI technology.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored ai-customer-support-automation solutions designed for
              your specific business requirements.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Advanced Technology
            </h3>
            <p className='text-gray-300'>
              Cutting-edge technology and best practices to deliver exceptional
              results.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>24/7 Support</h3>
            <p className='text-gray-300'>
              Round-the-clock support to ensure your
              ai-customer-support-automation solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'AI Customer Support Automation | Zion Tech Group',
  description:
    'Intelligent customer support automation with AI chatbots, ticket routing, sentiment analysis, and 24/7 multilingual support for enhanced customer experience.',
  keywords:
    'AI customer support, chatbot automation, ticket routing, sentiment analysis, multilingual support, customer service AI',
};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

function Feature({ title, description, icon }: FeatureProps) {
  import Link from 'next/link';
  import { ArrowRightIcon } from '@heroicons/react/24/outline';

  export const metadata = {
    title: 'Ai Customer Support Automation - Zion Tech Group',
    description:
      'Professional ai customer support automation solutions for your business needs.',
  };

  export default function AiCustomerSupportAutomationPage() {}

  interface PricingTierProps {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular?: boolean;
    cta: string;
  }

  function PricingTier({
    name,
    price,
    period,
    description,
    features,
    popular = false,
    cta,
  }: PricingTierProps) {
    return (
      <div
        className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}
      >
        {popular && (
          <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
            <span className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
              Most Popular
            </span>
          </div>
        )}
        <div className='text-center mb-6'>
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>{name}</h3>
          <div className='text-4xl font-bold text-blue-600 mb-2'>
            {price}
            <span className='text-lg text-gray-500 font-normal'>/{period}</span>
          </div>
          <p className='text-gray-600'>{description}</p>
        </div>
        <ul className='space-y-3 mb-8'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center'>
              <svg
                className='w-5 h-5 text-green-500 mr-3'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='text-gray-700'>{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href='mailto:kleber@ziontechgroup.com?subject=AI Customer Support Automation Quote - {name}'
          className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
            popular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {cta}
        </a>
      </div>
    );
  }

  export default function AICustomerSupportAutomationPage() {
    return (
      <div className='space-y-16'>
        {/* Hero Section */}
        <section className='text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            AI Customer Support Automation
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Transform your customer support with AI-powered automation. Provide
            instant, intelligent responses 24/7 with multilingual support and
            sentiment analysis.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:kleber@ziontechgroup.com?subject=AI Customer Support Demo'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Get Free Demo
            </a>
            <a
              href='tel:+13024640950'
              className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
            >
              Call +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Key Features */}
        <section className='py-12'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              AI-Powered Support Features
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Comprehensive AI solutions to automate and enhance your customer
              support operations.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Feature
              icon='🤖'
              title='Intelligent Chatbots'
              description='Advanced AI chatbots that understand context and provide human-like responses to customer queries'
            />
            <Feature
              icon='🎯'
              title='Smart Ticket Routing'
              description='AI automatically routes tickets to the right department or agent based on content analysis'
            />
            <Feature
              icon='😊'
              title='Sentiment Analysis'
              description='Real-time analysis of customer emotions to prioritize urgent issues and improve satisfaction'
            />
            <Feature
              icon='🌍'
              title='Multilingual Support'
              description='Support customers in 50+ languages with automatic translation and localized responses'
            />
            <Feature
              icon='📊'
              title='Performance Analytics'
              description='Comprehensive dashboards with AI insights to track support metrics and optimize operations'
            />
            <Feature
              icon='🔄'
              title='Knowledge Base Integration'
              description='AI-powered knowledge base that learns from interactions and provides accurate answers'
            />
          </div>
        </section>

        {/* Integration Options */}
        <section className='py-12 bg-gray-50 rounded-lg'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Seamless Integrations
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Connect with your existing tools and platforms for a unified
              customer support experience.
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {[
              { name: 'Zendesk', icon: '🎫', description: 'Ticket management' },
              {
                name: 'Freshdesk',
                icon: '🆕',
                description: 'Support platform',
              },
              {
                name: 'Intercom',
                icon: '💬',
                description: 'Customer messaging',
              },
              {
                name: 'Salesforce',
                icon: '☁️',
                description: 'CRM integration',
              },
              { name: 'Slack', icon: '💼', description: 'Team communication' },
              {
                name: 'Microsoft Teams',
                icon: '👥',
                description: 'Collaboration',
              },
              {
                name: 'WhatsApp',
                icon: '📱',
                description: 'Messaging platform',
              },
              { name: 'LiveChat', icon: '💻', description: 'Live support' },
            ].map((integration, index) => (
              <div
                key={index}
                className='text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200'
              >
                <div className='text-3xl mb-3'>{integration.icon}</div>
                <h3 className='font-semibold text-gray-900 mb-1'>
                  {integration.name}
                </h3>
                <p className='text-xs text-gray-600'>
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className='py-12'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              How It Works
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Simple 4-step process to implement AI-powered customer support
              automation.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                1
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Setup & Integration
              </h3>
              <p className='text-gray-600'>
                Connect your existing support tools and configure AI settings
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                2
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                AI Training
              </h3>
              <p className='text-gray-600'>
                Train AI on your knowledge base and historical support data
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                3
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Deploy & Monitor
              </h3>
              <p className='text-gray-600'>
                Launch AI support and monitor performance with real-time
                analytics
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                4
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Optimize & Scale
              </h3>
              <p className='text-gray-600'>
                Continuously improve AI responses and scale across all channels
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className='py-12 bg-gray-50 rounded-lg'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Pricing Plans
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Choose the plan that fits your customer support needs and budget.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            <PricingTier
              name='Starter'
              price='$199'
              period='month'
              description='Perfect for small businesses'
              features={[
                'Up to 1,000 conversations/month',
                'Basic AI chatbot',
                'Email support integration',
                'Basic analytics',
                '5 team members',
                'Email support',
              ]}
              cta='Start Free Trial'
            />
            <PricingTier
              name='Professional'
              price='$499'
              period='month'
              description='Most popular for growing businesses'
              features={[
                'Up to 10,000 conversations/month',
                'Advanced AI chatbot',
                'Multi-channel support',
                'Sentiment analysis',
                'Smart ticket routing',
                'Advanced analytics',
                'Priority support',
                '25 team members',
              ]}
              popular={true}
              cta='Start Free Trial'
            />
            <PricingTier
              name='Enterprise'
              price='$1,299'
              period='month'
              description='For large organizations'
              features={[
                'Unlimited conversations',
                'Custom AI training',
                'Multilingual support',
                'White-label options',
                'Dedicated account manager',
                '24/7 phone support',
                'Custom integrations',
                'Unlimited team members',
                'API access',
              ]}
              cta='Contact Sales'
            />
          </div>
        </section>

        {/* Benefits */}
        <section className='py-12'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Why Choose Our AI Support?
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Proven results and cutting-edge AI technology to transform your
              customer support.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Instant Responses
              </h3>
              <p className='text-gray-600'>
                24/7 instant responses with 95% accuracy rate
              </p>
            </div>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>💰</span>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                60% Cost Reduction
              </h3>
              <p className='text-gray-600'>
                Significant reduction in support costs and agent workload
              </p>
            </div>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>😊</span>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Higher Satisfaction
              </h3>
              <p className='text-gray-600'>
                40% increase in customer satisfaction scores
              </p>
            </div>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🌍</span>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Global Reach
              </h3>
              <p className='text-gray-600'>
                Support customers in 50+ languages worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className='py-12 bg-blue-600 rounded-lg text-white text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Automate Your Customer Support?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Start your free trial today and see how AI can transform your
            customer support operations.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:kleber@ziontechgroup.com?subject=AI Customer Support Automation Demo Request'
              className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              Start Free Trial
            </a>
            <a
              href='tel:+13024640950'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className='mt-8 text-sm'>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Email: kleber@ziontechgroup.com</p>
          </div>
        </section>
      </div>
    );
  }
}
