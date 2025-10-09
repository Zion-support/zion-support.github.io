import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, 
  TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, 
  Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, 
  Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, 
  Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, 
  Activity, DollarSign, Zap as Lightning, Target as Crosshair, Shield as Security, 
  Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Monitor, Smartphone as Mobile,
  Laptop, Server, Wifi, Database as DB, Cpu, HardDrive, MemoryStick, Router, 
  Headphones, Mic, Speaker, Printer, Scanner, Keyboard, Mouse, Webcam, 
  Wrench as Tools, Settings as Config, Cog, Gear, Sliders, ToggleLeft, 
  ToggleRight, Power, Battery, Plug, Cable, Wifi as Network, Signal, 
  Radio, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, SignalZero, SignalLow, 
  SignalMedium, SignalHigh, SignalFull, Wifi as WifiIcon, WifiOff as WifiOffIcon
} from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const microSaaSServices = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with AI-driven insights and predictive analytics.',
      icon: BarChart,
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom report generation',
        'Multi-platform integration',
        'Automated alerts',
        'White-label options'
      ],
      benefits: [
        'Increase decision speed by 300%',
        'Reduce manual reporting by 80%',
        'Improve accuracy by 95%',
        'Save 20+ hours weekly'
      ],
      useCases: ['E-commerce', 'SaaS Companies', 'Marketing Agencies', 'Consulting Firms'],
      link: '/micro-saas/analytics-dashboard'
    },
    {
      title: 'Smart Customer Support Bot',
      description: 'AI-powered customer service automation with natural language processing.',
      icon: Bot,
      price: '$149/month',
      features: [
        '24/7 automated support',
        'Multi-language support',
        'Ticket management',
        'Knowledge base integration',
        'Escalation to human agents',
        'Performance analytics'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Increase customer satisfaction by 40%',
        'Handle 10x more inquiries'
      ],
      useCases: ['E-commerce', 'SaaS Platforms', 'Healthcare', 'Financial Services'],
      link: '/micro-saas/support-bot'
    },
    {
      title: 'Automated Social Media Manager',
      description: 'AI-driven social media scheduling, content creation, and engagement optimization.',
      icon: Share2,
      price: '$79/month',
      features: [
        'Content calendar automation',
        'AI content generation',
        'Optimal posting times',
        'Engagement tracking',
        'Hashtag optimization',
        'Multi-platform management'
      ],
      benefits: [
        'Save 15+ hours weekly',
        'Increase engagement by 250%',
        'Grow followers by 180%',
        'Improve brand consistency'
      ],
      useCases: ['Small Businesses', 'Influencers', 'Marketing Agencies', 'E-commerce'],
      link: '/micro-saas/social-manager'
    },
    {
      title: 'Intelligent Email Marketing Suite',
      description: 'AI-powered email campaigns with personalization and automation.',
      icon: Mail,
      price: '$129/month',
      features: [
        'AI content personalization',
        'Behavioral triggers',
        'A/B testing automation',
        'Deliverability optimization',
        'Advanced segmentation',
        'ROI tracking'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Generate 3x more revenue'
      ],
      useCases: ['E-commerce', 'SaaS Companies', 'Non-profits', 'Real Estate'],
      link: '/micro-saas/email-marketing'
    },
    {
      title: 'Smart Inventory Management',
      description: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
      icon: Package,
      price: '$199/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock level optimization',
        'Supplier management',
        'Cost analysis',
        'Multi-location support'
      ],
      benefits: [
        'Reduce stockouts by 85%',
        'Cut inventory costs by 30%',
        'Improve cash flow by 40%',
        'Eliminate manual counting'
      ],
      useCases: ['Retail', 'Manufacturing', 'Wholesale', 'E-commerce'],
      link: '/micro-saas/inventory-management'
    },
    {
      title: 'AI-Powered Lead Scoring',
      description: 'Intelligent lead qualification and scoring to maximize conversion rates.',
      icon: Target,
      price: '$89/month',
      features: [
        'Behavioral analysis',
        'Lead scoring algorithms',
        'Conversion prediction',
        'CRM integration',
        'Automated follow-ups',
        'Performance tracking'
      ],
      benefits: [
        'Increase conversion by 65%',
        'Reduce sales cycle by 40%',
        'Improve lead quality by 80%',
        'Save 10+ hours weekly'
      ],
      useCases: ['B2B Sales', 'Real Estate', 'Insurance', 'Financial Services'],
      link: '/micro-saas/lead-scoring'
    },
    {
      title: 'Smart Document Processor',
      description: 'AI-powered document analysis, extraction, and workflow automation.',
      icon: FileText,
      price: '$159/month',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data validation',
        'Workflow automation',
        'Compliance checking',
        'API integration'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce errors by 95%',
        'Save 25+ hours weekly',
        'Improve compliance by 100%'
      ],
      useCases: ['Legal Firms', 'Accounting', 'Healthcare', 'Insurance'],
      link: '/micro-saas/document-processor'
    },
    {
      title: 'AI-Powered SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, and content optimization.',
      icon: Search,
      price: '$119/month',
      features: [
        'Keyword research automation',
        'Content optimization',
        'Technical SEO analysis',
        'Competitor tracking',
        'Rank monitoring',
        'Performance reporting'
      ],
      benefits: [
        'Increase organic traffic by 200%',
        'Improve rankings by 150%',
        'Save 20+ hours weekly',
        'Boost conversion rates by 35%'
      ],
      useCases: ['Digital Agencies', 'E-commerce', 'Blogs', 'Local Businesses'],
      link: '/micro-saas/seo-optimizer'
    },
    {
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling with automated reminders and optimization.',
      icon: Calendar,
      price: '$69/month',
      features: [
        'Intelligent scheduling',
        'Automated reminders',
        'Time zone handling',
        'Rescheduling automation',
        'Payment integration',
        'Multi-calendar sync'
      ],
      benefits: [
        'Reduce no-shows by 50%',
        'Increase bookings by 80%',
        'Save 15+ hours weekly',
        'Improve customer satisfaction'
      ],
      useCases: ['Healthcare', 'Consulting', 'Beauty Services', 'Education'],
      link: '/micro-saas/appointment-scheduler'
    },
    {
      title: 'AI-Powered Chat Analytics',
      description: 'Advanced chat and conversation analysis with sentiment tracking.',
      icon: MessageSquare,
      price: '$99/month',
      features: [
        'Sentiment analysis',
        'Conversation insights',
        'Performance metrics',
        'Trend identification',
        'Customer journey mapping',
        'Real-time monitoring'
      ],
      benefits: [
        'Improve customer experience by 60%',
        'Identify issues 3x faster',
        'Increase satisfaction by 45%',
        'Reduce churn by 30%'
      ],
      useCases: ['Customer Support', 'Sales Teams', 'Marketing', 'Product Development'],
      link: '/micro-saas/chat-analytics'
    },
    {
      title: 'Smart Expense Tracker',
      description: 'AI-powered expense management with receipt scanning and categorization.',
      icon: Receipt,
      price: '$49/month',
      features: [
        'Receipt scanning',
        'Automatic categorization',
        'Expense approval workflows',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support'
      ],
      benefits: [
        'Save 10+ hours monthly',
        'Reduce errors by 90%',
        'Improve compliance by 100%',
        'Cut processing costs by 70%'
      ],
      useCases: ['Small Businesses', 'Freelancers', 'Consultants', 'Startups'],
      link: '/micro-saas/expense-tracker'
    },
    {
      title: 'AI-Powered Content Generator',
      description: 'Intelligent content creation for blogs, social media, and marketing materials.',
      icon: PenTool,
      price: '$89/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email templates',
        'Product descriptions',
        'SEO optimization',
        'Brand voice consistency'
      ],
      benefits: [
        'Create content 5x faster',
        'Increase engagement by 120%',
        'Save 20+ hours weekly',
        'Improve SEO performance'
      ],
      useCases: ['Content Marketers', 'Bloggers', 'E-commerce', 'Agencies'],
      link: '/micro-saas/content-generator'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 records',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 records',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited records',
        'Full AI capabilities',
        '24/7 support',
        'Custom development',
        'Advanced analytics',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions designed to automate and optimize your business processes. From AI analytics to smart automation tools." />
        <meta name="keywords" content="micro saas, business automation, AI tools, productivity software, business intelligence, customer support automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Powerful, AI-driven micro SAAS tools designed to automate your business processes, 
                boost productivity, and drive growth. Choose from our comprehensive suite of intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each solution is designed to solve specific business challenges with AI-powered automation and intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-cyan-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <TrendingUp className="w-3 h-3 text-purple-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`cyber-card p-8 relative ${tier.popular ? 'border-2 border-cyan-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Our Micro SAAS */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS Solutions?</h2>
              <p className="text-xl text-gray-300">The advantages that make us the preferred choice</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced artificial intelligence drives all our solutions for maximum efficiency</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-300">Deploy and start using our solutions in minutes, not months</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance standards for all solutions</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Settings className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
                <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows</p>
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Proven ROI Results</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our clients consistently see significant returns on their investment in our micro SAAS solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
                  <div className="text-gray-300">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300">Accuracy Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">60%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free Demo
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

export default MicroSaaSPage;