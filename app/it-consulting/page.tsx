'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, ArrowRight, CheckCircle, Target, BarChart, Shield, Clock, Award } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'IT Strategy Planning',
      description: 'Comprehensive IT roadmap aligned with business objectives.',
      features: ['Technology assessment', 'Digital transformation planning', 'ROI analysis']
    },
    {
      icon: BarChart,
      title: 'Technology Assessment',
      description: 'Evaluate current infrastructure and identify optimization opportunities.',
      features: ['Performance analysis', 'Security audit', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Strengthen your security posture with expert guidance.',
      features: ['Risk assessment', 'Compliance review', 'Security training']
    },
    {
      icon: Clock,
      title: 'Project Management',
      description: 'End-to-end IT project delivery with guaranteed success.',
      features: ['Agile methodology', 'Timeline management', 'Quality assurance']
    }
  ];

  const benefits = [
    { icon: Award, text: '15+ years experience' },
    { icon: Shield, text: '100% project success rate' },
    { icon: Users, text: 'Certified experts' },
    { icon: BarChart, text: 'Proven methodologies' }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2 mb-8">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-green-300 text-sm font-medium">IT Consulting Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Strategic IT
                <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Consulting
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your IT infrastructure with expert consulting services. 
                We help you make informed technology decisions that drive business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="cyber-button-enhanced px-8 py-4 text-lg">
                  Get Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  View Portfolio
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{benefit.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">IT Consulting Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert guidance to optimize your technology investments and drive business success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:cyber-glow-effect transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ITConsultingPage;
