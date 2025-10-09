'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Brain, Target, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Shield, Zap, Globe } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development aligned with your business goals and objectives.',
      benefits: ['Technology roadmap', 'Budget planning', 'Risk assessment']
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Guide your organization through complete digital transformation initiatives.',
      benefits: ['Process optimization', 'Technology adoption', 'Change management']
    },
    {
      icon: BarChart,
      title: 'IT Assessment & Audit',
      description: 'Thorough evaluation of your current IT infrastructure and recommendations for improvement.',
      benefits: ['Gap analysis', 'Performance review', 'Security audit']
    },
    {
      icon: Users,
      title: 'Team Training & Development',
      description: 'Comprehensive training programs to upskill your IT team and staff.',
      benefits: ['Technical training', 'Best practices', 'Certification support']
    },
    {
      icon: Settings,
      title: 'Technology Implementation',
      description: 'End-to-end implementation of new technologies and systems.',
      benefits: ['Project management', 'System integration', 'Testing & validation']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Expert guidance on cybersecurity strategy, implementation, and compliance.',
      benefits: ['Security assessment', 'Compliance review', 'Incident response']
    }
  ];

  const pricingPlans = [
    {
      name: 'Hourly Consulting',
      price: '$299',
      period: '/hour',
      description: 'Flexible hourly consulting',
      features: [
        'Expert IT consultation',
        'Strategic planning',
        'Technology assessment',
        'Implementation guidance',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Project-Based',
      price: 'Custom',
      period: '/project',
      description: 'Complete project delivery',
      features: [
        'Full project management',
        'End-to-end implementation',
        'Dedicated consultant',
        'Regular progress updates',
        'Training & documentation',
        'Post-implementation support'
      ],
      popular: true
    },
    {
      name: 'Retainer',
      price: '$5,999',
      period: '/month',
      description: 'Ongoing strategic partnership',
      features: [
        'Unlimited consultation',
        'Priority support',
        'Regular strategy reviews',
        'Technology monitoring',
        'Team training',
        'Quarterly assessments'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for healthcare organizations.',
      icon: Shield
    },
    {
      title: 'Finance',
      description: 'Secure, compliant IT infrastructure for financial services.',
      icon: BarChart
    },
    {
      title: 'Manufacturing',
      description: 'IoT and automation solutions for manufacturing operations.',
      icon: Settings
    },
    {
      title: 'Retail',
      description: 'E-commerce and omnichannel technology solutions.',
      icon: Globe
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Consulting Services - Zion Tech Group"
        description="Expert IT consulting services for strategic planning, digital transformation, and technology implementation. 500+ projects completed with 95% client satisfaction."
        keywords={['IT consulting', 'digital transformation', 'technology strategy', 'IT assessment', 'cybersecurity consulting']}
        canonicalUrl="https://ziontechgroup.com/it-consulting"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                IT Consulting Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Strategic IT guidance for digital transformation
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our expert IT consultants help organizations develop strategic technology roadmaps, 
                implement digital transformation initiatives, and optimize their IT infrastructure for maximum efficiency.
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

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Consulting Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
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
              Industry Expertise
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
              Flexible Pricing Options
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
                Ready to Transform Your IT Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get expert IT consulting to drive your digital transformation
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
                  <span>Schedule Consultation</span>
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

export default ITConsultingPage;