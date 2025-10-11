import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Code, Smartphone, Brain, Cpu, DollarSign, Star, Users, Clock, BarChart3, FileText, TrendingUp, PieChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DataAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Business Intelligence & Reporting',
      description: 'Comprehensive BI solutions to transform raw data into actionable business insights and reports.',
      features: [
        'Interactive dashboards and visualizations',
        'Automated report generation',
        'Real-time data monitoring',
        'Custom KPI tracking',
        'Data storytelling and presentation',
        'Mobile BI applications',
        'Self-service analytics',
        'Executive reporting'
      ],
      pricing: {
        setup: '$5,000',
        implementation: 'Starting at $15,000',
        maintenance: '$2,000/month',
        support: '$1,200/month'
      },
      benefits: ['Make data-driven decisions', 'Improve operational efficiency', 'Identify growth opportunities', 'Enhance reporting accuracy'],
      useCases: ['Executive dashboards', 'Operational reporting', 'Performance tracking', 'Business insights'],
      link: '/business-intelligence'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced predictive modeling and forecasting solutions to anticipate future trends and outcomes.',
      features: [
        'Machine learning model development',
        'Time series forecasting',
        'Predictive modeling algorithms',
        'Risk assessment and scoring',
        'Demand forecasting',
        'Customer behavior prediction',
        'Churn prediction models',
        'Revenue forecasting'
      ],
      pricing: {
        assessment: '$3,000',
        development: 'Starting at $12,000',
        maintenance: '$1,800/month',
        support: '$1,000/month'
      },
      benefits: ['Anticipate future trends', 'Reduce business risks', 'Optimize resource allocation', 'Improve decision accuracy'],
      useCases: ['Sales forecasting', 'Risk management', 'Customer analytics', 'Inventory optimization'],
      link: '/predictive-analytics'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Warehouse & ETL Solutions',
      description: 'Complete data warehousing solutions with ETL/ELT pipelines for centralized data management.',
      features: [
        'Data warehouse design and architecture',
        'ETL/ELT pipeline development',
        'Data integration from multiple sources',
        'Data quality and cleansing',
        'Data modeling and schema design',
        'Real-time data processing',
        'Data governance and security',
        'Performance optimization'
      ],
      pricing: {
        design: '$4,000',
        implementation: 'Starting at $20,000',
        maintenance: '$2,500/month',
        support: '$1,500/month'
      },
      benefits: ['Centralize data management', 'Improve data quality', 'Enable real-time analytics', 'Scale with business growth'],
      useCases: ['Data consolidation', 'ETL development', 'Data quality improvement', 'Centralized reporting'],
      link: '/data-warehouse'
    },
    {
      icon: <PieChart className="w-8 h-8 text-orange-500" />,
      title: 'Data Visualization & Dashboards',
      description: 'Interactive data visualization and dashboard solutions to present complex data in an understandable format.',
      features: [
        'Interactive dashboard creation',
        'Advanced data visualization',
        'Real-time data updates',
        'Custom chart and graph development',
        'Drill-down and filtering capabilities',
        'Mobile-responsive design',
        'Collaborative features',
        'Export and sharing options'
      ],
      pricing: {
        design: '$2,500',
        development: 'Starting at $8,000',
        maintenance: '$1,200/month',
        support: '$800/month'
      },
      benefits: ['Present data clearly', 'Improve data comprehension', 'Enable interactive exploration', 'Facilitate decision making'],
      useCases: ['Executive dashboards', 'Operational monitoring', 'Data exploration', 'Performance tracking'],
      link: '/data-visualization'
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'Machine Learning & AI Analytics',
      description: 'Advanced machine learning and AI-powered analytics solutions for intelligent data processing.',
      features: [
        'Machine learning model development',
        'Deep learning implementation',
        'Natural language processing',
        'Computer vision analytics',
        'Recommendation systems',
        'Anomaly detection',
        'Model training and optimization',
        'AI model deployment'
      ],
      pricing: {
        consultation: '$2,000',
        development: 'Starting at $15,000',
        maintenance: '$2,200/month',
        support: '$1,500/month'
      },
      benefits: ['Automate data analysis', 'Discover hidden patterns', 'Improve prediction accuracy', 'Enable intelligent automation'],
      useCases: ['Pattern recognition', 'Automated insights', 'Predictive modeling', 'Intelligent recommendations'],
      link: '/ml-ai-analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'Customer Analytics & Segmentation',
      description: 'Comprehensive customer analytics solutions to understand behavior, preferences, and lifetime value.',
      features: [
        'Customer segmentation analysis',
        'Behavioral analytics',
        'Customer journey mapping',
        'Lifetime value prediction',
        'Churn analysis and prevention',
        'Personalization insights',
        'Customer satisfaction analysis',
        'Retention optimization'
      ],
      pricing: {
        analysis: '$3,500',
        implementation: 'Starting at $10,000',
        maintenance: '$1,500/month',
        support: '$1,000/month'
      },
      benefits: ['Understand customer behavior', 'Improve customer retention', 'Optimize marketing campaigns', 'Increase customer lifetime value'],
      useCases: ['Customer segmentation', 'Churn prevention', 'Marketing optimization', 'Customer insights'],
      link: '/customer-analytics'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'Financial Analytics & Reporting',
      description: 'Specialized financial analytics solutions for budgeting, forecasting, and financial performance analysis.',
      features: [
        'Financial reporting automation',
        'Budget vs actual analysis',
        'Cash flow forecasting',
        'Profitability analysis',
        'Cost center reporting',
        'Financial KPI tracking',
        'Compliance reporting',
        'Financial modeling'
      ],
      pricing: {
        setup: '$4,500',
        implementation: 'Starting at $12,000',
        maintenance: '$1,800/month',
        support: '$1,200/month'
      },
      benefits: ['Automate financial reporting', 'Improve financial visibility', 'Optimize budget allocation', 'Ensure compliance'],
      useCases: ['Financial reporting', 'Budget analysis', 'Cash flow management', 'Compliance reporting'],
      link: '/financial-analytics'
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: 'Real-Time Analytics & Monitoring',
      description: 'Real-time data processing and monitoring solutions for immediate insights and alerts.',
      features: [
        'Real-time data streaming',
        'Live dashboard updates',
        'Automated alerting systems',
        'Performance monitoring',
        'Anomaly detection',
        'Event processing',
        'Real-time reporting',
        'Mobile notifications'
      ],
      pricing: {
        setup: '$3,000',
        implementation: 'Starting at $8,000',
        monitoring: '$1,500/month',
        support: '$1,000/month'
      },
      benefits: ['Get immediate insights', 'Respond to issues quickly', 'Monitor performance in real-time', 'Improve operational efficiency'],
      useCases: ['Performance monitoring', 'Real-time alerts', 'Live dashboards', 'Event processing'],
      link: '/realtime-analytics'
    }
  ];

  const stats = [
    { number: '500+', label: 'Analytics Projects' },
    { number: '99.9%', label: 'Data Accuracy' },
    { number: '50+', label: 'Data Sources' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const industries = [
    'Retail & E-commerce',
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing',
    'Education',
    'Real Estate',
    'Media & Entertainment',
    'Government'
  ];

  const benefits = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real data insights'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Predictive Insights',
      description: 'Anticipate trends and opportunities before they happen'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
      title: 'Cost Optimization',
      description: 'Identify cost-saving opportunities and optimize spending'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Customer Understanding',
      description: 'Gain deep insights into customer behavior and preferences'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Comprehensive data analytics services including business intelligence, predictive analytics, data warehousing, and machine learning. Transform your data into actionable insights." />
        <meta name="keywords" content="data analytics, business intelligence, predictive analytics, data warehousing, machine learning, data visualization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Data Analytics & Business Intelligence
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Transform your data into actionable insights with our comprehensive analytics solutions. 
              From business intelligence to machine learning, we help you make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Analytics Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/analytics-demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Analytics Demo
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Data Analytics?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Unlock the power of your data with advanced analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Analytics Service Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive analytics solutions to transform your data into business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {analyticsServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([key, value], priceIndex) => (
                      <div key={priceIndex} className="flex justify-between text-sm">
                        <span className="text-gray-300 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Our analytics solutions are tailored for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Unlock Your Data's Potential?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our analytics solutions can transform your data into actionable business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Analytics Consultation
                </Link>
                <Link 
                  to="/analytics-demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Analytics Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsPage;