import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  Monitor,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
  FileText,
  Truck,
  TrendingUp
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      id: 'zion-ai-analytics-pro',
      name: 'Zion AI Analytics Pro',
      description: 'Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights generation.',
      price: 'From $299/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard creation',
        'Automated report generation',
        'Multi-source data integration',
        'Advanced filtering and segmentation'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/zion-ai-analytics-pro',
      featured: true,
      category: 'Analytics'
    },
    {
      id: 'zion-ai-crm-pro',
      name: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management system with AI-powered lead scoring, automated follow-ups, and sales forecasting.',
      price: 'From $199/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Sales pipeline management',
        'Customer segmentation',
        'Email integration',
        'Advanced reporting'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/zion-ai-crm-pro',
      featured: true,
      category: 'CRM'
    },
    {
      id: 'zion-ai-video-generator',
      name: 'Zion AI Video Generator',
      description: 'Create professional videos with AI in minutes. Generate marketing videos, product demos, and social media content automatically.',
      price: 'From $149/month',
      features: [
        'AI video generation',
        'Multiple video templates',
        'Voice synthesis',
        'Auto-subtitle generation',
        'Brand customization',
        'Social media optimization'
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      link: '/zion-ai-video-generator',
      featured: true,
      category: 'Content Creation'
    },
    {
      id: 'zion-ai-invoice-generator',
      name: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered pricing optimization, payment tracking, and financial analytics.',
      price: 'From $99/month',
      features: [
        'Automated invoice creation',
        'AI pricing optimization',
        'Payment tracking',
        'Tax calculation',
        'Multi-currency support',
        'Financial reporting'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      link: '/zion-ai-invoice-generator',
      featured: true,
      category: 'Finance'
    },
    {
      id: 'zion-ai-customer-insights',
      name: 'Zion AI Customer Insights',
      description: 'Deep customer analytics platform that provides actionable insights from customer behavior, feedback, and engagement data.',
      price: 'From $179/month',
      features: [
        'Customer behavior analysis',
        'Sentiment analysis',
        'Churn prediction',
        'Personalization recommendations',
        'A/B testing insights',
        'Customer journey mapping'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-ai-customer-insights',
      featured: true,
      category: 'Analytics'
    },
    {
      id: 'zion-ai-email-analyzer',
      name: 'Zion AI Email Analyzer',
      description: 'AI-powered email analysis tool that optimizes subject lines, content, and timing for maximum engagement and deliverability.',
      price: 'From $129/month',
      features: [
        'Subject line optimization',
        'Content analysis',
        'Send time optimization',
        'Deliverability scoring',
        'A/B testing',
        'Performance tracking'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-ai-email-analyzer',
      featured: true,
      category: 'Marketing'
    },
    {
      id: 'zion-smart-inventory-optimizer',
      name: 'Zion Smart Inventory Optimizer',
      description: 'AI-powered inventory management system that predicts demand, optimizes stock levels, and reduces waste through machine learning.',
      price: 'From $249/month',
      features: [
        'Demand forecasting',
        'Stock optimization',
        'Reorder automation',
        'Waste reduction',
        'Multi-location support',
        'Supplier management'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      link: '/zion-smart-inventory-optimizer',
      featured: true,
      category: 'Operations'
    },
    {
      id: 'zion-ai-customer-sentiment-tracker',
      name: 'Zion AI Customer Sentiment Tracker',
      description: 'Real-time sentiment analysis across all customer touchpoints to identify issues and opportunities for improvement.',
      price: 'From $159/month',
      features: [
        'Real-time sentiment monitoring',
        'Multi-channel analysis',
        'Alert system',
        'Trend analysis',
        'Competitor comparison',
        'Actionable insights'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      link: '/zion-ai-customer-sentiment-tracker',
      featured: true,
      category: 'Analytics'
    },
    {
      id: 'zion-smart-expense-categorizer',
      name: 'Zion Smart Expense Categorizer',
      description: 'AI-powered expense management that automatically categorizes, tracks, and analyzes business expenses for better financial control.',
      price: 'From $89/month',
      features: [
        'Automatic categorization',
        'Receipt scanning',
        'Expense tracking',
        'Budget management',
        'Tax preparation',
        'Financial reporting'
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      link: '/zion-smart-expense-categorizer',
      featured: true,
      category: 'Finance'
    },
    {
      id: 'zion-ai-voice-assistant-pro',
      name: 'Zion AI Voice Assistant Pro',
      description: 'Advanced voice assistant for business operations with custom commands, integrations, and multi-language support.',
      price: 'From $199/month',
      features: [
        'Custom voice commands',
        'Business integrations',
        'Multi-language support',
        'Voice analytics',
        'Custom training',
        'API access'
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      link: '/zion-ai-voice-assistant-pro',
      featured: true,
      category: 'Automation'
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer',
      description: 'AI-powered code review tool that automatically analyzes code quality, security vulnerabilities, and performance issues.',
      price: 'From $179/month',
      features: [
        'Automated code analysis',
        'Security vulnerability detection',
        'Performance optimization',
        'Code quality scoring',
        'Best practice recommendations',
        'Team collaboration tools'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      link: '/zion-ai-code-reviewer',
      featured: true,
      category: 'Development'
    },
    {
      id: 'zion-ai-social-media-manager',
      name: 'Zion AI Social Media Manager',
      description: 'Comprehensive social media management platform with AI-powered content creation, scheduling, and analytics.',
      price: 'From $149/month',
      features: [
        'AI content generation',
        'Multi-platform posting',
        'Optimal timing analysis',
        'Engagement tracking',
        'Hashtag optimization',
        'Competitor analysis'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      link: '/zion-ai-social-media-manager',
      featured: true,
      category: 'Marketing'
    },
    {
      id: 'zion-ai-contract-analyzer',
      name: 'Zion AI Contract Analyzer',
      description: 'Revolutionary AI-powered contract analysis tool that automates legal document review, risk detection, and compliance checking.',
      price: 'From $199/month',
      features: [
        'AI-powered contract analysis',
        'Risk detection & alerts',
        'Contract comparison',
        'Automated summaries',
        'Compliance checking',
        'Deadline tracking'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      link: '/zion-ai-contract-analyzer',
      featured: true,
      category: 'Legal'
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      name: 'Zion AI Supply Chain Optimizer',
      description: 'Transform your supply chain with AI-powered optimization. Reduce costs by 40%, improve forecast accuracy to 95%.',
      price: 'From $299/month',
      features: [
        'AI-powered demand forecasting',
        'Route optimization',
        'Inventory management',
        'Supplier performance analytics',
        'Real-time monitoring',
        'Cost optimization'
      ],
      icon: <Truck className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      link: '/zion-ai-supply-chain-optimizer',
      featured: true,
      category: 'Operations'
    },
    {
      id: 'zion-ai-financial-forecaster',
      name: 'Zion AI Financial Forecaster',
      description: 'Transform your financial planning with AI-powered forecasting. Achieve 98% accuracy in predictions and optimize cash flow.',
      price: 'From $199/month',
      features: [
        'AI-powered financial modeling',
        'Cash flow optimization',
        'Risk assessment & management',
        'Investment portfolio analysis',
        'Real-time market integration',
        'Automated reporting'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-500',
      link: '/zion-ai-financial-forecaster',
      featured: true,
      category: 'Finance'
    }
  ];

  const categories = [
    'All',
    'Analytics',
    'CRM',
    'Content Creation',
    'Finance',
    'Marketing',
    'Operations',
    'Automation',
    'Development',
    'Legal'
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Phone className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion AI Analytics Pro transformed our data analysis. We now make data-driven decisions 3x faster with 90% more accuracy.',
      rating: 5,
      service: 'Zion AI Analytics Pro'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      role: 'CTO',
      content: 'The AI Video Generator saved us thousands of hours in content creation. Our marketing team is now 5x more productive.',
      rating: 5,
      service: 'Zion AI Video Generator'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      role: 'Operations Director',
      content: 'Zion AI CRM Pro helped us increase our conversion rate by 40% through intelligent lead scoring and automation.',
      rating: 5,
      service: 'Zion AI CRM Pro'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions powered by AI. From analytics to automation, we have the tools to transform your business operations."
        keywords="micro saas, business tools, AI solutions, automation, analytics, CRM, content creation, productivity"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive suite of AI-powered micro SAAS solutions for modern businesses" />
      </Helmet>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Micro SAAS Solutions
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, AI-driven micro SAAS tools designed to streamline your business operations. 
              From analytics to automation, we have everything you need to scale efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={Sparkles}
                iconPosition="left"
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={Monitor}
                iconPosition="left"
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions. 
                Each tool is designed to solve specific business challenges with maximum efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <FuturisticCard
                  key={service.id}
                  className="group cursor-pointer"
                  glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}
                >
                  <Link to={service.link} className="block">
                    {service.featured && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-cyan-400 font-medium">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our micro SAAS solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-cyan-400 mt-1">{testimonial.service}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your transformation journey today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Start Your Journey
              </FuturisticButton>
              <FuturisticButton
                href="/services"
                variant="outline"
                size="lg"
                icon={Sparkles}
                iconPosition="right"
              >
                Explore All Services
              </FuturisticButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MicroSaasPage;