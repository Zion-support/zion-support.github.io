import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Zap, Users, CheckCircle, Star, ArrowRight, Target, BarChart, Shield } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Rapid Development',
      description: 'Build and deploy micro SaaS applications quickly with our AI-powered development tools'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your micro SaaS applications'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete user authentication, authorization, and management systems'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance features built-in'
    }
  ];

  const benefits = [
    'Launch your SaaS in weeks, not months',
    'Reduce development costs by 60%',
    'Scale automatically with user growth',
    'Built-in analytics and monitoring',
    'Multi-tenant architecture ready',
    'API-first design for easy integration'
  ];

  const services = [
    {
      title: 'SaaS Development',
      description: 'Complete micro SaaS application development from concept to launch',
      price: 'Starting at $5,000/month'
    },
    {
      title: 'AI Integration',
      description: 'Add AI capabilities to existing or new SaaS applications',
      price: 'Starting at $3,000/month'
    },
    {
      title: 'SaaS Optimization',
      description: 'Optimize existing SaaS applications for better performance and user experience',
      price: 'Starting at $2,500/month'
    },
    {
      title: 'SaaS Maintenance',
      description: 'Ongoing maintenance and support for your SaaS applications',
      price: 'Starting at $1,500/month'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and scale micro SaaS applications with AI-powered development tools and rapid deployment capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Free SaaS Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Features</h2>
            <p className="text-xl text-gray-600">Everything you need to build and scale your SaaS</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our micro SaaS development platform helps you build, deploy, and scale SaaS applications
                quickly and efficiently, with built-in AI capabilities and modern architecture.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SaaS Development Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Development Speed</span>
                  <span className="text-2xl font-bold text-green-600">5x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="text-2xl font-bold text-blue-600">-60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time to Market</span>
                  <span className="text-2xl font-bold text-purple-600">-75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Scalability</span>
                  <span className="text-2xl font-bold text-orange-600">+400%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our SaaS Services</h2>
            <p className="text-xl text-gray-600">Comprehensive micro SaaS development solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our SaaS Development Process</h2>
            <p className="text-xl text-gray-600">How we build your micro SaaS application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Concept & Planning</h3>
              <p className="text-gray-600 text-sm">Define your SaaS concept and create a detailed development plan</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Architecture</h3>
              <p className="text-gray-600 text-sm">Design user experience and create scalable architecture</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h3>
              <p className="text-gray-600 text-sm">Build and thoroughly test your SaaS application</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch & Scale</h3>
              <p className="text-gray-600 text-sm">Deploy your SaaS and provide ongoing support for growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl mb-8">Contact us today to start building your next successful SaaS application.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/consultation"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Free SaaS Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;