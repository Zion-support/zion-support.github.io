'use client';
import React from 'react';
import { BarChart, Target, TrendingUp, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Data Warehousing',
      description: 'Build centralized data repositories that consolidate information from multiple sources for comprehensive analysis.',
      features: ['ETL Processes', 'Data Modeling', 'Data Quality', 'Scalable Architecture', 'Real-time Integration'],
      benefits: ['Unified data view', 'Improved data quality', 'Faster queries', 'Better insights']
    },
    {
      title: 'Business Intelligence Dashboards',
      description: 'Create interactive dashboards that provide real-time insights into key business metrics and performance indicators.',
      features: ['Interactive Visualizations', 'Real-time Data', 'Custom Metrics', 'Mobile Access', 'Drill-down Capabilities'],
      benefits: ['Data-driven decisions', 'Improved visibility', 'Faster insights', 'Better performance tracking']
    },
    {
      title: 'Reporting Solutions',
      description: 'Automated reporting systems that generate comprehensive reports for different stakeholders and use cases.',
      features: ['Automated Reports', 'Custom Templates', 'Scheduled Delivery', 'Multiple Formats', 'Role-based Access'],
      benefits: ['Time savings', 'Consistent reporting', 'Better compliance', 'Improved communication']
    },
    {
      title: 'Data Mining & Analytics',
      description: 'Extract valuable insights from large datasets using advanced analytics and machine learning techniques.',
      features: ['Pattern Recognition', 'Predictive Analytics', 'Statistical Analysis', 'Machine Learning', 'Data Exploration'],
      benefits:['Hidden insights', 'Predictive capabilities', 'Competitive advantage', 'Better forecasting']
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into compelling visual stories that are easy to understand and act upon.',
      features: ['Interactive Charts', 'Custom Visualizations', 'Storytelling', 'Mobile Responsive', 'Export Options'],
      benefits:['Better understanding', 'Faster insights', 'Improved communication', 'Enhanced presentations']
    },
    {
      title: 'Self-Service Analytics',
      description: 'Empower business users with self-service analytics tools that don\'t require technical expertise.',
      features: ['Drag-and-drop Interface', 'Pre-built Templates', 'User Training', 'Governance Controls', 'Collaboration'],
      benefits:['User empowerment', 'Reduced IT dependency', 'Faster insights', 'Better adoption']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Business Intelligence & Analytics Solutions | Zion Tech Group"
        description="Expert business intelligence services including data warehousing, dashboards, reporting, and analytics. Transform your data into actionable business insights."
        keywords={['business intelligence', 'data analytics', 'data warehousing', 'dashboards', 'reporting', 'data visualization']}
        canonicalUrl="https://ziontechgroup.com/business-intelligence"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Business Intelligence & Analytics
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable business insights with advanced analytics and visualization
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our business intelligence experts help you unlock the value in your data through comprehensive 
              analytics, interactive dashboards, and self-service tools that drive informed decision-making.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-orange-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BI Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">BI Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Data Assessment</h3>
                <p className="text-gray-300 text-sm">Analyze existing data sources, quality, and integration requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Architecture Design</h3>
                <p className="text-gray-300 text-sm">Design data warehouse and analytics architecture for your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Development</h3>
                <p className="text-gray-300 text-sm">Build data pipelines, dashboards, and reporting solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Training & Support</h3>
                <p className="text-gray-300 text-sm">User training, documentation, and ongoing support</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">BI Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Power BI', 'Tableau', 'QlikView', 'Looker', 'Sisense', 'Domo', 'SQL Server', 'Oracle', 'Snowflake', 'BigQuery', 'Python', 'R'].map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-medium text-white">{tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">BI Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Analytics</h3>
                <p className="text-gray-300 text-sm">
                  Track revenue, expenses, profitability, and financial performance across all business units.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-3">Customer Analytics</h3>
                <p className="text-gray-300 text-sm">
                  Analyze customer behavior, preferences, and lifetime value for better marketing and sales.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Sales Performance</h3>
                <p className="text-gray-300 text-sm">
                  Monitor sales metrics, pipeline health, and team performance for improved results.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-white mb-3">Operations Analytics</h3>
                <p className="text-gray-300 text-sm">
                  Optimize operational efficiency, resource utilization, and process performance.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Marketing Analytics</h3>
                <p className="text-gray-300 text-sm">
                  Measure campaign effectiveness, ROI, and customer acquisition costs.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300 text-sm">
                  Forecast trends, demand, and business outcomes using advanced analytics.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Unlock Your Data?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how business intelligence can transform your data into competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your BI Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BusinessIntelligencePage;