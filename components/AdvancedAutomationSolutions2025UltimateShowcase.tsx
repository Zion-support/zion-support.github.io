import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Cog, Workflow, Database, Shield, TrendingUp } from 'lucide-react';

const AdvancedAutomationSolutions2025UltimateShowcase: React.FC = () => {
  const automationSolutions = [
    {
      id: 1,
      title: "Intelligent Process Automation",
      description: "AI-powered process automation that learns and adapts to optimize business workflows with minimal human intervention",
      category: "Process Automation",
      icon: Workflow,
      featured: true,
      complexity: "Advanced",
      benefits: ["95% Accuracy", "24/7 Operations", "Cost Reduction"],
      link: "/advanced-automation-solutions-2025/intelligent-process-automation"
    },
    {
      id: 2,
      title: "Autonomous Decision Engine",
      description: "Self-learning decision engine that makes complex business decisions autonomously using advanced AI algorithms",
      category: "Decision Automation",
      icon: Bot,
      featured: true,
      complexity: "Expert",
      benefits: ["Real-time Decisions", "Risk Mitigation", "Scalable Logic"],
      link: "/advanced-automation-solutions-2025/autonomous-decision-engine"
    },
    {
      id: 3,
      title: "Smart Data Pipeline",
      description: "Automated data processing pipeline that cleans, transforms, and analyzes data with intelligent quality control",
      category: "Data Automation",
      icon: Database,
      featured: true,
      complexity: "Advanced",
      benefits: ["Real-time Processing", "Data Quality", "Error Reduction"],
      link: "/advanced-automation-solutions-2025/smart-data-pipeline"
    },
    {
      id: 4,
      title: "AI-Powered Security Automation",
      description: "Advanced security automation system that detects, analyzes, and responds to threats autonomously",
      category: "Security Automation",
      icon: Shield,
      featured: false,
      complexity: "Expert",
      benefits: ["Threat Detection", "Incident Response", "Compliance"],
      link: "/advanced-automation-solutions-2025/security-automation"
    },
    {
      id: 5,
      title: "Intelligent System Integration",
      description: "Seamless integration automation that connects disparate systems and applications with intelligent mapping",
      category: "Integration Automation",
      icon: Cog,
      featured: false,
      complexity: "Advanced",
      benefits: ["System Connectivity", "Data Synchronization", "API Management"],
      link: "/advanced-automation-solutions-2025/system-integration"
    },
    {
      id: 6,
      title: "Predictive Maintenance Automation",
      description: "AI-driven predictive maintenance that anticipates equipment failures and schedules maintenance automatically",
      category: "Maintenance Automation",
      icon: TrendingUp,
      featured: false,
      complexity: "Intermediate",
      benefits: ["Downtime Reduction", "Cost Savings", "Equipment Longevity"],
      link: "/advanced-automation-solutions-2025/predictive-maintenance"
    }
  ];

  const featuredSolutions = automationSolutions.filter(solution => solution.featured);
  const regularSolutions = automationSolutions.filter(solution => !solution.featured);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Intermediate': return 'text-green-400 bg-green-600/20';
      case 'Advanced': return 'text-yellow-400 bg-yellow-600/20';
      case 'Expert': return 'text-red-400 bg-red-600/20';
      default: return 'text-gray-400 bg-gray-600/20';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Automation Solutions 2025
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with cutting-edge automation solutions that combine AI, machine learning, and intelligent workflows for maximum efficiency
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
              AI-Powered Automation
            </span>
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              Intelligent Workflows
            </span>
            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
              Self-Learning Systems
            </span>
          </div>
        </div>

        {/* Featured Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Automation Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="bg-gradient-to-br from-slate-800/50 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-emerald-600/20 rounded-xl mr-4">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <span className="text-emerald-300 text-sm font-medium">
                          {solution.category}
                        </span>
                        <div className={`text-xs px-2 py-1 rounded-full mt-1 ${getComplexityColor(solution.complexity)}`}>
                          {solution.complexity}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {solution.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Key Benefits:</h5>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="bg-emerald-700/30 text-emerald-300 px-2 py-1 rounded text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore Solution
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regular Solutions Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Complete Automation Portfolio
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularSolutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-blue-300 text-sm font-medium">
                        {solution.category}
                      </span>
                      <div className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${getComplexityColor(solution.complexity)}`}>
                        {solution.complexity}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {solution.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {solution.benefits.slice(0, 2).map((benefit, index) => (
                        <span
                          key={index}
                          className="bg-blue-700/30 text-blue-300 px-2 py-1 rounded text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Automation Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Why Choose Our Automation Solutions?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-white/10">
              <div className="p-3 bg-emerald-600/20 rounded-xl w-fit mx-auto mb-4">
                <Bot className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Intelligent Automation</h4>
              <p className="text-gray-300 text-sm">AI-powered automation that learns and improves over time</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-white/10">
              <div className="p-3 bg-blue-600/20 rounded-xl w-fit mx-auto mb-4">
                <Workflow className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Seamless Integration</h4>
              <p className="text-gray-300 text-sm">Easy integration with existing systems and workflows</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-white/10">
              <div className="p-3 bg-purple-600/20 rounded-xl w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Enterprise Security</h4>
              <p className="text-gray-300 text-sm">Bank-grade security with compliance and audit trails</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-white/10">
              <div className="p-3 bg-yellow-600/20 rounded-xl w-fit mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Proven ROI</h4>
              <p className="text-gray-300 text-sm">Measurable results with rapid ROI and cost savings</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Transform your operations with our advanced automation solutions. Schedule a consultation to discover how automation can revolutionize your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/advanced-automation-solutions-2025"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore All Solutions
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 hover:border-emerald-500/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-600/10"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2025UltimateShowcase;