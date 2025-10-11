'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Star,
  Users,
  Clock,
  Globe,
  Code,
  BarChart,
  Smartphone,
  Database,
  Settings,
  Target,
  TrendingUp,
  Lock,
  Monitor,
  Server,
  Cpu,
  FileText,
  MessageCircle,
  ShoppingCart,
  Rocket,
  Award,
  Lightbulb,
  Gauge,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: Brain,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates and multi-language support.',
      features: [
        '50+ Professional Templates',
        'Multi-language Support (25+ languages)',
        'SEO Optimization Tools',
        'Brand Voice Customization',
        'Plagiarism Detection',
        'Content Analytics Dashboard'
      ],
      pricing: {
        starter: '$29/month',
        pro: '$79/month',
        enterprise: '$199/month'
      },
      link: 'https://ziontechgroup.com/ai-content-generator',
      category: 'AI Tools'
    },
    {
      icon: BarChart,
      title: 'Business Intelligence Dashboard',
      description: 'Real-time analytics and reporting platform with custom dashboards and automated insights.',
      features: [
        'Real-time Data Visualization',
        'Custom Dashboard Builder',
        'Automated Report Generation',
        '50+ Data Source Integrations',
        'Advanced Filtering & Segmentation',
        'Mobile App Access'
      ],
      pricing: {
        starter: '$49/month',
        pro: '$129/month',
        enterprise: '$299/month'
      },
      link: 'https://ziontechgroup.com/business-intelligence',
      category: 'Analytics'
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer support platform with chatbots, ticket management, and sentiment analysis.',
      features: [
        'AI-Powered Chatbots',
        'Multi-channel Support',
        'Sentiment Analysis',
        'Automated Ticket Routing',
        'Knowledge Base Integration',
        'Performance Analytics'
      ],
      pricing: {
        starter: '$39/month',
        pro: '$99/month',
        enterprise: '$249/month'
      },
      link: 'https://ziontechgroup.com/ai-customer-support',
      category: 'Customer Service'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Monitoring Pro',
      description: 'Comprehensive security monitoring platform with threat detection and compliance reporting.',
      features: [
        'Real-time Threat Detection',
        'Vulnerability Scanning',
        'Compliance Reporting (SOC2, GDPR)',
        'Incident Response Automation',
        'Security Training Modules',
        '24/7 Monitoring Dashboard'
      ],
      pricing: {
        starter: '$59/month',
        pro: '$149/month',
        enterprise: '$399/month'
      },
      link: 'https://ziontechgroup.com/cybersecurity-monitoring',
      category: 'Security'
    },
    {
      icon: Code,
      title: 'API Management Platform',
      description: 'Complete API lifecycle management with monitoring, analytics, and developer portal.',
      features: [
        'API Gateway & Proxy',
        'Rate Limiting & Throttling',
        'Developer Portal',
        'API Analytics & Monitoring',
        'Documentation Generator',
        'SDK Generation'
      ],
      pricing: {
        starter: '$79/month',
        pro: '$199/month',
        enterprise: '$499/month'
      },
      link: 'https://ziontechgroup.com/api-management',
      category: 'Development'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced e-commerce analytics platform with conversion optimization and customer insights.',
      features: [
        'Conversion Funnel Analysis',
        'Customer Journey Mapping',
        'A/B Testing Tools',
        'Revenue Attribution',
        'Inventory Optimization',
        'Marketing ROI Tracking'
      ],
      pricing: {
        starter: '$69/month',
        pro: '$179/month',
        enterprise: '$399/month'
      },
      link: 'https://ziontechgroup.com/ecommerce-analytics',
      category: 'E-commerce'
    },
    {
      icon: Users,
      title: 'HR Management Suite',
      description: 'Complete human resources management platform with AI-powered recruitment and employee analytics.',
      features: [
        'AI-Powered Resume Screening',
        'Employee Performance Tracking',
        'Payroll Management',
        'Time & Attendance',
        'Benefits Administration',
        'Compliance Reporting'
      ],
      pricing: {
        starter: '$39/month',
        pro: '$99/month',
        enterprise: '$249/month'
      },
      link: 'https://ziontechgroup.com/hr-management',
      category: 'Human Resources'
    },
    {
      icon: FileText,
      title: 'Document Automation Pro',
      description: 'Intelligent document processing and automation platform with OCR and workflow management.',
      features: [
        'OCR & Text Extraction',
        'Document Classification',
        'Automated Workflows',
        'Digital Signatures',
        'Version Control',
        'Compliance Tracking'
      ],
      pricing: {
        starter: '$49/month',
        pro: '$129/month',
        enterprise: '$299/month'
      },
      link: 'https://ziontechgroup.com/document-automation',
      category: 'Productivity'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Automation Hub',
      description: 'Comprehensive marketing automation platform with email campaigns, social media management, and lead scoring.',
      features: [
        'Email Campaign Automation',
        'Social Media Scheduling',
        'Lead Scoring & Nurturing',
        'A/B Testing Tools',
        'ROI Tracking',
        'Customer Segmentation'
      ],
      pricing: {
        starter: '$59/month',
        pro: '$149/month',
        enterprise: '$349/month'
      },
      link: 'https://ziontechgroup.com/marketing-automation',
      category: 'Marketing'
    },
    {
      icon: Database,
      title: 'Data Integration Platform',
      description: 'Enterprise-grade data integration platform with ETL/ELT capabilities and real-time synchronization.',
      features: [
        '100+ Data Source Connectors',
        'Real-time Data Sync',
        'Data Transformation Tools',
        'Data Quality Monitoring',
        'API & Webhook Support',
        'Cloud & On-premise Support'
      ],
      pricing: {
        starter: '$99/month',
        pro: '$249/month',
        enterprise: '$599/month'
      },
      link: 'https://ziontechgroup.com/data-integration',
      category: 'Data Management'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Analytics',
      description: 'Comprehensive mobile app analytics platform with user behavior tracking and performance monitoring.',
      features: [
        'User Behavior Analytics',
        'Crash Reporting',
        'Performance Monitoring',
        'A/B Testing for Mobile',
        'Push Notification Analytics',
        'Revenue Tracking'
      ],
      pricing: {
        starter: '$29/month',
        pro: '$79/month',
        enterprise: '$199/month'
      },
      link: 'https://ziontechgroup.com/mobile-analytics',
      category: 'Mobile'
    },
    {
      icon: Globe,
      title: 'Website Performance Monitor',
      description: 'Advanced website performance monitoring with Core Web Vitals tracking and optimization recommendations.',
      features: [
        'Core Web Vitals Monitoring',
        'Real User Monitoring (RUM)',
        'Synthetic Testing',
        'Performance Budgets',
        'Alerting & Notifications',
        'Optimization Recommendations'
      ],
      pricing: {
        starter: '$39/month',
        pro: '$99/month',
        enterprise: '$249/month'
      },
      link: 'https://ziontechgroup.com/website-performance',
      category: 'Performance'
    }
  ]

  const categories = ['All', 'AI Tools', 'Analytics', 'Customer Service', 'Security', 'Development', 'E-commerce', 'Human Resources', 'Productivity', 'Marketing', 'Data Management', 'Mobile', 'Performance']

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-enhanced">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful, affordable micro-SaaS solutions designed to solve specific business challenges. 
              From AI-powered tools to analytics platforms, we provide everything you need to scale your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 futuristic-btn">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="cyber-card-enhanced hover-lift group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-cyan-400 font-medium">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-2xl font-bold text-white">{service.pricing.starter}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Pro: {service.pricing.pro} • Enterprise: {service.pricing.enterprise}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 inline" />
                    Learn More
                  </a>
                  <button className="px-4 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-lg transition-all duration-300 text-sm">
                    <DollarSign className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 24/7 support and regular updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card-enhanced text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1GB storage
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="cyber-card-enhanced text-center border-2 border-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 25 users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  10GB storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="cyber-card-enhanced text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 phone support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro-SaaS solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 futuristic-btn">
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage