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
      title: 'Renewable Energy Optimization',
      description: 'AI-driven optimization of renewable energy systems for maximum efficiency and cost reduction',
      icon: Activity,
      benefits: [
        'Solar panel efficiency optimization',
        'Wind farm performance analysis',
        'Energy storage optimization',
        'Grid integration solutions'
      ],
      image: '/images/ai-climate-solutions/renewable-energy.webp'
    },
    {
      title: 'Environmental Monitoring',
      description: 'Real-time environmental monitoring using IoT sensors and AI analysis for air, water, and soil quality',
      icon: Globe,
      benefits: [
        'Air quality monitoring',
        'Water contamination detection',
        'Soil health analysis',
        'Biodiversity tracking'
      ],
      image: '/images/ai-climate-solutions/environmental-monitoring.webp'
    }
  ];

  const solutions = [
    {
      category: 'Energy',
      title: 'Smart Grid Management',
      description: 'AI-powered smart grid systems for efficient energy distribution and renewable integration',
      icon: Target,
      features: ['Demand forecasting', 'Load balancing', 'Renewable integration', 'Outage prevention']
    },
    {
      category: 'Transportation',
      title: 'Eco-Friendly Logistics',
      description: 'Optimize transportation routes and methods to reduce carbon emissions',
      icon: Building,
      features: ['Route optimization', 'Fleet management', 'Emission tracking', 'Alternative fuels']
    },
    {
      category: 'Agriculture',
      title: 'Precision Farming',
      description: 'AI-driven agricultural practices for sustainable farming and resource optimization',
      icon: Leaf,
      features: ['Crop monitoring', 'Water optimization', 'Pest detection', 'Yield prediction']
    },
    {
      category: 'Manufacturing',
      title: 'Green Manufacturing',
      description: 'Sustainable manufacturing processes with AI optimization for reduced environmental impact',
      icon: Activity,
      features: ['Process optimization', 'Waste reduction', 'Energy efficiency', 'Circular economy']
    }
  ];

  const pricing = [
    {
      name: 'Climate Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small organizations starting their climate journey',
      features: [
        'Basic carbon tracking',
        'Weather alerts',
        'Email support',
        'Standard reports',
        'Up to 5 users'
      ],
      popular: false
    },
    {
      name: 'Climate Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies with climate goals',
      features: [
        'Advanced analytics',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Up to 25 users',
        'Integration support'
      ],
      popular: true
    },
    {
      name: 'Climate Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex climate needs',
      features: [
        'Full customization',
        'Dedicated support',
        'Unlimited users',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce carbon emissions by up to 40%',
    'Save 30% on energy costs',
    'Improve regulatory compliance',
    'Enhance brand reputation',
    'Future-proof your business',
    'Contribute to global sustainability'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Climate Solutions Pro
              <span className="block text-green-600">for Sustainable Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered climate solutions to help organizations reduce their environmental impact, 
              optimize energy usage, and build a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Climate Solutions Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI tools for climate action and sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored climate solutions for different industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-2">{solution.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Climate Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results that drive sustainability and business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing for climate solutions of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fight Climate Change?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Start your sustainability journey today with AI-powered climate solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}