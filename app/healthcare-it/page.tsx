'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Heart, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const HealthcareITPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Electronic Health Records',
      description: 'Comprehensive EHR systems that streamline patient data management and improve care coordination.',
      benefits: ['Patient data management', 'Care coordination', 'Interoperability']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Ensure full compliance with healthcare regulations and data protection standards.',
      benefits: ['HIPAA compliance', 'Data encryption', 'Audit trails']
    },
    {
      icon: BarChart,
      title: 'Clinical Analytics',
      description: 'Advanced analytics and reporting tools for clinical decision support and population health management.',
      benefits: ['Clinical insights', 'Population health', 'Predictive analytics']
    },
    {
      icon: Clock,
      title: 'Telemedicine Platform',
      description: 'Secure and reliable telemedicine solutions for remote patient care and consultations.',
      benefits: ['Remote consultations', 'Video conferencing', 'Mobile access']
    },
    {
      icon: Users,
      title: 'Patient Engagement',
      description: 'Patient portal and engagement tools that improve communication and care outcomes.',
      benefits: ['Patient portals', 'Mobile apps', 'Health tracking']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate clinical workflows and administrative processes to improve efficiency and reduce errors.',
      benefits: ['Process automation', 'Error reduction', 'Efficiency gains']
    }
  ];

  const services = [
    {
      title: 'EHR Implementation',
      description: 'Complete electronic health record system implementation and integration.',
      icon: Heart
    },
    {
      title: 'Telemedicine Solutions',
      description: 'Secure telemedicine platforms for remote patient care and consultations.',
      icon: Clock
    },
    {
      title: 'Data Analytics',
      description: 'Advanced healthcare analytics and reporting solutions for better outcomes.',
      icon: BarChart
    },
    {
      title: 'Compliance Management',
      description: 'Comprehensive compliance and security solutions for healthcare organizations.',
      icon: Shield
    }
  ];

  const benefits = [
    'Improve patient outcomes by 35%',
    'Reduce administrative costs by 40%',
    'Enhance care coordination and communication',
    'Ensure HIPAA compliance and data security',
    'Enable remote patient monitoring',
    'Streamline clinical workflows'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Healthcare IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform healthcare delivery with innovative IT solutions including EHR, telemedicine, and clinical analytics." />
        <meta name="keywords" content="healthcare IT, EHR, telemedicine, HIPAA compliance, clinical analytics, healthcare technology" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Healthcare IT Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Transform healthcare delivery with innovative technology
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Empower healthcare organizations with secure, compliant, and efficient IT solutions 
              that improve patient care and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Healthcare Technology Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive healthcare IT solutions address every aspect of modern healthcare delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Healthcare Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for healthcare organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Our Healthcare IT Solutions?</h2>
              <p className="text-xl text-gray-300">
                Our healthcare technology solutions deliver measurable improvements in patient care and operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Healthcare Delivery?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our healthcare IT experts to discuss your specific requirements and challenges.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Modernize Your Healthcare IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations that have transformed their operations with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Schedule Consultation
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareITPage;