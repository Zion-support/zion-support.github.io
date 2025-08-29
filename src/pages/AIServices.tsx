import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Database, 
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Monitor,
  Smartphone,
  Globe,
  Lightbulb,
  Code,
  Palette,
  Search,
  MessageSquare,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Fingerprint,
  Key,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  WifiOff,
  BluetoothOff,
  SatelliteOff,
  RadioOff,
  SignalOff,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Bot
} from 'lucide-react';

const aiServices = [
  {
    category: 'AI-Powered Analytics',
    services: [
      {
        name: 'Predictive Analytics',
        description: 'Forecast future trends and behaviors using advanced machine learning algorithms',
        features: ['Pattern recognition', 'Risk assessment', 'Trend forecasting', 'Real-time insights'],
        icon: TrendingUp,
        color: 'from-blue-400 to-cyan-500'
      },
      {
        name: 'Business Intelligence',
        description: 'Transform raw data into actionable insights for strategic decision-making',
        features: ['Data visualization', 'KPI tracking', 'Custom dashboards', 'Automated reporting'],
        icon: BarChart3,
        color: 'from-purple-400 to-pink-500'
      },
      {
        name: 'Customer Behavior Analysis',
        description: 'Understand customer preferences and predict future purchasing patterns',
        features: ['Segmentation analysis', 'Churn prediction', 'Recommendation engine', 'Lifetime value'],
        icon: Users,
        color: 'from-green-400 to-emerald-500'
      }
    ]
  },
  {
    category: 'AI Automation',
    services: [
      {
        name: 'Process Automation',
        description: 'Streamline business operations with intelligent workflow automation',
        features: ['Workflow optimization', 'Task scheduling', 'Error reduction', 'Efficiency gains'],
        icon: Workflow,
        color: 'from-orange-400 to-red-500'
      },
      {
        name: 'Document Processing',
        description: 'Automate document analysis, classification, and data extraction',
        features: ['OCR technology', 'Smart categorization', 'Data extraction', 'Form processing'],
        icon: FileText,
        color: 'from-indigo-400 to-purple-500'
      },
      {
        name: 'Email Automation',
        description: 'Intelligent email responses and automated customer communication',
        features: ['Smart replies', 'Sentiment analysis', 'Priority sorting', 'Auto-categorization'],
        icon: MessageSquare,
        color: 'from-teal-400 to-cyan-500'
      }
    ]
  },
  {
    category: 'AI Security',
    services: [
      {
        name: 'Threat Detection',
        description: 'Advanced AI-powered security monitoring and threat prevention',
        features: ['Real-time monitoring', 'Behavioral analysis', 'Anomaly detection', 'Automated response'],
        icon: Shield,
        color: 'from-red-400 to-pink-500'
      },
      {
        name: 'Fraud Prevention',
        description: 'Machine learning algorithms to detect and prevent fraudulent activities',
        features: ['Pattern recognition', 'Risk scoring', 'Real-time alerts', 'Adaptive learning'],
        icon: Lock,
        color: 'from-yellow-400 to-orange-500'
      },
      {
        name: 'Access Control',
        description: 'Intelligent authentication and authorization systems',
        features: ['Biometric verification', 'Behavioral analysis', 'Multi-factor auth', 'Risk-based access'],
        icon: Key,
        color: 'from-blue-400 to-indigo-500'
      }
    ]
  },
  {
    category: 'AI Development',
    services: [
      {
        name: 'Custom AI Models',
        description: 'Tailored machine learning models for specific business needs',
        features: ['Model training', 'Data preprocessing', 'Performance optimization', 'Continuous learning'],
        icon: Brain,
        color: 'from-violet-400 to-purple-500'
      },
      {
        name: 'AI Integration',
        description: 'Seamless integration of AI capabilities into existing systems',
        features: ['API development', 'System integration', 'Performance monitoring', 'Scalability planning'],
        icon: GitBranch,
        color: 'from-emerald-400 to-teal-500'
      },
      {
        name: 'AI Consulting',
        description: 'Strategic guidance for AI implementation and digital transformation',
        features: ['Strategy planning', 'Technology selection', 'Implementation roadmap', 'ROI optimization'],
        icon: Lightbulb,
        color: 'from-amber-400 to-yellow-500'
      }
    ]
  }
];

const aiTechnologies = [
  {
    name: 'Machine Learning',
    description: 'Advanced algorithms that learn from data to make predictions and decisions',
    icon: Brain,
    color: 'from-purple-400 to-pink-500'
  },
  {
    name: 'Deep Learning',
    description: 'Neural networks that process complex patterns and relationships',
    icon: Network,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    name: 'Natural Language Processing',
    description: 'AI that understands, interprets, and generates human language',
    icon: MessageSquare,
    color: 'from-green-400 to-emerald-500'
  },
  {
    name: 'Computer Vision',
    description: 'AI systems that analyze and interpret visual information',
    icon: Eye,
    color: 'from-orange-400 to-red-500'
  },
  {
    name: 'Predictive Analytics',
    description: 'Forecasting future outcomes based on historical data patterns',
    icon: TrendingUp,
    color: 'from-indigo-400 to-purple-500'
  },
  {
    name: 'Robotic Process Automation',
    description: 'Automating repetitive tasks with AI-powered bots',
    icon: Robot,
    color: 'from-teal-400 to-cyan-500'
  }
];

const successMetrics = [
  {
    metric: '95%',
    label: 'Accuracy Rate',
    description: 'Our AI models achieve exceptional accuracy in predictions and classifications'
  },
  {
    metric: '60%',
    label: 'Cost Reduction',
    description: 'Average cost savings through AI automation and optimization'
  },
  {
    metric: '3x',
    label: 'Efficiency Gain',
    description: 'Significant improvement in operational efficiency and productivity'
  },
  {
    metric: '24/7',
    label: 'Availability',
    description: 'AI systems provide round-the-clock monitoring and support'
  }
];

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    color: 'from-red-400 to-pink-500',
    applications: ['Diagnostic assistance', 'Patient monitoring', 'Drug discovery', 'Treatment optimization']
  },
  {
    name: 'Finance',
    icon: DollarSign,
    color: 'from-green-400 to-emerald-500',
    applications: ['Risk assessment', 'Fraud detection', 'Algorithmic trading', 'Customer service']
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    color: 'from-blue-400 to-cyan-500',
    applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation']
  },
  {
    name: 'Retail',
    icon: ShoppingCart,
    color: 'from-purple-400 to-pink-500',
    applications: ['Customer segmentation', 'Inventory management', 'Price optimization', 'Personalized marketing']
  },
  {
    name: 'Transportation',
    icon: Truck,
    color: 'from-orange-400 to-red-500',
    applications: ['Route optimization', 'Fleet management', 'Predictive maintenance', 'Traffic analysis']
  },
  {
    name: 'Energy',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    applications: ['Grid optimization', 'Predictive maintenance', 'Energy forecasting', 'Demand response']
  }
];

export default function AIServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Transform your business with cutting-edge AI services including machine learning, automation, analytics, and custom AI solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to automation, we deliver intelligent solutions that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-400/25"
              >
                Get AI Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-colors duration-300"
              >
                Talk to Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven AI Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions deliver measurable business impact across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <p className="text-slate-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From analytics to automation, we offer a complete suite of AI-powered services
            </p>
          </motion.div>

          {aiServices.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              >
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + categoryIndex * 0.2 + serviceIndex * 0.1 }}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Technologies */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage the latest advancements in artificial intelligence to deliver superior results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{tech.name}</h4>
                <p className="text-slate-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Across Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions are transforming businesses across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{industry.name}</h4>
                </div>
                
                <div className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let our AI experts help you implement intelligent solutions that drive growth, efficiency, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-400/25"
              >
                Get AI Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

