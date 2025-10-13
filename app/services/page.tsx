import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Circle, Star, Right, Brain, Zap, Shield, Cloud, Smartphone, Database, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: Brain,
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
      title: 'IT Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with zero downtime' },
        { name: 'Cloud Architecture', price: '$2,200/month', description: 'Scalable and secure cloud infrastructure design and implementation' },
        { name: 'DevOps & CI/CD', price: '$1,800/month', description: 'Automated deployment pipelines and infrastructure as code' },
        { name: 'Server Management', price: '$1,200/month', description: '24/7 server monitoring, maintenance, and optimization' },
        { name: 'Database Management', price: '$1,500/month', description: 'Database design, optimization, and performance tuning' },
        { name: 'Backup & Recovery', price: '$800/month', description: 'Comprehensive data backup and disaster recovery solutions' }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: Shield,
      services: [
        { name: 'Security Assessment', price: '$2,000/month', description: 'Comprehensive security audit and vulnerability assessment' },
        { name: 'Threat Monitoring', price: '$1,600/month', description: '24/7 security monitoring and threat detection' },
        { name: 'Penetration Testing', price: '$1,800/month', description: 'Ethical hacking and security testing services' },
        { name: 'Compliance Management', price: '$1,400/month', description: 'GDPR, HIPAA, and other regulatory compliance support' },
        { name: 'Security Training', price: '$1,000/month', description: 'Employee security awareness and training programs' },
        { name: 'Incident Response', price: '$2,500/month', description: 'Rapid response and recovery from security incidents' }
      ]
    },
    {
      title: 'Digital Transformation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: Zap,
      services: [
        { name: 'Digital Strategy', price: '$2,800/month', description: 'Comprehensive digital transformation roadmap and strategy' },
        { name: 'Process Automation', price: '$1,600/month', description: 'Business process automation and workflow optimization' },
        { name: 'Data Analytics', price: '$1,900/month', description: 'Advanced analytics and business intelligence solutions' },
        { name: 'Mobile App Development', price: '$2,200/month', description: 'Native and cross-platform mobile application development' },
        { name: 'Web Development', price: '$1,500/month', description: 'Modern web applications and e-commerce solutions' },
        { name: 'API Development', price: '$1,200/month', description: 'RESTful APIs and microservices architecture' }
      ]
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Custom Solutions',
    'Proven Track Record',
    'Scalable Architecture',
    'Security First',
    'Cost Effective'
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services to transform your business. From AI solutions to cloud infrastructure and cybersecurity." />
        <meta name="keywords" content="AI services, IT services, cloud infrastructure, cybersecurity, digital transformation" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business 
                and drive sustainable growth in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div key={categoryIndex} className="bg-slate-800/50 rounded-3xl p-8">
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center mr-6`}>
                        <Icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {category.title}
                        </h2>
                        <p className="text-gray-300">
                          Comprehensive solutions to meet your {category.title.toLowerCase()} needs
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
                          <h3 className="text-xl font-semibold text-white mb-3">
                            {service.name}
                          </h3>
                          <div className="text-2xl font-bold text-cyan-400 mb-3">
                            {service.price}
                          </div>
                          <p className="text-gray-300 mb-4">
                            {service.description}
                          </p>
                          <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                            Learn More
                            <Right className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value through our expertise, innovation, and commitment to your success
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your business goals 
                and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <Right className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;