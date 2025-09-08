import React from 'react';
import { Link } from 'react-router-dom';

const AIAutonomousBusinessOperations: React.FC = () => {
  const features = [
    {
      title: "Process Automation",
      description: "AI-powered automation of repetitive business processes",
      icon: "⚙️"
    },
    {
      title: "Decision Support",
      description: "Intelligent decision-making assistance and recommendations",
      icon: "🧠"
    },
    {
      title: "Resource Optimization",
      description: "AI-driven optimization of business resources and operations",
      icon: "📊"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and optimize business performance",
      icon: "🔮"
    }
  ];

  const businessAreas = [
    {
      category: "Operations Management",
      capabilities: ["Process optimization", "Workflow automation", "Quality control", "Performance monitoring"]
    },
    {
      category: "Financial Operations",
      capabilities: ["Budget optimization", "Cost analysis", "Revenue forecasting", "Risk management"]
    },
    {
      category: "Human Resources",
      capabilities: ["Talent acquisition", "Performance evaluation", "Training optimization", "Workforce planning"]
    },
    {
      category: "Customer Operations",
      capabilities: ["Customer service automation", "Support ticket routing", "Feedback analysis", "Customer journey optimization"]
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Optimize production processes and quality control",
      icon: "🏭"
    },
    {
      title: "Retail",
      description: "Inventory management and customer experience optimization",
      icon: "🛍️"
    },
    {
      title: "Healthcare",
      description: "Patient care optimization and resource management",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Risk assessment and portfolio optimization",
      icon: "💼"
    }
  ];

  const benefits = [
    {
      title: "Efficiency Gains",
      description: "Improve operational efficiency by 40%",
      metric: "40%"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through optimization",
      metric: "30%"
    },
    {
      title: "Error Reduction",
      description: "Minimize human errors in business processes",
      metric: "90%"
    },
    {
      title: "Scalability",
      description: "Easily scale operations as business grows",
      metric: "Unlimited"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Business Operations
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with AI-powered automation and optimization. 
              Streamline processes, reduce costs, and improve efficiency across all 
              areas of your organization.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Business Operations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Business Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Business Coverage</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {businessAreas.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{area.category}</h3>
                  <ul className="space-y-2">
                    {area.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Business Operations?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Implementation Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Evaluate current operations and identify opportunities</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Design AI-powered solutions and automation workflows</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
                <p className="text-gray-300 text-sm">Deploy AI solutions and integrate with existing systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">Continuous monitoring and performance optimization</p>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Operations Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Metrics</h3>
                  <p className="text-gray-300 text-sm">Real-time monitoring of business operations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Insights</h3>
                  <p className="text-gray-300 text-sm">AI-generated recommendations and insights</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automation Status</h3>
                  <p className="text-gray-300 text-sm">Monitor automated processes and workflows</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business Operations?</h3>
              <p className="text-gray-300 mb-6">
                Experience the power of AI-driven business operations. Streamline processes, 
                reduce costs, and improve efficiency across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Operations Assessment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessOperations;