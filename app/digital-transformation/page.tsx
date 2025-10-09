'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Zap, Brain, Target, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Shield, Globe, TrendingUp } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const phases = [
    {
      icon: Brain,
      title: 'Assessment & Strategy',
      description: 'Comprehensive evaluation of current state and development of transformation roadmap.',
      benefits: ['Current state analysis', 'Gap identification', 'Strategic roadmap']
    },
    {
      icon: Target,
      title: 'Planning & Design',
      description: 'Detailed planning and design of new digital processes and systems.',
      benefits: ['Process redesign', 'Technology selection', 'Change management plan']
    },
    {
      icon: Zap,
      title: 'Implementation',
      description: 'Execution of transformation initiatives with minimal disruption to operations.',
      benefits: ['Phased rollout', 'Training programs', 'Support & monitoring']
    },
    {
      icon: BarChart,
      title: 'Optimization',
      description: 'Continuous monitoring and optimization of digital processes and systems.',
      benefits: ['Performance monitoring', 'Continuous improvement', 'ROI tracking']
    }
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Implement AI solutions to automate processes and gain intelligent insights.',
      benefits: ['Process automation', 'Predictive analytics', 'Intelligent decision making']
    },
    {
      icon: Globe,
      title: 'Cloud Migration',
      description: 'Migrate to cloud platforms for scalability, flexibility, and cost optimization.',
      benefits: ['Scalable infrastructure', 'Cost reduction', 'Enhanced security']
    },
    {
      icon: Users,
      title: 'Digital Workforce',
      description: 'Transform your workforce with digital tools and remote collaboration platforms.',
      benefits: ['Remote collaboration', 'Digital skills training', 'Productivity tools']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Implement advanced analytics to make data-driven business decisions.',
      benefits: ['Real-time insights', 'Predictive modeling', 'Business intelligence']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Strengthen security posture with modern cybersecurity solutions.',
      benefits: ['Threat protection', 'Compliance', 'Risk management']
    },
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Automate manual processes to improve efficiency and reduce errors.',
      benefits: ['Workflow automation', 'Error reduction', 'Cost savings']
    }
  ];

  const pricingPlans = [
    {
      name: 'Discovery',
      price: '$15,000',
      period: '/project',
      description: 'Initial assessment and strategy',
      features: [
        'Current state assessment',
        'Gap analysis',
        'Strategic roadmap',
        'Technology recommendations',
        'Implementation timeline',
        'ROI projections'
      ],
      popular: false
    },
    {
      name: 'Transformation',
      price: '$75,000',
      period: '/project',
      description: 'Complete digital transformation',
      features: [
        'Full strategy implementation',
        'Technology deployment',
        'Process redesign',
        'Team training',
        'Change management',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/project',
      description: 'Large-scale transformation',
      features: [
        'Multi-year transformation',
        'Custom solutions',
        'Dedicated team',
        'Ongoing optimization',
        '24/7 support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Average ROI' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '80%', label: 'Process Efficiency' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Digital Transformation Services - Zion Tech Group"
        description="Complete digital transformation solutions for modern businesses. 300% average ROI, 50% cost reduction, and 80% process efficiency improvement."
        keywords={['digital transformation', 'business modernization', 'AI implementation', 'cloud migration', 'process automation']}
        canonicalUrl="https://ziontechgroup.com/digital-transformation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Digital Transformation Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform your business for the digital age
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our comprehensive digital transformation services help businesses modernize operations, 
                implement cutting-edge technologies, and achieve sustainable growth in the digital economy.
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
                  <span>Get Free Assessment</span>
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

          {/* Transformation Phases */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Transformation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{phase.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.benefits.map((benefit, idx) => (
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

          {/* Solutions Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Digital Solutions
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

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Transformation Packages
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your digital transformation journey today
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
                  <span>Get Free Assessment</span>
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

export default DigitalTransformationPage;