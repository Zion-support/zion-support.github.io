'use client';
import React from 'react';
import { Cpu, BarChart, Users, Code, Mail, Smartphone, Search, FileText, Calendar, CheckSquare, Sparkles, Target, Globe, Database, Shield, TrendingUp, Settings, ArrowRight, Star, CheckCircle, Zap, Brain, Cloud, Lock } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const MicroSaasPage: React.FC = () => {
  const microSaasCategories = [
    {
      category: "Productivity & Business Tools",
      description: "AI-powered tools to boost productivity and streamline business operations",
      services: [
        {
          name: "AI Writing Assistant Pro",
          description: "Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates and style guides.",
          features: ["50+ writing templates", "Grammar & style checking", "Tone optimization", "Multi-language support"],
          pricing: "$29/month",
          icon: Code,
          color: "text-blue-400",
          popular: true,
          trial: "7-day free trial"
        },
        {
          name: "Smart Analytics Dashboard",
          description: "Real-time business analytics with AI insights, automated reports, and predictive forecasting for data-driven decisions.",
          features: ["Real-time analytics", "Predictive forecasting", "Custom dashboards", "Automated reports"],
          pricing: "$49/month",
          icon: BarChart,
          color: "text-green-400",
          trial: "14-day free trial"
        },
        {
          name: "AI Scheduler Pro",
          description: "Intelligent scheduling with calendar optimization, meeting coordination, time management, and conflict resolution.",
          features: ["Smart scheduling", "Calendar optimization", "Meeting coordination", "Time tracking"],
          pricing: "$19/month",
          icon: Calendar,
          color: "text-purple-400",
          trial: "7-day free trial"
        },
        {
          name: "Expense Tracker AI",
          description: "AI-powered expense management with receipt scanning, categorization, budget insights, and financial reporting.",
          features: ["Receipt scanning", "Auto categorization", "Budget insights", "Financial reports"],
          pricing: "$15/month",
          icon: TrendingUp,
          color: "text-yellow-400",
          trial: "30-day free trial"
        },
        {
          name: "Task Manager Pro",
          description: "Advanced task management with AI prioritization, team collaboration, progress tracking, and deadline management.",
          features: ["AI prioritization", "Team collaboration", "Progress tracking", "Deadline alerts"],
          pricing: "$39/month",
          icon: CheckSquare,
          color: "text-indigo-400",
          trial: "14-day free trial"
        },
        {
          name: "CRM Lite",
          description: "Lightweight CRM with AI lead scoring, contact management, sales pipeline automation, and customer insights.",
          features: ["AI lead scoring", "Contact management", "Sales pipeline", "Customer insights"],
          pricing: "$59/month",
          icon: Users,
          color: "text-pink-400",
          trial: "7-day free trial"
        }
      ]
    },
    {
      category: "Marketing & Sales Tools",
      description: "AI-driven marketing and sales automation tools to grow your business",
      services: [
        {
          name: "AI Email Marketing Suite",
          description: "Automated email campaigns with AI optimization, personalization, A/B testing, and advanced analytics for maximum ROI.",
          features: ["AI optimization", "Personalization", "A/B testing", "Advanced analytics"],
          pricing: "$79/month",
          icon: Mail,
          color: "text-purple-400",
          popular: true,
          trial: "14-day free trial"
        },
        {
          name: "AI Design Studio",
          description: "Create stunning graphics, logos, and marketing materials with AI-powered design tools and templates.",
          features: ["AI design tools", "Logo generator", "Template library", "Brand consistency"],
          pricing: "$35/month",
          icon: Sparkles,
          color: "text-pink-400",
          trial: "7-day free trial"
        },
        {
          name: "Landing Page Builder AI",
          description: "Build high-converting landing pages with AI optimization, A/B testing, and conversion tracking capabilities.",
          features: ["AI optimization", "A/B testing", "Conversion tracking", "Mobile responsive"],
          pricing: "$29/month",
          icon: Globe,
          color: "text-blue-400",
          trial: "14-day free trial"
        },
        {
          name: "SEO Optimizer Pro",
          description: "AI-powered SEO analysis and optimization with keyword research, content suggestions, and ranking tracking.",
          features: ["SEO analysis", "Keyword research", "Content suggestions", "Ranking tracking"],
          pricing: "$49/month",
          icon: Search,
          color: "text-green-400",
          trial: "7-day free trial"
        },
        {
          name: "Ad Campaign Manager",
          description: "Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and other platforms.",
          features: ["Multi-platform ads", "AI optimization", "Budget management", "Performance tracking"],
          pricing: "$99/month",
          icon: Target,
          color: "text-yellow-400",
          trial: "14-day free trial"
        },
        {
          name: "Social Media Manager AI",
          description: "AI-driven social media management with content creation, scheduling, engagement tracking, and performance analytics.",
          features: ["Content creation", "Auto scheduling", "Engagement tracking", "Performance analytics"],
          pricing: "$45/month",
          icon: Globe,
          color: "text-orange-400",
          trial: "7-day free trial"
        }
      ]
    },
    {
      category: "Developer Tools",
      description: "AI-powered development tools for modern software development",
      services: [
        {
          name: "AI Code Assistant",
          description: "AI-powered code completion, debugging, optimization, and documentation for multiple programming languages.",
          features: ["Code completion", "Debugging help", "Code optimization", "Auto documentation"],
          pricing: "$39/month",
          icon: Code,
          color: "text-cyan-400",
          popular: true,
          trial: "14-day free trial"
        },
        {
          name: "API Builder Pro",
          description: "Create and manage APIs with AI assistance, documentation generation, testing tools, and monitoring.",
          features: ["API development", "Auto documentation", "Testing suite", "Performance monitoring"],
          pricing: "$59/month",
          icon: Settings,
          color: "text-indigo-400",
          trial: "7-day free trial"
        },
        {
          name: "Bug Tracker AI",
          description: "Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.",
          features: ["AI issue detection", "Auto prioritization", "Resolution suggestions", "Team collaboration"],
          pricing: "$25/month",
          icon: Shield,
          color: "text-red-400",
          trial: "14-day free trial"
        },
        {
          name: "Doc Generator AI",
          description: "Automatically generate technical documentation, API docs, and user guides from code with AI assistance.",
          features: ["Auto documentation", "API docs", "User guides", "Code analysis"],
          pricing: "$19/month",
          icon: FileText,
          color: "text-purple-400",
          trial: "7-day free trial"
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      description: "Specialized AI tools for specific industries and use cases",
      services: [
        {
          name: "AI Recruitment Assistant",
          description: "Streamline hiring with AI-powered resume screening, candidate matching, interview scheduling, and assessment tools.",
          features: ["Resume screening", "Candidate matching", "Interview scheduling", "Skills assessment"],
          pricing: "$199/month",
          icon: Users,
          color: "text-green-400",
          trial: "14-day free trial"
        },
        {
          name: "Medical Records Manager",
          description: "AI-powered medical record management with patient data analysis, diagnosis assistance, and compliance tracking.",
          features: ["Patient data analysis", "Diagnosis assistance", "Compliance tracking", "Secure storage"],
          pricing: "$299/month",
          icon: Shield,
          color: "text-blue-400",
          trial: "30-day free trial"
        },
        {
          name: "AI Accounting Assistant",
          description: "Automated accounting with AI-powered bookkeeping, tax preparation, financial analysis, and compliance monitoring.",
          features: ["Auto bookkeeping", "Tax preparation", "Financial analysis", "Compliance monitoring"],
          pricing: "$149/month",
          icon: BarChart,
          color: "text-yellow-400",
          trial: "14-day free trial"
        },
        {
          name: "Property Management AI",
          description: "Complete property management solution with tenant screening, rent optimization, maintenance scheduling, and analytics.",
          features: ["Tenant screening", "Rent optimization", "Maintenance scheduling", "Property analytics"],
          pricing: "$179/month",
          icon: Globe,
          color: "text-indigo-400",
          trial: "7-day free trial"
        },
        {
          name: "Legal Document Manager",
          description: "AI-powered legal document management with contract analysis, compliance tracking, and automated legal research.",
          features: ["Contract analysis", "Compliance tracking", "Legal research", "Document automation"],
          pricing: "$249/month",
          icon: FileText,
          color: "text-purple-400",
          trial: "14-day free trial"
        },
        {
          name: "Online Learning Platform",
          description: "AI-powered educational platform with personalized learning paths, content generation, and progress tracking.",
          features: ["Personalized learning", "Content generation", "Progress tracking", "Assessment tools"],
          pricing: "$99/month",
          icon: Brain,
          color: "text-pink-400",
          trial: "30-day free trial"
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "50+ Ready-to-Use Tools",
      description: "Comprehensive suite of AI-powered micro SAAS applications",
      icon: Cpu,
      color: "text-cyan-400"
    },
    {
      title: "Free Trials Available",
      description: "Try any tool risk-free with our generous trial periods",
      icon: Star,
      color: "text-yellow-400"
    },
    {
      title: "No Setup Required",
      description: "Start using tools immediately with zero configuration",
      icon: Zap,
      color: "text-green-400"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support for all micro SAAS tools",
      icon: Shield,
      color: "text-blue-400"
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools"
        description="Discover our comprehensive suite of 50+ AI-powered micro SAAS solutions. From productivity tools to industry-specific applications, transform your business with ready-to-use AI tools."
        keywords={['micro saas', 'AI tools', 'business software', 'productivity tools', 'AI applications', 'SaaS solutions', 'business automation']}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SAAS Solutions">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              50+ AI-Powered Business Tools Ready to Use
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS applications. 
              From productivity tools to industry-specific solutions, we have everything you need to automate and optimize your operations.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">AI Tools Available</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </section>

          {/* Services by Category */}
          {microSaasCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                  {category.category}
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className={`quantum-card p-6 ${service.popular ? 'border-2 border-cyan-400' : ''}`}>
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="flex items-center mb-4">
                      <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold text-cyan-400">{service.pricing}</div>
                      {service.trial && (
                        <span className="text-xs text-green-400 font-medium">{service.trial}</span>
                      )}
                    </div>
                    
                    <button className="w-full cyber-button text-sm">
                      Start Free Trial
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <benefit.icon className={`w-12 h-12 ${benefit.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    5 AI Tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Basic Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Standard Features
                  </li>
                </ul>
                <button className="w-full cyber-button">Get Started</button>
              </div>
              
              <div className="quantum-card p-8 text-center border-2 border-cyan-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    20 AI Tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Priority Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Advanced Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    API Access
                  </li>
                </ul>
                <button className="w-full cyber-button">Get Started</button>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    All 50+ AI Tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    24/7 Premium Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom Integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Dedicated Account Manager
                  </li>
                </ul>
                <button className="w-full cyber-button">Contact Sales</button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI Tools?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven business automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Start Free Trial
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;