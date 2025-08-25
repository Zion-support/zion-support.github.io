import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Database, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Rocket,
  PieChart,
  LineChart,
  Activity,
  Brain,
  Cpu
} from 'lucide-react';

export default function AIBusinessIntelligenceSuite() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive business intelligence with real-time data visualization and interactive dashboards."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis to anticipate market changes and business opportunities."
    },
    {
      icon: Target,
      title: "Performance Metrics",
      description: "Track key performance indicators (KPIs) and business metrics across all departments."
    },
    {
      icon: Users,
      title: "User Behavior Analysis",
      description: "Deep insights into customer behavior, preferences, and engagement patterns."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with multiple data sources including CRM, ERP, and external APIs."
    },
    {
      icon: Zap,
      title: "Real-time Reporting",
      description: "Instant access to business insights with automated report generation and distribution."
    }
  ];

  const analyticsModules = [
    {
      title: "Sales Analytics",
      description: "Track sales performance, pipeline analysis, and revenue forecasting.",
      icon: TrendingUp
    },
    {
      title: "Marketing Analytics",
      description: "Campaign performance, ROI analysis, and customer acquisition metrics.",
      icon: Target
    },
    {
      title: "Financial Analytics",
      description: "Financial reporting, budget tracking, and profitability analysis.",
      icon: BarChart3
    },
    {
      title: "Operational Analytics",
      description: "Process efficiency, resource utilization, and operational performance metrics.",
      icon: Activity
    }
  ];

  const benefits = [
    "Data-driven decision making",
    "Improved business performance",
    "Real-time insights and alerts",
    "Automated reporting and analysis",
    "Enhanced customer understanding",
    "Competitive advantage through insights"
  ];

  const useCases = [
    {
      title: "Retail Analytics",
      description: "Customer behavior analysis, inventory optimization, and sales forecasting."
    },
    {
      title: "Healthcare Analytics",
      description: "Patient outcomes, operational efficiency, and resource allocation optimization."
    },
    {
      title: "Financial Services",
      description: "Risk assessment, fraud detection, and portfolio performance analysis."
    },
    {
      title: "Manufacturing",
      description: "Production efficiency, quality control, and supply chain optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Business Intelligence Suite
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with intelligent analytics and insights that drive growth, 
              optimize operations, and provide a competitive edge in today's data-driven world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive BI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered business intelligence suite provides everything you need to 
              understand your business and make informed decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Analytics Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized analytics modules designed for different business functions and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsModules.map((module, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <module.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{module.title}</h3>
                <p className="text-gray-300">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Industry Use Cases</h2>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">{useCase.title}</h4>
                    <p className="text-gray-300 text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies for maximum performance, scalability, and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Machine Learning", desc: "AI algorithms" },
              { icon: Database, name: "Big Data", desc: "Real-time processing" },
              { icon: Cpu, name: "Cloud Native", desc: "Scalable architecture" },
              { icon: Shield, name: "Enterprise Security", desc: "Bank-grade protection" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of intelligent business analytics with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Analyzing
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}