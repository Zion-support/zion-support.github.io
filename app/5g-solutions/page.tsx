import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Network, Zap, Shield, Globe, BarChart3, CheckCircle, ArrowRight, Cpu, Smartphone } from 'lucide-react';

export default function FiveGSolutions() {
  const solutions = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity.',
      features: ['Network planning', 'Tower deployment', 'Signal optimization', 'Coverage mapping'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: '5G IoT Solutions',
      description: 'Connect millions of devices with 5G-powered IoT infrastructure and management.',
      features: ['Device connectivity', 'Data management', 'Real-time monitoring', 'Edge computing'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5G for ultra-low latency applications.',
      features: ['Edge servers', 'Latency optimization', 'Local processing', 'Real-time analytics'],
      link: '/5g-edge-computing'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: '5G Private Networks',
      description: 'Secure, dedicated 5G networks for enterprise and industrial applications.',
      features: ['Private infrastructure', 'Enhanced security', 'Custom configuration', 'Dedicated resources'],
      link: '/5g-private-networks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      title: '5G Mobile Applications',
      description: 'Develop next-generation mobile apps that harness the power of 5G connectivity.',
      features: ['AR/VR apps', 'Real-time streaming', 'Cloud gaming', 'Instant sync'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G network performance and user behavior insights.',
      features: ['Network analytics', 'User insights', 'Performance metrics', 'Predictive analysis'],
      link: '/5g-data-analytics'
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network infrastructure, IoT, edge computing, and mobile applications." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">5G Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G technology solutions to transform your business with ultra-fast connectivity, 
              real-time analytics, and next-generation applications.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={solution.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Embrace 5G?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our 5G solutions can accelerate your digital transformation and unlock new possibilities.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}