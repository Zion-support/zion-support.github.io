import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Circle, Right } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Circle className="w-6 h-6" />,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting'],
      price: 'Starting at $1,500',
      category: 'AI Services'
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Monitoring', 'Security'],
      price: 'Starting at $800',
      category: 'Cloud Services'
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: ['Security Audit', 'Penetration Testing', 'Incident Response', 'Compliance', 'Training'],
      price: 'Starting at $1,200',
      category: 'Security Services'
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our analytics solutions.',
      features: ['Data Visualization', 'Business Intelligence', 'Reporting', 'Dashboard Creation', 'Data Mining'],
      price: 'Starting at $900',
      category: 'Analytics Services'
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Database Design', 'Performance Optimization'],
      price: 'Starting at $1,000',
      category: 'Development Services'
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
      price: 'Starting at $1,300',
      category: 'Mobile Services'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="AI services, cloud computing, cybersecurity, data analytics, web development, mobile development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to help your business thrive in the digital age.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <div className="mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <Circle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    Learn More
                    <Right className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your project and discover how our services can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Get Started
                  <Right className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;