'use client';
import React from 'react';
import { Settings, GitBranch, Zap, Cloud, CheckCircle, ArrowRight, Star, Clock, Target, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DevOpsPage: React.FC = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines for faster delivery',
      benefits: ['Automated builds', 'Continuous testing', 'Fast deployments']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure with automated provisioning and management',
      benefits: ['Auto-scaling', 'Infrastructure as code', 'Cost optimization']
    },
    {
      icon: Settings,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management with automated scaling',
      benefits: ['Container management', 'Auto-scaling', 'Service discovery']
    },
    {
      icon: BarChart,
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring, logging, and performance analytics',
      benefits: ['Real-time monitoring', 'Performance analytics', 'Alert management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,199',
      period: '/month',
      description: 'Perfect for small teams with basic DevOps needs',
      features: [
        'Basic CI/CD pipelines',
        'Cloud infrastructure setup',
        'Container orchestration',
        'Basic monitoring',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing teams with complex deployment needs',
      features: [
        'Advanced CI/CD pipelines',
        'Multi-cloud infrastructure',
        'Advanced container orchestration',
        'Comprehensive monitoring',
        'Priority support',
        'Custom configurations',
        'Security scanning',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations with enterprise DevOps requirements',
      features: [
        'Enterprise CI/CD pipelines',
        'Hybrid cloud infrastructure',
        'Enterprise container orchestration',
        'Advanced monitoring & analytics',
        'Dedicated support',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Deployment Speed',
      description: 'Deploy code 10x faster with automated CI/CD pipelines',
      value: '10x'
    },
    {
      icon: Zap,
      title: 'Uptime Improvement',
      description: 'Achieve 99.9% uptime with automated monitoring and recovery',
      value: '99.9%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save 20+ hours per week with automated DevOps processes',
      value: '20h/week'
    },
    {
      icon: BarChart,
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by 40% with optimization',
      value: '40%'
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 pt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              DevOps & CI/CD
            </h1>
            <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium neon-pulse">
              Streamlined Development & Deployment
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Accelerate your development lifecycle with our comprehensive DevOps solutions. 
              Automated CI/CD pipelines, cloud infrastructure, container orchestration, and 
              monitoring to deliver software faster and more reliably.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Deployments</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20h</div>
                <div className="text-gray-300">Time Saved/Week</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Transform Your Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DevOps solutions that deliver measurable results and significant improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Advanced DevOps Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge DevOps technology that automates and optimizes your development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Choose Your DevOps Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your development and deployment needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-green-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-green-400 text-black hover:bg-green-500'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of automated DevOps. 
              No setup fees, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DevOpsPage;