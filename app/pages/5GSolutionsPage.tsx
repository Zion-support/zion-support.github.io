import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Smartphone, Car, Building, Zap, Globe } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Wifi,
      title: '5G Network Infrastructure',
      description: 'Deploy and manage high-performance 5G networks for your organization.',
      features: ['Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Monitoring'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: '5G Mobile Applications',
      description: 'Develop mobile applications that leverage 5G capabilities.',
      features: ['App Development', '5G Integration', 'Performance Testing', 'Deployment'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Car,
      title: '5G IoT Solutions',
      description: 'Connect and manage IoT devices with 5G technology.',
      features: ['Device Management', 'Data Analytics', 'Real-time Monitoring', 'Scalability'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Building,
      title: 'Smart City Solutions',
      description: 'Transform cities with 5G-powered smart infrastructure.',
      features: ['Traffic Management', 'Energy Optimization', 'Public Safety', 'Citizen Services'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Implement edge computing solutions for ultra-low latency applications.',
      features: ['Edge Deployment', 'Data Processing', 'Real-time Analytics', 'Optimization'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Private 5G Networks',
      description: 'Deploy private 5G networks for enterprise applications.',
      features: ['Network Planning', 'Security Implementation', 'Custom Solutions', 'Support'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network infrastructure, mobile applications, IoT, smart cities, and edge computing." />
        <meta name="keywords" content="5G solutions, 5G network, mobile applications, IoT, smart cities, edge computing, private networks" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">5G Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of 5G technology to transform your business and enable next-generation applications.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our 5G Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-slate-900 p-8 rounded-lg hover:bg-slate-800 transition-colors group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Embrace 5G?
              </h2>
              <p className="text-xl text-white mb-8">
                Let's discuss how our 5G solutions can transform your business and enable new possibilities.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
