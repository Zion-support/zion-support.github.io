'use client';

import React from 'react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      description: 'Transform raw data into actionable insights with our comprehensive analytics solutions.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Data visualization'],
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Better forecasting', 'Competitive advantage'],
      marketPrice: '$1,200-3,500/month',
      category: 'Data Analytics',
      technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI']
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence Solutions',
      description: 'Comprehensive BI platforms that provide insights across all business functions.',
      features: ['Executive dashboards', 'KPI tracking', 'Report automation', 'Data integration'],
      benefits: ['360° business view', 'Faster reporting', 'Improved accuracy', 'Better planning'],
      marketPrice: '$1,800-4,200/month',
      category: 'BI Platforms',
      technologies: ['Microsoft BI', 'QlikView', 'Looker', 'Sisense', 'Domo']
    },
    {
      id: 'data-warehousing',
      title: 'Data Warehousing & ETL',
      description: 'Centralized data storage and processing solutions for enterprise-scale analytics.',
      features: ['Data warehousing', 'ETL processes', 'Data quality management', 'Scalable architecture'],
      benefits: ['Unified data source', 'Improved data quality', 'Better performance', 'Cost optimization'],
      marketPrice: '$2,500-6,000/month',
      category: 'Data Infrastructure',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse', 'Talend']
    }
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Intelligence Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your data into strategic insights that drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Explore BI Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
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
              Why Choose Our BI Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business intelligence solutions deliver actionable insights that drive real business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-600">Make informed decisions based on real-time data and comprehensive analytics</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
              <p className="text-gray-600">Identify opportunities for improvement and optimize business processes</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Planning</h3>
              <p className="text-gray-600">Plan for the future with predictive analytics and trend analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our BI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business intelligence services designed to unlock the value in your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {biServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
=======

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence solutions including real-time analytics, predictive modeling, and data visualization. Transform your data into actionable insights." />
        <meta name="keywords" content="business intelligence, analytics, data visualization, predictive analytics, BI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Business Intelligence Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our comprehensive business intelligence solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our BI Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
=======

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{service.marketPrice}</span>
                    <span className="text-sm text-gray-500">{service.category}</span>
                  </div>
                </div>
=======

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our BI experts help you unlock the full potential of your business data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
=======

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Business Intelligence Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our comprehensive BI solutions.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {biServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
              <div className="text-sm text-gray-500 mb-4">Market: {service.marketPrice}</div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6b31
=======
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our business intelligence services today and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    </div>
  );
};

export default BusinessIntelligencePage;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6b31
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
