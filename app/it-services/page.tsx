'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Sparkles, Rocket, Mail, Video, FileText, Smartphone, Cpu, Database, BarChart3, Settings } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      icon: Cloud,
      link: '/cloud-infrastructure',
      features: ['Multi-cloud strategy', 'Auto-scaling', 'Cost optimization', '24/7 monitoring'],
      price: 'From $2,500/month',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      link: '/cybersecurity-solutions',
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance', 'Incident response'],
      price: 'From $1,500/month',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies',
      icon: Code,
      link: '/web-development',
      features: ['Responsive design', 'Performance optimization', 'SEO', 'Maintenance'],
      price: 'From $5,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      link: '/mobile-development',
      features: ['Native apps', 'Cross-platform', 'App store optimization', 'Push notifications'],
      price: 'From $8,000',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automation pipelines and infrastructure as code for seamless deployments',
      icon: Settings,
      link: '/devops-cicd',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Automation'],
      price: 'From $3,000/month',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions to turn data into actionable insights',
      icon: BarChart3,
      link: '/data-analytics-bi',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Data warehousing'],
      price: 'From $2,500/month',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const additionalServices = [
    { name: 'API Development', link: '/api-development', price: 'From $3,000' },
    { name: 'IT Support', link: '/it-support', price: 'From $1,200/month' },
    { name: 'Custom Software', link: '/custom-software', price: 'From $10,000' },
    { name: 'Database Management', link: '/database-management', price: 'From $1,500/month' },
    { name: 'Network Infrastructure', link: '/network-infrastructure', price: 'From $2,000/month' },
    { name: 'IT Asset Management', link: '/it-asset-management', price: 'From $800/month' },
    { name: 'System Integration', link: '/system-integration', price: 'From $5,000' },
    { name: 'Cloud Migration', link: '/cloud-migration-pro', price: 'Custom pricing' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group\'s cloud infrastructure transformed our scalability. We can now handle 10x more traffic with 50% lower costs.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      company: 'InnovateLabs',
      content: 'Their cybersecurity solutions gave us peace of mind. Our security posture improved dramatically, and we passed all compliance audits.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      company: 'Digital Agency',
      content: 'The web development team delivered beyond our expectations. Our new platform increased user engagement by 200%.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, DevOps, data analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mb-6">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions to modernize your infrastructure, secure your data, and accelerate your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end IT solutions designed to modernize your infrastructure and accelerate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold text-sm">{service.price}</span>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Additional IT Services
            </h2>
            <p className="text-gray-300">
              Complete your IT transformation with our comprehensive service portfolio
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-4 text-center transition-colors border border-slate-700 hover:border-cyan-500/30 group"
              >
                <div className="text-white text-sm font-medium mb-1 group-hover:text-cyan-400 transition-colors">{service.name}</div>
                <div className="text-cyan-400 text-xs">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional IT solutions through innovation, expertise, and unwavering commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Rapid deployment and implementation with cutting-edge technologies and optimized processes.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Bank-level security with comprehensive compliance and data protection measures.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Certified professionals with years of experience in enterprise IT solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can modernize your infrastructure and accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;
