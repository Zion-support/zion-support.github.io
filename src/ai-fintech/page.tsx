import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CreditCard, BarChart, Shield, Zap, CheckCircle, Star, ArrowRight, Target, Users } from 'lucide-react';

const AIFintechPage: React.FC = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'AI-Powered Payments',
      description: 'Intelligent payment processing with fraud detection and risk assessment'
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Advanced AI analytics for investment decisions and market predictions'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-driven risk assessment and compliance monitoring systems'
    },
    {
      icon: Zap,
      title: 'Automated Trading',
      description: 'AI-powered algorithmic trading and portfolio management'
    }
  ];

  const benefits = [
    'Improve fraud detection accuracy by 95%',
    'Reduce processing time by 80%',
    'Enhance risk assessment capabilities',
    'Automate compliance monitoring',
    'Increase trading efficiency by 300%',
    'Provide personalized financial advice'
  ];

  const services = [
    {
      title: 'Payment Processing AI',
      description: 'AI-powered payment processing with fraud detection',
      price: 'Starting at $10,000/month'
    },
    {
      title: 'Investment Analytics',
      description: 'AI-driven investment analysis and portfolio optimization',
      price: 'Starting at $15,000/month'
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive AI risk assessment and compliance solutions',
      price: 'Starting at $12,000/month'
    },
    {
      title: 'Trading Algorithms',
      description: 'Custom AI trading algorithms and automated systems',
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
              AI Fintech Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform financial services with AI-powered solutions that enhance security, improve efficiency, and deliver personalized experiences.
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
                Free Fintech Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Fintech Features</h2>
            <p className="text-xl text-gray-600">Advanced AI capabilities for financial services</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AI Fintech?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI fintech solutions are designed to enhance security, improve efficiency,
                and provide personalized financial services while maintaining regulatory compliance.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fintech Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Fraud Detection</span>
                  <span className="text-2xl font-bold text-green-600">+95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Processing Speed</span>
                  <span className="text-2xl font-bold text-blue-600">+80%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Risk Accuracy</span>
                  <span className="text-2xl font-bold text-purple-600">+90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Trading Efficiency</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fintech Services</h2>
            <p className="text-xl text-gray-600">Comprehensive AI solutions for financial services</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
            <p className="text-xl text-gray-600">Built with financial regulations and compliance in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PCI DSS Compliant</h3>
              <p className="text-gray-600">Full compliance with payment card industry standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">GDPR Ready</h3>
              <p className="text-gray-600">Data protection compliance for European markets</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOX Compliant</h3>
              <p className="text-gray-600">Sarbanes-Oxley compliance for public companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Financial Services with AI?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your fintech AI requirements.</p>
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
              Free Fintech Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIFintechPage;