
export default function CloudInfrastructureManagementPage() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic backup'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Enhanced security',
        'Weekly reports',
        'Advanced backup',
        'Cost optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large enterprises',
      features: [
        'Unlimited servers',
        '24/7 monitoring',
        'Dedicated support',
        'Enterprise security',
        'Real-time reports',
        'Disaster recovery',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <title>Cloud Infrastructure Management - Zion Tech Group</title>
      <h1 className="text-4xl font-bold text-white mb-6">Cloud Infrastructure Management</h1>
      <p className="text-lg text-gray-300 mb-8">Professional cloud infrastructure management services coming soon.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className={`bg-gray-800 p-6 rounded-lg ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {plan.price}
              <span className="text-lg text-gray-400">{plan.period}</span>
            </div>
            <p className="text-gray-300 mb-4">{plan.description}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        ))}
      </div>
      
      <a href="/contact" className="text-blue-400 hover:text-blue-300">
        Contact Us
      </a>
    </>
  );
}