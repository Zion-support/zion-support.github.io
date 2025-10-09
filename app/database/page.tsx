import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Shield, Cpu, Target, BarChart, Settings, Cog, Brain, Users, Globe } from 'lucide-react';

const DatabasePage: React.FC = () => {
  const databaseServices = [
    {
      title: 'Database Design & Architecture',
      description: 'Custom database design and architecture solutions for optimal performance and scalability.',
      icon: '🏗️',
      price: 'Starting at $1,500/month',
      features: ['Schema design', 'Performance optimization', 'Scalability planning', 'Security implementation', 'Migration support'],
      benefits: ['Improve performance by 300%', 'Reduce costs by 40%', 'Ensure data integrity'],
      marketPrice: '$3,000-8,000/month',
      category: 'Design',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle']
    },
    {
      title: 'Database Migration Services',
      description: 'Seamless migration of databases between platforms with zero downtime.',
      icon: '🔄',
      price: 'Starting at $2,500/project',
      features: ['Zero downtime migration', 'Data validation', 'Performance testing', 'Rollback planning', 'Training'],
      benefits: ['Minimize business disruption', 'Ensure data accuracy', 'Improve performance'],
      marketPrice: '$5,000-15,000/project',
      category: 'Migration',
      technologies: ['AWS DMS', 'Azure Data Factory', 'Custom Scripts', 'ETL Tools', 'Cloud Platforms']
    },
    {
      title: 'Database Performance Optimization',
      description: 'Advanced performance tuning and optimization for existing databases.',
      icon: '⚡',
      price: 'Starting at $1,200/month',
      features: ['Query optimization', 'Index tuning', 'Memory optimization', 'Connection pooling', 'Monitoring'],
      benefits: ['Improve query speed by 500%', 'Reduce resource usage', 'Increase throughput'],
      marketPrice: '$2,500-6,000/month',
      category: 'Optimization',
      technologies: ['Query Analysis', 'Indexing', 'Partitioning', 'Caching', 'Monitoring Tools']
    },
    {
      title: 'Database Security & Compliance',
      description: 'Comprehensive security solutions and compliance management for databases.',
      icon: '🔒',
      price: 'Starting at $1,800/month',
      features: ['Access control', 'Encryption', 'Audit logging', 'Compliance reporting', 'Threat detection'],
      benefits: ['Protect sensitive data', 'Meet compliance requirements', 'Prevent breaches'],
      marketPrice: '$3,500-10,000/month',
      category: 'Security',
      technologies: ['Encryption', 'Access Control', 'Audit Tools', 'Compliance Frameworks', 'Monitoring']
    },
    {
      title: 'Database Backup & Recovery',
      description: 'Reliable backup and disaster recovery solutions for business continuity.',
      icon: '💾',
      price: 'Starting at $800/month',
      features: ['Automated backups', 'Point-in-time recovery', 'Disaster recovery', 'Testing', 'Monitoring'],
      benefits: ['Ensure data safety', 'Minimize downtime', 'Meet RTO/RPO requirements'],
      marketPrice: '$1,500-4,000/month',
      category: 'Backup',
      technologies: ['Backup Tools', 'Cloud Storage', 'Replication', 'Monitoring', 'Automation']
    },
    {
      title: 'Database Monitoring & Maintenance',
      description: '24/7 monitoring and proactive maintenance for optimal database health.',
      icon: '📊',
      price: 'Starting at $1,000/month',
      features: ['Real-time monitoring', 'Alert management', 'Performance tracking', 'Capacity planning', 'Maintenance'],
      benefits: ['Prevent issues', 'Optimize performance', 'Reduce downtime'],
      marketPrice: '$2,000-5,000/month',
      category: 'Monitoring',
      technologies: ['Monitoring Tools', 'Alerting', 'Dashboards', 'Automation', 'Cloud Platforms']
    },
    {
      title: 'Cloud Database Management',
      description: 'Managed cloud database services with automated scaling and optimization.',
      icon: '☁️',
      price: 'Starting at $1,500/month',
      features: ['Cloud migration', 'Auto-scaling', 'Cost optimization', 'Security management', 'Monitoring'],
      benefits: ['Reduce operational overhead', 'Improve scalability', 'Optimize costs'],
      marketPrice: '$3,000-8,000/month',
      category: 'Cloud',
      technologies: ['AWS RDS', 'Azure SQL', 'Google Cloud SQL', 'MongoDB Atlas', 'Cloud Platforms']
    },
    {
      title: 'Database Consulting & Strategy',
      description: 'Strategic database consulting and technology roadmap development.',
      icon: '💡',
      price: 'Starting at $200/hour',
      features: ['Technology assessment', 'Architecture review', 'Performance analysis', 'Migration planning', 'Training'],
      benefits: ['Make informed decisions', 'Optimize database strategy', 'Reduce risks'],
      marketPrice: '$300-800/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Best Practices', 'Training', 'Documentation']
    }
  ];

  const categories = [...new Set(databaseServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Database Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Comprehensive database solutions for design, migration, optimization, and management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Database Consultation
              </Link>
              <Link 
                to="/it-services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Database Services?
            </h2>
            <p className="text-xl text-gray-600">
              Expert database engineers delivering optimized, secure, and scalable database solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Engineers</h3>
              <p className="text-gray-600">Certified database professionals with deep expertise in all major database systems</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Focus</h3>
              <p className="text-gray-600">Optimized solutions that deliver maximum performance and efficiency</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Enterprise-grade security with compliance and data protection</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock monitoring and support for your database infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map(category => (
        <section key={category} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category} Services
              </h2>
              <p className="text-xl text-gray-600">
                Specialized {category.toLowerCase()} solutions for modern database management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {databaseServices
                .filter(service => service.category === category)
                .map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                        <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      to="/contact"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                    >
                      Get Database Quote
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Database Expertise?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our database experts can help you design, optimize, and manage your database infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabasePage;
