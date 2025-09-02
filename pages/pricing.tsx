import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import {
  Check,
  Star,
  ArrowRight,
  Zap,
  Users,
  Building,
  Crown,
} from 'lucide-react';
const Pricing: NextPage = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$2, 500',
      period: 'per month',
      icon: Zap,
      color: 'blue',
      features: [
        'Basic website development',
        'Up to 5 pages',
        'Mobile responsive design',
        'Basic SEO optimization',
        'Email support',
        '3 months maintenance included',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$5, 000',
      period: 'per month',
      icon: Users,
      color: 'purple',
      features: [
        'Custom web application development',
        'Up to 15 pages',
        'Advanced features and integrations',
        'Advanced SEO optimization',
        'Priority email support',
        '6 months maintenance included',
        'Performance optimization',
        'Analytics setup',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and complex projects',
      price: 'Custom',
      period: 'quote',
      icon: Building,
      color: 'green',
      features: [
        'Full-stack enterprise solutions',
        'Unlimited pages and features',
        'Custom integrations and APIs',
        'Advanced security features',
        'Dedicated project manager',
        '24/7 phone and email support',
        '12 months maintenance included',
        'Custom training and documentation',
        'SLA guarantees',
      ],
      popular: false,
    },
  ];
  const servicePricing = [
    {
      service: 'AI Development',
      description: 'Custom AI solutions and machine learning models',
      startingPrice: '$10, 000',
      features: [
        'Custom AI models',
        'Data analysis',
        'Integration support',
        'Training and documentation',
      ],
    },
    {
      service: 'Cloud Services',
      description: 'Cloud migration and infrastructure management',
      startingPrice: '$5,000',
      features: [
        'Cloud migration',
        'Infrastructure setup',
        'Monitoring and maintenance',
        'Security implementation',
      ],
    },
    {
      service: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      startingPrice: '$8,000',
      features: [
        'iOS and Android apps',
        'Cross-platform solutions',
        'App store deployment',
        'Ongoing updates',
      ],
    },
    {
      service: 'Blockchain Solutions',
      description: 'Blockchain development and smart contracts',
      startingPrice: '$15,000',
      features: [
        'Smart contract development',
        'Blockchain integration',
        'Security auditing',
        'Deployment support',
      ],
    },
  ];
  return (
    <Layout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for Zion Tech Group's technology services. Choose the plan that fits your business needs and budget."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Simple
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}
              Pricing
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Choose the perfect plan for your business needs. All plans include
            our commitment to quality and support.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular
                    ? 'border-purple-500 transform scale-105'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}-100 flex items-center justify-center`}
                  >
                    <plan.icon className={`w-8 h-8 text-${plan.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover: from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Service-Specific Pricing
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicePricing.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.service}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    Starting at {service.startingPrice}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-blue-600 hover: text-blue-700 font-semibold flex items-center"
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Crown className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                We deliver high-quality solutions using the latest technologies
                and best practices in the industry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Our experienced developers and designers work closely with you
                to bring your vision to life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                We understand the importance of time and deliver projects on
                schedule without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pricing FAQ
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer custom pricing?
              </h3>
              <p className="text-gray-600">
                Yes, we offer custom pricing for enterprise projects and
                specialized requirements. Contact us for a personalized quote.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's included in maintenance?
              </h3>
              '
              <p className="text-gray-600">
                Maintenance includes bug fixes, security updates, performance
                optimization, and minor feature enhancements as specified in
                your plan.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change my plan later?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time.
                We'll work with you to ensure a smooth transition.'
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-600">
                Yes, we offer flexible payment options including monthly
                installments for larger projects. Contact us to discuss payment
                arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and get a
            customized quote that fits your budget.
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Pricing;
