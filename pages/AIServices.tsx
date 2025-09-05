import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  Users,
  Globe,
  Database,
  Cpu,
  Target,
  TrendingUp,
  Smartphone,
  FileText,
  Image,
  Mic,
  Code,
  Layers
} from 'lucide-react';

const aiServices = [
  {
    category: "Natural Language Processing",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "AI Chatbots & Virtual Assistants",
        description: "Intelligent conversational AI that understands context and provides human-like responses",
        features: ["24/7 customer support", "Multi-language support", "Integration with CRM", "Sentiment analysis"],
        pricing: "Starting at $2,500/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Document Processing & Analysis",
        description: "Automated document understanding, extraction, and intelligent analysis",
        features: ["PDF/Word processing", "Data extraction", "Content summarization", "Classification"],
        pricing: "Starting at $1,800/month",
        delivery: "3-6 weeks"
      },
      {
        name: "Content Generation & Copywriting",
        description: "AI-powered content creation for marketing, blogs, and business communications",
        features: ["Blog posts", "Marketing copy", "Email campaigns", "Social media content"],
        pricing: "Starting at $1,200/month",
        delivery: "2-4 weeks"
      },
      {
        name: "AI Code Generation & Review",
        description: "Automated code generation, review, and optimization using advanced AI models",
        features: ["Code generation", "Bug detection", "Performance optimization", "Security analysis"],
        pricing: "Starting at $3,000/month",
        delivery: "4-8 weeks"
      },
      {
        name: "AI-Powered Search & Discovery",
        description: "Intelligent search engines that understand context and provide relevant results",
        features: ["Semantic search", "Context understanding", "Personalized results", "Multi-modal search"],
        pricing: "Starting at $2,800/month",
        delivery: "6-10 weeks"
      }
    ]
  },
  {
    category: "Computer Vision",
    icon: Eye,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Image Recognition & Classification",
        description: "Advanced image analysis for object detection, classification, and visual search",
        features: ["Object detection", "Image classification", "Visual search", "Quality assessment"],
        pricing: "Starting at $3,500/month",
        delivery: "6-10 weeks"
      },
      {
        name: "OCR & Document Scanning",
        description: "Optical Character Recognition for digitizing printed documents and forms",
        features: ["Text extraction", "Form processing", "Handwriting recognition", "Multi-language OCR"],
        pricing: "Starting at $2,200/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Facial Recognition & Biometrics",
        description: "Secure identity verification and access control systems",
        features: ["Face detection", "Identity verification", "Access control", "Privacy compliance"],
        pricing: "Starting at $4,500/month",
        delivery: "8-12 weeks"
      }
    ]
  },
  {
    category: "Machine Learning & Analytics",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Predictive Analytics",
        description: "Data-driven insights and forecasting for business decision making",
        features: ["Sales forecasting", "Customer behavior prediction", "Risk assessment", "Trend analysis"],
        pricing: "Starting at $3,000/month",
        delivery: "6-12 weeks"
      },
      {
        name: "Recommendation Engines",
        description: "Personalized content and product recommendations for enhanced user experience",
        features: ["Product recommendations", "Content personalization", "Cross-selling", "A/B testing"],
        pricing: "Starting at $2,800/month",
        delivery: "5-10 weeks"
      },
      {
        name: "Fraud Detection & Security",
        description: "AI-powered fraud prevention and security monitoring systems",
        features: ["Real-time monitoring", "Anomaly detection", "Risk scoring", "Alert systems"],
        pricing: "Starting at $4,000/month",
        delivery: "8-14 weeks"
      }
    ]
  },
  {
    category: "Voice & Audio AI",
    icon: Mic,
    color: "from-orange-500 to-red-500",
    services: [
      {
        name: "Speech Recognition & Transcription",
        description: "Convert speech to text with high accuracy across multiple languages",
        features: ["Real-time transcription", "Multi-language support", "Speaker identification", "Noise reduction"],
        pricing: "Starting at $1,500/month",
        delivery: "3-6 weeks"
      },
      {
        name: "Voice Synthesis & Text-to-Speech",
        description: "Natural-sounding voice generation for applications and services",
        features: ["Natural voices", "Multiple languages", "Emotion control", "Custom voice training"],
        pricing: "Starting at $2,000/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Voice Assistants & IVR Systems",
        description: "Interactive voice response systems with AI-powered conversation handling",
        features: ["Call routing", "Voice commands", "Natural conversations", "Integration APIs"],
        pricing: "Starting at $3,200/month",
        delivery: "6-10 weeks"
      }
    ]
  },
  {
    category: "Emerging AI Technologies",
    icon: Cpu,
    color: "from-green-500 to-teal-500",
    services: [
      {
        name: "Quantum Machine Learning",
        description: "Leverage quantum computing for advanced machine learning algorithms",
        features: ["Quantum algorithms", "Faster processing", "Complex optimization", "Quantum advantage"],
        pricing: "Starting at $15,000/month",
        delivery: "12-20 weeks"
      },
      {
        name: "AI-Powered Blockchain Solutions",
        description: "Integrate AI with blockchain for smart contracts and decentralized applications",
        features: ["Smart contracts", "DeFi integration", "NFT generation", "Decentralized AI"],
        pricing: "Starting at $8,500/month",
        delivery: "10-16 weeks"
      },
      {
        name: "Edge AI & IoT Integration",
        description: "Deploy AI models on edge devices for real-time processing",
        features: ["Edge deployment", "Real-time processing", "IoT integration", "Low latency"],
        pricing: "Starting at $5,500/month",
        delivery: "8-12 weeks"
      },
      {
        name: "AI Ethics & Bias Detection",
        description: "Ensure AI systems are fair, transparent, and ethically compliant",
        features: ["Bias detection", "Fairness metrics", "Explainable AI", "Ethics compliance"],
        pricing: "Starting at $4,200/month",
        delivery: "6-10 weeks"
      }
    ]
  }
];

const microSaaS = [
  {
    name: "AI Email Assistant",
    description: "Smart email management with automated responses and scheduling",
    features: ["Auto-reply generation", "Email prioritization", "Meeting scheduling", "Sentiment analysis"],
    pricing: "$99/month per user",
    icon: MessageSquare
  },
  {
    name: "AI Social Media Manager",
    description: "Automated social media content creation and posting",
    features: ["Content generation", "Post scheduling", "Engagement analysis", "Hashtag optimization"],
    pricing: "$149/month per account",
    icon: Globe
  },
  {
    name: "AI Meeting Transcriber",
    description: "Real-time meeting transcription with action item extraction",
    features: ["Live transcription", "Action items", "Meeting summaries", "Speaker identification"],
    pricing: "$79/month per user",
    icon: Mic
  },
  {
    name: "AI Code Reviewer",
    description: "Automated code review and bug detection for development teams",
    features: ["Code analysis", "Bug detection", "Security scanning", "Performance optimization"],
    pricing: "$199/month per team",
    icon: Code
  },
  {
    name: "AI Customer Support Bot",
    description: "Intelligent customer support with ticket routing and resolution",
    features: ["Ticket classification", "Auto-responses", "Escalation management", "Knowledge base"],
    pricing: "$299/month per 1000 tickets",
    icon: Bot
  },
  {
    name: "AI Data Analyzer",
    description: "Automated data analysis and visualization for business insights",
    features: ["Data processing", "Chart generation", "Insight extraction", "Report automation"],
    pricing: "$179/month per dataset",
    icon: BarChart3
  },
  {
    name: "AI Legal Document Analyzer",
    description: "Automated legal document review and contract analysis",
    features: ["Contract analysis", "Risk assessment", "Clause extraction", "Compliance checking"],
    pricing: "$399/month per 100 documents",
    icon: FileText
  },
  {
    name: "AI Video Content Creator",
    description: "Automated video creation and editing using AI",
    features: ["Video generation", "Auto-editing", "Voice synthesis", "Subtitle generation"],
    pricing: "$249/month per 10 videos",
    icon: Image
  },
  {
    name: "AI Financial Advisor",
    description: "Personalized financial advice and investment recommendations",
    features: ["Portfolio analysis", "Risk assessment", "Investment suggestions", "Market insights"],
    pricing: "$199/month per user",
    icon: TrendingUp
  },
  {
    name: "AI HR Assistant",
    description: "Automated HR processes including recruitment and employee management",
    features: ["Resume screening", "Interview scheduling", "Performance tracking", "Employee insights"],
    pricing: "$299/month per 50 employees",
    icon: Users
  },
  {
    name: "AI Supply Chain Optimizer",
    description: "Optimize supply chain operations with AI-powered predictions",
    features: ["Demand forecasting", "Inventory optimization", "Route planning", "Risk management"],
    pricing: "$599/month per location",
    icon: Target
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your business needs and current AI readiness to design the perfect solution."
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Our AI experts develop a comprehensive implementation strategy tailored to your goals."
  },
  {
    step: "03",
    title: "Development & Training",
    description: "We build and train your AI models using cutting-edge algorithms and your data."
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing ensures your AI solution performs optimally in real-world scenarios."
  },
  {
    step: "05",
    title: "Deployment & Support",
    description: "We launch your AI solution and provide ongoing monitoring, maintenance, and support."
  }
];

const stats = [
  { number: "500+", label: "AI Projects Delivered" },
  { number: "99.2%", label: "Accuracy Rate" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];

export default function AIServices() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group" 
      description="Comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions. Transform your business with cutting-edge artificial intelligence."
      keywords="AI services, machine learning, natural language processing, computer vision, AI chatbots, predictive analytics, AI consulting"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence. From chatbots and computer vision 
              to predictive analytics and custom AI solutions - we deliver intelligent automation that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Service Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive AI solutions across multiple domains to address every aspect of your business needs.
            </p>
          </motion.div>

          {aiServices.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-gray-500">
                          Delivery: {service.delivery}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Micro SaaS Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI-Powered Micro SaaS Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Ready-to-deploy AI solutions that can be implemented quickly and scaled as your business grows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaS.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-green-600">
                    {solution.pricing}
                  </div>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A proven methodology that ensures successful AI implementation and maximum value for your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss your AI needs and create a custom solution that drives real business value. 
              Get a free consultation and discover the potential of AI for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Call: +1 302 464 0950
              </Link>
            </div>
            <div className="mt-8 text-gray-600">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}