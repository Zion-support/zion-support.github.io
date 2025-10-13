import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
        { name: 'Infrastructure Management', price: '$2,000/month', description: 'Complete IT infrastructure setup and ongoing management' },
        { name: 'Network Security', price: '$1,800/month', description: 'Comprehensive network security solutions and monitoring' },
        { name: 'Data Backup & Recovery', price: '$1,200/month', description: 'Reliable backup solutions and disaster recovery planning' },
        { name: 'Server Management', price: '$1,500/month', description: '24/7 server monitoring and maintenance services' },
        { name: 'IT Support', price: '$1,000/month', description: 'Round-the-clock technical support and troubleshooting' }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: Shield,
      services: [
        { name: 'Security Assessment', price: '$2,200/month', description: 'Comprehensive security audits and vulnerability assessments' },
        { name: 'Threat Monitoring', price: '$1,600/month', description: '24/7 threat detection and response services' },
        { name: 'Compliance Management', price: '$1,400/month', description: 'Help with GDPR, HIPAA, and other regulatory compliance' },
        { name: 'Penetration Testing', price: '$1,800/month', description: 'Regular security testing and vulnerability identification' },
        { name: 'Security Training', price: '$1,000/month', description: 'Employee security awareness and training programs' },
        { name: 'Incident Response', price: '$2,500/month', description: 'Rapid response to security incidents and breaches' }
      ]
    },
    {
      title: 'Digital Transformation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: Zap,
      services: [
        { name: 'Process Automation', price: '$2,800/month', description: 'Automate business processes for increased efficiency' },
        { name: 'Digital Strategy', price: '$2,000/month', description: 'Comprehensive digital transformation strategy development' },
        { name: 'Legacy System Modernization', price: '$3,500/month', description: 'Modernize outdated systems and technologies' },
        { name: 'Workflow Optimization', price: '$1,800/month', description: 'Optimize existing workflows for better performance' },
        { name: 'Change Management', price: '$1,600/month', description: 'Support for organizational change and adoption' },
        { name: 'Technology Integration', price: '$2,200/month', description: 'Seamless integration of new technologies' }
      ]
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Scalable Solutions',
    'Enterprise-Grade Security',
    'Rapid Deployment',
    'Cost-Effective Pricing',
    'Proven Track Record'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      role: 'CTO',
      content: 'Outstanding service and support. Their team delivered exactly what we needed on time and within budget.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'FutureTech',
      role: 'VP Engineering',
      content: 'The cloud infrastructure solution they provided has been rock solid. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including consulting, implementation, and support. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, IT services, cloud infrastructure, cybersecurity, digital transformation, consulting" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business. 
                From strategy to implementation, we're your trusted technology partner.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of technology services
              </p>
            </div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.title} className="bg-slate-800/30 rounded-2xl p-8">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={service.name}
                          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                        >
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {service.name}
                          </h4>
                          <p className="text-gray-300 text-sm mb-4">
                            {service.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-purple-400 font-medium">
                              {service.price}
                            </span>
                            <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                              Learn More
                              <Right className="w-4 h-4 ml-1" />
                            </button>
                          </div>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional value through our comprehensive approach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Circle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-purple-400 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View Our Demos
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;