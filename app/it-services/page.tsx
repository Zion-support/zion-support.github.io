import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Cloud, Shield, Settings, Database, Globe, Users, Smartphone, MapPin, Mail, Clock, Server, Code, Monitor, Lock, Wifi } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, monitoring, and optimization for maximum performance.',
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Hardening', '24/7 Monitoring', 'Auto-scaling', 'Disaster Recovery'],
      price: 'Starting at $2,500/month',
      category: 'Cloud Services',
      benefits: ['99.9% uptime', '40% cost savings', 'Enhanced security'],
      popular: true,
      setupTime: '1-2 weeks',
      supportLevel: '24/7'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, prevention, and incident response.',
      icon: <Shield className="w-12 h-12 text-red-600" />,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training', 'Compliance Audits', 'Penetration Testing'],
      price: 'Starting at $3,000/month',
      category: 'Security',
      benefits: ['Zero security breaches', '24/7 protection', 'Compliance assurance'],
      popular: true,
      setupTime: '2-3 weeks',
      supportLevel: '24/7'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated development workflows with continuous integration and deployment pipelines.',
      icon: <Settings className="w-12 h-12 text-green-600" />,
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Performance Monitoring', 'Container Orchestration', 'GitOps'],
      price: 'Starting at $2,000/month',
      category: 'DevOps',
      benefits: ['50% faster deployments', 'Zero downtime', 'Automated quality assurance'],
      popular: false,
      setupTime: '1-2 weeks',
      supportLevel: 'Business Hours'
    },
    {
      title: 'Database Optimization',
      description: 'Database performance tuning, scaling, and migration services for optimal data management.',
      icon: <Database className="w-12 h-12 text-purple-600" />,
      features: ['Performance Tuning', 'Scalability Planning', 'Data Migration', 'Backup & Recovery', 'Query Optimization', 'Monitoring'],
      price: 'Starting at $1,500/month',
      category: 'Database',
      benefits: ['300% performance boost', '99.99% reliability', 'Automated backups'],
      popular: false,
      setupTime: '1 week',
      supportLevel: 'Business Hours'
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise-grade network design, implementation, and management for seamless connectivity.',
      icon: <Globe className="w-12 h-12 text-cyan-600" />,
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Support', 'Wireless Solutions', 'VPN Setup'],
      price: 'Starting at $2,200/month',
      category: 'Networking',
      benefits: ['99.9% uptime', 'Enhanced security', 'Scalable architecture'],
      popular: false,
      setupTime: '1-2 weeks',
      supportLevel: '24/7'
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with rapid response times and expert technical assistance.',
      icon: <Users className="w-12 h-12 text-yellow-600" />,
      features: ['24/7 Support', 'Remote Assistance', 'Hardware Management', 'Software Updates', 'User Training', 'Asset Management'],
      price: 'Starting at $1,200/month',
      category: 'Support',
      benefits: ['15-minute response time', '95% first-call resolution', 'Proactive maintenance'],
      popular: true,
      setupTime: '1 day',
      supportLevel: '24/7'
    },
    {
      title: 'Server Management',
      description: 'Complete server administration, monitoring, and maintenance services for optimal performance.',
      icon: <Server className="w-12 h-12 text-orange-600" />,
      features: ['Server Administration', 'Performance Monitoring', 'Security Updates', 'Backup Management', 'Capacity Planning', 'Disaster Recovery'],
      price: 'Starting at $1,800/month',
      category: 'Infrastructure',
      benefits: ['99.9% uptime', 'Proactive maintenance', 'Cost optimization'],
      popular: false,
      setupTime: '3-5 days',
      supportLevel: '24/7'
    },
    {
      title: 'Software Development',
      description: 'Custom software development and application modernization services for your business needs.',
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      features: ['Custom Applications', 'API Development', 'Legacy Modernization', 'Mobile Apps', 'Web Development', 'Quality Assurance'],
      price: 'Starting at $150/hour',
      category: 'Development',
      benefits: ['Custom solutions', 'Modern technology', 'Scalable architecture'],
      popular: false,
      setupTime: '2-8 weeks',
      supportLevel: 'Business Hours'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting and technology assessment to optimize your IT infrastructure.',
      icon: <Monitor className="w-12 h-12 text-teal-600" />,
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Cost Analysis', 'Implementation Planning', 'Change Management'],
      price: 'Starting at $200/hour',
      category: 'Consulting',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology expertise'],
      popular: false,
      setupTime: '1-2 weeks',
      supportLevel: 'Business Hours'
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'DevOps', 'Database', 'Networking', 'Support', 'Infrastructure', 'Development', 'Consulting'];

  const technologies = [
    {
      category: 'Cloud Platforms',
      items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Vultr', 'Linode']
    },
    {
      category: 'Security Tools',
      items: ['Firewalls', 'SIEM', 'EDR', 'VPN', 'SSL/TLS', 'MFA']
    },
    {
      category: 'DevOps Tools',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'InfluxDB']
    },
    {
      category: 'Monitoring',
      items: ['Prometheus', 'Grafana', 'New Relic', 'Datadog', 'Splunk', 'ELK Stack']
    },
    {
      category: 'Programming',
      items: ['Python', 'Node.js', 'Java', 'Go', 'React', 'Vue.js']
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', icon: '☁️' },
    { name: 'CISSP Security Certification', icon: '🔒' },
    { name: 'Microsoft Azure Expert', icon: '🔷' },
    { name: 'Google Cloud Professional', icon: '🌐' },
    { name: 'Cisco Network Specialist', icon: '🌐' },
    { name: 'ITIL Service Management', icon: '📋' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Comprehensive IT infrastructure, security, and support services for enterprise environments
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your IT infrastructure with our expert services. From cloud migration to cybersecurity, 
              we provide end-to-end IT solutions that keep your business running smoothly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Get IT Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* IT Capabilities Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Capabilities Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive IT services cover all aspects of modern technology infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
              <p className="text-gray-600">Migration, management, and optimization</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-600">Protection, monitoring, and compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Settings className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <p className="text-gray-600">Automation and continuous delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Management</h3>
              <p className="text-gray-600">Storage, backup, and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest technologies and industry-standard tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team holds industry-leading certifications to ensure the highest quality service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                <span className="text-2xl mr-4">{cert.icon}</span>
                <span className="font-semibold text-gray-900">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  category === 'All' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services designed to keep your business running smoothly and securely
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border-2 ${
                service.popular ? 'border-green-500' : 'border-gray-100'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <div className="ml-4">
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-green-500" />
                    <span>Setup: {service.setupTime}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Support: {service.supportLevel}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4 mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    Get Quote
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Let our IT experts assess your current infrastructure and recommend solutions that will 
            improve performance, security, and cost-effectiveness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free IT Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;