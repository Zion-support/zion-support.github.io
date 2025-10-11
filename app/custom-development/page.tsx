import React from 'react';
import { CheckCircle, Code, Database, Globe, ArrowRight, Users, Clock, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CustomDevelopmentPage: React.FC = () => {
  const developmentServices = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React/Vue/Angular', 'Node.js/Python', 'Responsive design', 'API integration'],
      pricing: 'Starting at $5,000',
      duration: '4-8 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Backend Systems',
      description: 'Robust backend systems and APIs to power your applications.',
      features: ['RESTful APIs', 'Microservices', 'Database design', 'Cloud deployment'],
      pricing: 'Starting at $3,000',
      duration: '3-6 weeks'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'E-commerce Solutions',
      description: 'Custom e-commerce platforms tailored to your business needs.',
      features: ['Payment integration', 'Inventory management', 'Order processing', 'Admin dashboard'],
      pricing: 'Starting at $8,000',
      duration: '6-12 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enterprise Software',
      description: 'Large-scale enterprise applications with advanced security and scalability.',
      features: ['Multi-tenant architecture', 'Advanced security', 'Scalable infrastructure', 'Integration'],
      pricing: 'Starting at $15,000',
      duration: '12-24 weeks'
    }
  ];

  const technologies = [
    {
      title: 'Frontend',
      items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'PHP']
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Cloud',
      items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Custom Development Services - Zion Tech Group</title>
        <meta name="description" content="Custom software development services including web applications, backend systems, e-commerce solutions, and enterprise software. Tailored solutions for your business." />
        <meta name="keywords" content="custom development, web applications, backend development, e-commerce, enterprise software, software development" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Custom Development Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into powerful software solutions with our custom development services. 
              We build applications that are tailored to your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Modern technologies and frameworks for robust applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">{tech.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Development Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive custom development solutions for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {developmentServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Custom Solution?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution 
                that perfectly fits your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Project Quote
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomDevelopmentPage;
