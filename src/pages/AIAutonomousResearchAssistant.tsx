import React from 'react';
import { Link } from 'react-router-dom';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      title: "Intelligent Research",
      description: "AI-powered research across multiple data sources and formats",
      icon: "🔍"
    },
    {
      title: "Document Analysis",
      description: "Advanced text analysis and information extraction",
      icon: "📄"
    },
    {
      title: "Insight Generation",
      description: "Automated synthesis of research findings and insights",
      icon: "💡"
    },
    {
      title: "Report Creation",
      description: "Professional report generation with customizable templates",
      icon: "📊"
    }
  ];

  const researchCapabilities = [
    {
      category: "Data Sources",
      capabilities: ["Academic databases", "Industry reports", "News articles", "Social media", "Web content", "Internal documents"]
    },
    {
      category: "Analysis Types",
      capabilities: ["Sentiment analysis", "Trend identification", "Pattern recognition", "Comparative analysis", "Risk assessment", "Opportunity detection"]
    },
    {
      category: "Output Formats",
      capabilities: ["Executive summaries", "Detailed reports", "Data visualizations", "Infographics", "Presentations", "Actionable insights"]
    }
  ];

  const useCases = [
    {
      title: "Market Research",
      description: "Comprehensive market analysis and competitive intelligence",
      icon: "📈"
    },
    {
      title: "Academic Research",
      description: "Literature reviews and research synthesis",
      icon: "🎓"
    },
    {
      title: "Legal Research",
      description: "Case law analysis and legal document review",
      icon: "⚖️"
    },
    {
      title: "Business Intelligence",
      description: "Industry trends and business opportunity analysis",
      icon: "💼"
    }
  ];

  const benefits = [
    {
      title: "Time Savings",
      description: "Reduce research time by 70%",
      metric: "70%"
    },
    {
      title: "Comprehensive Coverage",
      description: "Access to millions of data sources",
      metric: "Millions"
    },
    {
      title: "Accuracy",
      description: "AI-powered validation and fact-checking",
      metric: "99%"
    },
    {
      title: "Cost Efficiency",
      description: "Lower research costs and faster insights",
      metric: "60%"
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
                {" "}Research Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your research process with our AI-powered autonomous research assistant. 
              Get comprehensive insights, automated analysis, and professional reports in minutes, 
              not days.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced AI Research Features</h2>
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
          
          {/* Research Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Research Capabilities</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {researchCapabilities.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.capabilities.map((capability, idx) => (
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Research Assistant?</h2>
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
          
          {/* Research Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Define Research</h3>
                <p className="text-gray-300 text-sm">Specify your research topic and requirements</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Analysis</h3>
                <p className="text-gray-300 text-sm">AI processes multiple data sources simultaneously</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Insight Generation</h3>
                <p className="text-gray-300 text-sm">AI synthesizes findings and generates insights</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Report Delivery</h3>
                <p className="text-gray-300 text-sm">Receive comprehensive research reports</p>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Research Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Research Progress</h3>
                  <p className="text-gray-300 text-sm">Track research status and completion</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Source Management</h3>
                  <p className="text-gray-300 text-sm">Organize and manage research sources</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Report Library</h3>
                  <p className="text-gray-300 text-sm">Access all generated research reports</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Research Process?</h3>
              <p className="text-gray-300 mb-6">
                Experience the power of AI-driven research. Get comprehensive insights, 
                save time, and make better decisions with our autonomous research assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Start Research Project
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

export default AIAutonomousResearchAssistant;