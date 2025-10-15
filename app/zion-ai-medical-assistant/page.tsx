'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HeartIcon, 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon as HeartIconSolid,
  BeakerIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const ZionAIMedicalAssistantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: HeartIcon,
      title: 'Diagnostic Support',
      description: 'AI-powered diagnostic assistance with 96.8% accuracy in symptom analysis and differential diagnosis.',
      stats: '500,000+ diagnoses assisted'
    },
    {
      icon: DocumentTextIcon,
      title: 'Medical Records Analysis',
      description: 'Intelligent analysis of patient records, lab results, and imaging with automated insights.',
      stats: '2M+ records processed'
    },
    {
      icon: BeakerIcon,
      title: 'Lab Results Interpretation',
      description: 'Advanced AI interpretation of laboratory results with trend analysis and alert systems.',
      stats: '99.5% accuracy rate'
    },
    {
      icon: UserGroupIcon,
      title: 'Patient Management',
      description: 'Comprehensive patient portal with appointment scheduling, medication tracking, and care plans.',
      stats: '100,000+ patients managed'
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'AI-powered health predictions, risk assessments, and treatment outcome forecasting.',
      stats: '92% prediction accuracy'
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Automated documentation, billing, and administrative tasks to improve efficiency.',
      stats: '75% time savings'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Practice',
      price: '$399',
      period: '/month',
      description: 'Perfect for solo practitioners and small clinics',
      features: [
        'Up to 1,000 patient records',
        'Basic diagnostic support',
        'Lab results interpretation',
        'Patient portal (up to 500 patients)',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Medical Group Pro',
      price: '$999',
      period: '/month',
      description: 'Ideal for medical groups and multi-specialty practices',
      features: [
        'Unlimited patient records',
        'Advanced diagnostic AI',
        'Predictive analytics',
        'Patient portal (up to 5,000 patients)',
        'Priority support',
        'Advanced analytics dashboard',
        'Team collaboration tools',
        'Custom integrations',
        'HIPAA compliance suite'
      ],
      popular: true
    },
    {
      name: 'Hospital Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For hospitals and large healthcare systems',
      features: [
        'Everything in Pro',
        'Unlimited patients',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced reporting suite',
        'API access',
        'White-label options',
        'Custom compliance frameworks',
        'Multi-location support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief Medical Officer',
      company: 'Metro General Hospital',
      content: 'Zion AI Medical Assistant has transformed our diagnostic accuracy and patient care. The AI insights have helped us catch conditions earlier.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Internal Medicine',
      company: 'Chen Medical Group',
      content: 'The predictive analytics feature has been invaluable for managing chronic conditions and improving patient outcomes.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Pediatrician',
      company: 'Children\'s Health Center',
      content: 'The patient management system has streamlined our workflow and improved patient satisfaction significantly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Medical Assistant - AI-Powered Healthcare Technology | Zion Tech Group"
        description="Transform healthcare delivery with AI-powered diagnostic support, medical records analysis, and predictive analytics. 96.8% accuracy, HIPAA compliant."
        keywords="AI medical assistant, diagnostic support, medical records analysis, healthcare AI, medical technology, HIPAA compliant, predictive analytics"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-emerald-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <HeartIconSolid className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">AI Healthcare Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Zion AI Medical Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize healthcare delivery with AI-powered diagnostic support, medical records analysis, and predictive analytics. 
                Achieve 96.8% diagnostic accuracy while maintaining full HIPAA compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">96.8%</div>
                  <div className="text-gray-300 text-sm">Diagnostic Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">75%</div>
                  <div className="text-gray-300 text-sm">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">500K+</div>
                  <div className="text-gray-300 text-sm">Diagnoses Assisted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">2M+</div>
                  <div className="text-gray-300 text-sm">Records Processed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced AI Medical Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive healthcare technology solutions designed to enhance patient care and clinical efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-green-400 font-medium">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your healthcare practice. All plans include HIPAA compliance and core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-green-500 shadow-lg shadow-green-500/25' 
                    : 'border-slate-700 hover:border-green-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted by Healthcare Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what healthcare professionals are saying about Zion AI Medical Assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-emerald-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare professionals who trust Zion AI Medical Assistant for their practice needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIMedicalAssistantPage;