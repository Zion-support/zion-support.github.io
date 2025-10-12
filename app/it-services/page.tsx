import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Sparkles, Star, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ITServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert migration services.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance', '24/7 monitoring', 'Disaster recovery'],
      price: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive cybersecurity solutions and threat monitoring.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security audits', 'Incident response', 'Compliance management', 'Staff training'],
      price: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: true,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Container orchestration', 'Monitoring & logging', 'Performance optimization', 'Team training'],
      price: 'Starting at $3,000/month',
      link: '/devops-cicd',
      popular: false,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data warehousing', 'Business intelligence', 'Predictive analytics', 'Real-time dashboards', 'Data visualization', 'Machine learning'],
      price: 'Starting at $2,000/month',
      link: '/data-analytics',
      popular: false,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      features: ['Native iOS/Android', 'Cross-platform apps', 'UI/UX design', 'App store deployment', 'Performance optimization', 'Maintenance support'],
      price: 'Starting at $5,000',
      link: '/mobile-development',
      popular: true,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: 'Web Development',
      description: 'Create modern, responsive web applications with cutting-edge technologies.',
      features: ['Frontend development', 'Backend APIs', 'Database design', 'Cloud deployment', 'Performance optimization', 'SEO optimization'],
      price: 'Starting at $3,500',
      link: '/web-development',
      popular: false,
      gradient: 'from-blue-500 to-cyan-600'
    }
  ];

  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest technologies and frameworks to deliver modern, scalable solutions.'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security measures and compliance with industry standards and regulations.'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Global Support',
      description: '24/7 support and maintenance services with global reach and local expertise.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: 'Proven Expertise',
      description: 'Years of experience delivering successful IT solutions for businesses of all sizes.'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'TechStart Inc.',
      content: 'The cloud migration was seamless and our costs reduced by 40%. The team was professional and knowledgeable.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'FinanceCorp',
      content: 'Their cybersecurity solutions gave us peace of mind. We feel much more secure with our data protection.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'RetailMax',
      content: 'The mobile app they developed increased our customer engagement by 300%. Outstanding work!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and web development. Transform your business with expert IT solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, web development, IT consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Server className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Professional IT Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              IT Services &
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              Transform your business with comprehensive IT services. From cloud migration to cybersecurity, 
              we provide expert solutions to drive your digital transformation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#services" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.price}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We deliver exceptional IT solutions with cutting-edge technology and expert support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              What Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 sm:p-12 lg:p-16 border border-blue-500/30 backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
                Let's discuss how our IT solutions can drive your success. Get a free consultation 
                and discover the power of modern technology for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-white/25 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}