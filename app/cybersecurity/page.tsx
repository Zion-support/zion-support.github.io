import React from 'react';
import SEOHead from '../components/SEOHead';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Analysis'],
      price: 'Starting at $2,999'
    },
    {
      title: 'Threat Detection & Response',
      description: '24/7 monitoring and rapid response to security threats',
      features: ['Real-time Monitoring', 'Incident Response', 'Threat Intelligence'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Security Training',
      description: 'Educate your team on cybersecurity best practices',
      features: ['Phishing Simulation', 'Security Awareness', 'Compliance Training'],
      price: 'Starting at $499/month'
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOC 2 Certification'],
      price: 'Starting at $3,999'
    }
  ];

  const threats = [
    'Phishing Attacks',
    'Ransomware',
    'Data Breaches',
    'Insider Threats',
    'DDoS Attacks',
    'Malware',
    'Social Engineering',
    'Zero-day Exploits'
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity solutions to protect your business from threats. Security assessment, threat detection, and compliance management."
        keywords="cybersecurity, security assessment, threat detection, compliance, data protection, security training"
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Solutions</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Protect your business from evolving cyber threats with our comprehensive security solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Services
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  Get Security Assessment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Landscape */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Threat Landscape</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cyber threats are evolving rapidly. Stay protected with our advanced security solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">⚠️</div>
                <h3 className="font-semibold text-gray-900">{threat}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="text-2xl font-bold text-red-600">{service.price}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href="/contact" 
                      className="flex-1 bg-red-600 text-white text-center py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Get Started
                    </a>
                    <a 
                      href="/contact" 
                      className="flex-1 border border-red-600 text-red-600 text-center py-3 px-4 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Stats */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Security Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide enterprise-grade security with proven results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">&lt; 5min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">1000+</div>
                <div className="text-gray-300">Threats Blocked</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Don't Wait for a Breach</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a comprehensive security assessment and protect your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Security Assessment
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityPage;