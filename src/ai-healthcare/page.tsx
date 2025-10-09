import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Stethoscope, Brain, Shield, CheckCircle, Star, ArrowRight, Users, Zap } from 'lucide-react';

const AIHealthcarePage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Medical Diagnosis AI',
      description: 'Advanced AI systems for accurate medical diagnosis and treatment recommendations'
    },
    {
      icon: Stethoscope,
      title: 'Patient Monitoring',
      description: 'Real-time patient monitoring and health tracking using AI-powered sensors'
    },
    {
      icon: Brain,
      title: 'Drug Discovery',
      description: 'AI-powered drug discovery and development for faster, more effective treatments'
    },
    {
      icon: Shield,
      title: 'Healthcare Security',
      description: 'Enterprise-grade security and compliance for sensitive healthcare data'
    }
  ];

  const benefits = [
    'Improve diagnostic accuracy by up to 95%',
    'Reduce treatment costs by 40%',
    'Accelerate drug discovery by 300%',
    'Enhance patient outcomes significantly',
    'Ensure HIPAA compliance and data security',
    'Enable personalized medicine approaches'
  ];

  const services = [
    {
      title: 'Medical AI Solutions',
      description: 'Custom AI systems for medical diagnosis and treatment',
      price: 'Starting at $15,000/month'
    },
    {
      title: 'Healthcare Analytics',
      description: 'AI-powered analytics for healthcare data insights',
      price: 'Starting at $8,000/month'
    },
    {
      title: 'Patient Management',
      description: 'AI-driven patient management and monitoring systems',
      price: 'Starting at $12,000/month'
    },
    {
      title: 'Drug Development',
      description: 'AI solutions for pharmaceutical research and development',
      price: 'Starting at $25,000/month'
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
              AI Healthcare Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-powered solutions that improve patient outcomes and operational efficiency.
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
                Free Healthcare Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Healthcare Features</h2>
            <p className="text-xl text-gray-600">Advanced AI capabilities for healthcare transformation</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AI Healthcare?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI healthcare solutions are designed to improve patient care, reduce costs,
                and enhance operational efficiency while maintaining the highest standards of security and compliance.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Healthcare Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Diagnostic Accuracy</span>
                  <span className="text-2xl font-bold text-green-600">+95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="text-2xl font-bold text-blue-600">-40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Treatment Speed</span>
                  <span className="text-2xl font-bold text-purple-600">+300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Patient Satisfaction</span>
                  <span className="text-2xl font-bold text-orange-600">+85%</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Services</h2>
            <p className="text-xl text-gray-600">Comprehensive AI solutions for healthcare organizations</p>
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

      {/* Compliance Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Compliance & Security</h2>
            <p className="text-xl text-gray-600">Built with healthcare regulations and security in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600">Full compliance with healthcare data protection regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FDA Approved</h3>
              <p className="text-gray-600">Solutions that meet FDA requirements for medical devices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure by Design</h3>
              <p className="text-gray-600">Enterprise-grade security built into every solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare with AI?</h2>
          <p className="text-xl mb-8">Contact us today to learn how AI can revolutionize your healthcare organization.</p>
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
              Free Healthcare Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIHealthcarePage;