'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, Heart, Stethoscope, Activity, Microscope, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIHealthcareDiagnosticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Medical Imaging',
      description: 'Advanced AI analysis of medical images with 98% accuracy',
      benefits: ['X-ray analysis', 'MRI interpretation', 'CT scan review', 'Ultrasound diagnostics']
    },
    {
      icon: Heart,
      title: 'Predictive Diagnostics',
      description: 'Early disease detection and health risk assessment',
      benefits: ['Disease prediction', 'Risk stratification', 'Early intervention', 'Preventive care']
    },
    {
      icon: Activity,
      title: 'Vital Signs Monitoring',
      description: 'Continuous monitoring and analysis of patient vitals',
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Alert systems', 'Trend analysis']
    },
    {
      icon: Microscope,
      title: 'Lab Analysis',
      description: 'Automated laboratory test analysis and interpretation',
      benefits: ['Blood work analysis', 'Pathology review', 'Biomarker detection', 'Result interpretation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Clinic',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small clinics and medical practices',
      features: [
        'Up to 100 patients/month',
        'Basic AI diagnostics',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Hospital',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for hospitals and large medical facilities',
      features: [
        'Up to 1,000 patients/month',
        'Advanced AI diagnostics',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Advanced integrations',
        'Radiology suite',
        'Emergency protocols'
      ],
      popular: true
    },
    {
      name: 'Health System',
      price: '$19,999',
      period: '/month',
      description: 'For large health systems and medical networks',
      features: [
        'Unlimited patients',
        'Full AI suite',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'Radiology AI',
      description: 'AI-powered medical imaging analysis and diagnosis',
      icon: Camera,
      price: 'Starting at $1,999/month',
      features: ['X-ray analysis', 'MRI interpretation', 'CT scan review', 'Ultrasound diagnostics']
    },
    {
      title: 'Pathology AI',
      description: 'Automated pathology analysis and tissue examination',
      icon: Microscope,
      price: 'Starting at $2,499/month',
      features: ['Tissue analysis', 'Cancer detection', 'Biomarker identification', 'Diagnostic reporting']
    },
    {
      title: 'Cardiology AI',
      description: 'Advanced cardiac monitoring and heart health analysis',
      icon: Heart,
      price: 'Starting at $1,799/month',
      features: ['ECG analysis', 'Echocardiogram review', 'Arrhythmia detection', 'Risk assessment']
    },
    {
      title: 'Emergency AI',
      description: 'Rapid emergency diagnostics and triage support',
      icon: Activity,
      price: 'Starting at $3,999/month',
      features: ['Triage support', 'Emergency protocols', 'Critical care monitoring', 'Rapid diagnosis']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      company: 'Metro Health System',
      content: 'The AI diagnostics have improved our diagnostic accuracy by 25% and reduced interpretation time by 60%. It\'s revolutionizing patient care.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Radiology Director',
      company: 'University Medical Center',
      content: 'The AI imaging analysis is incredibly accurate. We\'ve caught several conditions that might have been missed with traditional methods.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Emergency Medicine',
      company: 'City General Hospital',
      content: 'The emergency AI protocols have helped us make faster, more accurate decisions in critical situations. It\'s a game-changer for patient outcomes.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered healthcare diagnostics platform with medical imaging analysis, predictive diagnostics, and automated lab analysis. Starting at $2,999/month." />
        <meta name="keywords" content="ai healthcare, medical diagnostics, medical imaging, healthcare ai, diagnostic ai, medical ai, healthcare technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-diagnostics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-600/20 rounded-full text-green-300 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            AI-Powered Healthcare
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Intelligent Healthcare Diagnostics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform healthcare delivery with AI-powered medical imaging, predictive diagnostics, 
            and automated lab analysis. Improve diagnostic accuracy by 25% with 98% AI accuracy.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">AI Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-gray-300">Better Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2,999</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Healthcare Diagnostics Inquiry"
              className="bg-transparent border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-medium hover:bg-green-400 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Medical Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Medical AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Comprehensive Medical Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <service.icon className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-green-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Healthcare-Focused Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Trusted by Medical Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join leading healthcare providers using AI to improve patient outcomes and diagnostic accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareDiagnosticsPage;