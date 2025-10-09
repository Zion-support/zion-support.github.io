import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Star, ArrowRight, Target, Users, FileText, Lock } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const frameworks = [
    { name: 'GDPR', status: 'Implemented' },
    { name: 'CCPA', status: 'Implemented' },
    { name: 'HIPAA', status: 'Implemented' },
    { name: 'SOX', status: 'Implemented' },
    { name: 'PCI DSS', status: 'Implemented' },
    { name: 'NIST Framework', status: 'Implemented' }
  ];

  const complianceAreas = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Comprehensive data protection and privacy compliance solutions'
    },
    {
      icon: Lock,
      title: 'Security Compliance',
      description: 'Security frameworks and compliance monitoring systems'
    },
    {
      icon: FileText,
      title: 'Regulatory Reporting',
      description: 'Automated regulatory reporting and documentation'
    },
    {
      icon: Users,
      title: 'Audit Support',
      description: 'Complete audit support and compliance documentation'
    }
  ];

  const benefits = [
    'Ensure regulatory compliance across all jurisdictions',
    'Reduce compliance costs by up to 60%',
    'Automate compliance monitoring and reporting',
    'Minimize audit risks and penalties',
    'Maintain up-to-date compliance documentation',
    'Provide real-time compliance status monitoring'
  ];

  const services = [
    {
      title: 'Compliance Assessment',
      description: 'Comprehensive compliance assessment and gap analysis',
      price: 'Starting at $5,000/month'
    },
    {
      title: 'Implementation Support',
      description: 'Full implementation of compliance frameworks and controls',
      price: 'Starting at $8,000/month'
    },
    {
      title: 'Ongoing Monitoring',
      description: 'Continuous compliance monitoring and reporting',
      price: 'Starting at $3,000/month'
    },
    {
      title: 'Audit Preparation',
      description: 'Complete audit preparation and support services',
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
              Compliance Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive compliance solutions that ensure your business meets all regulatory requirements and industry standards.
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
                Free Compliance Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Compliance Frameworks</h2>
            <p className="text-xl text-gray-600">We support all major compliance frameworks and regulations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{framework.name}</h3>
                <p className="text-green-600 font-medium">{framework.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance Features</h2>
            <p className="text-xl text-gray-600">Comprehensive compliance management capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Compliance Solutions?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our compliance solutions help you navigate complex regulatory requirements,
                reduce compliance costs, and minimize audit risks while maintaining operational efficiency.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="text-2xl font-bold text-green-600">-60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Audit Success Rate</span>
                  <span className="text-2xl font-bold text-blue-600">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Compliance Coverage</span>
                  <span className="text-2xl font-bold text-purple-600">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time Savings</span>
                  <span className="text-2xl font-bold text-orange-600">+70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Compliance Services</h2>
            <p className="text-xl text-gray-600">Comprehensive compliance management solutions</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ensure Compliance?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your compliance requirements.</p>
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
              Free Compliance Audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompliancePage;