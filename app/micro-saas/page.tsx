'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  DollarSign, 
  Users, 
  Clock, 
  Shield, 
  BarChart, 
  Mail, 
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Lock,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Settings,
  Headphones,
  Phone
} from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: FileText,
      price: '$29/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      benefits: [
        'Save 80% time on content creation',
        'Increase content output by 500%',
        'Improve SEO rankings',
        'Maintain consistent brand voice'
      ],
      link: 'https://ziontechgroup.com/ai-content-generator',
      category: 'Content & Marketing'
    },
    {
      id: 'ai-image-editor',
      title: 'AI Image Editor Studio',
      description: 'Professional image editing powered by AI. Remove backgrounds, enhance photos, and create stunning visuals.',
      icon: Image,
      price: '$19/month',
      features: [
        'Background removal',
        'AI upscaling',
        'Color correction',
        'Object removal',
        'Style transfer',
        'Batch processing'
      ],
      benefits: [
        'Professional results in seconds',
        'No design skills required',
        'Save on expensive software',
        'Unlimited edits'
      ],
      link: 'https://ziontechgroup.com/ai-image-editor',
      category: 'Design & Media'
    },
    {
      id: 'ai-video-generator',
      title: 'AI Video Creator',
      description: 'Create professional videos from text prompts. Perfect for social media, marketing, and presentations.',
      icon: Video,
      price: '$49/month',
      features: [
        'Text-to-video generation',
        'Voice synthesis',
        'Multiple video formats',
        'Custom branding',
        'Stock footage library',
        'Auto-captions'
      ],
      benefits: [
        'Create videos in minutes',
        'Professional quality output',
        'No video editing skills needed',
        'Cost-effective video production'
      ],
      link: 'https://ziontechgroup.com/ai-video-generator',
      category: 'Design & Media'
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Suite',
      description: 'Automate your email marketing with AI-powered personalization, subject line optimization, and send time prediction.',
      icon: Mail,
      price: '$39/month',
      features: [
        'AI subject line optimization',
        'Send time prediction',
        'Personalization engine',
        'A/B testing automation',
        'Email template library',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Automate campaign optimization',
        'Save 10+ hours per week',
        'Higher conversion rates'
      ],
      link: 'https://ziontechgroup.com/ai-email-marketing',
      category: 'Marketing & Sales'
    },
    {
      id: 'ai-scheduler',
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling assistant that finds optimal meeting times, handles time zones, and manages conflicts.',
      icon: Calendar,
      price: '$15/month',
      features: [
        'Smart time slot finding',
        'Multi-timezone support',
        'Calendar integration',
        'Conflict resolution',
        'Meeting reminders',
        'Team scheduling'
      ],
      benefits: [
        'Eliminate scheduling back-and-forth',
        'Reduce no-shows by 60%',
        'Save 2+ hours per week',
        'Professional scheduling experience'
      ],
      link: 'https://ziontechgroup.com/ai-scheduler',
      category: 'Productivity'
    },
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant Pro',
      description: 'AI-powered coding assistant that helps developers write better code, debug issues, and learn new technologies.',
      icon: Code,
      price: '$35/month',
      features: [
        'Code completion',
        'Bug detection',
        'Code explanation',
        'Refactoring suggestions',
        'Documentation generation',
        'Multi-language support'
      ],
      benefits: [
        'Write code 3x faster',
        'Reduce bugs by 70%',
        'Learn new technologies',
        'Improve code quality'
      ],
      link: 'https://ziontechgroup.com/ai-code-assistant',
      category: 'Development'
    },
    {
      id: 'ai-data-analyzer',
      title: 'AI Data Analyzer',
      description: 'Transform raw data into actionable insights with AI-powered analysis, visualization, and reporting.',
      icon: BarChart,
      price: '$45/month',
      features: [
        'Automated data analysis',
        'Smart visualizations',
        'Predictive insights',
        'Report generation',
        'Data cleaning',
        'Export capabilities'
      ],
      benefits: [
        'Make data-driven decisions',
        'Save 15+ hours per week',
        'Discover hidden patterns',
        'Professional reports'
      ],
      link: 'https://ziontechgroup.com/ai-data-analyzer',
      category: 'Analytics & BI'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Bot',
      description: '24/7 AI-powered customer support that handles common queries, escalates complex issues, and learns from interactions.',
      icon: Headphones,
      price: '$25/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Escalation management',
        'Knowledge base integration',
        'Sentiment analysis',
        'Performance analytics'
      ],
      benefits: [
        '24/7 customer support',
        'Reduce support costs by 60%',
        'Improve response times',
        'Higher customer satisfaction'
      ],
      link: 'https://ziontechgroup.com/ai-customer-support',
      category: 'Customer Service'
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Automate your social media presence with AI-generated posts, optimal posting times, and engagement optimization.',
      icon: Globe,
      price: '$32/month',
      features: [
        'Content generation',
        'Optimal posting times',
        'Hashtag optimization',
        'Engagement analysis',
        'Multi-platform posting',
        'Trend monitoring'
      ],
      benefits: [
        'Increase engagement by 200%',
        'Save 5+ hours per week',
        'Consistent posting schedule',
        'Better social media ROI'
      ],
      link: 'https://ziontechgroup.com/ai-social-media-manager',
      category: 'Marketing & Sales'
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and automated expense report generation.',
      icon: DollarSign,
      price: '$12/month',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Expense reports',
        'Tax preparation',
        'Budget tracking',
        'Team management'
      ],
      benefits: [
        'Save 3+ hours per week',
        'Accurate expense tracking',
        'Easy tax preparation',
        'Better budget control'
      ],
      link: 'https://ziontechgroup.com/ai-expense-tracker',
      category: 'Finance & Accounting'
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management with task prioritization, resource allocation, and deadline prediction.',
      icon: Target,
      price: '$28/month',
      features: [
        'Task prioritization',
        'Resource optimization',
        'Deadline prediction',
        'Risk assessment',
        'Team collaboration',
        'Progress tracking'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce project risks',
        'Better resource utilization',
        'Improved team productivity'
      ],
      link: 'https://ziontechgroup.com/ai-project-manager',
      category: 'Productivity'
    },
    {
      id: 'ai-cybersecurity-monitor',
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and security monitoring for your digital assets with real-time alerts and response.',
      icon: Shield,
      price: '$55/month',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Vulnerability scanning',
        'Compliance reporting',
        'Incident management'
      ],
      benefits: [
        'Protect against cyber threats',
        'Reduce security risks by 90%',
        'Compliance assurance',
        'Peace of mind'
      ],
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor',
      category: 'Security'
    }
  ]

  const categories = [
    'All',
    'Content & Marketing',
    'Design & Media',
    'Marketing & Sales',
    'Productivity',
    'Development',
    'Analytics & BI',
    'Customer Service',
    'Finance & Accounting',
    'Security'
  ]

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro-SaaS tools designed to solve specific business problems and boost productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                10,000+ Active Users
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                4.9/5 Rating
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Enterprise Security
              </span>
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
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Try Now
                  </a>
                  <button className="flex-1 border border-white/30 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Micro-SaaS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro-SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300">
              We focus on solving specific problems with powerful, easy-to-use tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300">Get started in minutes, not hours. No complex configuration required.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Affordable Pricing</h3>
              <p className="text-gray-300">Transparent, competitive pricing with no hidden fees or surprises.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and data encryption.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert team whenever you need help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our suite of micro-SaaS tools and start solving business problems today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free Consultation
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
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaaSPage