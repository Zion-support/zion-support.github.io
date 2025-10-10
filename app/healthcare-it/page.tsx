'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Heart,
  Shield,
  Activity,
  Users,
  Stethoscope,
  Pill,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Zap,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Settings,
  BarChart,
  Database,
  Globe,
  Award,
  Lock,
  TrendingUp
} from 'lucide-react';

const HealthcareITPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMonitoring, setIsMonitoring] = useState(true);

  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full compliance with HIPAA regulations and healthcare data protection standards.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Breach prevention']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of patient vitals and health metrics with AI-powered insights.',
      benefits: ['Vital signs tracking', 'Alert systems', 'Predictive analytics', 'Remote monitoring']
    },
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Comprehensive patient management system with integrated care coordination.',
      benefits: ['Electronic health records', 'Appointment scheduling', 'Care plans', 'Communication tools']
    },
    {
      icon: Stethoscope,
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical decision support tools for improved patient outcomes.',
      benefits: ['Diagnosis assistance', 'Treatment recommendations', 'Drug interactions', 'Risk assessment']
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Electronic Health Records (EHR)',
      description: 'Comprehensive EHR system with integrated patient data management.',
      features: ['Patient records', 'Medical history', 'Prescriptions', 'Lab results'],
      pricing: 'Starting at $150/user/month'
    },
    {
      icon: Activity,
      title: 'Telemedicine Platform',
      description: 'Secure video conferencing and remote patient monitoring solutions.',
      features: ['Video consultations', 'Remote monitoring', 'Mobile access', 'Integration'],
      pricing: 'Starting at $200/month'
    },
    {
      icon: Pill,
      title: 'Pharmacy Management',
      description: 'Integrated pharmacy management system with inventory and prescription tracking.',
      features: ['Inventory management', 'Prescription tracking', 'Drug interactions', 'Billing'],
      pricing: 'Starting at $300/month'
    },
    {
      icon: BarChart,
      title: 'Healthcare Analytics',
      description: 'Advanced analytics and reporting for healthcare operations and outcomes.',
      features: ['Performance metrics', 'Patient outcomes', 'Cost analysis', 'Predictive modeling'],
      pricing: 'Starting at $500/month'
    }
  ];

  const complianceStandards = [
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act', status: 'Compliant' },
    { name: 'HITECH', description: 'Health Information Technology for Economic and Clinical Health', status: 'Compliant' },
    { name: 'FDA 21 CFR Part 11', description: 'Electronic records and signatures', status: 'Compliant' },
    { name: 'SOC 2', description: 'Security, availability, and confidentiality', status: 'Certified' },
    { name: 'ISO 27001', description: 'Information security management', status: 'Certified' },
    { name: 'GDPR', description: 'General Data Protection Regulation', status: 'Compliant' }
  ];

  const healthMetrics = [
    { label: 'Patient Satisfaction', value: '98%', trend: '+5%' },
    { label: 'System Uptime', value: '99.9%', trend: '+0.1%' },
    { label: 'Compliance Score', value: '100%', trend: '+2%' },
    { label: 'Response Time', value: '< 100ms', trend: '-15%' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      company: 'Metro General Hospital',
      role: 'Chief Medical Officer',
      content: 'The healthcare IT solutions have revolutionized our patient care. The real-time monitoring and clinical decision support are game-changers.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Regional Medical Center',
      role: 'IT Director',
      content: 'Outstanding HIPAA compliance and security features. We\'ve achieved 100% regulatory compliance with their solutions.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Community Health Clinic',
      role: 'Practice Manager',
      content: 'The telemedicine platform has enabled us to reach more patients and provide better care, especially during the pandemic.',
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'text-green-400';
      case 'Certified':
        return 'text-blue-400';
      case 'In Progress':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Healthcare IT Solutions - Zion Tech Group | Medical Technology</title>
        <meta name="description" content="Transform your healthcare organization with our secure, compliant IT solutions. HIPAA-compliant EHR, telemedicine, and clinical decision support for better patient care." />
        <meta name="keywords" content="healthcare IT, medical technology, EHR, telemedicine, HIPAA compliance, clinical decision support, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Healthcare IT
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your healthcare organization with secure, compliant, and innovative IT solutions. 
              Built for the unique needs of the healthcare industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Heart className="mr-2 h-5 w-5" />
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart },
              { id: 'features', label: 'Features', icon: Shield },
              { id: 'services', label: 'Services', icon: Stethoscope },
              { id: 'compliance', label: 'Compliance', icon: Lock }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare IT Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our healthcare IT solutions are designed specifically for the medical industry, 
                providing the security, compliance, and functionality you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-300 mb-1">{metric.label}</p>
                  <p className="text-green-400 text-sm">{metric.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Tab */}
      {activeTab === 'features' && (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our healthcare IT solutions provide the security, compliance, and functionality 
                required for modern healthcare organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive healthcare IT services designed to meet the unique needs of your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compliance Tab */}
      {activeTab === 'compliance' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Regulatory Compliance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Full compliance with healthcare regulations and industry standards to ensure 
                your organization meets all regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                    <span className={`text-sm font-semibold ${getStatusColor(standard.status)}`}>
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our healthcare IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Healthcare Organization?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our healthcare IT solutions can help you provide better patient care 
              while maintaining the highest standards of security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Heart className="mr-2 h-5 w-5" />
                Get Started
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareITPage;