import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud, Code, Database, Shield } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for business automation and intelligence.",
      link: "/ai-solutions"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      link: "/cybersecurity"
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      link: "/cloud-services"
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      title: "5G Technology",
      description: "Next-generation 5G infrastructure and implementation services.",
      link: "/5g-solutions"
    },
    {
      icon: <Database className="w-8 h-8 text-red-400" />,
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence solutions.",
      link: "/data-analytics"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services to transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your project requirements
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;