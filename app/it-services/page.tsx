'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Server,
  Code,
  BarChart,
  Users
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      category: 'Cloud',
      icon: Cloud,
      features: [
        'Cloud migration and optimization',
        'Multi-cloud strategy',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization',
        '24/7 monitoring and support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability by 300%',
        'Increase uptime to 99.9%'
      ],
      popular: true
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      category: 'Security',
      icon: Shield,
      features: [
        'Security assessment and auditing',
        'Threat detection and prevention',
        'Compliance management',
        'Incident response planning',
        'Security training and awareness',
        'Penetration testing'
      ],
      benefits: [
        'Reduce security incidents by 90%',
        'Improve compliance by 100%',
        'Enhance threat detection by 85%'
      ],
      popular: true
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services',
      category: 'Database',
      icon: Database,
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery solutions',
        'Data migration services',
        'Security hardening',
        'Monitoring and maintenance'
      ],
      benefits: [
        'Improve performance by 200%',
        'Reduce downtime by 95%',
        'Enhance data security by 100%'
      ],
      popular: false
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      category: 'Development',
      icon: Smartphone,
      features: [
        'Native iOS and Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Analytics integration'
      ],
      benefits: [
        'Reach 2x more customers',
        'Increase engagement by 150%',
        'Improve user satisfaction by 80%'
      ],
      popular: true
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites',
      category: 'Development',
      icon: Globe,
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'Content management systems',
        'API development',
        'Performance optimization',
        'SEO optimization'
      ],
      benefits: [
        'Increase conversion rates by 60%',
        'Improve page load speed by 70%',
        'Boost search rankings by 50%'
      ],
      popular: false
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business goals',
      category: 'Consulting',
      icon: Settings,
      features: [
        'Technology strategy planning',
        'Digital transformation',
        'Process optimization',
        'Vendor selection',
        'Project management',
        'Change management'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 30%',
        'Improve operational efficiency by 50%'
      ],
      popular: false
    }
  ];

  const categories = ['all', 'Cloud', 'Security', 'Database', 'Development', 'Consulting'];

  const filteredServices = itServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const technologies = [
    {
      name: 'Amazon Web Services',
      description: 'Cloud computing platform',
      icon: Cloud
    },
    {
      name: 'Microsoft Azure',
      description: 'Cloud services and solutions',
      icon: Cloud
    },
    {
      name: 'Google Cloud Platform',
      description: 'Cloud infrastructure and AI services',
      icon: Cloud
    },
    {
      name: 'Docker',
      description: 'Containerization platform',
      icon: Server
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration',
      icon: Server
    },
    {
      name: 'React',
      description: 'Frontend development framework',
      icon: Code
    },
    {
      name: 'Node.js',
      description: 'Backend runtime environment',
      icon: Code
    },
    {
      name: 'Python',
      description: 'Programming language',
      icon: Code
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CTO, TechCorp',
      service: 'Cloud Infrastructure',
      quote: 'The cloud migration was seamless. We\'ve reduced our infrastructure costs by 40% while improving performance significantly.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Security Director, FinanceFlow',
      service: 'Cybersecurity Solutions',
      quote: 'Our security posture has improved dramatically. We haven\'t had a single security incident since implementing their solutions.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'VP Engineering, RetailMax',
      service: 'Mobile App Development',
      quote: 'The mobile app they developed has been a game-changer. Our customer engagement has increased by 150%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and custom development. Transform your business with our technology expertise." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, database management, web development, mobile development, IT consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            IT <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions to support your business growth. 
            From cloud infrastructure to cybersecurity, we provide the technology foundation you need.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {service.popular && (
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-sm text-cyan-400 font-medium">{service.category}</div>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expected Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Work With</h2>
            <p className="text-xl text-gray-300">We use the latest and most reliable technologies to deliver exceptional results</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">See how our IT services are driving business success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our IT services can help you build a robust, scalable, and secure technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;