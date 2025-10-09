import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  PieChart, 
  Bot, 
  Mail, 
  Calendar, 
  MessageSquare, 
  Target, 
  Globe, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  DollarSign,
  Clock,
  Users,
  Shield,
  TrendingUp,
  Lightbulb,
  Rocket,
  Award
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      name: 'AI Content Generator',
      href: '/micro-saas/ai-content-generator',
      icon: FileText,
      description: 'AI-powered content creation for blogs, social media, and marketing',
      price: '$29/month',
      originalPrice: '$50-200/month',
      features: ['Blog Post Generation', 'Social Media Content', 'SEO Optimization', 'Multi-language Support'],
      benefits: ['Save 10+ hours/week', 'Increase content output by 300%', 'Improve SEO rankings'],
      category: 'Content & Marketing',
      rating: 4.9,
      users: '10,000+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Smart Analytics Dashboard',
      href: '/micro-saas/smart-analytics',
      icon: PieChart,
      description: 'Real-time business analytics with AI insights and predictions',
      price: '$49/month',
      originalPrice: '$100-500/month',
      features: ['Real-time Dashboards', 'AI Predictions', 'Custom Reports', 'Data Integration'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Reduce manual reporting'],
      category: 'Analytics & BI',
      rating: 4.8,
      users: '5,000+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI Customer Support Bot',
      href: '/micro-saas/ai-support-bot',
      icon: Bot,
      description: 'Intelligent customer support automation with human handoff',
      price: '$79/month',
      originalPrice: '$200-1000/month',
      features: ['24/7 Support', 'Multi-language', 'Ticket Management', 'Human Handoff'],
      benefits: ['Reduce support costs by 60%', 'Improve response time', 'Scale support operations'],
      category: 'Customer Service',
      rating: 4.9,
      users: '15,000+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Smart Email Marketing',
      href: '/micro-saas/smart-email-marketing',
      icon: Mail,
      description: 'AI-powered email campaigns with personalization and optimization',
      price: '$39/month',
      originalPrice: '$50-300/month',
      features: ['AI Personalization', 'A/B Testing', 'Automation', 'Analytics'],
      benefits: ['Increase open rates by 40%', 'Automate campaigns', 'Better customer engagement'],
      category: 'Marketing',
      rating: 4.7,
      users: '8,000+',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'AI Project Management',
      href: '/micro-saas/ai-project-management',
      icon: Calendar,
      description: 'Intelligent project tracking with resource optimization and risk prediction',
      price: '$59/month',
      originalPrice: '$100-500/month',
      features: ['Smart Scheduling', 'Risk Prediction', 'Resource Optimization', 'Progress Tracking'],
      benefits: ['Complete projects 25% faster', 'Reduce project risks', 'Optimize team productivity'],
      category: 'Productivity',
      rating: 4.8,
      users: '12,000+',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'AI Social Media Manager',
      href: '/micro-saas/ai-social-manager',
      icon: MessageSquare,
      description: 'Automated social media posting, engagement, and analytics',
      price: '$69/month',
      originalPrice: '$150-800/month',
      features: ['Auto Posting', 'Engagement Analysis', 'Content Calendar', 'Performance Tracking'],
      benefits: ['Save 15+ hours/week', 'Increase engagement by 50%', 'Consistent brand presence'],
      category: 'Social Media',
      rating: 4.6,
      users: '7,000+',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Smart Invoice Generator',
      href: '/micro-saas/smart-invoice',
      icon: FileText,
      description: 'AI-powered invoice creation with automated follow-ups and payment tracking',
      price: '$19/month',
      originalPrice: '$30-150/month',
      features: ['Auto Invoice Generation', 'Payment Tracking', 'Automated Reminders', 'Multi-currency'],
      benefits: ['Reduce billing errors', 'Faster payments', 'Professional invoices'],
      category: 'Finance & Billing',
      rating: 4.9,
      users: '20,000+',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'AI Lead Scoring System',
      href: '/micro-saas/ai-lead-scoring',
      icon: Target,
      description: 'Intelligent lead qualification and scoring for better conversion rates',
      price: '$89/month',
      originalPrice: '$200-1000/month',
      features: ['Lead Scoring', 'Behavioral Analysis', 'CRM Integration', 'Conversion Tracking'],
      benefits: ['Increase conversion by 35%', 'Focus on high-value leads', 'Improve sales efficiency'],
      category: 'Sales & CRM',
      rating: 4.8,
      users: '6,000+',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Smart Document Processor',
      href: '/micro-saas/smart-document-processor',
      icon: FileText,
      description: 'AI-powered document analysis, extraction, and organization',
      price: '$99/month',
      originalPrice: '$300-2000/month',
      features: ['Document OCR', 'Data Extraction', 'Classification', 'Search & Retrieval'],
      benefits: ['Process documents 10x faster', 'Reduce manual data entry', 'Improve accuracy'],
      category: 'Document Management',
      rating: 4.9,
      users: '4,000+',
      color: 'from-violet-500 to-purple-500'
    },
    {
      name: 'AI Website Optimizer',
      href: '/micro-saas/ai-website-optimizer',
      icon: Globe,
      description: 'Automated website performance optimization and SEO improvements',
      price: '$79/month',
      originalPrice: '$200-1000/month',
      features: ['Performance Monitoring', 'SEO Optimization', 'A/B Testing', 'Speed Enhancement'],
      benefits: ['Improve page speed by 50%', 'Better SEO rankings', 'Higher conversion rates'],
      category: 'Web Development',
      rating: 4.7,
      users: '9,000+',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '100,000+', icon: Users },
    { label: 'Cost Savings', value: '$50M+', icon: DollarSign },
    { label: 'Time Saved', value: '1M+ hours', icon: Clock },
    { label: 'Success Rate', value: '99.5%', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8">
            <Zap className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful AI Tools for
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Every Business</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of innovative micro SAAS solutions that automate tasks, 
            boost productivity, and drive growth. Real tools, real results, real value.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#services"
              className="cyber-button inline-flex items-center justify-center"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Perfect Solution
            </h2>
            <p className="text-gray-300 text-lg">
              Each tool is designed to solve specific business challenges with measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">{service.rating} ({service.users} users)</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Link
                      to={service.href}
                      className="flex-1 cyber-button text-center text-sm py-2"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-gray-300 text-lg">
              We deliver real value with proven results and exceptional support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Setup</h3>
              <p className="text-gray-300">
                Get started in minutes with our intuitive setup process. No technical expertise required.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security and compliance. Your data is protected with industry-leading encryption.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">
                Our clients see an average 300% ROI within the first 3 months of implementation.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">
                Leverage cutting-edge AI technology to automate complex tasks and make smarter decisions.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support from our expert team. We're here when you need us.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Award-Winning</h3>
              <p className="text-gray-300">
                Recognized by industry leaders for innovation and excellence in AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call: (302) 464-0950
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
