'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Shield, Heart, Users, BarChart, Clock, ArrowRight } from 'lucide-react';

const HealthcareITPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Fully compliant healthcare IT solutions that meet HIPAA and other regulatory requirements.',
      benefits: ['HIPAA compliance', 'Data encryption', 'Audit trails']
    },
    {
      icon: Heart,
      title: 'Patient Management',
      description: 'Comprehensive patient management systems for healthcare providers.',
      benefits: ['Electronic health records', 'Patient scheduling', 'Medical history tracking']
    },
    {
      icon: Users,
      title: 'Telemedicine',
      description: 'Secure telemedicine platforms for remote patient care and consultations.',
      benefits: ['Video consultations', 'Remote monitoring', 'Secure messaging']
    },
    {
      icon: BarChart,
      title: 'Health Analytics',
      description: 'Advanced analytics for population health management and clinical insights.',
      benefits: ['Population health', 'Clinical analytics', 'Predictive modeling']
    },
    {
      icon: Clock,
      title: 'Real-Time Monitoring',
      description: 'Real-time patient monitoring and alert systems for critical care.',
      benefits: ['Vital signs monitoring', 'Alert systems', 'Emergency response']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Advanced security measures to protect sensitive patient data.',
      benefits: ['End-to-end encryption', 'Access controls', 'Data backup']
    }
  ];

  const benefits = [
    'Ensure HIPAA compliance',
    'Improve patient outcomes by 40%',
    'Reduce administrative costs by 30%',
    'Enhance data security',
    'Enable remote patient care',
    'Streamline clinical workflows'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Healthcare IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Secure and compliant healthcare IT solutions. HIPAA-compliant systems, telemedicine platforms, and health analytics for healthcare providers." />
        <meta name="keywords" content="healthcare IT, HIPAA compliance, telemedicine, electronic health records, health analytics, Zion Tech Group" />
      </Helmet>

      <Navigation />

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
              Transform healthcare delivery with our secure, compliant, and innovative IT solutions. 
              Improve patient outcomes while ensuring regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare IT solutions are designed to meet the unique needs and 
              regulatory requirements of healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Healthcare IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built specifically for healthcare organizations with compliance, 
              security, and patient care as top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our healthcare IT experts help you build secure, compliant, 
            and innovative solutions for your healthcare organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareITPage;