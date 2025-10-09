import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Database, Users, Target, Zap, Brain, Globe, ArrowRight, CheckCircle, Star, Shield, Clock, DollarSign } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive business intelligence dashboards with real-time data visualization and interactive reporting.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['Real-time dashboards', 'Custom KPI tracking', 'Interactive charts', 'Mobile responsive', 'Automated reports'],
      benefits: ['Better decision making', 'Improved efficiency', 'Data-driven insights', 'Cost reduction'],
      marketPrice: '$3,000-8,000/month',
      category: 'Analytics',
      technologies: ['Power BI', 'Tableau', 'QlikView', 'D3.js', 'React']
    },
    {
      title: 'Data Warehouse Solutions',
      description: 'Enterprise data warehouse design and implementation for centralized data management and analytics.',
      icon: '🏗️',
      price: 'Starting at $5,000/month',
      features: ['Data modeling', 'ETL processes', 'Data quality management', 'Scalable architecture', 'Security compliance'],
      benefits: ['Centralized data', 'Improved data quality', 'Faster reporting', 'Better compliance'],
      marketPrice: '$8,000-25,000/month',
      category: 'Data Management',
      technologies: ['Snowflake', 'AWS Redshift', 'Azure Synapse', 'Google BigQuery', 'Apache Spark']
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning-powered predictive models for forecasting and trend analysis.',
      icon: '🔮',
      price: 'Starting at $3,500/month',
      features: ['Predictive modeling', 'Machine learning', 'Statistical analysis', 'Risk assessment', 'Forecasting'],
      benefits: ['Future insights', 'Risk mitigation', 'Optimized planning', 'Competitive advantage'],
      marketPrice: '$5,000-15,000/month',
      category: 'AI Analytics',
      technologies: ['Python', 'R', 'TensorFlow', 'Scikit-learn', 'Pandas']
    },
    {
      title: 'Real-time Reporting',
      description: 'Live data streaming and real-time business intelligence reporting solutions.',
      icon: '⚡',
      price: 'Starting at $2,000/month',
      features: ['Real-time data streams', 'Live dashboards', 'Instant alerts', 'Mobile notifications', 'API integration'],
      benefits: ['Immediate insights', 'Faster response', 'Better monitoring', 'Proactive management'],
      marketPrice: '$3,000-10,000/month',
      category: 'Real-time BI',
      technologies: ['Apache Kafka', 'Redis', 'WebSocket', 'Apache Storm', 'Node.js']
    },
    {
      title: 'Self-Service BI',
      description: 'User-friendly self-service business intelligence tools for non-technical users.',
      icon: '👥',
      price: 'Starting at $1,500/month',
      features: ['Drag-and-drop interface', 'Pre-built templates', 'User training', 'Role-based access', 'Custom reports'],
      benefits: ['User empowerment', 'Reduced IT dependency', 'Faster insights', 'Better adoption'],
      marketPrice: '$2,500-7,000/month',
      category: 'Self-Service',
      technologies: ['Power BI', 'Tableau', 'Looker', 'Metabase', 'Grafana']
    },
    {
      title: 'BI Consulting',
      description: 'Strategic BI consulting and roadmap development for data-driven transformation.',
      icon: '💡',
      price: 'Starting at $300/hour',
      features: ['BI strategy development', 'Technology assessment', 'Data governance', 'Change management', 'Training programs'],
      benefits: ['Align BI with business goals', 'Maximize BI investment', 'Ensure successful adoption'],
      marketPrice: '$500-1,200/hour',
      category: 'BI Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Change Management', 'Training Programs']
    }
  ];

  const categories = [...new Set(biServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence solutions including analytics dashboards, data warehousing, predictive analytics, and real-time reporting for data-driven decision making." />
        <meta name="keywords" content="business intelligence, analytics, data visualization, dashboards, reporting, data warehouse, predictive analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Business Intelligence Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your data into actionable insights with our comprehensive business intelligence solutions. 
                From advanced analytics to predictive modeling, we help you make data-driven decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    Category: {service.category}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our BI experts help you unlock the full potential of your data with cutting-edge analytics and reporting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;