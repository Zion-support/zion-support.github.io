import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AILegalAssistantProPage: React.FC = () => {
  const features = [
    'Legal Document Analysis',
    'Case Law Research',
    'Contract Review',
    'Legal Writing Assistance',
    'Precedent Analysis',
    'Compliance Checking',
    'Document Generation',
    'Client Communication',
    'Billing Integration',
    'Multi-jurisdiction Support'
  ];

  const benefits = [
    '50% faster legal research',
    'Reduced human error',
    '24/7 availability',
    'Cost-effective solutions',
    'Improved accuracy',
    'Scalable operations'
  ];

  const useCases = [
    'Contract analysis',
    'Legal research',
    'Document review',
    'Case preparation',
    'Compliance monitoring',
    'Client consultation'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 299,
      period: 'month',
      description: 'Perfect for solo practitioners',
      features: [
        'Up to 100 documents/month',
        'Basic legal research',
        'Contract templates',
        'Email support',
        'Standard accuracy'
      ]
    },
    {
      name: 'Professional',
      price: 799,
      period: 'month',
      description: 'Ideal for small law firms',
      features: [
        'Up to 500 documents/month',
        'Advanced legal research',
        'Custom contract generation',
        'Priority support',
        'High accuracy AI',
        'Multi-user access',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 1999,
      period: 'month',
      description: 'For large law firms and corporations',
      features: [
        'Unlimited documents',
        'Premium legal research',
        'Custom AI training',
        '24/7 phone support',
        'Highest accuracy',
        'Unlimited users',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Legal Assistant Pro - Zion Tech Group"
        description="Advanced AI-powered legal research, document analysis, and case law assistance for law firms and legal professionals. 50% faster research with 99% accuracy."
        keywords="AI legal assistant, legal research, document analysis, case law, legal AI, law firm technology, legal automation, contract review"
        canonicalUrl="https://ziontechgroup.com/ai-legal-assistant-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">AI Legal Assistant Pro</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">AI Legal Assistant</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your legal practice with AI-powered research, document analysis, and case law assistance. 
                Get 50% faster research with 99% accuracy and reduce operational costs by up to 40%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#pricing" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Start Free Trial
                </a>
                <a 
                  href="#demo" 
                  className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
                  <div className="text-gray-300">Faster Research</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300">Availability</div>
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
                Powerful <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to streamline your legal practice and deliver exceptional results to your clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <DocumentTextIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature}</h3>
                  <p className="text-gray-400">
                    Advanced AI-powered {feature.toLowerCase()} with industry-leading accuracy and speed.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">AI Legal Assistant Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of legal professionals who have transformed their practice with our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-400">
                      Experience measurable improvements in your legal practice efficiency and client satisfaction.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Perfect for <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Every Legal Practice</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From solo practitioners to large law firms, our AI assistant adapts to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{useCase}</h3>
                  <p className="text-gray-400">
                    Streamline your {useCase.toLowerCase()} process with AI-powered automation and insights.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple, <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Transparent Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your legal practice. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-blue-500 shadow-lg shadow-blue-500/25' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
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
                  
                  <a 
                    href="/contact?service=ai-legal-assistant-pro&plan=basic"
                    className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                        : 'border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who have already revolutionized their practice with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=ai-legal-assistant-pro"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAssistantProPage;