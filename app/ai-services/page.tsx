'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, CreditCard, PieChart, Mail as MailIcon, Search, Filter, Download, Upload, RefreshCw, Eye, Edit, Trash2, Plus, Minus, X, ChevronRight, ExternalLink, Award, Clock as ClockIcon, Globe as GlobeIcon, Shield as ShieldIcon, Zap as ZapIcon, Microscope, Atom, CircuitBoard, Cpu as CpuIcon, Database as DatabaseIcon, BarChart as BarChartIcon } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-analytics',
      name: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics that predict trends, identify opportunities, and optimize business performance.',
      icon: BarChart,
      price: 'Starting at $2,500/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'Automated report generation',
        'Custom dashboard creation',
        'Machine learning model deployment',
        'Data visualization and storytelling',
        'Anomaly detection',
        'ROI optimization insights'
      ],
      benefits: [
        'Increase revenue by 25-40%',
        'Reduce decision-making time by 70%',
        'Identify new market opportunities',
        'Optimize operational efficiency'
      ],
      useCases: [
        'Sales forecasting and pipeline analysis',
        'Customer behavior prediction',
        'Supply chain optimization',
        'Financial risk assessment',
        'Marketing campaign optimization'
      ],
      targetAudience: 'Enterprise companies, data-driven organizations, C-level executives',
      integration: 'Salesforce, HubSpot, Google Analytics, AWS, Azure, custom databases',
      support: 'Dedicated data scientists, 24/7 monitoring, custom development'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions that streamline workflows, eliminate manual tasks, and improve operational efficiency across your organization.',
      icon: Zap,
      price: 'Starting at $1,800/month',
      features: [
        'Workflow automation design',
        'RPA (Robotic Process Automation)',
        'Document processing and extraction',
        'Email and communication automation',
        'Data entry and validation',
        'Approval process automation',
        'Integration with existing systems',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Reduce operational costs by 50-80%',
        'Eliminate human errors',
        'Improve process speed by 300%',
        'Free up staff for strategic tasks'
      ],
      useCases: [
        'Invoice processing and accounts payable',
        'Customer onboarding automation',
        'HR and payroll processing',
        'Inventory management',
        'Compliance and reporting'
      ],
      targetAudience: 'Mid to large enterprises, operations teams, finance departments',
      integration: 'ERP systems, CRM platforms, document management, email systems',
      support: 'Process consultants, implementation specialists, ongoing optimization'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot & Conversational AI',
      description: 'Advanced conversational AI solutions that provide intelligent customer support, lead qualification, and automated assistance across multiple channels.',
      icon: MessageCircle,
      price: 'Starting at $1,200/month',
      features: [
        'Natural language processing (NLP)',
        'Multi-language support',
        'Voice and text capabilities',
        'Intent recognition and classification',
        'Context-aware conversations',
        'Integration with knowledge bases',
        'Human handoff capabilities',
        'Analytics and conversation insights'
      ],
      benefits: [
        'Reduce support costs by 60-80%',
        'Provide 24/7 customer service',
        'Improve response time by 90%',
        'Increase customer satisfaction'
      ],
      useCases: [
        'Customer support and helpdesk',
        'Lead qualification and nurturing',
        'Sales assistance and product recommendations',
        'Internal employee support',
        'Appointment scheduling and booking'
      ],
      targetAudience: 'E-commerce, SaaS companies, service businesses, healthcare',
      integration: 'Website, mobile apps, Slack, Microsoft Teams, CRM systems',
      support: 'AI specialists, conversation design, continuous training'
    },
    {
      id: 'ai-crm',
      name: 'AI-Powered CRM & Sales Intelligence',
      description: 'Intelligent CRM system that automates lead scoring, predicts customer behavior, and provides actionable sales insights to maximize revenue.',
      icon: Users,
      price: 'Starting at $2,000/month',
      features: [
        'AI-powered lead scoring',
        'Customer behavior prediction',
        'Sales forecasting and pipeline analysis',
        'Automated follow-up sequences',
        'Email and call optimization',
        'Churn prediction and prevention',
        'Upselling and cross-selling recommendations',
        'Performance analytics and reporting'
      ],
      benefits: [
        'Increase sales conversion by 35-50%',
        'Improve lead quality by 40%',
        'Reduce sales cycle time by 30%',
        'Boost customer lifetime value'
      ],
      useCases: [
        'B2B sales pipeline management',
        'Customer relationship building',
        'Lead nurturing and qualification',
        'Sales team performance optimization',
        'Customer retention strategies'
      ],
      targetAudience: 'Sales teams, marketing departments, customer success teams',
      integration: 'Salesforce, HubSpot, Pipedrive, email platforms, phone systems',
      support: 'Sales consultants, AI training, custom model development'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity & Threat Detection',
      description: 'Advanced AI-powered security solutions that detect, prevent, and respond to cyber threats in real-time, protecting your digital assets.',
      icon: Shield,
      price: 'Starting at $3,000/month',
      features: [
        'Real-time threat detection',
        'Behavioral analysis and anomaly detection',
        'Automated incident response',
        'Vulnerability assessment and management',
        'Security orchestration and automation',
        'Compliance monitoring and reporting',
        'Threat intelligence integration',
        '24/7 security monitoring'
      ],
      benefits: [
        'Reduce security incidents by 80%',
        'Improve threat detection accuracy',
        'Minimize response time to threats',
        'Ensure compliance with regulations'
      ],
      useCases: [
        'Network security monitoring',
        'Endpoint protection and detection',
        'Cloud security management',
        'Identity and access management',
        'Compliance and audit preparation'
      ],
      targetAudience: 'Large enterprises, financial institutions, healthcare, government',
      integration: 'SIEM systems, firewalls, endpoint protection, cloud platforms',
      support: 'Security experts, incident response team, compliance specialists'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics & Machine Learning',
      description: 'Comprehensive data analytics platform that leverages machine learning to extract insights, build predictive models, and drive data-driven decisions.',
      icon: Database,
      price: 'Starting at $2,200/month',
      features: [
        'Data ingestion and processing',
        'Machine learning model development',
        'Predictive modeling and forecasting',
        'Data visualization and dashboards',
        'A/B testing and experimentation',
        'Model deployment and monitoring',
        'Data quality and governance',
        'Real-time analytics processing'
      ],
      benefits: [
        'Unlock hidden insights from data',
        'Improve decision-making accuracy',
        'Reduce time to insight by 75%',
        'Scale analytics across organization'
      ],
      useCases: [
        'Customer analytics and segmentation',
        'Predictive maintenance',
        'Fraud detection and prevention',
        'Recommendation systems',
        'Risk modeling and assessment'
      ],
      targetAudience: 'Data teams, analysts, business intelligence professionals',
      integration: 'Data warehouses, cloud platforms, BI tools, databases',
      support: 'Data scientists, ML engineers, analytics consultants'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Specialized AI solutions for healthcare organizations, including medical imaging analysis, patient care optimization, and clinical decision support.',
      icon: Heart,
      price: 'Starting at $4,000/month',
      features: [
        'Medical image analysis and diagnosis',
        'Patient risk stratification',
        'Clinical decision support systems',
        'Drug interaction and allergy checking',
        'Treatment recommendation engines',
        'Health outcome prediction',
        'Electronic health record integration',
        'HIPAA-compliant data processing'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce medical errors',
        'Optimize treatment outcomes',
        'Enhance patient care quality'
      ],
      useCases: [
        'Radiology and medical imaging',
        'Clinical decision support',
        'Patient monitoring and alerting',
        'Drug discovery and development',
        'Population health management'
      ],
      targetAudience: 'Hospitals, clinics, medical research institutions, pharma',
      integration: 'EHR systems, PACS, medical devices, clinical databases',
      support: 'Medical AI specialists, clinical consultants, compliance experts'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech & Financial Services',
      description: 'Advanced AI solutions for financial institutions, including fraud detection, risk assessment, algorithmic trading, and regulatory compliance.',
      icon: DollarSign,
      price: 'Starting at $3,500/month',
      features: [
        'Fraud detection and prevention',
        'Credit risk assessment',
        'Algorithmic trading strategies',
        'Regulatory compliance monitoring',
        'Anti-money laundering (AML)',
        'Know Your Customer (KYC) automation',
        'Real-time transaction monitoring',
        'Financial forecasting and modeling'
      ],
      benefits: [
        'Reduce fraud losses by 70%',
        'Improve risk assessment accuracy',
        'Ensure regulatory compliance',
        'Optimize trading performance'
      ],
      useCases: [
        'Banking and payment processing',
        'Insurance underwriting',
        'Investment management',
        'Regulatory reporting',
        'Customer onboarding'
      ],
      targetAudience: 'Banks, fintech companies, insurance, investment firms',
      integration: 'Core banking systems, payment processors, trading platforms',
      support: 'Financial AI experts, compliance specialists, risk consultants'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation & Marketing',
      description: 'Intelligent content creation platform that generates high-quality marketing materials, social media content, and personalized communications.',
      icon: FileText,
      price: 'Starting at $1,500/month',
      features: [
        'Automated content creation',
        'Multi-language content generation',
        'Brand voice customization',
        'SEO optimization',
        'Content personalization',
        'Social media automation',
        'Email marketing campaigns',
        'Content performance analytics'
      ],
      benefits: [
        'Increase content production by 500%',
        'Improve content engagement by 40%',
        'Reduce content creation costs by 60%',
        'Maintain consistent brand voice'
      ],
      useCases: [
        'Marketing content creation',
        'Social media management',
        'Email marketing campaigns',
        'Product descriptions',
        'Blog and article writing'
      ],
      targetAudience: 'Marketing teams, content creators, agencies, e-commerce',
      integration: 'CMS platforms, social media tools, email marketing, analytics',
      support: 'Content strategists, marketing consultants, brand specialists'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support & Service',
      description: 'Comprehensive AI-powered customer service solution that provides intelligent support, reduces response times, and improves customer satisfaction.',
      icon: MessageCircle,
      price: 'Starting at $1,800/month',
      features: [
        'Intelligent ticket routing',
        'Automated response generation',
        'Sentiment analysis and monitoring',
        'Knowledge base integration',
        'Multi-channel support',
        'Escalation management',
        'Customer satisfaction tracking',
        'Performance analytics and reporting'
      ],
      benefits: [
        'Reduce support costs by 50-70%',
        'Improve response time by 80%',
        'Increase customer satisfaction',
        'Scale support operations efficiently'
      ],
      useCases: [
        'Customer service automation',
        'Technical support assistance',
        'Order and billing support',
        'Product information and FAQs',
        'Complaint resolution'
      ],
      targetAudience: 'Customer service teams, support organizations, e-commerce',
      integration: 'Helpdesk systems, CRM platforms, communication tools',
      support: 'Customer experience specialists, implementation consultants'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: ['Medical AI', 'Patient Care', 'Diagnostic Imaging', 'Drug Discovery'],
      description: 'AI-powered healthcare solutions that improve patient outcomes and operational efficiency.'
    },
    {
      industry: 'Financial Services',
      icon: DollarSign,
      solutions: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Compliance'],
      description: 'Advanced AI solutions for banking, insurance, and financial institutions.'
    },
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      solutions: ['Personalization', 'Inventory Management', 'Customer Service', 'Recommendation Engines'],
      description: 'AI-driven retail solutions that enhance customer experience and boost sales.'
    },
    {
      industry: 'Manufacturing',
      icon: Cpu,
      solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain', 'Process Optimization'],
      description: 'Industrial AI solutions that optimize manufacturing processes and reduce costs.'
    },
    {
      industry: 'Education',
      icon: GraduationCap,
      solutions: ['Personalized Learning', 'Student Analytics', 'Content Generation', 'Assessment'],
      description: 'AI-powered educational tools that personalize learning and improve outcomes.'
    },
    {
      industry: 'Real Estate',
      icon: Home,
      solutions: ['Property Valuation', 'Market Analysis', 'Lead Generation', 'Virtual Tours'],
      description: 'AI solutions that streamline real estate operations and improve decision-making.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,200-2,000/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic AI implementation',
        'Standard integrations',
        'Email support',
        'Monthly reporting',
        'Up to 5 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,000-4,000/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Advanced AI capabilities',
        'Custom integrations',
        'Priority support',
        'Real-time monitoring',
        'Up to 25 users',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,000+/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Custom development',
        '24/7 phone support',
        'On-site implementation',
        'Unlimited users',
        'Dedicated AI team',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      role: 'CTO',
      company: 'MedTech Solutions',
      content: 'The AI healthcare solutions have revolutionized our diagnostic capabilities. We\'ve seen a 30% improvement in diagnostic accuracy and significantly reduced processing time.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Operations',
      company: 'Global Finance Corp',
      content: 'Our AI fraud detection system has prevented over $2M in fraudulent transactions in just 6 months. The ROI has been incredible.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Jennifer Chen',
      role: 'Head of Marketing',
      company: 'RetailMax',
      content: 'The AI content generation platform has transformed our marketing operations. We\'re producing 5x more content with better engagement rates.',
      rating: 5,
      avatar: 'JC'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Services & Solutions
            </span>
            <br />
            <span className="text-3xl md:text-5xl">
              for Enterprise Success
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to natural language processing, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Get AI Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">AI Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address your specific business challenges and drive measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Target Audience:</h4>
                  <p className="text-sm text-gray-300 mb-3">{service.targetAudience}</p>
                  <h4 className="text-lg font-semibold text-white mb-2">Integration:</h4>
                  <p className="text-sm text-gray-300">{service.integration}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                  <a
                    href={`/demo?service=${service.id}`}
                    className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions designed for specific industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <div
                key={industry.industry}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{industry.industry}</h3>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible AI Service Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the pricing tier that matches your AI needs and budget. All plans include our core AI capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${
                  tier.popular ? 'ring-2 ring-cyan-400 bg-cyan-400/10' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Choose {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading organizations have transformed their operations with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Schedule a free AI consultation to discover how our solutions can drive growth, 
            improve efficiency, and give you a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;