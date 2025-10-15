import React from 'react';';'
import SEOHead from '../components/SEOHead';';'
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CloudIcon,
  CogIcon,
  ChartPieIcon,
  GlobeAltIcon;
} from '@heroicons/react/24/outline';''

const DataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-time Dashboards',''
      description: 'Interactive dashboards with live data visualization and customizable widgets.'''
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Insights',''
      description: 'Machine learning algorithms that automatically identify patterns and trends in your data.'''
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Security',''
      description: 'Enterprise-grade security with encryption, access controls, and compliance certifications.'''
    },
    {
      icon: BoltIcon,
      title: 'High Performance',''
      description: 'Lightning-fast data processing and analysis with optimized algorithms.'''
    },
    {
      icon: CloudIcon,
      title: 'Cloud Integration',''
      description: 'Seamless integration with cloud platforms and data warehouses.'''
    },
    {
      icon: CogIcon,
      title: 'Custom Analytics',''
      description: 'Tailored analytics solutions designed for your specific business needs.'''
    }
  ];

  const useCases = [
    'Business Intelligence',''
    'Customer Analytics',''
    'Sales Forecasting',''
    'Marketing Attribution',''
    'Operational Efficiency',''
    'Risk Assessment',''
    'Performance Monitoring',''
    'Predictive Modeling'''
  ];

  const benefits = [
    {
      title: 'Improved Decision Making',''
      description: 'Make data-driven decisions with comprehensive insights and real-time analytics.',''
      icon: ChartBarIcon
    },
    {
      title: 'Increased Efficiency',''
      description: 'Automate reporting and analysis to save time and reduce manual work.',''
      icon: BoltIcon
    },
    {
      title: 'Better ROI',''
      description: 'Identify opportunities for growth and optimization to maximize your return on investment.',''
      icon: ChartPieIcon
    },
    {
      title: 'Competitive Advantage',''
      description: 'Stay ahead of the competition with advanced analytics and predictive insights.',''
      icon: GlobeAltIcon
    }
  ];

  return ()
    <>
      <SEOHead 
        title="Data Analytics Solutions - Zion Tech Group"""
        description="Advanced data analytics solutions with AI-powered insights, real-time dashboards, and predictive modeling. Transform your data into actionable business intelligence."""
        keywords="data analytics, business intelligence, data visualization, predictive analytics, AI insights, data science, analytics dashboard"""
      />
      
      <div className="min-h-screen bg-slate-900 text-white">""
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">""
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>""
          <div className="absolute inset-0 opacity-20" style={{""
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`'"'"
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center">""
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">""
                <ChartBarIcon className="w-5 h-5 text-blue-400 mr-2" />""
                <span className="text-blue-300 text-sm font-medium">Data Analytics</span>""
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">""
                Transform Your Data
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">""
                  Into Intelligence
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
                Advanced data analytics solutions that turn your raw data into actionable insights, predictive models, and strategic intelligence for business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">""
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">""
                  Get Analytics Demo
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />""
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">""
                  View Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Analytics Features</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                Comprehensive data analytics tools and capabilities to unlock the full potential of your data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""
              {features.map((feature, index) => ()
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">""
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">""
                    <feature.icon className="w-6 h-6 text-white" />""
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">""
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">""
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Analytics <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Use Cases</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                Discover how our analytics solutions can transform your business across various industries and functions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">""
              {useCases.map((useCase, index) => ()
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">""
                  <div className="flex items-center justify-center mb-2">""
                    <CheckCircleIcon className="w-5 h-5 text-blue-400" />""
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{useCase}</span>""
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Analytics Solutions</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                Proven benefits that help you make better decisions, improve efficiency, and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">""
              {benefits.map((benefit, index) => ()
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">""
                  <div className="flex items-start">""
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">""
                      <benefit.icon className="w-6 h-6 text-white" />""
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">""
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">""
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">""
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">""
              Ready to Unlock Your Data's Potential?''
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">""
              Let our data analytics experts help you transform your data into actionable insights and strategic intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">""
                Get Free Analytics Assessment
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />""
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">""
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
;
export default DataAnalyticsPage;