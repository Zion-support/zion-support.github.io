import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  HeartIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIMedicalDiagnosisProPage: React.FC = () => {
  const features = [
    'Symptom Analysis',
    'Differential Diagnosis',
    'Treatment Recommendations',
    'Drug Interaction Checking',
    'Medical Image Analysis',
    'Patient History Analysis',
    'Clinical Decision Support',
    'Evidence-based Medicine',
    'Risk Assessment',
    'Follow-up Planning'
  ];

  const benefits = [
    'Improved diagnostic accuracy',
    'Faster diagnosis',
    'Reduced medical errors',
    'Better patient outcomes',
    'Cost-effective solutions',
    'Continuous learning'
  ];

  const useCases = [
    'Primary care',
    'Emergency medicine',
    'Specialist consultation',
    'Telemedicine',
    'Medical education',
    'Clinical research'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 499,
      period: 'month',
      description: 'Perfect for individual practitioners',
      features: [
        'Up to 200 consultations/month',
        'Basic symptom analysis',
        'Standard treatment recommendations',
        'Email support',
        'Basic reporting'
      ]
    },
    {
      name: 'Professional',
      price: 1299,
      period: 'month',
      description: 'Ideal for medical practices',
      features: [
        'Up to 1000 consultations/month',
        'Advanced diagnostic support',
        'Medical image analysis',
        'Priority support',
        'Advanced reporting',
        'Multi-user access',
        'API integration',
        'Custom protocols'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 2999,
      period: 'month',
      description: 'For hospitals and large practices',
      features: [
        'Unlimited consultations',
        'Premium diagnostic AI',
        'Custom model training',
        '24/7 phone support',
        'Comprehensive analytics',
        'Unlimited users',
        'White-label options',
        'Custom integrations',
        'Dedicated support team'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Medical Diagnosis Pro - Zion Tech Group"
        description="Advanced AI-powered medical diagnosis assistance, symptom analysis, and treatment recommendations for healthcare professionals. Improve diagnostic accuracy by 40%."
        keywords="AI medical diagnosis, medical AI, healthcare AI, symptom analysis, treatment recommendations, medical technology, clinical decision support"
        canonicalUrl="https://ziontechgroup.com/ai-medical-diagnosis-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-emerald-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <HeartIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">AI Medical Diagnosis Pro</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Medical AI</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with AI-powered medical diagnosis, symptom analysis, and treatment recommendations. 
                Improve diagnostic accuracy by 40% and reduce medical errors by 60%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#pricing" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
                >
                  Start Free Trial
                </a>
                <a 
                  href="#demo" 
                  className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-300">Improved Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                  <div className="text-gray-300">Reduced Errors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                  <div className="text-gray-300">Faster Diagnosis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
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
                Comprehensive <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Medical AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to enhance your medical practice and deliver better patient care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature}</h3>
                  <p className="text-gray-400">
                    Advanced AI-powered {feature.toLowerCase()} with evidence-based medical accuracy.
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
                Why Choose <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">AI Medical Diagnosis Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of healthcare professionals who have enhanced their practice with our AI-powered solutions.
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
                      Experience measurable improvements in your medical practice and patient outcomes.
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
                Perfect for <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Every Medical Practice</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From primary care to specialized medicine, our AI assistant adapts to your specific medical needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{useCase}</h3>
                  <p className="text-gray-400">
                    Enhance your {useCase.toLowerCase()} capabilities with AI-powered diagnostic support.
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
                Simple, <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transparent Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your medical practice. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-green-500 shadow-lg shadow-green-500/25' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-green-400 mb-2">
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
                    href="/contact?service=ai-medical-diagnosis-pro&plan=basic"
                    className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                        : 'border border-green-500 text-green-300 hover:bg-green-500 hover:text-white'
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
        <section className="py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-emerald-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Medical Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare professionals who have already revolutionized their practice with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=ai-medical-diagnosis-pro"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
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

export default AIMedicalDiagnosisProPage;