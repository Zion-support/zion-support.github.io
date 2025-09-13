import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Target, Users, Globe, Shield, Brain } from 'lucide-react';

const RevolutionaryAutomationSolutions2026: React.FC = () => {
  const automationSolutions = [
    {
      id: 1,
      title: "Intelligent Process Automation (IPA)",
      description: "Next-generation IPA systems that combine AI, machine learning, and robotic process automation to achieve 99.9% accuracy and 10x efficiency improvements.",
      category: "Process Automation",
      year: "2026",
      impact: "10x Efficiency",
      icon: Bot,
      color: "from-green-600 to-teal-600",
      features: [
        "AI-Powered Decision Making",
        "Self-Learning Workflows",
        "Real-time Process Optimization",
        "Seamless Integration"
      ],
      applications: [
        "Finance & Accounting",
        "Human Resources",
        "Customer Service",
        "Supply Chain"
      ],
      metrics: {
        efficiency: "10x",
        accuracy: "99.9%",
        costReduction: "80%",
        timeSaved: "90%"
      }
    },
    {
      id: 2,
      title: "Autonomous Business Operations",
      description: "Fully autonomous business systems that can run entire departments without human intervention, achieving 24/7 operations with 99.5% uptime.",
      category: "Autonomous Systems",
      year: "2026",
      impact: "24/7 Operations",
      icon: Globe,
      color: "from-blue-600 to-indigo-600",
      features: [
        "Fully Autonomous Operations",
        "Self-Healing Systems",
        "Predictive Maintenance",
        "Dynamic Resource Allocation"
      ],
      applications: [
        "Manufacturing",
        "Retail Operations",
        "Healthcare",
        "Financial Services"
      ],
      metrics: {
        uptime: "99.5%",
        automation: "95%",
        efficiency: "8x",
        costSavings: "70%"
      }
    },
    {
      id: 3,
      title: "AI-Powered Customer Experience",
      description: "Revolutionary customer experience automation that provides personalized, intelligent interactions across all touchpoints with 98% satisfaction rates.",
      category: "Customer Experience",
      year: "2026",
      impact: "98% Satisfaction",
      icon: Users,
      color: "from-purple-600 to-pink-600",
      features: [
        "Personalized Interactions",
        "Predictive Customer Needs",
        "Omnichannel Automation",
        "Real-time Sentiment Analysis"
      ],
      applications: [
        "E-commerce",
        "Banking",
        "Healthcare",
        "Telecommunications"
      ],
      metrics: {
        satisfaction: "98%",
        responseTime: "0.1s",
        personalization: "95%",
        retention: "85%"
      }
    },
    {
      id: 4,
      title: "Smart Resource Management",
      description: "Intelligent resource management systems that optimize allocation, reduce waste, and maximize efficiency across all business operations.",
      category: "Resource Management",
      year: "2026",
      impact: "90% Optimization",
      icon: Target,
      color: "from-orange-600 to-red-600",
      features: [
        "Dynamic Resource Allocation",
        "Predictive Demand Planning",
        "Waste Reduction AI",
        "Cost Optimization"
      ],
      applications: [
        "Manufacturing",
        "Energy Management",
        "Fleet Operations",
        "Facility Management"
      ],
      metrics: {
        optimization: "90%",
        wasteReduction: "75%",
        costSavings: "60%",
        efficiency: "6x"
      }
    },
    {
      id: 5,
      title: "Predictive Maintenance Systems",
      description: "Advanced predictive maintenance that uses AI and IoT to predict equipment failures before they occur, reducing downtime by 95% and maintenance costs by 70%.",
      category: "Predictive Maintenance",
      year: "2026",
      impact: "95% Downtime Reduction",
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
      features: [
        "AI-Powered Predictions",
        "IoT Sensor Integration",
        "Automated Maintenance Scheduling",
        "Real-time Monitoring"
      ],
      applications: [
        "Manufacturing Equipment",
        "Transportation",
        "Energy Infrastructure",
        "Healthcare Equipment"
      ],
      metrics: {
        downtimeReduction: "95%",
        costSavings: "70%",
        predictionAccuracy: "97%",
        maintenanceEfficiency: "90%"
      }
    },
    {
      id: 6,
      title: "Cognitive Decision Automation",
      description: "Revolutionary cognitive automation that makes complex business decisions using advanced AI, achieving human-level reasoning with superhuman speed.",
      category: "Cognitive Automation",
      year: "2026",
      impact: "5,000% Speed",
      icon: Brain,
      color: "from-cyan-600 to-blue-600",
      features: [
        "Complex Decision Making",
        "Multi-factor Analysis",
        "Risk Assessment",
        "Strategic Planning"
      ],
      applications: [
        "Investment Decisions",
        "Strategic Planning",
        "Risk Management",
        "Operational Optimization"
      ],
      metrics: {
        decisionSpeed: "5,000%",
        accuracy: "98.5%",
        complexity: "Unlimited",
        consistency: "100%"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Automation Solutions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge automation solutions that deliver unprecedented efficiency, accuracy, and cost savings
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Intelligent Process Automation
            </span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Autonomous Operations
            </span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              AI-Powered CX
            </span>
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Smart Resource Management
            </span>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {automationSolutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-300">{solution.category}</span>
                    <div className="text-2xl font-bold text-white">{solution.year}</div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Impact: {solution.impact}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, index) => (
                      <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(solution.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/automation-solutions-${solution.year.toLowerCase()}`}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Explore {solution.year} Solutions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies that have transformed their operations with our revolutionary automation solutions. Get started with a free assessment and see the potential ROI for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/automation-case-studies"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAutomationSolutions2026;