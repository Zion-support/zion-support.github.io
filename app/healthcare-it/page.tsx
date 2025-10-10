'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Heart, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const HealthcareITPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Patient Management',
      description: 'Comprehensive patient management systems with electronic health records and care coordination.',
      benefits: ['Electronic health records', 'Care coordination', 'Patient tracking']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance with advanced security measures and data protection.',
      benefits: ['HIPAA compliant', 'Data encryption', 'Access controls']
    },
    {
      icon: BarChart,
      title: 'Healthcare Analytics',
      description: 'Advanced analytics for patient outcomes, operational efficiency, and clinical insights.',
      benefits: ['Patient analytics', 'Operational insights', 'Clinical reporting']
    },
    {
      icon: Clock,
      title: 'Real-Time Monitoring',
      description: 'Real-time patient monitoring and alert systems for critical care situations.',
      benefits: ['Real-time alerts', 'Critical care monitoring', 'Automated notifications']
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Comprehensive staff scheduling, training, and performance management systems.',
      benefits: ['Staff scheduling', 'Training management', 'Performance tracking']
    },
    {
      icon: Zap,
      title: 'Telemedicine',
      description: 'Secure telemedicine platforms for remote patient consultations and care.',
      benefits: ['Remote consultations', 'Video conferencing', 'Digital prescriptions']
    }
  ];

  const benefits = [
    'Improve patient outcomes by 40%',
    'Reduce administrative costs by 60%',
    'Enhance data security and compliance',
    'Streamline healthcare workflows',
    'Enable remote patient care',
    'Real-time clinical insights'
  ];

  const services = [
    {
      title: 'Electronic Health Records',
      description: 'Comprehensive EHR systems for patient data management',
      icon: '📋'
    },
    {
      title: 'Telemedicine Platforms',
      description: 'Secure video consultation and remote care solutions',
      icon: '📹'
    },
    {
      title: 'Medical Imaging',
      description: 'Advanced medical imaging and diagnostic tools',
      icon: '🔬'
    },
    {
      title: 'Pharmacy Management',
      description: 'Integrated pharmacy and medication management systems',
      icon: '💊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Healthcare IT - Zion Tech Group | Medical Technology Solutions</title>
        <meta name="description" content="Transform healthcare delivery with advanced IT solutions. Secure, compliant, and efficient healthcare technology for hospitals and medical practices." />
        <meta name="keywords" content="healthcare IT, medical technology, EHR, telemedicine, HIPAA compliance, patient management, healthcare analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Healthcare IT
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform healthcare delivery with secure, compliant, and efficient IT solutions. 
            Modernize your medical practice and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Healthcare IT Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare IT Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions for modern medical practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Healthcare IT?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform healthcare delivery with proven technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions for every medical need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Get started with healthcare IT solutions today and modernize your medical practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareITPage;