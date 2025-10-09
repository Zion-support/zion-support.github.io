'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Globe, Zap, Target, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Shield, Brain, Building } from 'lucide-react';

const SmartCitiesPage: React.FC = () => {
  const solutions = [
    {
      icon: Globe,
      title: 'Smart Infrastructure',
      description: 'Intelligent infrastructure management with IoT sensors and real-time monitoring.',
      benefits: ['Traffic optimization', 'Energy efficiency', 'Waste management']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and AI to optimize city operations and citizen services.',
      benefits: ['Predictive analytics', 'Resource optimization', 'Citizen insights']
    },
    {
      icon: Users,
      title: 'Citizen Services',
      description: 'Digital platforms for citizen engagement and service delivery.',
      benefits: ['Mobile apps', 'Online services', 'Real-time updates']
    },
    {
      icon: Shield,
      title: 'Smart Security',
      description: 'Integrated security systems with AI-powered surveillance and emergency response.',
      benefits: ['Video analytics', 'Emergency response', 'Crime prevention']
    },
    {
      icon: BarChart,
      title: 'Data Management',
      description: 'Centralized data platform for city-wide information and decision making.',
      benefits: ['Data integration', 'Real-time dashboards', 'Performance metrics']
    },
    {
      icon: Building,
      title: 'Urban Planning',
      description: '3D modeling and simulation tools for sustainable urban development.',
      benefits: ['3D visualization', 'Simulation tools', 'Planning optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Pilot Project',
      price: '$50,000',
      period: '/project',
      description: 'Small-scale smart city pilot',
      features: [
        'Single area implementation',
        'Basic IoT sensors',
        'Data collection',
        'Basic analytics',
        '3 months support',
        'Performance report'
      ],
      popular: false
    },
    {
      name: 'City District',
      price: '$250,000',
      period: '/project',
      description: 'District-wide smart city solution',
      features: [
        'Multi-area implementation',
        'Advanced IoT network',
        'AI analytics',
        'Citizen app',
        '6 months support',
        'Training included',
        'Maintenance included'
      ],
      popular: true
    },
    {
      name: 'Full City',
      price: 'Custom',
      period: '/project',
      description: 'Complete smart city transformation',
      features: [
        'City-wide implementation',
        'Comprehensive IoT network',
        'Advanced AI platform',
        'Full citizen services',
        '12 months support',
        'Dedicated team',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '30%', label: 'Energy Savings' },
    { number: '50%', label: 'Traffic Reduction' },
    { number: '95%', label: 'Citizen Satisfaction' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const benefits = [
    {
      title: 'Environmental Sustainability',
      description: 'Reduce carbon footprint and promote sustainable urban development.',
      icon: Globe
    },
    {
      title: 'Economic Growth',
      description: 'Attract businesses and investment through smart infrastructure.',
      icon: BarChart
    },
    {
      title: 'Quality of Life',
      description: 'Improve citizen services and urban living conditions.',
      icon: Users
    },
    {
      title: 'Operational Efficiency',
      description: 'Optimize city operations and reduce operational costs.',
      icon: Settings
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Smart Cities Solutions - Zion Tech Group"
        description="Transform your city with smart technology solutions. 30% energy savings, 50% traffic reduction, and 95% citizen satisfaction through intelligent urban infrastructure."
        keywords={['smart cities', 'urban technology', 'IoT solutions', 'city management', 'sustainable cities']}
        canonicalUrl="https://ziontechgroup.com/smart-cities"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Smart Cities Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform your city with intelligent technology
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our comprehensive smart cities solutions help urban areas become more sustainable, 
                efficient, and citizen-friendly through advanced IoT, AI, and data analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Smart City Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <solution.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Smart City Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Smart City Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Build a Smart City?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your urban environment with intelligent technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
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

export default SmartCitiesPage;