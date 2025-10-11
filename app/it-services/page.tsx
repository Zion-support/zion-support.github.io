import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Database, Smartphone, Code, Monitor, Star, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration Services',
      description: 'Complete cloud infrastructure migration with zero downtime and maximum security.',
      features: ['AWS/Azure/GCP Migration', 'Data Security', 'Cost Optimization', '24/7 Support'],
      pricing: 'Starting at $5,000',
      link: '/cloud-migration-services',
      category: 'Cloud Solutions'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and infrastructure.',
      features: ['Security Audits', 'Threat Monitoring', 'Incident Response', 'Compliance Management'],
      pricing: 'Starting at $3,000',
      link: '/cybersecurity-solutions',
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services for all platforms.',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring'],
      pricing: 'Starting at $2,500',
      link: '/database-management',
      category: 'Data Management'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['UI/UX Design', 'Native Performance', 'App Store Optimization', 'Maintenance'],
      pricing: 'Starting at $10,000',
      link: '/mobile-app-development',
      category: 'Mobile Development'
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed for your specific business requirements.',
      features: ['Custom Architecture', 'Scalable Solutions', 'API Development', 'Quality Assurance'],
      pricing: 'Starting at $15,000',
      link: '/custom-development',
      category: 'Software Development'
    },
    {
      icon: <Monitor className="w-8 h-8 text-red-500" />,
      title: 'IT Infrastructure Design',
      description: 'Complete IT infrastructure planning and implementation services.',
      features: ['Network Design', 'Server Configuration', 'Security Implementation', 'Documentation'],
      pricing: 'Starting at $8,000',
      link: '/it-infrastructure-design',
      category: 'Infrastructure'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes with modern DevOps practices.',
      features: ['CI/CD Pipeline', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing'],
      pricing: 'Starting at $4,000',
      link: '/devops-cicd',
      category: 'DevOps'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Data Protection & Compliance',
      description: 'Comprehensive data protection and regulatory compliance solutions.',
      features: ['GDPR Compliance', 'Data Encryption', 'Access Controls', 'Audit Trails'],
      pricing: 'Starting at $3,500',
      link: '/data-protection',
      category: 'Compliance'
    }
  ];

  const categories = [
    { name: 'Cloud Solutions', services: itServices.filter(s => s.category === 'Cloud Solutions') },
    { name: 'Security', services: itServices.filter(s => s.category === 'Security') },
    { name: 'Data Management', services: itServices.filter(s => s.category === 'Data Management') },
    { name: 'Mobile Development', services: itServices.filter(s => s.category === 'Mobile Development') },
    { name: 'Software Development', services: itServices.filter(s => s.category === 'Software Development') },
    { name: 'Infrastructure', services: itServices.filter(s => s.category === 'Infrastructure') },
    { name: 'DevOps', services: itServices.filter(s => s.category === 'DevOps') },
    { name: 'Compliance', services: itServices.filter(s => s.category === 'Compliance') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions & Infrastructure</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, database management, mobile development, and custom software solutions. Professional IT infrastructure services." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, database management, mobile development, custom software, IT infrastructure, DevOps" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional IT solutions and infrastructure services to support your business growth, 
              enhance security, and optimize performance across all technology platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get IT Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services by Category */}
      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {category.name === 'Cloud Solutions' && 'Scalable cloud infrastructure and migration services'}
                {category.name === 'Security' && 'Comprehensive cybersecurity and data protection solutions'}
                {category.name === 'Data Management' && 'Advanced database solutions and data management services'}
                {category.name === 'Mobile Development' && 'Native and cross-platform mobile application development'}
                {category.name === 'Software Development' && 'Custom software solutions tailored to your business needs'}
                {category.name === 'Infrastructure' && 'Complete IT infrastructure design and implementation'}
                {category.name === 'DevOps' && 'Modern DevOps practices and CI/CD pipeline implementation'}
                {category.name === 'Compliance' && 'Data protection and regulatory compliance solutions'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {category.services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Upgrade Your IT?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can enhance your business operations and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start IT Transformation
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;