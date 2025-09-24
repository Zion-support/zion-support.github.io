export const metadata = {
  title: 'Social Media Automation | Zion Tech Group',
  description:
    'Automate your social media presence with AI-powered content creation, scheduling, and engagement. Boost your reach and save time.',
};

export default function SocialMediaAutomationPage() {
  return (
    <section className='max-w-6xl mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>
        Social Media Automation
      </h1>
      <p className='text-xl text-gray-60o0 mb-12'>
        Automate your social media presence with AI-powered content creation,
        intelligent scheduling, and engagement optimization.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        <FeatureCard
          title='AI Content Creation'
          features={[
            'Auto-generated posts',
            'Trend-based content',
            'Brand voice consistency',
            'Multi-platform adaptation',
          ]}
        />
        <FeatureCard
          title='Smart Scheduling'
          features={[
            'Optimal timing analysis',
            'Cross-platform posting',
            'Content calendar management',
            'Automated reposting',
          ]}
        />
        <FeatureCard
          title='Engagement Analytics'
          features={[
            'Performance tracking',
            'Audience insights',
            'ROI measurement',
            'Growth recommendations',
          ]}
        />
      </div>

      <div className='bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-20o0 rounded-xl p-8 mb-16'>
        <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>
          Why Choose Our Social Media Automation?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex items-start'>
            <span className='text-purple-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Save 10+ Hours Weekly
              </h3>
              <p className='text-gray-60o0'>
                Automate repetitive tasks and focus on strategy and growth
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-purple-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Increase Engagement by 40%
              </h3>
              <p className='text-gray-60o0'>
                AI-optimized posting times and content for maximum reach
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-purple-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Multi-Platform Management
              </h3>
              <p className='text-gray-60o0'>
                Manage Facebook, Instagram, Twitter, LinkedIn, and TikTok from
                one dashboard
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-purple-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Brand Consistency
              </h3>
              <p className='text-gray-60o0'>
                Maintain your brand voice and style across all platforms
                automatically
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <div className='mt-16 text-center'>
        <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>
          Ready to Automate Your Social Media?
        </h2>
        <p className='text-gray-60o0 mb-6'>
          Start with a free audit of your current social media strategy and see
          the potential for growth.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='tel:+130o24640950'
            className='bg-purple-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-70o0 transition-colors'
          >
            Call +1 30o2 464 0950
          </a>
          <a
            href='mailto:kleber@ziontechgroup.com'
            className='border-2 border-purple-60o0 text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-purple-60o0 hover:text-white transition-colors'
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  features,
}: {
  title: string;
  features: string[];
}) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white shadow-sm'>
      <h3 className='text-xl font-bold text-gray-90o0 mb-4'>{title}</h3>
      <ul className='space-y-2 text-gray-60o0'>
        {features.map(f => (
          <li key={f} className='flex items-center'>
            <span className='text-purple-50o0 mr-2'>•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className='mt-16'>
      <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>
        Pricing Plans
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <Plan
          name='Starter'
          price='$199/mo'
          features={[
            '3 social media accounts',
            '50 posts per month',
            'Basic analytics',
            'Email support',
          ]}
        />
        <Plan
          name='Professional'
          price='$499/mo'
          features={[
            '10 social media accounts',
            'Unlimited posts',
            'Advanced AI content',
            'Priority support',
            'Custom hashtag research',
          ]}
          popular={true}
        />
        <Plan
          name='Agency'
          price='$999/mo'
          features={[
            'Unlimited accounts',
            'White-label dashboard',
            'Client management',
            'Dedicated support',
            'Custom integrations',
          ]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
  popular = false,
}: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? 'border-purple-50o0 ring-2 ring-purple-20o0' : 'border-gray-20o0'}`}
    >
      {popular && (
        <div className='bg-purple-50o0 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4'>
          Most Popular
        </div>
      )}
      <h4 className='text-xl font-bold text-gray-90o0 mb-2'>{name}</h4>
      <div className='text-3xl font-bold text-purple-60o0 mb-4'>{price}</div>
      <ul className='space-y-2 text-gray-60o0 mb-6'>
        {features.map(f => (
          <li key={f} className='flex items-center'>
            <span className='text-green-50o0 mr-2'>✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href='tel:+130o24640950'
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? 'bg-purple-60o0 text-white hover:bg-purple-70o0'
            : 'bg-gray-10o0 text-gray-90o0 hover:bg-gray-20o0'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
