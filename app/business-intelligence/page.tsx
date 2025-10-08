import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, BarChart, TrendingUp, Target, Brain, Zap, Shield } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Live business intelligence dashboards with real-time data visualization and insights.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['Real-time data visualization', 'Interactive dashboards', 'Custom KPIs', 'Mobile responsive', 'Automated alerts'],
      benefits: ['Make decisions 10x faster', 'Identify trends instantly', 'Improve operational efficiency'],
      marketPrice: '$4,000-8,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Looker', 'D3.js', 'React']
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'AI-powered predictive models for forecasting sales, demand, and business trends.',
      icon: '🔮',
      price: 'Starting at $4,000/month',
      features: ['Sales forecasting', 'Demand prediction', 'Risk assessment', 'Scenario modeling', 'Trend analysis'],
      benefits: ['Improve accuracy by 60%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$6,500-15,000/month',
      category: 'Predictive Analytics',
      technologies: ['Python', 'R', 'TensorFlow', 'Prophet', 'ARIMA']
    },
    {
      title: 'Data Warehouse Solutions',
      description: 'Enterprise data warehouse design, implementation, and optimization for business intelligence.',
      icon: '🏗️',
      price: 'Starting at $5,500/month',
      features: ['Data modeling', 'ETL processes', 'Data quality management', 'Performance optimization', 'Scalability'],
      benefits: ['Centralize all data sources', 'Improve data quality', 'Enable faster analytics'],
      marketPrice: '$9,000-20,000/month',
      category: 'Data Infrastructure',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Apache Airflow', 'dbt']
    },
    {
      title: 'AI-Powered Insights Engine',
      description: 'Automated business insights generation using machine learning and natural language processing.',
      icon: '🧠',
      price: 'Starting at $3,500/month',
      features: ['Automated insights', 'Natural language queries', 'Anomaly detection', 'Pattern recognition', 'Custom reports'],
      benefits: ['Discover hidden patterns', 'Reduce analysis time by 80%', 'Generate actionable insights'],
      marketPrice: '$6,000-12,000/month',
      category: 'AI Insights',
      technologies: ['GPT-4', 'BERT', 'AutoML', 'NLP', 'Computer Vision']
    },
    {
      title: 'Customer Intelligence Platform',
      description: 'Comprehensive customer analytics and segmentation for personalized business strategies.',
      icon: '👥',
      price: 'Starting at $2,800/month',
      features: ['Customer segmentation', 'Behavioral analysis', 'Churn prediction', 'Lifetime value modeling', 'Personalization'],
      benefits: ['Increase customer retention by 40%', 'Boost sales by 25%', 'Improve customer experience'],
      marketPrice: '$4,500-10,000/month',
      category: 'Customer Analytics',
      technologies: ['RFM Analysis', 'Clustering', 'Cohort Analysis', 'A/B Testing', 'ML Models']
    },
    {
      title: 'Financial Intelligence Suite',
      description: 'Advanced financial analytics and reporting for better financial decision-making.',
      icon: '💰',
      price: 'Starting at $3,200/month',
      features: ['Financial reporting', 'Budget analysis', 'Cash flow forecasting', 'Profitability analysis', 'Risk management'],
      benefits: ['Improve financial visibility', 'Optimize cash flow', 'Reduce financial risks'],
      marketPrice: '$5,500-12,000/month',
      category: 'Financial Analytics',
      technologies: ['Financial Modeling', 'Time Series', 'Monte Carlo', 'Risk Analytics', 'FP&A']
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'End-to-end supply chain visibility and optimization through advanced analytics.',
      icon: '🚚',
      price: 'Starting at $4,500/month',
      features: ['Supply chain mapping', 'Demand forecasting', 'Inventory optimization', 'Supplier analytics', 'Risk assessment'],
      benefits: ['Reduce costs by 20%', 'Improve delivery times', 'Minimize supply chain risks'],
      marketPrice: '$7,500-18,000/month',
      category: 'Supply Chain',
      technologies: ['Network Optimization', 'Demand Planning', 'Inventory Management', 'Risk Analytics']
    },
    {
      title: 'Marketing Intelligence Platform',
      description: 'Comprehensive marketing analytics and attribution modeling for better campaign performance.',
      icon: '📈',
      price: 'Starting at $2,200/month',
      features: ['Campaign analytics', 'Attribution modeling', 'ROI analysis', 'Customer journey mapping', 'A/B testing'],
      benefits: ['Increase marketing ROI by 50%', 'Optimize ad spend', 'Improve conversion rates'],
      marketPrice: '$3,800-8,000/month',
      category: 'Marketing Analytics',
      technologies: ['Attribution Models', 'Multi-touch Attribution', 'Marketing Mix Modeling', 'Cohort Analysis']
    },
    {
      title: 'Operational Intelligence Dashboard',
      description: 'Real-time operational metrics and KPIs for manufacturing and service operations.',
      icon: '⚙️',
      price: 'Starting at $3,000/month',
      features: ['Real-time monitoring', 'KPI tracking', 'Performance analytics', 'Efficiency metrics', 'Quality control'],
      benefits: ['Improve operational efficiency', 'Reduce downtime', 'Optimize resource utilization'],
      marketPrice: '$5,000-12,000/month',
      category: 'Operations',
      technologies: ['IoT Analytics', 'Real-time Processing', 'Manufacturing Intelligence', 'Quality Analytics']
    }
  ];

  const categories = [...new Set(biServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence solutions including real-time analytics, predictive modeling, and AI-powered insights for data-driven decision making." />
        <meta name="keywords" content="business intelligence, data analytics, predictive analytics, data visualization, business insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Business Intelligence Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with advanced analytics and AI-powered intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Explore BI Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Request Demo
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
              <p className="text-xl text-gray-600">
                Advanced analytics and AI-powered insights that drive better business decisions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Insights</h3>
                <p className="text-gray-600">Live data visualization and instant business insights</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analytics</h3>
                <p className="text-gray-600">Machine learning and AI for predictive insights</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 6 months</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored analytics for your specific business needs</p>
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
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Advanced {category.toLowerCase()} services powered by cutting-edge analytics technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {biServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 45% vs market rates
                        </div>
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

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
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

                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Get BI Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our BI experts for a free consultation and custom analytics strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;