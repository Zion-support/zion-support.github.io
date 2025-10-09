'use client';
import React from 'react';
import { Cloud, Shield, Zap, Users, CheckCircle, ArrowRight, Star, Clock, BarChart, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement comprehensive multi-cloud strategies for optimal performance and cost efficiency.',
      benefits: ['AWS, Azure, GCP expertise', 'Cost optimization', 'Performance tuning']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security-First Approach',
      description: 'Ensure your cloud migration maintains the highest security standards with zero-downtime transitions.',
      benefits: ['Zero-downtime migration', 'Security compliance', 'Data protection']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Migration',
      description: 'Leverage advanced automation tools and AI to streamline the migration process and reduce risks.',
      benefits: ['Automated testing', 'Risk mitigation', 'Faster deployment']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Support',
      description: 'Dedicated cloud architects and engineers to guide you through every step of the migration process.',
      benefits: ['24/7 support', 'Dedicated team', 'Knowledge transfer']
    }
  ];

  const migrationTypes = [
    {
      title: 'Lift and Shift',
      description: 'Move applications to the cloud with minimal changes for quick migration and immediate benefits.',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      timeline: '2-4 weeks',
      cost: 'Starting at $5,000'
    },
    {
      title: 'Replatforming',
      description: 'Optimize applications for cloud-native features while maintaining core functionality.',
      icon: <Zap className="w-8 h-8 text-green-500" />,
      timeline: '4-8 weeks',
      cost: 'Starting at $15,000'
    },
    {
      title: 'Refactoring',
      description: 'Completely rearchitect applications to be fully cloud-native with maximum scalability.',
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      timeline: '8-16 weeks',
      cost: 'Starting at $25,000'
    },
    {
      title: 'Hybrid Cloud',
      description: 'Create seamless integration between on-premises and cloud environments.',
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      timeline: '6-12 weeks',
      cost: 'Starting at $20,000'
    }
  ];

  const pricing = [
    {
      name: 'Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Infrastructure analysis',
        'Security assessment',
        'Cost optimization review',
        'Migration roadmap',
        'Risk analysis',
        'Recommendations report'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$15,000',
      period: 'project',
      description: 'Complete migration for small to medium businesses',
      features: [
        'Up to 20 servers',
        'Basic security setup',
        'Data migration',
        'Testing & validation',
        '30 days support',
        'Documentation',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: '$50,000',
      period: 'project',
      description: 'Comprehensive migration for large organizations',
      features: [
        'Unlimited servers',
        'Advanced security',
        'Custom architecture',
        '24/7 support',
        '90 days support',
        'Dedicated team',
        'SLA guarantees',
        'Custom integrations',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce IT infrastructure costs by 30-50% through cloud optimization and resource scaling.',
      icon: <BarChart className="w-6 h-6 text-green-400" />,
      value: '40%'
    },
    {
      title: 'Improved Performance',
      description: 'Enhance application performance and user experience with cloud-native optimizations.',
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      value: '60%'
    },
    {
      title: 'Enhanced Security',
      description: 'Strengthen security posture with cloud-native security tools and best practices.',
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      value: '85%'
    },
    {
      title: 'Faster Deployment',
      description: 'Accelerate application deployment and updates with cloud-native CI/CD pipelines.',
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      value: '70%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cloud Migration Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Seamless Cloud Migration with Zero Downtime
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Transform your business with our expert cloud migration services. We help you move to the cloud 
              safely, efficiently, and cost-effectively with minimal disruption to your operations. 
              Our certified cloud architects ensure a smooth transition to AWS, Azure, or Google Cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Cloud className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Proven Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Our Migration Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Migration Types Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Migration Approaches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {migrationTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {type.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="flex justify-between items-center">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
                    Timeline: {type.timeline}
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm font-medium">
                    {type.cost}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have successfully migrated to the cloud with our expert guidance. 
              Get a free assessment and discover how cloud migration can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Cloud className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CloudMigrationServicesPage;