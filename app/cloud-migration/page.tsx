import React from 'react';
import Head from 'next/head';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Cloud, Database, Server, Lock } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration planning and execution across AWS, Azure, and Google Cloud platforms.',
      benefits: ['Avoid vendor lock-in', 'Optimize costs', 'Improve reliability', 'Enhanced security']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Migration',
      description: 'Seamless migration of databases with zero downtime and data integrity guarantees.',
      benefits: ['Zero data loss', 'Minimal downtime', 'Performance optimization', 'Backup strategies']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using modern IaC tools.',
      benefits: ['Consistent deployments', 'Version control', 'Faster provisioning', 'Reduced errors']
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation with compliance frameworks (SOC2, HIPAA, GDPR).',
      benefits: ['Enhanced security', 'Compliance ready', 'Audit trails', 'Risk mitigation']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Cloud-native optimization for maximum performance and cost efficiency.',
      benefits: ['Faster applications', 'Reduced costs', 'Better scalability', 'Improved reliability']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions for business continuity.',
      benefits: ['Business continuity', 'Data protection', 'Quick recovery', 'Peace of mind']
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure and migration strategy development.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Cloud architecture design and security framework implementation.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Phased migration with minimal downtime and continuous monitoring.',
      duration: '2-4 weeks'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and performance optimization.',
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Go-Live & Support',
      description: 'Production deployment and ongoing support and monitoring.',
      duration: 'Ongoing'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,999',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic cloud migration',
        'Email support',
        'Standard security',
        '30-day support',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 servers',
        'Advanced migration',
        'Priority support',
        'Enhanced security',
        '90-day support',
        'Training included',
        'Custom architecture'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Full migration suite',
        'Dedicated support',
        'Enterprise security',
        '1-year support',
        'Custom development',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Mark Stevens',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Cloud migration was seamless with zero downtime. Our applications run 40% faster and costs are down 30%.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'InnovateTech',
      role: 'IT Director',
      content: 'The team handled our complex multi-cloud migration perfectly. Security and compliance were top-notch.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'ScaleUp Ventures',
      role: 'VP of Engineering',
      content: 'Infrastructure as Code approach made everything so much easier to manage. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services. Seamless migration to AWS, Azure, Google Cloud with zero downtime and enhanced security." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud, infrastructure migration, cloud services" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </Head>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Cloud Migration Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Seamless Cloud Migration with Zero Downtime
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Migrate your infrastructure to the cloud with confidence. Our expert team ensures zero downtime, 
              enhanced security, and optimal performance across AWS, Azure, and Google Cloud platforms. 
              Transform your business with our proven migration methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose Our Cloud Migration Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Downtime</h3>
              <p className="text-gray-300">Seamless migration with minimal business disruption and continuous operations.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enhanced Security</h3>
              <p className="text-gray-300">Enterprise-grade security implementation with compliance frameworks.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Cost Optimization</h3>
              <p className="text-gray-300">Reduce infrastructure costs by up to 40% with optimized cloud architecture.</p>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Migration Process
          </h2>
          <div className="space-y-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-cyan-400 text-black rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <p className="text-cyan-400 font-medium">Duration: {step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Comprehensive Migration Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-green-400">
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
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of businesses that have successfully migrated to the cloud with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🕒 Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CloudMigrationPage;