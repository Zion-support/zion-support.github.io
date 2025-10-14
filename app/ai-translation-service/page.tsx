import React from 'react'
import { Link } from "react-router-dom
import { Languages, Target, CheckCircle }    from "lucide-react
import Layout from '../layout'
export default function AITranslationServicePage() {
  const features = ["
    {"
      icon: <Target className="w-6 h-6 text-green-400"
      title: 'Industry-Specific Translation'
      description: 'Specialized translation models for legal, medical, technical, and business content'
    }
  ];
  const translationFeatures = [
    {
      category: 'Translation Types'
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation'
    },
    {
      category: 'Languages'
      items: ['100+ Languages', 'Regional Dialects', 'Technical Terminology', 'Cultural Adaptation', 'Quality Assurance', 'Human Review'
    },
    {
      category: 'Industries'
      items: ['Legal Documents', 'Medical Reports', 'Technical Manuals', 'Marketing Content', 'E-commerce', 'Software Localization'
    },
    {
      category: 'Features'
      items: ['Real-time Translation', 'Batch Processing', 'API Integration', 'Custom Models', 'Quality Scoring', 'Confidence Metrics'
    }
  ];
  const pricingPlans = [
    {
      name: 'Basic'
      price: '$99'
      period: '/month'
      description: 'Perfect for small projects'
      features: [
        'Up to 10,000 words/month'
        '50+ languages'
        'Email support'
        'Basic quality checks'
        'Standard processing time'
      ],
      popular: false
    },
    {
      name: 'Professional'
      price: '$299'
      period: '/month'
      description: 'Ideal for businesses'
      features: [
        'Up to 100,000 words/month'
        '100+ languages'
        'Priority support'
        'Advanced quality checks'
        'Fast processing'
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise'
      price: '$999'
      period: '/month'
      description: 'For large organizations'
      features: [
        'Unlimited words'
        'All languages'
        'Dedicated support'
        'Custom models'
        'Instant processing'
        'Custom integrations'
        'SLA guarantee'
      ],
      popular: false
    }
  ];
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        {/* Hero Section */}
        <div className="relative overflow-hidden"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"
            <div className="text-center"
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"
                AI Translation
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                  {
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                Break down language barriers with our advanced AI translation service. 
                Translate content in 100+ languages with industry-specific accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"
                <Link to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Translating
                </Link>
                <Link to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="py-16"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
                Why Choose Our Translation Service
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"
                Advanced AI technology meets human expertise for perfect translations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                  <div className="mb-4"
                  <h3 className="text-xl font-semibold text-white mb-2"
                  <p className="text-gray-300"
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Translation Features Section */}
        <div className="py-16 bg-white/5"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
                Translation Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"
                Comprehensive translation services for all your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              {translationFeatures.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  <h3 className="text-xl font-semibold text-white mb-4"
                  <ul className="space-y-2"
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Pricing Section */}
        <div className="py-16"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
                Translation Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"
                Affordable pricing for all your translation needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8"
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`
                  {plan.popular && (
                    <div className="bg-cyan-400 text-black text-sm font-semibold px-3 py-1 rounded-full text-center mb-4"
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2"
                  <p className="text-gray-300 mb-6"
                  <div className="mb-6"
                    <span className="text-4xl font-bold text-white"
                    <span className="text-gray-300"
                  </div>
                  <ul className="space-y-3 mb-8"
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className={`
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
              Ready to Break Language Barriers?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              Start translating your content with our AI-powered translation service today.
            </p>
            <Link to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
import React from "react";
import { Helmet } from "react-helmet-async";
const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PagePage;
