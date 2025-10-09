'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Eye, Zap, Target, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Shield, Globe, Brain } from 'lucide-react';

const ARVRSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Eye,
      title: 'AR Applications',
      description: 'Augmented reality applications for training, maintenance, and customer engagement.',
      benefits: ['Interactive training', 'Remote assistance', 'Enhanced visualization']
    },
    {
      icon: Brain,
      title: 'VR Experiences',
      description: 'Immersive virtual reality experiences for education, entertainment, and business.',
      benefits: ['Immersive training', 'Virtual meetings', 'Product visualization']
    },
    {
      icon: Target,
      title: 'Mixed Reality',
      description: 'Combined AR/VR solutions that blend physical and digital worlds seamlessly.',
      benefits: ['Seamless integration', 'Advanced interactions', 'Real-world applications']
    },
    {
      icon: Users,
      title: 'Collaborative VR',
      description: 'Multi-user virtual environments for remote collaboration and team building.',
      benefits: ['Remote collaboration', 'Team building', 'Shared experiences']
    },
    {
      icon: Settings,
      title: 'Custom Development',
      description: 'Bespoke AR/VR solutions tailored to your specific business needs.',
      benefits: ['Custom features', 'Brand integration', 'Scalable solutions']
    },
    {
      icon: Shield,
      title: 'Enterprise Solutions',
      description: 'Enterprise-grade AR/VR solutions with security and compliance features.',
      benefits: ['Enterprise security', 'Compliance ready', 'Scalable infrastructure']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/project',
      description: 'Basic AR/VR application',
      features: [
        'Simple AR/VR app',
        'Basic interactions',
        'Standard templates',
        'Mobile compatibility',
        'Email support',
        '30 days warranty'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/project',
      description: 'Advanced AR/VR solution',
      features: [
        'Custom AR/VR application',
        'Advanced interactions',
        'Custom 3D models',
        'Multi-platform support',
        'Priority support',
        '90 days warranty',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/project',
      description: 'Complete AR/VR ecosystem',
      features: [
        'Full AR/VR ecosystem',
        'Custom development',
        'Enterprise integration',
        '24/7 support',
        'Unlimited warranty',
        'Dedicated team',
        'Ongoing maintenance'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Engagement Increase' },
    { number: '50%', label: 'Training Time Reduction' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'Medical training, patient education, and surgical planning with AR/VR.',
      icon: Shield
    },
    {
      title: 'Education',
      description: 'Immersive learning experiences and virtual classrooms.',
      icon: Brain
    },
    {
      title: 'Manufacturing',
      description: 'Assembly training, quality control, and maintenance procedures.',
      icon: Settings
    },
    {
      title: 'Real Estate',
      description: 'Virtual property tours and architectural visualization.',
      icon: Globe
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AR/VR Solutions - Zion Tech Group"
        description="Immersive AR/VR solutions for training, education, and business. 300% engagement increase, 50% training time reduction, and 95% user satisfaction."
        keywords={['AR VR solutions', 'augmented reality', 'virtual reality', 'immersive technology', 'mixed reality']}
        canonicalUrl="https://ziontechgroup.com/ar-vr-solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AR/VR Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Immersive technology for the future
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our cutting-edge AR/VR solutions transform how businesses train, collaborate, 
                and engage with customers through immersive experiences.
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
                  <span>Get Free Demo</span>
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
              Our AR/VR Solutions
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

          {/* Industries Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <industry.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              AR/VR Development Packages
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
                Ready to Enter the Metaverse?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with immersive AR/VR technology
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
                  <span>Get Free Demo</span>
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

export default ARVRSolutionsPage;