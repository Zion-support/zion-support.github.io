import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud Platform integration.',
      features: ['Cloud migration', 'Auto-scaling', 'Cost optimization', '24/7 monitoring'],
      pricing: 'Starting at $299/month',
      link: '/cloud-infrastructure',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response'],
      pricing: 'Starting at $199/month',
      link: '/cybersecurity',
      popular: true
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business requirements.',
      features: ['Custom development', 'API integration', 'Database design', 'Quality assurance'],
      pricing: 'Starting at $150/hour',
      link: '/software-development',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Database Management',
      description: 'Expert database administration and optimization services.',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services'],
      pricing: 'Starting at $99/month',
      link: '/database-management',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native development', 'Cross-platform', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development',
      popular: true
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: 'Server Management',
      description: 'Complete server administration and maintenance services.',
      features: ['Server setup', 'Performance monitoring', 'Security updates', 'Disaster recovery'],
      pricing: 'Starting at $149/month',
      link: '/server-management',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent billing',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business needs',
      icon: <Network className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'TechStart Inc.',
      content: 'Their cloud migration service was flawless. We saved 40% on infrastructure costs while improving performance.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'FinanceCorp',
      content: 'The cybersecurity team helped us achieve SOC 2 compliance in record time. Excellent service!',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'RetailMax',
      content: 'Our mobile app development project exceeded expectations. The team was professional and delivered on time.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, software development, and database management. Expert solutions for your business needs." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, software development, database management, server management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            <br />
            for Modern Businesses
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to keep your business running smoothly, securely, and efficiently. 
            From cloud infrastructure to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/it-services#services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions to support your business growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with certified IT professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that trust us with their IT needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses that trust us with their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/it-services#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
