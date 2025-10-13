import React from 'react';
import { Code, Globe, Smartphone, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: 'Custom Web Applications',
      description: 'Build scalable, high-performance web applications tailored to your business needs.',
      icon: <Code className="w-8 h-8" />,
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Integration']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Create powerful online stores with advanced features and seamless user experience.',
      icon: <Globe className="w-8 h-8" />,
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Analytics']
    },
    {
      title: 'Mobile-First Design',
      description: 'Responsive web applications that work perfectly on all devices and screen sizes.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Responsive Design', 'Touch Optimization', 'Fast Loading', 'Cross-browser Support']
    },
    {
      title: 'Database Solutions',
      description: 'Design and implement robust database systems for your web applications.',
      icon: <Database className="w-8 h-8" />,
      features: ['Database Design', 'Query Optimization', 'Data Migration', 'Backup Solutions']
    },
    {
      title: 'Security Implementation',
      description: 'Secure your web applications with industry-standard security practices.',
      icon: <Shield className="w-8 h-8" />,
      features: ['SSL Certificates', 'Authentication', 'Data Encryption', 'Security Audits']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your web applications for speed, SEO, and user experience.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Speed Optimization', 'SEO Enhancement', 'Caching Strategies', 'CDN Setup']
    }
  ];

  const technologies = [
    { name: 'React', description: 'Modern UI library for building interactive user interfaces' },
    { name: 'Next.js', description: 'Full-stack React framework for production-ready applications' },
    { name: 'Node.js', description: 'JavaScript runtime for building scalable server-side applications' },
    { name: 'TypeScript', description: 'Type-safe JavaScript for better development experience' },
    { name: 'MongoDB', description: 'NoSQL database for flexible data storage' },
    { name: 'PostgreSQL', description: 'Reliable relational database for complex applications' },
    { name: 'AWS', description: 'Cloud platform for scalable and secure hosting' },
    { name: 'Docker', description: 'Containerization for consistent deployment environments' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group | Custom Web Applications"
        description="Professional web development services including custom applications, e-commerce solutions, mobile-first design, and performance optimization. Build your next web project with our expert team."
        keywords="web development, custom web applications, e-commerce, responsive design, React, Node.js, database solutions, web security"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Build powerful, scalable web applications that drive your business forward. 
            From concept to deployment, we create custom solutions that meet your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We offer comprehensive web development solutions to help you build the perfect digital presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We work with the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create a custom solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Our Work
              <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
