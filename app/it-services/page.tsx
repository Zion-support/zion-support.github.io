import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cloud, Shield, Database, Smartphone, Server, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Data migration', 'Application modernization', 'Cost optimization'],
      pricing: 'From $2,999/project',
      href: '/cloud-migration',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      popular: true
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from evolving cyber threats.',
      features: ['Security assessment', 'Penetration testing', 'Incident response', 'Compliance audit'],
      pricing: 'From $1,999/month',
      href: '/cybersecurity-solutions',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      popular: true
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code', 'Monitoring setup'],
      pricing: 'From $3,999/month',
      href: '/devops-cicd',
      icon: <Code className="w-8 h-8 text-green-500" />,
      popular: false
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data warehousing', 'Business intelligence', 'Machine learning', 'Real-time analytics'],
      pricing: 'From $2,499/month',
      href: '/data-analytics',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      popular: false
    },
    {
      title: 'Mobile Development',
      description: 'Create stunning mobile applications for iOS and Android with native and cross-platform solutions.',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'App store deployment'],
      pricing: 'From $4,999/project',
      href: '/mobile-development',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      popular: true
    },
    {
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure transactions and smart contracts.',
      features: ['Smart contracts', 'DeFi solutions', 'NFT platforms', 'Cryptocurrency integration'],
      pricing: 'From $9,999/project',
      href: '/blockchain-solutions',
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      popular: false
    },
    {
      title: 'API Development',
      description: 'Build robust and scalable APIs for seamless integration between systems.',
      features: ['RESTful APIs', 'GraphQL', 'API documentation', 'Rate limiting'],
      pricing: 'From $1,999/project',
      href: '/api-development',
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      popular: false
    },
    {
      title: 'Database Management',
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Disaster recovery'],
      pricing: 'From $1,499/month',
      href: '/database-management',
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      popular: false
    },
    {
      title: 'System Integration',
      description: 'Connect disparate systems and applications for seamless data flow and automation.',
      features: ['Legacy system integration', 'Third-party APIs', 'Data synchronization', 'Workflow automation'],
      pricing: 'From $3,499/project',
      href: '/system-integration',
      icon: <Server className="w-8 h-8 text-pink-500" />,
      popular: false
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with your business objectives.',
      features: ['Technology assessment', 'Digital transformation', 'IT strategy', 'Vendor selection'],
      pricing: 'From $299/hour',
      href: '/it-consulting',
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      popular: false
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Design and implement scalable cloud infrastructure solutions for your business.',
      features: ['Cloud architecture', 'Auto-scaling', 'Load balancing', 'Disaster recovery'],
      pricing: 'From $2,999/month',
      href: '/cloud-infrastructure',
      icon: <Cloud className="w-8 h-8 text-violet-500" />,
      popular: true
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing services to ensure your software meets the highest quality standards.',
      features: ['Automated testing', 'Performance testing', 'Security testing', 'User acceptance testing'],
      pricing: 'From $1,999/project',
      href: '/quality-assurance',
      icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: 'Scalable Solutions',
      description: 'Cloud-native solutions that scale with your business growth and changing needs.'
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.'
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Data Management',
      description: 'Advanced data processing and analytics to drive informed business decisions.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  const technologies = [
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'Azure', color: 'bg-blue-500' },
    { name: 'Google Cloud', color: 'bg-green-500' },
    { name: 'Docker', color: 'bg-blue-600' },
    { name: 'Kubernetes', color: 'bg-blue-700' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'Python', color: 'bg-yellow-500' },
    { name: 'Java', color: 'bg-red-500' },
    { name: 'MongoDB', color: 'bg-green-700' },
    { name: 'PostgreSQL', color: 'bg-blue-800' },
    { name: 'Redis', color: 'bg-red-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and custom development. Transform your business with enterprise-grade solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, software development, enterprise solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive IT services. From cloud migration to cybersecurity, 
              we provide enterprise-grade solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300">We combine technical expertise with business acumen</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Work With</h2>
              <p className="text-xl text-gray-300">Cutting-edge technologies for modern solutions</p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-lg">{tech.name.charAt(0)}</span>
                  </div>
                  <p className="text-white font-medium text-sm">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300">Comprehensive solutions tailored to your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${service.popular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-white/20'} hover:bg-white/15 transition-all duration-300 group`}>
                  {service.popular && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <a
                    href={service.href}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:translate-y-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our expert team help you build a robust, scalable, and secure IT foundation for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;