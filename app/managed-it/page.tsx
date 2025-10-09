import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Clock, Shield, Zap, Phone, Mail, MapPin, Star, Users, TrendingUp } from 'lucide-react';

const ManagedITPage: React.FC = () => {
  const services = [
    {
      title: '24/7 System Monitoring',
      description: 'Continuous monitoring of your IT infrastructure with instant alerts and proactive issue resolution',
      features: ['Real-time monitoring', 'Automated alerts', 'Proactive maintenance', 'Performance optimization'],
      icon: '🔍'
    },
    {
      title: 'Help Desk Support',
      description: 'Dedicated support team available 24/7 to resolve any IT issues quickly and efficiently',
      features: ['24/7 availability', 'Multi-channel support', 'Fast response times', 'Expert technicians'],
      icon: '🎧'
    },
    {
      title: 'Security Management',
      description: 'Comprehensive security services including threat detection, prevention, and incident response',
      features: ['Threat monitoring', 'Security updates', 'Incident response', 'Compliance management'],
      icon: '🛡️'
    },
    {
      title: 'Backup & Recovery',
      description: 'Automated backup solutions with guaranteed data recovery and business continuity planning',
      features: ['Automated backups', 'Data encryption', 'Quick recovery', 'Business continuity'],
      icon: '💾'
    },
    {
      title: 'Software Management',
      description: 'Complete software lifecycle management including installation, updates, and license management',
      features: ['Software deployment', 'License management', 'Update automation', 'Compliance tracking'],
      icon: '📦'
    },
    {
      title: 'Network Management',
      description: 'Network infrastructure monitoring, optimization, and maintenance for optimal performance',
      features: ['Network monitoring', 'Performance optimization', 'Bandwidth management', 'Troubleshooting'],
      icon: '🌐'
    }
  ];

  const benefits = [
    {
      title: 'Reduced IT Costs',
      description: 'Save up to 40% on IT expenses with our comprehensive managed services',
      value: '40%'
    },
    {
      title: 'Improved Uptime',
      description: 'Achieve 99.9% uptime with proactive monitoring and maintenance',
      value: '99.9%'
    },
    {
      title: 'Faster Response',
      description: 'Average response time of under 15 minutes for critical issues',
      value: '<15 min'
    },
    {
      title: 'Enhanced Security',
      description: 'Reduce security incidents by 90% with our comprehensive security management',
      value: '90%'
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Managed IT Services - Zion Tech Group | 24/7 IT Support</title>
        <meta name="description" content="Comprehensive managed IT services including 24/7 monitoring, help desk support, security management, and backup solutions. Focus on your business while we manage your IT." />
        <meta name="keywords" content="managed IT services, IT support, 24/7 monitoring, help desk, IT security, backup solutions, network management" />
        <link rel="canonical" href="https://ziontechgroup.com/managed-it" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Managed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Focus on your business while we handle all your IT needs. 24/7 monitoring, support, and maintenance for optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive IT Management</h2>
              <p className="text-xl text-gray-300">Everything you need to keep your IT infrastructure running smoothly</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Managed IT Services?</h2>
              <p className="text-xl text-gray-300">Proven results and measurable benefits</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{benefit.value}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Levels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Service Levels</h2>
              <p className="text-xl text-gray-300">Choose the level of support that fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-6">$1,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    8x5 Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic Monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Monthly Reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email Support
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-white/10 text-white py-3 px-6 rounded-lg hover:bg-white/20 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400 shadow-2xl shadow-cyan-400/20">
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-6">$2,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced Monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Weekly Reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Phone & Email Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Security Management
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="w-full cyber-button py-3 px-6 rounded-lg text-center block"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-6">$5,000<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Dedicated Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Real-time Monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Daily Reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Multi-channel Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced Security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated Account Manager
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-white/10 text-white py-3 px-6 rounded-lg hover:bg-white/20 transition-colors text-center block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Simplify Your IT Management?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us handle your IT so you can focus on growing your business. Contact us today for a free consultation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.phone}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Middletown, DE</div>
                  <div className="text-gray-400 text-sm">Our location</div>
                </div>
              </div>
            </div>
            
            <a
              href="/contact"
              className="cyber-button inline-flex items-center text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ManagedITPage;