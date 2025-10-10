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
      title: 'Electronic Health Records',
      description: 'Comprehensive EHR systems with seamless integration and patient data management.',
      benefits: ['Patient data management', 'Interoperability', 'Clinical decision support']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Ensure complete HIPAA compliance with advanced security and privacy protection.',
      benefits: ['Data encryption', 'Access controls', 'Audit logging']
    },
    {
      icon: BarChart,
      title: 'Health Analytics',
      description: 'Advanced analytics and reporting for population health and clinical outcomes.',
      benefits: ['Population health insights', 'Clinical outcomes', 'Predictive analytics']
    },
    {
      icon: Clock,
      title: 'Telemedicine Platform',
      description: 'Secure telemedicine solutions for remote patient care and consultations.',
      benefits: ['Remote consultations', 'Video conferencing', 'Patient monitoring']
    },
    {
      icon: Users,
      title: 'Patient Portal',
      description: 'Comprehensive patient portal with appointment scheduling and health records access.',
      benefits: ['Appointment scheduling', 'Health records access', 'Communication tools']
    },
    {
      icon: Zap,
      title: 'AI-Powered Diagnostics',
      description: 'AI-assisted diagnostic tools for improved accuracy and faster diagnosis.',
      benefits: ['AI diagnostics', 'Image analysis', 'Clinical decision support']
    }
  ];

  const benefits = [
    'Improve patient outcomes by 30%',
    'Reduce administrative costs by 50%',
    'Enhance care coordination',
    'Increase patient satisfaction',
    'Better clinical decision making',
    'Streamlined workflows'
  ];

  const useCases = [
    {
      title: 'Hospitals',
      description: 'Comprehensive hospital management systems with integrated workflows',
      icon: '🏥'
    },
    {
      title: 'Clinics',
      description: 'Outpatient clinic management with patient scheduling and records',
      icon: '🏩'
    },
    {
      title: 'Telehealth',
      description: 'Remote healthcare delivery with secure video consultations',
      icon: '📱'
    },
    {
      title: 'Research',
      description: 'Clinical research platforms with data collection and analysis',
      icon: '🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Healthcare IT - Zion Tech Group | Healthcare Technology Solutions</title>
        <meta name="description" content="Transform healthcare delivery with advanced IT solutions. Improve patient care, ensure compliance, and enhance efficiency with Zion Tech Group's healthcare technology services." />
        <meta name="keywords" content="healthcare IT, EHR, telemedicine, HIPAA compliance, health analytics, patient portal" />
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
            Transform healthcare delivery with cutting-edge IT solutions. 
            Improve patient care, ensure compliance, and enhance efficiency with our healthcare technology expertise.
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Technology Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare IT solutions combine advanced technology with healthcare expertise 
              to deliver powerful tools for modern healthcare organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Healthcare IT?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern healthcare technology with measurable improvements in patient care and operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare IT solutions are designed for various healthcare organizations and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our healthcare IT solutions can revolutionize patient care. 
            Get started with a free consultation and demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareITPage;