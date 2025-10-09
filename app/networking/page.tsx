import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Network, Zap, Shield, BarChart } from 'lucide-react';

const NetworkingPage: React.FC = () => {
  const networkingServices = [
    {
      title: 'Network Design & Architecture',
      description: 'Custom network design and architecture for optimal performance and security.',
      icon: '🏗️',
      price: 'Starting at $5,000/project',
      features: ['Network topology design', 'Security architecture', 'Scalability planning', 'Performance optimization'],
      benefits: ['Improve network performance', 'Enhance security', 'Reduce costs'],
      category: 'Design'
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network security including firewalls, VPNs, and threat protection.',
      icon: '🔒',
      price: 'Starting at $3,500/month',
      features: ['Firewall configuration', 'VPN setup', 'Intrusion detection', 'Security monitoring'],
      benefits: ['Protect against threats', 'Secure remote access', 'Comply with regulations'],
      category: 'Security'
    },
    {
      title: 'Network Monitoring',
      description: '24/7 network monitoring and performance optimization services.',
      icon: '📊',
      price: 'Starting at $2,000/month',
      features: ['Real-time monitoring', 'Performance alerts', 'Traffic analysis', 'Capacity planning'],
      benefits: ['Prevent downtime', 'Optimize performance', 'Plan for growth'],
      category: 'Monitoring'
    },
    {
      title: 'Wireless Network Setup',
      description: 'Enterprise-grade wireless network design and implementation.',
      icon: '📶',
      price: 'Starting at $4,000/project',
      features: ['WiFi 6/6E deployment', 'Access point placement', 'Security configuration', 'Performance tuning'],
      benefits: ['Improve connectivity', 'Enhance security', 'Support more devices'],
      category: 'Wireless'
    },
    {
      title: 'Cloud Networking',
      description: 'Hybrid and multi-cloud network architecture and management.',
      icon: '☁️',
      price: 'Starting at $4,500/month',
      features: ['Cloud connectivity', 'Hybrid cloud setup', 'Load balancing', 'Traffic management'],
      benefits: ['Improve cloud performance', 'Reduce latency', 'Enhance security'],
      category: 'Cloud'
    },
    {
      title: 'Network Consulting',
      description: 'Strategic network planning and optimization consulting services.',
      icon: '💡',
      price: 'Starting at $3,000/month',
      features: ['Network assessment', 'Technology recommendations', 'Implementation planning', 'Training'],
      benefits: ['Optimize network strategy', 'Reduce costs', 'Improve efficiency'],
      category: 'Consulting'
    }
  ];

  const categories = [...new Set(networkingServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Networking Services - Zion Tech Group</title>
        <meta name="description" content="Professional networking services including design, security, monitoring, wireless, and cloud networking solutions." />
        <meta name="keywords" content="networking services, network design, network security, wireless networks, cloud networking, network monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Networking Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Build secure, high-performance networks for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Get Network Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  View Network Solutions
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
                Expert network engineers with proven experience in enterprise networking
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Network Experts</h3>
                <p className="text-gray-600">Certified engineers with 10+ years experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
                <p className="text-gray-600">Optimize for speed and reliability</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Focus</h3>
                <p className="text-gray-600">Enterprise-grade security and protection</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
                <p className="text-gray-600">Round-the-clock network monitoring</p>
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
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} solutions for your network infrastructure
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
                        <div className="text-2xl font-bold text-indigo-600 mb-2">{service.price}</div>
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
                        Get Network Consultation
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
              Contact our network experts for a free consultation and optimization strategy
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
