import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Settings, Cpu, Target, TrendingUp, Shield, Clock, Users, Globe, BarChart3, Smartphone, Mail, Calendar, FileText, Search, CreditCard, Headphones } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
      name: 'AI Content Generator',
      icon: '📝',
      description: 'Create high-quality blog posts, articles, and marketing copy with AI',
      price: '$79/mo',
      link: '/micro-saas/ai-content-generator',
      features: ['1,000 words/month', 'SEO optimization', 'Multiple languages', 'Plagiarism check'],
      popular: true
    },
    {
      name: 'Social Media Scheduler',
      icon: '📱',
      description: 'Schedule and manage posts across all social media platforms',
      price: '$99/mo',
      link: '/micro-saas/social-scheduler',
      features: ['Multi-platform posting', 'Analytics dashboard', 'Optimal timing', 'Team collaboration'],
      popular: false
    },
    {
      name: 'Email Marketing AI',
      icon: '📧',
      description: 'AI-powered email campaigns with smart segmentation and automation',
      price: '$149/mo',
      link: '/micro-saas/email-ai',
      features: ['5,000 subscribers', 'AI subject lines', 'A/B testing', 'Automation workflows'],
      popular: true
    },
    {
      name: 'Analytics Dashboard',
      icon: '📊',
      description: 'Comprehensive business analytics with AI-powered insights',
      price: '$199/mo',
      link: '/micro-saas/analytics',
      features: ['Real-time data', 'Custom reports', 'Predictive analytics', 'Data visualization'],
      popular: false
    },
    {
      name: 'CRM Automation',
      icon: '👥',
      description: 'Intelligent customer relationship management with AI assistance',
      price: '$299/mo',
      link: '/micro-saas/crm-ai',
      features: ['Lead scoring', 'Auto-follow ups', 'Pipeline management', 'Integration hub'],
      popular: false
    },
    {
      name: 'Invoice Generator',
      icon: '💰',
      description: 'Automated invoice creation and payment processing',
      price: '$79/mo',
      link: '/micro-saas/invoice-ai',
      features: ['Auto-generation', 'Payment tracking', 'Tax calculations', 'Multi-currency'],
      popular: false
    },
    {
      name: 'SEO Optimizer',
      icon: '🔍',
      description: 'AI-powered SEO analysis and optimization recommendations',
      price: '$199/mo',
      link: '/micro-saas/seo-ai',
      features: ['Keyword research', 'Content optimization', 'Rank tracking', 'Competitor analysis'],
      popular: false
    },
    {
      name: 'Lead Scoring AI',
      icon: '🎯',
      description: 'Intelligent lead qualification and scoring system',
      price: '$249/mo',
      link: '/micro-saas/lead-scoring',
      features: ['Behavioral analysis', 'Scoring algorithms', 'Lead nurturing', 'ROI tracking'],
      popular: false
    },
    {
      name: 'Project Management AI',
      icon: '📋',
      description: 'Smart project planning and team collaboration tools',
      price: '$179/mo',
      link: '/micro-saas/project-management',
      features: ['Task automation', 'Resource planning', 'Progress tracking', 'Team coordination'],
      popular: false
    },
    {
      name: 'Customer Support AI',
      icon: '🎧',
      description: 'AI-powered chatbot and customer service automation',
      price: '$129/mo',
      link: '/micro-saas/customer-support',
      features: ['24/7 chatbot', 'Ticket routing', 'Knowledge base', 'Multi-language'],
      popular: false
    },
    {
      name: 'Inventory Manager',
      icon: '📦',
      description: 'Smart inventory tracking and demand forecasting',
      price: '$159/mo',
      link: '/micro-saas/inventory-manager',
      features: ['Real-time tracking', 'Demand forecasting', 'Reorder alerts', 'Supplier integration'],
      popular: false
    },
    {
      name: 'Financial Dashboard',
      icon: '💼',
      description: 'Comprehensive financial tracking and reporting system',
      price: '$229/mo',
      link: '/micro-saas/financial-dashboard',
      features: ['Expense tracking', 'Profit analysis', 'Tax preparation', 'Budget planning'],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Instant Setup",
      description: "Get started in minutes with our plug-and-play solutions. No complex installations or lengthy onboarding."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered",
      description: "Leverage cutting-edge AI technology to automate tasks and make smarter business decisions."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee. Your data is always protected."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Scalable Growth",
      description: "Start small and scale as you grow. Upgrade or downgrade your plan anytime."
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Team Collaboration",
      description: "Work together with your team using our built-in collaboration features and role management."
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Global Support",
      description: "24/7 customer support in multiple languages. We're here to help you succeed."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "These micro SAAS tools have transformed our business operations. We've saved 20+ hours per week and increased productivity by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Digital Agency Pro",
      content: "The AI Content Generator alone has increased our content output by 500%. The quality is outstanding and our clients love it.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Owner",
      company: "StyleHub",
      content: "The Email Marketing AI has been a game-changer. Our open rates increased from 15% to 42% in just 2 months.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">⚡</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 neon-text">
                  Micro SAAS Solutions
                </h1>
                <p className="text-xl text-cyan-400 font-semibold">Powerful AI Tools for Modern Businesses</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our suite of AI-powered micro SAAS tools. 
              From content creation to analytics, we have everything you need to scale efficiently. 
              Start from just $79/month and grow as you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View All Tools
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Micro SAAS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful, affordable, and easy-to-use solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Our Micro SAAS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered business tools
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSaasTools.map((tool, index) => (
              <div key={index} className={`cyber-card hologram-card relative ${tool.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tool.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{tool.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{tool.price}</div>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={tool.link}
                  className="w-full cyber-button text-center block"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing community of successful businesses using our tools
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-green-400 mb-2">50M+</div>
              <div className="text-gray-300">Tasks Automated</div>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming their operations with our tools
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS tools. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📞 Call (302) 464-0950
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              14-day free trial • No setup fees • Cancel anytime • 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;