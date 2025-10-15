'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  UserGroupIcon, 
  ShieldCheckIcon, 
  HeartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const AIMedicalAssistantPage: React.FC = () => {
  const features = [
    {
      icon: HeartIcon,
      title: 'Symptom Analysis',
      description: 'Advanced AI analyzes symptoms with 98% accuracy to provide preliminary diagnoses and recommendations.',
      benefits: ['98% diagnostic accuracy', 'Multi-symptom analysis', 'Risk assessment']
    },
    {
      icon: DocumentTextIcon,
      title: 'Medical Records Analysis',
      description: 'Process and analyze medical records, lab results, and imaging studies for comprehensive health insights.',
      benefits: ['Pattern recognition', 'Trend analysis', 'Anomaly detection']
    },
    {
      icon: ChartBarIcon,
      title: 'Treatment Recommendations',
      description: 'AI-powered treatment suggestions based on latest medical research and evidence-based practices.',
      benefits: ['Evidence-based recommendations', 'Drug interaction checking', 'Dosage optimization']
    },
    {
      icon: ShieldCheckIcon,
      title: 'HIPAA Compliance',
      description: 'Fully HIPAA-compliant platform ensuring patient data privacy and security at all times.',
      benefits: ['End-to-end encryption', 'Audit trails', 'Secure data storage']
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$399',
      period: '/month',
      description: 'Perfect for individual practitioners and small clinics',
      features: [
        'Up to 100 consultations per month',
        'Basic symptom analysis',
        'Standard medical records analysis',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for medical practices and healthcare facilities',
      features: [
        'Unlimited consultations',
        'Advanced AI analysis',
        'Comprehensive medical records processing',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large healthcare systems',
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'Dedicated support team',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Chief Medical Officer',
      company: 'Metro Health System',
      content: 'AI Medical Assistant has improved our diagnostic accuracy by 25% and reduced consultation time by 40%. It\'s like having a medical expert available 24/7.',
      rating: 5
    },
    {
      name: 'Dr. Michael Patel',
      role: 'Family Physician',
      company: 'Community Health Clinic',
      content: 'The symptom analysis feature is incredibly accurate. It helps me catch conditions I might have missed and provides excellent patient education materials.',
      rating: 5
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Emergency Medicine',
      company: 'City General Hospital',
      content: 'In emergency situations, every second counts. This AI assistant helps us make faster, more accurate decisions that save lives.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Medical Assistant - Zion Tech Group"
        description="AI-powered medical assistant for symptom analysis, diagnosis support, and treatment recommendations. HIPAA compliant with 98% accuracy."
        keywords="AI medical assistant, medical diagnosis, symptom analysis, healthcare AI, medical AI, HIPAA compliant, medical technology"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-teal-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <UserGroupIcon className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-emerald-300 text-sm font-medium">AI Medical Assistant</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AI Medical Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize healthcare with AI-powered medical diagnosis, symptom analysis, and treatment recommendations. 
                HIPAA compliant with 98% diagnostic accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                  <div className="text-gray-300">Diagnostic Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
                  <div className="text-gray-300">Faster Consultations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                  <div className="text-gray-300">HIPAA Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Medical AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered medical tools designed to enhance diagnostic accuracy and improve patient care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Flexible <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your healthcare practice. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-emerald-500 shadow-lg shadow-emerald-500/25' 
                    : 'border-slate-700 hover:border-emerald-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                      : 'border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Healthcare Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of healthcare providers who have enhanced their practice with our AI assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Enhance Your <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Medical Practice</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare providers improving patient care with AI-powered medical assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 inline ml-2" />
              </button>
              <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;