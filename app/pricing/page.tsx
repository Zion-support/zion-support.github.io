import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Services</title>
        <meta name="description" content="Transparent pricing for our AI services, micro SaaS solutions, and IT services. No hidden fees. Contact us at +1 302 464 0950 for custom quotes." />
        <meta name="keywords" content="pricing, AI services pricing, micro SaaS pricing, IT services pricing, transparent pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
                No hidden fees, no surprises. Choose the plan that fits your business needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Call: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* AI Services Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Services Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI solutions with flexible pricing options
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <span className="text-5xl mb-4 block">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{service.marketPrice}</div>
                    <p className="text-sm text-gray-500">Starting price</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to={`/${service.id}`} 
                      className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SaaS Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Affordable monthly subscriptions with no long-term contracts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <span className="text-4xl mb-3 block">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-purple-600 mb-1">{service.marketPrice}</div>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link 
                      to={`/${service.id}`} 
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                    >
                      Start Free Trial
                    </Link>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IT Solutions Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Solutions Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom IT solutions tailored to your specific requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <span className="text-4xl mb-3 block">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-1">{service.marketPrice}</div>
                    <p className="text-sm text-gray-500">project-based pricing</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link 
                      to={`/${service.id}`} 
                      className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                    >
                      Get Quote
                    </Link>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="border border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                    >
                      Schedule Call
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Enterprise Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom enterprise solutions with dedicated support and advanced features
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-900 to-indigo-900 rounded-2xl p-12 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Enterprise Package</h3>
                <p className="text-xl text-gray-300 mb-6">Custom pricing based on your specific needs</p>
                <div className="text-4xl font-bold text-indigo-400 mb-2">Contact Us</div>
                <p className="text-gray-300">for custom enterprise pricing</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  'Dedicated Account Manager',
                  '24/7 Priority Support',
                  'Custom Development',
                  'Advanced Security',
                  'Unlimited Users',
                  'Custom Integrations',
                  'SLA Guarantees',
                  'Training & Onboarding'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors inline-block mr-4"
                >
                  Call: +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-indigo-600 text-indigo-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-600 hover:text-white transition-colors inline-block"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common questions about our pricing and services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Do you offer free trials?",
                  answer: "Yes, most of our micro SaaS solutions offer free trials. Contact us to learn more about trial periods for specific services."
                },
                {
                  question: "Are there any setup fees?",
                  answer: "No, we don't charge setup fees for our services. The pricing you see is what you pay, with no hidden costs."
                },
                {
                  question: "Can I change my plan later?",
                  answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  question: "Do you offer discounts for annual payments?",
                  answer: "Yes, we offer up to 20% discount for annual payments on most of our services. Contact us for details."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise clients can also pay via invoice."
                },
                {
                  question: "Is there a money-back guarantee?",
                  answer: "Yes, we offer a 30-day money-back guarantee on all our services. If you're not satisfied, we'll refund your payment."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and get a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-indigo-100">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PricingPage;