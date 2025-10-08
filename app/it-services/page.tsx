import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Server, Shield, Cloud, Database, Wrench, Users, TrendingUp, Zap, Clock } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform solutions.',
      icon: '☁️',
      price: '$2,500/month',
      features: [
        'Cloud architecture design',
        'Migration planning & execution',
        'Multi-cloud strategies',
        'Cost optimization',
        'Security implementation',
        '24/7 monitoring & support'
      ],
      popular: true,
      category: 'Cloud Services',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability by 500%', 'Achieve 99.9% uptime'],
      marketPrice: '$5,000-15,000/month',
      useCases: ['Legacy system migration', 'Hybrid cloud setup', 'Disaster recovery', 'Global expansion']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      icon: '🛡️',
      price: '$3,200/month',
      features: [
        'Threat detection & prevention',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring (SOC)',
        'Compliance management',
        'Incident response'
      ],
      popular: true,
      category: 'Security',
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce security incidents by 95%', 'Ensure compliance'],
      marketPrice: '$6,000-25,000/month',
      useCases: ['Data protection', 'Regulatory compliance', 'Threat monitoring', 'Security audits']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration solutions.',
      icon: '🔄',
      price: '$2,800/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Automated testing',
        'Deployment automation',
        'Performance monitoring'
      ],
      popular: true,
      category: 'DevOps',
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity'],
      marketPrice: '$5,000-18,000/month',
      useCases: ['Application deployment', 'Infrastructure automation', 'Quality assurance', 'Team collaboration']
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and migration services for all major platforms.',
      icon: '🗄️',
      price: '$1,800/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Migration services',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      popular: false,
      category: 'Database',
      benefits: ['Improve query performance by 300%', 'Reduce downtime by 95%', 'Ensure data integrity'],
      marketPrice: '$3,500-12,000/month',
      useCases: ['Database optimization', 'Data migration', 'Performance tuning', 'Backup strategies']
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments.',
      icon: '🌐',
      price: '$2,200/month',
      features: [
        'Network architecture design',
        'Wireless network setup',
        'VPN configuration',
        'Load balancing',
        'Network monitoring',
        'Troubleshooting & support'
      ],
      popular: false,
      category: 'Networking',
      benefits: ['Improve network speed by 200%', 'Reduce connectivity issues by 90%', 'Enhance security'],
      marketPrice: '$4,000-15,000/month',
      useCases: ['Office network setup', 'Remote work solutions', 'Network security', 'Performance optimization']
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for all your IT needs.',
      icon: '🎧',
      price: '$1,500/month',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Hardware & software support',
        'User training',
        'Issue tracking & resolution',
        'SLA guarantees'
      ],
      popular: true,
      category: 'Support',
      benefits: ['Resolve 95% of issues remotely', 'Reduce downtime by 80%', 'Improve user satisfaction'],
      marketPrice: '$3,000-10,000/month',
      useCases: ['Technical support', 'User assistance', 'System maintenance', 'Training programs']
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning for business continuity.',
      icon: '💾',
      price: '$1,200/month',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Data replication',
        'Recovery testing',
        'Compliance backup',
        'Cloud backup solutions'
      ],
      popular: false,
      category: 'Backup',
      benefits: ['99.99% data recovery success', 'Reduce recovery time by 90%', 'Ensure business continuity'],
      marketPrice: '$2,500-8,000/month',
      useCases: ['Data protection', 'Disaster recovery', 'Compliance requirements', 'Business continuity']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting.',
      icon: '💡',
      price: '$2,000/month',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'Budget planning',
        'Implementation guidance'
      ],
      popular: false,
      category: 'Consulting',
      benefits: ['Align IT with business goals', 'Reduce technology costs by 30%', 'Improve efficiency'],
      marketPrice: '$4,000-15,000/month',
      useCases: ['Strategic planning', 'Technology evaluation', 'Digital transformation', 'Cost optimization']
    },
    {
      title: 'Software Development',
      description: 'Custom software development and application modernization services.',
      icon: '💻',
      price: '$3,500/month',
      features: [
        'Custom application development',
        'Legacy system modernization',
        'API development',
        'Mobile app development',
        'Quality assurance',
        'Maintenance & support'
      ],
      popular: true,
      category: 'Development',
      benefits: ['Deliver solutions 50% faster', 'Improve code quality by 80%', 'Reduce maintenance costs'],
      marketPrice: '$7,000-30,000/month',
      useCases: ['Custom applications', 'System modernization', 'API development', 'Mobile solutions']
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management and optimization services.',
      icon: '📋',
      price: '$1,600/month',
      features: [
        'Asset inventory & tracking',
        'License management',
        'Lifecycle planning',
        'Cost optimization',
        'Compliance reporting',
        'Vendor management'
      ],
      popular: false,
      category: 'Asset Management',
      benefits: ['Reduce IT costs by 25%', 'Improve asset utilization', 'Ensure compliance'],
      marketPrice: '$3,000-12,000/month',
      useCases: ['Asset tracking', 'License optimization', 'Cost management', 'Compliance reporting']
    },
    {
      title: 'IT Training & Education',
      description: 'Comprehensive IT training programs for teams and individuals.',
      icon: '🎓',
      price: '$1,000/month',
      features: [
        'Custom training programs',
        'Certification preparation',
        'Hands-on workshops',
        'Online learning platforms',
        'Progress tracking',
        'Certification support'
      ],
      popular: false,
      category: 'Training',
      benefits: ['Improve team skills by 200%', 'Reduce support tickets by 60%', 'Increase productivity'],
      marketPrice: '$2,000-8,000/month',
      useCases: ['Team training', 'Certification programs', 'Skill development', 'Technology adoption']
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Compliance management and IT governance services for regulatory requirements.',
      icon: '📊',
      price: '$2,400/month',
      features: [
        'Compliance assessment',
        'Policy development',
        'Audit preparation',
        'Risk management',
        'Documentation',
        'Training & awareness'
      ],
      popular: false,
      category: 'Compliance',
      benefits: ['Ensure 100% compliance', 'Reduce audit findings by 95%', 'Minimize risks'],
      marketPrice: '$5,000-20,000/month',
      useCases: ['Regulatory compliance', 'Audit preparation', 'Risk management', 'Policy development']
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Backup', count: itServices.filter(s => s.category === 'Backup').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Asset Management', count: itServices.filter(s => s.category === 'Asset Management').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Compliance', count: itServices.filter(s => s.category === 'Compliance').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT solutions including cloud services, cybersecurity, DevOps, and infrastructure management. 
              Keep your technology running smoothly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get IT Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">IT Service Categories</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Systems Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete IT solutions to keep your business running smoothly and securely
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative border-2 ${service.popular ? 'border-blue-500' : 'border-gray-100'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Save up to 50% vs market price
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-600">
              Expert IT solutions with proven track record and comprehensive support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified IT professionals with 10+ years of experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Bank-level security with 99.9% uptime guarantee.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support and monitoring services.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Average response time of 15 minutes for critical issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free IT assessment and discover how we can improve your technology operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">🌐 Visit us at <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;