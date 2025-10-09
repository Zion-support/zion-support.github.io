import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Users, Zap, CheckCircle, Star, ArrowRight, Building, Target, BarChart } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Comprehensive AI and IT solutions designed for large-scale enterprise operations',
      benefits: ['Scalable architecture', 'Enterprise integration', 'Custom development']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection',
      benefits: ['Data protection', 'Compliance', 'Secure operations']
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 dedicated support team with enterprise-level service guarantees',
      benefits: ['Priority support', 'Dedicated account manager', 'SLA guarantees']
    },
    {
      icon: Zap,
      title: 'Custom Development',
      description: 'Tailored solutions built specifically for your enterprise requirements',
      benefits: ['Custom features', 'Integration', 'Scalability']
    }
  ];

  const benefits = [
    'Scale AI solutions across your entire organization',
    'Integrate with existing enterprise systems seamlessly',
    'Ensure compliance with industry regulations',
    'Get dedicated support and account management',
    'Customize solutions to your specific needs',
    'Achieve enterprise-level security and reliability'
  ];

  const services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development for enterprise transformation',
      price: 'Starting at $15,000/month'
    },
    {
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions built for your specific enterprise needs',
      price: 'Starting at $25,000/month'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamless integration with your existing enterprise systems',
      price: 'Starting at $10,000/month'
    },
    {
      title: 'Managed AI Services',
      description: 'Fully managed AI operations with 24/7 monitoring and support',
      price: 'Starting at $20,000/month'
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
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with AI-powered solutions designed for scale, security, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Features</h2>
            <p className="text-xl text-gray-600">Built for enterprise scale and requirements</p>
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
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-500 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Enterprise Solutions?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our enterprise solutions are designed to meet the complex needs of large organizations,
                providing scalability, security, and reliability at every level.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Operational Efficiency</span>
                  <span className="text-2xl font-bold text-green-600">+250%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="text-2xl font-bold text-blue-600">-40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time to Market</span>
                  <span className="text-2xl font-bold text-purple-600">-60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">ROI Improvement</span>
                  <span className="text-2xl font-bold text-orange-600">+300%</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for enterprise transformation</p>
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
                  Contact Sales
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Enterprise Process</h2>
            <p className="text-xl text-gray-600">How we deliver enterprise-grade solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive analysis of your enterprise needs and current systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy & Planning</h3>
              <p className="text-gray-600 text-sm">Develop comprehensive strategy and implementation roadmap</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development & Integration</h3>
              <p className="text-gray-600 text-sm">Build and integrate solutions with your enterprise systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Support</h3>
              <p className="text-gray-600 text-sm">Deploy solutions and provide ongoing enterprise support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl mb-8">Contact our enterprise team to discuss your transformation needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Contact Sales
            </Link>
            <Link
              to="/consultation"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePage;