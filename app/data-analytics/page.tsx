'use client';

import React from 'react';

import { Helmet } from 'react-helmet-async';

import {
  BarChart,
  TrendingUp,
  Database,
  CheckCircle,
  Brain,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Globe,
  Lock,
  Activity,
  Settings,
  Target,
  Eye,
  PieChart,

} from lucide-react';

';

const DataAnalyticsPage: React.FC = () => {const features = [';';';

    {
      ico,
    n: BarChart,
      title: 'Advanced Data Visualization,
      description: Transform complex data into clear, actionable insights with interactive dashboards and reports.
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics,
      description: Leverage machine learning and artificial intelligence to uncover hidden patterns and trends.
    },
    {
      icon: Database,
      title: 'Data Integration,
      description: Connect and analyze data from multiple sources to get a complete picture of your business.
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics,
      description: Forecast future trends and make data-driven decisions with predictive modeling.
    }

  ]';

';

const benefits = [';';

    'Make data-driven business decisions,
    'Identify new opportunities and trends,
    'Improve operational efficiency,
    'Reduce costs through optimization,
    'Enhance customer experience,
    'Comply with data regulations,
    'Real-time insights and reporting,
    Custom analytics solutions
  ]';

  return (

    <React.Fragment>
      <Helmet>
        <title>Data Analytics Services - Zion Tech Group | Business Intelligence</title>
        <meta name="description" content="Professional data analytics services by Zion Tech Group. Advanced business intelligence, data visualization, and AI-powered insights for your business. />
        <meta name="keywords" content="data analytics, business intelligence, data visualization, AI analytics, Zion Tech Group />
      </Helmet>
        {/* Benefits Section *
        <section className=py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
                Key Benefits
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Drive business success with our comprehensive data analytics services.
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
              {benefits.map((benefit, index) => (

                <div key={index} className="flex items-start space-x-3>
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 />
                  <p className="text-gray-300 text-lg>{benefit}</p>
                </div>
              ))
            </div>
          </div>
        </section>
        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
                Ready to Unlock Your Data?
              <
              <p className="text-xl text-purple-100 mb-8>
                Contact our analytics experts to discuss your data needs and get a customized solution.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className=bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center>
                  
                  <Mail className="mr-2 h-5 w-5 
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)
export default DataAnalyticsPage'"'"'"'";
