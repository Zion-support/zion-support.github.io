import React from 'react'
import { BarChart3 } from 'lucide-react'
import { CheckCircle, Brain, Target, Database } from 'lucide-react'
;
import React from 'react';
import { BarChart3, CheckCircle, Brain, Target, Database, BarChart, Check } from 'lucide-react';
const AIDataAnalyticsPage: React.FC  = () => {
  const analyticsServices = [
import {BarChart3, CheckCircle, Brain, Database, Target} from 'lucide-react';
const AIDataAnalyticsPage: React.FC = () => {constanalyticsServices= [
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
   }
  ];
  constadditionalFeatures= [
    {title: 'Advanced Data Processing',
      description: 'Handle massive datasets with real-time processing capabilities',
     icon:<DatabaseclassName="w-8h-8text-blue-600" />},
    {title: 'Machine Learning Models',
      description: 'Custom ML models trained on your specific data',
     icon:<BrainclassName="w-8h-8text-purple-600" />},
    {title: 'Interactive Dashboards',
      description: 'Beautiful, responsive dashboards for all devices',
     icon:<BarChart3className="w-8h-8text-green-600" />},
    {title: 'Predictive Insights',
      description: 'AI-powered predictions and recommendations',
      icon: <Target className="w-8 h-8 text-orange-600" />
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Data Analytics Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI-powered analytics solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a;
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950</a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ Get Free Consultation</a>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Analytics Solutions</h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered analytics platforms for every business need</p>
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
                <a;
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Started</a>
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
              Advanced technology and expert implementation for maximum ROI</p>
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
            Contact us today for a free consultation and custom analytics solution</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950</a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com</a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIDataAnalyticsPage;
     icon:<TargetclassName="w-8h-8text-orange-600" />}
  ];
  return (
  <divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-blue-50">{/* HeroSection */}
    <sectionclassName="relative overflow-hidden bg-gradient-to-rfrom-blue-600to-indigo-700text-whitepy-20"><divclassName="absolute inset-0bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-autopx-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">AI Data Analytics Services</h><spanclassName="text-xlmd:text-2 xl mb-8 text-blue-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-blue-100max-w-3xlmx-auto">Transform your data into actionable insights with our advanced AI-powered analytics solutions</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors"
              >✉️ Get Free Consultation</a></di></di></di></sectio>{/* ServicesGrid */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Analytics Solutions</h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Comprehensive AI-powered analytics platforms for every business need</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{analyticsServices.map((serviceindex) => (
           <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado w borderborder-gray-100"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><spanclassName="text-2 xl font-boldtext-blue-600">{service.price}</spa><spanclassName="text-sm text-gray-500ml-2">Market:{service.marketPrice}</spa></di><divclassName="mb-4"><spanclassName="inline-block bg-blue-100text-blue-800text-xs font-semibold px-2py-1rounded"></className="inline-block bg-blue-100text-blue-800text-xs font-semibold px-2py-1rounded">{service.category}
                </spa></di><ulclassName="space-y-2mb-6">{service.features.slice(0 4).map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                  </l>))}
              </u><divclassName="space-y-2mb-6"><h4className="font-semiboldtext-gray-900">KeyBenefits:</h>{service.benefits.slice(0 2).map((benefitbenefitIndex) => (
                 <pkey={benefitIndex}className="text-smtext-green-600">✓{benefit}</p>))}
              </di><ahref="/contact"
                 className="w-full bg-blue-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-blue-700transition-colors inline-flexitems-centerjustify-center"
                >Get Started</a></di>))}
        </di></di></sectio>{/* FeaturesSection */}
    <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our Analytics Solutions?
          </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Advanced technology and expert implementation for maximum ROI</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{additionalFeatures.map((featureindex) => (
           <divkey={index}className="text-center"><divclassName="flexjustify-centermb-4">{feature.icon}
              </di><h3className="text-lg font-semibold text-gray-900mb-2">{feature.title}</h><pclassName="text-gray-600">{feature.description}</p></di>))}
        </di></di></sectio>{/* ContactSection */}
    <sectionclassName="py-16bg-gradient-to-r from-blue-600to-indigo-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Transform Your Data into Insights?
        </h><spanclassName="text-xl mb-8text-blue-100"></spa></className="text-xl mb-8text-blue-100">Contact us today for a free consultation and custom analytics solution</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
             className="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colorsinline-flexitems-center"
            >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
             className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors"
            >✉️ kleber@ziontechgroup.com</a></di><divclassName="mt-8 text-smtext-blue-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di>
  );
};
export default AIDataAnalyticsPage;
