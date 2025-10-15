import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Specialized Software Solutions</title>
        <meta name="description" content="Specialized micro SaaS solutions for specific business needs including task management, expense tracking, workflow automation, and more. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="micro SaaS, task management, expense tracking, workflow automation, email marketing, social media management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Micro SaaS Solutions</h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                Specialized software-as-a-service solutions designed to solve specific business challenges with intelligent automation and AI-powered features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Call: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Micro SaaS Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicesData.microSaas.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-purple-600 font-semibold">{service.marketPrice}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-purple-500 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Link 
                    to={`/${service.id}`} 
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <a 
                    href={`tel:${service.contactInfo.phone}`}
                    className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Micro SaaS Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS solutions are designed to be powerful, easy to use, and cost-effective
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'AI-Powered',
                  description: 'Intelligent automation and AI features built into every solution',
                  icon: '🤖'
                },
                {
                  title: 'Easy Integration',
                  description: 'Seamless integration with your existing tools and workflows',
                  icon: '🔗'
                },
                {
                  title: 'Scalable',
                  description: 'Grows with your business from startup to enterprise',
                  icon: '📈'
                },
                {
                  title: 'Cost-Effective',
                  description: 'Affordable pricing with no hidden fees or long-term contracts',
                  icon: '💰'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Comparison Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No hidden fees, no long-term contracts. Choose the plan that fits your needs.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Starter',
                    price: 'From $19/month',
                    description: 'Perfect for small businesses and startups',
                    features: ['Basic features', 'Email support', 'Standard integrations', 'Up to 5 users']
                  },
                {
                    name: 'Professional',
                    price: 'From $79/month',
                    description: 'Ideal for growing businesses',
                    features: ['Advanced features', 'Priority support', 'Custom integrations', 'Up to 25 users', 'Analytics dashboard']
                  },
                {
                    name: 'Enterprise',
                    price: 'From $199/month',
                    description: 'For large organizations',
                    features: ['All features', '24/7 support', 'Custom development', 'Unlimited users', 'Advanced analytics', 'Dedicated account manager']
                  }
                ].map((plan, index) => (
                  <div key={index} className={`p-6 rounded-xl border-2 ${index === 1 ? 'border-purple-500 bg-purple-50' : 'border-gray-200'}`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-purple-600 mb-2">{plan.price}</div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-green-500 mr-3">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      index === 1 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                    }`}>
                      {index === 1 ? 'Most Popular' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Streamline Your Business?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Discover how our micro SaaS solutions can automate your workflows and boost your productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-purple-100">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;