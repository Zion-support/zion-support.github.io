import React from 'react';
import { CheckCircle, ArrowRight, FlaskConical, Brain, Shield, Target, Star, Activity } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIDrugDiscoveryProPage() {
  const features = [
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-500" />,
      title: 'AI Molecular Design',
      description: 'Design novel drug molecules using AI-powered molecular generation and optimization algorithms.',
      features: ['De novo drug design', 'Molecular optimization', 'ADMET prediction', 'Drug-likeness scoring', 'Chemical space exploration', 'Lead compound identification'],
      price: 'Starting at $2,999/month',
      popular: true
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Target Identification',
      description: 'Identify and validate drug targets using AI-driven analysis of biological pathways and disease mechanisms.',
      features: ['Disease pathway analysis', 'Target validation', 'Biomarker discovery', 'Drug-target interaction prediction', 'Side effect prediction', 'Efficacy assessment'],
      price: 'Starting at $1,999/month',
      popular: false
    },
    {
      icon: <Activity className="w-8 h-8 text-green-500" />,
      title: 'Clinical Trial Optimization',
      description: 'Optimize clinical trial design and patient selection using AI-powered predictive analytics.',
      features: ['Patient stratification', 'Trial design optimization', 'Outcome prediction', 'Risk assessment', 'Dosing optimization', 'Success probability modeling'],
      price: 'Starting at $3,499/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Faster Discovery',
      description: 'Accelerate drug discovery timelines by up to 70% with AI-powered molecular design.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce R&D costs by millions through intelligent compound screening and optimization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Higher Success Rate',
      description: 'Improve clinical trial success rates with AI-driven target identification and validation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with FDA and international regulatory requirements.'
    }
  ];

  const applications = [
    {
      title: 'Oncology Drug Discovery',
      description: 'Develop targeted cancer therapies with AI-powered molecular design',
      icon: <Target className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Neurological Disorders',
      description: 'Discover treatments for Alzheimer\'s, Parkinson\'s, and other neurological conditions',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Infectious Diseases',
      description: 'Develop antivirals and antibiotics for emerging infectious diseases',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Rare Diseases',
      description: 'Accelerate drug development for rare and orphan diseases',
      icon: <Activity className="w-6 h-6 text-green-500" />
    }
  ];

  const stats = [
    { number: '500+', label: 'Drug Candidates' },
    { number: '70%', label: 'Time Reduction' },
    { number: '85%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Processing' }
  ];

  const pricing = [
    {
      plan: 'Research',
      price: '$2,999',
      period: '/month',
      description: 'For academic research and small biotech companies',
      features: ['Basic molecular design', 'Target identification', 'Email support', 'Standard processing'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'For mid-size pharmaceutical companies',
      features: ['Advanced AI models', 'Clinical trial optimization', 'Priority support', 'Custom integrations'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large pharmaceutical corporations',
      features: ['Full AI suite', 'Dedicated support', 'Custom development', 'On-premise deployment'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug discovery platform for pharmaceutical companies. Accelerate drug development with molecular design, target identification, and clinical trial optimization." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, molecular design, drug development, clinical trials, biotechnology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Drug Discovery Pro
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform. 
              Accelerate drug development, reduce costs, and improve success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
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

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Drug Discovery Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI tools for every stage of the drug discovery process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{feature.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Therapeutic Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI platform is designed for drug discovery across multiple therapeutic areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {applications.map((application, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{application.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Drug Discovery Pro?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your drug discovery process with cutting-edge AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your organization's drug discovery needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Contact Sales
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Revolutionize Drug Discovery?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join leading pharmaceutical companies using AI to accelerate drug development and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <FlaskConical className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}