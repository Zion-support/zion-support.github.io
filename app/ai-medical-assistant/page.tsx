'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HeartIcon, 
  DocumentTextIcon, 
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  BeakerIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const AIMedicalAssistantPage: React.FC = () => {
  const features = [
    {
      icon: HeartIcon,
      title: 'Medical Diagnosis Support',
      description: 'AI-powered diagnostic assistance with 96.8% accuracy for common conditions and symptoms',
      benefits: ['Reduce misdiagnosis by 40%', 'Faster symptom analysis', 'Evidence-based recommendations']
    },
    {
      icon: DocumentTextIcon,
      title: 'Patient Data Analysis',
      description: 'Comprehensive analysis of patient records, lab results, and medical history',
      benefits: ['Pattern recognition', 'Risk stratification', 'Treatment optimization']
    },
    {
      icon: BeakerIcon,
      title: 'Lab Result Interpretation',
      description: 'Automated interpretation of laboratory results with clinical context and recommendations',
      benefits: ['Instant result analysis', 'Abnormal value detection', 'Clinical correlation']
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Predict patient outcomes, readmission risks, and treatment effectiveness',
      benefits: ['Early intervention alerts', 'Outcome prediction', 'Resource optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Practice',
      price: '$599',
      period: '/month',
      description: 'Perfect for solo practitioners and small clinics',
      features: [
        'Up to 200 patients/month',
        'Basic diagnostic support',
        'Lab result interpretation',
        'Email support',
        'Standard analytics',
        'HIPAA compliance',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Medical Group',
      price: '$1,499',
      period: '/month',
      description: 'Ideal for medical groups and multi-specialty practices',
      features: [
        'Up to 1,000 patients/month',
        'Advanced diagnostic support',
        'Comprehensive lab analysis',
        'Priority support',
        'Advanced analytics',
        'Full HIPAA compliance',
        'Custom reporting',
        'API integration',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Hospital System',
      price: '$4,999',
      period: '/month',
      description: 'Comprehensive solution for hospitals and health systems',
      features: [
        'Unlimited patients',
        'Full AI diagnostic suite',
        'Real-time monitoring',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Advanced compliance',
        'Custom integrations',
        'White-label solution',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Emergency Triage',
      description: 'AI-powered triage system for emergency departments to prioritize patient care',
      icon: HeartIcon,
      impact: 'Reduce wait times by 35%'
    },
    {
      title: 'Chronic Disease Management',
      description: 'Continuous monitoring and management of chronic conditions like diabetes and hypertension',
      icon: ChartBarIcon,
      impact: 'Improve outcomes by 25%'
    },
    {
      title: 'Radiology Analysis',
      description: 'AI-assisted analysis of medical imaging for faster and more accurate diagnoses',
      icon: EyeIcon,
      impact: 'Increase accuracy by 30%'
    },
    {
      title: 'Drug Interaction Checking',
      description: 'Real-time checking for drug interactions and contraindications',
      icon: BeakerIcon,
      impact: 'Prevent 90% of medication errors'
    }
  ];

  const specialties = [
    'Internal Medicine', 'Cardiology', 'Oncology', 'Radiology', 'Pathology',
    'Emergency Medicine', 'Pediatrics', 'Neurology', 'Orthopedics', 'Dermatology'
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Medical Assistant Pro - Advanced Healthcare AI Solutions | Zion Tech Group"
        description="Transform healthcare delivery with our AI-powered medical assistant. Diagnostic support, patient data analysis, lab interpretation, and predictive analytics. Starting at $599/month."
        keywords="AI medical assistant, healthcare AI, medical diagnosis, patient data analysis, lab interpretation, medical technology, healthcare automation, clinical decision support"
        canonicalUrl="https://ziontechgroup.com/ai-medical-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Zion AI Medical Assistant Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize healthcare delivery with AI-powered diagnostic support, patient data analysis, and predictive analytics. 
                <br className="hidden sm:block" />
                <span className="text-emerald-400 font-semibold">Improve patient outcomes by 25% and reduce diagnostic errors by 40%</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-emerald-400 text-emerald-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-emerald-400/25 neon-border-animated"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">96.8%</div>
                  <div className="text-gray-300 text-sm">Diagnostic Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">40%</div>
                  <div className="text-gray-300 text-sm">Error Reduction</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">25%</div>
                  <div className="text-gray-300 text-sm">Better Outcomes</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">HIPAA</div>
                  <div className="text-gray-300 text-sm">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Medical AI Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Cutting-edge AI technology designed specifically for healthcare professionals to improve patient care and outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-emerald-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Multi-Specialty <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Support</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI assistant supports a wide range of medical specialties with specialized knowledge and protocols.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {specialties.map((specialty, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 text-center"
                >
                  <div className="text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors">
                    {specialty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Real-World <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See how healthcare professionals are using our AI assistant to improve patient care and outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                    {useCase.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Transparent <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your healthcare practice. All plans include HIPAA compliance and core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-emerald-500 shadow-emerald-500/20' 
                      : 'border-slate-700 hover:border-emerald-500 hover:shadow-emerald-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:from-emerald-700 hover:to-blue-700'
                        : 'border-2 border-emerald-500 text-emerald-300 hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Hospital System' ? 'Contact Sales' : 'Start Free Trial'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of healthcare professionals who are already using AI to improve patient care and outcomes.
              <br className="hidden sm:block" />
              <span className="text-emerald-400 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-emerald-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;