'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Lightbulb, Target, TrendingUp, Users, CheckCircle, ArrowRight, Star, Award, BarChart, Zap } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Strategic IT Planning',
      description: 'Develop comprehensive IT strategies aligned with your business objectives and growth plans.'
    },
    {
      icon: Target,
      title: 'Technology Assessment',
      description: 'Evaluate current technology stack and identify opportunities for improvement and optimization.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives and technology adoption.'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Support organizational change and ensure smooth technology adoption across teams.'
    }
  ];

  const services = [
    {
      title: 'IT Strategy Development',
      description: 'Create comprehensive IT roadmaps that align with business goals and objectives.',
      icon: '📋'
    },
    {
      title: 'Technology Architecture',
      description: 'Design scalable and secure technology architectures for modern business needs.',
      icon: '🏗️'
    },
    {
      title: 'Cloud Migration',
      description: 'Plan and execute cloud migration strategies for improved scalability and cost efficiency.',
      icon: '☁️'
    },
    {
      title: 'Security Consulting',
      description: 'Assess and improve cybersecurity posture with comprehensive security strategies.',
      icon: '🔒'
    },
    {
      title: 'Process Optimization',
      description: 'Streamline IT processes and workflows for improved efficiency and productivity.',
      icon: '⚙️'
    },
    {
      title: 'Vendor Management',
      description: 'Evaluate and manage technology vendors and service providers effectively.',
      icon: '🤝'
    }
  ];

  const benefits = [
    'Align IT strategy with business objectives',
    'Reduce technology costs by up to 30%',
    'Improve operational efficiency and productivity',
    'Enhance security posture and compliance',
    'Accelerate digital transformation initiatives',
    'Make informed technology investment decisions'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                IT Consulting Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Strategic IT consulting to transform your technology landscape. 
                Get expert guidance on IT strategy, digital transformation, and technology optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Get Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Strategic IT Consulting</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our experienced IT consultants provide strategic guidance to help you 
                make informed technology decisions and achieve your business goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">IT Consulting Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From strategy development to implementation, we provide comprehensive 
                IT consulting services across all technology domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our IT Consulting?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our experienced IT consultants deliver strategic guidance that helps you 
                  make informed technology decisions and achieve measurable business outcomes.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Consulting Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">1</div>
                    <span className="text-gray-300">Assessment & Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">2</div>
                    <span className="text-gray-300">Strategy Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">3</div>
                    <span className="text-gray-300">Implementation Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">4</div>
                    <span className="text-gray-300">Ongoing Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Transform Your IT Strategy</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert IT consulting to align your technology with business objectives and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ITConsultingPage;