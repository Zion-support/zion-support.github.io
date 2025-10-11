import React from 'react';
import { CheckCircle, ArrowRight, FlaskConical, Brain, Target, Microscope, Star, DollarSign, Users, Clock, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIDrugDiscoveryProPage: React.FC = () => {
  const features = [
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-500" />,
      title: 'AI Molecular Design',
      description: 'Advanced AI algorithms for designing novel drug molecules with optimal properties and reduced side effects.',
      benefits: ['De novo drug design', 'Molecular optimization', 'ADMET prediction', 'Chemical space exploration']
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Target Identification',
      description: 'AI-powered identification and validation of drug targets using multi-omics data analysis.',
      benefits: ['Disease pathway analysis', 'Target druggability assessment', 'Biomarker discovery', 'Network pharmacology']
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Modeling',
      description: 'Machine learning models for predicting drug efficacy, toxicity, and pharmacokinetic properties.',
      benefits: ['Efficacy prediction', 'Toxicity screening', 'PK/PD modeling', 'Clinical trial optimization']
    },
    {
      icon: <Microscope className="w-8 h-8 text-red-500" />,
      title: 'Virtual Screening',
      description: 'High-throughput virtual screening of compound libraries to identify promising drug candidates.',
      benefits: ['Library screening', 'Hit identification', 'Lead optimization', 'Structure-activity relationships']
    }
  ];

  const pricingTiers = [
    {
      name: 'Research',
      price: '$999',
      period: '/month',
      description: 'For academic and research institutions',
      features: [
        'Basic AI drug design tools',
        'Target identification',
        'Virtual screening (10K compounds)',
        'Basic predictive modeling',
        'Academic licensing',
        'Email support',
        'Up to 5 users'
      ],
      popular: false
    },
    {
      name: 'Biotech',
      price: '$2,499',
      period: '/month',
      description: 'Perfect for biotech startups',
      features: [
        'Advanced AI drug design',
        'Comprehensive target analysis',
        'Virtual screening (100K compounds)',
        'Advanced predictive modeling',
        'Commercial licensing',
        'Priority support',
        'API access',
        'Up to 25 users'
      ],
      popular: true
    },
    {
      name: 'Pharma',
      price: '$4,999',
      period: '/month',
      description: 'For pharmaceutical companies',
      features: [
        'Enterprise AI drug discovery',
        'Full target identification suite',
        'Unlimited virtual screening',
        'Custom predictive models',
        'Full commercial licensing',
        'Dedicated support team',
        'Full API access',
        'Custom integrations',
        'Unlimited users',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Faster Discovery',
      description: 'Reduce drug discovery time from 10+ years to 3-5 years',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Cut R&D costs by up to 70% through AI optimization',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Higher Success Rate',
      description: 'Increase clinical trial success rates by 40%',
      icon: <Target className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance with FDA, EMA, and ICH guidelines',
      icon: <Shield className="w-6 h-6 text-yellow-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Scientific Officer, BioPharma Inc.',
      content: 'AI Drug Discovery Pro has revolutionized our R&D process. We identified 3 promising drug candidates in 6 months instead of 2 years.',
      rating: 5
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Director, University Research Lab',
      content: 'The AI models are incredibly accurate. We\'ve validated several predictions in our wet lab with 95% accuracy.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Drug Discovery, MedTech Corp',
      content: 'The virtual screening capabilities are outstanding. We found our lead compound from a library of 2 million compounds in just 2 weeks.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Oncology Drug Discovery',
      description: 'AI-powered discovery of novel cancer therapeutics',
      icon: <Target className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Neurological Disorders',
      description: 'Developing treatments for Alzheimer\'s, Parkinson\'s, and other CNS diseases',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Infectious Diseases',
      description: 'Rapid drug discovery for emerging pathogens and antibiotic resistance',
      icon: <FlaskConical className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Rare Diseases',
      description: 'Orphan drug development for rare genetic disorders',
      icon: <Microscope className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered drug discovery platform. Accelerate drug development with AI molecular design, target identification, and predictive modeling. Reduce discovery time by 70%." />
        <meta name="keywords" content="AI drug discovery, molecular design, target identification, virtual screening, pharmaceutical AI, drug development, predictive modeling" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Drug Discovery Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate drug discovery with cutting-edge AI technology. Design novel molecules, identify targets, and predict drug properties with unprecedented speed and accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced AI Drug Discovery Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI-powered tools for every stage of drug development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AI Drug Discovery Pro?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your drug discovery process with AI-powered innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Therapeutic Areas</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              AI-powered drug discovery across multiple disease areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Drug Discovery Pro Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your drug discovery needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Researchers Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from drug discovery professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Accelerate Drug Discovery?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join leading pharmaceutical companies using AI to discover the next generation of life-saving drugs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Demo
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDrugDiscoveryProPage;