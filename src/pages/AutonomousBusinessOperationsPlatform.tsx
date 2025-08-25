import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Building, 
  Zap, 
  Target, 
  Shield, 
  Rocket, 
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain
} from 'lucide-react';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: "Autonomous Business Management",
      description: "AI-powered systems that manage business operations independently, making decisions and executing tasks without human intervention."
    },
    {
      icon: Zap,
      title: "Real-time Process Automation",
      description: "Continuous monitoring and automation of business processes with instant response to changing conditions and requirements."
    },
    {
      icon: Target,
      title: "Intelligent Decision Making",
      description: "Advanced algorithms that analyze data, predict outcomes, and make optimal business decisions based on multiple factors."
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Automated risk assessment, compliance monitoring, and regulatory adherence with built-in safety protocols."
    },
    {
      icon: Rocket,
      title: "Scalable Operations",
      description: "Flexible architecture that grows with your business, handling increased complexity and volume automatically."
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "Seamless integration with existing business systems, CRMs, ERPs, and third-party applications."
    }
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: "Financial Operations",
      description: "Automated accounting, expense management, budget optimization, and financial reporting with AI-driven insights."
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Intelligent recruitment, performance management, training optimization, and employee engagement automation."
    },
    {
      icon: Code,
      title: "IT Operations",
      description: "Automated system monitoring, incident response, capacity planning, and infrastructure optimization."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Intelligent data processing, analytics automation, report generation, and business intelligence optimization."
    },
    {
      icon: Network,
      title: "Supply Chain",
      description: "Automated inventory management, demand forecasting, supplier optimization, and logistics coordination."
    },
    {
      icon: Cloud,
      title: "Customer Service",
      description: "AI-powered customer support, automated issue resolution, sentiment analysis, and service optimization."
    }
  ];

  const benefits = [
    "24/7 autonomous operation with zero downtime",
    "Reduced operational costs by up to 60%",
    "Improved decision accuracy and consistency",
    "Real-time monitoring and instant response",
    "Scalable operations without proportional cost increase",
    "Enhanced compliance and risk management"
  ];

  const modules = [
    {
      icon: Settings,
      title: "Process Orchestrator",
      description: "Central hub for managing and coordinating all business processes and workflows."
    },
    {
      icon: Brain,
      title: "AI Decision Engine",
      description: "Intelligent system that makes business decisions based on data analysis and predictive modeling."
    },
    {
      icon: Cpu,
      title: "Automation Engine",
      description: "Core automation system that executes tasks and processes without human intervention."
    },
    {
      icon: Eye,
      title: "Monitoring & Analytics",
      description: "Comprehensive monitoring, reporting, and analytics for all business operations."
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Built-in security protocols and compliance management for regulatory adherence."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimizer",
      description: "Continuous optimization of business processes for maximum efficiency and effectiveness."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary autonomous business operations platform that manages your business independently using AI. Automate processes, optimize operations, and scale efficiently with zero human intervention." />
        <meta name="keywords" content="autonomous business operations, business automation, AI business management, process automation, business optimization, autonomous systems" />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-business-operations-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Autonomous Business
              <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Operations Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with the world's first truly autonomous operations platform. 
              Our AI-powered system manages your business independently, optimizing processes, 
              making decisions, and driving growth 24/7 without human intervention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-semibold rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous business operations platform delivers unprecedented capabilities 
                that redefine how businesses operate and scale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Every Department
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform revolutionizes operations across all business functions, 
                delivering unprecedented efficiency and insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform Modules Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Platform Modules
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive platform consists of six core modules that work together 
                to create a fully autonomous business operation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Autonomous Operations?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the competitive advantage that autonomous business operations provide 
                for your organization's growth and efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Star className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Industry Pioneer</h3>
                  <p className="text-gray-300 mb-6">
                    Be among the first to experience truly autonomous business operations 
                    and gain a significant competitive advantage in your industry.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Go Autonomous?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey toward fully autonomous business operations today 
                and discover the unlimited potential of AI-powered business management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutonomousBusinessOperationsPlatform;