export const metadata = {
  title: 'Customer Feedback Analyzer | Zion Tech Group',
  description:
    'Transform customer feedback into actionable insights with AI-powered sentiment analysis, trend detection, and automated reporting.',
};

export default function CustomerFeedbackAnalyzerPage() {
  return (
    <section className='max-w-6xl mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>
        Customer Feedback Analyzer
      </h1>
      <p className='text-xl text-gray-60o0 mb-12'>
        Transform customer feedback into actionable insights with AI-powered
        sentiment analysis, trend detection, and automated reporting.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        <FeatureCard
          title='AI Sentiment Analysis'
          features={[
            'Real-time sentiment scoring',
            'Emotion detection',
            'Language processing',
            'Multi-language support',
          ]}
        />
        <FeatureCard
          title='Trend Detection'
          features={[
            'Pattern recognition',
            'Issue prioritization',
            'Performance tracking',
            'Predictive insights',
          ]}
        />
        <FeatureCard
          title='Automated Reporting'
          features={[
            'Custom dashboards',
            'Scheduled reports',
            'Alert notifications',
            'Executive summaries',
          ]}
        />
      </div>

      <div className='bg-gradient-to-r from-orange-50 to-red-50 border border-orange-20o0 rounded-xl p-8 mb-16'>
        <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>
          Why Analyze Customer Feedback?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex items-start'>
            <span className='text-orange-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Improve Customer Satisfaction
              </h3>
              <p className='text-gray-60o0'>
                Identify pain points and opportunities to enhance customer
                experience
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-orange-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Reduce Churn by 25%
              </h3>
              <p className='text-gray-60o0'>
                Early detection of customer issues prevents cancellations
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-orange-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Data-Driven Decisions
              </h3>
              <p className='text-gray-60o0'>
                Make informed product and service improvements based on real
                feedback
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-orange-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Competitive Advantage
              </h3>
              <p className='text-gray-60o0'>
                Stay ahead by understanding customer needs and market trends
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <div className='mt-16 text-center'>
        <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>
          Ready to Understand Your Customers Better?
        </h2>
        <p className='text-gray-60o0 mb-6'>
          Start with a free analysis of your existing feedback data and see what
          insights you're missing.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='tel:+130o24640950'
            className='bg-orange-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-70o0 transition-colors'
          >
            Call +1 30o2 464 0950
          </a>
          <a
            href='mailto:kleber@ziontechgroup.com'
            className='border-2 border-orange-60o0 text-orange-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-orange-60o0 hover:text-white transition-colors'
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
            <span className='text-orange-50o0 mr-2'>•</span> {f}
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
          price='$149/mo'
          features={[
            'Up to 1,0o00 feedback items',
            'Basic sentiment analysis',
            'Monthly reports',
            'Email support',
          ]}
        />
        <Plan
          name='Professional'
          price='$399/mo'
          features={[
            'Up to 10,0o00 feedback items',
            'Advanced AI analysis',
            'Real-time dashboards',
            'Priority support',
            'Custom integrations',
          ]}
          popular={true}
        />
        <Plan
          name='Enterprise'
          price='$899/mo'
          features={[
            'Unlimited feedback items',
            'Custom AI models',
            'White-label solution',
            'Dedicated support',
            'API access',
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
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? 'border-orange-50o0 ring-2 ring-orange-20o0' : 'border-gray-20o0'}`}
    >
      {popular && (
        <div className='bg-orange-50o0 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4'>
          Most Popular
        </div>
      )}
      <h4 className='text-xl font-bold text-gray-90o0 mb-2'>{name}</h4>
      <div className='text-3xl font-bold text-orange-60o0 mb-4'>{price}</div>
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
            ? 'bg-orange-60o0 text-white hover:bg-orange-70o0'
            : 'bg-gray-10o0 text-gray-90o0 hover:bg-gray-20o0'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
