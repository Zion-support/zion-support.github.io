import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Globe, 
  ArrowRight, 
  Play,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  Cpu,
  Database,
  Shield,
  Rocket
} from 'lucide-react';

const AI2025_2030UltimateContentRevolutionShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('predictions');

  const contentSections = {
    predictions: {
      title: "AI Predictions 2025-2030",
      description: "Comprehensive predictions covering the next 5 years of AI development",
      icon: Brain,
      color: "blue",
      content: [
        {
          title: "Neural Synthesis Revolution (2025-2026)",
          description: "Breakthrough in neural network synthesis enabling 10,000x faster processing",
          impact: "2,500% ROI increase",
          features: ["Quantum Neural Networks", "Synthetic Intelligence", "Autonomous Learning Systems"]
        },
        {
          title: "Quantum-AI Fusion (2027-2028)",
          description: "Integration of quantum computing with AI for unprecedented capabilities",
          impact: "99.9% accuracy rate",
          features: ["Quantum Machine Learning", "Error-Corrected Processing", "Quantum Internet"]
        },
        {
          title: "Transcendent Intelligence (2029-2030)",
          description: "Development of AI systems that surpass human cognitive abilities",
          impact: "50M+ users impacted",
          features: ["Conscious AI Systems", "Omniversal Intelligence", "Neural Interface Integration"]
        }
      ]
    },
    quantum: {
      title: "Quantum Computing Breakthroughs",
      description: "Revolutionary quantum computing solutions and infrastructure",
      icon: Zap,
      color: "purple",
      content: [
        {
          title: "Error-Corrected Quantum Computers",
          description: "First commercially viable quantum computers with error correction",
          impact: "1000x computational speedup",
          features: ["Logical Qubits", "Fault-Tolerant Operations", "Quantum Error Correction"]
        },
        {
          title: "Quantum Internet Infrastructure",
          description: "Global quantum communication network enabling secure data transmission",
          impact: "Unbreakable encryption",
          features: ["Quantum Key Distribution", "Quantum Teleportation", "Quantum Repeaters"]
        },
        {
          title: "Quantum Machine Learning",
          description: "Machine learning algorithms running on quantum hardware",
          impact: "Exponential speedup in ML",
          features: ["Quantum Neural Networks", "Quantum Optimization", "Quantum Feature Maps"]
        }
      ]
    },
    automation: {
      title: "Advanced Automation Solutions",
      description: "Intelligent automation systems transforming business operations",
      icon: Target,
      color: "green",
      content: [
        {
          title: "Intelligent Process Automation",
          description: "AI-powered automation of complex business processes",
          impact: "80% reduction in manual work",
          features: ["Cognitive Automation", "Process Mining", "Intelligent Document Processing"]
        },
        {
          title: "Autonomous Decision Systems",
          description: "AI systems capable of making complex business decisions autonomously",
          impact: "99.9% decision accuracy",
          features: ["Real-time Decision Making", "Risk Assessment", "Strategic Planning"]
        },
        {
          title: "Predictive Maintenance AI",
          description: "AI systems predicting and preventing equipment failures",
          impact: "90% reduction in downtime",
          features: ["IoT Integration", "Anomaly Detection", "Maintenance Scheduling"]
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-600/20 to-blue-800/20",
        border: "border-blue-400/30",
        text: "text-blue-400",
        button: "from-blue-600 to-blue-700"
      },
      purple: {
        bg: "from-purple-600/20 to-purple-800/20",
        border: "border-purple-400/30",
        text: "text-purple-400",
        button: "from-purple-600 to-purple-700"
      },
      green: {
        bg: "from-green-600/20 to-green-800/20",
        border: "border-green-400/30",
        text: "text-green-400",
        button: "from-green-600 to-green-700"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Revolution
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most comprehensive collection of AI predictions, quantum computing breakthroughs, 
            and automation solutions that will define the next decade.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(contentSections).map(([key, section]) => {
            const Icon = section.icon;
            const colors = getColorClasses(section.color);
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 m-2 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${colors.button} text-white`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {section.title}
              </button>
            );
          })}
        </div>

        {/* Active Content */}
        {activeTab && contentSections[activeTab as keyof typeof contentSections] && (
          <div className="mb-16">
            {(() => {
              const section = contentSections[activeTab as keyof typeof contentSections];
              const colors = getColorClasses(section.color);
              const Icon = section.icon;
              
              return (
                <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 border ${colors.border}`}>
                  <div className="flex items-center mb-6">
                    <Icon className={`w-8 h-8 ${colors.text} mr-4`} />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                      <p className="text-gray-300">{section.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {section.content.map((item, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <div className="mb-4">
                          <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                            {item.impact}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')} mr-3`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Interactive Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-400/30 text-center">
            <Play className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Interactive Demos</h3>
            <p className="text-gray-300 text-sm">Experience AI solutions in action</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-400/30 text-center">
            <Download className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Download Resources</h3>
            <p className="text-gray-300 text-sm">Get comprehensive guides and tools</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl p-6 border border-green-400/30 text-center">
            <Share2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Share & Collaborate</h3>
            <p className="text-gray-300 text-sm">Connect with the community</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-yellow-400/30 text-center">
            <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Learn & Master</h3>
            <p className="text-gray-300 text-sm">Comprehensive learning paths</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join millions of users already transforming their businesses with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-2025-ultimate-content-revolution" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center"
              >
                Get Expert Consultation
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateContentRevolutionShowcase;