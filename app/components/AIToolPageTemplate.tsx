import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface AIToolPageTemplateProps {
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  demoComponent?: React.ReactNode;
  isComingSoon?: boolean;
}

const AIToolPageTemplate: React.FC<AIToolPageTemplateProps> = ({
  title,
  description,
  shortDescription,
  icon,
  features,
  benefits,
  useCases,
  pricing,
  contactInfo,
  demoComponent,
  isComingSoon = false
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'pricing' | 'demo'>('overview');

  return (
    <>
      <Helmet>
        <title>{title} - Zion Tech Group | AI-Powered Solutions</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title}, AI tools, artificial intelligence, automation, business solutions`} />
        <meta property="og:title" content={`${title} - Zion Tech Group`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} - Zion Tech Group`} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-6">{icon}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Started Today
                </a>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8">
              {['overview', 'features', 'pricing', 'demo'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose {title}?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{shortDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {benefits.slice(0, 4).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h3>
                  <ul className="space-y-2">
                    {useCases.slice(0, 4).map((useCase, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-600">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      <strong>Phone:</strong> {contactInfo.phone}
                    </p>
                    <p className="text-gray-600">
                      <strong>Email:</strong> {contactInfo.email}
                    </p>
                    <a 
                      href={contactInfo.website}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Powerful Features</h2>
                <p className="text-xl text-gray-600">Everything you need to succeed with AI</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-3">⚡</span>
                      <span className="text-gray-900 font-medium">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Pricing</h2>
                <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: 'Basic', price: pricing.basic, features: features.slice(0, 5) },
                  { name: 'Pro', price: pricing.pro, features: features.slice(0, 8), popular: true },
                  { name: 'Enterprise', price: pricing.enterprise, features: features }
                ].map((plan, index) => (
                  <div key={index} className={`bg-white p-8 rounded-lg shadow-md ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    {plan.popular && (
                      <div className="text-center mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Try It Out</h2>
                <p className="text-xl text-gray-600">Experience the power of {title}</p>
              </div>

              {isComingSoon ? (
                <div className="bg-white p-12 rounded-lg shadow-md text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h3>
                  <p className="text-xl text-gray-600 mb-8">
                    We're working hard to bring you an amazing {title} experience. 
                    Contact us for early access and updates.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Request Early Access
                    </a>
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Call for Demo
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md">
                  {demoComponent || (
                    <div className="text-center py-12">
                      <div className="text-4xl mb-4">🎯</div>
                      <p className="text-gray-600">Interactive demo coming soon!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AIToolPageTemplate;