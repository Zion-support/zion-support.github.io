import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Brain, Eye, Activity, Shield, CheckCircle, Phone, Mail, Stethoscope, Microscope, Zap, Target, Clock, Users, AlertTriangle } from 'lucide-react'

export default function AiHealthcareDiagnosticsPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Image Analysis',
      description: 'Advanced computer vision algorithms analyze medical images with 99.2% accuracy for early disease detection'
    },
    {
      icon: Heart,
      title: 'Cardiovascular Monitoring',
      description: 'Real-time heart rhythm analysis and cardiovascular risk assessment using advanced AI models'
    },
    {
      icon: Eye,
      title: 'Radiology Interpretation',
      description: 'Automated interpretation of X-rays, CT scans, and MRIs with instant results and detailed reports'
    },
    {
      icon: Microscope,
      title: 'Pathology Analysis',
      description: 'AI-powered analysis of tissue samples and blood work for accurate disease diagnosis'
    },
    {
      icon: Activity,
      title: 'Vital Signs Monitoring',
      description: 'Continuous monitoring and analysis of patient vital signs with predictive health alerts'
    },
    {
      icon: Shield,
      title: 'Drug Interaction Checker',
      description: 'Comprehensive medication interaction analysis to prevent adverse drug reactions'
    }
  ];

  const diagnosticCapabilities = [
    'Early cancer detection with 95% accuracy',
    'Cardiovascular disease prediction',
    'Neurological disorder identification',
    'Infectious disease screening',
    'Genetic predisposition analysis',
    'Treatment response prediction',
    'Drug efficacy assessment',
    'Surgical risk evaluation'
  ];

  const benefits = [
    'Reduce diagnostic errors by 85%',
    'Speed up diagnosis time by 70%',
    'Improve patient outcomes significantly',
    'Lower healthcare costs by 40%',
    'Enable early disease detection',
    'Provide 24/7 diagnostic support'
  ];

  const pricingPlans = [
    {
      name: 'Clinic',
      price: '$1,299',
      period: '/month',
      description: 'Perfect for small clinics and private practices',
      features: [
        'Basic AI diagnostics',
        'Up to 100 scans/month',
        'Email support',
        'Standard reporting',
        'HIPAA compliance',
        'Basic integration'
      ],
      popular: false
    },
    {
      name: 'Hospital',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for hospitals and medical centers',
      features: [
        'Advanced AI models',
        'Unlimited scans',
        'Priority support',
        'Custom reporting',
        'Full HIPAA compliance',
        'API integration',
        'Multi-user access',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,999',
      period: '/month',
      description: 'For large healthcare systems and networks',
      features: [
        'Custom AI models',
        'Unlimited everything',
        '24/7 dedicated support',
        'White-label solution',
        'Full compliance suite',
        'Custom integrations',
        'Dedicated account manager',
        'On-site training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      company: 'Metro General Hospital',
      role: 'Chief of Radiology',
      content: 'The AI diagnostic accuracy is remarkable. We\'ve reduced misdiagnosis rates by 80% and significantly improved patient outcomes. This technology is revolutionizing healthcare.',
      rating: 5
    },
    {
      name: 'Dr. James Chen',
      company: 'Cardiovascular Associates',
      role: 'Cardiologist',
      content: 'The cardiovascular monitoring capabilities have been game-changing. We can now detect heart conditions weeks before they become critical, saving countless lives.',
      rating: 5
    },
    {
      name: 'Dr. Maria Rodriguez',
      company: 'Oncology Center',
      role: 'Oncologist',
      content: 'Early cancer detection rates have improved dramatically. The AI system identified cases that would have been missed by traditional methods, leading to better treatment outcomes.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Healthcare Diagnostics - Advanced Medical AI | Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with our AI-powered diagnostic platform. 99.2% accuracy in medical image analysis, early disease detection, and comprehensive health monitoring. HIPAA compliant." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, medical AI, healthcare technology, diagnostic imaging, medical automation, healthcare AI" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
              🏥 99.2% Diagnostic Accuracy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Healthcare Diagnostics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform healthcare delivery with our advanced AI diagnostic platform. 
            Achieve unprecedented accuracy in medical diagnosis, early disease detection, and patient care optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Request Demo
            </a>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.2%</div>
            <div className="text-gray-300 text-sm">Diagnostic Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
            <div className="text-gray-300 text-sm">Error Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
            <div className="text-gray-300 text-sm">Faster Diagnosis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Healthcare Partners</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Diagnostic Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge AI technology provides comprehensive diagnostic support across all medical specialties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnostic Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Diagnostic Coverage
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI platform covers a wide range of medical specialties and diagnostic procedures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {diagnosticCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{capability}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Diagnostic Accuracy</span>
                  <span className="text-cyan-400 font-bold text-xl">99.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Error Reduction</span>
                  <span className="text-purple-400 font-bold text-xl">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Diagnosis Speed</span>
                  <span className="text-green-400 font-bold text-xl">70% faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost Savings</span>
                  <span className="text-orange-400 font-bold text-xl">40%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Healthcare Practice
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered healthcare diagnostics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Healthcare Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for healthcare organizations of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                  : 'border-white/10 hover:border-cyan-400/30'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-6 -mt-4">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what medical professionals are saying about our AI diagnostic platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ healthcare organizations that have already transformed their diagnostic capabilities with our AI platform. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ HIPAA Compliant • ✓ Free consultation • ✓ 30-day trial available</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}