import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Settings, BarChart3, Users, Zap, Target, TrendingUp, Brain, Cpu } from 'lucide-react';

const AdvancedAIAutomationShowcase: React.FC = () => {
  const automationFeatures = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Automation",
      description: "AI-powered automation that learns and adapts to your business processes"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Process Optimization",
      description: "Automatically optimize workflows for maximum efficiency and productivity"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with advanced AI analytics"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human-AI Collaboration",
      description: "Seamless integration between human workers and AI systems"
    }
  ];

  const automationSolutions = [
    {
      title: "Enterprise Process Automation",
      description: "Transform complex business processes with intelligent automation",
      benefits: ["90% reduction in manual tasks", "99.5% accuracy rate", "24/7 operation"],
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Customer Service Automation",
      description: "AI-powered customer support that provides instant, accurate responses",
      benefits: ["Instant response time", "95% customer satisfaction", "Multilingual support"],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Financial Automation",
      description: "Automate financial processes with AI-driven decision making",
      benefits: ["Real-time risk assessment", "Automated compliance", "Fraud detection"],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize supply chains with predictive AI and automated logistics",
      benefits: ["30% cost reduction", "Predictive maintenance", "Smart routing"],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const stats = [
    { value: "500+", label: "Processes Automated" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "75%", label: "Cost Reduction" },
    { value: "10x", label: "Productivity Increase" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6">
            <Bot className="w-4 h-4 mr-2" />
            Advanced AI Automation Solutions
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your operations with our advanced AI automation solutions. 
            Increase efficiency, reduce costs, and unlock new possibilities for growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {automationFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {automationSolutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-blue-400 group-hover:text-purple-400 transition-colors">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Proven Results
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with our 
              advanced AI automation solutions. Start your automation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/automation-solutions" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore Automation Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/automation-demo" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center"
              >
                Schedule Demo
                <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAIAutomationShowcase;