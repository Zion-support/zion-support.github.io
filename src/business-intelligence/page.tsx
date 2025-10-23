import { CheckCircle, Star, Target, TrendingUp, BarChart, Check } from 'lucide-react';
'use client';
import {CheckCircle, Star, BarChart, Target, TrendingUp} from 'lucide-react';
import React from 'react';

constBusinessIntelligencePage: React.FC= () =>{constbiServices= [
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
  ];
  return (
  <divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-blue-50">{/* HeroSection */}
    <sectionclassName="relative py-20bg-gradient-to-rfrom-blue-600to-indigo-700text-white"><divclassName="absolute inset-0bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-autopx-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Business Intelligence Services
          </h><spanclassName="text-xlmd:text-2 xl mb-8 text-blue-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-blue-100max-w-3xlmx-auto">Transform your data into strategic insights that drive business growth
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colors"></className="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colors">Explore BI Solutions
            </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors">Schedule Demo
            </butto></di></di></di></sectio>{/* KeyBenefits */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our BI Solutions?
          </h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Our business intelligence solutions deliver actionable insights that drive real business value
          </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-centerp-6"><divclassName="w-16h-16bg-blue-100rounded-full flex items-center justify-centermx-automb-4"><BarChartclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">Data-DrivenDecisions</h><pclassName="text-gray-600">Make informed decisions based on real-time data andcomprehensiveanalytics</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-blue-100rounded-full flex items-center justify-centermx-automb-4"><TrendingUpclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">PerformanceOptimization</h><pclassName="text-gray-600">Identify opportunities for improvement and optimizebusinessprocesses</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-blue-100rounded-full flex items-center justify-centermx-automb-4"><TargetclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">StrategicPlanning</h><pclassName="text-gray-600">Plan for the future with predictive analytics andtrendanalysis</p></di></di></di></sectio>{/* Services */}
    <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our BI Solutions
          </h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Comprehensive business intelligence services designed to unlock the value in your data
          </p></di><divclassName="grid grid-cols-1lg:grid-cols-2gap-8">{biServices.map((service) => (
           <divkey={service.id}className="bg-white rounded-lg shado w-lg p-8 hover:shado w-xltransition-shadow"><h3className="text-2 xl font-bold text-gray-900mb-4">{service.title}</h><pclassName="text-gray-600mb-6">{service.description}</p><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">KeyFeatures:</h><ulclassName="space-y-2">{service.features.map((featureindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><CheckCircleclassName="w-5 h-5 text-green-500mr-2" />{feature}
                    </l>))}
                </u></di><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">Benefits:</h><ulclassName="space-y-2">{service.benefits.map((benefitindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><StarclassName="w-5 h-5 text-yellow-500mr-2" />{benefit}
                    </l>))}
                </u></di><divclassName="border-tpt-4"><divclassName="flexjustify-betweenitems-center"><spanclassName="text-2 xl font-boldtext-blue-600">{service.marketPrice}</spa><spanclassName="text-smtext-gray-500">{service.category}</spa></di></di></di>))}
        </di></di></sectio>{/* CTASection */}
    <sectionclassName="py-16bg-blue-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Transform Your Data?
        </h><spanclassName="text-xl mb-8 max-w-3xlmx-auto"></spa></className="text-xl mb-8 max-w-3xlmx-auto">Let our BI experts help you unlock the full potential of your business data
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colors"></spa></className="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colors">Get Started Today
          </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors"></spa></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors">Learn More
          </butto></di></di></sectio></di>
  );
};
export default BusinessIntelligencePage;
