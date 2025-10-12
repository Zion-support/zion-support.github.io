import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, DollarSign, Users, Clock, Star, Brain, BarChart3, MessageSquare, Settings, FileText, Smartphone, Mail, TrendingUp, Lock, Cloud, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation with SEO optimization, brand voice matching, and multi-language support.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection', 'A/B testing'],
      pricing: '$49/month',
      popular: true,
      link: '/ai-content-writer',
      users: '2,500+',
      rating: '4.9'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics, custom reporting, and automated insights.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'Data visualization'],
      pricing: '$79/month',
      popular: true,
      link: '/ai-analytics-dashboard',
      users: '1,800+',
      rating: '4.8'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent 24/7 customer service with natural language processing and seamless human handoff.',
      features: ['24/7 AI support', 'Multi-language', 'Ticket management', 'Live chat integration', 'Knowledge base', 'Sentiment analysis'],
      pricing: '$99/month',
      popular: true,
      link: '/ai-customer-support-bot',
      users: '3,200+',
      rating: '4.9'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'AI Workflow Automation',
      description: 'Automate repetitive tasks and streamline business processes with intelligent workflow management.',
      features: ['Process automation', 'Task scheduling', 'Integration hub', 'Performance tracking', 'Custom triggers', 'Team collaboration'],
      pricing: '$129/month',
      popular: false,
      link: '/ai-automation',
      users: '1,200+',
      rating: '4.7'
    },
    {
      icon: <Mail className="w-8 h-8 text-cyan-500" />,
      title: 'AI Email Marketing Pro',
      description: 'Smart email campaigns with AI-powered personalization, A/B testing, and advanced analytics.',
      features: ['AI personalization', 'A/B testing', 'Advanced analytics', 'Template library', 'List segmentation', 'Automation workflows'],
      pricing: '$59/month',
      popular: false,
      link: '/ai-email-marketing',
      users: '1,500+',
      rating: '4.6'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: 'AI Lead Generation Suite',
      description: 'Automated lead discovery, qualification, and nurturing with CRM integration and follow-up automation.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment', 'Pipeline management'],
      pricing: '$89/month',
      popular: true,
      link: '/ai-lead-generation',
      users: '2,100+',
      rating: '4.8'
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-500" />,
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated categorization.',
      features: ['OCR technology', 'Data extraction', 'Auto categorization', 'Version control', 'Search functionality', 'Batch processing'],
      pricing: '$69/month',
      popular: false,
      link: '/ai-document-processor',
      users: '950+',
      rating: '4.5'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media management with content creation, scheduling, and performance optimization.',
      features: ['Content creation', 'Auto-posting', 'Engagement tracking', 'Hashtag research', 'Performance analytics', 'Multi-platform'],
      pricing: '$39/month',
      popular: false,
      link: '/ai-social-media-manager',
      users: '1,700+',
      rating: '4.7'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'AI Expense Tracker Pro',
      description: 'Intelligent expense management with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation', 'Expense reports', 'Team management'],
      pricing: '$29/month',
      popular: false,
      link: '/ai-expense-tracker',
      users: '1,300+',
      rating: '4.6'
    },
    {
      icon: <Target className="w-8 h-8 text-teal-500" />,
      title: 'AI Project Manager',
      description: 'Smart project management with AI-powered task prioritization, resource allocation, and progress tracking.',
      features: ['Task prioritization', 'Resource allocation', 'Progress tracking', 'Team collaboration', 'Timeline management', 'Risk assessment'],
      pricing: '$79/month',
      popular: true,
      link: '/ai-project-manager',
      users: '1,900+',
      rating: '4.8'
    },
    {
      icon: <Lock className="w-8 h-8 text-gray-500" />,
      title: 'AI Security Monitor',
      description: 'Advanced security monitoring with threat detection, vulnerability scanning, and compliance reporting.',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', 'Real-time alerts', 'Incident response', 'Security audits'],
      pricing: '$149/month',
      popular: false,
      link: '/ai-cybersecurity',
      users: '800+',
      rating: '4.9'
    },
    {
      icon: <Cloud className="w-8 h-8 text-sky-500" />,
      title: 'AI Cloud Backup Pro',
      description: 'Intelligent cloud backup with automated scheduling, version control, and disaster recovery.',
      features: ['Automated backups', 'Version control', 'Disaster recovery', 'Cross-platform sync', 'Encryption', 'Storage optimization'],
      pricing: '$49/month',
      popular: false,
      link: '/ai-cloud-backup',
      users: '1,100+',
      rating: '4.7'
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start with low monthly costs and scale as you grow',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes, not weeks',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI for better results',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The AI Content Writer Pro has revolutionized how I create content. I\'m 40% more productive now.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'The AI Analytics Dashboard gives me insights I never had before. Game changer for my business.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'The AI Customer Support Bot handles 80% of our inquiries automatically. Incredible efficiency gains.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions for modern businesses. AI-powered tools for content creation, analytics, email management, and more." />
        <meta name="keywords" content="micro saas, ai tools, business software, content creation, analytics, email management" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful Micro SAAS
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Tools</span>
            <br />
            for Modern Professionals
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of AI-powered micro SAAS tools designed to boost productivity, 
            streamline operations, and help you work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="#tools"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully crafted collection of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSaasServices.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {tool.icon}
                  {tool.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {tool.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xl font-bold text-white">{tool.pricing}</span>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(parseFloat(tool.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 ml-1">{tool.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Users</div>
                    <div className="text-sm font-semibold text-white">{tool.users}</div>
                  </div>
                </div>

                <Link
                  to={tool.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg font-semibold text-center block hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group-hover:scale-105 text-sm"
                >
                  Try Now
                  <ArrowRight className="w-3 h-3 inline-block ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from professionals who use our tools daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of professionals already using our micro SAAS tools to work smarter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="#tools"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Browse All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;
