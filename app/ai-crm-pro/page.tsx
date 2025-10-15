import React, { memo, useMemo } from 'react';
import SEOHead from '../components/SEOHead';

const AICRMProPage: React.FC = memo(() => {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI CRM Pro",
    "description": "Next-generation AI-powered Customer Relationship Management with predictive analytics and automated lead scoring",
    "url": "https://ziontechgroup.com/ai-crm-pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "89",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "89",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 302 464 0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  }), []);

  return (
    <>
      <SEOHead
        title="Zion AI CRM Pro - Next-Generation AI-Powered CRM | Zion Tech Group"
        description="Revolutionary AI-powered Customer Relationship Management with predictive analytics, automated lead scoring, and intelligent customer insights. Transform your sales process with Zion AI CRM Pro."
        keywords="AI CRM, customer relationship management, predictive analytics, lead scoring, sales automation, customer insights, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/ai-crm-pro"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI CRM Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Next-generation AI-powered Customer Relationship Management with predictive analytics and automated lead scoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Get Started - $89/month
              </a>
              <a href="tel:+13024640950" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
                Call: +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Powerful AI Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Lead Scoring</h3>
                <p className="text-gray-600">
                  Automatically score and prioritize leads using advanced machine learning algorithms that analyze customer behavior and engagement patterns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Get insights into customer behavior, sales trends, and revenue forecasting with our advanced predictive analytics engine.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Follow-ups</h3>
                <p className="text-gray-600">
                  Never miss an opportunity with intelligent automated follow-up sequences that adapt based on customer interactions and preferences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Email Sequences</h3>
                <p className="text-gray-600">
                  Create personalized email campaigns that automatically adjust content and timing based on customer engagement and preferences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Journey Mapping</h3>
                <p className="text-gray-600">
                  Visualize and optimize the complete customer journey from first contact to conversion with detailed analytics and insights.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Forecasting</h3>
                <p className="text-gray-600">
                  Predict future revenue with high accuracy using AI-powered forecasting models that consider multiple variables and market trends.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$89<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Up to 1,000 contacts</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>AI Lead Scoring</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic Analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Email Integration</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Mobile App</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Start Free Trial
                </a>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg shadow-md border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Up to 10,000 contacts</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced AI Features</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Predictive Analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom Integrations</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Priority Support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Start Free Trial
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$499<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unlimited contacts</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Full AI Suite</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom Development</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Dedicated Support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>On-premise Option</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Zion AI CRM Pro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">40% Increase in Lead Conversion</h3>
                <p className="text-gray-600">
                  Our AI-powered lead scoring and automated follow-ups help you convert more leads into customers, increasing your conversion rate by an average of 40%.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Sales Processes</h3>
                <p className="text-gray-600">
                  Reduce manual work and human error with intelligent automation that handles routine tasks, allowing your team to focus on high-value activities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Customer Insights</h3>
                <p className="text-gray-600">
                  Get deep insights into customer behavior, preferences, and buying patterns to make data-driven decisions and improve customer relationships.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Higher Revenue per Customer</h3>
                <p className="text-gray-600">
                  Identify upselling and cross-selling opportunities with AI-powered recommendations, increasing your average revenue per customer.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Process?</h2>
            <p className="text-xl mb-6">Get started with Zion AI CRM Pro today and see the difference AI can make.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Call: +1 302 464 0950
              </a>
            </div>
            <p className="mt-4 text-sm opacity-90">
              Address: 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

AICRMProPage.displayName = 'AICRMProPage';

export default AICRMProPage;