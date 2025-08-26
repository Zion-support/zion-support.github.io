import React from 'react';
import Head from 'next/head';
import { Brain, Shield, Cpu, Cloud, Zap, Database, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      tagline: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: ['Machine Learning Models', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      price: 'Custom Pricing',
      rating: '4.9',
      customers: '50+',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'quantum-technology',
      name: 'Quantum Technology',
      tagline: 'Pioneer the future with quantum computing, cryptography, and sensing solutions.',
      features: ['Quantum Computing', 'Quantum Cryptography', 'Quantum Sensing', 'Quantum Machine Learning'],
      price: 'Custom Pricing',
      rating: '4.8',
      customers: '25+',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      tagline: 'Protect your digital assets with next-generation security solutions and threat detection.',
      features: ['Threat Detection', 'Zero Trust Architecture', 'Security Automation', 'Compliance Management'],
      price: 'Custom Pricing',
      rating: '4.9',
      customers: '100+',
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      tagline: 'Accelerate development and deployment with modern cloud infrastructure and automation.',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Monitoring & Observability'],
      price: 'Custom Pricing',
      rating: '4.7',
      customers: '75+',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      tagline: 'Comprehensive IT solutions for enterprise infrastructure and digital transformation.',
      features: ['IT Infrastructure', 'Digital Transformation', 'System Integration', 'IT Consulting'],
      price: 'Custom Pricing',
      rating: '4.8',
      customers: '150+',
      icon: Database,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      tagline: 'Innovative solutions for space exploration, satellite systems, and aerospace applications.',
      features: ['Satellite Systems', 'Space Data Analytics', 'Aerospace Solutions', 'Space Mining'],
      price: 'Custom Pricing',
      rating: '4.6',
      customers: '15+',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology services including AI, quantum computing, cybersecurity, cloud solutions, and more." />
        <meta property="og:title" content="Services — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive technology services including AI, quantum computing, cybersecurity, cloud solutions, and more." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-white/70">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">{service.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{service.tagline}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-white/50">{service.customers} customers</div>
                  </div>

                  <a
                    href={`/${service.id}`}
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our services can help you achieve your technology goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                Get Started
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 text-lg"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
