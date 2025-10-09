'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck, DollarSign, Clock } from 'lucide-react';

const AIHealthcarePage: React.FC = () => {
  const features = [
    {
      title: 'Medical Image Analysis',
      description: 'AI-powered analysis of X-rays, MRIs, CT scans, and other medical images',
      icon: Eye,
      benefits: ['95% diagnostic accuracy', 'Faster diagnosis', 'Early detection', 'Reduced errors']
    },
    {
      title: 'Predictive Analytics',
      description: 'Predict patient outcomes and identify high-risk cases',
      icon: BarChart,
      benefits: ['Risk stratification', 'Outcome prediction', 'Early intervention', 'Better planning']
    },
    {
      title: 'Drug Discovery',
      description: 'Accelerate drug development with AI-powered molecular analysis',
      icon: Search,
      benefits: ['Faster drug development', 'Cost reduction', 'Better efficacy', 'Safety analysis']
    },
    {
      title: 'Electronic Health Records',
      description: 'Intelligent EHR management with automated data extraction',
      icon: FileText,
      benefits: ['Automated documentation', 'Data accuracy', 'Time savings', 'Better insights']
    },
    {
      title: 'Telemedicine Platform',
      description: 'AI-enhanced telemedicine for remote patient care',
      icon: Video,
      benefits: ['Remote consultations', 'AI triage', 'Patient monitoring', 'Accessibility']
    },
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered decision support for healthcare professionals',
      icon: Brain,
      benefits: ['Evidence-based recommendations', 'Treatment optimization', 'Risk assessment', 'Guideline compliance']
    }
  ];

  const applications = [
    {
      title: 'Radiology',
      description: 'AI-powered image analysis for faster and more accurate diagnoses',
      icon: '🩻',
      results: ['40% faster diagnosis', '30% reduction in errors', 'Better patient outcomes']
    },
    {
      title: 'Pathology',
      description: 'Automated analysis of tissue samples and cellular structures',
      icon: '🔬',
      results: ['95% accuracy in detection', 'Faster results', 'Consistent analysis']
    },
    {
      title: 'Cardiology',
      description: 'AI analysis of heart conditions and cardiovascular health',
      icon: '❤️',
      results: ['Early detection', 'Risk prediction', 'Treatment optimization']
    },
    {
      title: 'Oncology',
      description: 'Cancer detection, treatment planning, and monitoring',
      icon: '🎗️',
      results: ['Early cancer detection', 'Personalized treatment', 'Better survival rates']
    },
    {
      title: 'Mental Health',
      description: 'AI-powered mental health assessment and treatment support',
      icon: '🧠',
      results: ['Early intervention', 'Personalized care', 'Better outcomes']
    },
    {
      title: 'Emergency Medicine',
      description: 'AI triage and rapid diagnosis in emergency situations',
      icon: '🚨',
      results: ['Faster triage', 'Better prioritization', 'Improved outcomes']
    }
  ];

  const benefits = [
    {
      title: 'Improved Patient Outcomes',
      description: 'AI helps healthcare providers make better decisions and improve patient care',
      icon: Heart,
      stats: '40% improvement in patient outcomes'
    },
    {
      title: 'Reduced Costs',
      description: 'AI automation reduces operational costs and improves efficiency',
      icon: DollarSign,
      stats: '30% reduction in healthcare costs'
    },
    {
      title: 'Faster Diagnosis',
      description: 'AI accelerates diagnosis and treatment planning processes',
      icon: Clock,
      stats: '50% faster diagnosis times'
    },
    {
      title: 'Enhanced Accuracy',
      description: 'AI reduces human error and improves diagnostic accuracy',
      icon: Target,
      stats: '95% diagnostic accuracy'
    }
  ];

  const pricing = [
    {
      name: 'Clinic',
      price: 299,
      description: 'Perfect for small clinics and practices',
      features: [
        'Up to 10 users',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        'HIPAA compliance'
      ],
      popular: false
    },
    {
      name: 'Hospital',
      price: 599,
      description: 'Ideal for hospitals and large practices',
      features: [
        'Up to 100 users',
        'Advanced AI features',
        'Priority support',
        'Advanced integrations',
        'Advanced analytics',
        'Custom workflows',
        'API access',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 999,
      description: 'For large healthcare systems',
      features: [
        'Unlimited users',
        'Full AI suite',
        '24/7 support',
        'Custom integrations',
        'Custom analytics',
        'White-label options',
        'Dedicated account manager',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">🏥</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform healthcare delivery with AI-powered solutions. Improve patient outcomes, 
            reduce costs, and enhance the quality of care with cutting-edge artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Schedule Demo
            </a>
            <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <PhoneIcon className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Healthcare Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Medical Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{application.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{application.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{application.description}</p>
                
                <div className="space-y-2">
                  {application.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Healthcare Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            HIPAA-compliant AI solutions designed for healthcare organizations of all sizes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white' 
                      : 'bg-cyan-400 text-slate-900'
                  }`}
                >
                  Contact Sales
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations that are already using AI to improve 
              patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Schedule Demo
              </a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIHealthcarePage;