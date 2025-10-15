import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIEducationTutorProPage: React.FC = () => {
  const features = [
    'Personalized Learning Paths',
    'Adaptive Assessments',
    'Progress Tracking',
    'Interactive Content',
    'Multi-language Support',
    'Skill Gap Analysis',
    'Learning Recommendations',
    'Parent/Teacher Dashboard',
    'Gamification',
    'Certification Management'
  ];

  const benefits = [
    'Personalized learning',
    'Improved outcomes',
    'Engaging content',
    'Scalable education',
    'Cost-effective tutoring',
    'Data-driven insights'
  ];

  const useCases = [
    'K-12 education',
    'Higher education',
    'Professional training',
    'Language learning',
    'Skill development',
    'Test preparation'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 99,
      period: 'month',
      description: 'Perfect for individual learners',
      features: [
        'Up to 5 courses',
        'Basic AI tutoring',
        'Progress tracking',
        'Email support',
        'Standard content'
      ]
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for educational institutions',
      features: [
        'Up to 50 courses',
        'Advanced AI tutoring',
        'Custom learning paths',
        'Priority support',
        'Advanced analytics',
        'Multi-user access',
        'API integration',
        'Custom content'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 799,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited courses',
        'Premium AI tutoring',
        'Custom AI models',
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
        title="AI Education Tutor Pro - Zion Tech Group"
        description="Personalized AI-powered educational platform with adaptive learning, progress tracking, and customized curriculum. Improve learning outcomes by 60%."
        keywords="AI education, personalized learning, adaptive learning, educational AI, online tutoring, learning management system"
        canonicalUrl="https://ziontechgroup.com/ai-education-tutor-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <AcademicCapIcon className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">AI Education Tutor Pro</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Educational AI</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform education with AI-powered personalized learning, adaptive assessments, and customized curriculum. 
                Improve learning outcomes by 60% and engagement by 80% with intelligent tutoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#pricing" 
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Start Free Trial
                </a>
                <a 
                  href="#demo" 
                  className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                  <div className="text-gray-300">Better Outcomes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                  <div className="text-gray-300">Higher Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
                  <div className="text-gray-300">Faster Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
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
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Educational AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create personalized, engaging, and effective learning experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature}</h3>
                  <p className="text-gray-400">
                    Advanced AI-powered {feature.toLowerCase()} with personalized learning intelligence.
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
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Education Tutor Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of educators and learners who have transformed education with our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-400">
                      Experience measurable improvements in learning outcomes and student engagement.
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
                Perfect for <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Every Learning Environment</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From K-12 to professional training, our AI tutor adapts to your specific educational needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{useCase}</h3>
                  <p className="text-gray-400">
                    Enhance your {useCase.toLowerCase()} with AI-powered personalized learning and adaptive assessments.
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
                Simple, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Transparent Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your educational needs. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact?service=ai-education-tutor-pro&plan=basic"
                    className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                        : 'border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white'
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
        <section className="py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of educators and learners who have already revolutionized education with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=ai-education-tutor-pro"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
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

export default AIEducationTutorProPage;