import React from 'react';
import { CheckCircle, Star, Target, TrendingUp, BarChart, Check } from 'lucide-react';
import React from 'react';
import { CheckCircle, Star, Target, TrendingUp, BarChart, Check } from 'lucide-react';
import { BarChart, Target, TrendingUp } from 'lucide-react'
import React from 'react'
<<<<<<< HEAD
import { CheckCircle, Star, BarChart, TrendingUp, Target  } from "lucide-react";
import { BarChart, Target, TrendingUp } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, BarChart, TrendingUp, Target } from 'lucide-react'

constBusinessIntelligencePage: React.FC= () =>{constbiServices= [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
    {
      id: 'data-analytics,&apos;,
      title: 'Advanced Data Analytics,',
      description: 'Transform raw data into actionable insights with our comprehensive analytics solutions.',
      features: ['Real-time data processing,', 'Predictive analytics', 'Custom dashboards', 'Data visualization'],
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Better forecasting', 'Competitive advantage'],
      marketPrice: '$,1,20 0-3,50 0/month',
      category: 'Data Analytics,',
      technologies: ['Python,', 'R', 'SQL', 'Tableau', 'Power BI']
}
    {id: 'business-intelligence,',
      title: 'Business Intelligence Solutions,',
      description: 'Comprehensive BI platforms that provide insights across all business functions.',
      features: ['Executive dashboards,', 'KPI tracking', 'Report automation', 'Data integration'],
      benefits: ['36 0° business view', 'Faster reporting', 'Improved accuracy', 'Better planning'],
      marketPrice: '$,1,80 0-4,20 0/month',
      category: 'BI Platforms,',
      technologies: ['Microsoft BI,', 'QlikView', 'Looker', 'Sisense', 'Domo']
   },
    {id: 'data-warehousing,',
      title: 'Data Warehousing & ETL,',
      description: 'Centralized data storage and processing solutions for enterprise-scale analytics.',
      features: ['Data warehousing,', 'ETL processes', 'Data quality management', 'Scalable architecture'],
      benefits: ['Unified data source', 'Improved data quality', 'Better performance', 'Cost optimization'],
      marketPrice: '$,2,50 0-6,00 0/month',
      category: 'Data Infrastructure,',
      technologies: ['Snowflake,', 'BigQuery', 'Redshift', 'Azure Synapse', 'Talend']
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"></section>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Intelligence Services
=======
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
const Page: React.FC = () => {;
return (<>;
  </>;
      <SEOOptimizer title="Page",description="Professional page services and solutions for your business needs.", keywords={ ["page","AI solutions","business automation","technology services"] }; </div>
canonicalUrl = "https: //ziontechgroup.com/page""
      /></SEOOptimizer>,<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /  />"
        <Navigation/ />"
        <main className="container mx-auto px-4 py-16 pt-24" />,"
    <div className="text-center" / />,"
    <h1 className="text-4, xl, m,d: text-5 xl font-bold text-white mb-8 neon-text" /  />
Page</h1>
>>>>>>> d05312d5d680673ba2e628470e93a08bc6917172
            </h1>
            <p className="text-xl text-gray-300 mb-8" /  />"
Professional page services and solutions for your business needs.</p>
            </p>,<div className="cyber-card p-8 max-w-4 xl mx-auto" / />"
              <p className="text-gray-300" /  />
import { React from "react";
import { Navigation  } from "../components/Navigation";
import { Footer  } from "../components/Footer";
import { SEOOptimizer  } from "../components/SEOOptimizer";
const Page: React.FC = () => {
return (<SEOOptimizer title="Page",description="Professional page services and solutions for your business needs.", keywords={ ["page","AI solutions","business automation","technology services"] }; </div>
canonicalUrl = "https: //ziontechgroup.com/page"
      /></SEOOptimizer>,<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <Navigation/ /> <main className="container mx-auto px-4 py-16 pt-24" /> <div className="text-center" /> <h1 className="text-4, xl, m,d: text-5 xl font-bold text-white mb-8 neon-text" />
Page</h1>
            </h1> <p className="text-xl text-gray-300 mb-8" />
Professional page services and solutions for your business needs.</p>
            </p>,<div className="cyber-card p-8 max-w-4 xl mx-auto" /> <p className="text-gray-300" />
This page is under development. Please check back soon for more information about our page services.</p>
              </p>
              </div>
            </div>
        </main>
        <Footer//>
        </div>
      </section>
      {/* Services */}
      <section className="py-16 bg-gray-50"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our BI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business intelligence services designed to unlock the value in your data
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
            {biServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4"></div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-2xl font-bold text-blue-600">{service.marketPrice}</span>
                    <span className="text-sm text-gray-500">{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our BI experts help you unlock the full potential of your business data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
        </div>
      </div>
    </div>
  ),
}
export default BusinessIntelligencePage

export default BusinessIntelligencePage;
export default BusinessIntelligencePage;
