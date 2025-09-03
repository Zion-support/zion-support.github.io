import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Star, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  MessageCircle, 
  DollarSign, 
  Users, 
  Settings, 
  BarChart3, 
  GraduationCap, 
  FileText, 
  Heart, 
  ShoppingCart, 
  BookOpen, 
  Cpu, 
  Lock, 
  Globe, 
  Sparkles,
  ArrowRight,
  Clock,
  Award,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AISolutions() {
  const aiServiceCategories = [
    {
      name: 'AI Business Intelligence',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Advanced analytics and business intelligence powered by AI',
      services: [
        { name: 'AI Business Intelligence Platform', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science', price: '$2,500/month', features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards'] },
        { name: 'AI Data Governance', href: '/services/ai-data-governance', description: 'Data quality and compliance management', price: '$1,800/month', features: ['Data Quality', 'Compliance', 'Audit Trails'] },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', description: 'Customer behavior insights and optimization', price: '$2,200/month', features: ['Behavior Analysis', 'Sentiment Analysis', 'Optimization'] }
      ]
    },
    {
      name: 'AI Sales & Marketing',
      icon: TrendingUp,
      color: 'from-blue-600 to-cyan-600',
      description: 'AI-powered sales automation and marketing optimization',
      services: [
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Intelligent sales automation platform', price: '$1,500/month', features: ['Lead Scoring', 'Pipeline Management', 'Sales Forecasting'] },
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', description: 'Prioritize deals with machine learning', price: '$800/month', features: ['ML Scoring', 'Behavior Analysis', 'ROI Prediction'] },
        { name: 'AI Marketing Automation', href: '/innovative-services-showcase-2025', description: 'Marketing campaign optimization', price: '$2,000/month', features: ['Campaign Optimization', 'A/B Testing', 'Performance Analytics'] }
      ]
    },
    {
      name: 'AI Customer Support',
      icon: MessageCircle,
      color: 'from-green-600 to-emerald-600',
      description: 'Intelligent customer support and service automation',
      services: [
        { name: 'AI Customer Support Platform', href: '/innovative-services-showcase-2025', description: '24/7 intelligent support system', price: '$1,800/month', features: ['24/7 Support', 'Multi-language', 'Ticket Routing'] },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot', description: 'On-site customer assistance', price: '$600/month', features: ['Instant Responses', 'CRM Integration', 'Analytics'] },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Automated email management', price: '$400/month', features: ['Smart Responses', 'CRM Logging', 'Template Library'] }
      ]
    },
    {
      name: 'AI Content & Communication',
      icon: BookOpen,
      color: 'from-orange-600 to-red-600',
      description: 'AI-powered content generation and communication tools',
      services: [
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation platform', price: '$1,200/month', features: ['Content Generation', 'Brand Consistency', 'SEO Optimization'] },
        { name: 'RAG Search Platform', href: '/services/rag-search', description: 'AI answers with citations', price: '$900/month', features: ['Smart Search', 'Citation Tracking', 'Knowledge Base'] },
        { name: 'AI Content Generation Platform', href: '/services/ai-content-generation-platform', description: 'Comprehensive content creation', price: '$1,500/month', features: ['Multi-format', 'Brand Voice', 'Analytics'] }
      ]
    },
    {
      name: 'AI Operations & Management',
      icon: Settings,
      color: 'from-indigo-600 to-purple-600',
      description: 'AI-powered business operations and project management',
      services: [
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform', description: 'Smart project optimization', price: '$2,200/month', features: ['Resource Optimization', 'Risk Assessment', 'Timeline Prediction'] },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Intelligent process automation', price: '$1,600/month', features: ['Process Automation', 'Decision Support', 'Performance Monitoring'] },
        { name: 'AI HR Platform', href: '/innovative-services-showcase-2025', description: 'HR automation and analytics', price: '$1,800/month', features: ['Recruitment', 'Performance Management', 'Analytics'] }
      ]
    },
    {
      name: 'AI Financial & Trading',
      icon: DollarSign,
      color: 'from-yellow-600 to-orange-600',
      description: 'AI-powered financial analysis and trading solutions',
      services: [
        { name: 'AI Financial Analytics', href: '/innovative-services-showcase-2025', description: 'Advanced financial insights platform', price: '$3,000/month', features: ['Risk Analysis', 'Portfolio Optimization', 'Market Prediction'] },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform', description: 'AI-powered trading solutions', price: '$4,000/month', features: ['Algorithmic Trading', 'Risk Management', 'Real-time Analysis'] },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Cloud cost optimization', price: '$1,200/month', features: ['Cost Analysis', 'Optimization', 'Budget Planning'] }
      ]
    },
    {
      name: 'AI Healthcare & Life Sciences',
      icon: Heart,
      color: 'from-red-600 to-pink-600',
      description: 'AI-powered healthcare analytics and diagnostics',
      services: [
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', description: 'Healthcare insights platform', price: '$3,500/month', features: ['Patient Analytics', 'Treatment Optimization', 'Risk Assessment'] },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data insights', price: '$2,800/month', features: ['Data Analysis', 'Predictive Models', 'Compliance'] },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech', description: 'Healthcare innovations', price: '$2,500/month', features: ['Digital Health', 'Telemedicine', 'IoT Integration'] }
      ]
    },
    {
      name: 'AI Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-cyan-600 to-blue-600',
      description: 'AI-powered security and compliance solutions',
      services: [
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation', price: '$2,200/month', features: ['Compliance Monitoring', 'Audit Automation', 'Risk Assessment'] },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection', description: 'Advanced threat detection', price: '$2,800/month', features: ['Threat Detection', 'Real-time Monitoring', 'Incident Response'] },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Comprehensive security solutions', price: '$3,200/month', features: ['Multi-layered Security', 'AI Monitoring', 'Compliance'] }
      ]
    }
  ];

  const featuredSolutions = [
    {
      name: 'AI Sales Automation Suite',
      href: '/innovative-services-showcase-2025',
      icon: TrendingUp,
      description: 'Complete sales automation platform with AI-powered insights',
      color: 'from-blue-600 to-cyan-600',
      features: ['Lead Scoring', 'Pipeline Management', 'Sales Forecasting', 'Performance Analytics']
    },
    {
      name: 'AI Healthcare Analytics Platform',
      href: '/services/ai-healthcare-analytics-platform',
      icon: Heart,
      description: 'Advanced healthcare insights and patient care optimization',
      color: 'from-red-600 to-pink-600',
      features: ['Patient Analytics', 'Treatment Optimization', 'Risk Assessment', 'Compliance Management']
    },
    {
      name: 'AI Project Management Platform',
      href: '/services/ai-project-management-platform',
      icon: Target,
      description: 'Intelligent project optimization and resource management',
      color: 'from-purple-600 to-pink-600',
      features: ['Resource Optimization', 'Risk Assessment', 'Timeline Prediction', 'Performance Tracking']
    },
    {
      name: 'AI Financial Trading Platform',
      href: '/services/ai-financial-trading-platform',
      icon: DollarSign,
      description: 'AI-powered trading with advanced risk management',
      color: 'from-green-600 to-emerald-600',
      features: ['Algorithmic Trading', 'Risk Management', 'Real-time Analysis', 'Portfolio Optimization']
    }
  ];

  const stats = [
    { value: '25+', label: 'AI Services', icon: Brain },
    { value: '99.9%', label: 'Accuracy Rate', icon: CheckCircle },
    { value: '24/7', label: 'AI Monitoring', icon: Eye },
    { value: '500+', label: 'AI Models', icon: Cpu }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations with AI-powered solutions'
    },
    {
      icon: Brain,
      title: 'Intelligent Insights',
      description: 'Get actionable insights from your data using advanced machine learning algorithms'
    },
    {
      icon: TrendingUp,
      title: 'Better Performance',
      description: 'Optimize processes and improve outcomes with predictive analytics and automation'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with AI-powered threat detection and compliance monitoring'
    }
  ];

  return (
    <>
      <SEO 
        title="AI Solutions - Zion Tech Group"
        description="Comprehensive AI solutions including business intelligence, sales automation, customer support, and more. Transform your business with cutting-edge artificial intelligence."
        canonical="/ai-solutions"
        url="https://ziontechgroup.com/ai-solutions"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From business intelligence to automation, 
              our AI-powered services drive innovation and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get AI Consultation
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Solutions?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions deliver tangible benefits that transform your business operations and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured AI Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and innovative AI solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={solution.href} className="block">
                  <div className="bg-slate-900 rounded-xl p-8 h-full hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Service Categories */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Complete AI Service Portfolio</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI services organized by category and business function
            </p>
          </motion.div>

          <div className="space-y-12">
            {aiServiceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-slate-800 rounded-xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                    >
                      <Link to={service.href} className="block">
                        <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-all duration-300 group h-full">
                          <h4 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-slate-300 mb-4">
                            {service.description}
                          </p>
                          <div className="text-lg font-bold text-purple-400 mb-4">
                            {service.price}
                          </div>
                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
                                <span className="text-xs text-slate-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let our AI experts help you implement intelligent solutions that transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Start AI Journey
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
