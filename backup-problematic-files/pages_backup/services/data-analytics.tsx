class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import Layout from "../../components/Layout";";
import {motion} from 'framer-motion';
import Layout from '../../components/Layout';
import {BarChart3,, TrendingUp,, Database,, Brain} from 'lucide-react';
export default function DataAnalyticsPage() {;
  const analyticsServices = [;
    {}
      title: "Business Intelligence",";
      description: "Transform data into actionable business insights",";
      icon: BarChart3,;
      features: ["Custom Dashboards", "Real-time Reports", "KPI Tracking"]";
    },;
    {}
      title: "Predictive Analytics",";
      description: "Forecast trends and make data-driven decisions",";
      icon: TrendingUp,;
      features: ["Machine Learning Models", "Risk Assessment", "Demand Forecasting"]";
    },;
    {}
      title: "Data Warehousing",";
      description: "Centralized data storage and management solutions",";
      icon: Database,;
      features: ["ETL Processes", "Data Integration", "Data Quality"]";
    },;
    {}
      title: "AI-Powered Analytics",";
      description: "Advanced analytics powered by artificial intelligence",";
      icon: Brain,;
      features: ["Natural Language Processing", "Pattern Recognition", "Automated Insights"]";
    }
;  ];
  return (
    <Layout)
      title="Data Analytics Services - Zion Tech Group""
      description="Advanced data analytics solutions to unlock insights from your data and drive business growth."">;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center"">;
              <h1 className="text-4xl md: text-6xl font-bold mb-6">", Data Analytics Services,;
              </h1>;
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">",;
                Unlock the power of your data with our comprehensive analytics solutions. ;
                Turn raw data into actionable insights that drive business success.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {analyticsServices && analyticsServices.map((service, index) => {}
                const IconComponent = service && service.icon;
                return (
                  <motion&& motion.div)
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>,;
                    <div className="text-green-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service && service.title}
                    </h3>,;
                    <p className="text-gray-600 mb-4">";
                      {service && service.description}
                    </p>,;
                    <ul className="space-y-2">";
                      {service && service.features.map((feature, featureIndex) => (,;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,;
                      ))}
                    </ul>,;
                  </motion && motion.div>;
                );
              })}
            </div>,;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md: text-4xl font-bold mb-6">", Transform Your Data Today,;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to unlock the hidden value in your data? Let our analytics experts help you get started.;
            </p>;
            <motion&& motion.a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold"",
              whileHover={{ scale: 1 && 1.05 }}>,;
              Start Your Analytics Journey;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion && motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { BarChart3, Database, TrendingUp, Brain, CheckCircle, ArrowRight } from 'lucide-react';
const features = [
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Database, Brain, CheckCircle, ArrowRight } from 'lucide-react';

const analyticsServices = [
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Advanced analytics and reporting dashboards for data-driven decisions'
  },
  {
    icon: Database,
    title: 'Data Warehousing',
    description: 'Centralized data storage and management solutions'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Machine learning models for forecasting and trend analysis'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Artificial intelligence for automated data analysis and insights'
  },
  {
    icon: CheckCircle,
    title: 'Real-time Analytics',
    description: 'Live data processing and real-time business intelligence'
  },
  {
    icon: ArrowRight,
    title: 'Data Visualization',
    description: 'Interactive charts, graphs, and visual data representations'
  }
];
const benefits = [
  'Data-driven decision making',
  'Improved business performance',
  'Better customer insights',
  'Reduced operational costs',
  'Enhanced competitive advantage',
  'Automated reporting and analytics'
];
export default function DataAnalyticsServices() {

export default function DataAnalyticsPage() {

export default function DataAnalyticsPage() {
  return (
    <Layout
      title="Data Analytics Services - Zion Tech Group"
      description="Transform your data into actionable insights with our comprehensive data analytics services. Business intelligence, predictive analytics, and AI-powered insights."
      keywords="data analytics, business intelligence, data warehousing, predictive analytics, data visualization, AI insights">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { BarChart3, TrendingUp, Database, Brain } from 'lucide-react';
export default function DataAnalyticsPage() {;
  const analyticsServices = [;
    {}
      title: "Business Intelligence",";
      description: "Transform data into actionable business insights",";
      icon: BarChart3,;
      features: ["Custom Dashboards", "Real-time Reports", "KPI Tracking"]";
    },;
    {}
      title: "Predictive Analytics",";
      description: "Forecast trends and make data-driven decisions",";
      icon: TrendingUp,;
      features: ["Machine Learning Models", "Risk Assessment", "Demand Forecasting"]";
    },;
    {}
      title: "Data Warehousing",";
      description: "Centralized data storage and management solutions",";
      icon: Database,;
      features: ["ETL Processes", "Data Integration", "Data Quality"]";
    },;
    {}
      title: "AI-Powered Analytics",";
      description: "Advanced analytics powered by artificial intelligence",";
      icon: Brain,;
      features: ["Natural Language Processing", "Pattern Recognition", "Automated Insights"]";
    }
;  ];
  return (
    <Layout)
      title="Data Analytics Services - Zion Tech Group""
      description="Advanced data analytics solutions to unlock insights from your data and drive business growth."">;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center"">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Data Analytics Services;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Unlock the power of your data with our comprehensive analytics solutions. ;
                Turn raw data into actionable insights that drive business success.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {analyticsServices && analyticsServices.map((service, index) => {}
                const IconComponent = service && service.icon;
                return (
                  <motion&& motion.div)
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>,;
                    <div className="text-green-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service && service.title}
                    </h3>,;
                    <p className="text-gray-600 mb-4">";
                      {service && service.description}
                    </p>,;
                    <ul className="space-y-2">";
                      {service && service.features.map((feature, featureIndex) => (,;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,;
                      ))}
                    </ul>,;
                  </motion && motion.div>;
                );
              })}
            </div>,;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Transform Your Data Today;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to unlock the hidden value in your data? Let our analytics experts help you get started.;
            </p>;
            <motion&& motion.a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold""
              whileHover={{ scale: 1 && 1.05 }}>,;
              Start Your Analytics Journey;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion && motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { BarChart3, Database, TrendingUp, Brain, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { BarChart3, TrendingUp, Database, Brain } from 'lucide-react';
export default function DataAnalyticsPage() {
  const analyticsServices = [;
    {}
      title: "Business Intelligence","
      description: "Transform data into actionable business insights","
      icon: BarChart3,
      features: ["Custom Dashboards", "Real-time Reports", "KPI Tracking"]"
    },
    {}
      title: "Predictive Analytics","
      description: "Forecast trends and make data-driven decisions","
      icon: TrendingUp,
      features: ["Machine Learning Models", "Risk Assessment", "Demand Forecasting"]"
    },
    {}
      title: "Data Warehousing","
      description: "Centralized data storage and management solutions","
      icon: Database,
      features: ["ETL Processes", "Data Integration", "Data Quality"]"
    },
    {}
      title: "AI-Powered Analytics","
      description: "Advanced analytics powered by artificial intelligence","
      icon: Brain,
      features: ["Natural Language Processing", "Pattern Recognition", "Automated Insights"]"
    }
;  ];
  return (;
    <Layout );
      title="Data Analytics Services - Zion Tech Group"";
      description="Advanced data analytics solutions to unlock insights from your data and drive business growth."";
    >;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Data Analytics Services;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Unlock the power of your data with our comprehensive analytics solutions. 
                Turn raw data into actionable insights that drive business success.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {analyticsServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >,
                    <div className="text-green-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service.title}
                    </h3>,
                    <p className="text-gray-600 mb-4">";
                      {service.description}
                    </p>,
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,
                      ))}
                    </ul>,
                  </motion.div>;
                );
              })}
            </div>,
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Transform Your Data Today;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to unlock the hidden value in your data? Let our analytics experts help you get started.;
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Start Your Analytics Journey;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { BarChart3, Database, TrendingUp, Brain, CheckCircle, ArrowRight } from 'lucide-react';
const features = [
  {
    title: "Business Intelligence",
    description: "Transform data into actionable business insights",
    icon: BarChart3,
    features: ["Data visualization", "Custom dashboards", "Real-time reporting", "KPI tracking"],
    pricing: "$2,000 - $10,000/month"
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered predictive modeling and forecasting",
    icon: TrendingUp,
    features: ["Machine learning models", "Forecasting", "Risk analysis", "Trend prediction"],
    pricing: "$3,000 - $15,000/month"
  },
  {
    title: "Data Management",
    description: "Comprehensive data management and warehousing",
    icon: Database,
    features: ["Data warehousing", "ETL processes", "Data quality", "Integration"],
    pricing: "$1,500 - $8,000/month"
  },
  {
    title: "AI Analytics",
    description: "Advanced AI-powered analytics and insights",
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Artificial intelligence for automated data analysis and insights'
  },
  {
    icon: CheckCircle,
    title: 'Real-time Analytics',
    description: 'Live data processing and real-time business intelligence'
  },
  {
    icon: ArrowRight,
    title: 'Data Visualization',
    description: 'Interactive charts, graphs, and visual data representations'
const features = [;
  {;
    icon: BarChart3,;
    title: 'Business Intelligence',;
    description: 'Advanced analytics and reporting dashboards for data-driven decisions';
  },;
  {;
    icon: Database,;
    title: 'Data Warehousing',;
    description: 'Centralized data storage and management solutions';
  },;
  {;
    icon: TrendingUp,;
    title: 'Predictive Analytics',;
    description: 'Machine learning models for forecasting and trend analysis';
  },;
  {;
    icon: Brain,;
    title: 'AI-Powered Insights',;
    description: 'Artificial intelligence for automated data analysis and insights';
  },;
  {;
    icon: CheckCircle,;
    title: 'Real-time Analytics',;
    description: 'Live data processing and real-time business intelligence';
  },;
  {;
    icon: ArrowRight,;
    title: 'Data Visualization',;
    description: 'Interactive charts, graphs, and visual data representations';
  }
];
const benefits = [
  'Data-driven decision making',
  'Improved business performance',
  'Better customer insights',
  'Reduced operational costs',
  'Enhanced competitive advantage',
  'Automated reporting and analytics'
];
export default function DataAnalyticsServices() {
export default function DataAnalyticsPage() {;
const benefits = [;
  'Data-driven decision making',;
  'Improved business performance',;
  'Better customer insights',;
  'Reduced operational costs',;
  'Enhanced competitive advantage',;
  'Automated reporting and analytics';
];
export default function DataAnalyticsServices() {;
  return (
    <Layout
      title="Data Analytics Services - Zion Tech Group"
      description="Transform your data into actionable insights with our comprehensive data analytics services. Business intelligence, predictive analytics, and AI-powered insights."
      keywords="data analytics, business intelligence, data warehousing, predictive analytics, data visualization, AI insights">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Analytics</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our comprehensive analytics 
                solutions and AI-powered intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {analyticsServices && analyticsServices.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
              <div>;
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                  Why Choose Our Data Analytics Services?;
                </h2>;
                <p className="text-xl text-gray-600 mb-8">;
                  Our data analytics experts help you transform raw data into;
                  actionable insights that drive business growth and innovation.;
                </p>;
                <ul className="space-y-4">;
                  {benefits && benefits.map((benefit, index) => (;
                    <li key={index} className="flex items-start">;
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />;
                      <span className="text-gray-700">{benefit}</span>;
                    </li>;
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Unlock Your Data?</h3>
                <p className="text-lg mb-6">
                  Let our data analytics experts help you transform your data
                  into powerful insights that drive business success.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Unlock Your Data's Potential
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our data analytics services can transform your business insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
    </>
export default Data-analytics;
    </Layout>
  );
};

export default Data-analytics;