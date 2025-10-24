'use client'
import { BarChart, Target, TrendingUp } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, BarChart, TrendingUp, Target } from 'lucide-react'

const BusinessIntelligencePage: React.FC = () => {constbiServices= [
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      description: 'Transform raw data into actionable insights with our comprehensive analytics solutions.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Data visualization'],
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Better forecasting', 'Competitive advantage'],
      marketPrice: '$1,20 0-3,50 0/month',
      category: 'Data Analytics',
      technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI']
   },
    {id: 'business-intelligence',
      title: 'Business Intelligence Solutions',
      description: 'Comprehensive BI platforms that provide insights across all business functions.',
      features: ['Executive dashboards', 'KPI tracking', 'Report automation', 'Data integration'],
      benefits: ['36 0° business view', 'Faster reporting', 'Improved accuracy', 'Better planning'],
      marketPrice: '$1,80 0-4,20 0/month',
      category: 'BI Platforms',
      technologies: ['Microsoft BI', 'QlikView', 'Looker', 'Sisense', 'Domo']
   },
    {id: 'data-warehousing',
      title: 'Data Warehousing & ETL',
      description: 'Centralized data storage and processing solutions for enterprise-scale analytics.',
      features: ['Data warehousing', 'ETL processes', 'Data quality management', 'Scalable architecture'],
      benefits: ['Unified data source', 'Improved data quality', 'Better performance', 'Cost optimization'],
      marketPrice: '$2,50 0-6,00 0/month',
      category: 'Data Infrastructure',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse', 'Talend']
    }
  ]
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&quot;></div>
      {/* Hero Section */}
      <section className=&quot;relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white&quot;></section>
        <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
              Business Intelligence Services
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto&quot;>
              Transform your data into strategic insights that drive business growth
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors&quot;>
                Explore BI Solutions
              </button>
              <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Key Benefits */}
      <section className=&quot;py-16 bg-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Why Choose Our BI Solutions?
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              Our business intelligence solutions deliver actionable insights that drive real business value
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <BarChart className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Data-Driven Decisions</h3>
              <p className=&quot;text-gray-600&quot;>Make informed decisions based on real-time data and comprehensive analytics</p>
            </div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <TrendingUp className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Performance Optimization</h3>
              <p className=&quot;text-gray-600&quot;>Identify opportunities for improvement and optimize business processes</p>
            </div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <Target className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Strategic Planning</h3>
              <p className=&quot;text-gray-600&quot;>Plan for the future with predictive analytics and trend analysis</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className=&quot;py-16 bg-gray-50&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Our BI Solutions
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              Comprehensive business intelligence services designed to unlock the value in your data
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;></div>
            {biServices.map((service) => (
              <div key={service.id} className=&quot;bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow&quot;></div>
                <h3 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-gray-600 mb-6&quot;>{service.description}</p>
                <div className=&quot;mb-6&quot;></div>
                  <h4 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Key Features:</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.features.map((feature, index) => (
                      <li key={index} className=&quot;flex items-center text-gray-600&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-2&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;mb-6&quot;></div>
                  <h4 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Benefits:</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className=&quot;flex items-center text-gray-600&quot;>
                        <Star className=&quot;w-5 h-5 text-yellow-500 mr-2&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;border-t pt-4&quot;></div>
                  <div className=&quot;flex justify-between items-center&quot;></div>
                    <span className=&quot;text-2xl font-bold text-blue-600&quot;>{service.marketPrice}</span>
                    <span className=&quot;text-sm text-gray-500&quot;>{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-16 bg-blue-600 text-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
            Ready to Transform Your Data?
          </h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            Let our BI experts help you unlock the full potential of your business data
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors&quot;>
              Get Started Today
            </button>
            <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;>
              Learn More
            </button>
          </div>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
        </div>
      </div>
    </div>
  )
}
export default BusinessIntelligencePage;
   }
  ];
  return (
  <divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-blue-50">{/* HeroSection */}
    <sectionclassName="relative py-20bg-gradient-to-rfrom-blue-600to-indigo-700text-white"><divclassName="absolute inset-0bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-autopx-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Business Intelligence Services</h><spanclassName="text-xlmd:text-2 xl mb-8 text-blue-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-blue-100max-w-3xlmx-auto">Transform your data into strategic insights that drive business growth</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colors"></className="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colors">Explore BI Solutions</butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors">Schedule Demo</butto></di></di></di></sectio>{/* KeyBenefits */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our BI Solutions?
          </h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Our business intelligence solutions deliver actionable insights that drive real business value</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-centerp-6"><divclassName="w-16h-16bg-blue-100rounded-full flex items-center justify-centermx-automb-4"><BarChartclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">Data-DrivenDecisions</h><pclassName="text-gray-600">Make informed decisions based on real-time data andcomprehensiveanalytics</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-blue-100rounded-full flex items-center justify-centermx-automb-4"><TrendingUpclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">PerformanceOptimization</h><pclassName="text-gray-600">Identify opportunities for improvement and optimizebusinessprocesses</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-blue-100rounded-full flex items-center justify-centermx-automb-4"><TargetclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">StrategicPlanning</h><pclassName="text-gray-600">Plan for the future with predictive analytics andtrendanalysis</p></di></di></di></sectio>{/* Services */}
    <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our BI Solutions</h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Comprehensive business intelligence services designed to unlock the value in your data</p></di><divclassName="grid grid-cols-1lg:grid-cols-2gap-8">{biServices.map((service) => (
           <divkey={service.id}className="bg-white rounded-lg shado w-lg p-8 hover:shado w-xltransition-shadow"><h3className="text-2 xl font-bold text-gray-900mb-4">{service.title}</h><pclassName="text-gray-600mb-6">{service.description}</p><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">KeyFeatures:</h><ulclassName="space-y-2">{service.features.map((featureindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><CheckCircleclassName="w-5 h-5 text-green-500mr-2" />{feature}
                    </l>))}
                </u></di><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">Benefits:</h><ulclassName="space-y-2">{service.benefits.map((benefitindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><StarclassName="w-5 h-5 text-yellow-500mr-2" />{benefit}
                    </l>))}
                </u></di><divclassName="border-tpt-4"><divclassName="flexjustify-betweenitems-center"><spanclassName="text-2 xl font-boldtext-blue-600">{service.marketPrice}</spa><spanclassName="text-smtext-gray-500">{service.category}</spa></di></di></di>))}
        </di></di></sectio>{/* CTASection */}
    <sectionclassName="py-16bg-blue-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Transform Your Data?
        </h><spanclassName="text-xl mb-8 max-w-3xlmx-auto"></spa></className="text-xl mb-8 max-w-3xlmx-auto">Let our BI experts help you unlock the full potential of your business data</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colors"></spa></className="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colors">Get Started Today</butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors"></spa></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors">Learn More</butto></di></di></sectio></di>
  );
};
export default BusinessIntelligencePage;
