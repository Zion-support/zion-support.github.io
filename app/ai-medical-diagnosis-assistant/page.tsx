import React from 'react'
import SEOHead from '../components/SEOHead'
import { 
  CheckCircleIcon, 
  HeartIcon, 
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon} from '@heroicons/react/24/outline'
const AIMedicalDiagnosisAssistantPage: React.FC = () => {
  const features = [
    'AI-powered symptom analysis',
    'Medical image interpretation',
    'Drug interaction checking',
    'Treatment recommendations',
    'Patient risk assessment',
    'Electronic health records integration',
    'Clinical decision support',
    'Telemedicine capabilities',
    'Medical literature analysis',
    'HIPAA compliant security'
  ]
  const benefits = [
    '95% diagnostic accuracy',
    '60% faster diagnosis',
    '40% reduction in medical errors',
    'Real-time clinical support',
    'Enhanced patient care',
    'Improved outcomes'
  ]
  const pricing = [
    {
      plan: 'Clinic',
      price: '$999',
      period: '/month',
      description: 'Perfect for small clinics',
      features: [
        'Up to 100 patients/month',
        'Basic AI diagnosis',
        'Email support',
        'Standard integrations',
        'Basic reporting'
      ]
    },
    {
      plan: 'Hospital',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for hospitals',
      features: [
        'Up to 1,000 patients/month',
        'Advanced AI analysis',
        'Priority support',
        'All integrations',
        'Custom workflows',
        'Real-time monitoring',
        'API access'
      ],
      popular: true
    },
    {
      plan: 'Healthcare System',
      price: '$9,999',
      period: '/month',
      description: 'For large healthcare systems',
      features: [
        'Unlimited patients',
        'Full AI capabilities',
        '24/7 support',
        'White-label options',
        'Custom integrations',
        'Dedicated medical team',
        'SLA guarantee',
        'Advanced analytics'
      ]
    }
  ]
  return (
    <>
      <SEOHead 
        title="AI Medical Diagnosis Assistant - Zion Tech Group"
        description="Revolutionary AI-powered medical diagnosis assistant with 95% accuracy, real-time clinical support, and advanced medical image analysis. Improve patient outcomes and reduce errors by 40%."
        keywords="medical AI, diagnosis assistant, healthcare AI, medical imaging, clinical decision support, telemedicine, medical diagnosis, healthcare technology"
        canonicalUrl="https://ziontechgroup.com/ai-medical-diagnosis-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 font-medium">AI-Powered Medical Technology</div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 holographic leading-tight">
                AI Medical Diagnosis Assistant
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Revolutionize healthcare with AI-powered medical diagnosis that provides 95% accuracy and real-time clinical support. 
                <span className="text-green-400 font-semibold"> Reduce medical errors by 40% and improve patient outcomes.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-8 py-4 text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                <a 
                  href="#demo"
                  className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 text-lg hover:shadow-lg hover:shadow-green-400/25"
                >
                  Watch Demo
                </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-gray-300 text-sm">Diagnostic Accuracy</div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-1">60%</div>
                  <div className="text-gray-300 text-sm">Faster Diagnosis</div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">40%</div>
                  <div className="text-gray-300 text-sm">Error Reduction</div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">HIPAA</div>
                  <div className="text-gray-300 text-sm">Compliant</div>
          </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Medical AI Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to enhance medical diagnosis and improve patient care.
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <HeartIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4 group-hover:text-green-300 transition-colors">
                      {feature}
              ))}
            </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">AI Medical Diagnosis Assistant</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements in diagnostic accuracy, patient care, and healthcare outcomes.
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}
              ))}
            </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Healthcare <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing Plans</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect medical AI solution for your healthcare organization's needs and patient volume.
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-green-900/50 to-blue-900/50 border-2 border-green-500 shadow-xl shadow-green-500/25' 
                    : 'bg-slate-800/50 border border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}
                    <p className="text-gray-300">{plan.description}
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </div>
              ))}
            </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Healthcare?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of healthcare professionals already using AI Medical Diagnosis Assistant to improve patient care.
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-semibold text-lg">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7 for support</div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-purple-400 font-semibold text-lg">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-green-400 font-semibold text-lg">ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">364 E Main St STE 1008, Middletown DE 19709</div>
            
            <div className="text-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-green-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Free Trial Today
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
        </>
  )
  }
export default AIMedicalDiagnosisAssistantPage
                                                                                                  </ArrowRightIcon>
                                                                                                </span>
                                                                                              </p>
                                                                                            </GlobeAltIcon>
                                                                                          </p>
                                                                                        </EnvelopeIcon>
                                                                                      </p>
                                                                                    </PhoneIcon>
                                                                                  </div>
                                                                                </p>
                                                                              </div>
                                                                            </section>
                                                                          </CheckCircleIcon>
                                                                        </li>
                                                                      </p>
                                                                    </span>
                                                                  </h3>
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </p>
                                                        </span>
                                                      </div>
                                                    </h3>
                                                  </UserGroupIcon>
                                                </div>
                                              </div>
                                            </p>
                                          </div>
                                        </h3>
                                      </HeartIcon>
                                    </div>
                                  </div>
                                </div>
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ArrowRightIcon>
            </span>
          </span>
        </span>
      </SparklesIcon>
    </div>
  </div>
</div>