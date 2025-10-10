'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning'],
      price: 'Starting at $2,500',
      duration: '2-4 weeks'
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Plan and execute a seamless migration to the cloud.',
      features: ['Infrastructure assessment', 'Migration strategy', 'Security planning', 'Cost optimization'],
      price: 'Starting at $5,000',
      duration: '4-8 weeks'
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations.',
      features: ['Vulnerability assessment', 'Compliance review', 'Security policies', 'Training recommendations'],
      price: 'Starting at $3,500',
      duration: '2-3 weeks'
=======
import { Link } from 'react-router-dom';
import { Phone, Mail, Calendar, CheckCircle, ArrowRight, Star, Shield, Users } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions that align with your business goals.',
      duration: '2-4 hours',
      price: 'Starting at $500/hour',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline planning'
      ]
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Comprehensive cloud strategy and migration planning for your infrastructure.',
      duration: '4-8 hours',
      price: 'Starting at $400/hour',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy development',
        'Cost optimization recommendations'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Complete security assessment and recommendations for your digital infrastructure.',
      duration: '6-12 hours',
      price: 'Starting at $600/hour',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Security policy development',
        'Incident response planning'
      ]
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
    }
  ];

  const process = [
    {
      step: '1',
<<<<<<< HEAD
      title: 'Initial Consultation',
      description: 'We discuss your business goals and challenges to understand your needs.',
      icon: Users
    },
    {
      step: '2',
      title: 'Assessment & Analysis',
      description: 'We analyze your current systems and identify opportunities for improvement.',
      icon: Shield
    },
    {
      step: '3',
      title: 'Strategy Development',
      description: 'We create a customized strategy and implementation plan for your business.',
      icon: CheckCircle
    },
    {
      step: '4',
      title: 'Implementation Support',
      description: 'We provide ongoing support to ensure successful implementation.',
      icon: ArrowRight
=======
      title: 'Initial Assessment',
      description: 'We analyze your current technology landscape and business objectives.'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your specific needs and goals.'
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones.'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.'
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Expert consultation services for AI strategy, cloud migration, and cybersecurity. Get personalized guidance for your technology needs." />
        <meta name="keywords" content="AI consultation, cloud migration, cybersecurity audit, technology consulting, IT strategy" />
      </Helmet>

<<<<<<< HEAD
      <Navigation />
      
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert Consultation Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized guidance and strategic insights to transform your business with cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Our Consultation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                ))}
=======
            {/* Process Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Consultation Process
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  A structured approach to delivering the best consultation experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-8">
                  Contact our experts to discuss your specific needs and schedule a consultation.
                </p>
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
              </div>
            </div>

<<<<<<< HEAD
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to discuss your technology needs and discover how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Schedule Free Consultation
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Download Our Guide
                </button>
=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-2">(302) 464-0950</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Schedule Online</h3>
                  <p className="text-gray-300 mb-2">Book a consultation</p>
                  <p className="text-sm text-gray-400">Available 24/7</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Schedule Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD

      <Footer />
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
    </>
  );
};

<<<<<<< HEAD
export default ConsultationPage;
=======
export default ConsultationPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
