'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      marketPrice: '$299/month',
      savings: '$100/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-project-manager',
      apiDocs: 'https://api.ziontechgroup.com/ai-project-manager',
      supportEmail: 'ai-pm@ziontechgroup.com'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      marketPrice: '$249/month',
      savings: '$100/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-social-media',
      apiDocs: 'https://api.ziontechgroup.com/ai-social-media',
      supportEmail: 'social-ai@ziontechgroup.com'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '25% faster decisions'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics',
      marketPrice: '$499/month',
      savings: '$200/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-analytics',
      apiDocs: 'https://api.ziontechgroup.com/ai-analytics',
      supportEmail: 'analytics@ziontechgroup.com'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$199/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher click rates'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      marketPrice: '$349/month',
      savings: '$150/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-email',
      apiDocs: 'https://api.ziontechgroup.com/ai-email',
      supportEmail: 'email-ai@ziontechgroup.com'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$249/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      marketPrice: '$399/month',
      savings: '$150/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-support',
      apiDocs: 'https://api.ziontechgroup.com/ai-support',
      supportEmail: 'support-ai@ziontechgroup.com'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Team collaboration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster deployment'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development',
      marketPrice: '$299/month',
      savings: '$120/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-code-review',
      apiDocs: 'https://api.ziontechgroup.com/ai-code-review',
      supportEmail: 'code-ai@ziontechgroup.com'
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing with AI',
      icon: '✍️',
      price: '$129/month',
      features: ['Blog writing', 'Social media posts', 'Email templates', 'Ad copy generation', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['10x content output', '50% time savings', '40% better engagement', 'SEO-optimized content'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content',
      marketPrice: '$199/month',
      savings: '$70/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-content',
      apiDocs: 'https://api.ziontechgroup.com/ai-content',
      supportEmail: 'content-ai@ziontechgroup.com'
    },
    {
      title: 'AI Lead Generation System',
      description: 'Automated lead generation and qualification with AI-powered targeting',
      icon: '🎯',
      price: '$349/month',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration', 'Behavioral tracking', 'Conversion optimization'],
      benefits: ['300% more qualified leads', '60% conversion rate', '80% time savings', 'ROI tracking'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Sales',
      marketPrice: '$599/month',
      savings: '$250/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-leads',
      apiDocs: 'https://api.ziontechgroup.com/ai-leads',
      supportEmail: 'leads-ai@ziontechgroup.com'
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document analysis and data extraction with AI',
      icon: '📄',
      price: '$199/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow automation', 'Template recognition', 'Batch processing'],
      benefits: ['95% accuracy', '90% time savings', 'Error reduction', 'Scalable processing'],
      link: '/ai-document-processing',
      popular: false,
      category: 'Automation',
      marketPrice: '$349/month',
      savings: '$150/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-documents',
      apiDocs: 'https://api.ziontechgroup.com/ai-documents',
      supportEmail: 'docs-ai@ziontechgroup.com'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization recommendations',
      icon: '🔍',
      price: '$179/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Performance monitoring'],
      benefits: ['50% better rankings', '40% more organic traffic', 'ROI tracking', 'Automated reports'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing',
      marketPrice: '$299/month',
      savings: '$120/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-seo',
      apiDocs: 'https://api.ziontechgroup.com/ai-seo',
      supportEmail: 'seo-ai@ziontechgroup.com'
    },
    {
      title: 'AI E-commerce Assistant',
      description: 'AI-powered e-commerce optimization and management tools',
      icon: '🛒',
      price: '$399/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'Personalization', 'Sales forecasting'],
      benefits: ['35% increase in sales', '25% higher AOV', '40% better conversion', 'Reduced cart abandonment'],
      link: '/ai-ecommerce-solutions',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$699/month',
      savings: '$300/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-ecommerce',
      apiDocs: 'https://api.ziontechgroup.com/ai-ecommerce',
      supportEmail: 'ecommerce-ai@ziontechgroup.com'
    },
    {
      title: 'AI Financial Analyzer',
      description: 'AI-powered financial analysis and forecasting for businesses',
      icon: '💰',
      price: '$299/month',
      features: ['Financial forecasting', 'Risk analysis', 'Budget optimization', 'Cash flow management', 'Investment insights', 'Compliance monitoring'],
      benefits: ['30% better financial decisions', '25% cost reduction', 'Risk mitigation', 'Automated reporting'],
      link: '/ai-financial-analyzer',
      popular: false,
      category: 'Finance',
      marketPrice: '$499/month',
      savings: '$200/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-finance',
      apiDocs: 'https://api.ziontechgroup.com/ai-finance',
      supportEmail: 'finance-ai@ziontechgroup.com'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and effects',
      icon: '🎬',
      price: '$249/month',
      features: ['AI video editing', 'Auto-captioning', 'Voice synthesis', 'Background removal', 'Template library', 'Brand customization'],
      benefits: ['80% faster video production', 'Professional quality', 'Cost-effective', 'No technical skills needed'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Media',
      marketPrice: '$399/month',
      savings: '$150/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-video',
      apiDocs: 'https://api.ziontechgroup.com/ai-video',
      supportEmail: 'video-ai@ziontechgroup.com'
    },
    {
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content creation and accessibility',
      icon: '🎤',
      price: '$199/month',
      features: ['Voice synthesis', 'Emotion control', 'Multi-language support', 'Real-time generation', 'API integration', 'Custom voice training'],
      benefits: ['Natural-sounding voices', 'Accessibility features', 'Content scalability', 'Cost reduction'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Media',
      marketPrice: '$349/month',
      savings: '$150/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-voice',
      apiDocs: 'https://api.ziontechgroup.com/ai-voice',
      supportEmail: 'voice-ai@ziontechgroup.com'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: '⚡',
      price: '$279/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Integration hub', 'Performance monitoring', 'Custom triggers'],
      benefits: ['90% process automation', '60% time savings', 'Error reduction', 'Scalable workflows'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      marketPrice: '$449/month',
      savings: '$170/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-workflow',
      apiDocs: 'https://api.ziontechgroup.com/ai-workflow',
      supportEmail: 'workflow-ai@ziontechgroup.com'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive, AI-powered visualizations',
      icon: '📊',
      price: '$229/month',
      features: ['Interactive charts', 'Real-time updates', 'Custom dashboards', 'Data storytelling', 'Export options', 'Collaboration tools'],
      benefits: ['Better data insights', 'Faster decision making', 'Engaging presentations', 'Data democratization'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      marketPrice: '$399/month',
      savings: '$170/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-viz',
      apiDocs: 'https://api.ziontechgroup.com/ai-viz',
      supportEmail: 'viz-ai@ziontechgroup.com'
    }
  ];

  const categories = [
    { name: 'All', count: microSAASServices.length },
    { name: 'Productivity', count: microSAASServices.filter(s => s.category === 'Productivity').length },
    { name: 'Marketing', count: microSAASServices.filter(s => s.category === 'Marketing').length },
    { name: 'Analytics', count: microSAASServices.filter(s => s.category === 'Analytics').length },
    { name: 'Support', count: microSAASServices.filter(s => s.category === 'Support').length },
    { name: 'Development', count: microSAASServices.filter(s => s.category === 'Development').length },
    { name: 'Content', count: microSAASServices.filter(s => s.category === 'Content').length },
    { name: 'Sales', count: microSAASServices.filter(s => s.category === 'Sales').length },
    { name: 'Automation', count: microSAASServices.filter(s => s.category === 'Automation').length },
    { name: 'E-commerce', count: microSAASServices.filter(s => s.category === 'E-commerce').length },
    { name: 'Finance', count: microSAASServices.filter(s => s.category === 'Finance').length },
    { name: 'Media', count: microSAASServices.filter(s => s.category === 'Media').length }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Powerful, affordable AI-powered micro SAAS tools designed for modern businesses. Save up to $300/month with our comprehensive suite of intelligent solutions."
        keywords={['micro saas', 'AI tools', 'business automation', 'productivity tools', 'AI solutions']}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Micro SAAS Solutions">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Powerful AI-Powered Tools for Modern Businesses
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              Save up to $300/month per tool while achieving unprecedented productivity and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">16+</div>
                <div className="text-sm text-gray-300">AI-Powered Tools</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2,400+</div>
                <div className="text-sm text-gray-300">Monthly Savings</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="cyber-card px-6 py-3 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-white font-medium">{category.name}</span>
                  <span className="text-cyan-400 ml-2">({category.count})</span>
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-400 neon-text">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">
                      Save {service.savings}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a 
                      href={service.link} 
                      className="w-full cyber-button px-4 py-3 text-center block transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a 
                        href={service.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-3 py-2 text-sm text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Demo
                      </a>
                      <a 
                        href={service.apiDocs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-3 py-2 text-sm text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                      >
                        API Docs
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;