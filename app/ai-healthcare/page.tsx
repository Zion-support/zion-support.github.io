'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Stethoscope, Brain, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Zap, Target, Globe, Award, Users, Cpu, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Eye, AlertTriangle, Lock } from 'lucide-react';

const AIHealthcarePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Medical Imaging AI',
      description: 'Advanced AI for radiology, pathology, and diagnostic imaging analysis',
      benefits: ['Radiology analysis', 'Pathology detection', 'Early diagnosis', 'Treatment planning']
    },
    {
      icon: Heart,
      title: 'Predictive Analytics',
      description: 'AI-powered prediction of patient outcomes and disease progression',
      benefits: ['Risk stratification', 'Outcome prediction', 'Early intervention', 'Resource optimization']
    },
    {
      icon: Stethoscope,
      title: 'Clinical Decision Support',
      description: 'AI-assisted clinical decision making and treatment recommendations',
      benefits: ['Diagnosis support', 'Treatment recommendations', 'Drug interactions', 'Clinical guidelines']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Fully compliant healthcare solutions with advanced security measures',
      benefits: ['HIPAA compliance', 'Data encryption', 'Access controls', 'Audit trails']
    },
    {
      icon: Eye,
      title: 'Drug Discovery',
      description: 'AI-powered drug discovery and development acceleration',
      benefits: ['Molecular analysis', 'Drug design', 'Clinical trials', 'Safety assessment']
    },
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Comprehensive patient care management with AI insights',
      benefits: ['Patient monitoring', 'Care coordination', 'Appointment scheduling', 'Health records']
    }
  ];

  const healthcareServices = [
    {
      name: 'Medical Imaging AI',
      price: '$4,999/month',
      description: 'AI-powered medical imaging analysis for radiology and pathology',
      features: [
        'X-ray analysis',
        'MRI/CT scan interpretation',
        'Pathology detection',
        '3D imaging reconstruction',
        'Automated reporting',
        'Integration with PACS'
      ]
    },
    {
      name: 'Clinical AI Platform',
      price: '$3,499/month',
      description: 'Comprehensive AI platform for clinical decision support',
      features: [
        'Diagnosis assistance',
        'Treatment recommendations',
        'Drug interaction checking',
        'Clinical guidelines',
        'Outcome prediction',
        'Risk assessment'
      ]
    },
    {
      name: 'Telemedicine AI',
      price: '$2,999/month',
      description: 'AI-powered telemedicine platform with remote monitoring',
      features: [
        'Virtual consultations',
        'Remote monitoring',
        'AI triage',
        'Prescription management',
        'Patient education',
        'Follow-up scheduling'
      ]
    },
    {
      name: 'Drug Discovery AI',
      price: '$7,999/month',
      description: 'AI-powered drug discovery and development platform',
      features: [
        'Molecular analysis',
        'Drug design',
        'Clinical trial optimization',
        'Safety prediction',
        'Patent analysis',
        'Market research'
      ]
    },
    {
      name: 'Healthcare Analytics',
      price: '$2,499/month',
      description: 'Advanced analytics for healthcare operations and outcomes',
      features: [
        'Population health analytics',
        'Cost optimization',
        'Quality metrics',
        'Resource utilization',
        'Predictive modeling',
        'Performance dashboards'
      ]
    },
    {
      name: 'Mental Health AI',
      price: '$1,999/month',
      description: 'AI-powered mental health assessment and treatment support',
      features: [
        'Mental health screening',
        'Mood analysis',
        'Treatment recommendations',
        'Crisis intervention',
        'Progress tracking',
        'Therapist support'
      ]
    }
  ];

  const useCases = [
    {
      industry: 'Hospitals',
      description: 'AI-powered patient care, diagnosis, and operational optimization',
      results: '30% reduction in diagnostic errors, 25% improvement in patient outcomes'
    },
    {
      industry: 'Pharmaceuticals',
      description: 'Drug discovery, clinical trials, and regulatory compliance',
      results: '50% faster drug development, 40% reduction in trial costs'
    },
    {
      industry: 'Telemedicine',
      description: 'Remote patient monitoring and virtual care delivery',
      results: '60% increase in patient access, 45% reduction in readmissions'
    },
    {
      industry: 'Research Institutions',
      description: 'Medical research, clinical studies, and data analysis',
      results: '70% faster research insights, 80% improvement in data accuracy'
    }
  ];

  const complianceStandards = [
    'HIPAA', 'FDA 21 CFR Part 11', 'SOC 2', 'ISO 27001', 'HITECH', 'GDPR'
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI healthcare solutions including medical imaging, clinical decision support, drug discovery, and telemedicine. Transform healthcare delivery with AI." />
        <meta name="keywords" content="AI healthcare, medical imaging, clinical decision support, drug discovery, telemedicine, healthcare AI, medical AI, HIPAA compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 mb-8">
                Revolutionizing Healthcare with AI
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered healthcare platform provides medical imaging analysis, 
                clinical decision support, drug discovery, and telemedicine solutions 
                to improve patient outcomes and healthcare delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  View Services
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Healthcare Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
        <section id="services" className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Healthcare Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthcareServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Healthcare Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">{useCase.results}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Healthcare Compliance
            </h2>
            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                Our solutions meet the highest healthcare compliance standards
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {complianceStandards.map((standard, index) => (
                  <span key={index} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold">
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the healthcare AI revolution and improve patient outcomes with our advanced solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHealthcarePage;