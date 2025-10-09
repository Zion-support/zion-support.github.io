import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      description: 'Affordable, powerful AI-driven tools for modern businesses. Start from $79/month.',
      icon: '💻',
      link: '/micro-saas',
      features: ['12+ Ready-to-use Tools', 'AI-Powered Automation', 'Instant Setup', '24/7 Support'],
      price: 'Starting at $79/month',
      popular: true
    },
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including ML, NLP, and computer vision.',
      icon: '🤖',
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'AI Marketing Solutions',
      description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation.',
      icon: '📢',
      link: '/ai-marketing',
      features: ['Ad Optimization', 'Content Generation', 'Social Media AI', 'Email Marketing AI'],
      price: 'Starting at $199/month',
      popular: true
    },
    {
      title: 'AI Business Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities.',
      icon: '⚙️',
      link: '/ai-automation',
      features: ['Workflow Automation', 'Process Intelligence', 'Decision Automation', 'Exception Handling'],
      price: 'Starting at $399/month'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      icon: '🏥',
      link: '/ai-healthcare',
      features: ['Medical Imaging AI', 'Drug Discovery', 'Personalized Medicine', 'Clinical Decision Support'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'AI Fintech Solutions',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      icon: '💰',
      link: '/ai-fintech',
      features: ['Algorithmic Trading', 'Fraud Detection', 'Credit Scoring', 'Wealth Management'],
      price: 'Starting at $1,499/month'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud, security, DevOps, and infrastructure.',
      icon: '⚙️',
      link: '/it-services',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'DevOps & CI/CD', 'Database Administration'],
      price: 'Starting at $1,200/month'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing capabilities for complex problem solving.',
      icon: '⚛️',
      link: '/quantum-computing',
      features: ['Quantum Algorithms', 'Quantum Security', 'Optimization', 'Simulation'],
      price: 'Custom Pricing'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations.',
      icon: '🔄',
      link: '/autonomous-systems',
      features: ['Self-Healing Infrastructure', 'Automated Operations', 'Intelligent Monitoring', 'Adaptive Learning'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics for strategic decision making.',
      icon: '📊',
      link: '/business-intelligence',
      features: ['Real-time Analytics', 'Data Visualization', 'Reporting', 'Dashboard Creation'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized applications, smart contracts, and Web3 solutions.',
      icon: '🔗',
      link: '/blockchain',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'Web3 Applications'],
      price: 'Starting at $8,000/project'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices, edge analytics, and industrial IoT solutions.',
      icon: '📱',
      link: '/iot-edge',
      features: ['Device Management', 'Edge Analytics', 'Industrial IoT', 'Smart Cities'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Robotics & Automation',
      description: 'Intelligent robots, RPA, and advanced automation solutions.',
      icon: '🤖',
      link: '/robotics',
      features: ['RPA Solutions', 'Industrial Robots', 'Service Robots', 'AI-Powered Automation'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced AI-powered analytics platform providing real-time insights and predictive modeling.',
      icon: '📊',
      link: '/ai-data-analytics',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Business Intelligence', 'Data Visualization'],
      price: 'Starting at $1,299/month'
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions with threat detection, SOC services, and compliance management.',
      icon: '🔒',
      link: '/ai-cybersecurity',
      features: ['AI Threat Detection', 'SOC Services', 'Vulnerability Assessment', 'Compliance Automation'],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent automation platform that streamlines business processes with AI-powered workflows.',
      icon: '🤖',
      link: '/ai-workflow-automation',
      features: ['Process Automation', 'RPA Solutions', 'Workflow Optimization', 'Exception Handling'],
      price: 'Starting at $399/month'
    },
    {
      title: 'AI Cloud Infrastructure',
      description: 'AI-powered cloud services including migration, optimization, security, and monitoring.',
      icon: '☁️',
      link: '/ai-cloud-infrastructure',
      features: ['Cloud Migration', 'Cost Optimization', 'DevOps Automation', 'Security Management'],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'AI E-commerce Solutions',
      description: 'Revolutionary AI-powered e-commerce platform with personalization, inventory management, and automated customer service.',
      icon: '🛒',
      link: '/ai-ecommerce-solutions',
      features: ['AI Personalization', 'Inventory Management', 'Payment Processing', 'Marketing Automation'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'AI Mobile App Development',
      description: 'Complete mobile app development with AI integration, machine learning capabilities, and intelligent features.',
      icon: '📱',
      link: '/ai-mobile-app-development',
      features: ['Native Development', 'AI Integration', 'Cross-platform', 'Analytics'],
      price: 'Starting at $4,999/project'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection and compliance.',
      icon: '🛡️',
      link: '/cybersecurity',
      features: ['Threat Detection', 'Penetration Testing', 'Zero Trust Security', 'SOC Services'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content 10x faster with our advanced AI platform.',
      icon: '✍️',
      link: '/ai-content-generation',
      features: ['10x Faster Content', '50+ Languages', 'SEO Optimized', 'Brand Voice Training'],
      price: 'Starting at $29/month',
      popular: true
    },
    {
      title: 'AI Customer Support',
      description: 'Provide 24/7 intelligent customer support with AI that never sleeps.',
      icon: '💬',
      link: '/ai-customer-support',
      features: ['24/7 AI Chat', '90% Faster Response', 'Multi-language', 'Human Handoff'],
      price: 'Starting at $199/month',
      popular: true
    },
    {
      title: 'AI Sales Automation',
      description: 'Automate your sales process and close more deals with AI-powered tools.',
      icon: '📈',
      link: '/ai-sales-automation',
      features: ['Lead Scoring', 'Auto Follow-ups', 'Predictive Analytics', 'Performance Optimization'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform your data into stunning visual insights with AI-powered analytics.',
      icon: '📊',
      link: '/ai-data-visualization',
      features: ['Interactive Dashboards', 'AI Insights', '50+ Chart Types', 'Real-time Updates'],
      price: 'Starting at $149/month'
    }
  ];

  const additionalServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud transformation with zero downtime and cost optimization.',
      icon: '☁️',
      features: ['Zero Downtime', 'Cost Optimization', 'Security Enhancement', 'Scalability'],
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection and incident response.',
      icon: '🔒',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management']
    },
    {
      title: 'DevOps & Automation',
      description: 'Automated deployment pipelines and infrastructure as code solutions.',
      icon: '🔄',
      features: ['CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring & Alerting', 'Testing Automation']
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions.',
      icon: '📈',
      features: ['Data Warehouse Design', 'ETL Development', 'Dashboard Creation', 'Predictive Modeling']
    },
    {
      title: 'API Development',
      description: 'Custom API development and third-party integration services.',
      icon: '🔌',
      features: ['RESTful APIs', 'GraphQL Development', 'Third-party Integrations', 'API Documentation']
    },
    {
      title: 'Consulting',
      description: 'Expert guidance and strategic planning for digital transformation.',
      icon: '💡',
      features: [
        'Strategic Planning',
        'Technology Assessment',
        'Implementation Support',
        'Training',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive AI, IT, and micro SAAS solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive range of technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for specific business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom solution recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
