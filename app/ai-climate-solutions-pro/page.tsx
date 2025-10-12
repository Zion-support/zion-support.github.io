'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Leaf, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Shield,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  MessageSquare,
  FileText,
  Camera,
  CreditCard,
  Wallet,
  Target,
  Lock,
  Users,
  TrendingUp
} from 'lucide-react';

export default function AIClimateSolutionsProPage() {
  const features = [
    {
      title: 'Climate Prediction Models',
      description: 'Advanced AI models for accurate weather forecasting, climate change prediction, and environmental monitoring.',
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      benefits: ['Weather forecasting', 'Climate modeling', 'Environmental monitoring', 'Risk assessment']
    },
    {
      title: 'Carbon Footprint Tracking',
      description: 'Comprehensive carbon tracking and reduction strategies powered by AI analytics and machine learning.',
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      benefits: ['Carbon tracking', 'Emission reduction', 'Sustainability metrics', 'Green reporting']
    },
    {
      title: 'Renewable Energy Optimization',
      description: 'AI-powered optimization for renewable energy systems, grid management, and energy efficiency.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      benefits: ['Energy optimization', 'Grid management', 'Renewable integration', 'Efficiency analysis']
    },
    {
      title: 'Environmental Analytics',
      description: 'Comprehensive environmental data analysis with predictive insights and sustainability recommendations.',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      benefits: ['Data analysis', 'Predictive insights', 'Sustainability reports', 'Compliance monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Environmental',
      price: '$199',
      period: '/month',
      description: 'Perfect for environmental organizations and NGOs',
      features: [
        'Basic climate modeling',
        'Carbon tracking',
        'Environmental reports',
        'Email support',
        '1 organization',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Corporate',
      price: '$499',
      period: '/month',
      description: 'Ideal for businesses and corporations',
      features: [
        'Advanced climate models',
        'Comprehensive carbon tracking',
        'Energy optimization',
        'Priority support',
        '5 organizations',
        'Advanced analytics',
        'API access',
        'Custom reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large enterprises and government agencies',
      features: [
        'Premium climate models',
        'Unlimited carbon tracking',
        'Full energy optimization',
        'Dedicated support',
        'Unlimited organizations',
        'Custom analytics',
        'White-label options',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Green',
      company: 'Environmental Research Institute',
      content: 'AI Climate Solutions Pro has revolutionized our climate research. The prediction models are incredibly accurate and help us make data-driven decisions.',
      rating: 5,
      avatar: 'SG'
    },
    {
      name: 'Michael Chen',
      company: 'Sustainable Energy Corp',
      content: 'The renewable energy optimization features have helped us reduce our carbon footprint by 40% while increasing efficiency by 25%.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Climate Action NGO',
      content: 'The carbon tracking and environmental analytics provide us with the insights we need to drive meaningful climate action.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Climate Prediction & Environmental Analytics | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate solutions with prediction models, carbon tracking, and environmental analytics. Start your free trial today!" />
        <meta name="keywords" content="AI climate solutions, climate prediction, carbon tracking, environmental analytics, sustainability, renewable energy" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Climate Solutions Pro - Climate Prediction & Environmental Analytics" />
        <meta property="og:description" content="Advanced AI-powered climate solutions with prediction models and environmental analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-climate-solutions-pro" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-climate-solutions.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Climate Solutions Pro",
            "description": "AI-powered climate solutions with prediction models and environmental analytics",
            "url": "https://ziontechgroup.com/ai-climate-solutions-pro",
            "applicationCategory": "EnvironmentalApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "199",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl mb-8">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Climate Solutions Pro
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Advanced AI-powered climate solutions with prediction models, 
                carbon tracking, and environmental analytics for sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
                  <div className="text-gray-300">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-300">Carbon Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
                  <div className="text-gray-300">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.8/5</div>
                  <div className="text-gray-300">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Climate Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered tools for climate action and environmental sustainability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Sustainable Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your climate action goals. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-emerald-500/50 ring-2 ring-emerald-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700' 
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join organizations leading the fight against climate change
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Take Climate Action?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join 1,000+ organizations using AI Climate Solutions Pro to drive meaningful climate action. 
                  Start your free trial today - no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="#demo" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Watch Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ 30-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}