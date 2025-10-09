import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Database, Zap, Shield, BarChart, Settings, Users } from 'lucide-react';

const DatabasePage: React.FC = () => {
  const databaseServices = [
    {
      title: 'Database Design & Architecture',
      description: 'Comprehensive database design and architecture services for optimal performance and scalability.',
      icon: '🏗️',
      price: '$2,499/month',
      features: ['Database design', 'Schema optimization', 'Performance tuning', 'Scalability planning', 'Migration strategy'],
      benefits: ['Improve performance by 300%', 'Reduce costs by 40%', 'Enhance scalability'],
      marketPrice: '$4,000-12,000/month',
      category: 'Design',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Database Migration & Modernization',
      description: 'Seamless database migration and modernization services with zero downtime.',
      icon: '🔄',
      price: '$3,999/month',
      features: ['Zero-downtime migration', 'Data validation', 'Performance optimization', 'Backup & recovery', 'Testing'],
      benefits: ['Zero data loss', 'Improved performance', 'Modern architecture'],
      marketPrice: '$6,000-18,000/month',
      category: 'Migration',
      technologies: ['AWS DMS', 'Azure Data Factory', 'Custom Scripts', 'ETL Tools', 'Cloud Databases']
    },
    {
      title: 'Database Performance Optimization',
      description: 'Advanced database performance tuning and optimization for maximum efficiency.',
      icon: '⚡',
      price: '$1,999/month',
      features: ['Query optimization', 'Index optimization', 'Memory tuning', 'Connection pooling', 'Monitoring'],
      benefits: ['Improve query speed by 500%', 'Reduce resource usage', 'Enhance user experience'],
      marketPrice: '$3,500-10,000/month',
      category: 'Optimization',
      technologies: ['Query Analyzers', 'Performance Tools', 'Monitoring Systems', 'Custom Scripts']
    },
    {
      title: 'Database Security & Compliance',
      description: 'Comprehensive database security services with encryption and compliance management.',
      icon: '🔒',
      price: '$2,299/month',
      features: ['Encryption at rest', 'Encryption in transit', 'Access control', 'Audit logging', 'Compliance'],
      benefits: ['Meet compliance requirements', 'Protect sensitive data', 'Reduce security risks'],
      marketPrice: '$4,000-12,000/month',
      category: 'Security',
      technologies: ['Database Encryption', 'Access Control', 'Audit Tools', 'Compliance Frameworks']
    }
  ];

  const categories = [...new Set(databaseServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Database Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive database services including design, migration, optimization, and security for enterprise businesses." />
        <meta name="keywords" content="database services, database design, database migration, database optimization, database security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Database Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Optimize your data infrastructure with comprehensive database services including design, migration, and security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Start Database Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View Database Solutions
                </button>
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
                Expert database solutions delivered by certified professionals with proven enterprise experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Database Expertise</h3>
                <p className="text-gray-600">Certified experts in all major database technologies</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">Optimize database performance for maximum efficiency</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Enterprise-grade security with compliance management</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Design databases that scale with your business</p>
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
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Advanced {category.toLowerCase()} services powered by state-of-the-art database technology
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
                          <span className="text-2xl font-bold text-purple-600">{service.price}</span>
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
                            <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
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

                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Get Database Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Database?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our database experts for a free consultation and optimization strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DatabasePage;
