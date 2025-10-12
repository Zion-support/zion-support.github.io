import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert guidance.',
      features: ['AWS/Azure/GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance', '24/7 support'],
      pricing: 'Starting at $5,000',
      link: '/cloud-migration',
      popular: true,
      category: 'Cloud'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security training', 'Compliance management', 'Incident response'],
      pricing: 'Starting at $2,500',
      link: '/cybersecurity',
      popular: true,
      category: 'Security'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure Management',
      description: 'Optimize and maintain your IT infrastructure for peak performance.',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Disaster recovery', 'Hardware management'],
      pricing: 'Starting at $1,500',
      link: '/infrastructure',
      popular: false,
      category: 'Infrastructure'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting', 'Data integration'],
      pricing: 'Starting at $3,000',
      link: '/data-analytics',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Custom Development',
      description: 'Build tailored software solutions for your specific business needs.',
      features: ['Full-stack development', 'API integration', 'Mobile apps', 'Web applications', 'System integration'],
      pricing: 'Starting at $8,000',
      link: '/custom-development',
      popular: true,
      category: 'Development'
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: 'Network Solutions',
      description: 'Design and implement robust network infrastructure.',
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Wireless solutions', 'VPN setup'],
      pricing: 'Starting at $4,000',
      link: '/network-solutions',
      popular: false,
      category: 'Networking'
    }
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business and adapts to changing needs',
      icon: <Server className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Optimized solutions that deliver maximum value for your investment',
      icon: <DollarSign className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech transformed our IT infrastructure. The migration was seamless and our systems are now more efficient than ever.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Outstanding cybersecurity implementation. Our data is now fully protected with comprehensive monitoring.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      content: 'The custom development team delivered exactly what we needed. Professional, reliable, and innovative.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FuturisticBackground />
      
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and custom development solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure, data analytics, custom development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              🚀 Enterprise IT Solutions
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your IT Infrastructure with
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Expert IT Services
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, 
            and custom development solutions tailored to your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NeonButton
              href="/contact"
              variant="primary"
              size="lg"
              className="group"
            >
              Get Started Today
            </NeonButton>
            <NeonButton
              href="/pricing"
              variant="secondary"
              size="lg"
            >
              View Pricing
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our IT Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs text-gray-400 ml-5">
                      +{service.features.length - 3} more features
                    </li>
                  )}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold text-white">{service.pricing}</span>
                  </div>
                  <Link 
                    to={service.link}
                    className="text-cyan-400 hover:text-purple-400 transition-colors flex items-center group-hover:translate-x-1 transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Our IT Services?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="text-center p-8 group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FuturisticCard className="p-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-400/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your IT Infrastructure?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of businesses already using our IT solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NeonButton
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Get Started
              </NeonButton>
              <NeonButton
                href="/ai-services"
                variant="secondary"
                size="lg"
              >
                Explore AI Services
              </NeonButton>
            </div>
          </FuturisticCard>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;