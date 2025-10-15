'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HeartIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const AIMedicalAssistantPage: React.FC = () => {
  const features = [
    {
      icon: HeartIcon,
      title: 'Diagnostic Support',
      description: 'AI-powered diagnostic assistance with 98.7% accuracy in symptom analysis and condition identification.',
      benefit: 'Improve diagnostic accuracy by 45%'
    },
    {
      icon: DocumentTextIcon,
      title: 'Medical Records Analysis',
      description: 'Intelligent analysis of patient records with automated summary generation and trend identification.',
      benefit: 'Save 20+ hours per week'
    },
    {
      icon: BeakerIcon,
      title: 'Lab Results Interpretation',
      description: 'Advanced AI interpretation of lab results with risk stratification and follow-up recommendations.',
      benefit: 'Reduce interpretation errors by 60%'
    },
    {
      icon: ChartBarIcon,
      title: 'Treatment Planning',
      description: 'Evidence-based treatment recommendations with personalized care plans and drug interaction checks.',
      benefit: 'Optimize treatment outcomes'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Monitoring',
      description: 'Real-time monitoring of treatment adherence and automated patient follow-up scheduling.',
      benefit: 'Improve patient compliance by 40%'
    },
    {
      icon: UserGroupIcon,
      title: 'Patient Communication',
      description: 'AI-powered patient education materials and automated appointment reminders with multilingual support.',
      benefit: 'Enhance patient engagement'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Practice',
      price: '$299',
      period: '/month',
      description: 'Perfect for solo practitioners and small clinics',
      features: [
        'Up to 100 patient records/month',
        'Basic diagnostic support',
        'Lab results interpretation',
        'Email support',
        'Standard compliance monitoring',
        'Basic treatment planning',
        'Patient communication tools'
      ],
      popular: false
    },
    {
      name: 'Medical Group',
      price: '$799',
      period: '/month',
      description: 'Ideal for medical groups and medium-sized practices',
      features: [
        'Up to 500 patient records/month',
        'Advanced diagnostic AI',
        'Comprehensive lab analysis',
        'Priority support',
        'Advanced compliance tracking',
        'Custom treatment protocols',
        'Multi-language patient support',
        'Team collaboration tools',
        'Integration with EMR systems'
      ],
      popular: true
    },
    {
      name: 'Hospital System',
      price: '$1,999',
      period: '/month',
      description: 'For large hospitals and healthcare systems',
      features: [
        'Unlimited patient records',
        'Enterprise diagnostic AI',
        'Real-time lab monitoring',
        '24/7 dedicated support',
        'Custom compliance workflows',
        'Advanced analytics dashboard',
        'API integration',
        'Custom training & onboarding',
        'SLA guarantee',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Walsh',
      role: 'Chief Medical Officer, Metro Health',
      content: 'Zion AI Medical Assistant has transformed our diagnostic accuracy. We\'ve seen a 45% improvement in early disease detection.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Internal Medicine, Private Practice',
      content: 'The lab results interpretation feature is incredible. It catches things I might miss and provides excellent follow-up recommendations.',
      rating: 5
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Pediatrician, Children\'s Clinic',
      content: 'Patient communication has never been easier. The AI generates age-appropriate educational materials that parents love.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Medical Assistant - Zion Tech Group"
        description="Advanced AI-powered medical assistant for diagnostic support, medical records analysis, and treatment planning. Improve patient outcomes with 98.7% diagnostic accuracy."
        keywords="AI medical assistant, diagnostic support, medical records analysis, treatment planning, healthcare AI, medical software, clinical decision support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-8">
                <HeartIcon className="w-4 h-4 mr-2" />
                AI-Powered Healthcare Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  AI Medical Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Enhance patient care with AI-powered diagnostic support, medical records analysis, and treatment planning. 
                Improve outcomes while reducing administrative burden.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">98.7%</div>
                  <div className="text-gray-300">Diagnostic Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
                  <div className="text-gray-300">Improved Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                  <div className="text-gray-300">Hours Saved/Week</div>
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
                Advanced <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Medical AI</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered medical tools designed to enhance clinical decision-making and improve patient outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-emerald-400 font-semibold">
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
                Flexible <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your practice size and patient volume. All plans include our core AI features.
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
                      <span className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-emerald-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:from-emerald-700 hover:to-blue-700'
                      : 'border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-white'
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
                Trusted by <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Healthcare Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what medical professionals are saying about our AI Medical Assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-emerald-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Enhance Patient Care?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare professionals who trust Zion AI Medical Assistant for better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
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

export default AIMedicalAssistantPage;