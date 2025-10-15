import React from 'react';
import SEOHead from '../../components/SEOHead';

const ZionAILeadScoringPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Lead Scoring Pro",
    "description": "Advanced AI-powered lead scoring system with predictive analytics and automated qualification",
    "url": "https://ziontechgroup.com/zion-ai-lead-scoring",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, API, CRM Integration",
    "offers": {
      "@type": "Offer",
      "price": "599",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Lead Scoring Pro - Intelligent Lead Qualification"
        description="Boost your sales with AI-powered lead scoring. Predictive analytics, automated qualification, and 40% higher conversion rates. Starting from $599/month."
        keywords="AI lead scoring, lead qualification, predictive analytics, sales automation, lead management, CRM integration"
        canonicalUrl="https://ziontechgroup.com/zion-ai-lead-scoring"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-8 animate-pulse">
                <span className="text-4xl">🎯</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Zion AI Lead Scoring Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your sales pipeline with AI-powered lead scoring. Predict which leads will convert, 
                prioritize your efforts, and increase revenue by up to 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#demo" 
                  className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Scoring Demo
                </a>
                <a 
                  href="/contact?service=lead-scoring" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition-all duration-300"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "40%", label: "Higher Conversion" },
                { number: "85%", label: "Accuracy Rate" },
                { number: "3x", label: "Faster Qualification" },
                { number: "500+", label: "Active Companies" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Intelligent Lead Scoring Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI algorithms that learn from your data to score leads accurately
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧠",
                  title: "Machine Learning Models",
                  description: "Self-improving algorithms that learn from your historical conversion data"
                },
                {
                  icon: "📊",
                  title: "Behavioral Analysis",
                  description: "Track and analyze lead behavior patterns across all touchpoints"
                },
                {
                  icon: "🎯",
                  title: "Predictive Scoring",
                  description: "Predict lead conversion probability with 85% accuracy"
                },
                {
                  icon: "🔄",
                  title: "Real-time Updates",
                  description: "Scores update in real-time as leads interact with your brand"
                },
                {
                  icon: "📈",
                  title: "Custom Models",
                  description: "Build custom scoring models tailored to your industry and business"
                },
                {
                  icon: "🔗",
                  title: "CRM Integration",
                  description: "Seamlessly integrate with Salesforce, HubSpot, and other CRMs"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scoring Factors */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Scoring Factors</h2>
              <p className="text-xl text-gray-300">Our AI analyzes multiple data points to score leads accurately</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Demographic Data",
                  factors: ["Company size", "Industry", "Job title", "Location", "Company revenue"],
                  weight: "30%"
                },
                {
                  category: "Behavioral Data",
                  factors: ["Website visits", "Email engagement", "Content downloads", "Social media activity", "Event attendance"],
                  weight: "40%"
                },
                {
                  category: "Firmographic Data",
                  factors: ["Technology stack", "Funding stage", "Growth rate", "Competitor analysis", "Market position"],
                  weight: "20%"
                },
                {
                  category: "Engagement Data",
                  factors: ["Response time", "Meeting attendance", "Email open rates", "Click-through rates", "Social interactions"],
                  weight: "10%"
                }
              ].map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {category.weight}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {category.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="flex items-center text-gray-300">
                        <span className="text-orange-400 mr-3">✓</span>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-300">Connect with your existing tools and workflows</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Salesforce", logo: "☁️" },
                { name: "HubSpot", logo: "🟠" },
                { name: "Pipedrive", logo: "🔵" },
                { name: "Zoho CRM", logo: "🟣" },
                { name: "Mailchimp", logo: "📧" },
                { name: "Zapier", logo: "⚡" },
                { name: "Google Analytics", logo: "📊" },
                { name: "Facebook Ads", logo: "📘" }
              ].map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-3">{integration.logo}</div>
                  <div className="text-white font-semibold">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the plan that fits your lead volume and needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$599",
                  period: "/month",
                  description: "Perfect for small sales teams",
                  features: [
                    "Up to 5,000 leads/month",
                    "Basic scoring models",
                    "Email integration",
                    "Standard reporting",
                    "Email support"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$1,299",
                  period: "/month",
                  description: "Ideal for growing sales teams",
                  features: [
                    "Up to 25,000 leads/month",
                    "Advanced ML models",
                    "CRM integration",
                    "Custom scoring rules",
                    "Advanced analytics",
                    "Priority support"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "For large sales organizations",
                  features: [
                    "Unlimited leads",
                    "Custom model development",
                    "API access",
                    "Dedicated support",
                    "White-label solution",
                    "SLA guarantees"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${plan.popular ? 'border-orange-500 ring-2 ring-orange-500' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-orange-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact?service=lead-scoring&plan={plan.name.toLowerCase()}"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-600 to-pink-600 text-white hover:from-orange-700 hover:to-pink-700' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Boost Your Sales Performance</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ companies using our AI lead scoring to increase conversion rates and revenue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=lead-scoring" 
                className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAILeadScoringPage;