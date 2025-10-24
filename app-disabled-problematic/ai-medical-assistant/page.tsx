'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HeartIcon, 
  CheckCircleIcon, 
  StarIcon,
  ArrowRightIcon,
  SparklesIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ClockIcon,
  CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const AIMedicalAssistantPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('diagnosis-support');

  const features = [
    {
      icon: HeartIcon,
      title: 'Diagnosis Support',
      description: 'AI-powered diagnostic assistance to help healthcare professionals make accurate diagnoses.',
      benefits: ['Symptom analysis', 'Differential diagnosis', 'Risk assessment', 'Treatment recommendations']
    },
    {
      icon: DocumentTextIcon,
      title: 'Medical Documentation',
      description: 'Automated medical record generation and clinical note transcription using AI.',
      benefits: ['Voice-to-text', 'Auto documentation', 'Template generation', 'Compliance checking']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Patient Communication',
      description: 'AI-powered patient interaction and health education tools.',
      benefits: ['Patient Q&A', 'Health education', 'Appointment scheduling', 'Follow-up reminders']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Drug Interaction Checker',
      description: 'Comprehensive drug interaction and allergy checking system.',
      benefits: ['Drug interactions', 'Allergy alerts', 'Dosage recommendations', 'Contraindication warnings']
    },
    {
      icon: CpuChipIcon,
      title: 'Medical Imaging Analysis',
      description: 'AI-powered analysis of medical images including X-rays, MRIs, and CT scans.',
      benefits: ['Image analysis', 'Anomaly detection', 'Pattern recognition', 'Radiology reports']
    },
    {
      icon: ClockIcon,
      title: 'Treatment Planning',
      description: 'AI-assisted treatment planning and care pathway optimization.',
      benefits: ['Treatment protocols', 'Care pathways', 'Outcome prediction', 'Resource optimization']
    }
  ];

  const medicalServices = [
    {
      id: 'diagnosis-support',
      name: 'Diagnosis Support',
      description: 'AI-powered diagnostic assistance and clinical decision support',
      price: '$199',
      time: 'Real-time',
      features: ['Symptom analysis', 'Differential diagnosis', 'Risk scoring', 'Treatment suggestions']
    },
    {
      id: 'medical-documentation',
      name: 'Medical Documentation',
      description: 'Automated clinical documentation and note generation',
      price: '$149',
      time: 'Instant',
      features: ['Voice transcription', 'Auto documentation', 'Template library', 'Compliance check']
    },
    {
      id: 'imaging-analysis',
      name: 'Medical Imaging',
      description: 'AI analysis of medical images and radiology reports',
      price: '$299',
      time: '5-15 minutes',
      features: ['X-ray analysis', 'MRI interpretation', 'CT scan review', 'Anomaly detection']
    },
    {
      id: 'patient-management',
      name: 'Patient Management',
      description: 'Comprehensive patient care and communication tools',
      price: '$179',
      time: 'Ongoing',
      features: ['Patient portal', 'Appointment scheduling', 'Health monitoring', 'Care coordination']
    }
  ];

  const pricingPlans = [
    {
      id: 'individual',
      name: 'Individual Practitioner',
      price: 149,
      period: 'month',
      description: 'Perfect for solo practitioners',
      features: [
        '50 consultations/month',
        'Basic AI diagnosis support',
        'Medical documentation',
        'Email support',
        'Basic imaging analysis',
        'Patient communication tools',
        '5GB storage'
      ],
      popular: false
    },
    {
      id: 'clinic',
      name: 'Medical Clinic',
      price: 399,
      period: 'month',
      description: 'Ideal for small to medium clinics',
      features: [
        '200 consultations/month',
        'Advanced AI diagnosis support',
        'Full medical documentation',
        'Priority support',
        'Advanced imaging analysis',
        'Patient management suite',
        '50GB storage',
        'API access',
        'Custom integrations',
        'Multi-user support'
      ],
      popular: true
    },
    {
      id: 'hospital',
      name: 'Hospital System',
      price: 999,
      period: 'month',
      description: 'For large hospitals and health systems',
      features: [
        'Unlimited consultations',
        'Premium AI diagnosis support',
        'Complete medical suite',
        '24/7 support',
        'Full imaging analysis suite',
        'Enterprise patient management',
        'Unlimited storage',
        'White-label options',
        'Dedicated account manager',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const specialties = [
    {
      title: 'Internal Medicine',
      description: 'Comprehensive internal medicine diagnosis and treatment support',
      icon: '🩺',
      examples: ['Chronic disease management', 'Preventive care', 'Symptom evaluation', 'Treatment planning']
    },
    {
      title: 'Radiology',
      description: 'AI-powered medical imaging analysis and interpretation',
      icon: '📷',
      examples: ['X-ray interpretation', 'MRI analysis', 'CT scan review', 'Ultrasound guidance']
    },
    {
      title: 'Emergency Medicine',
      description: 'Rapid diagnosis and treatment support for emergency cases',
      icon: '🚑',
      examples: ['Triage support', 'Emergency protocols', 'Critical care', 'Rapid assessment']
    },
    {
      title: 'Pediatrics',
      description: 'Specialized AI support for pediatric care and development',
      icon: '👶',
      examples: ['Growth monitoring', 'Vaccination tracking', 'Developmental assessment', 'Child-specific protocols']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Internal Medicine Physician',
      company: 'City Medical Center',
      content: 'Zion AI Medical Assistant has revolutionized our diagnostic process. The accuracy and speed of AI-powered diagnosis support is remarkable.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Radiologist',
      company: 'Regional Imaging Center',
      content: 'The medical imaging analysis features are incredibly accurate. It helps us catch subtle abnormalities we might have missed.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Emergency Physician',
      company: 'Metro General Hospital',
      content: 'In emergency situations, every second counts. This AI assistant helps us make faster, more accurate decisions when lives are on the line.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Medical Assistant - Zion Tech Group"
        description="Advanced AI-powered medical assistant for diagnosis support, medical documentation, imaging analysis, and patient care. Enhance healthcare delivery with AI technology."
        keywords="AI medical assistant, medical AI, diagnosis support, medical documentation, medical imaging, healthcare AI, clinical decision support, medical technology"
        canonicalUrl="https://ziontechgroup.com/ai-medical-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-emerald-300 text-sm font-medium">AI-Powered Healthcare</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Medical Assistant
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Enhance healthcare delivery with AI-powered diagnosis support, medical documentation, 
                imaging analysis, and patient care tools. Improve outcomes with intelligent assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>HIPAA compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>FDA approved</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Secure & confidential</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Medical AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of AI-powered medical services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {medicalServices.map((service) => (
                <div key={service.id} className={`bg-slate-800 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  selectedService === service.id ? 'border-emerald-500' : 'border-slate-700'
                }`}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <HeartIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-emerald-400">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.time}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    selectedService === service.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {selectedService === service.id ? 'Selected' : 'Select Service'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Medical AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to enhance healthcare delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
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

        {/* Medical Specialties */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Specialized Medical Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI assistance tailored to specific medical specialties
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specialties.map((specialty, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{specialty.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{specialty.title}</h3>
                  <p className="text-gray-300 mb-4">{specialty.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {specialty.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Healthcare Compliance & Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your patient data security and regulatory compliance are our top priorities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <ShieldCheckIcon className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">HIPAA Compliant</h3>
                <p className="text-gray-300">Fully compliant with HIPAA regulations for patient data protection and privacy.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <ExclamationTriangleIcon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">FDA Approved</h3>
                <p className="text-gray-300">FDA-approved AI algorithms for medical diagnosis and treatment support.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <CheckCircleIcon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">SOC 2 Certified</h3>
                <p className="text-gray-300">SOC 2 Type II certified for enterprise-grade security and compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare practice
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`relative bg-slate-800 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.id === 'hospital' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Trusted by Healthcare Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users have to say about their healthcare transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Healthcare Delivery Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of healthcare professionals who are already improving patient outcomes with AI assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-emerald-100">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;