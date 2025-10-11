'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Star,
  Users,
  Clock,
  Shield,
  BarChart,
  Code,
  Cloud,
  Smartphone,
  Mail,
  FileText,
  Settings,
  Database,
  Globe,
  Lock,
  TrendingUp,
  MessageSquare,
  Calendar,
  Workflow,
  Eye,
  Wifi,
  ShoppingCart,
  Rocket,
  Award,
  Lightbulb,
  Gauge,
  Phone,
  Cpu,
  Monitor,
  Package,
  Mic,
  Heart
} from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: Brain,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform that generates high-quality articles, blog posts, social media content, and marketing copy.',
      features: ['GPT-4 Integration', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Content Templates', 'Plagiarism Check'],
      pricing: '$29/month',
      category: 'AI & Content',
      benefits: ['Save 80% content creation time', 'Increase content output by 500%', 'Improve SEO rankings', 'Maintain consistent brand voice'],
      link: 'https://ziontechgroup.com/ai-content-generator',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: BarChart,
      title: 'Business Intelligence Dashboard',
      description: 'Real-time analytics and reporting platform that transforms your data into actionable insights with beautiful visualizations.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Integration', 'Automated Reports', 'Mobile App', 'Team Collaboration'],
      pricing: '$49/month',
      category: 'Analytics & Data',
      benefits: ['Make data-driven decisions', 'Reduce reporting time by 90%', 'Identify growth opportunities', 'Improve team productivity'],
      link: 'https://ziontechgroup.com/business-intelligence',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation Suite',
      description: 'Complete email marketing solution with advanced automation, segmentation, and personalization features.',
      features: ['Drag & Drop Builder', 'Advanced Segmentation', 'A/B Testing', 'Behavioral Triggers', 'Analytics & Reporting', 'CRM Integration'],
      pricing: '$39/month',
      category: 'Marketing & Sales',
      benefits: ['Increase email open rates by 40%', 'Automate customer journeys', 'Boost conversion rates', 'Save 15 hours per week'],
      link: 'https://ziontechgroup.com/email-marketing',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Monitoring Center',
      description: '24/7 security monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Compliance Reports', 'Security Training', 'Mobile Alerts'],
      pricing: '$79/month',
      category: 'Security & Compliance',
      benefits: ['Prevent 99% of cyber attacks', 'Meet compliance requirements', 'Reduce security costs by 60%', '24/7 expert monitoring'],
      link: 'https://ziontechgroup.com/cybersecurity-monitoring',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Workflow,
      title: 'Process Automation Engine',
      description: 'No-code workflow automation platform that streamlines business processes and eliminates manual tasks.',
      features: ['Visual Workflow Builder', '500+ Integrations', 'Custom Triggers', 'Team Collaboration', 'Analytics Dashboard', 'Mobile Access'],
      pricing: '$59/month',
      category: 'Automation & Productivity',
      benefits: ['Automate 80% of repetitive tasks', 'Reduce errors by 95%', 'Save 20+ hours per week', 'Improve team efficiency'],
      link: 'https://ziontechgroup.com/process-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Users,
      title: 'Customer Success Platform',
      description: 'Comprehensive customer relationship management and success tracking platform with AI-powered insights.',
      features: ['360° Customer View', 'AI Insights', 'Automated Follow-ups', 'Success Metrics', 'Team Collaboration', 'Integration Hub'],
      pricing: '$69/month',
      category: 'CRM & Customer Success',
      benefits: ['Increase customer retention by 35%', 'Reduce churn by 50%', 'Improve customer satisfaction', 'Boost revenue per customer'],
      link: 'https://ziontechgroup.com/customer-success',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: FileText,
      title: 'Document Management System',
      description: 'Secure, cloud-based document management with AI-powered search, collaboration, and compliance features.',
      features: ['AI-Powered Search', 'Version Control', 'Team Collaboration', 'Access Controls', 'Compliance Tracking', 'Mobile App'],
      pricing: '$29/month',
      category: 'Document Management',
      benefits: ['Find documents 10x faster', 'Reduce paper usage by 90%', 'Improve team collaboration', 'Ensure compliance'],
      link: 'https://ziontechgroup.com/document-management',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling Assistant',
      description: 'AI-powered scheduling platform that automates meeting coordination and optimizes calendar management.',
      features: ['AI Scheduling', 'Calendar Integration', 'Meeting Analytics', 'Time Zone Handling', 'Resource Booking', 'Mobile App'],
      pricing: '$19/month',
      category: 'Productivity & Scheduling',
      benefits: ['Save 5+ hours per week', 'Reduce scheduling conflicts', 'Optimize meeting times', 'Improve productivity'],
      link: 'https://ziontechgroup.com/smart-scheduling',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: TrendingUp,
      title: 'Financial Analytics Pro',
      description: 'Advanced financial tracking and analysis platform for small businesses with predictive insights.',
      features: ['Real-time Tracking', 'Predictive Analytics', 'Expense Categorization', 'Tax Preparation', 'Investment Tracking', 'Reporting'],
      pricing: '$39/month',
      category: 'Finance & Accounting',
      benefits: ['Save 10+ hours on bookkeeping', 'Improve financial visibility', 'Reduce accounting costs', 'Make better financial decisions'],
      link: 'https://ziontechgroup.com/financial-analytics',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot platform that provides 24/7 customer support with natural language processing.',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Knowledge Base Integration', 'Human Handoff', 'Analytics Dashboard', 'Custom Training'],
      pricing: '$49/month',
      category: 'Customer Support',
      benefits: ['Provide 24/7 support', 'Reduce support costs by 70%', 'Improve response times', 'Increase customer satisfaction'],
      link: 'https://ziontechgroup.com/ai-support-bot',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform that lets you create professional apps without coding.',
      features: ['Drag & Drop Builder', 'Native Performance', 'App Store Publishing', 'Push Notifications', 'Analytics Integration', 'Custom Branding'],
      pricing: '$79/month',
      category: 'Mobile Development',
      benefits: ['Create apps 10x faster', 'No coding required', 'Professional results', 'Save $50,000+ in development costs'],
      link: 'https://ziontechgroup.com/mobile-app-builder',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Comprehensive cloud management platform that optimizes costs and performance across AWS, Azure, and Google Cloud.',
      features: ['Multi-cloud Support', 'Cost Optimization', 'Performance Monitoring', 'Security Management', 'Automated Scaling', 'Compliance Tracking'],
      pricing: '$99/month',
      category: 'Cloud & Infrastructure',
      benefits: ['Reduce cloud costs by 40%', 'Improve performance', 'Ensure security', 'Simplify management'],
      link: 'https://ziontechgroup.com/cloud-manager',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    }
  ]

  const categories = [
    'All Services',
    'AI & Content',
    'Analytics & Data',
    'Marketing & Sales',
    'Security & Compliance',
    'Automation & Productivity',
    'CRM & Customer Success',
    'Document Management',
    'Productivity & Scheduling',
    'Finance & Accounting',
    'Customer Support',
    'Mobile Development',
    'Cloud & Infrastructure'
  ]

  const [selectedCategory, setSelectedCategory] = React.useState('All Services')

  const filteredServices = selectedCategory === 'All Services' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful, affordable micro SAAS services designed to solve specific business problems and accelerate growth. 
              Each solution is built with cutting-edge technology and backed by our expert support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Browse All Services
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
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
              <div key={index} className="cyber-card group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">
                    {service.pricing}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm text-gray-300">(4.9/5)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                  
                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${service.contact}?subject=Inquiry about ${service.title}`}
                      className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                    <a
                      href={`tel:${service.phone}`}
                      className="flex-1 border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We can build a custom micro SAAS solution tailored to your specific business needs. 
              Our expert team will work with you to create the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Micro SAAS Solution Inquiry"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Code className="w-5 h-5 mr-2" />
                Request Custom Solution
              </a>
              <a
                href="tel:+13024640950"
                className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage