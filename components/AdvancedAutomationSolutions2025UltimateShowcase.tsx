import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Settings, BarChart3, Users, Clock, Shield, Zap, Target, TrendingUp } from 'lucide-react';

const AdvancedAutomationSolutions2025UltimateShowcase: React.FC = () => {
  const automationModules = [
    {
      icon: Bot,
      title: "Intelligent Process Automation",
      description: "AI-powered automation that learns and adapts to your business processes",
      features: ["Self-learning algorithms", "Process optimization", "Error reduction"],
      impact: "85% process efficiency gain"
    },
    {
      icon: Settings,
      title: "Workflow Orchestration",
      description: "Seamlessly connect and automate complex business workflows across departments",
      features: ["Cross-department integration", "Real-time monitoring", "Automatic scaling"],
      impact: "60% faster execution"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics that predict trends and optimize business decisions",
      features: ["Real-time insights", "Trend forecasting", "Performance optimization"],
      impact: "95% prediction accuracy"
    },
    {
      icon: Users,
      title: "Customer Experience Automation",
      description: "Automated customer service and engagement systems with human-like interactions",
      features: ["24/7 customer support", "Personalized interactions", "Multi-channel integration"],
      impact: "90% customer satisfaction"
    },
    {
      icon: Clock,
      title: "Time Management Automation",
      description: "Intelligent scheduling and time optimization for maximum productivity",
      features: ["Smart scheduling", "Resource allocation", "Deadline management"],
      impact: "40% time savings"
    },
    {
      icon: Shield,
      title: "Security Automation",
      description: "Automated security monitoring and threat detection with instant response",
      features: ["Real-time monitoring", "Threat detection", "Automatic response"],
      impact: "99.9% security coverage"
    }
  ];

  const industrySolutions = [
    {
      industry: "Manufacturing",
      solution: "Smart Factory Automation",
      result: "300% productivity increase",
      description: "Complete automation of production lines with predictive maintenance"
    },
    {
      industry: "Healthcare",
      solution: "Patient Care Automation",
      result: "50% faster diagnosis",
      description: "Automated patient monitoring and diagnostic assistance systems"
    },
    {
      industry: "Finance",
      solution: "Financial Process Automation",
      result: "99.7% accuracy in transactions",
      description: "Automated trading, risk assessment, and compliance monitoring"
    },
    {
      industry: "Retail",
      solution: "Supply Chain Automation",
      result: "70% inventory optimization",
      description: "Automated inventory management and demand forecasting"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 mb-6">
            <Zap className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-semibold">Advanced Automation Solutions 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Automation Platform
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with intelligent automation that works 24/7, 
            learns from your processes, and delivers unprecedented efficiency gains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/automation-solutions" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Automation Solutions
            </Link>
            <Link 
              to="/automation-demo" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Automation Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {automationModules.map((module, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <module.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
              <p className="text-gray-300 mb-6">{module.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-lg font-semibold text-green-400">{module.impact}</div>
            </div>
          ))}
        </div>

        {/* Industry Solutions */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Industry-Specific Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{solution.industry}</h4>
                <div className="text-lg font-semibold text-blue-400 mb-2">{solution.solution}</div>
                <div className="text-2xl font-bold text-green-400 mb-2">{solution.result}</div>
                <div className="text-gray-300 text-sm">{solution.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-8 border border-white/20 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Calculate Your ROI</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See how much your business could save with our automation solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">2,500%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">6 months</div>
                <div className="text-gray-300">Payback Period</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-gray-300">Efficiency Gain</div>
              </div>
            </div>
            <Link 
              to="/roi-calculator" 
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Calculate Your ROI
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our automation solutions 
            to achieve unprecedented efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/case-studies" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2025UltimateShowcase;