import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  Server,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Search
} from 'lucide-react';

export default function WebDevelopment() {
  const features = [
  {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored web applications built with modern technologies and best practices'
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display across all devices'
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Robust data management with scalable database solutions'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data and users'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Lightning-fast loading times and optimized user experience'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with your users in mind'
    }
  ];

  const technologies = [
  { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Tailwind CSS', category: 'Styling' }
  ];

  const services = [
  {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with React, Vue, or Angular',
      icon: Monitor,
      features: ['Responsive Design,Progressive Web Apps,Component Architecture,State Management']
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs',
      icon: Server,
      features: ['RESTful APIs,GraphQL,Microservices,Database Design']
    },
    {
      title: 'Full-Stack Solutions',
      description: 'Complete web applications from frontend to backend',
      icon: Cloud,
      features: ['End-to-End Development,DevOps Integration,Performance Optimization,Security Implementation']
    },
    {
      title: 'E-commerce Platforms',
      description: 'Custom online stores and marketplace solutions',
      icon: BarChart3,
      features: ['Payment Integration,Inventory Management,Order Processing,Analytics Dashboard']
    }
  ];

  return (
    <>
      <Head>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional web development services including custom applications, e-commerce platforms, and full-stack solutions. Modern technologies and responsive design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/web-development" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blue-600">Web Development</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your ideas into powerful web applications with our expert development team. 
                We create custom solutions that drive business growth and deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Your Project
                </Link>
                <Link href="/solutions" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Web Development Services?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine technical expertise with creative design to deliver web solutions that exceed expectations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive web development solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 w-fit mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
              <p className="text-lg text-gray-600">
                Modern, proven technologies for robust and scalable web applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="text-lg font-semibold text-gray-900 mb-1">{tech.name}</div>
                  <div className="text-sm text-gray-500">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
              <p className="text-lg text-gray-600">
                A structured approach to delivering exceptional web applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery & Planning', description: 'Understanding your requirements and creating a detailed project roadmap' },
                { step: '02', title: 'Design & Prototyping', description: 'Creating wireframes, mockups, and interactive prototypes' },
                { step: '03', title: 'Development & Testing', description: 'Building your application with continuous testing and quality assurance' },
                { step: '04', title: 'Deployment & Support', description: 'Launching your application and providing ongoing maintenance and support' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom web solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}