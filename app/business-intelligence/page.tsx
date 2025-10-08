import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, BarChart, TrendingUp, Database, Eye, Target, Users, Globe, Smartphone, Cloud, Key, Search, FileText, Zap, Award, Clock, Settings, Bell, Heart, Download, Upload, Share, Edit, Trash, Plus, Minus, ArrowRight, Rocket, PieChart, LineChart, Activity, Layers } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Comprehensive business intelligence dashboard with real-time data visualization and KPI tracking.',
      icon: '📊',
      price: 'Starting at $1,800/month',
      features: ['Real-time data visualization', 'Custom KPI dashboards', 'Interactive charts', 'Mobile responsive', 'Automated reports'],
      benefits: ['Make data-driven decisions', 'Monitor performance in real-time', 'Identify trends instantly'],
      marketPrice: '$3,500-8,000/month',
      category: 'Dashboards',
      technologies: ['Tableau', 'Power BI', 'React', 'D3.js', 'Real-time APIs'],
      popular: true
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'AI-powered predictive models for sales forecasting, demand planning, and trend analysis.',
      icon: '🔮',
      price: 'Starting at $2,500/month',
      features: ['Sales forecasting', 'Demand prediction', 'Trend analysis', 'Scenario modeling', 'Risk assessment'],
      benefits: ['Improve planning accuracy by 50%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$5,000-15,000/month',
      category: 'Predictive Analytics',
      technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Prophet', 'Time Series DB']
    },
    {
      title: 'Data Warehouse & ETL Solutions',
      description: 'Comprehensive data warehousing with automated ETL processes and data integration.',
      icon: '🏗️',
      price: 'Starting at $3,200/month',
      features: ['Data warehouse design', 'ETL pipeline development', 'Data integration', 'Data quality management', 'Performance optimization'],
      benefits: ['Centralize data sources', 'Improve data quality', 'Enable advanced analytics'],
      marketPrice: '$6,000-18,000/month',
      category: 'Data Engineering',
      technologies: ['Snowflake', 'Apache Airflow', 'Apache Spark', 'dbt', 'Kafka']
    },
    {
      title: 'Customer Analytics & Segmentation',
      description: 'Advanced customer analytics with behavioral segmentation and lifetime value prediction.',
      icon: '👥',
      price: 'Starting at $2,200/month',
      features: ['Customer segmentation', 'Behavioral analysis', 'Lifetime value prediction', 'Churn prediction', 'Personalization'],
      benefits: ['Increase customer retention', 'Improve marketing ROI', 'Personalize customer experience'],
      marketPrice: '$4,500-12,000/month',
      category: 'Customer Analytics',
      technologies: ['Python', 'Machine Learning', 'Clustering', 'RFM Analysis', 'Customer Data Platform']
    },
    {
      title: 'Financial Analytics & Reporting',
      description: 'Comprehensive financial analytics with automated reporting and compliance monitoring.',
      icon: '💰',
      price: 'Starting at $2,800/month',
      features: ['Financial dashboards', 'P&L analysis', 'Cash flow forecasting', 'Budget tracking', 'Compliance reporting'],
      benefits: ['Improve financial visibility', 'Automate reporting', 'Ensure compliance'],
      marketPrice: '$5,500-15,000/month',
      category: 'Financial Analytics',
      technologies: ['Power BI', 'Excel', 'SQL', 'Financial APIs', 'Compliance Tools']
    },
    {
      title: 'Marketing Analytics & Attribution',
      description: 'Advanced marketing analytics with multi-touch attribution and campaign optimization.',
      icon: '📈',
      price: 'Starting at $2,000/month',
      features: ['Multi-touch attribution', 'Campaign performance', 'ROI analysis', 'Customer journey mapping', 'A/B testing'],
      benefits: ['Optimize marketing spend', 'Improve campaign ROI', 'Understand customer journey'],
      marketPrice: '$4,000-12,000/month',
      category: 'Marketing Analytics',
      technologies: ['Google Analytics', 'Adobe Analytics', 'Attribution Models', 'Marketing Automation', 'Data Science']
    },
    {
      title: 'Supply Chain Analytics',
      description: 'Comprehensive supply chain analytics with demand forecasting and optimization.',
      icon: '🚚',
      price: 'Starting at $2,500/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier performance', 'Risk analysis', 'Cost optimization'],
      benefits: ['Reduce supply chain costs', 'Improve demand accuracy', 'Minimize supply disruptions'],
      marketPrice: '$5,000-15,000/month',
      category: 'Supply Chain',
      technologies: ['Python', 'Optimization', 'Time Series', 'Supply Chain APIs', 'Machine Learning']
    },
    {
      title: 'HR Analytics & Workforce Intelligence',
      description: 'Advanced HR analytics with employee performance tracking and predictive insights.',
      icon: '👨‍💼',
      price: 'Starting at $1,900/month',
      features: ['Employee performance', 'Retention analysis', 'Recruitment analytics', 'Skills gap analysis', 'Workforce planning'],
      benefits: ['Improve employee retention', 'Optimize recruitment', 'Plan workforce needs'],
      marketPrice: '$3,800-10,000/month',
      category: 'HR Analytics',
      technologies: ['HRIS Integration', 'People Analytics', 'Machine Learning', 'Survey Tools', 'Performance Management']
    },
    {
      title: 'Operational Analytics & KPI Management',
      description: 'Comprehensive operational analytics with KPI tracking and performance optimization.',
      icon: '⚙️',
      price: 'Starting at $2,300/month',
      features: ['KPI dashboards', 'Operational metrics', 'Performance monitoring', 'Process optimization', 'Alert systems'],
      benefits: ['Improve operational efficiency', 'Monitor key metrics', 'Optimize processes'],
      marketPrice: '$4,500-12,000/month',
      category: 'Operations',
      technologies: ['BI Tools', 'KPI Management', 'Process Mining', 'Automation', 'Monitoring']
    },
    {
      title: 'Sales Analytics & CRM Intelligence',
      description: 'Advanced sales analytics with pipeline management and revenue forecasting.',
      icon: '💼',
      price: 'Starting at $2,100/month',
      features: ['Sales pipeline analysis', 'Revenue forecasting', 'Lead scoring', 'Territory analysis', 'Performance tracking'],
      benefits: ['Increase sales productivity', 'Improve forecasting accuracy', 'Optimize sales processes'],
      marketPrice: '$4,200-12,000/month',
      category: 'Sales Analytics',
      technologies: ['Salesforce', 'HubSpot', 'Sales Analytics', 'Machine Learning', 'CRM Integration']
    },
    {
      title: 'Web Analytics & Digital Intelligence',
      description: 'Comprehensive web analytics with user behavior analysis and conversion optimization.',
      icon: '🌐',
      price: 'Starting at $1,500/month',
      features: ['User behavior analysis', 'Conversion tracking', 'Funnel analysis', 'A/B testing', 'Heatmap analysis'],
      benefits: ['Improve website performance', 'Increase conversions', 'Understand user behavior'],
      marketPrice: '$3,000-8,000/month',
      category: 'Web Analytics',
      technologies: ['Google Analytics', 'Adobe Analytics', 'Hotjar', 'Optimizely', 'Custom Tracking']
    },
    {
      title: 'Social Media Analytics & Monitoring',
      description: 'Comprehensive social media analytics with sentiment analysis and engagement tracking.',
      icon: '📱',
      price: 'Starting at $1,200/month',
      features: ['Social media monitoring', 'Sentiment analysis', 'Engagement tracking', 'Influencer analysis', 'Trend analysis'],
      benefits: ['Monitor brand reputation', 'Improve social strategy', 'Track engagement'],
      marketPrice: '$2,500-7,000/month',
      category: 'Social Analytics',
      technologies: ['Social APIs', 'Sentiment Analysis', 'NLP', 'Social Listening', 'Engagement Metrics']
    },
    {
      title: 'Mobile Analytics & App Intelligence',
      description: 'Advanced mobile app analytics with user behavior tracking and performance monitoring.',
      icon: '📲',
      price: 'Starting at $1,800/month',
      features: ['User behavior tracking', 'App performance', 'Crash analytics', 'User retention', 'In-app analytics'],
      benefits: ['Improve app performance', 'Increase user retention', 'Optimize user experience'],
      marketPrice: '$3,500-10,000/month',
      category: 'Mobile Analytics',
      technologies: ['Firebase', 'Mixpanel', 'Amplitude', 'Crashlytics', 'Custom Analytics']
    },
    {
      title: 'IoT Analytics & Sensor Intelligence',
      description: 'Comprehensive IoT analytics with sensor data processing and predictive maintenance.',
      icon: '📡',
      price: 'Starting at $2,800/month',
      features: ['Sensor data processing', 'Predictive maintenance', 'Anomaly detection', 'Real-time monitoring', 'Alert systems'],
      benefits: ['Prevent equipment failures', 'Optimize maintenance', 'Improve efficiency'],
      marketPrice: '$5,500-15,000/month',
      category: 'IoT Analytics',
      technologies: ['IoT Platforms', 'Time Series DB', 'Machine Learning', 'Edge Computing', 'Real-time Processing']
    },
    {
      title: 'Competitive Intelligence & Market Analysis',
      description: 'Comprehensive competitive analysis with market intelligence and benchmarking.',
      icon: '🎯',
      price: 'Starting at $2,400/month',
      features: ['Competitive analysis', 'Market intelligence', 'Benchmarking', 'Trend analysis', 'SWOT analysis'],
      benefits: ['Stay ahead of competition', 'Identify market opportunities', 'Make informed decisions'],
      marketPrice: '$4,800-15,000/month',
      category: 'Competitive Intelligence',
      technologies: ['Web Scraping', 'Data Mining', 'Market Research', 'Analytics', 'Visualization']
    },
    {
      title: 'Risk Analytics & Compliance Monitoring',
      description: 'Advanced risk analytics with compliance monitoring and regulatory reporting.',
      icon: '⚠️',
      price: 'Starting at $2,600/month',
      features: ['Risk assessment', 'Compliance monitoring', 'Regulatory reporting', 'Fraud detection', 'Alert systems'],
      benefits: ['Mitigate risks', 'Ensure compliance', 'Prevent fraud'],
      marketPrice: '$5,200-18,000/month',
      category: 'Risk Analytics',
      technologies: ['Risk Management', 'Compliance Tools', 'Fraud Detection', 'Regulatory APIs', 'Monitoring']
    },
    {
      title: 'Text Analytics & Sentiment Analysis',
      description: 'Advanced text analytics with sentiment analysis and content intelligence.',
      icon: '📝',
      price: 'Starting at $1,600/month',
      features: ['Sentiment analysis', 'Text mining', 'Content analysis', 'Topic modeling', 'Language processing'],
      benefits: ['Understand customer sentiment', 'Analyze feedback', 'Extract insights from text'],
      marketPrice: '$3,200-10,000/month',
      category: 'Text Analytics',
      technologies: ['NLP', 'Sentiment Analysis', 'Topic Modeling', 'Text Mining', 'Machine Learning']
    },
    {
      title: 'Geospatial Analytics & Location Intelligence',
      description: 'Comprehensive geospatial analytics with location-based insights and mapping.',
      icon: '🗺️',
      price: 'Starting at $2,200/month',
      features: ['Geospatial analysis', 'Location intelligence', 'Mapping visualization', 'Territory analysis', 'Route optimization'],
      benefits: ['Optimize locations', 'Understand geographic patterns', 'Improve logistics'],
      marketPrice: '$4,400-12,000/month',
      category: 'Geospatial Analytics',
      technologies: ['GIS', 'Mapping APIs', 'Geospatial DB', 'Visualization', 'Location Intelligence']
    },
    {
      title: 'Real-Time Streaming Analytics',
      description: 'Real-time data streaming analytics with instant insights and alerting.',
      icon: '⚡',
      price: 'Starting at $3,500/month',
      features: ['Real-time processing', 'Stream analytics', 'Instant alerts', 'Live dashboards', 'Event processing'],
      benefits: ['Get instant insights', 'Respond to events quickly', 'Monitor in real-time'],
      marketPrice: '$7,000-20,000/month',
      category: 'Streaming Analytics',
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Storm', 'Real-time DB', 'Stream Processing']
    },
    {
      title: 'Self-Service BI & Data Discovery',
      description: 'Self-service business intelligence platform for end-user data exploration.',
      icon: '🔍',
      price: 'Starting at $2,000/month',
      features: ['Self-service analytics', 'Data discovery', 'Ad-hoc reporting', 'Data visualization', 'User training'],
      benefits: ['Empower business users', 'Reduce IT dependency', 'Accelerate insights'],
      marketPrice: '$4,000-12,000/month',
      category: 'Self-Service BI',
      technologies: ['Tableau', 'Power BI', 'Qlik', 'Self-Service Tools', 'Data Governance']
    }
  ];

  const categories = [...new Set(biServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Business Intelligence Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence solutions including real-time analytics, predictive modeling, data warehousing, and comprehensive reporting." />
        <meta name="keywords" content="business intelligence, analytics, data visualization, predictive analytics, data warehousing, BI consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Business Intelligence Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with advanced analytics and intelligent reporting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get BI Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View BI Solutions
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
                Advanced analytics and data intelligence delivered by certified data scientists and BI experts
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">AI-powered analytics and machine learning models</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Insights</h3>
                <p className="text-gray-600">Live dashboards and real-time data visualization</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Integration</h3>
                <p className="text-gray-600">Seamless integration with all your data sources</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 400% ROI within 12 months</p>
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
                  Advanced {category.toLowerCase()} solutions to unlock your data's potential
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {biServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
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
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
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

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get BI Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* BI Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our BI Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Advanced business intelligence technologies and methodologies we use to transform your data
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <BarChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600">Interactive charts, dashboards, and reports</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Machine learning and forecasting models</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Integration</h3>
                <p className="text-gray-600">ETL processes and data warehousing</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Eye className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600">Live dashboards and streaming analytics</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Target className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Service BI</h3>
                <p className="text-gray-600">Empower users with self-service analytics</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Zap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Statistical analysis and data mining</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our BI experts for a free data assessment and custom analytics strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;