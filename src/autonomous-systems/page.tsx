import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Bot, Cpu, Eye, Shield, CheckCircle, Star, ArrowRight, Target, Zap } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Autonomous Robotics',
      description: 'AI-powered robots that can operate independently in various environments'
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms that enable systems to learn and adapt autonomously'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Visual perception systems that allow autonomous systems to see and understand their environment'
    },
    {
      icon: Shield,
      title: 'Safety & Control',
      description: 'Built-in safety mechanisms and control systems for reliable autonomous operation'
    }
  ];

  const benefits = [
    'Operate 24/7 without human intervention',
    'Reduce operational costs by up to 80%',
    'Improve efficiency and productivity significantly',
    'Enable new applications and use cases',
    'Enhance safety in hazardous environments',
    'Scale operations without additional human resources'
  ];

  const services = [
    {
      title: 'Autonomous Vehicle Systems',
      description: 'AI-powered autonomous vehicles for various transportation needs',
      price: 'Starting at $50,000/month'
    },
    {
      title: 'Industrial Automation',
      description: 'Autonomous systems for manufacturing and industrial processes',
      price: 'Starting at $25,000/month'
    },
    {
      title: 'Service Robotics',
      description: 'Autonomous service robots for hospitality, healthcare, and retail',
      price: 'Starting at $15,000/month'
    },
    {
      title: 'Drone Systems',
      description: 'Autonomous drone systems for surveillance, delivery, and inspection',
      price: 'Starting at $10,000/month'
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
              Autonomous Systems
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent autonomous systems that can operate independently, make decisions, and adapt to changing environments.
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
                Free System Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Autonomous System Features</h2>
            <p className="text-xl text-gray-600">Advanced capabilities for autonomous operation</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Autonomous Systems?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our autonomous systems are designed to operate independently, make intelligent decisions,
                and adapt to changing conditions while maintaining safety and reliability.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Autonomous Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Operational Efficiency</span>
                  <span className="text-2xl font-bold text-green-600">+300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="text-2xl font-bold text-blue-600">-80%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Uptime</span>
                  <span className="text-2xl font-bold text-purple-600">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Safety Improvement</span>
                  <span className="text-2xl font-bold text-orange-600">+95%</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Autonomous Services</h2>
            <p className="text-xl text-gray-600">Comprehensive autonomous system solutions</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">How we build autonomous systems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
              <p className="text-gray-600 text-sm">Analyze requirements and define autonomous system specifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">System Design</h3>
              <p className="text-gray-600 text-sm">Design autonomous system architecture and AI algorithms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h3>
              <p className="text-gray-600 text-sm">Build and thoroughly test autonomous systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Monitoring</h3>
              <p className="text-gray-600 text-sm">Deploy systems and provide ongoing monitoring and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Autonomous Systems?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your autonomous system requirements.</p>
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
              Free System Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutonomousSystemsPage;