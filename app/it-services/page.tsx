import React from 'react';
import { ArrowRight, Star, CheckCircle, Cloud, Shield, Server, Database, Network, Monitor, Zap } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and optimization with 24/7 monitoring.',
      icon: '☁️',
      price: '$2,999/month',
      features: [
        'Multi-cloud deployment (AWS, Azure, GCP)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization and monitoring',
        'Security compliance (SOC 2, ISO 27001)',
        '24/7 monitoring and alerting',
        'Performance optimization'
      ],
      benefits: 'Reduce infrastructure costs by 40%',
      popular: true,
      rating: 4.9,
      clients: '200+'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance.',
      icon: '🔒',
      price: '$2,499/month',
      features: [
        '24/7 Security Operations Center (SOC)',
        'Threat detection and response',
        'Vulnerability assessment and penetration testing',
        'Security awareness training',
        'Compliance management (GDPR, HIPAA, PCI-DSS)',
        'Identity and access management',
        'Endpoint security management',
        'Security incident response'
      ],
      benefits: 'Reduce security incidents by 80%',
      popular: true,
      rating: 4.8,
      clients: '150+'
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated pipelines, monitoring, and deployment.',
      icon: '🚀',
      price: '$1,999/month',
      features: [
        'CI/CD pipeline setup and optimization',
        'Container orchestration (Kubernetes, Docker)',
        'Infrastructure automation',
        'Monitoring and logging (ELK, Prometheus)',
        'GitOps implementation',
        'Testing automation',
        'Deployment strategies (Blue-Green, Canary)',
        'Performance monitoring'
      ],
      benefits: 'Deploy 10x faster with 99.9% uptime',
      rating: 4.9,
      clients: '180+'
    },
    {
      title: 'Database Administration',
      description: 'Expert database management with optimization, backup, and performance tuning.',
      icon: '🗄️',
      price: '$1,499/month',
      features: [
        'Database design and optimization',
        'Performance tuning and monitoring',
        'Backup and disaster recovery',
        'Database migration services',
        'Security hardening',
        'Capacity planning',
        'Multi-database support (MySQL, PostgreSQL, MongoDB)',
        'Real-time monitoring and alerting'
      ],
      benefits: 'Improve database performance by 60%',
      rating: 4.7,
      clients: '120+'
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management services.',
      icon: '🌐',
      price: '$1,799/month',
      features: [
        'Network design and architecture',
        'VPN and remote access solutions',
        'Load balancing and traffic management',
        'Network security implementation',
        'Wireless network setup',
        'Network monitoring and optimization',
        'Disaster recovery networking',
        'Cloud networking (VPC, Direct Connect)'
      ],
      benefits: 'Improve network reliability by 50%',
      rating: 4.8,
      clients: '90+'
    },
    {
      title: 'System Administration',
      description: 'Comprehensive system administration with monitoring, maintenance, and optimization.',
      icon: '⚙️',
      price: '$1,299/month',
      features: [
        'Server setup and configuration',
        'User account management',
        'System monitoring and maintenance',
        'Patch management and updates',
        'Backup and recovery solutions',
        'Performance optimization',
        'Security hardening',
        'Documentation and training'
      ],
      benefits: 'Reduce system downtime by 70%',
      rating: 4.6,
      clients: '160+'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning and digital transformation consulting services.',
      icon: '💡',
      price: '$299/hour',
      features: [
        'IT strategy development',
        'Digital transformation planning',
        'Technology assessment and recommendations',
        'Vendor evaluation and selection',
        'IT governance and compliance',
        'Change management',
        'Training and knowledge transfer',
        'Project management'
      ],
      benefits: 'Align IT with business objectives',
      rating: 4.9,
      clients: '300+'
    },
    {
      title: 'Managed IT Services',
      description: 'Complete IT management including helpdesk, monitoring, and maintenance.',
      icon: '🛠️',
      price: '$99/user/month',
      features: [
        '24/7 helpdesk support',
        'Proactive monitoring and maintenance',
        'Software license management',
        'Asset management and tracking',
        'User training and support',
        'Incident management',
        'Change management',
        'Regular reporting and analytics'
      ],
      benefits: 'Reduce IT costs by 30%',
      rating: 4.7,
      clients: '250+'
    }
  ];

  const serviceCategories = [
    { name: 'Cloud Services', count: 8, icon: Cloud, color: 'text-blue-600' },
    { name: 'Security', count: 12, icon: Shield, color: 'text-red-600' },
    { name: 'Infrastructure', count: 10, icon: Server, color: 'text-green-600' },
    { name: 'DevOps', count: 6, icon: Zap, color: 'text-purple-600' },
    { name: 'Database', count: 5, icon: Database, color: 'text-orange-600' },
    { name: 'Networking', count: 7, icon: Network, color: 'text-indigo-600' }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon Web Services' },
    { name: 'Microsoft Azure Solutions Architect', provider: 'Microsoft' },
    { name: 'Google Cloud Professional Architect', provider: 'Google Cloud' },
    { name: 'CISSP - Certified Information Systems Security Professional', provider: 'ISC2' },
    { name: 'CISM - Certified Information Security Manager', provider: 'ISACA' },
    { name: 'PMP - Project Management Professional', provider: 'PMI' },
    { name: 'ITIL Foundation', provider: 'AXELOS' },
    { name: 'CompTIA Security+', provider: 'CompTIA' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT services that keep your business running smoothly, 
              securely, and efficiently with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Free Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Certifications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Service Categories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive IT solutions for every business need
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <category.icon className={`w-8 h-8 mx-auto mb-3 ${category.color}`} />
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured IT Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional IT solutions trusted by businesses worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating} ({service.clients} clients)
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-medium text-green-600 mb-2">{service.benefits}</div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications & Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Certified professionals with industry-leading expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-blue-100">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Certified Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free IT assessment and discover how we can optimize your technology stack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
