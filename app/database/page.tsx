import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Database, Zap, Shield, BarChart } from 'lucide-react';

const DatabasePage: React.FC = () => {
  const databaseServices = [
    {
      title: 'Database Design & Architecture',
      description: 'Custom database design and architecture for optimal performance and scalability.',
      icon: '🏗️',
      price: 'Starting at $4,000/project',
      features: ['Schema design', 'Performance optimization', 'Scalability planning', 'Data modeling'],
      benefits: ['Improve query performance', 'Reduce storage costs', 'Ensure data integrity'],
      category: 'Design'
    },
    {
      title: 'Database Migration',
      description: 'Seamless migration between database systems with zero data loss.',
      icon: '🔄',
      price: 'Starting at $5,000/project',
      features: ['Zero downtime migration', 'Data validation', 'Performance testing', 'Rollback planning'],
      benefits: ['Minimize business disruption', 'Improve performance', 'Reduce costs'],
      category: 'Migration'
    },
    {
      title: 'Database Performance Tuning',
      description: 'Optimize database performance for faster queries and better resource utilization.',
      icon: '⚡',
      price: 'Starting at $2,500/month',
      features: ['Query optimization', 'Index tuning', 'Resource monitoring', 'Performance analysis'],
      benefits: ['Improve query speed', 'Reduce resource usage', 'Enhance user experience'],
      category: 'Performance'
    },
    {
      title: 'Database Security & Compliance',
      description: 'Comprehensive database security including encryption, access control, and compliance.',
      icon: '🔒',
      price: 'Starting at $3,500/month',
      features: ['Data encryption', 'Access control', 'Audit logging', 'Compliance management'],
      benefits: ['Protect sensitive data', 'Meet compliance requirements', 'Prevent breaches'],
      category: 'Security'
    },
    {
      title: 'Database Monitoring & Maintenance',
      description: '24/7 database monitoring, maintenance, and support services.',
      icon: '📊',
      price: 'Starting at $2,000/month',
      features: ['24/7 monitoring', 'Automated backups', 'Performance alerts', 'Proactive maintenance'],
      benefits: ['Prevent downtime', 'Ensure data safety', 'Optimize performance'],
      category: 'Maintenance'
    },
    {
      title: 'Cloud Database Services',
      description: 'Managed database services on AWS RDS, Azure SQL, or Google Cloud SQL.',
      icon: '☁️',
      price: 'Starting at $1,500/month',
      features: ['Managed services', 'Auto-scaling', 'High availability', 'Backup & recovery'],
      benefits: ['Reduce management overhead', 'Improve reliability', 'Scale automatically'],
      category: 'Cloud'
    }
  ];

  const categories = [...new Set(databaseServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Database Services - Zion Tech Group</title>
        <meta name="description" content="Professional database services including design, migration, performance tuning, security, and cloud database solutions." />
        <meta name="keywords" content="database services, database design, database migration, performance tuning, database security, cloud databases" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Database Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Optimize your data infrastructure with expert database solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Get Database Consultation
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
                Expert database architects with deep experience across all major database systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Database Experts</h3>
                <p className="text-gray-600">Certified architects with 12+ years experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Focus</h3>
                <p className="text-gray-600">Optimize for speed and efficiency</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Enterprise-grade security and compliance</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock monitoring and support</p>
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
                  Professional {category.toLowerCase()} solutions for your database infrastructure
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
                        <div className="text-2xl font-bold text-purple-600 mb-2">{service.price}</div>
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
