import React from 'react'
import { BarChart3 } from 'lucide-react'
import { CheckCircle, Brain, Target, Database } from 'lucide-react'

const AIDataAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      title: 'Real-Time Business Intelligence Platform',
      description: 'Advanced AI-powered analytics platform providing real-time insights, predictive modeling, and automated reporting for data-driven decision making.',
      icon: '📊',
      price: '$1,29 9/month',
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
        'Increase decision speed by 6 0%',
        'Reduce manual reporting by 8 5%',
        'Identify trends 3 x faster',
        'Improve forecast accuracy by40%'
      ],
      marketPrice: '$2,00 0-4,00 0/month',
      category: 'Business Intelligence',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis', 'Apache Kafka'],
      useCases: ['Retail Analytics', 'Financial Forecasting', 'Supply Chain Optimization', 'Customer Behavior Analysis']
   },
    {title: 'AI-Powered Customer Analytics Suite',
      description: 'Comprehensive customer data analysis platform with behavioral insights, churn prediction, and personalized recommendation engines.',
      icon: '👥',
      price: '$89 9/month',
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
        'Increase customer retention by 3 5%',
        'Boost conversion rates by 4 5%',
        'Reduce churn by50%',
        'Improve customer satisfaction'
      ],
      marketPrice: '$1,50 0-3,00 0/month',
      category: 'Customer Analytics',
      technologies: ['Machine Learning', 'Python', 'Scikit-learn', 'Pandas', 'React', 'MongoDB'],
      useCases: ['E-commerce', 'SaaS Companies', 'Financial Services', 'Healthcare']
   },
    {title: 'Predictive Maintenance Analytics',
      description: 'IoT and AI-driven predictive maintenance solution for manufacturing and industrial equipment monitoring.',
      icon: '🔧',
      price: '$1,59 9/month',
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
        'Reduce unplanned do wntime by 7 0%',
        'Lower maintenance costs by 4 0%',
        'Extend equipment lifespan by25%',
        'Improve operational efficiency'
      ],
      marketPrice: '$2,50 0-5,00 0/month',
      category: 'Industrial Analytics',
      technologies: ['Time Series Analysis', 'LSTM Networks', 'Python', 'TensorFlow', 'InfluxDB', 'Grafana'],
      useCases: ['Manufacturing', 'Oil & Gas', 'Utilities', 'Transportation']
   },
    {title: 'Financial Risk Analytics Platform',
      description: 'Advanced risk assessment and fraud detection system using machine learning for financial institutions.',
      icon: '💰',
      price: '$1,99 9/month',
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
        'Detect fraud with 9 9.5% accuracy',
        'Reduce false positives by60%',
        'Comply with regulations automatically',
        'Save millions in prevented losses'
      ],
      marketPrice: '$3,00 0-6,00 0/month',
      category: 'Financial Analytics',
      technologies: ['Deep Learning', 'Anomaly Detection', 'Python', 'PyTorch', 'Apache Spark', 'Kafka'],
      useCases: ['Banks', 'Credit Unions', 'Fintech', 'Insurance Companies']
   },
    {title: 'AI Marketing Attribution Platform',
      description: 'Advanced marketing analytics with multi-touch attribution, campaign optimization, and ROI maximization.',
      icon: '📈',
      price: '$1,19 9/month',
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
        'Improve marketing ROI by50%',
        'Optimize budget allocation',
        'Identify high-value channels',
        'Reduce customer acquisition costs'
      ],
      marketPrice: '$2,00 0-4,00 0/month',
      category: 'Marketing Analytics',
      technologies: ['Attribution Modeling', 'Python', 'R', 'Google Analytics API', 'Facebook API', 'React'],
      useCases: ['E-commerce', 'SaaS', 'Retail', 'Digital Agencies']
   },
    {title: 'Supply Chain Intelligence Suite',
      description: 'AI-powered supply chain analytics for demand forecasting, inventory optimization, and supplier performance tracking.',
      icon: '🚚',
      price: '$1,49 9/month',
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
        'Reduce inventory costs by30%',
        'Improve forecast accuracy by45%',
        'Minimize stockouts by80%',
        'Optimize supplier relationships'
      ],
      marketPrice: '$2,50 0-5,00 0/month',
      category: 'Supply Chain Analytics',
      technologies: ['Time Series Forecasting', 'Optimization Algorithms', 'Python', 'OR-Tools', 'PostgreSQL', 'React'],
      useCases: ['Manufacturing', 'Retail', 'Logistics', 'Food & Beverage']
    }
  ]
  const additionalFeatures = [
    {
      title: 'Advanced Data Processing',
      description: 'Handle massive datasets with real-time processing capabilities',
     icon:<DatabaseclassName=&quot;w-8h-8text-blue-600&quot; />},
    {title: 'Machine Learning Models',
      description: 'Custom ML models trained on your specific data',
     icon:<BrainclassName=&quot;w-8h-8text-purple-600&quot; />},
    {title: 'Interactive Dashboards',
      description: 'Beautiful, responsive dashboards for all devices',
     icon:<BarChart3className=&quot;w-8h-8text-green-600&quot; />},
    {title: 'Predictive Insights',
      description: 'AI-powered predictions and recommendations',
      icon: <Target className=&quot;w-8 h-8 text-orange-600&quot; />
    }
  ]
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&quot;></div>
      {/* Hero Section */}
      <section className=&quot;relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20&quot;></section>
        <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
              AI Data Analytics Services
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto&quot;>
              Transform your data into actionable insights with our advanced AI-powered analytics solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center&quot;
              >
                📞 +1 302 464 0950
              </a>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className=&quot;py-16 bg-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Our Analytics Solutions
            </h2>
            <p className=&quot;text-xl text-gray-600&quot;>
              Comprehensive AI-powered analytics platforms for every business need
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {analyticsServices.map((service, index) => (
              <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100&quot;></div>
                <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{service.title}</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>{service.description}</p>
                <div className=&quot;mb-4&quot;></div>
                  <span className=&quot;text-2xl font-bold text-blue-600&quot;>{service.price}</span>
                  <span className=&quot;text-sm text-gray-500 ml-2&quot;>Market: {service.marketPrice}</span>
                </div>
                <div className=&quot;mb-4&quot;></div>
                  <span className=&quot;inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded&quot;>
                    {service.category}
                  </span>
                </div>
                <ul className=&quot;space-y-2 mb-6&quot;>
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className=&quot;space-y-2 mb-6&quot;></div>
                  <h4 className=&quot;font-semibold text-gray-900&quot;>Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className=&quot;text-sm text-green-600&quot;>✓ {benefit}</p>
                  ))}
                </div>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center&quot;
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className=&quot;py-16 bg-gray-50&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Why Choose Our Analytics Solutions?
            </h2>
            <p className=&quot;text-xl text-gray-600&quot;>
              Advanced technology and expert implementation for maximum ROI
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {additionalFeatures.map((feature, index) => (
              <div key={index} className=&quot;text-center&quot;></div>
                <div className=&quot;flex justify-center mb-4&quot;></div>
                  {feature.icon}
                </div>
                <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-600&quot;>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className=&quot;py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
            Ready to Transform Your Data into Insights?
          </h2>
          <p className=&quot;text-xl mb-8 text-blue-100&quot;>
            Contact us today for a free consultation and custom analytics solution
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center&quot;
            >
              📞 +1 302 464 0950
            </a>
            <a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className=&quot;mt-8 text-sm text-blue-200&quot;></div>
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIDataAnalyticsPage
