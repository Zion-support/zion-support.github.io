import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, CheckCircle, ArrowRight } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityServices = [
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation to identify vulnerabilities and risks.',
      features: [
        'Vulnerability scanning',
        'Penetration testing',
        'Security audit',
        'Risk assessment'
      ],
      benefits: [
        'Identify security gaps',
        'Compliance validation',
        'Risk mitigation',
        'Security roadmap'
      ],
      price: 'Starting at $2,500'
    },
    {
      icon: Lock,
      title: 'Security Implementation',
      description: 'End-to-end security solutions implementation and management.',
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'Access control systems',
        'Security monitoring'
      ],
      benefits: [
        '24/7 protection',
        'Real-time monitoring',
        'Automated responses',
        'Compliance assurance'
      ],
      price: 'Starting at $4,000/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Security Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business. Security assessment, implementation, and monitoring services." />
        <meta name="keywords" content="cybersecurity, security assessment, penetration testing, security implementation, data protection" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Security Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions. 
                We provide assessment, implementation, and monitoring services to keep your data secure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us for a free security consultation and customized protection plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SecurityPage;