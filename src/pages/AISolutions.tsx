import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Rocket, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Star,
  ArrowRight,
  CheckCircle,
  BarChart3,
  MessageCircle,
  BookOpen,
  ShoppingCart,
  DollarSign,
  Gauge,
  HelpCircle,
  Search,
  PenTool,
  Workflow,
  Atom,
  Truck,
  Building,
  Database,
  Network,
  Award,
  Lightbulb,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  MessageSquare,
  ShoppingBag,
  FileText,
  Settings,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Eye
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function AISolutions() {
  const aiSolutions = [
    {
      category: 'AI Business Intelligence',
      solutions: [
        {
          name: 'AI Business Intelligence',
          href: '/services/ai-business-intelligence',
          icon: Brain,
          description: 'Advanced AI-powered analytics and business intelligence',
          features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards']
        },
        {
          name: 'AI Data Analytics',
          href: '/services/ai-data-analytics',
          icon: BarChart3,
          description: 'Intelligent data processing and visualization',
          features: ['Data mining', 'Pattern recognition', 'Automated reporting']
        },
        {
          name: 'AI Financial Analytics',
          href: '/services/ai-financial-analytics',
          icon: DollarSign,
          description: 'AI-driven financial insights and forecasting',
          features: ['Risk assessment', 'Portfolio optimization', 'Fraud detection']
        }
      ]
    },
    {
      category: 'AI Workflow Automation',
      solutions: [
        {
          name: 'AI Workflow Automation',
          href: '/services/ai-workflow-automation',
          icon: Workflow,
          description: 'Intelligent process automation and optimization',
          features: ['Process mining', 'Automated workflows', 'Performance optimization']
        },
        {
          name: 'AI Project Manager',
          href: '/services/ai-project-manager',
          icon: Target,
          description: 'AI-powered project management and planning',
          features: ['Resource optimization', 'Risk prediction', 'Timeline automation']
        },
        {
          name: 'AI Content Generator',
          href: '/services/ai-content-generator',
          icon: PenTool,
          description: 'Automated content creation and optimization',
          features: ['SEO optimization', 'Multi-format output', 'Brand consistency']
        }
      ]
    },
    {
      category: 'AI Cybersecurity',
      solutions: [
        {
          name: 'AI Cybersecurity Platform',
          href: '/services/ai-cybersecurity',
          icon: Shield,
          description: 'Intelligent threat detection and response',
          features: ['Real-time monitoring', 'Behavioral analysis', 'Automated response']
        },
        {
          name: 'AI Compliance Assistant',
          href: '/services/ai-compliance-assistant',
          icon: Lock,
          description: 'Automated regulatory compliance management',
          features: ['GDPR compliance', 'Audit automation', 'Risk assessment']
        }
      ]
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '500+', icon: Brain },
    { label: 'Data Points Processed', value: '10M+', icon: Database },
    { label: 'Accuracy Rate', value: '99.7%', icon: Target },
    { label: 'Cost Reduction', value: '40%', icon: DollarSign }
  ];

  const capabilities = [
    {
      title: 'Machine Learning & Deep Learning',
      description: 'Advanced neural networks and predictive modeling',
      icon: Brain,
      features: ['Neural Networks', 'Deep Learning', 'Predictive Analytics']
    },
    {
      title: 'Natural Language Processing',
      description: 'Understanding and processing human language',
      icon: MessageCircle,
      features: ['Text Analysis', 'Language Generation', 'Sentiment Analysis']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video recognition capabilities',
      icon: Eye,
      features: ['Object Detection', 'Facial Recognition', 'Image Classification']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecasting future trends and behaviors',
      icon: TrendingUp,
      features: ['Trend Analysis', 'Risk Assessment', 'Performance Prediction']
    }
  ];

  return (
    <>
      <SEO 
        title="AI Solutions | Zion Tech Group"
        description="Comprehensive AI solutions including business intelligence, workflow automation, cybersecurity, and predictive analytics. Transform your business with cutting-edge AI technology."
        keywords="AI solutions, artificial intelligence, machine learning, business intelligence, workflow automation, cybersecurity, predictive analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Solutions That
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Transform</span>
                <br />
                Your Business
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
                and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions provide comprehensive capabilities to address your most 
                complex business challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                >
                  <capability.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Solutions by Category */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our categorized AI solutions designed to address specific business needs 
                and industry challenges.
              </p>
            </motion.div>

            <div className="space-y-12">
              {aiSolutions.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.solutions.map((solution, solutionIndex) => (
                      <motion.div
                        key={solution.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: solutionIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <solution.icon className="w-8 h-8 text-blue-400" />
                          <h4 className="text-lg font-semibold text-white">{solution.name}</h4>
                        </div>
                        <p className="text-gray-300 mb-4">{solution.description}</p>
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={solution.href}
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:gap-3"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can drive innovation, efficiency, 
                and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/request-quote"
                  className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
