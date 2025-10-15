import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', name: 'All Services', icon: '🚀', count: 12 },
    { id: 'ai', name: 'AI Services', icon: '🤖', count: 6 },
    { id: 'it', name: 'IT Services', icon: '💻', count: 4 },
    { id: 'cloud', name: 'Cloud Solutions', icon: '☁️', count: 2 }
  ];

  const services = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI algorithms for blogs, social media, and marketing materials.',
      features: ['Automated content creation', 'SEO optimization', 'Multiple content formats', 'Brand voice consistency'],
      price: '$99/month',
      priceNote: 'per user',
      icon: '✍️',
      category: 'ai',
      badge: 'Popular'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      price: '$199/month',
      priceNote: 'up to 10GB',
      icon: '📊',
      category: 'ai'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Responsive design', 'Performance optimization', 'SEO friendly', 'Security features'],
      price: 'From $2,999',
      priceNote: 'one-time',
      icon: '🌐',
      category: 'it'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that provide reliability, security, and performance.',
      features: ['Auto-scaling', '99.9% uptime', 'Security compliance', '24/7 monitoring'],
      price: '$299/month',
      priceNote: 'starting',
      icon: '☁️',
      category: 'cloud'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot',
      description: 'Intelligent chatbots that provide 24/7 customer support and engagement.',
      features: ['Natural language processing', 'Multi-language support', 'Integration ready', 'Analytics dashboard'],
      price: '$149/month',
      priceNote: 'per bot',
      icon: '💬',
      category: 'ai'
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Cross-platform compatibility', 'Native performance', 'App store optimization', 'Push notifications'],
      price: 'From $4,999',
      priceNote: 'one-time',
      icon: '📱',
      category: 'it'
    }
  ];

  const getCurrentServices = () => {
    if (activeTab === 'all') return services;
    return services.filter(service => service.category === activeTab);
  };

  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI and IT services designed to accelerate your business growth."
        keywords="AI services, IT services, cloud solutions, digital transformation, business automation, technology consulting"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions tailored to accelerate your business growth and digital transformation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Services</h3>
                <p className="text-gray-600">
                  Complete IT solutions including web development, mobile apps, and system integration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-2xl">{tab.icon}</span>
                    <span>{tab.name}</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-sm">
                      {tab.count}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentServices().map((service, index) => (
                <div
                  key={service.id}
                  className="group relative card-futuristic p-8 hover:scale-105 transition-all duration-300"
                >
                  {/* Service Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-cyan-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Service Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-cyan-400">
                      {service.price}
                    </span>
                    {service.priceNote && (
                      <span className="text-gray-400 ml-2">{service.priceNote}</span>
                    )}
                  </div>

                  {/* Service Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`/contact?service=${service.id}`}
                      className="btn-futuristic flex-1 text-center"
                    >
                      Get Started
                    </a>
                    <a
                      href={`/services/${service.id}`}
                      className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                  </div>

                  {/* Service Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                        {service.badge}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can accelerate your digital transformation. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-futuristic">
                  Get Free Consultation
                </a>
                <a href="/pricing" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;