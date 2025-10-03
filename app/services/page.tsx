import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title= 'AI & IT Services | Zion Tech Group - Enterprise Solutions',
  description: 'Comprehensive AI services, micro SaaS solutions, and IT consulting. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT consulting, cloud migration, DevOps, enterprise software, automation',
};

export default function ServicesPage() {
  const services = [
    {
      title= 'AI Data Analytics',
      description: 'Transform data into actionable insights with predictive modeling and real-time dashboards',
      icon: '📊',
      features: [
        'Predictive Analytics & Forecasting',
        'Real-time Business Intelligence',
        'Machine Learning Model Development',
        'Data Visualization & Reporting',
        'Custom Analytics Solutions'
      ],
      href: '/services/ai-data-analytics'
    },
    {
      title= 'AI Workflow Automation',
      description: 'Automate business processes with intelligent workflow design and smart triggers',
      icon: '⚡',
      features: [
        'Process Automation Design',
        'Intelligent Document Processing',
        'Business Rule Engine Development',
        'Workflow Optimization',
        'Integration & Orchestration'
      ],
      href: '/services/ai-workflow-automation'
    },
    {
      title= 'AI Virtual Assistant',
      description: '24/7 intelligent customer support with natural language processing',
      icon: '🤖',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Intelligent Routing',
        'Sentiment Analysis',
        'Continuous Learning Systems'
      ],
      href: '/services/ai-virtual-assistant'
    },
    {
      title= 'Autonomous Business Operations',
      description: 'Self-managing AI systems that operate entire business processes autonomously',
      icon: '🧠',
      features: [
        'Autonomous Process Management',
        'Predictive Maintenance',
        'Intelligent Resource Allocation',
        'Self-healing Systems',
        'Continuous Optimization'
      ],
      href: '/services/autonomous-operations'
    },
    {
      title= 'Generative AI Solutions',
      description: 'Create, innovate, and generate novel solutions with cutting-edge generative intelligence',
      icon: '✨',
      features: [
        'Content Generation Systems',
        'Creative AI Applications',
        'Multimodal Generation',
        'Adaptive Learning Systems',
        'Innovation Automation'
      ],
      href: '/services/generative-ai'
    },
    {
      title= 'Cloud Migration & DevOps',
      description: 'Seamless cloud transitions and optimized DevOps practices for modern infrastructure',
      icon: '☁️',
      features: [
        'Cloud Architecture Design',
        'Migration Strategy & Execution',
        'CI/CD Pipeline Development',
        'Infrastructure as Code',
        'Monitoring & Observability'
      ],
      href: '/services/cloud-migration'
    },
    {
      title= 'Micro SaaS Development',
      description: 'Custom micro SaaS solutions designed for specific business needs and rapid deployment',
      icon: '🔧',
      features: [
        'Rapid Prototype Development',
        'Scalable Architecture Design',
        'API Development & Integration',
        'User Experience Optimization',
        'Performance Monitoring'
      ],
      href: '/services/micro-saas'
    },
    {
      title= 'Enterprise AI Consulting',
      description: 'Strategic AI implementation guidance for enterprise-scale digital transformation',
      icon: '🎯',
      features: [
        'AI Strategy Development',
        'Technology Roadmap Planning',
        'Change Management',
        'ROI Optimization',
        'Compliance & Governance'
      ],
      href: '/services/ai-consulting'
    },
    {
      title= 'Cybersecurity & AI Security',
      description: 'Advanced security solutions powered by AI for comprehensive threat protection',
      icon: '🛡️',
      features: [
        'AI-Powered Threat Detection',
        'Security Orchestration',
        'Vulnerability Assessment',
        'Incident Response Automation',
        'Compliance Management'
      ],
      href: '/services/ai-security'
    },
    {
      title: 'AI Content Generator',
      description: 'Automated content creation with GPT-4 powered systems for blogs, social media, and marketing',
      icon: '✍️',
      features: [
        'Automated Blog Post Generation',
        'Social Media Content Creation',
        'SEO-Optimized Content',
        'Multi-language Support',
        'Content Strategy Automation'
      ],
      href: '/services/ai-content-generator'
    },
    {
      title: 'AI Image Generator',
      description: 'Custom image creation for marketing, branding, and content using advanced AI models',
      icon: '🎨',
      features: [
        'Custom Brand Imagery',
        'Marketing Visual Creation',
        'Product Photography Enhancement',
        'Social Media Graphics',
        'Logo Design & Branding'
      ],
      href: '/services/ai-image-generator'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Voice-activated business automation with natural language processing and speech recognition',
      icon: '🎤',
      features: [
        'Voice Command Processing',
        'Natural Language Understanding',
        'Multi-language Support',
        'Business Process Automation',
        'Integration with Existing Systems'
      ],
      href: '/services/ai-voice-assistant'
    },
    {
      title: 'AI Email Marketing',
      description: 'Intelligent email campaigns with personalization, automation, and performance optimization',
      icon: '📧',
      features: [
        'Automated Campaign Creation',
        'Personalization Engine',
        'A/B Testing & Optimization',
        'Performance Analytics',
        'Lead Generation Automation'
      ],
      href: '/services/ai-email-marketing'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and cost optimization',
      icon: '☁️',
      features: [
        'Zero-Downtime Migration',
        'Cost Optimization Analysis',
        'Security & Compliance Assessment',
        'Performance Monitoring',
        '24/7 Support & Maintenance'
      ],
      href: '/services/cloud-migration-services'
    },
    {
      title: 'API Development',
      description: 'Custom RESTful and GraphQL APIs with comprehensive documentation and testing',
      icon: '🔌',
      features: [
        'RESTful API Development',
        'GraphQL Implementation',
        'API Documentation & Testing',
        'Rate Limiting & Security',
        'Performance Optimization'
      ],
      href: '/services/api-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native iOS and Android applications with modern frameworks and AI integration',
      icon: '📱',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'AI Integration',
        'Performance Optimization',
        'App Store Deployment'
      ],
      href: '/services/mobile-app-development'
    },
    {
      title: 'Database Optimization',
      description: 'Database performance tuning, scaling, and optimization for enterprise applications',
      icon: '🗄️',
      features: [
        'Performance Tuning',
        'Query Optimization',
        'Scaling Strategies',
        'Backup & Recovery',
        'Monitoring & Analytics'
      ],
      href: '/services/database-optimization'
    },
    {
      title: 'Lead Generation Automation',
      description: 'Automated lead capture, nurturing, and conversion optimization systems',
      icon: '🎯',
      features: [
        'Automated Lead Capture',
        'Lead Scoring & Qualification',
        'Nurturing Campaigns',
        'CRM Integration',
        'Conversion Optimization'
      ],
      href: '/services/lead-generation'
    },
    {
      title: 'Financial Analytics Platform',
      description: 'Real-time financial analysis, forecasting, and business intelligence solutions',
      icon: '💰',
      features: [
        'Real-time Financial Analysis',
        'Predictive Forecasting',
        'Risk Assessment',
        'Compliance Reporting',
        'Investment Optimization'
      ],
      href: '/services/financial-analytics'
    },
    {
      title: 'Project Management AI',
      description: 'AI-powered project management with predictive analytics and resource optimization',
      icon: '📋',
      features: [
        'Predictive Project Analytics',
        'Resource Optimization',
        'Risk Assessment',
        'Team Collaboration Tools',
        'Performance Tracking'
      ],
      href: '/services/project-management-ai'
    },
    {
      title: 'Inventory Management System',
      description: 'Real-time inventory tracking with predictive analytics and automated reordering',
      icon: '📦',
      features: [
        'Real-time Inventory Tracking',
        'Predictive Demand Analysis',
        'Automated Reordering',
        'Supply Chain Optimization',
        'Multi-location Management'
      ],
      href: '/services/inventory-management'
    },
    {
      title: 'CRM Integration Services',
      description: 'Seamless integration of customer relationship management systems with AI capabilities',
      icon: '👥',
      features: [
        'CRM System Integration',
        'Data Synchronization',
        'AI-Powered Insights',
        'Automation Workflows',
        'Performance Analytics'
      ],
      href: '/services/crm-integration'
    },
    {
      title: 'Workflow Automation',
      description: 'Business process automation with intelligent workflows and smart triggers',
      icon: '⚙️',
      features: [
        'Process Automation Design',
        'Smart Trigger Systems',
        'Workflow Optimization',
        'Integration Management',
        'Performance Monitoring'
      ],
      href: '/services/workflow-automation'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with AI-powered personalization and analytics',
      icon: '🛒',
      features: [
        'E-commerce Platform Development',
        'AI-Powered Personalization',
        'Payment Gateway Integration',
        'Inventory Management',
        'Analytics & Reporting'
      ],
      href: '/services/ecommerce-solutions'
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'Comprehensive business intelligence with real-time dashboards and predictive analytics',
      icon: '📊',
      features: [
        'Real-time Dashboards',
        'Predictive Analytics',
        'Custom Reporting',
        'Data Visualization',
        'Performance Metrics'
      ],
      href: '/services/business-intelligence'
    },
    {
      title: 'DevOps Automation',
      description: 'Complete DevOps automation with CI/CD pipelines and infrastructure management',
      icon: '🚀',
      features: [
        'CI/CD Pipeline Development',
        'Infrastructure as Code',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Alerting'
      ],
      href: '/services/devops-automation'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics solutions with machine learning and predictive modeling',
      icon: '🔍',
      features: [
        'Machine Learning Models',
        'Predictive Analytics',
        'Data Mining & Insights',
        'Real-time Processing',
        'Custom Algorithm Development'
      ],
      href: '/services/ai-analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">"
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
        <div className="container mx-auto text-center">"
          <h1 className="text-5xl md:text-6xl font-bold mb-6">"
            AI & IT Services
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business with 27+ cutting-edge AI solutions, micro SaaS development, 
            and enterprise IT services that drive growth and innovation. From AI content generation 
            to autonomous business operations, we deliver comprehensive technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">"
        <div className="container mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">"
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
              From AI-powered analytics to autonomous business operations, we provide 
              27+ comprehensive technology solutions that deliver measurable results. 
              Our innovative micro SaaS platforms and enterprise AI systems transform 
              businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">"
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">"
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">"
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">"
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">"
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />"
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">"
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />"
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">"
        <div className="container mx-auto px-6">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">"
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
              Our clients achieve remarkable improvements across key business metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">"
              <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>"
              <p className="text-gray-700 font-semibold">Efficiency Improvement</p>"
              <p className="text-sm text-gray-600 mt-2">Average client performance boost</p>"
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">"
              <div className="text-4xl font-bold text-green-600 mb-2">$2.3B</div>"
              <p className="text-gray-700 font-semibold">Cost Savings Generated</p>"
              <p className="text-sm text-gray-600 mt-2">Across all client implementations</p>"
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">"
              <div className="text-4xl font-bold text-purple-600 mb-2">156%</div>"
              <p className="text-gray-700 font-semibold">Average ROI</p>"
              <p className="text-sm text-gray-600 mt-2">Within first year of implementation</p>"
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">"
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>"
              <p className="text-gray-700 font-semibold">Projects Delivered</p>"
              <p className="text-sm text-gray-600 mt-2">Successful implementations worldwide</p>"
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">"
        <div className="container mx-auto px-6">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">"
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
              We follow a systematic approach to ensure successful project delivery and maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>"
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Analysis</h3>"
              <p className="text-gray-600">Comprehensive assessment of your current systems, requirements, and opportunities for improvement.</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>"
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Design</h3>"
              <p className="text-gray-600">Custom solution design and implementation strategy tailored to your specific business needs.</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>"
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>"
              <p className="text-gray-600">Agile development and deployment with continuous testing and optimization throughout the process.</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>"
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>"
              <p className="text-gray-600">Ongoing monitoring, support, and optimization to ensure continued performance and growth.</p>"
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing & Market Rates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive pricing with industry-standard rates. Get started with our flexible service packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Package */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$2,499</div>
                <p className="text-gray-600">Perfect for small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI Content Generator (Basic)
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email Marketing Automation
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  5,000 words/month
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email Support
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Starter Package Inquiry"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                Get Started
              </a>
            </div>

            {/* Professional Package */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$7,999</div>
                <p className="text-gray-600">Ideal for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI Content & Image Generator
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud Migration Services
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  25,000 words/month
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority Support
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Business Intelligence Dashboard
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Professional Package Inquiry"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                Get Started
              </a>
            </div>

            {/* Enterprise Package */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Package</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$19,999</div>
                <p className="text-gray-600">Complete business transformation</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All AI Services & Solutions
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Autonomous Operations
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited Content Generation
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom AI Development
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Package Inquiry"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block">
                Contact Sales
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              All packages include implementation, training, and 30-day money-back guarantee.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Market Average Rates:</strong> AI Content Generation: $29-199/month | 
              Cloud Migration: $2,999-15,999 | Custom Development: $150-300/hour
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
        <div className="container mx-auto px-6 text-center">"
          <h2 className="text-4xl font-bold mb-4">"
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
            Let's discuss how our AI and technology solutions can accelerate your growth and drive innovation
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center md:col-span-2">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-blue-100">
                Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}