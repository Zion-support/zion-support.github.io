import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Clock, DollarSign, Star, Target, Award, Zap, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GDPRPage: React.FC = () => {
  const gdprServices = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'GDPR Compliance Assessment',
      description: 'Comprehensive assessment of your current GDPR compliance status.',
      price: '$2,500/project',
      features: ['Data audit', 'Gap analysis', 'Risk assessment', 'Compliance roadmap']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Protection Implementation',
      description: 'Implement robust data protection measures and privacy controls.',
      price: '$5,000/project',
      features: ['Privacy by design', 'Data encryption', 'Access controls', 'Data minimization']
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Privacy Policy & Documentation',
      description: 'Create comprehensive privacy policies and documentation.',
      price: '$1,500/project',
      features: ['Privacy policy', 'Cookie policy', 'Data processing agreements', 'Consent forms']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Staff Training & Awareness',
      description: 'Train your staff on GDPR requirements and best practices.',
      price: '$1,200/project',
      features: ['Training programs', 'Awareness sessions', 'Compliance testing', 'Ongoing support']
    }
  ];

  const stats = [
    { number: '100%', label: 'GDPR Compliance', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Companies Helped', icon: <Users className="w-6 h-6 text-blue-400" /> },
    { number: '€0', label: 'Fines Incurred', icon: <DollarSign className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const gdprPrinciples = [
    { name: 'Lawfulness', description: 'Processing must be lawful, fair, and transparent' },
    { name: 'Purpose Limitation', description: 'Data collected for specified, explicit purposes' },
    { name: 'Data Minimization', description: 'Collect only necessary data for the purpose' },
    { name: 'Accuracy', description: 'Keep personal data accurate and up-to-date' },
    { name: 'Storage Limitation', description: 'Retain data only as long as necessary' },
    { name: 'Security', description: 'Ensure appropriate security of personal data' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance Services - Zion Tech Group</title>
        <meta name="description" content="Expert GDPR compliance services including assessment, implementation, training, and ongoing support. Ensure your business meets all GDPR requirements." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy policy, GDPR training, data security, compliance services" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                GDPR Compliance
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Expert GDPR compliance services to help your business meet all data protection 
              requirements and avoid costly fines. Ensure your data practices are fully compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">GDPR Compliance Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive GDPR compliance solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gdprServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Principles Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">GDPR Principles</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              The six key principles of GDPR that guide our compliance approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gdprPrinciples.map((principle, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{principle.name}</h3>
                <p className="text-gray-300 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Ensure GDPR Compliance?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's help you achieve full GDPR compliance and protect your business from fines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GDPRPage;