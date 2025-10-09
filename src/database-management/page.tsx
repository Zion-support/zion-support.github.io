import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Database, Shield, Zap, BarChart, CheckCircle, Star, ArrowRight, Target, Users, Clock } from 'lucide-react';

const DatabaseManagementPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Database Design',
      description: 'Professional database design and architecture for optimal performance and scalability'
    },
    {
      icon: Shield,
      title: 'Security & Backup',
      description: 'Comprehensive database security and automated backup solutions'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Database performance tuning and optimization for maximum efficiency'
    },
    {
      icon: BarChart,
      title: 'Monitoring & Analytics',
      description: 'Real-time database monitoring and performance analytics'
    }
  ];

  const benefits = [
    'Improve database performance by up to 300%',
    'Ensure data security and compliance',
    'Reduce downtime and data loss risks',
    'Optimize storage and resource usage',
    'Enable real-time monitoring and alerts',
    'Simplify database management and maintenance'
  ];

  const services = [
    {
      title: 'Database Design',
      description: 'Custom database design and architecture planning',
      price: 'Starting at $3,000/month'
    },
    {
      title: 'Performance Tuning',
      description: 'Database performance optimization and tuning',
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions',
      price: 'Starting at $2,000/month'
    },
    {
      title: 'Database Migration',
      description: 'Seamless database migration and modernization',
      price: 'Starting at $4,000/month'
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
              Database Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your database performance, security, and reliability with professional database management solutions.
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
                Free Database Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Database Management Features</h2>
            <p className="text-xl text-gray-600">Comprehensive database solutions for modern businesses</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Database Management?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our database management solutions help you optimize performance, ensure data security,
                and maintain high availability while reducing operational complexity.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Database Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Performance Gain</span>
                  <span className="text-2xl font-bold text-green-600">+300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Downtime Reduction</span>
                  <span className="text-2xl font-bold text-blue-600">-95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Security Improvement</span>
                  <span className="text-2xl font-bold text-purple-600">+99%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Savings</span>
                  <span className="text-2xl font-bold text-orange-600">-50%</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Database Services</h2>
            <p className="text-xl text-gray-600">Comprehensive database management solutions</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Database Process</h2>
            <p className="text-xl text-gray-600">How we optimize your database management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive database assessment and performance analysis</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">Develop database optimization strategy and implementation plan</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Implement database optimizations and monitoring systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm">Continuous monitoring and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Database?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your database management needs.</p>
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
              Free Database Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatabaseManagementPage;