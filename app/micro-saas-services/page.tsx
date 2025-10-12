import React from 'react'
import SEOHead from '../components/SEOHead'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, DollarSign, Users, Clock, Star, Sparkles, Rocket, Cpu, Smartphone, Brain, Code, Database, Video, Target, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSAASServicesPage() {
  const microSAAS = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration', 'Deadline tracking'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '1,200+',
      rating: '4.9',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking', 'Financial reports', 'Tax preparation'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: true,
      users: '850+',
      rating: '4.8',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI security audit', 'Breach monitoring', 'Multi-device sync', 'Password generation'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false,
      users: '650+',
      rating: '4.7',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations', 'Recurring billing'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: true,
      users: '980+',
      rating: '4.9',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, social media, and marketing materials with SEO optimization.',
      features: ['Content generation', 'SEO optimization', 'Multiple languages', 'Brand voice training', 'Plagiarism detection'],
      pricing: '$29/month',
      link: '/ai-content-writer',
      popular: true,
      users: '1,500+',
      rating: '4.8',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: 'AI Website Builder',
      description: 'Build professional websites with AI assistance, including design, content, and SEO optimization.',
      features: ['AI design suggestions', 'Auto content generation', 'SEO optimization', 'Mobile responsive', 'E-commerce integration'],
      pricing: '$39/month',
      link: '/ai-website-builder',
      popular: false,
      users: '750+',
      rating: '4.6',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: 'AI Lead Generation',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment'],
      pricing: '$35/month',
      link: '/ai-lead-generation',
      popular: true,
      users: '1,100+',
      rating: '4.7',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Database className="w-8 h-8 text-teal-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      pricing: '$49/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      users: '600+',
      rating: '4.8',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-400" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement tracking, and content optimization.',
      features: ['Auto-posting', 'Engagement tracking', 'Content optimization', 'Hashtag research', 'Performance analytics'],
      pricing: '$22/month',
      link: '/ai-social-media-manager',
      popular: true,
      users: '900+',
      rating: '4.6',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Video className="w-8 h-8 text-blue-400" />,
      title: 'AI Meeting Assistant',
      description: 'Transform your meetings with AI-powered transcription, note-taking, and action item extraction.',
      features: ['Real-time transcription', 'Smart note taking', 'Meeting summaries', 'Time tracking', 'Participant insights'],
      pricing: '$15/month',
      link: '/ai-meeting-assistant',
      popular: true,
      users: '1,300+',
      rating: '4.8',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-400" />,
      title: 'AI Project Manager',
      description: 'Streamline your project management with AI-powered planning, team coordination, and predictive analytics.',
      features: ['Smart project planning', 'Team management', 'Progress tracking', 'Risk detection', 'Resource optimization'],
      pricing: '$25/month',
      link: '/ai-project-manager',
      popular: true,
      users: '1,100+',
      rating: '4.7',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 customer support with AI-powered chatbots that handle inquiries instantly.',
      features: ['24/7 AI chat support', 'Smart response generation', 'Human handoff', 'Multi-language support', 'Secure & compliant'],
      pricing: '$29/month',
      link: '/ai-customer-support-bot',
      popular: true,
      users: '1,400+',
      rating: '4.9',
      gradient: 'from-emerald-500 to-green-500'
    }
  ]

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start with low monthly costs and scale as you grow',
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes, not weeks',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI for better results',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it',
      icon: <Clock className="w-6 h-6 text-orange-400" />
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The AI Task Manager has revolutionized how I organize my work. I\'m 40% more productive now.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'The expense tracker saves me hours every week. The AI categorization is incredibly accurate.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'The AI content writer helps me create engaging content faster than ever. Highly recommended!',
      rating: 5,
      avatar: 'ER'
    }
  ]

  const stats = [
    { number: '50+', label: 'Micro SAAS Apps', icon: <Rocket className="w-6 h-6" /> },
    { number: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOHead 
        title="Micro SaaS Services - Zion Tech Group"
        description="Discover our collection of AI-powered micro SaaS tools designed to boost productivity and streamline business operations. Affordable, powerful, and easy to use."
        keywords="micro SaaS, AI tools, productivity, business automation, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-300 text-sm font-medium">AI-Powered Micro Applications</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powerful <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Micro SaaS Tools</span>
            <br />
            for Modern Professionals
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
            Discover our collection of AI-powered micro SaaS tools designed to boost productivity, 
            streamline operations, and help you work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas-services#tools"
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 group-hover:from-green-400/30 group-hover:to-emerald-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Micro SaaS Tools</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose from our carefully crafted collection of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {microSAAS.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-green-500/20 transform group-hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${tool.gradient} bg-opacity-20`}>
                      {tool.icon}
                    </div>
                    {tool.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group-hover:text-white transition-colors">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(tool.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400 ml-2">{tool.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Active Users</div>
                      <div className="text-lg font-semibold text-white">{tool.users}</div>
                    </div>
                  </div>

                  <Link
                    to={tool.link}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold text-center block hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Micro SaaS Tools?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Experience the benefits of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from professionals who use our tools daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.3),transparent_50%)]"></div>
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl mx-auto px-4">
                Join thousands of professionals already using our micro SaaS tools to work smarter
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/micro-saas-services#tools"
                  className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Browse All Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}