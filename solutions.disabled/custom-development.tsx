import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Code, Database, Cloud, Shield, Zap, Users, CheckCircle, ArrowRight, Globe, Cpu, Layers, Target } from 'lucide-react';

export default function CustomDevelopment() {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Complete web and mobile applications built with modern technologies and best practices'
    }, {
      icon: Database,
      title: 'Database Design',
      description: 'Scalable database architectures optimized for performance and reliability'
    }, {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud deployment and integration with AWS, Azure, and Google Cloud'
    }, {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures built into every application'
    }, {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with optimized code and infrastructure'
    }, {
      icon: Users,
      title: 'User Experience',
      description: 'Intuitive interfaces designed with user-centered design principles'
    }
  ];

  const technologies = [
    { name: 'React & Next.js', description: 'Modern frontend frameworks' }, { name: 'Node.js & Express', description: 'Scalable backend solutions' }, { name: 'Python & Django', description: 'Rapid development frameworks' }, { name: 'PostgreSQL & MongoDB', description: 'Reliable database systems' }, { name: 'Docker & Kubernetes', description: 'Containerization and orchestration' }, { name: 'AWS & Azure', description: 'Cloud infrastructure and services' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap'
    }, {
      step: '02',
      title: 'Design & Architecture',
      description: 'Create wireframes, mockups, and technical architecture'
    }, {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and testing'
    }, {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing to ensure quality and performance'
    }, {
      step: '05',
      title: 'Deployment',
      description: 'Smooth deployment with monitoring and support'
    }, {
      step: '06',
      title: 'Maintenance',
      description: 'Ongoing support and feature enhancements'
    }
  ];

  return (
    <>
      <Head>
        <title>Custom Development Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional custom development services including web applications, mobile apps, and enterprise solutions. Built with modern technologies and best practices." />
        <meta name="keywords" content="custom development, web development, mobile development, enterprise solutions, full-stack development" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/custom-development" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom Development
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into powerful, scalable applications with our expert custom development services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Project
                </Link>
                <Link href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Custom Development?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver high-quality, scalable applications that drive business growth and user engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to build robust, scalable applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )}
  );
};