import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, Zap, Users } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Advanced artificial intelligence solutions for business automation and optimization."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and migration services for modern businesses."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs and requirements."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Complete digital transformation strategies to modernize your business processes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting",
      description: "Expert IT consulting services to guide your technology decisions and strategy."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services including cloud computing, cybersecurity, and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services designed to help your business 
              thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-cyan-500/25 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;