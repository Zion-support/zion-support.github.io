import React from 'react';
import { motion } from 'framer-motion';

const AdvancedAITransformation2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 AI TRANSFORMATION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced AI Transformation 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Complete guide to AI transformation with autonomous agents, intelligent automation, and next-generation AI capabilities that revolutionize business operations
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Transformation
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Download Guide
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transformation Framework */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">AI Transformation Framework</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our proven 6-step framework for successful AI transformation across any organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Strategy",
                description: "Comprehensive analysis of current state and AI readiness assessment",
                features: ["AI maturity evaluation", "Technology gap analysis", "Strategic roadmap development"],
                icon: "📊"
              },
              {
                step: "02",
                title: "Data Foundation",
                description: "Building robust data infrastructure and governance frameworks",
                features: ["Data quality improvement", "Privacy compliance", "Real-time data pipelines"],
                icon: "🗄️"
              },
              {
                step: "03",
                title: "AI Model Development",
                description: "Custom AI model creation and training for specific business needs",
                features: ["Custom model training", "Performance optimization", "Continuous learning"],
                icon: "🧠"
              },
              {
                step: "04",
                title: "Integration & Deployment",
                description: "Seamless integration with existing systems and production deployment",
                features: ["API development", "System integration", "Production deployment"],
                icon: "⚙️"
              },
              {
                step: "05",
                title: "Monitoring & Optimization",
                description: "Continuous monitoring, performance tracking, and model optimization",
                features: ["Real-time monitoring", "Performance analytics", "Model retraining"],
                icon: "📈"
              },
              {
                step: "06",
                title: "Scale & Expand",
                description: "Scaling successful AI implementations across the organization",
                features: ["Multi-department rollout", "Advanced use cases", "Innovation labs"],
                icon: "🚀"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{phase.icon}</div>
                  <div className="text-2xl font-bold text-purple-300">{phase.step}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-purple-100 mb-6">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.features.map((feature, idx) => (
                    <li key={idx} className="text-purple-200 text-sm flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Advanced AI Capabilities</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cutting-edge AI technologies that power your transformation journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Autonomous AI Agents",
                description: "Self-operating AI agents that handle complex business processes without human intervention",
                capabilities: [
                  "Process automation and optimization",
                  "Decision-making in real-time",
                  "Self-learning and adaptation",
                  "Multi-task execution"
                ],
                icon: "🤖"
              },
              {
                title: "Natural Language Processing",
                description: "Advanced NLP capabilities for human-like communication and understanding",
                capabilities: [
                  "Conversational AI interfaces",
                  "Document analysis and summarization",
                  "Sentiment analysis and insights",
                  "Multi-language support"
                ],
                icon: "💬"
              },
              {
                title: "Computer Vision",
                description: "Visual AI systems that can see, understand, and analyze visual information",
                capabilities: [
                  "Image recognition and classification",
                  "Object detection and tracking",
                  "Quality control and inspection",
                  "Augmented reality integration"
                ],
                icon: "👁️"
              },
              {
                title: "Predictive Analytics",
                description: "Advanced forecasting and prediction capabilities for business intelligence",
                capabilities: [
                  "Demand forecasting",
                  "Risk assessment and mitigation",
                  "Trend analysis and insights",
                  "Scenario planning"
                ],
                icon: "🔮"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{capability.icon}</div>
                  <h3 className="text-2xl font-bold">{capability.title}</h3>
                </div>
                <p className="text-blue-100 mb-6">{capability.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-200">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {capability.capabilities.map((item, idx) => (
                      <li key={idx} className="text-blue-200 text-sm flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Transformation Success Stories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real results from organizations that have successfully transformed with AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Fortune 500 Manufacturing",
                industry: "Manufacturing",
                challenge: "Quality control and predictive maintenance",
                solution: "AI-powered visual inspection and predictive analytics",
                results: [
                  "95% reduction in quality defects",
                  "40% decrease in maintenance costs",
                  "300% improvement in efficiency"
                ],
                icon: "🏭"
              },
              {
                company: "Global Financial Services",
                industry: "Finance",
                challenge: "Fraud detection and risk management",
                solution: "Advanced AI models for real-time fraud detection",
                results: [
                  "99.8% fraud detection accuracy",
                  "60% reduction in false positives",
                  "$50M saved annually"
                ],
                icon: "🏦"
              },
              {
                company: "Healthcare Network",
                industry: "Healthcare",
                challenge: "Patient diagnosis and treatment optimization",
                solution: "AI-assisted diagnosis and treatment recommendation",
                results: [
                  "50% faster diagnosis times",
                  "30% improvement in treatment outcomes",
                  "25% reduction in readmission rates"
                ],
                icon: "🏥"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
              >
                <div className="text-4xl mb-4 text-center">{story.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{story.company}</h3>
                <p className="text-purple-200 text-sm text-center mb-4">{story.industry}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Challenge:</h4>
                  <p className="text-purple-100 text-sm mb-3">{story.challenge}</p>
                  
                  <h4 className="font-semibold text-purple-300 mb-2">Solution:</h4>
                  <p className="text-purple-100 text-sm mb-4">{story.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, idx) => (
                      <li key={idx} className="text-purple-200 text-sm flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Implementation Timeline</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Typical AI transformation journey from start to full deployment
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              {[
                { phase: "Week 1-2", title: "Discovery & Planning", description: "Initial assessment and strategy development" },
                { phase: "Week 3-6", title: "Data Preparation", description: "Data collection, cleaning, and infrastructure setup" },
                { phase: "Week 7-12", title: "Model Development", description: "AI model training and validation" },
                { phase: "Week 13-16", title: "Integration", description: "System integration and testing" },
                { phase: "Week 17-20", title: "Deployment", description: "Production deployment and monitoring setup" },
                { phase: "Week 21+", title: "Optimization", description: "Continuous improvement and scaling" }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-center mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>
                  <div className="ml-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                      <span className="text-purple-300 font-semibold">{milestone.phase}</span>
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start your AI transformation journey today with our proven framework and expert guidance
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Free Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAITransformation2025;