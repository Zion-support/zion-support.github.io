'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon, 
  ScaleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AILegalAssistantPage: React.FC = () => {
  const features = [
    {
      icon: DocumentTextIcon,
      title: 'Contract Analysis',
      description: 'AI-powered contract review with 99.2% accuracy in identifying risks, clauses, and compliance issues.',
      benefit: 'Reduce review time by 70%'
    },
    {
      icon: ScaleIcon,
      title: 'Legal Research',
      description: 'Comprehensive legal database search with case law analysis and precedent identification.',
      benefit: 'Save 15+ hours per case'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Monitoring',
      description: 'Real-time compliance tracking across multiple jurisdictions with automated alerts.',
      benefit: 'Prevent costly violations'
    },
    {
      icon: ChartBarIcon,
      title: 'Risk Assessment',
      description: 'Advanced risk scoring and mitigation recommendations based on historical data.',
      benefit: 'Reduce legal risks by 60%'
    },
    {
      icon: CogIcon,
      title: 'Document Generation',
      description: 'Automated legal document creation with customizable templates and clauses.',
      benefit: 'Generate docs 10x faster'
    },
    {
      icon: UserGroupIcon,
      title: 'Client Portal',
      description: 'Secure client communication and document sharing with encrypted messaging.',
      benefit: 'Improve client satisfaction'
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual lawyers and small practices',
      features: [
        'Up to 50 document reviews/month',
        'Basic legal research tools',
        'Standard compliance monitoring',
        'Email support',
        'Basic risk assessment',
        'Document generation (10/month)'
      ],
      popular: false
    },
    {
      name: 'Law Firm',
      price: '$499',
      period: '/month',
      description: 'Ideal for small to medium law firms',
      features: [
        'Up to 200 document reviews/month',
        'Advanced legal research with AI',
        'Multi-jurisdiction compliance',
        'Priority support',
        'Advanced risk analytics',
        'Unlimited document generation',
        'Client portal access',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large law firms and corporate legal departments',
      features: [
        'Unlimited document reviews',
        'Enterprise legal research',
        'Global compliance monitoring',
        '24/7 dedicated support',
        'Custom risk models',
        'API integration',
        'Advanced analytics dashboard',
        'Custom training & onboarding',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Senior Partner, Mitchell & Associates',
      content: 'Zion AI Legal Assistant has revolutionized our practice. We\'ve reduced contract review time by 75% and our clients love the faster turnaround.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'General Counsel, TechCorp Inc.',
      content: 'The compliance monitoring feature saved us from a potential $2M violation. The ROI was immediate and substantial.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Solo Practitioner',
      content: 'As a solo practitioner, this tool levels the playing field. I can now compete with larger firms on efficiency and accuracy.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Legal Assistant - Zion Tech Group"
        description="Advanced AI-powered legal assistant for contract analysis, legal research, compliance monitoring, and risk assessment. Reduce legal costs by 60% with 99.2% accuracy."
        keywords="AI legal assistant, contract analysis, legal research, compliance monitoring, risk assessment, legal automation, law firm software"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                AI-Powered Legal Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  AI Legal Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your legal practice with AI-powered contract analysis, legal research, and compliance monitoring. 
                Reduce costs by 60% while improving accuracy and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">99.2%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-gray-300">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$2M+</div>
                  <div className="text-gray-300">Cost Savings</div>
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
                Powerful <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered legal tools designed to streamline your practice and deliver superior results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-indigo-400 font-semibold">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    {feature.benefit}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your practice size and needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-indigo-500 shadow-lg shadow-indigo-500/25' 
                    : 'border-slate-700 hover:border-indigo-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
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
                Trusted by <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Legal Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what legal professionals are saying about our AI Legal Assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-indigo-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who trust Zion AI Legal Assistant for their most critical legal work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAssistantPage;