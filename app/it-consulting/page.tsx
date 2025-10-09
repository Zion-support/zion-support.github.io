'use client';
import React from 'react';
import { Users, Target, BarChart, Zap, Shield, Cloud, Database, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Strategic IT Planning',
      description: 'Develop comprehensive IT strategies aligned with your business objectives and growth plans.'
    },
    {
      icon: Target,
      title: 'Technology Assessment',
      description: 'Evaluate your current technology stack and identify opportunities for improvement and optimization.'
    },
    {
      icon: BarChart,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives and modern technology adoption.'
    },
    {
      icon: Zap,
      title: 'Process Optimization',
      description: 'Streamline business processes and workflows through strategic technology implementation.'
    }
  ];

  const benefits = [
    'Expert IT strategy guidance',
    'Technology roadmap development',
    'Cost optimization recommendations',
    'Risk assessment and mitigation',
    'Vendor evaluation and selection',
    'Implementation support'
  ];

  const services = [
    {
      title: 'IT Strategy Development',
      description: 'Create comprehensive IT strategies that align with your business goals and objectives.',
      icon: Target
    },
    {
      title: 'Technology Architecture',
      description: 'Design scalable and secure technology architectures for your organization.',
      icon: Cloud
    },
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives.',
      icon: BarChart
    },
    {
      title: 'Security Consulting',
      description: 'Assess and improve your cybersecurity posture and compliance requirements.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              IT Consulting
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Strategic IT consulting services that help you make informed technology decisions. 
              Our expert consultants guide your digital transformation and optimize your IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Get IT Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IT Consulting Services</h2>
            <p className="text-xl text-gray-300">Strategic guidance for your technology decisions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our IT Consulting?</h2>
            <p className="text-xl text-gray-300">Proven expertise that delivers results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Consulting Services</h2>
            <p className="text-xl text-gray-300">Comprehensive IT consulting solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Strategic IT Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert consultants help you make the right technology decisions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Get Expert Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITConsultingPage;