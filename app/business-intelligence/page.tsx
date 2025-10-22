import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import { Database, Brain, Phone, Mail, BarChart, TrendingUp } from 'lucide-react';
import { CheckCircle } from 'lucide-react';


const BusinessIntelligencePage: React.FC = () => {
  const _features = [
    {

      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and visualization tools for informed decision making'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with multiple data sources and real-time processing'
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Track KPIs and business performance with customizable dashboards'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms for predictive analytics and trend analysis'

    }
  ];

  const _benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business intelligence solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Professional Business Intelligence services by Zion Tech Group. Advanced AI and IT solutions for your business." />

        <meta name="keywords" content="business intelligence, data analytics, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Business Intelligence
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced business intelligence solutions. 
            Make data-driven decisions that drive growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BusinessIntelligencePage;