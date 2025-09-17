import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Brain, Zap, Users, Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';

const AITrendsInsights2025: React.FC = () => {
  const trends = [
    {
      title: "Autonomous AI Systems",
      description: "AI systems that operate independently with minimal human intervention, achieving 99.9% uptime and self-healing capabilities.",
      impact: "500% efficiency increase",
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Quantum-Enhanced AI",
      description: "Combining quantum computing with AI to solve complex optimization problems in seconds instead of years.",
      impact: "1000x faster processing",
      icon: Zap,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Emotional AI",
      description: "AI systems that understand and respond to human emotions, creating more natural and effective interactions.",
      impact: "400% better engagement",
      icon: Users,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI Security Evolution",
      description: "Advanced AI-powered security systems that detect and prevent threats with 99.99% accuracy in real-time.",
      impact: "99.99% threat detection",
      icon: Shield,
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Predictive Business Intelligence",
      description: "AI that predicts market trends, customer behavior, and business outcomes with 95% accuracy.",
      impact: "95% prediction accuracy",
      icon: Target,
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "AI-Human Collaboration",
      description: "Seamless integration of AI and human capabilities, creating superhuman productivity and creativity.",
      impact: "300% productivity boost",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Trends & Insights 2025 - The Future of Artificial Intelligence</title>
        <meta name="description" content="Discover the latest AI trends and insights for 2025. From autonomous systems to quantum computing, explore the future of artificial intelligence." />
        <meta name="keywords" content="AI trends, artificial intelligence, machine learning, quantum computing, autonomous systems, AI insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Trends & Insights
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore the cutting-edge AI trends that are reshaping industries and transforming the way we work, 
              live, and interact with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Get AI Insights
                <ArrowRight className="ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$2.3T</div>
              <div className="text-gray-300">AI Market Value by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300">Companies Using AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300">Average Productivity Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Trends Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Top AI Trends Shaping 2025
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((trend, index) => {
              const IconComponent = trend.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${trend.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{trend.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {trend.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{trend.impact}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            AI Impact Across Industries
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-green-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI-powered diagnostics with 99% accuracy
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Personalized treatment plans
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Drug discovery acceleration
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Finance</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Fraud detection in real-time
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Algorithmic trading optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Risk assessment automation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Manufacturing</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                  Predictive maintenance systems
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                  Quality control automation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                  Supply chain optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-yellow-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Retail</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  Personalized shopping experiences
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  Inventory management optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  Demand forecasting
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-red-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Transportation</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                  Autonomous vehicle technology
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                  Route optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                  Traffic management systems
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Personalized learning paths
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Intelligent tutoring systems
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Automated assessment tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Predictions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Future AI Predictions for 2025-2030
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Near-Term (2025-2026)</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-cyan-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">General AI Emergence</p>
                    <p className="text-gray-300">AI systems that can perform any intellectual task a human can do</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">Quantum AI Integration</p>
                    <p className="text-gray-300">Quantum computing becomes mainstream in AI applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">AI-Human Merging</p>
                    <p className="text-gray-300">Direct neural interfaces between humans and AI systems</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Long-Term (2027-2030)</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">Artificial General Intelligence</p>
                    <p className="text-gray-300">AI that surpasses human intelligence in all domains</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">Conscious AI Systems</p>
                    <p className="text-gray-300">AI systems with genuine consciousness and self-awareness</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">AI Singularity</p>
                    <p className="text-gray-300">The point where AI becomes self-improving and accelerates beyond human control</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Ahead of AI Trends
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get exclusive insights and updates on the latest AI developments and trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center">
              Subscribe to AI Insights
              <ArrowRight className="ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
              Download Full Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITrendsInsights2025;