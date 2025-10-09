'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Heart, Brain, Shield, Zap, Target, Users, ArrowRight, Phone, Mail } from 'lucide-react';

const AIHealthcarePage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Medical Image Analysis',
      description: 'Advanced AI-powered medical imaging analysis for faster and more accurate diagnoses.',
      features: ['X-ray analysis', 'MRI interpretation', 'CT scan processing', 'Ultrasound analysis']
    },
    {
      icon: Heart,
      title: 'Drug Discovery AI',
      description: 'AI-driven drug discovery and development to accelerate pharmaceutical research.',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Side effect prediction']
    },
    {
      icon: Users,
      title: 'Personalized Medicine',
      description: 'AI-powered personalized treatment plans based on patient data and genetics.',
      features: ['Genetic analysis', 'Treatment optimization', 'Risk assessment', 'Precision dosing']
    },
    {
      icon: Shield,
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical decision support systems for healthcare professionals.',
      features: ['Diagnosis assistance', 'Treatment recommendations', 'Risk stratification', 'Outcome prediction']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Essential AI healthcare solutions for small practices',
      features: [
        'Basic medical imaging AI',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Comprehensive AI solutions for growing healthcare organizations',
      features: [
        'Advanced AI capabilities',
        'Priority support',
        'Advanced integrations',
        'Comprehensive analytics',
        'Custom models',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored AI solutions for large healthcare systems',
      features: [
        'Custom AI models',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security features',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Diagnostic Accuracy' },
    { number: '60%', label: 'Faster Diagnosis' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24/7', label: 'AI Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Healthcare Solutions - Zion Tech Group"
        description="Revolutionary AI-powered healthcare solutions including medical imaging, drug discovery, personalized medicine, and clinical decision support systems."
        keywords={['AI healthcare', 'medical AI', 'healthcare automation', 'medical imaging AI', 'drug discovery AI', 'telemedicine']}
        canonicalUrl="https://ziontechgroup.com/ai-healthcare"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Revolutionize healthcare with AI-powered solutions
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform healthcare delivery with AI-powered medical imaging, drug discovery, 
            personalized medicine, and clinical decision support systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our AI Healthcare Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered healthcare solutions designed to improve patient outcomes and streamline medical processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-slate-800/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-white font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI healthcare solution for your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/60 ring-2 ring-cyan-400/20 scale-105' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading healthcare organizations already using our AI solutions to improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIHealthcarePage;