import React from 'react'
import SEOHead from '../components/SEOHead'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Sparkles, Rocket, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      features: [
        'Generate 10,000+ words daily',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP and machine learning capabilities.',
      features: [
        'Visual chatbot builder',
        'Multi-channel deployment',
        'Advanced analytics',
        'Custom integrations',
        '24/7 monitoring',
        'A/B testing tools'
      ],
      pricing: '$49/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-500" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation that handles inquiries, resolves issues, and escalates complex problems to human agents.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Ticket management',
        'Knowledge base integration',
        'Sentiment analysis',
        'Escalation management'
      ],
      pricing: '$39/month',
      popular: true,
      link: '/ai-customer-support-bot'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform powered by AI to analyze data, generate insights, and predict trends.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Data visualization',
        'Trend analysis'
      ],
      pricing: '$59/month',
      popular: false,
      link: '/ai-analytics'
    },
    {
      icon: <Eye className="w-12 h-12 text-red-500" />,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis using computer vision technology for object detection, facial recognition, and quality control.',
      features: [
        'Object detection',
        'Facial recognition',
        'Quality control automation',
        'Real-time processing',
        'Custom model training',
        'API integration'
      ],
      pricing: '$79/month',
      popular: false,
      link: '/ai-computer-vision'
    },
    {
      icon: <Cpu className="w-12 h-12 text-cyan-500" />,
      title: 'AI Process Automation',
      description: 'Automate complex business processes using AI to reduce manual work, improve accuracy, and increase efficiency.',
      features: [
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Decision making',
        'Integration capabilities',
        'Performance monitoring'
      ],
      pricing: '$99/month',
      popular: true,
      link: '/ai-process-automation'
    }
  ]

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 300%.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 50% through intelligent automation and process optimization.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Enhanced Security',
      description: 'Advanced AI-powered security measures to protect your data and systems from threats.'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: 'Scalable Solutions',
      description: 'AI solutions that grow with your business, handling increased workloads seamlessly.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI content generator has revolutionized our marketing efforts. We can now produce high-quality content at scale.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'Our AI chatbot handles 80% of customer inquiries automatically, freeing up our team for complex issues.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'The AI analytics dashboard provides insights we never had before. It\'s transformed our decision-making process.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions."
        keywords="AI services, artificial intelligence, chatbot development, content generation, AI analytics, process automation, machine learning"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Artificial Intelligence Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. From content generation to process automation, 
              our AI services are designed to accelerate growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business problems and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-300 ${
                  service.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-white/10 group-hover:border-purple-500/50'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">
                      {service.pricing}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI solutions deliver measurable results and transform how you do business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Trusted by leading companies worldwide for our innovative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have already transformed their operations with our cutting-edge AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage