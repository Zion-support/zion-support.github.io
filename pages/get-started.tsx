import React, { useState } from 'react',
import { motion } from 'framer-motion',
import { 
  Rocket, CheckCircle, ArrowRight, Brain, Atom,
  Shield, Zap, Users, Clock, Target, Star,
  FileText, Video, Code, Globe, Building
} from 'lucide-react',

export default function GetStarted() {
  const [selectedPath, setSelectedPath] = useState<string>(''),
  const [currentStep, setCurrentStep] = useState(1),
  const _onboardingSteps = [
    {
      step: 1,
      title: 'Choose Your Path',
      description: 'Select the technology area that best fits your needs',
      icon: <Target className=&quot;w-8 h-8 text-cyan-400&quot; />
    },
    {
      step: 2,
      title: 'Define Requirements',
      description: 'Tell us about your project goals and constraints',
      icon: <FileText className=&quot;w-8 h-8 text-purple-400&quot; />
    },
    {
      step: 3,
      title: 'Get Your Proposal',
      description: 'Receive a detailed proposal and implementation plan',
      icon: <Star className=&quot;w-8 h-8 text-yellow-400&quot; />
    },
    {
      step: 4,
      title: 'Begin Implementation',
      description: 'Start your journey with our expert team',
      icon: <Rocket className=&quot;w-8 h-8 text-green-400&quot; />
    }
  ],

  const technologyPaths = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness & Emotional Intelligence',
      description: 'Develop AI systems with genuine self-awareness and emotional intelligence',
      icon: <Brain className=&quot;w-8 h-8 text-cyan-400&quot; />,
      features: [
        'AI consciousness developmentEmotional intelligence trainingSelf-aware neural networksAutonomous decision making'
      ],
      useCases: ['Customer SuccessHR AnalyticsMental HealthEducation'],
      timeline: '6-12 months',
      complexity: 'Advanced'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Leverage quantum computing for cryptography, optimization, and simulation',
      icon: <Atom className=&quot;w-8 h-8 text-purple-400&quot; />,
      features: [
        'Quantum algorithmsPost-quantum cryptographyQuantum machine learningQuantum simulation'
      ],
      useCases: ['Financial ServicesHealthcareResearchCybersecurity'],
      timeline: '8-18 months',
      complexity: 'Expert'
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Business Systems',
      description: 'Build self-managing and self-optimizing business operations',
      icon: <Rocket className=&quot;w-8 h-8 text-green-400&quot; />,
      features: [
        'Process automationSelf-healing infrastructurePredictive maintenanceAutonomous operations'
      ],
      useCases: ['ManufacturingDevOpsCustomer ServiceSupply Chain'],
      timeline: '3-9 months',
      complexity: 'Intermediate'
    },
    {
      id: 'enterprise-solutions',
      name: 'Enterprise Technology Platform',
      description: 'Modernize your infrastructure with cloud-native and AI-powered solutions',
      icon: <Building className=&quot;w-8 h-8 text-blue-400&quot; />,
      features: [
        'Cloud migrationMicroservices architectureAI-powered analyticsSecurity automation'
      ],
      useCases: ['Digital TransformationLegacy ModernizationData AnalyticsSecurity'],
      timeline: '4-12 months',
      complexity: 'Intermediate'
    }
  ],

  const quickStartOptions = [
    {
      title: 'Free Consultation',
      description: '30-minute session to discuss your needs',
      duration: '30 min',
      icon: <Users className=&quot;w-6 h-6&quot; />,
      action: 'Schedule Call',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Demo Session',
      description: 'See our technology in action',
      duration: '45 min',
      icon: <Video className=&quot;w-6 h-6&quot; />,
      action: 'Book Demo',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Technical Assessment',
      description: 'Evaluate your current technology stack',
      duration: '2 hours',
      icon: <Code className=&quot;w-6 h-6&quot; />,
      action: 'Start Assessment',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Pilot Project',
      description: 'Small-scale implementation to prove value',
      duration: '4-8 weeks',
      icon: <Rocket className=&quot;w-6 h-6&quot; />,
      action: 'Discuss Pilot',
      color: 'from-orange-500 to-red-600'
    }
  ],

  const handlePathSelection = (pathId: string) => {
    setSelectedPath(pathId),
    setCurrentStep(2)
  },

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  },

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  },

  return (
    <div className=&quot;min-h-screen bg-black text-white&quot;>
      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20&quot; />
        <div className=&quot;relative z-10 container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center max-w-4xl mx-auto&quot;          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
              Get Started Today
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed&quot;>
              Begin your journey into the future of AI consciousness, quantum computing, 
              and autonomous systems. Our expert team will guide you every step of the way.            </p>
            <div className=&quot;flex flex-wrap justify-center gap-6&quot;>
              <div className=&quot;flex items-center gap-2 text-cyan-400&quot;>
                <Rocket className=&quot;w-6 h-6&quot; />
                <span>Quick Start</span>
              </div>
              <div className=&quot;flex items-center gap-2 text-purple-400&quot;>
                <Users className=&quot;w-6 h-6&quot; />
                <span>Expert Guidance</span>
              </div>
              <div className=&quot;flex items-center gap-2 text-green-400&quot;>
                <CheckCircle className=&quot;w-6 h-6&quot; />
                <span>Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Simple 4-Step Process
            </h2>
            <p className=&quot;text-xl text-gray-400&quot;>From initial consultation to full implementation</p>
          </motion.div>
          
          <div className=&quot;grid md:grid-cols-4 gap-8&quot;>
            {onboardingSteps.map((step, index) => (              <motion.div
                key={step.step}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                className={_`text-center p-6 rounded-2xl border transition-all duration-300 ${
                  currentStep === step.step
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50'
                    : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'}`}
              >
                <div className=&quot;w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold&quot;>
                  {step.step}
                </div>
                <div className=&quot;flex justify-center mb-4&quot;>{step.icon}</div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{step.title}</h3>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{step.description}</p>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Paths */}
      {currentStep === 1 && (
        <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-black&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Choose Your Technology Path
              </h2>
              <p className=&quot;text-xl text-gray-400&quot;>Select the area that best aligns with your business goals</p>
            </motion.div>
            
            <div className=&quot;grid lg:grid-cols-2 gap-8&quot;>
              {technologyPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;group cursor-pointer&quot;
                  onClick={() => handlePathSelection(path.id)}
                >
                  <div className=&quot;p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300&quot;>
                    <div className=&quot;flex items-start gap-4 mb-6&quot;>
                      <div className=&quot;flex-shrink-0&quot;>{path.icon}</div>
                      <div>
                        <h3 className=&quot;text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                          {path.name}
                        </h3>
                        <p className=&quot;text-gray-300 leading-relaxed&quot;>{path.description}</p>                      </div>
                    </div>
                    
                    <div className=&quot;grid md:grid-cols-2 gap-6 mb-6&quot;>
                      <div>
                        <h4 className=&quot;text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3&quot;>Key Features</h4>
                        <ul className=&quot;space-y-2&quot;>
                          {path.features.map((feature) => (
                            <li key={feature} className=&quot;flex items-center gap-2 text-gray-300&quot;>
                              <CheckCircle className=&quot;w-4 h-4 text-cyan-400&quot; />
                              <span className=&quot;text-sm&quot;>{feature}</span>                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className=&quot;text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3&quot;>Use Cases</h4>
                        <div className=&quot;flex flex-wrap gap-2&quot;>
                          {path.useCases.map((useCase) => (                            <span
                              key={useCase}
                              className=&quot;px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm&quot;
                            >
                              {_useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className=&quot;flex items-center justify-between pt-6 border-t border-gray-800/50&quot;>
                      <div className=&quot;flex gap-4 text-sm text-gray-400&quot;>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <Clock className=&quot;w-4 h-4&quot; />
                          {path.timeline}
                        </span>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <Target className=&quot;w-4 h-4&quot; />
                          {path.complexity}                        </span>
                      </div>
                      <div className=&quot;flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300&quot;>
                        <span className=&quot;font-medium&quot;>Select Path</span>
                        <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform duration-300&quot; />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Requirements Definition */}
      {currentStep === 2 && (
        <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-black&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Define Your Requirements
              </h2>
              <p className=&quot;text-xl text-gray-400&quot;>Help us understand your project goals and constraints</p>
            </motion.div>
            
            <div className=&quot;max-w-4xl mx-auto&quot;>
              <div className=&quot;bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50&quot;>
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
                    Selected Path: {technologyPaths.find(p => p.id === selectedPath)?.name}                  </h3>
                  <p className=&quot;text-gray-300&quot;>
                    Now let's gather more details about your specific needs
                  </p>
                </div>
                
                <div className=&quot;space-y-6&quot;>
                  <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
                    <div>
                      <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Project Timeline</label>
                      <select className=&quot;w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300&quot;>
                        <option>Immediate (1-2 weeks)</option>
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6+ months</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Budget Range</label>
                      <select className=&quot;w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300&quot;>
                        <option>Under $50K</option>
                        <option>$50K - $100K</option>
                        <option>$100K - $500K</option>
                        <option>$500K+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Project Description</label>
                    <textarea
                      rows={6}
                      className=&quot;w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300&quot;
                      placeholder=&quot;Describe your project goals, challenges, and specific requirements...&quot;                    />
                  </div>
                  
                  <div className=&quot;flex justify-between pt-6&quot;>
                    <button
                      onClick={handlePreviousStep}
                      className=&quot;px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300&quot;                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNextStep}
                      className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300&quot;                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Start Options */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Quick Start Options
            </h2>
            <p className=&quot;text-xl text-gray-400&quot;>Get started immediately with these quick options</p>
          </motion.div>
          
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {quickStartOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=&quot;group cursor-pointer&quot;
              >
                <div className=&quot;p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300&quot;>
                  <div className=&quot;flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                    {option.icon}
                  </div>
                  
                  <h3 className=&quot;text-xl font-bold text-white mb-3 text-center&quot;>{option.title}</h3>
                  <p className=&quot;text-gray-300 mb-4 text-center leading-relaxed&quot;>{option.description}</p>
                  
                  <div className=&quot;text-center mb-4&quot;>
                    <span className=&quot;inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm&quot;>
                      <Clock className=&quot;w-4 h-4&quot; />
                      {option.duration}                    </span>
                  </div>
                  
                  <button className={_`w-full py-3 px-4 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {_option.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className=&quot;py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Ready to Begin Your Journey?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Our team of experts is ready to help you navigate the future of technology. 
              Let's discuss your project and create a roadmap to success.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">              <a
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300&quot;
              >
                Contact Our Team
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;/quote&quot;
                className=&quot;inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300&quot;
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
