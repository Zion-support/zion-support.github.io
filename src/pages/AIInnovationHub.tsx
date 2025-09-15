import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  ArrowRight, 
  Brain, 
  Cpu, 
  Database, 
  Globe, 
  Shield, 
  Zap, 
  Users,
  TrendingUp,
  Target,
  Award,
  Rocket,
  CheckCircle,
  Play,
  Download,
  ExternalLink,
  Lightbulb,
  Code,
  Network,
  Lock,
  BarChart3,
  MessageSquare,
  Calendar,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIInnovationHub() {
  const aiCapabilities = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP models for text analysis, sentiment detection, and language generation",
      icon: MessageSquare,
      features: ["Text Classification", "Sentiment Analysis", "Language Translation", "Content Generation"],
      applications: ["Chatbots", "Document Analysis", "Customer Support", "Content Creation"]
    },
    {
      title: "Computer Vision",
      description: "State-of-the-art image and video analysis using deep learning algorithms",
      icon: Eye,
      features: ["Object Detection", "Image Classification", "Facial Recognition", "Video Analytics"],
      applications: ["Security Systems", "Quality Control", "Medical Imaging", "Autonomous Vehicles"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models for forecasting and predictive insights",
      icon: TrendingUp,
      features: ["Demand Forecasting", "Risk Assessment", "Performance Prediction", "Anomaly Detection"],
      applications: ["Financial Services", "Supply Chain", "Healthcare", "Marketing"]
    },
    {
      title: "Recommendation Systems",
      description: "Personalized recommendation engines for enhanced user experiences",
      icon: Target,
      features: ["Collaborative Filtering", "Content-Based Filtering", "Hybrid Approaches", "Real-time Updates"],
      applications: ["E-commerce", "Streaming Services", "Social Media", "News Platforms"]
    },
    {
      title: "Robotic Process Automation",
      description: "AI-powered automation for repetitive business processes",
      icon: Zap,
      features: ["Process Mining", "Workflow Automation", "Document Processing", "Data Extraction"],
      applications: ["Finance", "HR", "Customer Service", "Operations"]
    },
    {
      title: "Edge AI",
      description: "Deploy AI models at the edge for real-time processing and reduced latency",
      icon: Cpu,
      features: ["Model Optimization", "Edge Deployment", "Real-time Inference", "Offline Capability"],
      applications: ["IoT Devices", "Mobile Apps", "Industrial Systems", "Smart Cities"]
    }
  ];

  const innovationAreas = [
    {
      title: "Quantum Machine Learning",
      description: "Exploring the intersection of quantum computing and machine learning for breakthrough performance",
      icon: Atom,
      status: "Research Phase",
      potential: "Revolutionary",
      timeline: "2025-2027"
    },
    {
      title: "Neural Architecture Search",
      description: "Automated design of neural network architectures using AI",
      icon: Network,
      status: "Development",
      potential: "High Impact",
      timeline: "2025"
    },
    {
      title: "Federated Learning",
      description: "Training AI models across decentralized data sources while preserving privacy",
      icon: Shield,
      status: "Pilot Testing",
      potential: "Game Changing",
      timeline: "2025"
    },
    {
      title: "Explainable AI",
      description: "Making AI decisions transparent and interpretable for business users",
      icon: Lightbulb,
      status: "Production Ready",
      potential: "Essential",
      timeline: "Now"
    }
  ];

  const caseStudies = [
    {
      title: "Financial Services AI Transformation",
      company: "Global Finance Corp",
      challenge: "Manual risk assessment processes taking weeks",
      solution: "Implemented AI-powered risk scoring system",
      results: ["85% faster risk assessment", "40% reduction in false positives", "$2M annual savings"],
      technologies: ["Machine Learning", "NLP", "Predictive Analytics"]
    },
    {
      title: "Healthcare Diagnostic AI",
      company: "Metro Health Systems",
      challenge: "High diagnostic error rates in radiology",
      solution: "Deployed computer vision AI for medical imaging",
      results: ["30% improvement in accuracy", "60% faster diagnosis", "Reduced physician workload"],
      technologies: ["Computer Vision", "Deep Learning", "Medical AI"]
    },
    {
      title: "Manufacturing Quality Control",
      company: "Precision Manufacturing Ltd",
      challenge: "Expensive manual quality inspection processes",
      solution: "Implemented real-time AI quality monitoring",
      results: ["95% defect detection rate", "50% cost reduction", "Zero false positives"],
      technologies: ["Computer Vision", "Edge AI", "IoT Integration"]
    }
  ];

  const resources = [
    {
      title: "AI Implementation Guide",
      type: "White Paper",
      description: "Complete guide to implementing AI solutions in your organization",
      icon: BookOpen,
      downloadCount: "2.5K",
      href: "/resources/ai-implementation-guide"
    },
    {
      title: "AI Ethics Framework",
      type: "Research Report",
      description: "Best practices for responsible AI development and deployment",
      icon: Shield,
      downloadCount: "1.8K",
      href: "/resources/ai-ethics-framework"
    },
    {
      title: "Machine Learning Playbook",
      type: "Technical Guide",
      description: "Step-by-step guide to building ML models for business",
      icon: Code,
      downloadCount: "3.2K",
      href: "/resources/ml-playbook"
    },
    {
      title: "AI ROI Calculator",
      type: "Tool",
      description: "Calculate the potential ROI of AI investments",
      icon: BarChart3,
      downloadCount: "4.1K",
      href: "/tools/ai-roi-calculator"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Innovation Hub - Zion Tech Group"
        description="Explore cutting-edge AI capabilities, research areas, and innovation opportunities. Discover how AI can transform your business."
        keywords={["AI innovation", "machine learning", "artificial intelligence", "AI research", "AI capabilities"]}
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-transparent to-zion-blue/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
                  <Brain className="w-4 h-4 mr-2" />
                  AI INNOVATION HUB
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  The Future of
                  <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"> AI Innovation</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Discover cutting-edge AI capabilities, explore emerging technologies, and learn how artificial intelligence can transform your business operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Start Your AI Journey
                    <Rocket className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">AI Capabilities</h3>
                        <p className="text-gray-400">6 Core Technologies</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-zion-cyan">500+</div>
                        <div className="text-sm text-gray-400">Models Deployed</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-zion-cyan">99.9%</div>
                        <div className="text-sm text-gray-400">Accuracy Rate</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-zion-cyan">24/7</div>
                        <div className="text-sm text-gray-400">AI Support</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-zion-cyan">50+</div>
                        <div className="text-sm text-gray-400">Industries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Core AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI technologies powering the next generation of business solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl mr-4">
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {capability.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {capability.applications.map((app) => (
                          <span key={app} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Areas Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Emerging Innovation Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge research and development pushing the boundaries of AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {innovationAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl">
                        <area.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{area.title}</h3>
                        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                          area.status === 'Production Ready' ? 'bg-green-500/20 text-green-400' :
                          area.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                          area.status === 'Pilot Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {area.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-400">Potential Impact:</span>
                      <span className="ml-2 text-sm font-semibold text-zion-cyan">{area.potential}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Timeline:</span>
                      <span className="ml-2 text-sm font-semibold text-white">{area.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                AI Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world implementations showcasing the transformative power of AI
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-zion-cyan font-semibold mb-4">{study.company}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Challenge:</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Solution:</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Results:</h4>
                          <ul className="space-y-1">
                            {study.results.map((result) => (
                              <li key={result} className="flex items-center text-gray-300">
                                <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-4">Technologies Used:</h4>
                      <div className="space-y-2">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="block px-3 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                AI Resources & Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive resources to help you understand and implement AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg mr-3">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded">{resource.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{resource.downloadCount} downloads</span>
                    <Link
                      to={resource.href}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Harness AI Innovation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with us to explore the full potential of artificial intelligence for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Start AI Consultation
                  <Brain className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  Explore AI Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}