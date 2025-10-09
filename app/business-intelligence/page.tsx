import React from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              Business Intelligence Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Transform your data into actionable insights with our advanced BI platform
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Unlock the power of your data with comprehensive business intelligence solutions. 
              From real-time dashboards to predictive analytics, we help you make data-driven decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Business Intelligence Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive BI solutions to transform your data into strategic insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                  <div className="text-sm text-green-400 font-semibold">
                    Save up to 60% vs market rates
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Business Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <a 
                    href="tel:+13024640950"
                    className="flex-1 bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center"
                  >
                    Call Now
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex-1 border border-cyan-600 text-cyan-600 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors text-center"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start making data-driven decisions with our comprehensive business intelligence solutions. 
            Contact us for a free consultation and custom BI strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free consultation • ✓ Custom BI strategy • ✓ No commitment required</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;
