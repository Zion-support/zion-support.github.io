import React from 'react';
import { Video, Play, Download, Share, Star, CheckCircle, Zap, Clock, Users, Award, ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
const AIVideoGenerationPage: React.FC = () => {
  const features = [
    'AI Video Creation',
    'Auto-editing',
    'Voice Synthesis',
    'Text-to-video',
    'Template Library',
    'Brand Customization',
    'Multi-language Support',
    'HD/4K Export',
    'Real-time Preview',
    'Collaboration Tools'
  ];
  const benefits = [
    '90% time savings',
    'Professional quality',
    'Unlimited videos',
    'Multi-language support',
    'No technical skills needed',
    'Cost-effective solution'
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      features: ['10 videos/month', 'HD quality', 'Basic templates', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      features: ['Unlimited videos', '4K quality', 'Premium templates', 'Voice cloning', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      features: ['Everything in Pro', 'Custom templates', 'API access', 'Dedicated support', 'White-label'],
      popular: false
    }
  ];
  return (
    <React.Fragment>
      <SEOOptimizer
        title="AI Video Generator Pro - Create Professional Videos with AI | Zion Tech Group"
        description="Transform your content creation with AI Video Generator Pro. Create professional videos, animations, and presentations with AI-powered editing and voice synthesis. Starting at $199/month."
        keywords={['AI video generation', 'video creation', 'AI editing', 'voice synthesis', 'text to video', 'video automation']}
        canonicalUrl="https://ziontechgroup.com/ai-video-generation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white neon-text">
                  AI Video Generator Pro</$1>
              <p className="text-xl text-gray-300 mb-8">
                Create professional videos with AI-powered editing, voice synthesis, and intelligent automation</$1>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial</$1>
                  <Play className="w-5 h-5" />
                  Watch Demo</$1>
            </div>
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Powerful AI Video Features</$1>
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose AI Video Generator Pro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing</$1>
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular</$1>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started</$1>
              ))}
            </div>
          {/* CTA Section */}
          <section className="text-center mb-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Video Creation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses creating professional videos with AI</$1>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Your Free Trial</$1>
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
        </main>
        <Footer />
      </div>
      </section>
    </React.Fragment>
  );
};
export default AIVideoGenerationPage</$1>
  </p>
  </a>
  </h2>
  </h2>
  </a>
  </a>
  </p>
  </h1>
  </div>
  </SEOOptimizer>