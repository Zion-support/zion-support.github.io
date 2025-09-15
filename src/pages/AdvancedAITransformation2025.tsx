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
          </div>
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
        )}

        {activeTab === 'solutions' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Solution Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address every aspect of your business transformation journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Chatbots</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent conversational AI that provides 24/7 customer support and sales assistance.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Natural language processing</div>
                  <div>• Multi-language support</div>
                  <div>• Integration with CRM systems</div>
                  <div>• Real-time learning capabilities</div>
                </div>
                <div className="mt-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Starting at $299/month
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Advanced machine learning models that predict trends and optimize business decisions.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Demand forecasting</div>
                  <div>• Risk assessment</div>
                  <div>• Customer behavior analysis</div>
                  <div>• Market trend prediction</div>
                </div>
                <div className="mt-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Starting at $599/month
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold mb-4">Process Automation</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent automation that streamlines workflows and eliminates manual tasks.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Document processing</div>
                  <div>• Email automation</div>
                  <div>• Data entry automation</div>
                  <div>• Workflow optimization</div>
                </div>
                <div className="mt-6">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Starting at $799/month
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Personalization Engine</h3>
                <p className="text-gray-600 mb-6">
                  AI-driven personalization that delivers tailored experiences to every customer.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Content personalization</div>
                  <div>• Product recommendations</div>
                  <div>• Dynamic pricing</div>
                  <div>• Behavioral targeting</div>
                </div>
                <div className="mt-6">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Starting at $999/month
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world examples of how our AI solutions have transformed businesses across industries.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">🏦</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Financial Services Transformation</h3>
                    <p className="text-gray-600 mb-6">
                      A major bank implemented our AI-powered fraud detection system, reducing false positives by 85% 
                      while improving detection accuracy by 95%.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">85%</div>
                        <div className="text-sm text-gray-600">Reduction in false positives</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">95%</div>
                        <div className="text-sm text-gray-600">Detection accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">$5M</div>
                        <div className="text-sm text-gray-600">Annual savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">🛒</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">E-commerce Personalization</h3>
                    <p className="text-gray-600 mb-6">
                      An online retailer deployed our personalization engine, resulting in a 40% increase in 
                      conversion rates and 60% improvement in customer engagement.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">40%</div>
                        <div className="text-sm text-gray-600">Increase in conversions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">60%</div>
                        <div className="text-sm text-gray-600">Better engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">25%</div>
                        <div className="text-sm text-gray-600">Higher AOV</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include 24/7 support and regular updates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$299</div>
                  <div className="text-gray-600">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Basic AI chatbot</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Up to 1,000 conversations/month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Basic analytics</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$799</div>
                  <div className="text-gray-600">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Advanced AI chatbot</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Up to 10,000 conversations/month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Process automation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                  <div className="text-gray-600">pricing</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Full AI suite</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited conversations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>On-premise deployment</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}
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