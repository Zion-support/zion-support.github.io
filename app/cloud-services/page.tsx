import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, ArrowRight, CheckCircle, Shield, Zap, BarChart3, Users, Clock } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const CloudServices = () => {
  const services = [
    {
      name: "Cloud Migration",
      price: "From $5,000",
      description: "Seamless migration to cloud platforms",
      features: [
        "Assessment and planning",
        "Data migration",
        "Application migration",
        "Testing and validation",
        "Go-live support"
      ]
    },
    {
      name: "Cloud Infrastructure",
      price: "From $99/month",
      description: "Managed cloud infrastructure services",
      features: [
        "Infrastructure setup",
        "Monitoring and maintenance",
        "Security management",
        "Backup and recovery",
        "24/7 support"
      ]
    },
    {
      name: "Cloud Optimization",
      price: "From $2,000",
      description: "Optimize your cloud costs and performance",
      features: [
        "Cost analysis",
        "Performance optimization",
        "Resource right-sizing",
        "Automation setup",
        "Ongoing monitoring"
      ]
    }
  ];

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs by up to 40% with our optimization strategies",
      icon: "💰"
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
      icon: "🔒"
    },
    {
      title: "Scalability",
      description: "Scale your infrastructure automatically based on demand",
      icon: "📈"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support from our cloud experts",
      icon: "🛠️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOOptimizer
        title="Cloud Services - Cloud Infrastructure & Migration | Zion Tech Group"
        description="Comprehensive cloud services including migration, infrastructure management, and optimization. From $99/month. Contact us for consultation."
        keywords="cloud services, cloud migration, cloud infrastructure, AWS, Azure, Google Cloud, cloud optimization"
      />
      
      <Helmet>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Cloud className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Cloud Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud services. We provide migration, 
              infrastructure management, and optimization solutions for all major cloud platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive cloud solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your cloud strategy and create a solution that transforms your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/consultation"
              className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="font-semibold text-white mb-2">Phone</div>
              <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Address</div>
              <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;