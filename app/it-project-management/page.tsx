'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, Calendar, Users, BarChart, CheckCircle, ArrowRight, Star, Award, Zap, Clock } from 'lucide-react';

const ITProjectManagementPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Project Planning',
      description: 'Comprehensive project planning with detailed timelines, milestones, and resource allocation.'
    },
    {
      icon: Calendar,
      title: 'Agile Methodologies',
      description: 'Implement Agile, Scrum, and other modern project management methodologies.'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Effective team coordination and communication across all project stakeholders.'
    },
    {
      icon: BarChart,
      title: 'Progress Tracking',
      description: 'Real-time project monitoring and reporting with detailed analytics and insights.'
    }
  ];

  const services = [
    {
      title: 'Software Development',
      description: 'End-to-end project management for custom software development initiatives.',
      duration: '3-12 months',
      icon: '💻'
    },
    {
      title: 'System Implementation',
      description: 'Large-scale system implementation and integration project management.',
      duration: '6-18 months',
      icon: '🔧'
    },
    {
      title: 'Cloud Migration',
      description: 'Cloud migration and digital transformation project management.',
      duration: '2-8 months',
      icon: '☁️'
    },
    {
      title: 'Infrastructure Projects',
      description: 'IT infrastructure design, deployment, and optimization projects.',
      duration: '1-6 months',
      icon: '🏗️'
    },
    {
      title: 'Security Implementation',
      description: 'Cybersecurity and compliance implementation project management.',
      duration: '2-6 months',
      icon: '🔒'
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data analytics project management.',
      duration: '1-4 months',
      icon: '📊'
    }
  ];

  const benefits = [
    'Deliver projects on time and within budget',
    'Improve project success rates by 40%',
    'Reduce project risks and issues',
    'Enhance team productivity and collaboration',
    'Ensure stakeholder satisfaction',
    'Scale project management capabilities'
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
                IT Project Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert IT project management services to ensure successful delivery of your technology initiatives. 
                From planning to execution, we manage every aspect of your IT projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Project Management</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our certified project managers use industry best practices and modern methodologies 
                to ensure successful project delivery.
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
              <h2 className="text-4xl font-bold text-white mb-6">Project Management Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From software development to infrastructure projects, we provide comprehensive 
                project management across all IT domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.duration}
                    </div>
                  </div>
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Project Management?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our experienced project managers deliver successful outcomes through 
                  proven methodologies and industry best practices.
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
                <h3 className="text-2xl font-bold text-white mb-6">Project Success Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">On-Time Delivery:</span>
                    <span className="text-green-400 font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Budget Adherence:</span>
                    <span className="text-green-400 font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Client Satisfaction:</span>
                    <span className="text-green-400 font-semibold">4.9/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Risk Mitigation:</span>
                    <span className="text-green-400 font-semibold">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ensure Project Success</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with our expert project managers to deliver your IT initiatives on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Project
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

export default ITProjectManagementPage;