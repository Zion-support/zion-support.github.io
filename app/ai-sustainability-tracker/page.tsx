'use client';
import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  TrendingUp, 
  Target, 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Globe, 
  Zap,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Shield,
  Lock,
  Sparkles,
  Activity,
  TreePine,
  Recycle,
  Sun,
  Wind,
  Droplets,
  Battery,
  Car,
  Home,
  ShoppingCart
} from 'lucide-react';

const AISustainabilityTrackerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: BarChart,
      title: 'Carbon Footprint Analysis',
      description: 'Real-time tracking of your carbon emissions across all activities and purchases',
      details: [
        'Automated data collection from utilities, transportation, and purchases',
        'Industry-standard carbon calculation algorithms',
        'Personalized reduction recommendations',
        'Monthly and yearly trend analysis'
      ]
    },
    {
      icon: Target,
      title: 'Sustainability Goals',
      description: 'Set and track personalized sustainability goals with AI-powered recommendations',
      details: [
        'Smart goal setting based on your lifestyle',
        'Progress tracking with visual indicators',
        'Achievement badges and rewards system',
        'Community challenges and competitions'
      ]
    },
    {
      icon: Recycle,
      title: 'Waste Reduction Tracking',
      description: 'Monitor and optimize your waste generation with smart recycling suggestions',
      details: [
        'Waste categorization and tracking',
        'Recycling center locator',
        'Composting guidance and tips',
        'Zero-waste lifestyle recommendations'
      ]
    },
    {
      icon: Zap,
      title: 'Energy Optimization',
      description: 'AI-powered energy consumption analysis and optimization recommendations',
      details: [
        'Smart home energy monitoring',
        'Peak usage time optimization',
        'Renewable energy integration advice',
        'Cost savings calculations'
      ]
    },
    {
      icon: Car,
      title: 'Transportation Impact',
      description: 'Track and optimize your transportation choices for minimal environmental impact',
      details: [
        'Multi-modal transportation tracking',
        'Public transit optimization',
        'Carpooling and ride-sharing suggestions',
        'Electric vehicle transition planning'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Sustainable Shopping',
      description: 'Make eco-friendly purchasing decisions with AI-powered product analysis',
      details: [
        'Product sustainability scoring',
        'Ethical brand recommendations',
        'Packaging impact analysis',
        'Local sourcing suggestions'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals starting their sustainability journey',
      features: [
        'Basic carbon footprint tracking',
        'Up to 5 sustainability goals',
        'Monthly progress reports',
        'Basic waste reduction tips',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Family',
      price: '$39',
      period: '/month',
      description: 'Ideal for families committed to sustainable living',
      features: [
        'Advanced carbon footprint analysis',
        'Unlimited sustainability goals',
        'Family member profiles (up to 6)',
        'Weekly progress reports',
        'Smart home integration',
        'Priority support',
        'Community access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'Comprehensive solution for organizations and communities',
      features: [
        'Enterprise carbon accounting',
        'Team sustainability challenges',
        'Custom reporting and analytics',
        'API integration',
        'White-label options',
        'Dedicated account manager',
        'Custom sustainability programs'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Environmental Scientist',
      company: 'Green Future Inc.',
      content: 'This AI sustainability tracker has completely transformed how I approach environmental responsibility. The insights are incredibly detailed and actionable.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Family Man',
      company: 'Local Community',
      content: 'As a father of three, teaching my kids about sustainability was challenging. This app makes it fun and engaging for the whole family.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Sustainability Consultant',
      company: 'EcoConsult Pro',
      content: 'The AI recommendations are spot-on. I\'ve reduced my carbon footprint by 40% in just 6 months using this platform.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Users', icon: Users },
    { number: '2.5M lbs', label: 'CO2 Reduced', icon: Leaf },
    { number: '95%', label: 'Goal Achievement Rate', icon: Target },
    { number: '4.9/5', label: 'User Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              AI-Powered Sustainability
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Sustainability Tracker
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your environmental impact with AI-powered insights. Track, optimize, and achieve your sustainability goals with intelligent recommendations and real-time monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Sustainability Management
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to track, analyze, and improve your environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-green-100 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-green-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Sustainability Plan
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Start your sustainability journey with our flexible pricing plans designed for individuals, families, and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-green-100 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-green-200 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-green-200">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join thousands of users who have transformed their environmental impact with our AI sustainability tracker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-green-100 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-green-200 text-sm">{testimonial.role}</p>
                    <p className="text-green-300 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Start your sustainability journey today and join the movement towards a greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <a href="tel:+13024640950" className="text-green-300 hover:text-green-200">
                +1 (302) 464-0950
              </a>
            </div>
            <div>
              <Mail className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-300 hover:text-green-200">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <span className="text-green-300">Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISustainabilityTrackerPage;
