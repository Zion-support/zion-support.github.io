'use client';
import React from 'react';
import Head from 'next/head';
import { servicesData } from '../data/servicesData';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, data analytics, mobile development, web development" />
      </Head>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          <div className="particles absolute inset-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">IT Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive <span className="text-pink-400 font-semibold">IT solutions</span> to power your 
              digital transformation and business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Explore Services
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-pink-400 text-pink-400 hover:border-pink-300 hover:text-pink-300">
                Get Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">IT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT services designed to modernize and secure your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-bold text-pink-400">${service.pricing.basic}</span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                    <a 
                      href={service.contactInfo.website} 
                      className="text-pink-400 hover:text-pink-300 text-sm font-semibold"
                    >
                      Learn More →
                    </a>
                  </div>

                  <button className="w-full cyber-button">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Technology Stack</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use cutting-edge technologies to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "AWS", icon: "☁️" },
                { name: "Azure", icon: "🔷" },
                { name: "Google Cloud", icon: "🌐" },
                { name: "Docker", icon: "🐳" },
                { name: "Kubernetes", icon: "⚙️" },
                { name: "React", icon: "⚛️" },
                { name: "Node.js", icon: "🟢" },
                { name: "Python", icon: "🐍" },
                { name: "TypeScript", icon: "📘" },
                { name: "MongoDB", icon: "🍃" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "Redis", icon: "🔴" }
              ].map((tech, index) => (
                <div key={index} className="glass-dark rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-white font-semibold">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Development Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: "01", 
                  title: "Discovery & Planning", 
                  description: "We analyze your requirements and create a detailed project roadmap",
                  icon: "🔍"
                },
                { 
                  step: "02", 
                  title: "Design & Architecture", 
                  description: "Our team designs the solution architecture and user experience",
                  icon: "🎨"
                },
                { 
                  step: "03", 
                  title: "Development & Testing", 
                  description: "We build and thoroughly test your solution using agile methodologies",
                  icon: "⚡"
                },
                { 
                  step: "04", 
                  title: "Deployment & Support", 
                  description: "We deploy your solution and provide ongoing maintenance and support",
                  icon: "🚀"
                }
              ].map((process, index) => (
                <div key={index} className="glass-dark rounded-lg p-8 text-center hover-lift">
                  <div className="text-6xl mb-4">{process.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{process.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-dark rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT solutions can modernize your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Start Your Project
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
