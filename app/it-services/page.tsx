import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Server, Shield, Cloud, Database, Network, Settings, ArrowRight, CheckCircle, Star } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'IT Infrastructure',
      description: 'Comprehensive IT infrastructure solutions for enterprise-scale operations.',
      features: ['Server management', 'Network design', 'Hardware optimization', '24/7 monitoring'],
      price: 'Starting at $5,000/month',
      url: '/it-infrastructure',
      icon: Server
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Advanced security solutions to protect your business from cyber threats.',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response'],
      price: 'Starting at $3,500/month',
      url: '/cybersecurity',
      icon: Shield
    },
    {
      title: 'Cloud Services',
      description: 'Seamless cloud migration and management for scalable business growth.',
      features: ['Cloud migration', 'Multi-cloud strategy', 'Cost optimization', 'Security compliance'],
      price: 'Starting at $4,000/month',
      url: '/cloud-services',
      icon: Cloud
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with modern DevOps practices.',
      features: ['Automated deployment', 'CI/CD pipelines', 'Container orchestration', 'Performance monitoring'],
      price: 'Starting at $6,000/month',
      url: '/devops',
      icon: Settings
    },
    {
      title: 'Database Management',
      description: 'Optimize and secure your data with professional database management.',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', 'Scalability planning'],
      price: 'Starting at $2,500/month',
      url: '/database',
      icon: Database
    },
    {
      title: 'Network Solutions',
      description: 'Enterprise-grade networking solutions for reliable connectivity.',
      features: ['Network design', 'Security implementation', 'Performance optimization', '24/7 support'],
      price: 'Starting at $3,000/month',
      url: '/networking',
      icon: Network
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '99.9% Uptime',
      description: 'Guaranteed system availability with our robust infrastructure and monitoring.'
    },
    {
      icon: Settings,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly.'
    },
    {
      icon: Cloud,
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business needs and requirements.'
    },
    {
      icon: Database,
      title: 'Data Security',
      description: 'Enterprise-grade security measures to protect your valuable data assets.'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Enterprise Solutions Ltd.',
      role: 'IT Director',
      content: 'Zion Tech Group transformed our IT infrastructure. We achieved 99.9% uptime and reduced costs by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'TechStart Inc.',
      role: 'CTO',
      content: 'Their cybersecurity solutions protected us from multiple threats. Professional and reliable service.',
      rating: 5
    },
    {
      name: 'Robert Johnson',
      company: 'DataCorp Systems',
      role: 'Operations Manager',
      content: 'The cloud migration was seamless. We saved 50% on infrastructure costs while improving performance.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and DevOps. Reliable IT support for your business." />
        <meta name="keywords" content="IT services, infrastructure management, cybersecurity, cloud solutions, DevOps, network management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive IT services to keep your business running smoothly. From infrastructure management 
                to cybersecurity, we provide reliable solutions that scale with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Get IT Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 font-semibold border border-slate-700"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Our IT Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our IT Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-blue-400 font-semibold mb-6">{service.price}</div>
                  
                  <Link
                    to={service.url}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-2xl p-12 text-center backdrop-blur-sm border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your IT Infrastructure?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert IT team help you build a robust, secure, and scalable technology foundation for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Get IT Assessment
                </Link>
                <Link
                  to="/case-studies"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 font-semibold border border-slate-700"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;