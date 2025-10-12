import React from 'react';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PenTool, FileText, Image, Video, Mic, Globe, Zap, Brain, BarChart, Users, Shield, Star } from 'lucide-react';
const AiContentGenerationProPage: React.FC = () => {
  const features = [
    {
      title: 'Advanced AI Models',
      description: 'State-of-the-art language models trained on the latest data for superior content quality',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Multi-Format Content',
      description: 'Generate text, images, videos, audio, and interactive content in one platform',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Brand Voice Training',
      description: 'Train AI to match your unique brand voice and style across all content',
      icon: <PenTool className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword research and optimization',
      icon: <BarChart className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Content Analytics',
      description: 'Track performance, engagement, and ROI of all generated content',
      icon: <BarChart className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance standards',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    };
  ];
const advancedFeatures = [
    'Custom AI model training',
    'API access and webhooks',
    'White-label solutions',
    'Advanced content templates',
    'Multi-language support',
    'Content versioning',
    'Team collaboration tools',
    'Advanced analytics dashboard',
    'Custom integrations',
    'Priority support';
  ];
  const pricingPlans = [
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'For growing businesses and content teams',
      features: [
        'Up to 100,000 words/month',
        'All content formats',
        'Basic brand voice training',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$499',
      period: '/month',
      description: 'For agencies and large teams',
      features: [
        'Up to 500,000 words/month',
        'Advanced AI models',
        'Custom brand voice training',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited content generation',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    };
  ];
  return (
    <div>Content</div>
  );
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet >
        <title>AI Content Generation Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI content generation platform with advanced features, brand voice training, and enterprise-grade security." />
        <meta name="keywords" content="AI content generation pro, professional content creation, brand voice training, enterprise content AI" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Content Generation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {' '}Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The most advanced AI content generation platform for professionals. Create, optimize, 
            and scale content with enterprise-grade features and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link >
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              Start Pro Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link >
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              View Demo
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional-Grade Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities designed for content professionals and enterprise teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Advanced Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional content at scale with enterprise-grade features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Core Features</h3>
              <ul className="space-y-4">
                {advancedFeatures.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Enterprise Features</h3>
              <ul className="space-y-4">
                {advancedFeatures.slice(5).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your professional content creation needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Pro?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the professionals who trust our AI platform for their most important content needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link >
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              Start Your Pro Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link >
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>;
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function AiContentGenerationProPage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Ai Content Generation Pro - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Advanced Ai Content Generation Pro solutions powered by AI." />
=======
        <meta name="description" content="Professional ai content generation pro services by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
        <meta name = "description" content="Professional ai content generation pro by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Content Generation Pro</h1>
<<<<<<< HEAD
<<<<<<< HEAD
          <p className="text-lg text-gray-300 mb-8">Advanced Ai Content Generation Pro solutions powered by AI.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
          <p className="text-lg text-gray-300 mb-8">Professional ai content generation pro services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
          >
=======
          <p className="text-lg text-gray-300 mb-8">Professional ai content generation pro coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>;
  );
}