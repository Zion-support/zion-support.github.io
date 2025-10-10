'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Shield, Brain, ArrowRight, CheckCircle, Clock, Star, Phone, Mail, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const consultationTypes = [
    {
      icon: Users,
      title: 'AI Strategy Consultation',
      description: 'Strategic planning for AI implementation in your business',
      duration: '2-4 hours',
      price: 'Free',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation plan']
    },
    {
      icon: Shield,
      title: 'IT Infrastructure Review',
      description: 'Comprehensive analysis of your current IT infrastructure',
      duration: '4-6 hours',
      price: 'Free',
      features: ['Security audit', 'Performance analysis', 'Scalability assessment', 'Migration planning']
    },
    {
      icon: Brain,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and implementation',
      duration: '6-8 hours',
      price: 'Free',
      features: ['Process analysis', 'Technology selection', 'Change management', 'Success metrics']
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We analyze your current technology stack and business requirements'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'We create a customized technology strategy tailored to your needs'
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'We provide a detailed roadmap with timelines and milestones'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'We offer continuous support and optimization services'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Strategic planning, technology assessment, and digital transformation guidance." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Free Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get expert advice on AI implementation, IT infrastructure, and digital transformation. 
              Our specialists will help you create a customized strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>

          {/* Consultation Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Choose Your Consultation Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedConsultation(consultation)}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <consultation.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{consultation.title}</h3>
                      <p className="text-cyan-400 font-semibold">{consultation.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{consultation.description}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {consultation.duration}
                  </div>
                  <ul className="space-y-2">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Schedule Your Free Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Consultation Type</label>
                  <select className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option value="">Select a consultation type</option>
                    {consultationTypes.map((consultation, index) => (
                      <option key={index} value={consultation.title}>
                        {consultation.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                  <Calendar className="w-5 h-5 ml-2" />
                </button>
                {submitStatus === 'success' && (
                  <div className="text-green-400 text-center">
                    Thank you! We'll contact you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-400 text-center">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;