import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { Stethoscope, Brain, Shield, CheckCircle, Star, ArrowRight, Zap, Globe, Phone, Mail, MapPin, Award, TrendingUp, MessageSquare, Cpu, Database, Smartphone, Settings, FileText, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

export default function AIDrugDiscoveryProPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Molecular Design',
      description: 'Advanced machine learning algorithms to design and optimize drug molecules with unprecedented precision.'
    },
    {
      icon: Stethoscope,
      title: 'Predictive Toxicology',
      description: 'AI models predict drug toxicity and side effects before clinical trials, reducing development risks.'
    },
    {
      icon: Database,
      title: 'Big Data Integration',
      description: 'Process and analyze massive datasets from clinical trials, research papers, and patient records.'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Ensure all drug discovery processes meet FDA, EMA, and other regulatory requirements.'
    },
    {
      icon: Globe,
      title: 'Global Collaboration',
      description: 'Connect with research institutions worldwide for collaborative drug discovery projects.'
    },
    {
      icon: BarChart,
      title: 'Clinical Trial Optimization',
      description: 'AI-powered patient selection and trial design to maximize success rates and reduce costs.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: '$4,500',
      period: '/month',
      description: 'For academic institutions',
      features: [
        'Basic AI models',
        'Up to 10 projects',
        'Standard support',
        'Academic licensing',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Pharmaceutical',
      price: '$12,000',
      period: '/month',
      description: 'For pharmaceutical companies',
      features: [
        'Advanced AI models',
        'Unlimited projects',
        'Priority support',
        'Commercial licensing',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      period: '/month',
      description: 'For large pharma companies',
      features: [
        'Full AI capabilities',
        'Unlimited everything',
        '24/7 support',
        'Custom training',
        'Dedicated manager',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Head of Research, PharmaCorp',
      content: 'AI Drug Discovery Pro has accelerated our drug development process by 300%. We\'ve identified promising compounds in months instead of years.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Director, University Research Lab',
      content: 'The predictive models are incredibly accurate. We\'ve reduced failed clinical trials by 60% since implementing this platform.',
      rating: 5,
      avatar: '/images/testimonials/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'CSO, Biotech Innovations',
      content: 'The AI insights have revolutionized our approach to drug discovery. We\'re now developing treatments for previously untreatable diseases.',
      rating: 5,
      avatar: '/images/testimonials/emily-watson.jpg'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI Drug Discovery Pro - Revolutionary Pharmaceutical Research Platform | Zion Tech Group"
        description="Advanced AI-powered drug discovery platform with molecular design, predictive toxicology, and clinical trial optimization. Accelerate drug development by 300%."
        keywords="AI drug discovery, pharmaceutical research, molecular design, predictive toxicology, clinical trials, drug development"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Stethoscope className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Drug Discovery Pro</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Drug Discovery Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered drug discovery platform with molecular design, predictive toxicology, 
              and clinical trial optimization. Accelerate drug development by 300%.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Stethoscope className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">500+ Research Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">300% Faster Development</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology transforming pharmaceutical research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Research-Grade Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your research needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Leading Researchers
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join the world's top pharmaceutical companies and research institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Drug Discovery?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join the future of pharmaceutical research with AI-powered drug discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Stethoscope className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}