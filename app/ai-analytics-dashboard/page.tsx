import React from 'react';
import { BarChart3, TrendingUp, Database, Eye, Zap, Shield, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AiAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Monitor your business metrics in real-time with interactive dashboards and live data feeds."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Insights",
      description: "AI-powered forecasting and trend analysis to help you make data-driven decisions."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description: "Seamlessly connect and analyze data from multiple sources and platforms."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific business needs and KPIs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Reports",
      description: "Generate and schedule automated reports with AI-powered insights and recommendations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control and data encryption."
    }
  ];

const capabilities = [
    "Advanced data visualization and charting",
    "Machine learning-powered insights",
    "Custom KPI tracking and monitoring",
    "Multi-source data integration",
    "Automated alerting and notifications",
    "Mobile-responsive dashboard design",
    "API integration and customization",
    "Real-time collaboration features"
  ];
  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Advanced Business Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time monitoring, predictive analytics, and custom visualizations." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, KPI monitoring" />
        <meta property="og:title" content="AI Analytics Dashboard - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered analytics dashboard for business intelligence and data insights." />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Dashboard</span>
              </h1>
              
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your data into actionable insights with our advanced AI-powered analytics dashboard. 
                Monitor KPIs, track trends, and make data-driven decisions with real-time intelligence.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into business intelligence
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  
          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Capabilities Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Advanced Capabilities</h2>
                
          <p className="text-xl text-gray-300">
                  Our AI analytics dashboard provides comprehensive business intelligence tools
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI analytics dashboard can revolutionize your business intelligence.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AiAnalyticsDashboardPage;