import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Cloud,
  Rocket,
  Users,
  TrendingUp,
  BarChart3,
  Cpu,
  Database,
  Lock,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function AISolutions() {
  const aiSolutions = [
    {
      category: 'AI Business Intelligence',
      solutions: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with our advanced AI-powered business intelligence platform.',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Natural Language Queries', 'Automated Reporting'],
          icon: BarChart3,
          href: '/services/ai-business-intelligence',
          color: 'from-purple-600 to-pink-600'
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Automate complex business processes with intelligent workflow orchestration powered by AI.',
          features: ['Process Automation', 'Intelligent Routing', 'Performance Optimization', 'Real-time Monitoring'],
          icon: Zap,
          href: '/services/ai-workflow-orchestrator',
          color: 'from-blue-600 to-cyan-600'
        },
        {
          name: 'AI Data Governance',
          description: 'Ensure data quality, security, and compliance with our AI-powered data governance platform.',
          features: ['Data Quality Management', 'Privacy Protection', 'Compliance Monitoring', 'Risk Assessment'],
          icon: Shield,
          href: '/services/ai-data-governance',
          color: 'from-green-600 to-emerald-600'
        }
      ]
    },
    {
      category: 'AI Customer Experience',
      solutions: [
        {
          name: 'AI Customer Success Platform',
          description: 'Drive customer engagement and retention with proactive AI-powered customer success tools.',
          features: ['Predictive Churn Analysis', 'Personalized Engagement', 'Success Metrics Tracking', 'Automated Outreach'],
          icon: Users,
          href: '/services/ai-customer-success-platform',
          color: 'from-orange-600 to-red-600'
        },
        {
          name: 'AI Sales Copilot',
          description: 'Enhance sales performance with AI-powered insights, automation, and predictive analytics.',
          features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Optimization', 'Performance Analytics'],
          icon: TrendingUp,
          href: '/services/ai-sales-copilot',
          color: 'from-indigo-600 to-purple-600'
        },
        {
          name: 'AI Content Generator',
          description: 'Create high-quality, engaging content at scale with our AI-powered content generation platform.',
          features: ['Multi-format Content', 'Brand Voice Consistency', 'SEO Optimization', 'Performance Analytics'],
          icon: Lightbulb,
          href: '/services/ai-content-generator',
          color: 'from-yellow-600 to-orange-600'
        }
      ]
    },
    {
      category: 'AI Compliance & Security',
      solutions: [
        {
          name: 'AI Compliance Assistant',
          description: 'Streamline regulatory compliance with AI-powered automation and monitoring tools.',
          features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Compliance Tracking'],
          icon: Shield,
          href: '/services/ai-compliance-assistant',
          color: 'from-red-600 to-pink-600'
        },
        {
          name: 'AI Cybersecurity Suite',
          description: 'Protect your organization with next-generation AI-powered cybersecurity solutions.',
          features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
          icon: Lock,
          href: '/services/ai-cybersecurity-suite',
          color: 'from-gray-600 to-slate-600'
        },
        {
          name: 'Zero Trust Network Architecture',
          description: 'Implement comprehensive zero-trust security with AI-powered monitoring and enforcement.',
          features: ['Identity Verification', 'Continuous Monitoring', 'Access Control', 'Threat Prevention'],
          icon: Shield,
          href: '/services/zero-trust-network-architecture',
          color: 'from-blue-600 to-indigo-600'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows to boost productivity by up to 300%.'
    },
    {
      icon: Brain,
      title: 'Intelligent Insights',
      description: 'Gain deep insights from your data with advanced AI algorithms and predictive analytics.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your organization with AI-powered threat detection and security automation.'
    },
    {
      icon: Users,
      title: 'Better Customer Experience',
      description: 'Deliver personalized, proactive customer experiences that drive engagement and retention.'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce operational costs through intelligent automation and resource optimization.'
    },
    {
      icon: Rocket,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI solutions and innovation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-50 via-white to-zion-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-slate-900 via-zion-slate-800 to-zion-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-200 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI solutions that drive innovation, 
              efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services-overview"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
              From business intelligence to cybersecurity, our AI solutions cover every aspect 
              of modern business operations.
            </p>
          </motion.div>

          <div className="space-y-16">
            {aiSolutions.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-gradient-to-r from-zion-slate-50 to-zion-slate-100 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-zion-slate-900 mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <motion.div
                      key={solution.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: solutionIndex * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} text-white mb-4`}>
                        <solution.icon className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-semibold text-zion-slate-900 mb-3">
                        {solution.name}
                      </h4>
                      <p className="text-zion-slate-600 mb-4">
                        {solution.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-zion-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={solution.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-50 to-zion-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-900 mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
              Experience the transformative power of AI with solutions designed for the modern enterprise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-zion-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-900 to-zion-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-zion-slate-200 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-900 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
