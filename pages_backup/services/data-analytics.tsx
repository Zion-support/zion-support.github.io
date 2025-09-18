import React from 'react';
<<<<<<< HEAD
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
=======

const data-analytics: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">data-analytics</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default data-analytics;
