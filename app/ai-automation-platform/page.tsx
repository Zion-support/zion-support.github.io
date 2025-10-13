import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, Circle, Workflow, Brain, Settings, Zap, Play } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Process Optimization",
      description: "Continuously optimize processes using machine learning algorithms",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor and analyze automation performance in real-time",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 60%",
    "Increase process efficiency by 80%",
    "Eliminate human errors in repetitive tasks",
    "Scale operations without proportional cost increase",
    "24/7 automated process execution",
    "Real-time performance analytics and insights"
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbots and automated ticket routing",
      icon: <Circle className="w-5 h-5" />
    },
    {
      title: "Data Processing",
      description: "Automated data extraction, validation, and analysis",
      icon: <Circle className="w-5 h-5" />
    },
    {
      title: "Inventory Management",
      description: "Smart inventory tracking and automated reordering",
      icon: <Circle className="w-5 h-5" />
    },
    {
      title: "Financial Operations",
      description: "Automated invoice processing and financial reporting",
      icon: <Circle className="w-5 h-5" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI automation platform. Automate workflows, optimize processes, and scale operations efficiently." />
        <meta name="keywords" content="AI automation, workflow automation, business process automation, AI platform, process optimization" />
      </Helmet>
      
      <EnhancedSEO 
        title="AI Automation Platform"
        description="Transform your business with our comprehensive AI automation platform"
        keywords="AI automation, workflow automation, business process automation"
      />
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automation
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business operations with our comprehensive AI automation platform. 
                Automate workflows, optimize processes, and scale efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton>
                  Start Your Automation Journey
                  <Right className="w-4 h-4 ml-2" />
                </FuturisticButton>
                <button className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  <Play className="w-4 h-4 mr-2 inline" />
                  Watch Demo
                </button>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powerful AI-driven automation capabilities for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our AI Automation Platform?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our platform delivers measurable results and transforms how your business operates.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Circle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Platform Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                    <div className="text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                    <div className="text-gray-300">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-300">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Common Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how businesses are using our platform to automate their operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <FuturisticCard key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300">
                      {useCase.description}
                    </p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12 border border-slate-700/50">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI automation platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton>
                  Get Started Today
                  <Right className="w-4 h-4 ml-2" />
                </FuturisticButton>
                <button className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPlatform;