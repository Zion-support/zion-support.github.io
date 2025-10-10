'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Globe, Code, Smartphone, Zap, CheckCircle, ArrowRight, Users, Settings, Database, Shield } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Modern Web Applications',
      description: 'Build responsive, fast, and scalable web applications',
      benefits: ['Mobile-first design', 'SEO optimized', 'Performance focused']
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      benefits: ['React & Next.js', 'Node.js & Python', 'Database design']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and user experience',
      benefits: ['Fast loading', 'Smooth animations', 'Core Web Vitals']
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security and scalability',
      benefits: ['Data protection', 'Auto-scaling', 'Monitoring']
    }
  ];

  const services = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces',
      icon: '🎨',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side applications and APIs',
      icon: '⚙️',
      technologies: ['Node.js', 'Python', 'Express', 'FastAPI']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store development',
      icon: '🛒',
      technologies: ['Shopify', 'WooCommerce', 'Custom platforms']
    },
    {
      title: 'CMS Development',
      description: 'Content management systems and blogs',
      icon: '📝',
      technologies: ['WordPress', 'Strapi', 'Custom CMS']
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs',
      icon: '🔌',
      technologies: ['REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Progressive Web Apps',
      description: 'App-like web experiences',
      icon: '📱',
      technologies: ['PWA', 'Service Workers', 'Offline support']
    }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️', description: 'Frontend framework' },
    { name: 'Next.js', logo: '▲', description: 'Full-stack framework' },
    { name: 'Node.js', logo: '🟢', description: 'Backend runtime' },
    { name: 'Python', logo: '🐍', description: 'Backend language' },
    { name: 'TypeScript', logo: '🔷', description: 'Type-safe JavaScript' },
    { name: 'MongoDB', logo: '🍃', description: 'NoSQL database' }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group | Modern Web Applications</title>
        <meta name="description" content="Build modern, responsive web applications with our expert development team. Full-stack development, e-commerce, and custom web solutions." />
        <meta name="keywords" content="web development, React, Next.js, full-stack development, e-commerce, custom web applications" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Web <span className="text-cyan-400">Development</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Build modern, responsive web applications that deliver exceptional user experiences. 
                From simple websites to complex web applications, we create digital solutions that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Your Project
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We use the latest technologies and frameworks to build modern web applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{tech.logo}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our web development solutions provide everything you need for a successful online presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive web development services to meet all your digital needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful project delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
                <p className="text-gray-300 text-sm">Requirements analysis and project planning</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-gray-300 text-sm">UI/UX design and architecture planning</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                <p className="text-gray-300 text-sm">Agile development with regular updates</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
                <p className="text-gray-300 text-sm">Testing, deployment, and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Web Application?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a web application that drives results. 
                Get a free consultation and project estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Your Project
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default WebDevelopmentPage;