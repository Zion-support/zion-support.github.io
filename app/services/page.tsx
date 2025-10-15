import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', name: 'All Services', icon: '🚀', count: 25 },
    { id: 'ai', name: 'AI & ML', icon: '🤖', count: 12 },
    { id: 'it', name: 'IT Services', icon: '💻', count: 8 },
    { id: 'infrastructure', name: 'Infrastructure', icon: '☁️', count: 5 }
  ];

  const allServices = [
    // AI Services
    { id: 1, title: 'AI Content Generation', description: 'Automated content creation using advanced AI models', category: 'ai', icon: '✍️', features: ['Content Writing', 'SEO Optimization', 'Multi-language Support'] },
    { id: 2, title: 'Machine Learning Solutions', description: 'Custom ML models for your specific business needs', category: 'ai', icon: '🧠', features: ['Predictive Analytics', 'Pattern Recognition', 'Data Processing'] },
    { id: 3, title: 'Natural Language Processing', description: 'Advanced text analysis and language understanding', category: 'ai', icon: '💬', features: ['Sentiment Analysis', 'Text Classification', 'Language Translation'] },
    { id: 4, title: 'Computer Vision', description: 'Image and video analysis using AI technology', category: 'ai', icon: '👁️', features: ['Object Detection', 'Image Recognition', 'Video Analysis'] },
    { id: 5, title: 'AI Chatbots', description: 'Intelligent conversational agents for customer service', category: 'ai', icon: '🤖', features: ['24/7 Support', 'Multi-language', 'Context Awareness'] },
    { id: 6, title: 'Predictive Analytics', description: 'Data-driven insights for business forecasting', category: 'ai', icon: '📊', features: ['Trend Analysis', 'Risk Assessment', 'Performance Prediction'] },
    
    // IT Services
    { id: 7, title: 'Web Development', description: 'Modern, responsive websites and web applications', category: 'it', icon: '🌐', features: ['React/Next.js', 'Responsive Design', 'Performance Optimization'] },
    { id: 8, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications', category: 'it', icon: '📱', features: ['iOS & Android', 'Cross-platform', 'App Store Optimization'] },
    { id: 9, title: 'API Development', description: 'RESTful and GraphQL APIs for seamless integration', category: 'it', icon: '🔌', features: ['REST APIs', 'GraphQL', 'API Documentation'] },
    { id: 10, title: 'Database Management', description: 'Efficient database design and optimization', category: 'it', icon: '🗄️', features: ['Database Design', 'Performance Tuning', 'Data Migration'] },
    { id: 11, title: 'DevOps & Automation', description: 'Streamlined development and deployment processes', category: 'it', icon: '⚙️', features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'] },
    { id: 12, title: 'Cybersecurity', description: 'Comprehensive security solutions for your digital assets', category: 'it', icon: '🔒', features: ['Security Audits', 'Penetration Testing', 'Compliance'] },
    
    // Infrastructure
    { id: 13, title: 'Cloud Infrastructure', description: 'Scalable cloud solutions on AWS, Azure, and GCP', category: 'infrastructure', icon: '☁️', features: ['Auto-scaling', 'Load Balancing', 'Disaster Recovery'] },
    { id: 14, title: '5G Solutions', description: 'Next-generation network infrastructure and applications', category: 'infrastructure', icon: '📡', features: ['Network Optimization', 'IoT Integration', 'Edge Computing'] },
    { id: 15, title: 'Microservices Architecture', description: 'Scalable, maintainable microservices solutions', category: 'infrastructure', icon: '🔧', features: ['Service Mesh', 'API Gateway', 'Container Orchestration'] },
    { id: 16, title: 'Data Centers', description: 'On-premise and hybrid data center solutions', category: 'infrastructure', icon: '🏢', features: ['Hardware Setup', 'Network Configuration', 'Monitoring'] },
    { id: 17, title: 'Network Security', description: 'Advanced network protection and monitoring', category: 'infrastructure', icon: '🛡️', features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions'] }
  ];

  const getCurrentServices = () => {
    if (activeTab === 'all') return allServices;
    return allServices.filter(service => service.category === activeTab);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Zion Tech Group Services",
    "description": "Comprehensive AI and IT solutions for modern businesses",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "serviceType": ["AI Services", "IT Services", "Cloud Infrastructure", "Digital Transformation"],
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": allServices.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group | AI & IT Solutions"
        description="Comprehensive AI and IT services including machine learning, web development, cloud infrastructure, and digital transformation solutions."
        keywords={["AI services", "IT services", "web development", "cloud infrastructure", "machine learning", "digital transformation"]}
        url="https://ziontechgroup.com/services"
        type="website"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your digital transformation 
              and drive business growth through cutting-edge technology.
            </p>
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
                  onClick={() => setActiveTab(tab.id)}
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
              {getCurrentServices().map((service) => (
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

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
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
                <a 
                  href="/contact" 
                  className="btn-futuristic"
                >
                  Get Started Today
                </a>
                <a 
                  href="/pricing" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
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