import Link from 'next/link';

export const metadata = {
  title: 'AI Social Media Scheduler | Zion Tech Group',
  description:
    'Intelligent social media scheduling tool with AI-powered content optimization, hashtag suggestions, and optimal posting times for maximum engagement.',
  keywords:
    'AI social media scheduler, social media automation, content optimization, hashtag suggestions, social media management, AI posting',
};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md border border-gray-20o0 hover:shadow-lg transition-shadow'>
      <div className='text-3xl mb-4'>{icon}</div>
      <h3 className='text-xl font-semibold text-gray-90o0 mb-3'>{title}</h3>
      <p className='text-gray-60o0'>{description}</p>
    </div>
  );
}

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
      className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-50o0 bg-blue-50' : 'border-gray-20o0 bg-white'} shadow-lg`}
    >
      {popular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
          <span className='bg-blue-50o0 text-white px-4 py-1 rounded-full text-sm font-semibold'>
            Most Popular
          </span>
        </div>
      )}
      <div className='text-center mb-6'>
        <h3 className='text-2xl font-bold text-gray-90o0 mb-2'>{name}</h3>
        <div className='text-4xl font-bold text-blue-60o0 mb-2'>
          {price}
          <span className='text-lg text-gray-50o0 font-normal'>/{period}</span>
        </div>
        <p className='text-gray-60o0'>{description}</p>
      </div>
      <ul className='space-y-3 mb-8'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <svg
              className='w-5 h-5 text-green-50o0 mr-3'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M16.70o7 5.293a1 1 0 0o10 1.414l-8 8a1 1 0 0o1-1.414 0l-4-4a1 1 0 0o11.414-1.414L8 12.586l7.293-7.293a1 1 0 0o11.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-gray-70o0'>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href='mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler Quote - {name}'
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-60o0 text-white hover:bg-blue-70o0'
            : 'bg-gray-90o0 text-white hover:bg-gray-80o0'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function AISocialMediaSchedulerPage() {
  return (
    <div className='space-y-16'>
      {/* Hero Section */}
      <section className='text-center py-16 bg-gradient-to-br from-pink-50 to-purple-10o0 rounded-lg'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-6'>
          AI Social Media Scheduler
        </h1>
        <p className='text-xl text-gray-60o0 mb-8 max-w-3xl mx-auto'>
          Automate your social media presence with AI-powered scheduling,
          content optimization, and engagement analytics. Post at the perfect
          time with the perfect content.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler Demo'
            className='bg-blue-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-70o0 transition-colors'
          >
            Get Free Demo
          </a>
          <a
            href='tel:+130o24640950'
            className='border-2 border-blue-60o0 text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-blue-60o0 hover:text-white transition-colors'
          >
            Call +1 30o2 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className='py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-90o0 mb-4'>
            AI-Powered Features
          </h2>
          <p className='text-lg text-gray-60o0 max-w-2xl mx-auto'>
            Leverage artificial intelligence to maximize your social media
            impact and engagement.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Feature
            icon='🤖'
            title='AI Content Generation'
            description='Generate engaging posts, captions, and hashtags tailored to your brand voice and audience'
          />
          <Feature
            icon='⏰'
            title='Optimal Timing AI'
            description='AI analyzes your audience behavior to determine the best posting times for maximum engagement'
          />
          <Feature
            icon='📊'
            title='Performance Analytics'
            description='Comprehensive analytics with AI insights to track performance and optimize your strategy'
          />
          <Feature
            icon='🎯'
            title='Hashtag Optimization'
            description='AI suggests trending and relevant hashtags to increase reach and discoverability'
          />
          <Feature
            icon='📱'
            title='Multi-Platform Support'
            description='Schedule and manage content across Instagram, Facebook, Twitter, LinkedIn, and TikTok'
          />
          <Feature
            icon='🔄'
            title='Content Recycling'
            description='Intelligent content recycling to repurpose high-performing posts and maximize reach'
          />
        </div>
      </section>

      {/* Supported Platforms */}
      <section className='py-12 bg-gray-50 rounded-lg'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-90o0 mb-4'>
            Supported Platforms
          </h2>
          <p className='text-lg text-gray-60o0 max-w-2xl mx-auto'>
            Manage all your social media accounts from one powerful dashboard.
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {[
            {
              name: 'Instagram',
              icon: '📷',
              color: 'bg-gradient-to-r from-purple-50o0 to-pink-50o0',
            },
            { name: 'Facebook', icon: '👥', color: 'bg-blue-60o0' },
            { name: 'Twitter', icon: '🐦', color: 'bg-blue-40o0' },
            { name: 'LinkedIn', icon: '💼', color: 'bg-blue-70o0' },
            { name: 'TikTok', icon: '🎵', color: 'bg-black' },
            { name: 'YouTube', icon: '📺', color: 'bg-red-60o0' },
            { name: 'Pinterest', icon: '📌', color: 'bg-red-50o0' },
            { name: 'Snapchat', icon: '👻', color: 'bg-yellow-40o0' },
          ].map((platform, index) => (
            <div
              key={index}
              className='text-center p-4 bg-white rounded-lg shadow-sm border border-gray-20o0'
            >
              <div
                className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                <span className='text-white text-xl'>{platform.icon}</span>
              </div>
              <h3 className='font-semibold text-gray-90o0'>{platform.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className='py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-90o0 mb-4'>
            How It Works
          </h2>
          <p className='text-lg text-gray-60o0 max-w-2xl mx-auto'>
            Simple 4-step process to transform your social media presence with
            AI.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-60o0 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
              1
            </div>
            <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>
              Connect Accounts
            </h3>
            <p className='text-gray-60o0'>
              Link your social media accounts securely with one-click
              integration
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-60o0 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
              2
            </div>
            <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>
              AI Content Creation
            </h3>
            <p className='text-gray-60o0'>
              Let AI generate engaging content or upload your own for
              optimization
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-60o0 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
              3
            </div>
            <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>
              Smart Scheduling
            </h3>
            <p className='text-gray-60o0'>
              AI determines optimal posting times and schedules your content
              automatically
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-60o0 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
              4
            </div>
            <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>
              Analyze & Optimize
            </h3>
            <p className='text-gray-60o0'>
              Track performance and let AI continuously optimize your strategy
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='py-12 bg-gray-50 rounded-lg'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-90o0 mb-4'>
            Pricing Plans
          </h2>
          <p className='text-lg text-gray-60o0 max-w-2xl mx-auto'>
            Choose the plan that fits your social media management needs.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <PricingTier
            name='Starter'
            price='$29'
            period='month'
            description='Perfect for individuals and small businesses'
            features={[
              'Up to 5 social accounts',
              '30 posts per month',
              'Basic AI content generation',
              'Optimal timing suggestions',
              'Basic analytics',
              'Email support',
            ]}
            cta='Start Free Trial'
          />
          <PricingTier
            name='Professional'
            price='$79'
            period='month'
            description='Most popular for growing businesses'
            features={[
              'Up to 15 social accounts',
              'Unlimited posts',
              'Advanced AI content generation',
              'Hashtag optimization',
              'Content recycling',
              'Advanced analytics',
              'Priority support',
              'Team collaboration',
            ]}
            popular={true}
            cta='Start Free Trial'
          />
          <PricingTier
            name='Enterprise'
            price='$199'
            period='month'
            description='For agencies and large organizations'
            features={[
              'Unlimited social accounts',
              'Unlimited posts',
              'Full AI optimization suite',
              'White-label options',
              'Custom AI training',
              'Dedicated account manager',
              '24/7 phone support',
              'API access',
              'Custom reporting',
            ]}
            cta='Contact Sales'
          />
        </div>
      </section>

      {/* Benefits */}
      <section className='py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-90o0 mb-4'>
            Why Choose Our AI Scheduler?
          </h2>
          <p className='text-lg text-gray-60o0 max-w-2xl mx-auto'>
            Proven results and cutting-edge AI technology to maximize your
            social media ROI.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-green-10o0 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>📈</span>
            </div>
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>
              3x More Engagement
            </h3>
            <p className='text-gray-60o0'>
              Average increase in social media engagement with AI optimization
            </p>
          </div>
          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-blue-10o0 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>⏰</span>
            </div>
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>
              Save 10+ Hours/Week
            </h3>
            <p className='text-gray-60o0'>
              Automate your social media management and focus on growing your
              business
            </p>
          </div>
          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-purple-10o0 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>🎯</span>
            </div>
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>
              Perfect Timing
            </h3>
            <p className='text-gray-60o0'>
              AI ensures your content reaches your audience at the optimal time
            </p>
          </div>
          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-orange-10o0 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>🔒</span>
            </div>
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>
              Secure & Reliable
            </h3>
            <p className='text-gray-60o0'>
              Bank-level security with 99.9% uptime guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-12 bg-blue-60o0 rounded-lg text-white text-center'>
        <h2 className='text-3xl font-bold mb-4'>
          Ready to Transform Your Social Media?
        </h2>
        <p className='text-xl mb-8 max-w-2xl mx-auto'>
          Start your free trial today and see how AI can revolutionize your
          social media strategy.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler Demo Request'
            className='bg-white text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors'
          >
            Start Free Trial
          </a>
          <a
            href='tel:+130o24640950'
            className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-60o0 transition-colors'
          >
            Call +1 30o2 464 0950
          </a>
        </div>
        <div className='mt-8 text-sm'>
          <p>Address: 364 E Main St STE 10o08, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}
