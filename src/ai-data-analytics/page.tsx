<<<<<<< HEAD
import React from 'react';
import { BarChart3 } from 'lucide-react';
import { CheckCircle, Brain, Target, Database } from 'lucide-react';
import React from 'react'
import { Target, BarChart3 } from 'lucide-react'
import { Target, BarChart3 } from 'lucide-react'
const Page: React.FC = () => {
  const analyticsServices = [;
    {
      title: 'Real-Time Business Intelligence Platform'
      description: 'Advanced AI-powered analytics platform providing real-time insights, predictive modeling, and automated reporting for data-driven decision making.'
      icon: '📊'
      price: '$1,29 9/month'
      features: []
        'Real-time data processing'
        'Predictive analytics models'
        'Automated report generation'
        'Interactive dashboards'
        'Custom KPI tracking'
        'Data visualization tools'
        'API integrations'
        'Mobile app access'
      ]
      benefits: []
        'Increase decision speed by 6 0%'
        'Reduce manual reporting by 8 5%'
        'Identify trends 3 x faster'
        'Improve forecast accuracy by40%'
      ]
      marketPrice: '$2,00 0-4,00 0/month'
      category: 'Business Intelligence'
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis', 'Apache Kafka']
      useCases: ['Retail Analytics', 'Financial Forecasting', 'Supply Chain Optimization', 'Customer Behavior Analysis']
   }
    {title: 'AI-Powered Customer Analytics Suite'
      description: 'Comprehensive customer data analysis platform with behavioral insights, churn prediction, and personalized recommendation engines.'
      icon: '👥'
      price: '$89 9/month'
      features: []
        'Customer segmentation'
        'Churn prediction models'
        'Lifetime value analysis'
        'Behavioral pattern recognition'
        'Personalization engine'
        'A/B testing framework'
        'Cohort analysis'
        'ROI tracking'
      ]
      benefits: []
        'Increase customer retention by 3 5%'
        'Boost conversion rates by 4 5%'
        'Reduce churn by50%'
        'Improve customer satisfaction'
      ]
      marketPrice: '$1,50 0-3,00 0/month'
      category: 'Customer Analytics'
      technologies: ['Machine Learning', 'Python', 'Scikit-learn', 'Pandas', 'React', 'MongoDB']
      useCases: ['E-commerce', 'SaaS Companies', 'Financial Services', 'Healthcare']
   }
    {title: 'Predictive Maintenance Analytics'
      description: 'IoT and AI-driven predictive maintenance solution for manufacturing and industrial equipment monitoring.'
      icon: '🔧'
      price: '$1,59 9/month'
      features: []
        'Equipment health monitoring'
        'Failure prediction algorithms'
        'Maintenance scheduling optimization'
        'Cost-benefit analysis'
        'Alert management system'
        'Performance benchmarking'
        'Historical trend analysis'
        'Integration with IoT sensors'
      ]
      benefits: []
        'Reduce unplanned do wntime by 7 0%'
        'Lower maintenance costs by 4 0%'
        'Extend equipment lifespan by25%'
        'Improve operational efficiency'
      ]
      marketPrice: '$2,50 0-5,00 0/month'
      category: 'Industrial Analytics'
      technologies: ['Time Series Analysis', 'LSTM Networks', 'Python', 'TensorFlow', 'InfluxDB', 'Grafana']
      useCases: ['Manufacturing', 'Oil & Gas', 'Utilities', 'Transportation']
   }
    {title: 'Financial Risk Analytics Platform'
      description: 'Advanced risk assessment and fraud detection system using machine learning for financial institutions.'
      icon: '💰'
      price: '$1,99 9/month'
      features: []
        'Real-time fraud detection'
        'Credit risk assessment'
        'Market risk analysis'
        'Regulatory compliance monitoring'
        'Transaction pattern analysis'
        'Risk scoring algorithms'
        'Alert management'
        'Comprehensive reporting'
      ]
      benefits: []
        'Detect fraud with 9 9.5% accuracy'
        'Reduce false positives by60%'
        'Comply with regulations automatically'
        'Save millions in prevented losses'
      ]
      marketPrice: '$3,00 0-6,00 0/month'
      category: 'Financial Analytics'
      technologies: ['Deep Learning', 'Anomaly Detection', 'Python', 'PyTorch', 'Apache Spark', 'Kafka']
      useCases: ['Banks', 'Credit Unions', 'Fintech', 'Insurance Companies']
   }
    {title: 'AI Marketing Attribution Platform'
      description: 'Advanced marketing analytics with multi-touch attribution, campaign optimization, and ROI maximization.'
      icon: '📈'
      price: '$1,19 9/month'
      features: []
        'Multi-touch attribution modeling'
        'Campaign performance analysis'
        'Customer journey mapping'
        'ROI optimization'
        'Cross-channel analytics'
        'Budget allocation recommendations'
        'Competitive analysis'
        'Real-time reporting'
      ]
      benefits: []
        'Improve marketing ROI by50%'
        'Optimize budget allocation'
        'Identify high-value channels'
        'Reduce customer acquisition costs'
      ]
      marketPrice: '$2,00 0-4,00 0/month'
      category: 'Marketing Analytics'
      technologies: ['Attribution Modeling', 'Python', 'R', 'Google Analytics API', 'Facebook API', 'React']
      useCases: ['E-commerce', 'SaaS', 'Retail', 'Digital Agencies']
   }
    {title: 'Supply Chain Intelligence Suite'
      description: 'AI-powered supply chain analytics for demand forecasting, inventory optimization, and supplier performance tracking.'
      icon: '🚚'
      price: '$1,49 9/month'
      features: []
        'Demand forecasting models'
        'Inventory optimization'
        'Supplier performance tracking'
        'Supply chain risk assessment'
        'Cost optimization analysis'
        'Lead time prediction'
        'Quality metrics tracking'
        'Sustainability reporting'
      ]
      benefits: []
        'Reduce inventory costs by30%'
        'Improve forecast accuracy by45%'
        'Minimize stockouts by80%'
        'Optimize supplier relationships'
      ]
      marketPrice: '$2,50 0-5,00 0/month'
      category: 'Supply Chain Analytics'
      technologies: ['Time Series Forecasting', 'Optimization Algorithms', 'Python', 'OR-Tools', 'PostgreSQL', 'React']
      useCases: ['Manufacturing', 'Retail', 'Logistics', 'Food & Beverage']
    }
  ]
  const additionalFeatures = [;
    {
      title: 'Advanced Data Processing'
      description: 'Handle massive datasets with real-time processing capabilities'
     icon:<DatabaseclassName="w-8h-8tex t-blue-600" />}
    {title: 'Machine Learning Models'
      description: 'Custom ML models trained on your specific data'
     icon:<BrainclassName="w-8h-8tex t-purple-600" />}
    {title: 'Interactive Dashboards'
      description: 'Beautiful, responsive dashboards for all devices'
     icon:<BarChart3className="w-8h-8tex t-green-600" />}
    {title: 'Predictive Insights'
      description: 'AI-powered predictions and recommendations'
      icon: <Target className="w-8h-8te x t-orange-600" />
    }
  ]
  return ()
    <div className="min-h-s creenbg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="rel ativeoverflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="abs oluteinset-0 bg-black opacity-20">
        <div className="rel ativemax-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="tex t-center">
            <h1 className="tex t-4xlmd:text-6xl font-bold mb-6">
        </div>
              AI Data Analytics Services
            </h1>
            <p className="tex t-xlmd:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
        </div>
              Transform your data into actionable insights with our advanced AI-powered analytics solutions
            </p>
            <div className="fle xflex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950">
                className="bg-wh itetext-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
        </div>
                📞 +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com">
                className="bor der-2border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
        </div>
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16bg-w hite">
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8">
          <div className="tex t-centermb-12">
            <h2 className="tex t-3xlmd:text-4xl font-bold text-gray-900 mb-4">
        </div>
              Our Analytics Solutions
            </h2>
            <p className="tex t-xltext-gray-600">
        </div>
              Comprehensive AI-powered analytics platforms for every business need
            </p>
          </div>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => ()
              <div key={index} className="bg-wh iterounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow border border-gray-100">
                <div className="tex t-4xlmb-4">{service.icon}</div>
                <h3 className="tex t-xlfont-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="tex t-gray-600mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="tex t-2xlfont-bold text-blue-600">{service.price}</span>
                  <span className="tex t-smtext-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                <div className="mb-4">
                  <span className="inl ine-blockbg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
        </div>
                    {service.category}
                  </span>
                </div>
                <ul className="spa ce-y-2mb-6">
        </div>
                  {service.features.slice(0, 4).map((feature, featureIndex) => ()
                    <li key={featureIndex} className="fle xitems-center text-sm text-gray-600">
        </div>
                      <CheckCircle className="w-4h-4te x t-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="spa ce-y-2mb-6">
                  <h4 className="fon t-semiboldtext-gray-900">Key Benefits: </h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => ()
                    <p key={benefitIndex} className="tex t-smtext-green-600">✓ {benefit}</p>
                  ))}
                </div>
                <a href="/contact">
                  className="w-ful lbg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
        </div>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16bg-g ray-50">
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8">
          <div className="tex t-centermb-12">
            <h2 className="tex t-3xlmd:text-4xl font-bold text-gray-900 mb-4">
        </div>
              Why Choose Our Analytics Solutions?
            </h2>
            <p className="tex t-xltext-gray-600">
        </div>
              Advanced technology and expert implementation for maximum ROI
            </p>
          </div>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => ()
              <div key={index} className="tex t-center">
                <div className="fle xjustify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="tex t-lgfont-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="tex t-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16bg-g radient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="tex t-3xlmd:text-4xl font-bold mb-4">
        </div>
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="tex t-xlmb-8 text-blue-100">
        </div>
            Contact us today for a free consultation and custom analytics solution
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950">
              className="bg-wh itetext-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
        </div>
              📞 +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com">
              className="bor der-2border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
        </div>
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8te xt-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  )
};
}
export default AIDataAnalyticsPage;
=======
import React from "react";

interface PagePageProps {
  // Add props here
}

const PagePage: React.FC<PagePageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the  page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
>>>>>>> origin/main
