import React from 'react';
import { Link } from 'react-router-dom';
const CloudMigration: React.FC = () => {,
  const services = [,
    {
title: "AWS Migration","
      description: "Complete migration to Amazon Web Services with zero downtime",",
      features: [
        "Lift and shift migration","
        "Application modernization","
        "Database migration","
        "Cost optimization","
        "Security hardening""
      ],
      price: "$5,000 - $50,000","
      duration: "2-12 weeks""
    },
    {
      title: "Azure Migration","
      description: "Seamless migration to Microsoft Azure cloud platform",",
      features: [
        "Hybrid cloud setup","
        "Active Directory integration","
        "DevOps integration","
        "Monitoring setup","
        "Backup & disaster recovery""
      ],
      price: "$4,500 - $45,000","
      duration: "2-10 weeks""
    },
    {
      title: "Google Cloud Migration","
      description: "Migration to Google Cloud Platform with advanced analytics",",
      features: [
        "BigQuery integration","
        "AI/ML services","
        "Kubernetes migration","
        "Data analytics setup","
        "Performance optimization""
      ],
      price: "$4,000 - $40,000","
      duration: "2-8 weeks""
    },
    {
      title: "Multi-Cloud Strategy","
      description: "Distributed cloud architecture across multiple providers",",
      features: [
        "Multi-cloud architecture","
        "Cloud governance","
        "Cost management","
        "Disaster recovery","
        "Vendor management""
      ],
      price: "$8,000 - $80,000","
      duration: "4-16 weeks""
    }
  ];,
  const benefits = [
    {
      title: "Cost Reduction","
      description: "Reduce infrastructure costs by up to 40%","
      icon: "💰""
    },
    {
      title: "Scalability","
      description: "Scale resources based on demand","
      icon: "📈""
    },
    {
      title: "Security","
      description: "Enterprise-grade security and compliance","
      icon: "🔒""
    },
    {
      title: "Performance","
      description: "Improved application performance and reliability","
      icon: "⚡""
    },
    {
      title: "Flexibility","
      description: "Access to latest cloud technologies and services","
      icon: "🔄""
    },
    {
      title: "Disaster Recovery","
      description: "Automated backup and disaster recovery","
      icon: "🛡️""
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">"
      {/* Hero Section */}
<div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Migration Services</h1>"
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">"
            Seamlessly migrate your applications and infrastructure to the cloud.
            Our expert team ensures zero downtime and maximum performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get Migration Assessment
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg"" />,
              View Pricing
            </Link>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Migration Services</h2>"
            <p className="text-xl text-gray-600">Choose the right cloud platform for your business</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">"
                <div className="p-8">"
                  <div className="text-4xl mb-4">☁️</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-2 mb-6">"
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">"
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">"
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />"
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">"
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>"
                      <div className="text-sm text-gray-500">{service.duration}</div>"
                    </div>
                    <Link to="/contact""
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"" />,
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Cloud Migration?</h2>"
            <p className="text-xl text-gray-600">Transform your business with cloud technology</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">"
                <div className="text-4xl mb-4">{benefit.icon}</div>"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>"
                <p className="text-gray-600">{benefit.description}</p>"
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Process Section */}
      <div className="py-20 bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Migration Process</h2>"
            <p className="text-xl text-gray-600">Our proven methodology ensures successful migration</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-cyan-600">1</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>"
              <p className="text-gray-600">Analyze current infrastructure and plan migration strategy</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-blue-600">2</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>"
              <p className="text-gray-600">Create detailed migration plan with timeline and resources</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-indigo-600">3</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Migration</h3>"
              <p className="text-gray-600">Execute migration with zero downtime and minimal disruption</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-purple-600">4</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>"
              <p className="text-gray-600">Optimize performance and costs for maximum efficiency</p>"
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">"
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>"
          <p className="text-xl text-cyan-100 mb-8">"
            Get a free migration assessment and discover how cloud can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get Free Assessment
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg"" />,
              View Migration Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudMigration;
