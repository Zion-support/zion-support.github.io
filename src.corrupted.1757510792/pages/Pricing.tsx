import React from 'react';

// PricingCard component
const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
}) => (
  <div className={`relative bg-white p-8 rounded-lg shadow-lg ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-4xl font-bold text-gray-900 mb-1">
        {price}
        <span className="text-lg font-normal text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
      isPopular
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    }`}>
      Get Started
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services with flexible options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            name="Starter"
            price="$2,500"
            period="month"
            description="Perfect for small businesses getting started with AI and automation"
            features={[
              'Basic AI services',
              'Micro SaaS development',
              'IT support',
              'Email support',
              'Monthly reports',
            ]}
            isPopular={false}
          />
          <PricingCard
            name="Professional"
            price="$7,500"
            period="month"
            description="Ideal for growing businesses that need advanced AI and automation"
            features={[
              'Advanced AI services',
              'Custom micro SaaS',
              'Full IT services',
              'Priority support',
              'Weekly reports',
              'API access',
            ]}
            isPopular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$25,000"
            period="month"
            description="Complete solution for large enterprises with complex needs"
            features={[
              'Full AI suite',
              'White-label solutions',
              'Dedicated team',
              '24/7 support',
              'Custom integrations',
              'SLA guarantee',
            ]}
            isPopular={false}
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your specific needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing
import React from 'react'; const Pricing = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Pricing </h1> <p className="text-xl text-gray-600"> Choose the perfect plan for your business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic</h3> <p className="text-3xl font-bold text-gray-900 mb-4">$99/month</p> <ul className="space-y-2 text-gray-600"> <li>Basic AI solutions</li> <li>Email support</li> <li>Standard security</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Get Started </button> </div> <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional</h3> <p className="text-3xl font-bold text-gray-900 mb-4">$299/month</p> <ul className="space-y-2 text-gray-600"> <li>Advanced AI solutions</li> <li>Priority support</li> <li>Enhanced security</li> <li>Custom integrations</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Get Started </button> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3> <p className="text-3xl font-bold text-gray-900 mb-4">Custom</p> <ul className="space-y-2 text-gray-600"> <li>Full AI suite</li> <li>24/7 support</li> <li>Enterprise security</li> <li>Custom development</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Contact Sales </button> </div> </div> </div> </div> )}; export default Pricing;
