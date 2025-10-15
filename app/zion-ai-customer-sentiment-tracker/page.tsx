import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AICustomerSentimentTrackerPage: React.FC = () => {
  const service = servicesData.additionalMicroSaas.find(s => s.id === 'ai-customer-sentiment-tracker');

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content="AI customer sentiment analysis, social media monitoring, brand reputation, customer feedback analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-sentiment-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Interest in ${service.title}`}
                  className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Monitor Sentiment
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sentiment Intelligence Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understand your customers better with real-time sentiment analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sentiment Monitoring Plans
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your monitoring needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-pink-600 mb-4">
                  ${service.pricing.basic}
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 5,000 mentions/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic sentiment analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                </ul>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Interest in Basic Plan for ${service.title}`}
                  className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-pink-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-4xl font-bold text-pink-600 mb-4">
                  ${service.pricing.pro}
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 25,000 mentions/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced AI analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Multi-platform monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Interest in Pro Plan for ${service.title}`}
                  className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-pink-600 mb-4">
                  ${service.pricing.enterprise}
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited mentions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom AI models
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    On-premise deployment
                  </li>
                </ul>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Interest in Enterprise Plan for ${service.title}`}
                  className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors text-center block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Monitor Customer Sentiment?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead of customer needs and protect your brand reputation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perfect For Every Business
              </h2>
              <p className="text-xl text-gray-600">
                Ideal for businesses that care about customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Understand Your Customers?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already monitoring customer sentiment with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${service.contactInfo.email}?subject=Interest in ${service.title}`}
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerSentimentTrackerPage;