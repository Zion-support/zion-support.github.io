import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  TrendingUp, 
  Bot, 
  Settings, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  Target,
  Phone,
  Mail as MailIcon,
  MapPin,
  Code,
  Database,
  BarChart3,
  Cpu,
  Network,
  Lock
} from 'lucide-react';
import Layout from '../components/Layout';

const aiServices = [
  {
    title: "Custom AI Model Development",
    description: "Tailored machine learning models designed specifically for your business needs. From data preprocessing to deployment, we handle the entire AI development lifecycle.",
    icon: Brain,
    price: "Starting at $5,000",
    features: [
      "Custom model architecture design",
      "Data preprocessing & feature engineering",
      "Model training & optimization",
      "Performance monitoring & maintenance",
      "API integration & deployment",
      "Ongoing support & updates"
    ],
    benefits: [
      "Increase operational efficiency by 60%",
      "Reduce manual processing time by 80%",
      "Improve accuracy and decision-making",
      "Scale AI capabilities as you grow"
    ],
    href: "/contact?service=custom-ai-models"
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Transform text data into actionable insights with advanced NLP solutions including sentiment analysis, text classification, and language understanding.",
    icon: MessageSquare,
    price: "Starting at $2,500",
    features: [
      "Sentiment analysis & emotion detection",
      "Text classification & categorization",
      "Language translation & localization",
      "Named entity recognition",
      "Chatbot & virtual assistant development",
      "Document analysis & summarization"
    ],
    benefits: [
      "Automate customer feedback analysis",
      "Improve content moderation efficiency",
      "Enhance customer service quality",
      "Extract insights from unstructured data"
    ],
    href: "/contact?service=nlp-solutions"
  },
  {
    title: "Computer Vision Solutions",
    description: "Implement advanced image recognition, object detection, and visual analysis systems to automate visual tasks and improve quality control.",
    icon: Eye,
    price: "Starting at $3,500",
    features: [
      "Object detection & recognition",
      "Image classification & tagging",
      "Facial recognition & biometrics",
      "Quality inspection & defect detection",
      "Medical image analysis",
      "Real-time video processing"
    ],
    benefits: [
      "Automate quality control processes",
      "Improve security and access control",
      "Reduce inspection time by 90%",
      "Enable predictive maintenance"
    ],
    href: "/contact?service=computer-vision"
  },
  {
    title: "Predictive Analytics & Forecasting",
    description: "Leverage machine learning to predict future trends, customer behavior, and business outcomes with high accuracy forecasting models.",
    icon: TrendingUp,
    price: "Starting at $4,000",
    features: [
      "Demand forecasting & inventory optimization",
      "Customer behavior prediction",
      "Risk assessment & fraud detection",
      "Market trend analysis",
      "Sales forecasting & revenue prediction",
      "Churn prediction & retention modeling"
    ],
    benefits: [
      "Reduce inventory costs by 25%",
      "Increase sales conversion by 40%",
      "Minimize risk and fraud losses",
      "Optimize resource allocation"
    ],
    href: "/contact?service=predictive-analytics"
  },
  {
    title: "AI Chatbot & Virtual Assistant",
    description: "Create intelligent conversational agents that can handle customer inquiries, provide support, and automate routine tasks 24/7.",
    icon: Bot,
    price: "Starting at $1,500",
    features: [
      "Multi-language support & localization",
      "Natural language understanding",
      "Integration with existing systems",
      "Analytics & performance tracking",
      "Custom training & knowledge base",
      "Voice & text interaction support"
    ],
    benefits: [
      "Reduce customer service costs by 50%",
      "Provide 24/7 customer support",
      "Handle 80% of inquiries automatically",
      "Improve customer satisfaction scores"
    ],
    href: "/contact?service=ai-chatbot"
  },
  {
    title: "AI Process Automation (RPA + AI)",
    description: "Combine robotic process automation with AI to create intelligent automation solutions that can handle complex, decision-based tasks.",
    icon: Settings,
    price: "Starting at $3,000",
    features: [
      "Intelligent document processing",
      "Automated decision-making workflows",
      "Data extraction & validation",
      "Exception handling & escalation",
      "Process optimization & monitoring",
      "Integration with enterprise systems"
    ],
    benefits: [
      "Automate 70% of repetitive tasks",
      "Reduce processing errors by 95%",
      "Save 30+ hours per week",
      "Improve compliance and audit trails"
    ],
    href: "/contact?service=ai-automation"
  },
  {
    title: "AI-Powered Business Intelligence",
    description: "Transform your data into actionable insights with AI-driven analytics, automated reporting, and intelligent dashboards.",
    icon: BarChart3,
    price: "Starting at $2,000",
    features: [
      "Automated data analysis & insights",
      "Predictive business intelligence",
      "Anomaly detection & alerting",
      "Custom dashboard development",
      "Real-time data visualization",
      "Natural language query interface"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify opportunities and risks early",
      "Reduce manual reporting time by 75%",
      "Improve business performance metrics"
    ],
    href: "/contact?service=ai-business-intelligence"
  },
  {
    title: "AI Security & Fraud Detection",
    description: "Protect your business with advanced AI-powered security solutions that can detect threats, prevent fraud, and ensure compliance.",
    icon: Shield,
    price: "Starting at $2,800",
    features: [
      "Real-time fraud detection",
      "Anomaly detection & threat analysis",
      "Behavioral biometrics",
      "Network security monitoring",
      "Compliance & audit automation",
      "Incident response & forensics"
    ],
    benefits: [
      "Reduce fraud losses by 85%",
      "Detect threats in real-time",
      "Ensure regulatory compliance",
      "Minimize false positives"
    ],
    href: "/contact?service=ai-security"
  }
];

const aiTechnologies = [
  {
    name: "Machine Learning",
    description: "Supervised, unsupervised, and reinforcement learning algorithms",
    icon: Brain
  },
  {
    name: "Deep Learning",
    description: "Neural networks, CNNs, RNNs, and transformer models",
    icon: Network
  },
  {
    name: "Natural Language Processing",
    description: "Text analysis, sentiment analysis, and language understanding",
    icon: MessageSquare
  },
  {
    name: "Computer Vision",
    description: "Image recognition, object detection, and visual analysis",
    icon: Eye
  },
  {
    name: "Predictive Analytics",
    description: "Forecasting, trend analysis, and predictive modeling",
    icon: TrendingUp
  },
  {
    name: "Robotic Process Automation",
    description: "Intelligent automation and workflow optimization",
    icon: Settings
  }
];

const pricingTiers = [
  {
    name: "Consultation",
    price: "$200",
    period: "per hour",
    description: "AI strategy consultation and planning",
    features: [
      "AI readiness assessment",
      "Strategy development",
      "Technology recommendations",
      "Implementation roadmap",
      "ROI analysis"
    ],
    popular: false
  },
  {
    name: "Development",
    price: "$5,000",
    period: "per project",
    description: "Custom AI solution development",
    features: [
      "Custom model development",
      "Data preprocessing",
      "Model training & testing",
      "API development",
      "Documentation & training",
      "3 months support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Comprehensive AI transformation",
    features: [
      "Full AI strategy implementation",
      "Multiple AI solutions",
      "Dedicated AI team",
      "Ongoing maintenance",
      "24/7 support",
      "Custom integrations"
    ],
    popular: false
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};

export default function AIServices() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group" 
      description="Comprehensive AI services and solutions for businesses of all sizes. Custom AI development, machine learning, and intelligent automation."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From custom AI models to intelligent automation, we help you harness the power of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  Explore AI Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Technologies Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI Technologies We Master
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest AI technologies to deliver cutting-edge solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-all duration-300 border border-slate-700"
                >
                  <tech.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve real business challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-green-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={service.href}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI Service Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your AI transformation needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800/50 rounded-lg p-8 ${
                    tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                  } border border-slate-700`}
                >
                  {tier.popular && (
                    <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-2">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg'
                        : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you identify opportunities and implement solutions that drive real business value.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-3" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-purple-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-purple-400 mr-3" />
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400 mr-3" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  Visit Our Website
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}