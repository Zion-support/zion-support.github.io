import React from 'react';
import { Link } from 'react-router-dom';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      title: "Full Automation",
      description: "Complete business operations automation with zero human intervention",
      icon: "🤖"
    },
    {
      title: "Intelligent Decision Making",
      description: "AI-powered decision making based on real-time data analysis",
      icon: "🧠"
    },
    {
      title: "Continuous Optimization",
      description: "24/7 optimization of business processes and performance",
      icon: "⚡"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and proactively optimize operations",
      icon: "🔮"
    }
  ];

  const businessAreas = [
    {
      category: "Financial Operations",
      operations: ["Budget management", "Expense tracking", "Revenue optimization", "Financial reporting", "Risk management"]
    },
    {
      category: "Human Resources",
      operations: ["Recruitment automation", "Performance management", "Training optimization", "Workforce planning", "Employee engagement"]
    },
    {
      category: "Customer Operations",
      operations: ["Customer service", "Support automation", "Relationship management", "Feedback analysis", "Customer journey optimization"]
    },
    {
      category: "Supply Chain",
      operations: ["Inventory management", "Supplier optimization", "Logistics planning", "Demand forecasting", "Quality control"]
    }
  ];

  const capabilities = [
    {
      title: "Process Automation",
      description: "Automate repetitive business processes and workflows",
      icon: "⚙️"
    },
    {
      title: "Data Integration",
      description: "Seamlessly integrate with existing business systems",
      icon: "🔗"
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor all operations in real-time with AI insights",
      icon: "📡"
    },
    {
      title: "Scalable Operations",
      description: "Scale operations automatically as business grows",
      icon: "📈"
    }
  ];

  const benefits = [
    {
      title: "24/7 Operations",
      description: "Business runs continuously without interruption",
      metric: "24/7"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through automation",
      metric: "40%"
    },
    {
      title: "Efficiency Gains",
      description: "Improve operational efficiency significantly",
      metric: "60%"
    },
    {
      title: "Error Elimination",
      description: "Eliminate human errors in business processes",
      metric: "99.9%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Business Operations Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business with our fully autonomous operations platform. 
              Your business runs itself with AI-powered intelligence, optimization, and 
              continuous improvement.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Fully Autonomous Operations</h2>
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
                    {area.operations.map((operation, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {operation}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Autonomous Operations?</h2>
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
                <p className="text-gray-300 text-sm">Evaluate current operations and automation potential</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Design autonomous workflows and AI systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deployment</h3>
                <p className="text-gray-300 text-sm">Deploy autonomous systems and begin operations</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">Continuous learning and system improvement</p>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Autonomous Operations Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Operations Overview</h3>
                  <p className="text-gray-300 text-sm">Real-time view of all business operations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Insights</h3>
                  <p className="text-gray-300 text-sm">AI-generated recommendations and decisions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
                  <p className="text-gray-300 text-sm">Monitor system performance and efficiency</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold text-white mb-3">Enterprise</h3>
                <p className="text-gray-300 text-sm">Large organizations with complex operations</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-lg font-semibold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300 text-sm">Industrial operations and production</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm">Medical facilities and healthcare systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold text-white mb-3">Financial</h3>
                <p className="text-gray-300 text-sm">Banks and financial institutions</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready for Autonomous Business Operations?</h3>
              <p className="text-gray-300 mb-6">
                Experience the future of business. Let AI run your operations while you 
                focus on growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Autonomous Assessment
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

export default AutonomousBusinessOperationsPlatform;