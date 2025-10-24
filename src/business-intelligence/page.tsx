'use client'
import { BarChart, Target, TrendingUp } from 'lucide-react';
import React from 'react';
import { CheckCircle, Star, BarChart, TrendingUp, Target } from 'lucide-react';

constBusinessIntelligencePage: React.FC = () =>{constbiServices= [
    {
      id: 'data-analytics'
      title: 'Advanced Data Analytics'
      description: 'Transform raw data into actionable insights with our comprehensive analytics solutions.'
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Data visualization']
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Better forecasting', 'Competitive advantage']
      marketPrice: '$1,20 0-3,50 0/month'
      category: 'Data Analytics'
      technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI']
   }
    {id: 'business-intelligence'
      title: 'Business Intelligence Solutions'
      description: 'Comprehensive BI platforms that provide insights across all business functions.'
      features: ['Executive dashboards', 'KPI tracking', 'Report automation', 'Data integration']
      benefits: ['36 0° business view', 'Faster reporting', 'Improved accuracy', 'Better planning']
      marketPrice: '$1,80 0-4,20 0/month'
      category: 'BI Platforms'
      technologies: ['Microsoft BI', 'QlikView', 'Looker', 'Sisense', 'Domo']
   }
    {id: 'data-warehousing'
      title: 'Data Warehousing & ETL'
      description: 'Centralized data storage and processing solutions for enterprise-scale analytics.'
      features: ['Data warehousing', 'ETL processes', 'Data quality management', 'Scalable architecture']
      benefits: ['Unified data source', 'Improved data quality', 'Better performance', 'Cost optimization']
      marketPrice: '$2,50 0-6,00 0/month'
      category: 'Data Infrastructure'
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse', 'Talend']
    }
  ]
  return ()
    <div className="min-h-s creenbg-gradient-to-br from-slate-50 to-blue-50"></div>
      {/* Hero Section */}
      <section className="rel ativepy-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"></section>
        <div className="abs oluteinset-0 bg-black opacity-20"></div>
        <div className="rel ativemax-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="tex t-center"></div>
            <h1 className="tex t-4xlmd:text-6xl font-bold mb-6">
        </div>
              Business Intelligence Services
            </h1>
            <p className="tex t-xlmd:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
        </div>
              Transform your data into strategic insights that drive business growth
            </p>
            <div className="fle xflex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-wh itetext-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
        </div>
                Explore BI Solutions
              </button>
              <button className="bor der-2border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
        </div>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Key Benefits */}
      <section className="py-16bg-w hite"></section>
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="tex t-centermb-12"></div>
            <h2 className="tex t-3xlmd:text-4xl font-bold text-gray-900 mb-4">
        </div>
              Why Choose Our BI Solutions?
            </h2>
            <p className="tex t-xltext-gray-600 max-w-3xl mx-auto">
        </div>
              Our business intelligence solutions deliver actionable insights that drive real business value
            </p>
          </div>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="tex t-centerp-6"></div>
              <div className="w-16h-16bg-b l ue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <BarChart className="w-8h-8te x t-blue-600" />
              </div>
              <h3 className="tex t-xlfont-semibold text-gray-900 mb-2">Data-Driven Decisions</h3>
              <p className="tex t-gray-600">Make informed decisions based on real-time data and comprehensive analytics</p>
            </div>
            <div className="tex t-centerp-6"></div>
              <div className="w-16h-16bg-b l ue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <TrendingUp className="w-8h-8te x t-blue-600" />
              </div>
              <h3 className="tex t-xlfont-semibold text-gray-900 mb-2">Performance Optimization</h3>
              <p className="tex t-gray-600">Identify opportunities for improvement and optimize business processes</p>
            </div>
            <div className="tex t-centerp-6"></div>
              <div className="w-16h-16bg-b l ue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <Target className="w-8h-8te x t-blue-600" />
              </div>
              <h3 className="tex t-xlfont-semibold text-gray-900 mb-2">Strategic Planning</h3>
              <p className="tex t-gray-600">Plan for the future with predictive analytics and trend analysis</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="py-16bg-g ray-50"></section>
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="tex t-centermb-12"></div>
            <h2 className="tex t-3xlmd:text-4xl font-bold text-gray-900 mb-4">
        </div>
              Our BI Solutions
            </h2>
            <p className="tex t-xltext-gray-600 max-w-3xl mx-auto">
        </div>
              Comprehensive business intelligence services designed to unlock the value in your data
            </p>
          </div>
          <div className="gri dgrid-cols-1 lg:grid-cols-2 gap-8"></div>
            {biServices.map((service) => ()
              <div key={service.id} className="bg-wh iterounded-lg shadow-lg p-8 hover: shadow-xl transition-shadow"></div>
                <h3 className="tex t-2xlfont-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="tex t-gray-600mb-6">{service.description}</p>
                <div className="mb-6"></div>
                  <h4 className="tex t-lgfont-semibold text-gray-900 mb-3">Key Features: </h4>
                  <ul className="spa ce-y-2">
        </div>
                    {service.features.map((feature, index) => ()
                      <li key={index} className="fle xitems-center text-gray-600">
        </div>
                        <CheckCircle className="w-5h-5te x t-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6"></div>
                  <h4 className="tex t-lgfont-semibold text-gray-900 mb-3">Benefits: </h4>
                  <ul className="spa ce-y-2">
        </div>
                    {service.benefits.map((benefit, index) => ()
                      <li key={index} className="fle xitems-center text-gray-600">
        </div>
                        <Star className="w-5h-5te x t-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bor der-tpt-4"></div>
                  <div className="fle xjustify-between items-center"></div>
                    <span className="tex t-2xlfont-bold text-blue-600">{service.marketPrice}</span>
                    <span className="tex t-smtext-gray-500">{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16bg-b lue-600 text-white"></section>
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
          <h2 className="tex t-3xlmd:text-4xl font-bold mb-4">
        </div>
            Ready to Transform Your Data?
          </h2>
          <p className="tex t-xlmb-8 max-w-3xl mx-auto">
        </div>
            Let our BI experts help you unlock the full potential of your business data
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-wh itetext-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
        </div>
              Get Started Today
            </button>
            <button className="bor der-2border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
        </div>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BusinessIntelligencePage;
