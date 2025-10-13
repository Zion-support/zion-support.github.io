import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Solutions',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning' },
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making' },
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding' },
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition' },
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities' },
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support' }
      ]
    },
    {
      title: 'IT Services',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'Cloud Infrastructure', price: '$1,200/month', description: 'Scalable cloud solutions for modern businesses' },
        { name: 'Cybersecurity Solutions', price: '$1,600/month', description: 'Comprehensive security solutions to protect your business' },
        { name: 'Database Management', price: '$900/month', description: 'Optimized database solutions for performance and reliability' },
        { name: 'API Development', price: '$1,100/month', description: 'Custom API development and integration services' },
        { name: 'System Integration', price: '$1,300/month', description: 'Seamless integration of existing systems and platforms' },
        { name: 'IT Consulting', price: '$800/month', description: 'Strategic IT consulting and technology planning' }
      ]
    },
    {
      title: 'Digital Transformation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Digital Strategy', price: '$2,000/month', description: 'Comprehensive digital transformation strategy and planning' },
        { name: 'Process Automation', price: '$1,400/month', description: 'Automate business processes for improved efficiency' },
        { name: 'Data Analytics', price: '$1,300/month', description: 'Advanced analytics solutions for data-driven decisions' },
        { name: 'Mobile App Development', price: '$1,500/month', description: 'Custom mobile applications for iOS and Android' },
        { name: 'Web Development', price: '$1,200/month', description: 'Modern web applications and e-commerce solutions' },
        { name: 'UI/UX Design', price: '$1,000/month', description: 'User-centered design for optimal user experience' }
      ]
    }
  ];

  const benefits = [
    'Expert team with 10+ years experience',
    '24/7 support and monitoring',
    'Scalable solutions that grow with your business',
    'Proven track record of success',
    'Cutting-edge technology and tools',
    'Competitive pricing and flexible plans'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, IT services, digital transformation, cloud solutions, cybersecurity, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business. 
            From AI consulting to digital transformation, we've got you covered.
          </p>
        </div>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Professional {category.title.toLowerCase()} solutions tailored to your needs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-green-400 mb-2">{service.price}</div>
                        <div className="text-sm text-gray-400">Starting price</div>
                      </div>

                      <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results with our proven approach and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;