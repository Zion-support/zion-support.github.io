'use client';
import React from 'react';
import { BarChart, Palette, CreditCard, ShieldCheck, Settings2, CheckCircle, Star, Zap, Brain, Users, Mail, Calendar, FileText, Search, Bot, Camera, Music, Video, ShoppingCart, Calculator, Target, MessageSquare, Eye, Cpu, Lock, TrendingUp, DollarSign, Phone, MapPin, ArrowRight, Sparkles, Award, Globe, Database, Code, Smartphone, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Truck, Home, Heart, Stethoscope, GraduationCap, Briefcase, Factory, Car, Plane, Ship, Train, Gamepad2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const categories = [
    {
      title: 'AI Productivity Suite',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      services: [
        { 
          name: 'AI Project Manager Pro', 
          price: '$99/month', 
          description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment',
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
          benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
          link: '/ai-project-manager',
          popular: true,
          category: 'Productivity'
        },
        { 
          name: 'AI Task Manager Pro', 
          price: '$49/month', 
          description: 'Smart task management with AI prioritization, deadline prediction, and automated workflow optimization',
          features: ['AI prioritization', 'Deadline prediction', 'Workflow automation', 'Team coordination', 'Progress tracking', 'Smart notifications'],
          benefits: ['60% task completion rate', '50% time savings', '90% deadline accuracy', '25% stress reduction'],
          link: '/task-manager-pro',
          popular: true,
          category: 'Productivity'
        },
        { 
          name: 'AI Workflow Automation', 
          price: '$79/month', 
          description: 'Automate complex business processes with AI-powered workflow optimization and intelligent decision making',
          features: ['Process automation', 'Smart routing', 'Decision trees', 'Integration hub', 'Performance analytics', 'Custom triggers'],
          benefits: ['80% process efficiency', '90% error reduction', '65% time savings', '100% compliance'],
          link: '/ai-workflow-automation',
          popular: true,
          category: 'Productivity'
        },
        { 
          name: 'AI Scheduler Pro', 
          price: '$39/month', 
          description: 'Intelligent scheduling with AI-powered optimization, conflict resolution, and smart meeting suggestions',
          features: ['Smart scheduling', 'Conflict resolution', 'Meeting optimization', 'Calendar sync', 'Time zone handling', 'Resource booking'],
          benefits: ['70% scheduling efficiency', '50% meeting conflicts reduced', '40% time saved', '95% accuracy'],
          link: '/ai-scheduler',
          popular: false,
          category: 'Productivity'
        },
        { 
          name: 'AI Document Processor', 
          price: '$59/month', 
          description: 'Intelligent document processing with AI-powered extraction, classification, and automated workflows',
          features: ['Document extraction', 'Smart classification', 'OCR processing', 'Data validation', 'Workflow automation', 'API integration'],
          benefits: ['90% accuracy', '75% time savings', 'Zero manual errors', 'Instant processing'],
          link: '/ai-document-processing',
          popular: false,
          category: 'Productivity'
        },
        { 
          name: 'AI Password Manager Pro', 
          price: '$19/month', 
          description: 'Advanced password management with AI-powered security analysis and breach monitoring',
          features: ['Password generation', 'Security analysis', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Team sharing'],
          benefits: ['100% security', 'Zero breaches', 'Easy management', 'Team collaboration'],
          link: '/ai-password-manager',
          popular: false,
          category: 'Productivity'
        }
      ]
    },
    {
      title: 'AI Content & Marketing',
      icon: MessageSquare,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      services: [
        { 
          name: 'AI Writing Assistant Pro', 
          price: '$49/month', 
          description: 'Advanced AI writing assistant with content optimization, SEO analysis, and brand voice consistency',
          features: ['Content generation', 'SEO optimization', 'Brand voice', 'Grammar check', 'Tone analysis', 'Multi-language'],
          benefits: ['300% content output', '85% SEO score', '50% time savings', 'Consistent quality'],
          link: '/ai-writing-assistant',
          popular: true,
          category: 'Content'
        },
        { 
          name: 'AI Content Generator', 
          price: '$79/month', 
          description: 'Comprehensive content creation platform with AI-powered ideation, writing, and optimization',
          features: ['Content ideation', 'Multi-format support', 'SEO optimization', 'Plagiarism check', 'Performance tracking', 'Team collaboration'],
          benefits: ['500% content volume', '90% engagement rate', '60% time savings', 'Zero plagiarism'],
          link: '/ai-content-generation',
          popular: true,
          category: 'Content'
        },
        { 
          name: 'AI Social Media Manager', 
          price: '$89/month', 
          description: 'Complete social media management with AI-powered content creation, scheduling, and analytics',
          features: ['Content creation', 'Smart scheduling', 'Engagement analysis', 'Hashtag optimization', 'Multi-platform', 'Performance tracking'],
          benefits: ['200% engagement', '70% time savings', '85% reach increase', 'Automated posting'],
          link: '/ai-social-media-manager',
          popular: true,
          category: 'Marketing'
        },
        { 
          name: 'AI Email Marketing Pro', 
          price: '$69/month', 
          description: 'Intelligent email marketing with AI-powered segmentation, personalization, and campaign optimization',
          features: ['Smart segmentation', 'Personalization', 'A/B testing', 'Send time optimization', 'Subject line AI', 'Performance analytics'],
          benefits: ['40% open rates', '60% click rates', '35% conversion', 'Automated campaigns'],
          link: '/ai-email-marketing',
          popular: true,
          category: 'Marketing'
        },
        { 
          name: 'AI SEO Optimizer Pro', 
          price: '$99/month', 
          description: 'Advanced SEO optimization with AI-powered keyword research, content analysis, and ranking prediction',
          features: ['Keyword research', 'Content optimization', 'Ranking prediction', 'Competitor analysis', 'Technical SEO', 'Performance tracking'],
          benefits: ['150% organic traffic', '85% keyword ranking', '40% conversion rate', 'Automated optimization'],
          link: '/ai-seo-optimizer',
          popular: true,
          category: 'Marketing'
        },
        { 
          name: 'AI Lead Generation Pro', 
          price: '$149/month', 
          description: 'Intelligent lead generation with AI-powered prospecting, qualification, and nurturing automation',
          features: ['Prospect identification', 'Lead scoring', 'Automated outreach', 'CRM integration', 'Follow-up automation', 'Performance analytics'],
          benefits: ['300% more leads', '85% qualification rate', '50% conversion', 'Automated nurturing'],
          link: '/ai-lead-generation',
          popular: true,
          category: 'Marketing'
        }
      ]
    },
    {
      title: 'AI Business Solutions',
      icon: BarChart,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      services: [
        { 
          name: 'AI CRM Intelligence', 
          price: '$199/month', 
          description: 'Advanced CRM with AI-powered customer insights, predictive analytics, and automated sales processes',
          features: ['Customer insights', 'Predictive analytics', 'Sales automation', 'Pipeline management', 'Communication tracking', 'Performance metrics'],
          benefits: ['45% sales increase', '60% customer retention', '35% deal closure', 'Automated follow-ups'],
          link: '/ai-crm',
          popular: true,
          category: 'Business'
        },
        { 
          name: 'AI Financial Analyzer Pro', 
          price: '$299/month', 
          description: 'Comprehensive financial analysis with AI-powered forecasting, risk assessment, and investment optimization',
          features: ['Financial forecasting', 'Risk analysis', 'Investment optimization', 'Budget planning', 'Cash flow analysis', 'Compliance monitoring'],
          benefits: ['95% forecast accuracy', '40% risk reduction', '25% cost savings', 'Automated reporting'],
          link: '/ai-financial-analyzer',
          popular: true,
          category: 'Finance'
        },
        { 
          name: 'AI Invoice Generator Pro', 
          price: '$49/month', 
          description: 'Automated invoice creation with AI-powered pricing, tax calculations, and payment tracking',
          features: ['Auto-invoice generation', 'Smart pricing', 'Tax calculations', 'Payment tracking', 'Client management', 'Multi-currency'],
          benefits: ['90% time savings', 'Zero errors', 'Faster payments', 'Professional invoices'],
          link: '/ai-invoice-generator',
          popular: true,
          category: 'Finance'
        },
        { 
          name: 'AI Expense Tracker Pro', 
          price: '$29/month', 
          description: 'Smart expense management with AI-powered categorization, receipt processing, and budget optimization',
          features: ['Receipt scanning', 'Smart categorization', 'Budget tracking', 'Tax preparation', 'Expense reports', 'Mobile app'],
          benefits: ['80% time savings', '100% accuracy', 'Tax compliance', 'Budget control'],
          link: '/expense-tracker',
          popular: false,
          category: 'Finance'
        },
        { 
          name: 'AI E-commerce Assistant', 
          price: '$179/month', 
          description: 'Complete e-commerce optimization with AI-powered product recommendations, pricing, and customer service',
          features: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer service', 'Analytics dashboard', 'Multi-platform'],
          benefits: ['35% sales increase', '50% conversion rate', '30% cost reduction', 'Automated operations'],
          link: '/ai-ecommerce-solutions',
          popular: true,
          category: 'Business'
        },
        { 
          name: 'AI Sales Automation Pro', 
          price: '$249/month', 
          description: 'Intelligent sales automation with AI-powered lead scoring, follow-up sequences, and deal optimization',
          features: ['Lead scoring', 'Automated sequences', 'Deal optimization', 'Pipeline management', 'Performance tracking', 'CRM integration'],
          benefits: ['50% sales increase', '70% lead conversion', '40% time savings', 'Automated follow-ups'],
          link: '/ai-sales-automation',
          popular: true,
          category: 'Sales'
        }
      ]
    },
    {
      title: 'AI Creative & Media',
      icon: Palette,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      services: [
        { 
          name: 'AI Video Generator Pro', 
          price: '$199/month', 
          description: 'Professional video creation with AI-powered editing, effects, and automated production workflows',
          features: ['Video generation', 'Auto-editing', 'Effects library', 'Voice synthesis', 'Multi-format', 'Brand customization'],
          benefits: ['90% time savings', 'Professional quality', 'Unlimited videos', 'Brand consistency'],
          link: '/ai-video-generation',
          popular: true,
          category: 'Creative'
        },
        { 
          name: 'AI Voice Cloning Studio', 
          price: '$149/month', 
          description: 'Advanced voice synthesis with AI-powered voice cloning, emotion control, and multi-language support',
          features: ['Voice cloning', 'Emotion control', 'Multi-language', 'Real-time synthesis', 'Voice library', 'API integration'],
          benefits: ['Natural voice quality', 'Emotion accuracy', 'Multi-language', 'Real-time processing'],
          link: '/ai-voice-cloning',
          popular: true,
          category: 'Creative'
        },
        { 
          name: 'AI Music Composer Pro', 
          price: '$99/month', 
          description: 'Professional music composition with AI-powered melody generation, arrangement, and production',
          features: ['Melody generation', 'Auto-arrangement', 'Style adaptation', 'Instrument selection', 'Mixing assistance', 'Export options'],
          benefits: ['Unlimited compositions', 'Professional quality', 'Style variety', 'Easy production'],
          link: '/ai-music-composition',
          popular: false,
          category: 'Creative'
        },
        { 
          name: 'AI Fashion Designer Pro', 
          price: '$179/month', 
          description: 'Revolutionary fashion design with AI-powered trend analysis, pattern generation, and virtual try-on',
          features: ['Trend analysis', 'Pattern generation', 'Virtual try-on', 'Color matching', 'Size optimization', '3D modeling'],
          benefits: ['Trend accuracy', 'Design efficiency', 'Customer satisfaction', 'Reduced waste'],
          link: '/ai-fashion-design',
          popular: false,
          category: 'Creative'
        },
        { 
          name: 'AI 3D Generation Studio', 
          price: '$299/month', 
          description: 'Advanced 3D content creation with AI-powered modeling, texturing, and animation generation',
          features: ['3D modeling', 'Auto-texturing', 'Animation generation', 'Lighting optimization', 'Rendering assistance', 'Export options'],
          benefits: ['Professional quality', 'Time efficiency', 'Creative freedom', 'Easy learning'],
          link: '/ai-3d-generation',
          popular: false,
          category: 'Creative'
        },
        { 
          name: 'AI Photo Editor Pro', 
          price: '$79/month', 
          description: 'Professional photo editing with AI-powered enhancement, retouching, and style transfer',
          features: ['Auto-enhancement', 'Smart retouching', 'Style transfer', 'Background removal', 'Color correction', 'Batch processing'],
          benefits: ['Professional results', 'Time savings', 'Easy to use', 'Batch processing'],
          link: '/ai-photo-editor',
          popular: false,
          category: 'Creative'
        }
      ]
    },
    {
      title: 'AI Health & Wellness',
      icon: Heart,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      services: [
        { 
          name: 'AI Healthcare Assistant Pro', 
          price: '$399/month', 
          description: 'Advanced healthcare AI with symptom analysis, treatment recommendations, and patient monitoring',
          features: ['Symptom analysis', 'Treatment recommendations', 'Patient monitoring', 'Medical records', 'Appointment scheduling', 'Emergency alerts'],
          benefits: ['95% accuracy', '24/7 monitoring', 'Early detection', 'Better outcomes'],
          link: '/ai-healthcare',
          popular: true,
          category: 'Health'
        },
        { 
          name: 'AI Fitness Coach Pro', 
          price: '$49/month', 
          description: 'Personalized fitness coaching with AI-powered workout plans, nutrition guidance, and progress tracking',
          features: ['Personalized plans', 'Nutrition guidance', 'Progress tracking', 'Form analysis', 'Goal setting', 'Community features'],
          benefits: ['Better results', 'Personalized approach', 'Motivation boost', 'Progress tracking'],
          link: '/ai-fitness-coach',
          popular: false,
          category: 'Health'
        },
        { 
          name: 'AI Mental Health Companion', 
          price: '$79/month', 
          description: 'AI-powered mental health support with mood tracking, therapy sessions, and wellness recommendations',
          features: ['Mood tracking', 'Therapy sessions', 'Wellness tips', 'Crisis support', 'Progress monitoring', 'Professional referrals'],
          benefits: ['24/7 support', 'Privacy protection', 'Personalized care', 'Early intervention'],
          link: '/ai-mental-health',
          popular: false,
          category: 'Health'
        },
        { 
          name: 'AI Nutrition Planner Pro', 
          price: '$39/month', 
          description: 'Intelligent nutrition planning with AI-powered meal suggestions, dietary analysis, and health optimization',
          features: ['Meal planning', 'Nutritional analysis', 'Dietary restrictions', 'Shopping lists', 'Recipe suggestions', 'Health tracking'],
          benefits: ['Better nutrition', 'Time savings', 'Health optimization', 'Personalized plans'],
          link: '/ai-nutrition-planner',
          popular: false,
          category: 'Health'
        }
      ]
    },
    {
      title: 'AI Development & Security',
      icon: Code,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      services: [
        { 
          name: 'AI Code Review Assistant', 
          price: '$149/month', 
          description: 'Intelligent code review with AI-powered analysis, bug detection, and performance optimization suggestions',
          features: ['Code analysis', 'Bug detection', 'Performance optimization', 'Security scanning', 'Best practices', 'Team collaboration'],
          benefits: ['90% bug reduction', 'Code quality', 'Time savings', 'Team learning'],
          link: '/ai-code-generation',
          popular: true,
          category: 'Development'
        },
        { 
          name: 'AI Mobile App Builder', 
          price: '$299/month', 
          description: 'No-code mobile app development with AI-powered design, functionality, and deployment automation',
          features: ['No-code development', 'AI design', 'Cross-platform', 'App store deployment', 'Analytics integration', 'Custom features'],
          benefits: ['90% faster development', 'No coding required', 'Professional quality', 'Easy deployment'],
          link: '/ai-mobile-app-development',
          popular: true,
          category: 'Development'
        },
        { 
          name: 'AI Cybersecurity Shield', 
          price: '$399/month', 
          description: 'Advanced cybersecurity with AI-powered threat detection, prevention, and automated response systems',
          features: ['Threat detection', 'Automated response', 'Vulnerability scanning', 'Incident management', 'Compliance monitoring', '24/7 monitoring'],
          benefits: ['99.9% protection', 'Real-time response', 'Compliance assurance', 'Peace of mind'],
          link: '/ai-cybersecurity',
          popular: true,
          category: 'Security'
        },
        { 
          name: 'AI Data Analytics Pro', 
          price: '$199/month', 
          description: 'Advanced data analytics with AI-powered insights, predictions, and automated reporting',
          features: ['Data visualization', 'Predictive analytics', 'Automated reports', 'Real-time insights', 'Custom dashboards', 'API integration'],
          benefits: ['Data-driven decisions', 'Predictive insights', 'Time savings', 'Better outcomes'],
          link: '/ai-data-analytics',
          popular: true,
          category: 'Analytics'
        },
        { 
          name: 'AI Data Visualization Pro', 
          price: '$149/month', 
          description: 'Intelligent data visualization with AI-powered chart generation, interactive dashboards, and insights',
          features: ['Auto-chart generation', 'Interactive dashboards', 'Insight extraction', 'Custom visualizations', 'Real-time updates', 'Export options'],
          benefits: ['Better insights', 'Time savings', 'Professional charts', 'Easy sharing'],
          link: '/ai-data-visualization',
          popular: false,
          category: 'Analytics'
        },
        { 
          name: 'AI Customer Support Bot', 
          price: '$99/month', 
          description: 'Intelligent customer support with AI-powered chatbots, ticket routing, and automated resolution',
          features: ['Smart chatbots', 'Ticket routing', 'Automated resolution', 'Multi-language', 'Integration hub', 'Performance analytics'],
          benefits: ['24/7 support', 'Instant responses', 'Cost reduction', 'Customer satisfaction'],
          link: '/ai-customer-support-bot',
          popular: true,
          category: 'Support'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Get started in minutes with our ready-to-use applications. No complex setup or technical expertise required.'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Average 200% productivity increase within 30 days. Our clients see measurable improvements from day one.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all applications. SOC 2 Type II certified with 99.9% uptime guarantee.'
    },
    {
      icon: BarChart,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with flexible pricing. Scale up or down based on your business needs.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that learn and adapt to your business processes for continuous optimization.'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock technical support with dedicated account managers and comprehensive documentation.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 applications',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '1 user account'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: 'month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 25 applications',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Up to 10 user accounts',
        'API access',
        'Custom branding'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited applications',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
        'Unlimited users',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Choose from 100+ ready-to-use AI-powered applications that solve specific business problems. 
            Deploy instantly and start seeing results from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Browse All Solutions
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Solution Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-white text-sm">{service.name}</h4>
                            {service.popular && <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>}
                          </div>
                          <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className={`font-bold ${category.color} text-sm`}>{service.price}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-slate-600 text-gray-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400">+{service.features.length - 3} more</span>
                        )}
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                            <span key={benefitIndex} className="text-xs text-green-400">
                              ✓ {benefit}
                            </span>
                          ))}
                        </div>
                        <a
                          href={service.link}
                          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                        >
                          Learn More <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SAAS Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 ${tier.popular ? 'border-2 border-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="bg-cyan-500 text-white text-center py-1 rounded-t-lg -mt-6 -mx-6 mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {tier.price}
                  <span className="text-lg text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.price === 'Custom' ? '/contact' : '/contact'}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose from our extensive library of AI-powered applications and start seeing results immediately.
              Join thousands of businesses already using our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Browse All Solutions
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p className="flex items-center justify-center gap-4">
                <span className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  kleber@ziontechgroup.com
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  364 E Main St STE 1008, Middletown DE 19709
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;