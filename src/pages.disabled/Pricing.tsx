import React from 'react';
// PricingCard component
const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  isPopular
}: {
  name: string; ,
  price: string; ,
  period: string; ,
  description: string; ,
  features: string[]; ,
  isPopular: boolean;
}) => (
  <div className={`relative bg-white p-8 rounded-lg shadow-lg ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>`
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">"
          Most Popular
        </span>
      </div>
    )}
    <div className="text-center mb-6">"
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
      <div className="text-4xl font-bold text-gray-900 mb-1">"
        {price}
        <span className="text-lg font-normal text-gray-600">/{period}</span>"
      </div>
      <p className="text-gray-600">{description}</p>"
    </div>
    <ul className="space-y-3 mb-8">"
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">"
          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">"
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />"
          </svg>
          <span className="text-gray-600">{feature}</span>"
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${`
      isPopular
        ? 'bg-blue-600 text-white hover:bg-blue-700' '
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200''
    }`}>`
      Get Started
    </button>
  </div>
);
const Pricing: React.FC = () => {,
  return (
    <div className="min-h-screen bg-white py-20">"
      <div className="container mx-auto px-4">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">"
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Choose the perfect plan for your business needs. All plans include our core services with flexible options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">"
          <PricingCard
            name="Starter""
            price="$2,500""
            period="month""
            description="Perfect for small businesses getting started with AI and automation"",
            features={[
              "Basic AI services","
              "Micro SaaS development","
              "IT support","
              "Email support","
              "Monthly reports""
            ]}
            isPopular={false}
          />
          <PricingCard
            name="Professional""
            price="$7,500""
            period="month""
            description="Ideal for growing businesses that need advanced AI and automation"",
            features={[
              "Advanced AI services","
              "Custom micro SaaS","
              "Full IT services","
              "Priority support","
              "Weekly reports","
              "API access""
            ]}
            isPopular={true}
          />
          <PricingCard
            name="Enterprise""
            price="$25,000""
            period="month""
            description="Complete solution for large enterprises with complex needs"",
            features={[
              "Full AI suite","
              "White-label solutions","
              "Dedicated team","
              "24/7 support","
              "Custom integrations","
              "SLA guarantee""
            ]}
            isPopular={false}
          />
        </div>
        <div className="text-center">"
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>"
          <p className="text-gray-600 mb-8">"
            Contact us today to discuss your specific needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <a
              href="tel:+13024640950"",
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors""
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"",
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors""
            >
              Email Us
            </a>
          </div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h2>
          <p className="text-gray-300 mb-6">
            Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};
import Button from '../components/Button';
const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      price: '$29',
      frequency: '/month',
      features: [
        '5 AI Models',
        '1000 API Calls',
        'Basic Analytics',
        'Email Support',']
      ],
      buttonText: 'Start Free Trial',
      highlight: false,
    },
      name: 'Pro',
      price: '$99',
        '20 AI Models',
        '10000 API Calls',
        'Advanced Analytics',
        'Priority Support',
        'Custom Integrations',']
      buttonText: 'Get Started',
      highlight: true,
      name: 'Enterprise',
      price: 'Custom',
      frequency: ,
        'Unlimited AI Models',
        'Unlimited API Calls',
        'Dedicated Support',
        'On-premise Deployment',
        'SLA Guarantee',']
      buttonText: 'Contact Sales',
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started",
        "Basic AI Solutions",
        "Cloud Storage (100GB)",
        "Email Support",
        "Basic Analytics",
        "Standard Security"
        'Email Support',
ursor/fix-syntax-push-and-merge-to-main-f9ca
      name: "Professional",
      price: "$299",
      description: "Ideal for growing businesses with advanced needs",
        "Advanced AI Solutions",
        "Cloud Storage (1TB)",
        "Priority Support",
        "Advanced Analytics",
        "Enhanced Security",
        "Custom Integrations",
        "24/7 Monitoring"
        'Custom Integrations',
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations",
        "Custom AI Solutions",
        "Unlimited Cloud Storage",
        "Dedicated Support",
        "Custom Analytics",
        "Enterprise Security",
        "24/7 Monitoring",
        "SLA Guarantee",
        "On-site Support"
        'SLA Guarantee',
  ];
pr-12325

  return (
    <div className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:bg-white/20 ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-white/20'
    }`}>
      {popular && (
        <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="text-3xl font-bold text-white mb-2">{price}</div>
      <div className="text-gray-300 mb-4">{period}</div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-green-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
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
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen pt-20">"
</div>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">"
</h1>
          </h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">"
</p>
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Pricing Plans</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card p-8 rounded-lg border relative ${
                plan.popular ? 'border-primary shadow-lg scale-105' : `;
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/70 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-foreground/60 ml-2">{plan.period}</span>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-foreground/80">
                    <span className="w-5 h-5 bg-primary/20 rounded-full mr-3 flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen pt-20">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Flexible Pricing Plans
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Choose the plan that best fits your business needs, from startups to large enterprises.
"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
            <div;
              key={index}`;
              className={`bg-slate-800 rounded-lg shadow-lg p-8 border ${"
                tier.highlight ? 'border-blue-500 transform scale-105' : 'border-slate-700`;
              } transition-all duration-300 hover:shadow-2xl`}
              <h2 className="text-3xl font-bold mb-4 text-white">{tier.name}</h2>""
              <p className="text-5xl font-extrabold text-blue-500 mb-6">"
</p>"
                {tier.frequency && <span className="text-xl text-gray-400">{tier.frequency}</span>}"
              <ul className="text-gray-300 text-lg mb-8 space-y-3">"
</ul>"
                  <li key={featureIndex} className="flex items-center">"
</li>"
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">"
</svg>
                      <path;"
                        fillRule="evenodd"""
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"""
                        clipRule="evenodd""
                      />
</path>
                  </li>
              <Button variant={tier.highlight ? 'primary' : 'outline'} size="large" className="w-full">"

                    {feature}
                ))}
              </ul>
              `;
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-muted text-foreground hover:bg-muted/80`;
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
              <Button variant={tier.highlight ? 'primary' : 'outline'} size="large" className="w-full">
                {tier.buttonText}
              
        <div className="mt-16 text-center">"
          <h2 className="text-4xl font-bold mb-8">Need a Custom Solution?</h2>""
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">"
          <Button variant="primary" size="large">"

          
    </div>)"`;
pr-12325
