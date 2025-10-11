import React from 'react';
<<<<<<< HEAD
=======
import { CheckCircle, Users, Clock, Phone, Mail, MapPin, ArrowRight, Brain, Shield, Zap, Globe } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation for your technology needs." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert consultation for your technology needs.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Consultation services coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
=======
  const consultationTypes = [
    {
      icon: Brain,
      title: 'AI Strategy Consultation',
      description: 'Develop AI implementation strategies tailored to your business needs',
      features: ['AI Readiness Assessment', 'Use Case Identification', 'ROI Analysis', 'Implementation Roadmap']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and vulnerability analysis',
      features: ['Security Assessment', 'Penetration Testing', 'Compliance Review', 'Remediation Plan']
    },
    {
      icon: Zap,
      title: 'Cloud Migration Planning',
      description: 'Strategic planning for cloud adoption and migration',
      features: ['Cloud Readiness Assessment', 'Migration Strategy', 'Cost Optimization', 'Risk Mitigation']
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategy and implementation',
      features: ['Current State Analysis', 'Future State Design', 'Change Management', 'Technology Selection']
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Free 30-minute discovery call to understand your needs and challenges'
    },
    {
      step: '2',
      title: 'Assessment & Analysis',
      description: 'Comprehensive evaluation of your current technology landscape'
    },
    {
      step: '3',
      title: 'Strategy Development',
      description: 'Custom strategy and recommendations tailored to your business goals'
    },
    {
      step: '4',
      title: 'Implementation Support',
      description: 'Ongoing support and guidance throughout the implementation process'
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Customized solutions for your business',
    'Cost-effective technology decisions',
    'Reduced implementation risks',
    'Faster time to market',
    'Competitive advantage',
    'Scalable technology architecture',
    'Ongoing support and maintenance'
  ];

  return (
    <>
      <Helmet>
        <title>IT Consultation - Zion Tech Group</title>
        <meta name="description" content="Expert IT consultation services including AI strategy, cybersecurity, cloud migration, and digital transformation." />
        <meta name="keywords" content="IT consultation, technology consulting, AI strategy, cybersecurity, cloud migration, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get expert guidance from our certified professionals to transform your technology infrastructure 
              and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Consultation Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-colors">
                  <type.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Consultation Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Consultation Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a free consultation with our experts and discover how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Our Guide
              </button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">consultation@ziontech.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
    </>
  );
};

<<<<<<< HEAD
export default ConsultationPage;
=======
export default ConsultationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
