'use client';
import React, { useState } from 'react';
import { CheckCircle, Star, Target, Cloud, DollarSign, Calendar, MessageSquare, Globe, Leaf, Activity, Play, Save, Building } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function AIClimateSolutionsProPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: 'Carbon Footprint Analysis',
      description: 'Comprehensive AI-powered carbon footprint tracking and reduction strategies for organizations',
      icon: Leaf,
      benefits: [
        'Real-time carbon tracking',
        'Automated reduction recommendations',
        'Industry-specific benchmarks',
        'Regulatory compliance monitoring'
      ],
      image: '/images/ai-climate-solutions/carbon-footprint.webp'
    },
    {
      title: 'Weather Prediction & Modeling',
      description: 'Advanced weather forecasting with AI-powered climate modeling and extreme weather prediction',
      icon: Cloud,
      benefits: [
        '95% accuracy in weather predictions',
        'Extreme weather early warning',
        'Climate trend analysis',
        'Long-term forecasting'
      ],
      image: '/images/ai-climate-solutions/weather-prediction.webp'
    },
    {
      title: 'Sustainability Planning',
      description: 'AI-driven sustainability roadmaps and environmental impact optimization strategies',
      icon: Target,
      benefits: [
        'Custom sustainability roadmaps',
        'ROI analysis for green initiatives',
        'Resource optimization',
        'Progress tracking & reporting'
      ],
      image: '/images/ai-climate-solutions/sustainability-planning.webp'
    },
    {
      title: 'Emission Tracking & Monitoring',
      description: 'Real-time emission monitoring and automated compliance reporting for environmental regulations',
      icon: Activity,
      benefits: [
        'Real-time emission monitoring',
        'Automated compliance reporting',
        'Predictive emission modeling',
        'Multi-source data integration'
      ],
      image: '/images/ai-climate-solutions/emission-tracking.webp'
    },
    {
      title: 'Renewable Energy Optimization',
      description: 'AI-powered optimization of renewable energy systems for maximum efficiency and cost savings',
      icon: Globe,
      benefits: [
        'Solar/wind energy optimization',
        'Grid integration strategies',
        'Energy storage management',
        'Cost-benefit analysis'
      ],
      image: '/images/ai-climate-solutions/renewable-energy.webp'
    },
    {
      title: 'Climate Risk Assessment',
      description: 'Comprehensive climate risk analysis and adaptation strategies for businesses and communities',
      icon: Building,
      benefits: [
        'Climate vulnerability assessment',
        'Adaptation strategy development',
        'Risk mitigation planning',
        'Insurance optimization'
      ],
      image: '/images/ai-climate-solutions/climate-risk.webp'
    }
  ];

  const benefits = [
    'Reduce carbon emissions by up to 40%',
    'Save 30% on energy costs',
    'Improve regulatory compliance',
    'Enhance sustainability reporting',
    'Optimize resource utilization',
    'Future-proof your business'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Essential climate solutions for small to medium businesses',
      features: [
        'Basic carbon tracking',
        'Weather monitoring',
        'Simple reporting',
        'Email support',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Advanced climate solutions for growing organizations',
      features: [
        'Advanced carbon analytics',
        'Predictive modeling',
        'Custom reporting',
        'Priority support',
        'Up to 10 users',
        'API access',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'Comprehensive climate solutions for large organizations',
      features: [
        'Full AI suite',
        'Custom modeling',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'Custom development',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Green',
      company: 'EcoTech Industries',
      role: 'Sustainability Director',
      quote: 'AI climate solutions helped us reduce our carbon footprint by 45% while saving $2M annually in energy costs.',
      rating: 5,
      image: '👩‍🔬'
    },
    {
      name: 'Michael Chen',
      company: 'Green Energy Corp',
      role: 'CEO',
      quote: 'The predictive modeling capabilities are incredible. We prevented $5M in climate-related damages last year.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Sustainable Cities',
      role: 'City Manager',
      quote: 'Climate risk assessment tools helped us develop effective adaptation strategies for our community.',
      rating: 5,
      image: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">🌱</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Climate Solutions Pro
          </h1>
          <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">
            Advanced AI for Climate Action
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive AI-powered climate solutions that help organizations reduce emissions, 
            optimize sustainability, and build climate resilience.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Emission Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Climate Action
            </button>
            <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Climate Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered tools for climate action and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Climate Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your organization's climate impact with intelligent solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Climate Solution Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right climate solution for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-green-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white'
                    : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations achieved remarkable climate results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-green-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Climate Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your climate transformation journey with AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}