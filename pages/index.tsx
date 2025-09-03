import React from 'react';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation, predictive analytics, and AI-powered solutions.',
      icon: '🤖',
      link: '/services/ai-services'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, DevOps implementation, and modern deployment strategies.',
      icon: '☁️',
      link: '/services/it-services'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Build and launch successful micro SaaS applications with our comprehensive development services.',
      icon: '🚀',
      link: '/services/micro-saas'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with comprehensive security solutions and threat monitoring.',
      icon: '🛡️',
      link: '/services/it-services'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks.',
      icon: '📱',
      link: '/services/it-services'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights with advanced analytics and business intelligence.',
      icon: '📊',
      link: '/services/it-services'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <Layout 
      title="Zion Tech Group - Leading Technology Solutions Provider" 
      description="Transform your business with cutting-edge technology solutions. From AI development to cloud architecture, we help companies succeed in the digital landscape."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Business with Technology</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Leading technology solutions provider helping businesses leverage AI, cloud architecture, and innovative development services for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/services" 
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs and growth objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href={service.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help transform your business and drive growth.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
