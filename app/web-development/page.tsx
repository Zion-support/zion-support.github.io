'use client';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Code, Smartphone, Zap, CheckCircle, ArrowRight, Star, Clock, Users, BarChart, Settings, Server, Shield, Target, Brain, Database, Smartphone as Mobile, Monitor } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Custom Web Applications',
      description: 'Tailored web applications built with modern technologies',
      features: ['React & Next.js', 'Node.js Backend', 'Database Integration', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that work perfectly on all devices',
      features: ['Mobile Optimization', 'Cross-Browser Compatibility', 'Performance Optimization', 'User Experience Design']
    },
    {
      icon: Zap,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration',
      features: ['Shopping Cart', 'Payment Processing', 'Inventory Management', 'Order Tracking']
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'Secure and high-performance web applications',
      features: ['SSL Certificates', 'Security Audits', 'Performance Optimization', 'SEO Optimization']
    }
  ];

  const technologies = [
    {
      name: 'Frontend',
      description: 'Modern frontend technologies for engaging user experiences',
      features: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      icon: Monitor
    },
    {
      name: 'Backend',
      description: 'Robust backend solutions for scalable applications',
      features: ['Node.js', 'Python', 'PHP', 'Java', 'C#'],
      icon: Server
    },
    {
      name: 'Database',
      description: 'Reliable database solutions for data management',
      features: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
      icon: Database
    },
    {
      name: 'Cloud & DevOps',
      description: 'Cloud deployment and continuous integration',
      features: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      icon: Cloud
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'We create wireframes and prototypes for your approval'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your application using best practices'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment to production'
    }
  ];

  const stats = [
    { number: '100+', label: 'Web Projects' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '50%', label: 'Faster Load Times' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - Zion Tech Group | Custom Web Applications</title>
        <meta name="description" content="Professional web development services including custom web applications, e-commerce solutions, responsive design, and modern web technologies." />
        <meta name="keywords" content="web development, custom web applications, e-commerce, responsive design, React, Node.js, web design" />
        <meta property="og:title" content="Web Development Services - Zion Tech Group" />
        <meta property="og:description" content="Professional web development services for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Web Development
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Custom Web Applications & E-Commerce Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with custom web applications built using modern technologies. 
              We create responsive, secure, and high-performance websites and web applications that drive results.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Web Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  <ul className="space-y-1">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to Build Your Web Application?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our web development experts help you create a custom web application that drives business growth and delivers exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default WebDevelopmentPage;