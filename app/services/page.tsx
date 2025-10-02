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
    // AI Services
    {
      title: 'AI Data Analytics Platform',
      description: 'Transform data into actionable insights with predictive modeling and real-time dashboards',
      icon: '📊',
      category: 'AI Services',
      pricing: '$5,000 - $50,000/month',
      features: [
        'Predictive Analytics & Forecasting',
        'Real-time Business Intelligence',
        'Machine Learning Model Development',
        'Data Visualization & Reporting',
        'Custom Analytics Solutions',
        'Multi-source Data Integration',
        'Automated Report Generation'
      ],
      benefits: [
        '89% improvement in decision-making speed',
        'Average 156% ROI within 6 months',
        'Real-time insights across all business units'
      ],
      href: '/services/ai-data-analytics'
    },
    {
      title: 'AI Workflow Automation Suite',
      description: 'Automate business processes with intelligent workflow design and smart triggers',
      icon: '⚡',
      category: 'AI Services',
      pricing: '$3,000 - $25,000/month',
      features: [
        'Process Automation Design',
        'Intelligent Document Processing',
        'Business Rule Engine Development',
        'Workflow Optimization',
        'Integration & Orchestration',
        'Smart Task Routing',
        'Automated Compliance Monitoring'
      ],
      benefits: [
        '75% reduction in manual processes',
        '$2.3M average cost savings per client',
        '99.9% process accuracy'
      ],
      href: '/services/ai-workflow-automation'
    },
    {
      title: 'AI Virtual Assistant Platform',
      description: '24/7 intelligent customer support with natural language processing',
      icon: '🤖',
      category: 'AI Services',
      pricing: '$2,000 - $15,000/month',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Intelligent Routing',
        'Sentiment Analysis',
        'Continuous Learning Systems',
        'Voice & Text Integration',
        'Custom Knowledge Base'
      ],
      benefits: [
        '90% customer satisfaction rate',
        '60% reduction in support costs',
        '24/7 availability across all channels'
      ],
      href: '/services/ai-virtual-assistant'
    },
    {
      title: 'Autonomous Business Operations',
      description: 'Self-managing AI systems that operate entire business processes autonomously',
      icon: '🧠',
      category: 'AI Services',
      pricing: '$10,000 - $100,000/month',
      features: [
        'Autonomous Process Management',
        'Predictive Maintenance',
        'Intelligent Resource Allocation',
        'Self-healing Systems',
        'Continuous Optimization',
        'Real-time Decision Making',
        'Adaptive Learning Algorithms'
      ],
      benefits: [
        '95% operational efficiency improvement',
        '$50M+ cost savings for enterprise clients',
        'Zero-downtime operations'
      ],
      href: '/services/autonomous-operations'
    },
    {
      title: 'Generative AI Solutions',
      description: 'Create, innovate, and generate novel solutions with cutting-edge generative intelligence',
      icon: '✨',
      category: 'AI Services',
      pricing: '$4,000 - $30,000/month',
      features: [
        'Content Generation Systems',
        'Creative AI Applications',
        'Multimodal Generation',
        'Adaptive Learning Systems',
        'Innovation Automation',
        'Custom Model Training',
        'Intellectual Property Protection'
      ],
      benefits: [
        '300% increase in content production',
        '80% reduction in creative development time',
        'Unlimited scalability'
      ],
      href: '/services/generative-ai'
    },

    // Micro SaaS Services
    {
      title: 'Healthcare Appointment Scheduling SaaS',
      description: 'Complete appointment management system for hospitals and clinics with patient data management',
      icon: '🏥',
      category: 'Micro SaaS',
      pricing: '$99 - $999/month',
      features: [
        'Online Appointment Booking',
        'Patient Data Management',
        'Medical History Tracking',
        'Doctor Recommendations',
        'Virtual Consultation Support',
        'Payment Processing',
        'Insurance Verification'
      ],
      benefits: [
        '40% reduction in no-shows',
        '50% improvement in patient satisfaction',
        'Streamlined administrative processes'
      ],
      href: '/services/healthcare-scheduling-saas'
    },
    {
      title: 'AI-Powered Content Creation Tool',
      description: 'Generate and optimize email subject lines, headlines, and marketing content with AI',
      icon: '✍️',
      category: 'Micro SaaS',
      pricing: '$49 - $499/month',
      features: [
        'Email Subject Line Generator',
        'Article Headline Optimization',
        'A/B Testing Automation',
        'Content Performance Analytics',
        'SEO Optimization',
        'Brand Voice Consistency',
        'Multi-language Support'
      ],
      benefits: [
        '200% increase in email open rates',
        '150% improvement in content engagement',
        '75% reduction in content creation time'
      ],
      href: '/services/ai-content-creation'
    },
    {
      title: 'Remote Work Collaboration Hub',
      description: 'Integrated platform combining video conferencing, messaging, and project management',
      icon: '💼',
      category: 'Micro SaaS',
      pricing: '$29 - $299/month',
      features: [
        'Video Conferencing Integration',
        'Team Messaging Platform',
        'Project Management Tools',
        'File Sharing & Collaboration',
        'Time Tracking',
        'Screen Sharing',
        'Meeting Recording'
      ],
      benefits: [
        '35% increase in team productivity',
        '60% reduction in meeting overhead',
        'Seamless remote collaboration'
      ],
      href: '/services/remote-collaboration-hub'
    },
    {
      title: 'AI Inventory Management System',
      description: 'Smart inventory tracking with predictive analytics and automated reordering',
      icon: '📦',
      category: 'Micro SaaS',
      pricing: '$199 - $1,999/month',
      features: [
        'Real-time Inventory Tracking',
        'Predictive Demand Forecasting',
        'Automated Reordering',
        'Multi-location Management',
        'Supplier Integration',
        'Cost Optimization',
        'Reporting & Analytics'
      ],
      benefits: [
        '30% reduction in inventory costs',
        '95% reduction in stockouts',
        'Automated supply chain optimization'
      ],
      href: '/services/ai-inventory-management'
    },
    {
      title: 'AI Customer Journey Analytics',
      description: 'Track and optimize customer interactions across all touchpoints with AI insights',
      icon: '🛤️',
      category: 'Micro SaaS',
      pricing: '$149 - $1,499/month',
      features: [
        'Customer Journey Mapping',
        'Behavioral Analytics',
        'Conversion Optimization',
        'Personalization Engine',
        'Churn Prediction',
        'ROI Attribution',
        'Real-time Insights'
      ],
      benefits: [
        '45% improvement in conversion rates',
        '60% reduction in customer churn',
        '360-degree customer view'
      ],
      href: '/services/customer-journey-analytics'
    },

    // IT Services
    {
      title: 'Cloud Migration & DevOps',
      description: 'Seamless cloud transitions and optimized DevOps practices for modern infrastructure',
      icon: '☁️',
      category: 'IT Services',
      pricing: '$5,000 - $100,000/project',
      features: [
        'Cloud Architecture Design',
        'Migration Strategy & Execution',
        'CI/CD Pipeline Development',
        'Infrastructure as Code',
        'Monitoring & Observability',
        'Security Implementation',
        'Cost Optimization'
      ],
      benefits: [
        '50% reduction in infrastructure costs',
        '99.9% uptime guarantee',
        'Automated deployment processes'
      ],
      href: '/services/cloud-migration'
    },
    {
      title: 'Enterprise AI Integration',
      description: 'Strategic AI implementation guidance for enterprise-scale digital transformation',
      icon: '🎯',
      category: 'IT Services',
      pricing: '$10,000 - $500,000/project',
      features: [
        'AI Strategy Development',
        'Technology Roadmap Planning',
        'Change Management',
        'ROI Optimization',
        'Compliance & Governance',
        'Legacy System Integration',
        'Training & Support'
      ],
      benefits: [
        'Average 200% ROI within 12 months',
        'Complete digital transformation',
        'Future-proof technology stack'
      ],
      href: '/services/ai-consulting'
    },
    {
      title: 'Cybersecurity & AI Security',
      description: 'Advanced security solutions powered by AI for comprehensive threat protection',
      icon: '🛡️',
      category: 'IT Services',
      pricing: '$3,000 - $50,000/month',
      features: [
        'AI-Powered Threat Detection',
        'Security Orchestration',
        'Vulnerability Assessment',
        'Incident Response Automation',
        'Compliance Management',
        'Penetration Testing',
        'Security Training'
      ],
      benefits: [
        '99.9% threat detection accuracy',
        'Zero security breaches guarantee',
        'Automated compliance reporting'
      ],
      href: '/services/ai-security'
    },
    {
      title: 'Custom Micro SaaS Development',
      description: 'Custom micro SaaS solutions designed for specific business needs and rapid deployment',
      icon: '🔧',
      category: 'IT Services',
      pricing: '$15,000 - $150,000/project',
      features: [
        'Rapid Prototype Development',
        'Scalable Architecture Design',
        'API Development & Integration',
        'User Experience Optimization',
        'Performance Monitoring',
        'Multi-tenant Architecture',
        'Payment Integration'
      ],
      benefits: [
        '6-month average time to market',
        'Scalable to millions of users',
        'Custom business logic implementation'
      ],
      href: '/services/micro-saas'
    },
    {
      title: 'AI Model Development & Training',
      description: 'Custom AI model development, training, and deployment for specific business use cases',
      icon: '🧪',
      category: 'IT Services',
      pricing: '$25,000 - $500,000/project',
      features: [
        'Custom Model Architecture',
        'Data Preparation & Cleaning',
        'Model Training & Optimization',
        'Performance Tuning',
        'Deployment & Scaling',
        'Continuous Learning',
        'Model Monitoring'
      ],
      benefits: [
        'Industry-specific AI solutions',
        'Superior accuracy vs. generic models',
        'Continuous improvement capabilities'
      ],
      href: '/services/ai-model-development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            AI & IT Services
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Transform your business with cutting-edge AI solutions, micro SaaS development, 
            and enterprise IT services that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From AI-powered analytics to autonomous business operations, we provide 
              end-to-end technology solutions that deliver measurable results.
            </p>
          </div>

          {/* Service Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
              All Services
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm sm:text-base">
              AI Services
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm sm:text-base">
              Micro SaaS
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm sm:text-base">
              IT Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-300 group"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                    service.category === 'AI Services' ? 'bg-purple-100 text-purple-800' :
                    service.category === 'Micro SaaS' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                
                <div className="mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">{service.pricing}</span>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs sm:text-sm text-gray-500 italic">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Proven Benefits:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline text-sm sm:text-base"
                  >
                    <span>Learn More</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-flex items-center justify-center border border-blue-600 text-blue-600 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across All Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI, Micro SaaS, and IT services deliver measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700 font-semibold">Efficiency Improvement</p>
              <p className="text-sm text-gray-600 mt-2">Average client performance boost across AI services</p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
              <p className="text-gray-700 font-semibold">Cost Savings Generated</p>
              <p className="text-sm text-gray-600 mt-2">Enterprise clients save millions annually</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">200%</div>
              <p className="text-gray-700 font-semibold">Average ROI</p>
              <p className="text-sm text-gray-600 mt-2">Within first year of AI implementation</p>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">750+</div>
              <p className="text-gray-700 font-semibold">Projects Delivered</p>
              <p className="text-sm text-gray-600 mt-2">Successful implementations worldwide</p>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
              <div className="text-3xl font-bold text-cyan-600 mb-2">99.9%</div>
              <p className="text-gray-700 font-semibold">Uptime Guarantee</p>
              <p className="text-sm text-gray-600 mt-2">For all cloud and SaaS solutions</p>
            </div>
            <div className="text-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <p className="text-gray-700 font-semibold">Support Available</p>
              <p className="text-sm text-gray-600 mt-2">Round-the-clock technical assistance</p>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl">
              <div className="text-3xl font-bold text-pink-600 mb-2">6 Months</div>
              <p className="text-gray-700 font-semibold">Average Time to Market</p>
              <p className="text-sm text-gray-600 mt-2">For custom micro SaaS solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful project delivery and maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Analysis</h3>
              <p className="text-gray-600">Comprehensive assessment of your current systems, requirements, and opportunities for improvement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Design</h3>
              <p className="text-gray-600">Custom solution design and implementation strategy tailored to your specific business needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">Agile development and deployment with continuous testing and optimization throughout the process.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">Ongoing monitoring, support, and optimization to ensure continued performance and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive AI, Micro SaaS, and IT solutions can accelerate your growth and drive innovation
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📞</div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-blue-200 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✉️</div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-200 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📍</div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-blue-200">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
            <a
              href="https://ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Visit Website
            </a>
          </div>

          {/* Service Categories Quick Links */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Quick Service Access</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#ai-services" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                AI Services
              </a>
              <a href="#micro-saas" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Micro SaaS
              </a>
              <a href="#it-services" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                IT Services
              </a>
              <a href="/case-studies" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}