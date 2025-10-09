import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Network, Zap, Shield, BarChart, Settings, Users } from 'lucide-react';

const NetworkingPage: React.FC = () => {
  const networkingServices = [
    {
      title: 'Network Design & Architecture',
      description: 'Comprehensive network design and architecture services for optimal performance and security.',
      icon: '🏗️',
      price: '$2,999/month',
      features: ['Network design', 'Topology planning', 'Security architecture', 'Scalability planning', 'Performance optimization'],
      benefits: ['Improve performance by 200%', 'Reduce costs by 30%', 'Enhance security'],
      marketPrice: '$5,000-15,000/month',
      category: 'Design',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Meraki']
    },
    {
      title: 'Network Security & Firewall',
      description: 'Advanced network security services with firewall management and threat protection.',
      icon: '🔒',
      price: '$2,499/month',
      features: ['Firewall management', 'Intrusion detection', 'VPN setup', 'Access control', 'Threat monitoring'],
      benefits: ['Prevent security breaches', 'Meet compliance requirements', 'Reduce security risks'],
      marketPrice: '$4,000-12,000/month',
      category: 'Security',
      technologies: ['Palo Alto', 'Fortinet', 'Cisco ASA', 'Check Point', 'SonicWall']
    },
    {
      title: 'Network Monitoring & Management',
      description: 'Comprehensive network monitoring and management services with 24/7 support.',
      icon: '📊',
      price: '$1,999/month',
      features: ['24/7 monitoring', 'Performance tracking', 'Alert management', 'Incident response', 'Reporting'],
      benefits: ['Improve uptime by 99.9%', 'Proactive issue detection', 'Better performance'],
      marketPrice: '$3,500-10,000/month',
      category: 'Monitoring',
      technologies: ['SolarWinds', 'PRTG', 'Nagios', 'Zabbix', 'Custom Tools']
    },
    {
      title: 'Wireless Network Solutions',
      description: 'Enterprise wireless network design, deployment, and management services.',
      icon: '📶',
      price: '$1,799/month',
      features: ['WiFi design', 'Access point deployment', 'Performance optimization', 'Security configuration', 'Management'],
      benefits: ['Improve coverage by 95%', 'Enhance security', 'Better user experience'],
      marketPrice: '$3,000-8,000/month',
      category: 'Wireless',
      technologies: ['Cisco Meraki', 'Aruba', 'Ruckus', 'Ubiquiti', 'Fortinet']
    }
  ];

  const categories = [...new Set(networkingServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Networking Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive networking services including design, security, monitoring, and wireless solutions for enterprise businesses." />
        <meta name="keywords" content="networking services, network design, network security, network monitoring, wireless networks" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Networking Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Build and maintain robust network infrastructure with comprehensive networking services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Start Networking Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  View Networking Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Networking Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert networking solutions delivered by certified professionals with proven enterprise experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Network Expertise</h3>
                <p className="text-gray-600">Certified experts in all major networking technologies</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">Optimize network performance for maximum efficiency</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Enterprise-grade security with threat protection</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring</h3>
                <p className="text-gray-600">24/7 monitoring and proactive management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Advanced {category.toLowerCase()} services powered by state-of-the-art networking technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {networkingServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Get Networking Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Network?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our networking experts for a free consultation and optimization strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NetworkingPage;
