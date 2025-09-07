<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/pages_backup/services/data-analytics.tsx
import React from 'react';
import Layout from "../../components/Layout";";
=======
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
      title: "Business Intelligence",",
  description: "Transform data into actionable business insights",";
      icon: BarChart3,;
      features: ["Custom Dashboards", "Real-time Reports", "KPI Tracking"]";
    },;
    {}
      title: "Predictive Analytics",",
  description: "Forecast trends and make data-driven decisions",";
      icon: TrendingUp,;
      features: ["Machine Learning Models", "Risk Assessment", "Demand Forecasting"]";
    },;
    {}
      title: "Data Warehousing",",
  description: "Centralized data storage and management solutions",";
      icon: Database,;
      features: ["ETL Processes", "Data Integration", "Data Quality"]";
    },;
    {}
      title: "AI-Powered Analytics",",
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
      title: "Business Intelligence",",
  description: "Transform data into actionable business insights",";
      icon: BarChart3,;
      features: ["Custom Dashboards", "Real-time Reports", "KPI Tracking"]";
    },;
    {}
      title: "Predictive Analytics",",
  description: "Forecast trends and make data-driven decisions",";
      icon: TrendingUp,;
      features: ["Machine Learning Models", "Risk Assessment", "Demand Forecasting"]";
    },;
    {}
      title: "Data Warehousing",",
  description: "Centralized data storage and management solutions",";
      icon: Database,;
      features: ["ETL Processes", "Data Integration", "Data Quality"]";
    },;
    {}
      title: "AI-Powered Analytics",",
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from 'react';
import Layout from "../../components/Layout";";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
class ErrorBoundary extends React.Component {
  // TODO: Implement;
}
  constructor(props) {
    super(props);
    this.state = { hasError: false ;};
  static getDerivedStateFromError(error) {
    return { hasError: true ;};
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: ';, error, errorInfo);
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
      title: "Business Intelligence";,",
  description: "Transform data into actionable business insights";,";
      icon: BarChart3;,;
      features: ["Custom Dashboards";, "Real-time Reports", "KPI Tracking"]";
    },;
    {}
      title: "Predictive Analytics";,",
  description: "Forecast trends and make data-driven decisions";,";
      icon: TrendingUp;,;
      features: ["Machine Learning Models";, "Risk Assessment", "Demand Forecasting"]";
    },;
    {}
      title: "Data Warehousing";,",
  description: "Centralized data storage and management solutions";,";
      icon: Database;,;
      features: ["ETL Processes";, "Data Integration", "Data Quality"]";
    },;
    {}
      title: "AI-Powered Analytics";,",
  description: "Advanced analytics powered by artificial intelligence";,";
      icon: Brain;,;
      features: ["Natural Language Processing";, "Pattern Recognition", "Automated Insights"]";
    }
;  ];
  return (
pr-12325
    <Layout)
      title="Data Analytics Services - Zion Tech Group""""
      description="Advanced data analytics solutions to unlock insights from your data and drive business growth."">;"
"
      <div className="min-h-screen bg-gray-50">";"
</div>"
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">";"
</section>"
          <div className="container mx-auto px-4">";"
</div>
            <motion&& motion.div;
              initial={{ opacity: 0;, y: 30 ;}}
              animate={{ opacity: 1;, y: 0 ;}}
              transition={{ duration: 0 && 0.8 ;}}"
              className="text-center"">;"
</motion>"
              <h1 className="text-4xl md: text-6xl font-bold mb-6">";, Data Analytics Services,;"
</h1>
              </h1>;"
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";,;"
</p>
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;"
        <section className="py-20">";"
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">";,;"
                  <motion&& motion.div)
                    key={index}"
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"""
                    whileInView={{ opacity: 1;, y: 0 ;}}
                    transition={{ duration: 0 && 0.8;, delay: index * 0 && 0.1 ;}}
                    viewport={{ once: true ;}}>,;
                    <div className="text-green-600 mb-4">";"
                      <IconComponent className="w-10 h-10" />";"

                    </div>;"
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";"
</h3>
                    </h3>,;"
                    <p className="text-gray-600 mb-4">";"
                    </p>,;"
                    <ul className="space-y-2">";"
</ul>"
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">";"
</li>"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";"

                        </li>,;
                    </ul>,;
                );
              })}
            </div>,;
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">";"
          <div className="container mx-auto px-4 text-center">";"
            <h2 className="text-3xl md: text-4xl font-bold mb-6">";, Transform Your Data Today,;"
</h2>
            </h2>;"
            <p className="text-xl mb-8 max-w-2xl mx-auto">";"
            <motion&& motion.a;"
              href="/contact""""
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold"";,"
              whileHover={{ scale: 1 && 1.05 ;}}>,;
              <ArrowRight className="w-5 h-5 ml-2" />";"

            </motion && motion.a>;
        </section>;
      </div>;
    </Layout>;
  return (
    <Layout
      title="Data Analytics Services - Zion Tech Group"
      description="Transform your data into actionable insights with our comprehensive data analytics services. Business intelligence, predictive analytics, and AI-powered insights."
      keywords="data analytics, business intelligence, data warehousing, predictive analytics, data visualization, AI insights">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Database, Brain } from 'lucide-react';
export default function DataAnalyticsPage() {;
  const analyticsServices = [;
    {}
      title: "Business Intelligence";,",
  description: "Transform data into actionable business insights";,";
      icon: BarChart3;,;
      features: ["Custom Dashboards";, "Real-time Reports", "KPI Tracking"]";
    },;
    {}
      title: "Predictive Analytics";,",
  description: "Forecast trends and make data-driven decisions";,";
      icon: TrendingUp;,;
      features: ["Machine Learning Models";, "Risk Assessment", "Demand Forecasting"]";
    },;
    {}
      title: "Data Warehousing";,",
  description: "Centralized data storage and management solutions";,";
      icon: Database;,;
      features: ["ETL Processes";, "Data Integration", "Data Quality"]";
    },;
    {}
      title: "AI-Powered Analytics";,",
  description: "Advanced analytics powered by artificial intelligence";,";
      icon: Brain;,;
      features: ["Natural Language Processing";, "Pattern Recognition", "Automated Insights"]";
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
              initial={{ opacity: 0;, y: 30 ;}}
              animate={{ opacity: 1;, y: 0 ;}}
              transition={{ duration: 0 && 0.8 ;}}
              className="text-center"">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Data Analytics Services;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
<<<<<<< HEAD
                Unlock the power of your data with our comprehensive analytics solutions.
=======
                Unlock the power of your data with our comprehensive analytics solutions. 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
                    initial={{ opacity: 0;, y: 30 ;}}
                    whileInView={{ opacity: 1;, y: 0 ;}}
                    transition={{ duration: 0 && 0.8;, delay: index * 0 && 0.1 ;}}
                    viewport={{ once: true ;}}>,;
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
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Start Your Analytics Journey;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
            <motion&& motion.a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold""
              whileHover={{ scale: 1 && 1.05 ;}}>,;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from 'react';
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages_backup/services/data-analytics.tsx
=======
import * as React from 'react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Database, Brain, CheckCircle, ArrowRight } from 'lucide-react';

const analyticsServices = [
<<<<<<< HEAD
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
    features: ["AI algorithms", "Natural language processing", "Computer vision", "Deep learning"],
    pricing: "$4,000 - $20,000/month"
  }
];
<<<<<<< HEAD:backup-problematic-files/pages_backup/services/data-analytics.tsx
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
    features: ["AI algorithms", "Natural language processing", "Computer vision", "Deep learning"],
    pricing: "$4,000 - $20,000/month"
  }
];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const benefits = [
  'Data-driven decision making',
  'Improved business performance',
  'Better customer insights',
  'Reduced operational costs',
  'Enhanced competitive advantage',
  'Automated reporting and analytics'
];
export default function DataAnalyticsServices() {
<<<<<<< HEAD
<<<<<<< HEAD

export default function DataAnalyticsPage() {
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages_backup/services/data-analytics.tsx
=======

export default function DataAnalyticsPage() {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export default function DataAnalyticsPage() {
  return (
    <>
      <Head>
        <title>Data Analytics Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive data analytics services including business intelligence, predictive analytics, data management, and AI-powered insights." />
      </Head>

      <div className="min-h-screen bg-gray-50">
<<<<<<< HEAD
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
<<<<<<< HEAD:backup-problematic-files/pages_backup/services/data-analytics.tsx
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Data Analytics Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data analytics services designed to unlock the value
                in your data and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages_backup/services/data-analytics.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
<<<<<<< HEAD
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
=======
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/pages_backup/services/data-analytics.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Data Analytics Services?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our data analytics experts help you transform raw data into
                  actionable insights that drive business growth and innovation.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages_backup/services/data-analytics.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/pages_backup/services/data-analytics.tsx
    </Layout>
    </Layout>
    </>
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages_backup/services/data-analytics.tsx
    </>
  );
}
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </Layout>
    </Layout>
    </>
    </>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );
}
import { BarChart3, Database, TrendingUp, Brain, CheckCircle, ArrowRight } from 'lucide-react';
export default function DataAnalyticsPage() {
  const analyticsServices = [;
    {}
      title: "Business Intelligence";,"
      description: "Transform data into actionable business insights";,"
      icon: BarChart3;,
      features: ["Custom Dashboards";, "Real-time Reports", "KPI Tracking"]"
    },
    {}
      title: "Predictive Analytics";,"
      description: "Forecast trends and make data-driven decisions";,"
      icon: TrendingUp;,
      features: ["Machine Learning Models";, "Risk Assessment", "Demand Forecasting"]"
    },
    {}
      title: "Data Warehousing";,"
      description: "Centralized data storage and management solutions";,"
      icon: Database;,
      features: ["ETL Processes";, "Data Integration", "Data Quality"]"
    },
    {}
      title: "AI-Powered Analytics";,"
      description: "Advanced analytics powered by artificial intelligence";,"
      icon: Brain;,
      features: ["Natural Language Processing";, "Pattern Recognition", "Automated Insights"]"
    }
;  ];
  return (;
    <Layout );
      title="Data Analytics Services - Zion Tech Group"";
      description="Advanced data analytics solutions to unlock insights from your data and drive business growth."";
    ;
    <Layout;"
      title="Data Analytics Services - Zion Tech Group"""
      description="Transform your data into actionable insights with our comprehensive data analytics services. Business intelligence, predictive analytics, and AI-powered insights."""
      keywords="data analytics, business intelligence, data warehousing, predictive analytics, data visualization, AI insights">;"
      <div className="min-h-screen bg-white">;"
    <Layout)"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";"


            <h2 className="text-3xl md:text-4xl font-bold mb-6">";"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"""

    <Layout );"
      title="Data Analytics Services - Zion Tech Group"";""
      description="Advanced data analytics solutions to unlock insights from your data and drive business growth."";"
pr-12325
    >;
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">""
            <motion.div;
              transition={{ duration: 0.8 ;}}"
              className="text-center"""
            </motion.div>;
        <section className="py-20">""
                  <motion.div);
                    transition={{ duration: 0.8;, delay: index * 0.1 ;}}
                    viewport={{ once: true ;}}
                  >,

                    </h3>,"
                    </p>,"
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">""

                        </li>,
                    </ul>,
            </div>,
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">""
            <motion.a;"
              href="/contact"";""
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";"
              whileHover={{ scale: 1.05 ;}}

            </motion.a>;
    ;"
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center">"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
              </h1>"
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">"
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">"
</button>
                </button>"
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">"
        <section className="py-20 bg-gray-50">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
              </h2>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">"
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">"
                    <feature.icon className="w-6 h-6 text-purple-600" />"
</feature>"
        <section className="py-16 px-4">;"
          <div className="max-w-7xl mx-auto">;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
                  key={index}
                  initial={{ opacity: 0;, y: 20 ;}}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">"
                  </h3>"
                  <p className="text-gray-600">"
        <section className="py-20">;"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;"
              <div>;
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;"
                <p className="text-xl text-gray-600 mb-8">;"
                </p>;"
                <ul className="space-y-4">;"
                    <li key={index} className="flex items-start">;"
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />;"
                      <span className="text-gray-700">{benefit}</span>;"
                    </li>;
    
    
    </>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
