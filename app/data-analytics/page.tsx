import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  EyeIcon,
  CogIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const DataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that update in real-time with your business data.'
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms provide predictive analytics and recommendations.'
    },
    {
      icon: CloudIcon,
      title: 'Cloud-Native Architecture',
      description: 'Scalable cloud infrastructure ensures your analytics platform grows with your business.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance certifications.'
    },
    {
      icon: BoltIcon,
      title: 'Lightning Fast Processing',
      description: 'Process massive datasets in seconds with our optimized data processing engine.'
    },
    {
      icon: EyeIcon,
      title: 'Data Visualization',
      description: 'Beautiful, interactive charts and graphs that make complex data easy to understand.'
    }
  ];

  const useCases = [
    'Sales Performance Analysis',
    'Customer Behavior Tracking',
    'Financial Forecasting',
    'Marketing Campaign ROI',
    'Supply Chain Optimization',
    'Risk Assessment',
    'Operational Efficiency',
    'Market Trend Analysis'
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '10TB+', label: 'Data Processed Daily' },
    { number: '50+', label: 'Data Sources Supported' },
    { number: '24/7', label: 'Monitoring & Support' }
  ];

  return (
    <>
      <SEOHead 
        title="Data Analytics Solutions - Zion Tech Group"
        description="Transform your data into actionable insights with our advanced analytics platform. Real-time dashboards, AI-powered insights, and enterprise-grade security."
        keywords="data analytics, business intelligence, data visualization, predictive analytics, real-time dashboards, AI insights"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <ChartBarIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">Data Analytics Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Transform Your Data Into
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                  Actionable Insights
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our advanced analytics platform combines real-time data processing, AI-powered insights, and beautiful visualizations to help you make data-driven decisions that drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Powerful Analytics <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to unlock the full potential of your data with our comprehensive analytics platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Perfect For Every <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Use Case</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                From small businesses to enterprise organizations, our analytics platform adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our analytics platform to drive growth and make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataAnalyticsPage;