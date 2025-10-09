import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Live business intelligence dashboards with real-time data visualization and interactive reporting.',
      icon: '📊',
      price: 'Starting at $2,800/month',
      features: ['Real-time data streaming', 'Interactive dashboards', 'Custom visualizations', 'Mobile responsive', 'Automated alerts'],
      benefits: ['Make faster decisions', 'Identify trends immediately', 'Improve operational efficiency'],
      marketPrice: '$4,500-12,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Superset', 'Custom Dashboards']
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced forecasting models for sales, demand, inventory, and business trend prediction.',
      icon: '🔮',
      price: 'Starting at $3,500/month',
      features: ['Time series forecasting', 'Demand prediction', 'Sales forecasting', 'Risk assessment', 'Scenario modeling'],
      benefits: ['Improve planning accuracy by 50%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$6,000-18,000/month',
      category: 'Predictive Analytics',
      technologies: ['Prophet', 'ARIMA', 'LSTM', 'XGBoost', 'Time Series DB']
    },
    {
      title: 'Data Warehouse Design & Implementation',
      description: 'Comprehensive data warehouse solutions for centralized data storage and analytics.',
      icon: '🏗️',
      price: 'Starting at $4,200/month',
      features: ['Data modeling', 'ETL processes', 'Data quality management', 'Schema design', 'Performance optimization'],
      benefits: ['Centralize all business data', 'Improve data quality', 'Enable advanced analytics'],
      marketPrice: '$7,000-20,000/month',
      category: 'Data Engineering',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Apache Airflow', 'dbt']
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent BI systems that automatically identify patterns and generate insights.',
      icon: '🧠',
      price: 'Starting at $4,500/month',
      features: ['Automated insights', 'Anomaly detection', 'Natural language queries', 'Pattern recognition', 'Smart recommendations'],
      benefits: ['Discover hidden patterns', 'Reduce analysis time by 80%', 'Make data-driven decisions'],
      marketPrice: '$8,000-25,000/month',
      category: 'AI-Powered BI',
      technologies: ['Machine Learning', 'NLP', 'Computer Vision', 'AutoML', 'Custom AI Models']
    },
    {
      title: 'Customer Analytics & Segmentation',
      description: 'Advanced customer analytics for segmentation, behavior analysis, and lifetime value prediction.',
      icon: '👥',
      price: 'Starting at $2,500/month',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value modeling', 'Personalization'],
      benefits: ['Increase customer retention', 'Improve targeting', 'Boost revenue per customer'],
      marketPrice: '$4,000-12,000/month',
      category: 'Customer Analytics',
      technologies: ['RFM Analysis', 'Clustering', 'Cohort Analysis', 'Survival Analysis', 'ML Models']
    },
    {
      title: 'Financial Analytics & Reporting',
      description: 'Comprehensive financial analytics with automated reporting and compliance monitoring.',
      icon: '💰',
      price: 'Starting at $3,200/month',
      features: ['Financial dashboards', 'Automated reporting', 'Budget vs actual analysis', 'Cash flow forecasting', 'Compliance monitoring'],
      benefits: ['Improve financial visibility', 'Ensure compliance', 'Optimize financial performance'],
      marketPrice: '$5,500-15,000/month',
      category: 'Financial Analytics',
      technologies: ['Financial Modeling', 'Budgeting Tools', 'Compliance Systems', 'Risk Analytics']
    },
    {
      title: 'Supply Chain Analytics',
      description: 'End-to-end supply chain visibility with demand forecasting and optimization analytics.',
      icon: '📦',
      price: 'Starting at $3,800/month',
      features: ['Supply chain visibility', 'Demand forecasting', 'Inventory optimization', 'Supplier performance', 'Risk analysis'],
      benefits: ['Reduce supply chain costs', 'Improve demand accuracy', 'Minimize disruptions'],
      marketPrice: '$6,500-18,000/month',
      category: 'Supply Chain Analytics',
      technologies: ['Demand Planning', 'Inventory Optimization', 'Supplier Analytics', 'Risk Management']
    },
    {
      title: 'Marketing Analytics & Attribution',
      description: 'Comprehensive marketing analytics with multi-touch attribution and ROI optimization.',
      icon: '📈',
      price: 'Starting at $2,800/month',
      features: ['Multi-touch attribution', 'Campaign performance', 'ROI analysis', 'Customer journey mapping', 'A/B testing analytics'],
      benefits: ['Optimize marketing spend', 'Improve campaign performance', 'Increase ROI'],
      marketPrice: '$4,500-12,000/month',
      category: 'Marketing Analytics',
      technologies: ['Attribution Modeling', 'Marketing Mix Modeling', 'Cohort Analysis', 'Funnel Analysis']
    },
    {
      title: 'Operational Analytics',
      description: 'Real-time operational metrics and KPI monitoring for business process optimization.',
      icon: '⚙️',
      price: 'Starting at $2,200/month',
      features: ['KPI dashboards', 'Process monitoring', 'Performance metrics', 'Operational efficiency', 'Quality analytics'],
      benefits: ['Improve operational efficiency', 'Reduce costs', 'Enhance quality'],
      marketPrice: '$3,500-10,000/month',
      category: 'Operational Analytics',
      technologies: ['Process Mining', 'KPI Dashboards', 'Quality Analytics', 'Efficiency Metrics']
    },
    {
      title: 'Self-Service Analytics Platform',
      description: 'Empower business users with self-service analytics tools and data exploration capabilities.',
      icon: '🔍',
      price: 'Starting at $3,500/month',
      features: ['Self-service dashboards', 'Data exploration', 'Ad-hoc reporting', 'User training', 'Governance controls'],
      benefits: ['Reduce IT dependency', 'Accelerate insights', 'Empower business users'],
      marketPrice: '$6,000-15,000/month',
      category: 'Self-Service BI',
      technologies: ['Self-Service Tools', 'Data Catalogs', 'Governance Platforms', 'Training Systems']
    },
    {
      title: 'Advanced Data Visualization',
      description: 'Custom data visualization solutions with interactive charts, maps, and infographics.',
      icon: '🎨',
      price: 'Starting at $2,000/month',
      features: ['Custom visualizations', 'Interactive charts', 'Geographic mapping', 'Infographic design', 'Animation effects'],
      benefits: ['Improve data comprehension', 'Enhance presentations', 'Engage stakeholders'],
      marketPrice: '$3,500-8,000/month',
      category: 'Data Visualization',
      technologies: ['D3.js', 'Chart.js', 'Mapbox', 'Custom Graphics', 'Animation Tools']
    },
    {
      title: 'BI Strategy & Consulting',
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

  return (
    <>
      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence solutions including real-time analytics, predictive modeling, data warehousing, and AI-powered insights for data-driven decision making." />
        <meta name="keywords" content="business intelligence, analytics, data visualization, predictive analytics, data warehouse, BI consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Business Intelligence Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our comprehensive business intelligence solutions. 
              From real-time analytics to AI-powered predictions, we help you make data-driven decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-6 py-3">
                <span className="text-blue-400 font-semibold">Real-Time Analytics</span>
              </div>
              <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg px-6 py-3">
                <span className="text-purple-400 font-semibold">Predictive Modeling</span>
              </div>
              <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-6 py-3">
                <span className="text-green-400 font-semibold">Data Warehousing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                    <span className="text-sm text-gray-400 ml-2">({service.marketPrice} market rate)</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <div className="text-xs text-gray-400">
                    <strong>Technologies:</strong> {service.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our BI experts help you build a comprehensive data strategy that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Get Started Today
              </a>
              <a
                href="/ai-services"
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-200"
              >
                Explore AI Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;
