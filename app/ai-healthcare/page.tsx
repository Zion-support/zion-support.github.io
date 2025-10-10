'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Stethoscope, Brain, Shield, CheckCircle, Phone, Mail, Target, Target, Shield, CheckCircle, Phone, Mail, Eye, AlertTriangle } from 'lucide-react';

const AIHealthcarePage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Heart,
      title: 'Medical Image Analysis',
      description: 'AI-powered analysis of X-rays, MRIs, CT scans, and ultrasounds with 95% accuracy',
      color: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'Diagnostic Assistance',
      description: 'AI algorithms that assist doctors in making accurate diagnoses and treatment recommendations',
      color: 'text-blue-400'
    },
    {
      icon: Stethoscope,
      title: 'Patient Monitoring',
      description: 'Continuous monitoring of patient vital signs and health metrics with predictive alerts',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security and compliance with healthcare regulations and data protection',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Clinic',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small clinics',
      features: [
        'Up to 100 patients/month',
        'Basic image analysis',
        'Patient monitoring',
        'Email support',
        'Standard security',
        '1 medical professional'
      ],
      popular: false},
    {
      name: 'Hospital',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for hospitals',
      features: [
        'Up to 1,000 patients/month',
        'Advanced AI diagnostics',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'Integration with EMR',
        '5 medical professionals'
      ],
      popular: true},
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large healthcare systems',
      features: [
        'Unlimited patients',
        'Custom AI models',
        '24/7 monitoring',
        'Dedicated support team',
        'White-label solution',
        'Custom integrations',
        'Unlimited professionals'
      ],
      popular: false}
  ];

  const useCases = [
    {
      title: 'Radiology',
      description: 'AI-powered analysis of medical images for faster and more accurate diagnoses',
      icon: Eye,
      result: '95% accuracy'
    },
    {
      title: 'Cardiology',
      description: 'Heart disease detection and monitoring with AI-powered ECG analysis',
      icon: Heart,
      result: '90% faster'
    },
    {
      title: 'Oncology',
      description: 'Cancer detection and treatment planning with advanced AI algorithms',
      icon: Target,
      result: '80% improvement'
    },
    {
      title: 'Emergency Care',
      description: 'Rapid triage and critical care decision support in emergency situations',
      icon: AlertTriangle,
      result: '60% faster'
    }
  ];

  const benefits = [
    { metric: '95%', label: 'Diagnostic Accuracy', color: 'text-green-400' },
    { metric: '50%', label: 'Faster Diagnosis', color: 'text-blue-400' },
    { metric: 'HIPAA', label: 'Compliant', color: 'text-purple-400' },
    { metric: '24/7', label: 'Monitoring', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Healthcare Solutions - Advanced Medical AI | Zion Tech Group</title>
        <meta name="description" content="Transform healthcare with AI-powered medical imaging, diagnostic assistance, and patient monitoring. HIPAA compliant solutions for modern healthcare." />
        <meta name="keywords" content="AI healthcare, medical AI, diagnostic assistance, medical imaging, patient monitoring, healthcare technology" />
        <meta property="og:title" content="AI Healthcare Solutions - Advanced Medical AI" />
        <meta property="og:description" content="Transform healthcare with AI-powered medical imaging and diagnostic assistance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare" />
      <div className="container mx-auto px-4 py-16">{/* Hero Section */}</div>
        </div><section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>AI-Powered Healthcare<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Healthcare Solutions<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform healthcare delivery with AI-powered medical imaging, diagnostic assistance,</p>
            and patient monitoring. Improve outcomes, reduce costs, and enhance patient care.</p>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950<a
              href="/contact"
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
            >Get Healthcare Demo</a>
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20">
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}<div className="text-white font-semibold mb-2">{benefit.label}</div>
            <div className="text-gray-400 text-sm">Industry-leading healthcare AI</div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Healthcare Features<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}<p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Medical Specialties<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</div>
              </div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-green-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Healthcare Solutions<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div>
            <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-green-500 ring-2 ring-green-500/20' : 'border-gray-700'} hover:border-green-500/50 transition-all duration-300`}>{plan.popular && (</div><div className="$2" />
            <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}<span className="text-gray-400 ml-1">{plan.period}<p className="text-gray-400 mt-2">{plan.description}<ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    </ul><li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >Get Started</a>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 p-12 rounded-lg border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Healthcare?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 500+ healthcare providers already using our AI solutions to improve patient care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950</Phone>
            </Phone>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ><Mail className="w-5 h-5 mr-2" >Email Us</Mail>
            </Mail>
          </div>
        </section>
      </div>
    </div>
  );

AIHealthcarePage.displayName = 'AIHealthcarePage';

export default AIHealthcarePage;