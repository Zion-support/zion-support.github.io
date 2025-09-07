import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Micro SaaS MVP',
      price: '$8k - $20k',
      period: '2-4 weeks',
      description: 'Perfect for validating your micro SaaS idea',
      features: [
        'Core features only',
        'Basic Stripe integration',
        'Simple analytics',
        'Email support',
        '2 weeks maintenance'
      ],
      popular: false
    },
    {
      name: 'AI Discovery',
      price: '$5k - $12k',
      period: '2-3 weeks',
      description: 'Explore AI possibilities for your business',
      features: [
        'Use case design',
        'Technology selection',
        'Implementation roadmap',
        'Proof of concept',
        'Consultation included'
      ],
      popular: true
    },
    {
      name: 'IT Infrastructure',
      price: '$10k - $30k',
      period: '4-8 weeks',
      description: 'Complete IT infrastructure setup',
      features: [
        'Cloud migration',
        'DevOps setup',
        'Security hardening',
        'Monitoring & alerting',
        '3 months support'
      ],
      popular: false
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-white mb-6'>Pricing Plans</h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className='text-center'>
          <h2 className='text-2xl font-bold text-white mb-4'>Need a custom solution?</h2>
          <p className='text-gray-300 mb-6'>
            Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <Link
            to='/contact'
            className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
          >
            Contact Sales
          </Link>

        </div>
      </div>
    </div>
  );
};

  return (
    <div className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:bg-white/20 ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-white/20'
    }`}>
      {popular && (
        <div className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4'>
          Most Popular
        </div>
      )}
      <h3 className='text-2xl font-bold text-white mb-2'>{name}</h3>
      <div className='text-3xl font-bold text-white mb-2'>{price}</div>
      <div className='text-gray-300 mb-4'>{period}</div>
      <p className='text-gray-300 mb-6'>{description}</p>
      <ul className='space-y-3 mb-8'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center text-gray-300'>
            <span className='text-green-400 mr-2'>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to='/contact'
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

export default Pricing;