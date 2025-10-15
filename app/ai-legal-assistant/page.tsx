'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ScaleIcon, 
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

const AILegalAssistantPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('contract-review');

  const features = [
    {
      icon: DocumentTextIcon,
      title: 'Contract Analysis',
      description: 'Analyze contracts for risks, clauses, and compliance issues using advanced AI legal analysis.',
      benefits: ['Risk identification', 'Clause analysis', 'Compliance checking', 'Recommendation engine']
    },
    {
      icon: ScaleIcon,
      title: 'Legal Research',
      description: 'Conduct comprehensive legal research using AI-powered case law and statute analysis.',
      benefits: ['Case law search', 'Statute analysis', 'Precedent identification', 'Citation verification']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Legal Q&A',
      description: 'Get instant answers to legal questions with AI-powered legal knowledge base.',
      benefits: ['Instant responses', 'Accurate information', 'Multiple jurisdictions', 'Regular updates']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Monitoring',
      description: 'Monitor regulatory compliance and alert you to changes in relevant laws and regulations.',
      benefits: ['Regulatory tracking', 'Compliance alerts', 'Change notifications', 'Risk assessment']
    },
    {
      icon: CpuChipIcon,
      title: 'Document Generation',
      description: 'Generate legal documents, contracts, and forms using AI-powered templates and customization.',
      benefits: ['Template library', 'Custom generation', 'Legal formatting', 'Review suggestions']
    },
    {
      icon: ClockIcon,
      title: 'Time Tracking',
      description: 'Track billable hours and case time with AI-powered time management and reporting.',
      benefits: ['Automatic tracking', 'Billable hours', 'Case management', 'Client reporting']
    }
  ];

  const legalServices = [
    {
      id: 'contract-review',
      name: 'Contract Review',
      description: 'Comprehensive contract analysis and risk assessment',
      price: '$99',
      time: '24-48 hours',
      features: ['Risk analysis', 'Clause review', 'Compliance check', 'Recommendations']
    },
    {
      id: 'legal-research',
      name: 'Legal Research',
      description: 'AI-powered legal research and case law analysis',
      price: '$149',
      time: '1-3 days',
      features: ['Case law search', 'Statute analysis', 'Precedent research', 'Citation check']
    },
    {
      id: 'document-drafting',
      name: 'Document Drafting',
      description: 'Generate legal documents and contracts',
      price: '$199',
      time: '2-5 days',
      features: ['Custom drafting', 'Template library', 'Legal formatting', 'Review included']
    },
    {
      id: 'compliance-audit',
      name: 'Compliance Audit',
      description: 'Comprehensive compliance assessment and monitoring',
      price: '$299',
      time: '1-2 weeks',
      features: ['Full audit', 'Risk assessment', 'Compliance report', 'Action plan']
    }
  ];

  const pricingPlans = [
    {
      id: 'solo',
      name: 'Solo Practitioner',
      price: 79,
      period: 'month',
      description: 'Perfect for individual lawyers',
      features: [
        '10 document reviews/month',
        'Basic legal research',
        'Standard templates',
        'Email support',
        'Basic compliance alerts',
        'Time tracking',
        '1GB document storage'
      ],
      popular: false
    },
    {
      id: 'firm',
      name: 'Law Firm',
      price: 199,
      period: 'month',
      description: 'Ideal for small to medium firms',
      features: [
        '50 document reviews/month',
        'Advanced legal research',
        'Premium templates',
        'Priority support',
        'Advanced compliance monitoring',
        'Team collaboration',
        '10GB document storage',
        'API access',
        'Custom integrations',
        'Client portal'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 499,
      period: 'month',
      description: 'For large law firms and corporations',
      features: [
        'Unlimited document reviews',
        'Premium legal research',
        'All templates + custom',
        '24/7 support',
        'Full compliance suite',
        'Multi-office support',
        'Unlimited storage',
        'White-label options',
        'Dedicated account manager',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const practiceAreas = [
    {
      title: 'Corporate Law',
      description: 'Business formation, contracts, and corporate governance',
      icon: '🏢',
      examples: ['M&A transactions', 'Corporate governance', 'Contract negotiation', 'Regulatory compliance']
    },
    {
      title: 'Real Estate',
      description: 'Property transactions, leases, and real estate law',
      icon: '🏠',
      examples: ['Property transactions', 'Lease agreements', 'Zoning issues', 'Title research']
    },
    {
      title: 'Employment Law',
      description: 'HR policies, employment contracts, and labor law',
      icon: '👥',
      examples: ['Employment contracts', 'HR policies', 'Labor disputes', 'Compliance training']
    },
    {
      title: 'Intellectual Property',
      description: 'Patents, trademarks, copyrights, and IP protection',
      icon: '💡',
      examples: ['Patent applications', 'Trademark registration', 'Copyright protection', 'IP licensing']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Partner',
      company: 'Martinez & Associates',
      content: 'Zion AI Legal Assistant has transformed our practice. We can now review contracts 5x faster and catch issues we might have missed.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      role: 'General Counsel',
      company: 'TechCorp Inc.',
      content: 'The compliance monitoring feature has been invaluable. We stay ahead of regulatory changes and avoid costly violations.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Solo Practitioner',
      company: 'Johnson Law Office',
      content: 'As a solo practitioner, this tool levels the playing field. I can compete with larger firms by leveraging AI technology.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Legal Assistant - Zion Tech Group"
        description="Advanced AI-powered legal assistant for contract analysis, legal research, compliance monitoring, and document generation. Streamline your legal practice with AI."
        keywords="AI legal assistant, legal AI, contract analysis, legal research, compliance monitoring, document generation, legal technology, law firm software"
        canonicalUrl="https://ziontechgroup.com/ai-legal-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-amber-400 mr-2" />
                <span className="text-amber-300 text-sm font-medium">AI-Powered Legal Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Legal Assistant
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your legal practice with AI-powered contract analysis, legal research, 
                compliance monitoring, and document generation. Work smarter, not harder.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Bar association approved</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Secure & confidential</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Legal Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of AI-powered legal services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {legalServices.map((service) => (
                <div key={service.id} className={`bg-slate-800 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  selectedService === service.id ? 'border-amber-500' : 'border-slate-700'
                }`}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ScaleIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-amber-400">{service.price}</div>
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
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
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
                Powerful Legal AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to streamline your legal practice
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
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

        {/* Practice Areas */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Specialized Practice Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI assistance tailored to your specific legal practice
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {practiceAreas.map((area, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {area.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Security & Compliance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your data security and client confidentiality are our top priorities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <ShieldCheckIcon className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">End-to-End Encryption</h3>
                <p className="text-gray-300">All data is encrypted in transit and at rest using military-grade encryption standards.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <ExclamationTriangleIcon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Attorney-Client Privilege</h3>
                <p className="text-gray-300">Maintains strict attorney-client privilege with secure, confidential processing.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <CheckCircleIcon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Bar Association Approved</h3>
                <p className="text-gray-300">Compliant with all major bar association guidelines and legal technology standards.</p>
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
                Choose the plan that fits your legal practice
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`relative bg-slate-800 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-amber-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
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
                Trusted by Legal Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users have to say about their legal practice transformation
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
        <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Legal Practice Today
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Join thousands of legal professionals who are already working smarter with AI assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-amber-100">
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

export default AILegalAssistantPage;