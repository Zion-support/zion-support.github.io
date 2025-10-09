import React from 'react';
import Head from 'next/head';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, BarChart, PieChart, LineChart, Activity } from 'lucide-react';

const AnalyticsToolsPage: React.FC = () => {
  const analyticsServices = [
    {
      title: 'AI Business Intelligence Dashboard',
      description: 'Intelligent business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
      icon: '📊',
      price: '$1,200/month',
      features: [
        'Real-time Dashboards',
        'AI-Powered Insights',
        'Predictive Analytics',
        'Automated Reporting',
        'Custom Visualizations',
        'Data Integration'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends and patterns',
        'Improve business performance',
        'Reduce reporting time by 80%'
      ],
      marketPrice: '$2,400-4,800/month',
      category: 'Business Intelligence',
      technologies: ['Power BI', 'Tableau', 'AI/ML', 'Data Visualization', 'APIs', 'Cloud Analytics']
    },
    {
      title: 'AI Customer Analytics',
      description: 'Intelligent customer analytics with behavior analysis, segmentation, and predictive customer insights.',
      icon: '👥',
      price: '$1,500/month',
      features: [
        'Customer Segmentation',
        'Behavior Analysis',
        'Churn Prediction',
        'Lifetime Value Analysis',
        'Personalization Insights',
        'Customer Journey Mapping'
      ],
      benefits: [
        'Understand customer behavior',
        'Reduce churn by 40%',
        'Increase customer lifetime value',
        'Personalize customer experience'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Customer Analytics',
      technologies: ['Customer Data Platform', 'AI/ML', 'Segmentation', 'Predictive Models', 'APIs', 'Analytics']
    },
    {
      title: 'AI Marketing Analytics',
      description: 'Intelligent marketing analytics with campaign optimization, attribution modeling, and ROI analysis.',
      icon: '📢',
      price: '$1,300/month',
      features: [
        'Campaign Performance Analysis',
        'Attribution Modeling',
        'ROI Optimization',
        'Audience Insights',
        'Conversion Tracking',
        'Marketing Automation'
      ],
      benefits: [
        'Optimize marketing campaigns',
        'Improve ROI by 60%',
        'Identify high-value audiences',
        'Automate marketing decisions'
      ],
      marketPrice: '$2,600-5,200/month',
      category: 'Marketing Analytics',
      technologies: ['Marketing Analytics', 'Attribution', 'AI/ML', 'Campaign Optimization', 'APIs', 'Automation']
    },
    {
      title: 'AI Sales Analytics',
      description: 'Intelligent sales analytics with pipeline analysis, forecasting, and performance optimization.',
      icon: '💰',
      price: '$1,400/month',
      features: [
        'Sales Pipeline Analysis',
        'Revenue Forecasting',
        'Performance Tracking',
        'Lead Scoring',
        'Sales Optimization',
        'Commission Analytics'
      ],
      benefits: [
        'Improve sales performance',
        'Accurate revenue forecasting',
        'Optimize sales processes',
        'Increase conversion rates by 50%'
      ],
      marketPrice: '$2,800-5,600/month',
      category: 'Sales Analytics',
      technologies: ['CRM Integration', 'Sales Analytics', 'AI/ML', 'Forecasting', 'APIs', 'Performance Tracking']
    },
    {
      title: 'AI Financial Analytics',
      description: 'Intelligent financial analytics with risk assessment, fraud detection, and financial forecasting.',
      icon: '💳',
      price: '$1,800/month',
      features: [
        'Financial Forecasting',
        'Risk Assessment',
        'Fraud Detection',
        'Cost Analysis',
        'Profitability Analysis',
        'Compliance Monitoring'
      ],
      benefits: [
        'Improve financial planning',
        'Detect fraud automatically',
        'Optimize costs by 30%',
        'Ensure financial compliance'
      ],
      marketPrice: '$3,600-7,200/month',
      category: 'Financial Analytics',
      technologies: ['Financial Systems', 'Risk Models', 'Fraud Detection', 'AI/ML', 'APIs', 'Compliance']
    },
    {
      title: 'AI Operational Analytics',
      description: 'Intelligent operational analytics with process optimization, efficiency analysis, and performance monitoring.',
      icon: '⚙️',
      price: '$1,100/month',
      features: [
        'Process Analysis',
        'Efficiency Optimization',
        'Performance Monitoring',
        'Resource Utilization',
        'Bottleneck Detection',
        'Operational Insights'
      ],
      benefits: [
        'Optimize operations',
        'Improve efficiency by 45%',
        'Reduce operational costs',
        'Identify process improvements'
      ],
      marketPrice: '$2,200-4,400/month',
      category: 'Operational Analytics',
      technologies: ['Process Mining', 'Operational Analytics', 'AI/ML', 'Optimization', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Web Analytics',
      description: 'Intelligent web analytics with user behavior analysis, conversion optimization, and performance insights.',
      icon: '🌐',
      price: '$800/month',
      features: [
        'User Behavior Analysis',
        'Conversion Tracking',
        'A/B Testing',
        'Performance Monitoring',
        'Traffic Analysis',
        'SEO Insights'
      ],
      benefits: [
        'Optimize website performance',
        'Increase conversions by 35%',
        'Understand user behavior',
        'Improve SEO performance'
      ],
      marketPrice: '$1,600-3,200/month',
      category: 'Web Analytics',
      technologies: ['Google Analytics', 'Web Analytics', 'A/B Testing', 'AI/ML', 'APIs', 'SEO Tools']
    },
    {
      title: 'AI Social Media Analytics',
      description: 'Intelligent social media analytics with sentiment analysis, engagement tracking, and content optimization.',
      icon: '📱',
      price: '$900/month',
      features: [
        'Sentiment Analysis',
        'Engagement Tracking',
        'Content Performance',
        'Audience Insights',
        'Trend Analysis',
        'Influencer Analytics'
      ],
      benefits: [
        'Optimize social media strategy',
        'Improve engagement by 50%',
        'Understand audience sentiment',
        'Identify trending topics'
      ],
      marketPrice: '$1,800-3,600/month',
      category: 'Social Media Analytics',
      technologies: ['Social Media APIs', 'Sentiment Analysis', 'AI/ML', 'Engagement Tracking', 'APIs', 'Analytics']
    },
    {
      title: 'AI Supply Chain Analytics',
      description: 'Intelligent supply chain analytics with demand forecasting, inventory optimization, and logistics analysis.',
      icon: '📦',
      price: '$1,600/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Logistics Analysis',
        'Supplier Performance',
        'Risk Assessment',
        'Cost Optimization'
      ],
      benefits: [
        'Optimize supply chain',
        'Reduce inventory costs by 25%',
        'Improve demand forecasting',
        'Minimize supply disruptions'
      ],
      marketPrice: '$3,200-6,400/month',
      category: 'Supply Chain Analytics',
      technologies: ['Supply Chain Systems', 'Demand Forecasting', 'AI/ML', 'Optimization', 'APIs', 'Analytics']
    },
    {
      title: 'AI HR Analytics',
      description: 'Intelligent HR analytics with employee insights, performance analysis, and workforce optimization.',
      icon: '👔',
      price: '$1,200/month',
      features: [
        'Employee Performance Analysis',
        'Retention Prediction',
        'Workforce Planning',
        'Engagement Analytics',
        'Recruitment Analytics',
        'Training Effectiveness'
      ],
      benefits: [
        'Optimize workforce performance',
        'Reduce turnover by 30%',
        'Improve employee engagement',
        'Make data-driven HR decisions'
      ],
      marketPrice: '$2,400-4,800/month',
      category: 'HR Analytics',
      technologies: ['HRIS Integration', 'HR Analytics', 'AI/ML', 'Predictive Models', 'APIs', 'Workforce Planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI Analytics Tools - Zion Tech Group</title>
        <meta name="description" content="Intelligent analytics tools with AI-powered insights, predictive analytics, and automated reporting. Transform your data into actionable insights starting at $800/month." />
        <meta name="keywords" content="ai analytics tools, business intelligence, data analytics, predictive analytics, business insights, data visualization" />
      </Head>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Analytics Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with AI-powered analytics tools that provide intelligent reporting, predictive analytics, and automated business intelligence.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Faster Reporting</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$800</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">60%</div>
              <div className="text-gray-300">ROI Improvement</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Analytics Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
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
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

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
                  <p className="text-xs text-gray-500 mt-2">
                    Contact: kleber@ziontechgroup.com | +1 302 464 0950
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI analytics tools today and make data-driven decisions that drive business growth.
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
    </div>
  );
};

export default AnalyticsToolsPage;