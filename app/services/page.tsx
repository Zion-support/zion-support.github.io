import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & IT Services | Zion Tech Group - Enterprise Solutions',
  description: 'Comprehensive AI services, micro SaaS solutions, and IT consulting. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT consulting, cloud migration, DevOps, enterprise software, automation',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Data Analytics',
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
      title: 'AI Workflow Automation',
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
      title: 'AI Virtual Assistant',
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
      title: 'Autonomous Business Operations',
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
      title: 'Generative AI Solutions',
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
      title: 'Cloud Migration & DevOps',
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
      title: 'Micro SaaS Development',
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
      title: 'Enterprise AI Consulting',
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
      title: 'Cybersecurity & AI Security',
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
    <div className="text-left">
      {/* Hero Section */}</div>
      <section className="text-left">
        <div className="text-left"></div>
          <h1 className="text-left">
            AI & IT Services
          </h1>
          <p className="text-left">
            Transform your business with 27+ cutting-edge AI solutions, micro SaaS development, 
            and enterprise IT services that drive growth and innovation. From AI content generation 
            to autonomous business operations, we deliver comprehensive technology solutions.
          </p>
          <div className="text-left"></div>
            <a
              href="tel:+13024640950"
              className="text-left"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-left"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="text-left">
        <div className="text-left"></div>
          <div className="text-left"></div>
            <h2 className="text-left">
              Our Comprehensive Services
            </h2>
            <p className="text-left">
              From AI-powered analytics to autonomous business operations, we provide 
              27+ comprehensive technology solutions that deliver measurable results. 
              Our innovative micro SaaS platforms and enterprise AI systems transform 
              businesses across industries.
            </p>
          </div>

          <div className="text-left">
            {services.map((service, index) => (</div>
              <div
                key={index}
                className="text-left"
              ></div>
                <div className="text-left">
                  {service.icon}</div>
                </div>
                <h3 className="text-left">
                  {service.title}
                </h3>
                <p className="text-left">
                  {service.description}
                </p>
                <ul className="text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-left">
                      <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">"
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />"
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="text-left"
                >
                  <span>Learn More</span>
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">"
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />"
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="text-left">
        <div className="text-left"></div>
          <div className="text-left"></div>
            <h2 className="text-left">
              Proven Results
            </h2>
            <p className="text-left">
              Our clients achieve remarkable improvements across key business metrics
            </p>
          </div>

          <div className="text-left"></div>
            <div className="text-left"></div>
              <div className="text-left">89%</div>"
              <p className="text-left">Efficiency Improvement</p>"
              <p className="text-left">Average client performance boost</p>"
            </div>
            <div className="text-left"></div>
              <div className="text-left">$2.3B</div>"
              <p className="text-left">Cost Savings Generated</p>"
              <p className="text-left">Across all client implementations</p>"
            </div>
            <div className="text-left"></div>
              <div className="text-left">156%</div>"
              <p className="text-left">Average ROI</p>"
              <p className="text-left">Within first year of implementation</p>"
            </div>
            <div className="text-left"></div>
              <div className="text-left">500+</div>"
              <p className="text-left">Projects Delivered</p>"
              <p className="text-left">Successful implementations worldwide</p>"
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="text-left">
        <div className="text-left"></div>
          <div className="text-left"></div>
            <h2 className="text-left">
              Our Proven Process
            </h2>
            <p className="text-left">
              We follow a systematic approach to ensure successful project delivery and maximum ROI
            </p>
          </div>

          <div className="text-left"></div>
            <div className="text-left"></div>
              <div className="text-left">1</div>"
              <h3 className="text-left">Discovery & Analysis</h3>"
              <p className="text-left">Comprehensive assessment of your current systems, requirements, and opportunities for improvement.</p>"
            </div>
            <div className="text-left"></div>
              <div className="text-left">2</div>"
              <h3 className="text-left">Strategy & Design</h3>"
              <p className="text-left">Custom solution design and implementation strategy tailored to your specific business needs.</p>"
            </div>
            <div className="text-left"></div>
              <div className="text-left">3</div>"
              <h3 className="text-left">Implementation</h3>"
              <p className="text-left">Agile development and deployment with continuous testing and optimization throughout the process.</p>"
            </div>
            <div className="text-left"></div>
              <div className="text-left">4</div>"
              <h3 className="text-left">Optimization</h3>"
              <p className="text-left">Ongoing monitoring, support, and optimization to ensure continued performance and growth.</p>"
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="text-left">
        <div className="text-left"></div>
          <div className="text-left"></div>
            <h2 className="text-left">
              Transparent Pricing & Market Rates
            </h2>
            <p className="text-left">
              Competitive pricing with industry-standard rates. Get started with our flexible service packages.
            </p>
          </div>

          <div className="text-left">
            {/* Starter Package */}</div>
            <div className="text-left"></div>
              <div className="text-left"></div>
                <h3 className="text-left">Starter Package</h3>
                <div className="text-left">$2,499</div>
                <p className="text-left">Perfect for small businesses</p>
              </div>
              <ul className="text-left">
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI Content Generator (Basic)
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email Marketing Automation
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  5,000 words/month
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email Support
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Starter Package Inquiry"
                className="text-left"
              >
                Get Started
              </a>
            </div>

            {/* Professional Package */}
            <div className="text-left"></div>
              <div className="text-left"></div>
                <span className="text-left">Most Popular</span>
              </div>
              <div className="text-left"></div>
                <h3 className="text-left">Professional Package</h3>
                <div className="text-left">$7,999</div>
                <p className="text-left">Ideal for growing businesses</p>
              </div>
              <ul className="text-left">
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI Content & Image Generator
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud Migration Services
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  25,000 words/month
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority Support
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Business Intelligence Dashboard
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Professional Package Inquiry"
                className="text-left"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Package */}
            <div className="text-left"></div>
              <div className="text-left"></div>
                <h3 className="text-left">Enterprise Package</h3>
                <div className="text-left">$19,999</div>
                <p className="text-left">Complete business transformation</p>
              </div>
              <ul className="text-left">
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All AI Services & Solutions
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Autonomous Operations
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited Content Generation
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Dedicated Support
                </li>
                <li className="text-left">
                  <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom AI Development
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Package Inquiry"
                className="text-left"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <div className="text-left"></div>
            <p className="text-left">
              All packages include implementation, training, and 30-day money-back guarantee.
            </p>
            <p className="text-left">
              <strong>Market Average Rates:</strong> AI Content Generation: $29-199/month | 
              Cloud Migration: $2,999-15,999 | Custom Development: $150-300/hour
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-left">
        <div className="text-left"></div>
          <h2 className="text-left">
            Ready to Transform Your Business?
          </h2>
          <p className="text-left">
            Let's discuss how our AI and technology solutions can accelerate your growth and drive innovation
          </p>
          
          {/* Contact Information */}
          <div className="text-left"></div>
            <h3 className="text-left">Get in Touch</h3>
            <div className="text-left"></div>
              <div className="text-left"></div>
                <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+13024640950" className="text-left">+1 302 464 0950</a>
              </div>
              <div className="text-left"></div>
                <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:kleber@ziontechgroup.com" className="text-left">kleber@ziontechgroup.com</a>
              </div>
              <div className="text-left"></div>
                <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
            <div className="text-left"></div>
              <p className="text-left">
                Visit us at: <a href="https://ziontechgroup.com" className="text-left">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
          <div className="text-left"></div>
            <a
              href="tel:+13024640950"
              className="text-left"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-left"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}