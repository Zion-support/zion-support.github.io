'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Shield, Cloud, Users, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      name: 'Digital Transformation Strategy',
      description: 'Comprehensive digital transformation roadmap tailored to your business goals and industry requirements.',
      features: ['Technology assessment', 'Digital roadmap', 'Change management', 'ROI analysis'],
      price: '$2,500/day',
      icon: Brain,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.',
      features: ['Cloud assessment', 'Migration planning', 'Data migration', 'Security implementation'],
      price: '$1,800/day',
      icon: Cloud,
      color: 'text-green-400',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and implementation of enterprise-grade security measures.',
      features: ['Security audit', 'Vulnerability assessment', 'Compliance review', 'Security implementation'],
      price: '$2,200/day',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-50'
    },
    {
      name: 'IT Infrastructure Design',
      description: 'Design and implement scalable, secure, and efficient IT infrastructure solutions.',
      features: ['Infrastructure design', 'Hardware selection', 'Network architecture', 'Implementation'],
      price: '$1,600/day',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Technology Training',
      description: 'Comprehensive training programs for your team on new technologies and best practices.',
      features: ['Custom training programs', 'Hands-on workshops', 'Certification prep', 'Ongoing support'],
      price: '$1,200/day',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Strategic IT Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with expert IT consulting services. Our experienced consultants help you 
            make informed technology decisions, optimize your infrastructure, and achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="cyber-button">
              Explore Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-block">
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Consulting Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300">We analyze your current IT infrastructure, processes, and business requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
              <p className="text-gray-300">We develop a comprehensive strategy tailored to your business goals and budget.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300">We guide you through the implementation process with minimal disruption.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
              <p className="text-gray-300">We continuously monitor and optimize your systems for peak performance.</p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <h3 className="text-xl font-bold text-white mb-3">Years Experience</h3>
              <p className="text-gray-300 text-sm">Over 15 years of experience in IT consulting and digital transformation.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <h3 className="text-xl font-bold text-white mb-3">Projects Completed</h3>
              <p className="text-gray-300 text-sm">Successfully completed over 500 IT consulting projects across various industries.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <h3 className="text-xl font-bold text-white mb-3">Client Satisfaction</h3>
              <p className="text-gray-300 text-sm">98% client satisfaction rate with our consulting services and solutions.</p>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government'].map((industry, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{industry.charAt(0)}</span>
                </div>
                <h3 className="text-white font-medium text-sm">{industry}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Strategy?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our expert consultants help you make the right technology decisions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📞 Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITConsultingPage;