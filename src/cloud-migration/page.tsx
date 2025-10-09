'use client';
import React from 'react';
import {Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, Server} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Seamless Cloud Migration',
      description: 'Migrate your applications and data to the cloud with zero downtime and minimal disruption.',
      benefits: ['Zero-downtime migration', 'Data integrity assurance', 'Automated migration tools', 'Rollback capabilities']
    },
    {
      icon: Shield,
      title: 'Security-First Approach',
      description: 'Ensure your cloud infrastructure meets the highest security standards and compliance requirements.',
      benefits: ['End-to-end encryption', 'Compliance management', 'Security monitoring', 'Access controls']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      benefits: ['Auto-scaling', 'Load balancing', 'Performance monitoring', 'Cost optimization']
    },
    {
      icon: Target,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement multi-cloud architectures for maximum flexibility and redundancy.',
      benefits: ['Vendor independence', 'Disaster recovery', 'Cost optimization', 'Flexibility']
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements.',
      icon: Target,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design optimal cloud architecture tailored to your business needs.',
      icon: Server,
      duration: '1-2 weeks'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Execute the migration with minimal downtime and maximum data integrity.',
      icon: Cloud,
      duration: '2-4 weeks'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Optimize performance and provide ongoing support and monitoring.',
      icon: TrendingUp,
      duration: 'Ongoing'
    }
  ];

    const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40% with cloud optimization.',
      icon: TrendingUp,
      percentage: '40%'
    },
    {
      title: 'Improved Performance',
      description: 'Achieve 99.9% uptime with cloud infrastructure.',
      icon: Zap,
      percentage: '99.9%'
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with automated updates and monitoring.',
      icon: Shield,
      percentage: '100%'
    },
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically.',
      icon: Target,
      percentage: 'Unlimited'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with our expert team. Reduce costs, improve performance, and enhance security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Free Assessment
              </button>
              <button className="cyber-button-outline px-8 py-4 text-lg">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Successful Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Migration Services</h2>
            <p className="text-xl text-gray-300">Everything you need for a successful cloud migration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
            <p className="text-xl text-gray-300">A proven methodology for successful cloud migrations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>
                <div className="text-cyan-400 font-semibold">Duration: {step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Cloud Migration?</h2>
            <p className="text-xl text-gray-300">Proven benefits that drive business value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-3xl font-bold text-cyan-400">{benefit.percentage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2>
            <p className="text-xl text-gray-300">Choose the migration package that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400"> {plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses that have successfully migrated to the cloud with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Get Free Assessment
            </button>
            <button className="cyber-button-outline px-8 py-4 text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudMigrationPage;
