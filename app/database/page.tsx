import React from 'react';
import { CheckCircle, Database, Zap, Shield, Users, Cloud } from 'lucide-react';

const DatabasePage: React.FC = () => {
  const databaseServices = [
    {
      name: 'Database Design & Optimization',
      price: '$4,000/month',
      description: 'Custom database design and performance optimization',
      features: [
        'Database architecture design',
        'Performance tuning',
        'Query optimization',
        'Index management'
      ],
      icon: Database,
      benefits: [
        '50% performance improvement',
        'Reduced query time',
        'Better scalability',
        'Cost optimization'
      ]
    },
    {
      name: 'Database Migration',
      price: '$6,000/month',
      description: 'Seamless database migration and modernization',
      features: [
        'Migration planning',
        'Data migration',
        'Schema conversion',
        'Testing and validation'
      ],
      icon: Cloud,
      benefits: [
        'Zero downtime migration',
        'Data integrity',
        'Improved performance',
        'Modern technology'
      ]
    },
    {
      name: 'Database Administration',
      price: '$5,500/month',
      description: '24/7 database administration and management',
      features: [
        'Database monitoring',
        'Backup and recovery',
        'Security management',
        'Performance tuning'
      ],
      icon: Shield,
      benefits: [
        '99.9% uptime',
        'Data protection',
        'Proactive maintenance',
        'Expert support'
      ]
    },
    {
      name: 'Cloud Database Solutions',
      price: '$3,500/month',
      description: 'Cloud-native database solutions and management',
      features: [
        'Cloud database setup',
        'Auto-scaling',
        'Backup automation',
        'Monitoring and alerts'
      ],
      icon: Zap,
      benefits: [
        'Scalability',
        'Cost efficiency',
        'High availability',
        'Managed services'
      ]
    }
  ];

  const technologies = [
    {
      title: 'SQL Databases',
      description: 'MySQL, PostgreSQL, SQL Server, and Oracle',
      benefits: ['ACID compliance', 'Structured data', 'Mature ecosystem', 'Strong consistency']
    },
    {
      title: 'NoSQL Databases',
      description: 'MongoDB, Cassandra, Redis, and DynamoDB',
      benefits: ['Flexible schema', 'Horizontal scaling', 'High performance', 'Document storage']
    },
    {
      title: 'Cloud Databases',
      description: 'AWS RDS, Azure SQL, Google Cloud SQL, and managed services',
      benefits: ['Managed services', 'Auto-scaling', 'High availability', 'Cost optimization']
    },
    {
      title: 'Data Warehousing',
      description: 'Snowflake, BigQuery, Redshift, and data lake solutions',
      benefits: ['Analytics', 'Big data processing', 'Data integration', 'Business intelligence']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Database Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Optimize your data management with our comprehensive database solutions. 
            From design to migration, we provide expert database services for modern applications.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Databases Managed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Performance Gain</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Database Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {databaseServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Database Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Assessment</h3>
              <p className="text-gray-300">Analyze current database architecture and performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design</h3>
              <p className="text-gray-300">Create optimal database design and architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Deploy and configure database solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
              <p className="text-gray-300">Monitor, tune, and optimize performance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Optimize Your Database?
          </h2>
          <p className="text-purple-100 mb-6">
            Get expert database solutions that improve performance and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Database Consultation
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabasePage;