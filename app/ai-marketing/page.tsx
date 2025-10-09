import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, BarChart, Users, Mail, Phone, CheckCircle, ArrowRight, Star, TrendingUp, Brain, Zap, Globe, Clock, Award, Shield } from 'lucide-react';

const AIMarketingPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Campaign Management',
      description: 'Automatically create, optimize, and manage marketing campaigns across all channels',
      icon: Target,
      benefits: ['50% increase in campaign efficiency', '30% higher conversion rates', 'Automated A/B testing']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast customer behavior and market trends with advanced AI algorithms',
      icon: BarChart,
      benefits: ['85% accuracy in predictions', 'Real-time market insights', 'ROI optimization']
    },
    {
      title: 'Personalized Content',
      description: 'Create hyper-personalized content for each customer segment automatically',
      icon: Users,
      benefits: ['300% increase in engagement', 'Dynamic content generation', 'Multi-channel consistency']
    },
    {
      title: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with perfect timing and personalization',
      icon: Mail,
      benefits: ['40% higher open rates', '60% more clicks', 'Automated follow-ups']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 contacts',
        'Basic AI automation',
        'Email marketing',
        'Social media management',
        'Analytics dashboard',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 contacts',
        'Advanced AI features',
        'Multi-channel campaigns',
        'Predictive analytics',
        'Custom integrations',
        'Priority support',
        'Phone support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom AI models',
        'Dedicated account manager',
        '24/7 support',
        'SLA guarantee',
        'Custom training'
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      company: 'TechStart Inc.',
      industry: 'SaaS',
      challenge: 'Low email engagement and poor conversion rates',
      solution: 'AI-powered email marketing with personalization',
      results: ['250% increase in email opens', '180% higher click rates', '400% ROI in 6 months'],
      image: '/images/case-studies/techstart.jpg'
    },
    {
      company: 'RetailMax Stores',
      industry: 'E-commerce',
      challenge: 'Ineffective social media campaigns',
      solution: 'AI social media management and content generation',
      results: ['300% increase in social engagement', '150% more followers', '200% boost in sales'],
      image: '/images/case-studies/retailmax.jpg'
    },
    {
      company: 'FinanceFlow Bank',
      industry: 'Banking',
      challenge: 'Poor lead quality and low conversion',
      solution: 'AI lead scoring and automated nurturing',
      results: ['400% improvement in lead quality', '250% higher conversion', '60% cost reduction'],
      image: '/images/case-studies/financeflow.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Marketing Solutions - Zion Tech Group | Automated Marketing Intelligence</title>
        <meta name="description" content="Revolutionize your marketing with AI-powered automation, personalization, and analytics. Increase ROI by 300% with our intelligent marketing solutions." />
        <meta name="keywords" content="AI marketing, marketing automation, personalized marketing, predictive analytics, email marketing AI, social media AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Marketing Solutions
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Transform your marketing with AI-powered automation, personalization, and analytics. 
                Increase ROI by 300% while reducing manual work by 90%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Marketing Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities that transform your marketing</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-6">
                    <feature.icon className="w-12 h-12 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your marketing needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full cyber-button inline-flex items-center justify-center ${
                      plan.popular ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : ''
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-xl text-gray-300">Real results from our AI marketing implementations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-400">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                      <p className="text-sm text-gray-400">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                            <TrendingUp className="w-3 h-3 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Marketing?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have already revolutionized their marketing with AI. 
                Get a free consultation and see how we can boost your ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIMarketingPage;