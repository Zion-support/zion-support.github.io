import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, DollarSign, Clock, Users, Star } from 'lucide-react';
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
<<<<<<< HEAD
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert guidance.',
      features: ['AWS/Azure/GCP expertise', 'Zero-downtime migration', 'Cost optimization'],
      pricing: 'Starting at $5,000',
=======
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring', 'Disaster recovery'],
      price: 'Starting at $2,500',
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
<<<<<<< HEAD
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security training'],
      pricing: 'Starting at $2,500',
      link: '/cybersecurity',
      popular: true
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure Management',
      description: 'Optimize and maintain your IT infrastructure for peak performance.',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization'],
      pricing: 'Starting at $1,500',
      link: '/infrastructure',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards'],
      pricing: 'Starting at $3,000',
=======
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive cybersecurity services and threat monitoring.',
      features: ['24/7 threat monitoring', 'Penetration testing', 'Security audits', 'Incident response', 'Compliance management', 'Security training'],
      price: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: true
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with modern DevOps practices and automation.',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Monitoring & logging', 'Container orchestration', 'Automated testing', 'Deployment automation'],
      price: 'Starting at $3,000',
      link: '/devops-cicd',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data warehousing', 'Business intelligence', 'Machine learning', 'Real-time dashboards', 'Data visualization', 'Predictive analytics'],
      price: 'Starting at $2,000/month',
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
      link: '/data-analytics',
      popular: false
    },
    {
<<<<<<< HEAD
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Custom Development',
      description: 'Build tailored software solutions for your specific business needs.',
      features: ['Full-stack development', 'API integration', 'Mobile apps'],
      pricing: 'Starting at $8,000',
      link: '/custom-development',
      popular: true
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: 'Network Solutions',
      description: 'Design and implement robust network infrastructure.',
      features: ['Network design', 'Security implementation', 'Performance monitoring'],
      pricing: 'Starting at $4,000',
      link: '/network-solutions',
=======
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: ['Native & cross-platform', 'UI/UX design', 'App store deployment', 'Maintenance & support', 'API integration', 'Performance optimization'],
      price: 'Starting at $5,000',
      link: '/mobile-development',
      popular: true
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure, transparent, and decentralized applications.',
      features: ['Smart contracts', 'DApp development', 'Tokenization', 'Blockchain consulting', 'Security auditing', 'Integration services'],
      price: 'Starting at $10,000',
      link: '/blockchain',
      popular: false
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and manage robust network infrastructure for your business.',
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Bandwidth optimization', 'Network security', 'Performance monitoring'],
      price: 'Starting at $1,200/month',
      link: '/network-infrastructure',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      title: 'System Administration',
      description: 'Complete system administration and maintenance for your IT environment.',
      features: ['User management', 'System updates', 'Performance monitoring', 'Troubleshooting', 'Documentation', 'Backup management'],
      price: 'Starting at $800/month',
      link: '/system-administration',
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
      popular: false
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Optimize your IT spending with our cost-effective solutions and strategies',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
=======
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Infrastructure',
      description: 'Build robust, scalable IT infrastructure that grows with your business needs.'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business and adapt to changing needs',
      icon: <Settings className="w-6 h-6 text-orange-500" />
    }
  ];

<<<<<<< HEAD
  const testimonials = [
    {
      name: 'John Smith',
      company: 'Enterprise Corp',
      content: 'Zion Tech transformed our IT infrastructure. The cloud migration was seamless and our costs reduced by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Johnson',
      company: 'DataFlow Inc',
      content: 'Outstanding cybersecurity services. Our security posture improved dramatically after implementing their solutions.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'TechStart',
      content: 'The custom development team delivered exactly what we needed. Highly professional and efficient.',
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your current IT infrastructure and identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Develop a comprehensive strategy tailored to your business objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Provide ongoing support and optimization to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and custom development solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure management, custom development, network solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional IT Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, 
            and drive digital transformation across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for all your IT needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
=======
  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'Terraform', category: 'Infrastructure' },
    { name: 'Ansible', category: 'Automation' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, mobile development, and blockchain solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise and commitment to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
=======
      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end IT services designed to modernize your technology stack and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we deliver exceptional IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
=======
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the key benefits of partnering with us for your IT needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
=======
      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver robust and scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-sm font-medium text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your IT Infrastructure?
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you modernize your technology stack and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default ITServicesPage;
=======
}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
