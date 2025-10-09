'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Stethoscope, Brain, Shield, Users, TrendingUp, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Target, BarChart, MessageSquare, Eye, Cloud, Database, Settings, Code, Smartphone, Lock, Globe, Cpu, Sparkles, Activity, Zap } from 'lucide-react';

const AIHealthcareSolutionsPage: React.FC = () => {
  const healthcareServices = [
    {
      title: 'AI-Powered Diagnostic Assistant',
      description: 'Advanced AI system for medical image analysis and diagnostic support',
      icon: Stethoscope,
      price: '$4,999/month',
      features: [
        'Medical image analysis (X-ray, MRI, CT)',
        'Symptom analysis and triage',
        'Differential diagnosis support',
        'Drug interaction checking',
        'Treatment recommendation',
        'Patient risk assessment'
      ],
      benefits: [
        '95% diagnostic accuracy',
        '60% faster diagnosis',
        '40% reduction in misdiagnosis',
        '80% time savings for radiologists'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'AI Patient Monitoring System',
      description: 'Real-time patient monitoring with predictive analytics for early intervention',
      icon: Activity,
      price: '$3,499/month',
      features: [
        'Real-time vital signs monitoring',
        'Predictive health alerts',
        'Fall detection and prevention',
        'Medication adherence tracking',
        'Remote patient monitoring',
        'Emergency response automation'
      ],
      benefits: [
        '70% reduction in readmissions',
        '50% faster emergency response',
        '85% improvement in patient outcomes',
        '60% cost reduction in monitoring'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'AI Drug Discovery Platform',
      description: 'Accelerate drug discovery with AI-powered molecular analysis and prediction',
      icon: Brain,
      price: '$7,999/month',
      features: [
        'Molecular structure analysis',
        'Drug-target interaction prediction',
        'Side effect prediction',
        'Clinical trial optimization',
        'Biomarker identification',
        'Personalized medicine support'
      ],
      benefits: [
        '80% faster drug discovery',
        '60% reduction in development costs',
        '90% accuracy in target prediction',
        '50% improvement in success rates'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'AI Electronic Health Records',
      description: 'Intelligent EHR system with natural language processing and clinical decision support',
      icon: Database,
      price: '$2,999/month',
      features: [
        'Natural language processing',
        'Clinical decision support',
        'Automated documentation',
        'Interoperability solutions',
        'Data analytics and insights',
        'Compliance management'
      ],
      benefits: [
        '90% reduction in documentation time',
        '75% improvement in data accuracy',
        '60% faster information retrieval',
        '95% compliance automation'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      title: 'AI Mental Health Support',
      description: 'AI-powered mental health assessment and support system',
      icon: Heart,
      price: '$2,499/month',
      features: [
        'Mental health screening',
        'Mood tracking and analysis',
        'Crisis intervention support',
        'Therapy recommendation',
        'Medication adherence monitoring',
        'Support group matching'
      ],
      benefits: [
        '85% early detection rate',
        '70% improvement in treatment outcomes',
        '50% reduction in crisis events',
        '90% patient engagement'
      ],
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    },
    {
      title: 'AI Surgical Planning',
      description: 'Precision surgical planning with AI-powered 3D modeling and simulation',
      icon: Target,
      price: '$5,999/month',
      features: [
        '3D surgical planning',
        'Risk assessment and simulation',
        'Surgical outcome prediction',
        'Training simulation',
        'Equipment optimization',
        'Post-operative monitoring'
      ],
      benefits: [
        '95% surgical accuracy',
        '40% reduction in complications',
        '60% faster planning time',
        '80% improvement in outcomes'
      ],
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    }
  ];

  const complianceFeatures = [
    {
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance with advanced encryption and audit trails',
      icon: Shield,
      features: ['End-to-end encryption', 'Audit logging', 'Access controls', 'Data anonymization']
    },
    {
      title: 'FDA Approval Support',
      description: 'Assistance with FDA approval process for AI medical devices',
      icon: CheckCircle,
      features: ['Regulatory guidance', 'Documentation support', 'Clinical trial design', 'Submission assistance']
    },
    {
      title: 'Clinical Validation',
      description: 'Comprehensive clinical validation and testing services',
      icon: BarChart,
      features: ['Clinical trials', 'Performance testing', 'Accuracy validation', 'Safety assessment']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI healthcare solutions for hospitals, clinics, and medical practices. Diagnostic assistance, patient monitoring, drug discovery, and more." />
        <meta name="keywords" content="AI healthcare, medical AI, diagnostic assistance, patient monitoring, drug discovery, healthcare automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Healthcare Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with cutting-edge AI solutions designed for medical professionals and healthcare organizations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Healthcare Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              AI Healthcare Solutions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {healthcareServices.map((service, index) => (
                <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.bgColor}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Proven Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`text-2xl font-bold ${service.color} neon-text`}>
                      {service.price}
                    </div>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="cyber-button px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Healthcare Compliance & Security
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Contact our healthcare AI specialists to discuss your specific needs and get a customized solution proposal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHealthcareSolutionsPage;