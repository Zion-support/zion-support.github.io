import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Globe, Brain, Target, BarChart, MessageSquare, Eye, ArrowRight } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'AI-Powered Data Analytics',
      description: 'Advanced data analytics with machine learning algorithms for predictive insights and business intelligence.',
      icon: '📊',
      price: '$2,500/month',
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Machine Learning Models',
        'Custom Dashboards',
        'Data Visualization',
        'Automated Reporting'
      ],
      benefits: [
        'Increase revenue by 25%',
        'Reduce operational costs by 30%',
        'Improve decision-making speed by 50%',
        'Identify new business opportunities'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Analytics',
      technologies: ['Python', 'R', 'TensorFlow', 'Power BI', 'Tableau', 'Apache Spark'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'Comprehensive BI dashboards with real-time metrics, KPI tracking, and interactive visualizations.',
      icon: '📈',
      price: '$1,800/month',
      features: [
        'Real-time Dashboards',
        'KPI Monitoring',
        'Interactive Visualizations',
        'Custom Metrics',
        'Mobile Access',
        'Automated Alerts'
      ],
      benefits: [
        'Improve visibility into business performance',
        'Enable data-driven decisions',
        'Reduce reporting time by 70%',
        'Increase team productivity'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Dashboards',
      technologies: ['React', 'D3.js', 'Chart.js', 'Power BI', 'Tableau', 'QlikView'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence solutions with AI-powered analytics, real-time dashboards, and predictive insights. Transform your data into actionable business intelligence." />
        <meta name="keywords" content="business intelligence, data analytics, BI dashboards, predictive analytics, data visualization, KPI tracking" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            Business Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
            Transform Data into Strategic Insights
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Unlock the power of your data with our advanced business intelligence solutions. Get real-time insights, predictive analytics, and actionable intelligence to drive your business forward.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Business Intelligence Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 text-center mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400 text-center">Market Price: {service.marketPrice}</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Get Quote
                  </a>
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
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-white mb-8">
            Let our BI experts help you unlock the full potential of your business data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;
