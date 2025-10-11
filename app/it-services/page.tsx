import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with ongoing management, optimization, and security for AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud migration strategy',
        'Infrastructure as Code (IaC)',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery planning'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-migration',
      category: 'Cloud'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat assessment, penetration testing, and security monitoring.',
      features: [
        'Security assessment & audit',
        'Penetration testing',
        'Threat monitoring',
        'Incident response',
        'Security training',
        'Compliance management'
      ],
      pricing: '$1,500/month',
      popular: true,
      link: '/cybersecurity-solutions',
      category: 'Security'
    },
    {
      icon: <Server className="w-12 h-12 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Modern DevOps practices with automated CI/CD pipelines, infrastructure management, and deployment automation.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring & logging',
        'Performance optimization',
        'Team training'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/devops-cicd',
      category: 'DevOps'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics & BI',
      description: 'Advanced data analytics solutions with business intelligence dashboards, reporting, and data visualization.',
      features: [
        'Data warehouse design',
        'ETL/ELT processes',
        'Business intelligence dashboards',
        'Predictive analytics',
        'Data governance',
        'Real-time reporting'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/data-analytics',
      category: 'Analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks and technologies.',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Backend integration'
      ],
      pricing: 'Starting at $5,000',
      popular: true,
      link: '/mobile-development',
      category: 'Development'
    },
    {
      icon: <Globe className="w-12 h-12 text-yellow-500" />,
      title: 'Blockchain Solutions',
      description: 'Blockchain development and integration services including smart contracts, DeFi, and enterprise blockchain solutions.',
      features: [
        'Smart contract development',
        'DeFi protocol design',
        'NFT marketplace development',
        'Enterprise blockchain',
        'Token development',
        'Blockchain consulting'
      ],
      pricing: '$3,000/month',
      popular: false,
      link: '/blockchain',
      category: 'Blockchain'
    },
    {
      icon: <Code className="w-12 h-12 text-indigo-500" />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your business needs with modern technologies and best practices.',
      features: [
        'Custom web applications',
        'API development',
        'Microservices architecture',
        'Legacy system modernization',
        'Third-party integrations',
        'Quality assurance'
      ],
      pricing: 'Starting at $3,500',
      popular: false,
      link: '/custom-development',
      category: 'Development'
    },
    {
      icon: <Cpu className="w-12 h-12 text-cyan-500" />,
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure management including servers, networks, storage, and monitoring services.',
      features: [
        'Server management',
        'Network administration',
        'Storage solutions',
        'Backup & recovery',
        'Performance monitoring',
        'Capacity planning'
      ],
      pricing: '$1,200/month',
      popular: false,
      link: '/infrastructure-management',
      category: 'Infrastructure'
    }
  ];

  const categories = ['All', 'Cloud', 'Security', 'DevOps', 'Analytics', 'Development', 'Blockchain', 'Infrastructure'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '24/7', label: 'Support Available' }
  ];

  const technologies = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔵' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'Blockchain', icon: '⛓️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and custom software solutions. Enterprise-grade technology services." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, custom software, enterprise technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, mobile development, 
              and custom software solutions. We help businesses scale and secure their technology infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Technologies We Use */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-white font-semibold">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* IT Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our IT Services */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security protocols and compliance with industry standards to protect your data and infrastructure.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Expertise</h3>
                <p className="text-gray-300">Experienced team with expertise in cutting-edge technologies and best practices from around the world.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">Future-proof solutions designed to scale with your business growth and evolving technology needs.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our expert team help you build, secure, and scale your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
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