'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Clock, Users, Target, Zap, Brain, Cloud, Shield, Code, BarChart, Phone, Mail, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const consultations = [
    {
      id: 'ai-strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and implementation planning',
      duration: '2-3 hours',
      price: 'Free',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation timeline']
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Planning',
      description: 'Strategic cloud migration planning and execution guidance',
      duration: '3-4 hours',
      price: 'Free',
      features: ['Current infrastructure analysis', 'Cloud provider selection', 'Migration strategy', 'Cost optimization']
    },
    {
      id: 'cybersecurity-audit',
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and vulnerability assessment',
      duration: '4-6 hours',
      price: 'Free',
      features: ['Security audit', 'Vulnerability assessment', 'Compliance review', 'Remediation plan']
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Complete digital transformation strategy and planning',
      duration: '6-8 hours',
      price: 'Free',
      features: ['Process analysis', 'Technology selection', 'Change management', 'Timeline planning']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Discovery',
      description: 'We start by understanding your business goals, current challenges, and technology landscape.'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Based on our analysis, we develop a customized strategy tailored to your specific needs.'
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'We create a detailed roadmap with timelines, milestones, and resource requirements.'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'We provide continuous support and guidance throughout the implementation process.'
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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Free Consultation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get expert guidance on your AI and IT strategy. Our experienced consultants will help you 
                identify opportunities, overcome challenges, and create a roadmap for success.
              </p>
            </div>

            {/* Consultation Types */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Choose Your Consultation Type
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {consultations.map((consultation) => (
                  <div 
                    key={consultation.id}
                    className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedConsultation(consultation)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{consultation.name}</h3>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {consultation.price}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{consultation.description}</p>
                    <div className="flex items-center text-sm text-gray-400 mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{consultation.duration}</span>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {consultation.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                      Select This Consultation
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Our Consultation Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact us today to schedule your free consultation and take the first step 
                  toward transforming your business with AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    📞 Call: (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    📧 Email Us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;