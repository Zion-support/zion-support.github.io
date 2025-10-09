import React from 'react';
import { CheckCircle } from 'lucide-react';

const AIDataAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      title: 'Real-Time Business Intelligence Platform',
      description: 'Advanced AI-powered analytics platform providing real-time insights, predictive modeling, and automated reporting for data-driven decision making.',
      icon: '📊',
      price: '$1,299/month',
      features: [
        'Real-time data processing',
        'Predictive analytics models',
        'Automated report generation',
        'Interactive dashboards',
        'Custom KPI tracking',
        'Data visualization tools',
        'API integrations',
        'Mobile app access'
      ],
      benefits: [
        'Increase decision speed by 60%',
        'Reduce manual reporting by 85%',
        'Identify trends 3x faster',
        'Improve forecast accuracy by 40%'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Business Intelligence',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis', 'Apache Kafka'],
      useCases: ['Retail Analytics', 'Financial Forecasting', 'Supply Chain Optimization', 'Customer Behavior Analysis']
    },
    {
      title: 'AI-Powered Customer Analytics Suite',
      description: 'Comprehensive customer data analysis platform with behavioral insights, churn prediction, and personalized recommendation engines.',
      icon: '👥',
      price: '$899/month',
      features: [
        'Customer segmentation',
        'Churn prediction models',
        'Lifetime value analysis',
        'Behavioral pattern recognition',
        'Personalization engine',
        'A/B testing framework',
        'Cohort analysis',
        'ROI tracking'
      ],
      benefits: [
        'Increase customer retention by 35%',
        'Boost conversion rates by 45%',
        'Reduce churn by 50%',
        'Improve customer satisfaction'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Customer Analytics',
      technologies: ['Machine Learning', 'Python', 'Scikit-learn', 'Pandas', 'React', 'MongoDB'],
      useCases: ['E-commerce', 'SaaS Companies', 'Financial Services', 'Healthcare']
    },
    {
      title: 'Predictive Maintenance Analytics',
      description: 'IoT and AI-driven predictive maintenance solution for manufacturing and industrial equipment monitoring.',
      icon: '🔧',
      price: '$1,599/month',
      features: [
        'Equipment health monitoring',
        'Failure prediction algorithms',
        'Maintenance scheduling optimization',
        'Cost-benefit analysis',
        'Alert management system',
        'Performance benchmarking',
        'Historical trend analysis',
        'Integration with IoT sensors'
      ],
      benefits: [
        'Reduce unplanned downtime by 70%',
        'Lower maintenance costs by 40%',
        'Extend equipment lifespan by 25%',
        'Improve operational efficiency'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Industrial Analytics',
      technologies: ['Time Series Analysis', 'LSTM Networks', 'Python', 'TensorFlow', 'InfluxDB', 'Grafana'],
      useCases: ['Manufacturing', 'Oil & Gas', 'Utilities', 'Transportation']
    },
    {
      title: 'Financial Risk Analytics Platform',
      description: 'Advanced risk assessment and fraud detection system using machine learning for financial institutions.',
      icon: '💰',
      price: '$1,999/month',
      features: [
        'Real-time fraud detection',
        'Credit risk assessment',
        'Market risk analysis',
        'Regulatory compliance monitoring',
        'Transaction pattern analysis',
        'Risk scoring algorithms',
        'Alert management',
        'Comprehensive reporting'
      ],
      benefits: [
        'Detect fraud with 99.5% accuracy',
        'Reduce false positives by 60%',
        'Comply with regulations automatically',
        'Save millions in prevented losses'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Financial Analytics',
      technologies: ['Deep Learning', 'Anomaly Detection', 'Python', 'PyTorch', 'Apache Spark', 'Kafka'],
      useCases: ['Banks', 'Credit Unions', 'Fintech', 'Insurance Companies']
    },
    {
      title: 'AI Marketing Attribution Platform',
      description: 'Advanced marketing analytics with multi-touch attribution, campaign optimization, and ROI maximization.',
      icon: '📈',
      price: '$1,199/month',
      features: [
        'Multi-touch attribution modeling',
        'Campaign performance analysis',
        'Customer journey mapping',
        'ROI optimization',
        'Cross-channel analytics',
        'Budget allocation recommendations',
        'Competitive analysis',
        'Real-time reporting'
      ],
      benefits: [
        'Improve marketing ROI by 50%',
        'Optimize budget allocation',
        'Identify high-value channels',
        'Reduce customer acquisition costs'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Marketing Analytics',
      technologies: ['Attribution Modeling', 'Python', 'R', 'Google Analytics API', 'Facebook API', 'React'],
      useCases: ['E-commerce', 'SaaS', 'Retail', 'Digital Agencies']
    },
    {
      title: 'Supply Chain Intelligence Suite',
      description: 'AI-powered supply chain analytics for demand forecasting, inventory optimization, and supplier performance tracking.',
      icon: '🚚',
      price: '$1,499/month',
      features: [
        'Demand forecasting models',
        'Inventory optimization',
        'Supplier performance tracking',
        'Supply chain risk assessment',
        'Cost optimization analysis',
        'Lead time prediction',
        'Quality metrics tracking',
        'Sustainability reporting'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve forecast accuracy by 45%',
        'Minimize stockouts by 80%',
        'Optimize supplier relationships'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Supply Chain Analytics',
      technologies: ['Time Series Forecasting', 'Optimization Algorithms', 'Python', 'OR-Tools', 'PostgreSQL', 'React'],
      useCases: ['Manufacturing', 'Retail', 'Logistics', 'Food & Beverage']
    }
  ];

  const additionalFeatures = [
    {
      title: 'Advanced Data Processing',
      description: 'Handle massive datasets with real-time processing capabilities',
      icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your specific data',
      icon: <Brain className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Interactive Dashboards',
      description: 'Beautiful, responsive dashboards for all devices',
      icon: <BarChart3 className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Predictive Insights',
      description: 'AI-powered predictions and recommendations',
      icon: <Target className="w-8 h-8 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Data Analytics Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI-powered analytics solutions
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
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Analytics Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered analytics platforms for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Analytics Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology and expert implementation for maximum ROI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom analytics solution
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
  );
};

export default AIDataAnalyticsPage;