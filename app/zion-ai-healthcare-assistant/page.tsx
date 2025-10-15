import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  Zap,
  BarChart3,
  Settings,
  Globe,
  Smartphone,
  Database,
  FileText,
  Mail,
  Phone,
  MapPin,
  Eye,
  AlertTriangle,
  Lock,
  Brain,
  Microscope
} from 'lucide-react';

const ZionAIHealthcareAssistantPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Medical Diagnosis',
      description: 'Advanced machine learning algorithms analyze symptoms, medical history, and test results to provide preliminary diagnoses and treatment recommendations.',
      icon: <Stethoscope className="w-8 h-8" />,
      benefits: ['Symptom analysis', 'Diagnosis assistance', 'Treatment recommendations', 'Risk assessment']
    },
    {
      title: 'Health Monitoring & Analytics',
      description: 'Continuous health monitoring with wearable device integration, vital signs tracking, and predictive health analytics for proactive care.',
      icon: <Activity className="w-8 h-8" />,
      benefits: ['Vital signs tracking', 'Predictive analytics', 'Wearable integration', 'Health trends']
    },
    {
      title: 'Medical Image Analysis',
      description: 'AI-powered analysis of X-rays, MRIs, CT scans, and other medical images with 99.5% accuracy in detecting abnormalities and conditions.',
      icon: <Microscope className="w-8 h-8" />,
      benefits: ['Image analysis', 'Abnormality detection', 'Radiology assistance', 'Diagnostic accuracy']
    },
    {
      title: 'Patient Management System',
      description: 'Comprehensive patient records management with AI-powered insights, appointment scheduling, and automated follow-up reminders.',
      icon: <Database className="w-8 h-8" />,
      benefits: ['Patient records', 'Appointment scheduling', 'Follow-up automation', 'Care coordination']
    }
  ];

  const specialties = [
    { name: 'Cardiology', icon: <Heart className="w-6 h-6" />, color: 'text-red-400' },
    { name: 'Radiology', icon: <Microscope className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'Neurology', icon: <Brain className="w-6 h-6" />, color: 'text-purple-400' },
    { name: 'Oncology', icon: <Activity className="w-6 h-6" />, color: 'text-green-400' },
    { name: 'Dermatology', icon: <Eye className="w-6 h-6" />, color: 'text-pink-400' },
    { name: 'Pediatrics', icon: <Users className="w-6 h-6" />, color: 'text-yellow-400' },
    { name: 'Emergency Medicine', icon: <AlertTriangle className="w-6 h-6" />, color: 'text-orange-400' },
    { name: 'Internal Medicine', icon: <Stethoscope className="w-6 h-6" />, color: 'text-cyan-400' }
  ];

  const pricingPlans = [
    {
      name: 'Clinic',
      price: '$299/month',
      description: 'Perfect for small clinics',
      features: [
        'Basic AI diagnosis',
        'Patient management',
        'Appointment scheduling',
        'Basic reporting',
        'Email support',
        'Up to 50 patients'
      ],
      popular: false,
      marketPrice: '$799/month',
      savings: '63%'
    },
    {
      name: 'Hospital',
      price: '$599/month',
      description: 'Ideal for hospitals',
      features: [
        'Advanced AI diagnosis',
        'Medical image analysis',
        'Multi-specialty support',
        'Advanced analytics',
        'Priority support',
        'Up to 500 patients',
        'API integration'
      ],
      popular: true,
      marketPrice: '$1499/month',
      savings: '60%'
    },
    {
      name: 'Enterprise',
      price: '$1299/month',
      description: 'For healthcare systems',
      features: [
        'Full AI suite',
        'Custom integrations',
        'White-label options',
        'All specialties',
        'Dedicated support',
        'Unlimited patients',
        'Custom reporting'
      ],
      popular: false,
      marketPrice: '$2999/month',
      savings: '57%'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      company: 'Metro General Hospital',
      role: 'Chief Medical Officer',
      content: 'Zion AI Healthcare Assistant has revolutionized our diagnostic accuracy. The AI analysis caught several conditions that were initially missed by human review.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      company: 'City Medical Center',
      role: 'Radiologist',
      content: 'The medical image analysis is incredibly accurate. It has significantly reduced our reading time while improving diagnostic precision.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      company: 'Pediatric Care Clinic',
      role: 'Pediatrician',
      content: 'The patient management system has streamlined our workflow. The AI-powered insights help us provide better care to our young patients.',
      rating: 5
    }
  ];

  const stats = [
    { number: '99.5%', label: 'Diagnostic Accuracy', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6 h-6" /> },
    { number: '50,000+', label: 'Lives Improved', icon: <Heart className="w-6 h-6" /> },
    { number: 'HIPAA', label: 'Compliant', icon: <Lock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Healthcare Assistant - Advanced Medical AI | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered healthcare assistant with medical diagnosis, health monitoring, and patient management. Improve patient care with cutting-edge medical AI technology." />
        <meta name="keywords" content="AI healthcare, medical diagnosis, health monitoring, medical imaging, patient management, healthcare AI, medical technology, telemedicine" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-healthcare-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-8 neon-border">
              <Heart className="w-5 h-5 text-green-400 mr-2 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">#1 AI Healthcare Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
              Zion AI Healthcare Assistant
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered healthcare platform that enhances patient care with 
              <span className="text-green-400 font-semibold"> 99.5% diagnostic accuracy, medical image analysis, and comprehensive patient management.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 group hover:scale-105"
              >
                View Medical Demo
                <Stethoscope className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group data-stream">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Specialties */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Medical Specialties Supported
              </h2>
              <p className="text-xl text-gray-300">
                AI-powered assistance across all major medical specialties
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 text-center"
                >
                  <div className={`${specialty.color} mb-2 group-hover:scale-110 transition-transform flex justify-center`}>
                    {specialty.icon}
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-green-400 transition-colors">
                    {specialty.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Healthcare Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI-powered tools for medical diagnosis, patient care, and healthcare management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-500/10 text-green-300 text-sm rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Healthcare Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options for clinics, hospitals, and healthcare systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 ${
                    plan.popular 
                      ? 'border-green-500/50 ring-2 ring-green-500/20' 
                      : 'border-white/20 hover:border-green-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-6">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 line-through">{plan.marketPrice}</span>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {plan.savings}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'border border-green-500 text-green-400 hover:bg-green-500/10'
                    }`}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Healthcare Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what doctors and healthcare administrators say about our AI platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Healthcare with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of healthcare professionals using AI to improve patient outcomes and streamline medical workflows.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 group hover:scale-105"
              >
                View Medical Demo
                <Stethoscope className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIHealthcareAssistantPage;