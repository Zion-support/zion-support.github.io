'use client';
import React from 'react';
import { Users, Target, BarChart, CheckCircle, Clock, Shield, Zap, Star, ArrowRight, Phone, Mail, Brain } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      name: 'IT Strategy Planning',
      description: 'Comprehensive IT strategy development aligned with your business goals and growth objectives.',
      features: ['Technology roadmap', 'Budget planning', 'Risk assessment', 'ROI analysis', 'Implementation timeline'],
      price: '$2,500/month',
      icon: Target,
      color: 'text-blue-500'
    },
    {
      name: 'Digital Transformation',
      description: 'Complete digital transformation consulting to modernize your business processes and systems.',
      features: ['Process analysis', 'System integration', 'Change management', 'Training programs', 'Performance monitoring'],
      price: '$5,000/month',
      icon: Zap,
      color: 'text-green-500'
    },
    {
      name: 'Cloud Migration',
      description: 'Expert guidance for migrating your infrastructure to the cloud with minimal downtime and maximum security.',
      features: ['Migration planning', 'Security assessment', 'Cost optimization', 'Performance tuning', 'Ongoing support'],
      price: '$3,500/month',
      icon: Brain,
      color: 'text-purple-500'
    },
    {
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your business from cyber threats.',
      features: ['Vulnerability assessment', 'Compliance review', 'Security policies', 'Incident response', 'Staff training'],
      price: '$2,000/month',
      icon: Shield,
      color: 'text-red-500'
    },
    {
      name: 'IT Infrastructure Design',
      description: 'Custom infrastructure design and implementation for scalable, secure, and efficient IT operations.',
      features: ['Network design', 'Server architecture', 'Backup solutions', 'Monitoring systems', 'Documentation'],
      price: '$4,000/month',
      icon: BarChart,
      color: 'text-cyan-500'
    },
    {
      name: 'Technology Training',
      description: 'Comprehensive training programs to upskill your team on new technologies and best practices.',
      features: ['Custom curriculum', 'Hands-on labs', 'Certification prep', 'Ongoing support', 'Progress tracking'],
      price: '$1,500/month',
      icon: Users,
      color: 'text-orange-500'
    }
  ];

  const benefits = [
    {
      title: 'Reduce IT Costs by 40%',
      description: 'Strategic planning and optimization help you get maximum value from your IT investments',
      icon: BarChart
    },
    {
      title: 'Improve Security Posture',
      description: 'Expert guidance ensures your systems are protected against evolving cyber threats',
      icon: Shield
    },
    {
      title: 'Accelerate Digital Growth',
      description: 'Strategic IT consulting helps you leverage technology for competitive advantage',
      icon: Zap
    },
    {
      title: 'Save 50+ Hours Monthly',
      description: 'Expert guidance eliminates trial-and-error, saving time and resources',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Consulting Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Strategic IT consulting to transform your business. 
            Get expert guidance on technology strategy, digital transformation, and infrastructure optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our IT Consulting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-cyan-100 mb-6">
            Join 200+ companies already using our consulting services to optimize their technology strategy.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (302) 464-0950
          </a>
        </div>
      </section>
    </div>
  );
};

export default ITConsultingPage;
