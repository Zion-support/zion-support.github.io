'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter;
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    // AI Services;
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true;
    },
    {
      icon: Brain,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns and intelligent optimization.',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', '24/7 Support'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language'],
      price: 'Starting at $149/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance'],
      price: 'Starting at $1,999/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and algorithmic trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance'],
      price: 'Starting at $1,499/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines and dynamic pricing.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    
    // Cloud Services;
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true;
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and data integrity.',
      features: ['Zero Downtime', 'Data Integrity', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions with threat detection and compliance management.',
      features: ['Threat Detection', 'Compliance Management', 'Access Control', 'Data Encryption', 'Monitoring'],
      price: 'Starting at $599/month',
      category: 'Cloud Services'
    },
    {
      icon: Cloud,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration'],
      price: 'Starting at $799/month',
      category: 'Cloud Services'
    },
    
    // Cybersecurity;
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance', 'Threat Intelligence'],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      popular: true;
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with AI-powered threat detection and automated response.',
      features: ['24/7 Monitoring', 'AI Threat Detection', 'Automated Response', 'Incident Management', 'Compliance Reporting'],
      price: 'Starting at $499/month',
      category: 'Cybersecurity'
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and strengthen your defenses.',
      features: ['Vulnerability Assessment', 'Social Engineering Tests', 'Network Security', 'Web Application Testing', 'Reporting'],
      price: 'Starting at $2,999/assessment',
      category: 'Cybersecurity'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated monitoring and reporting solutions.',
      features: ['Regulatory Compliance', 'Automated Monitoring', 'Audit Trails', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'Cybersecurity'
    },
    
    // Data Analytics;
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting', 'Predictive Modeling'],
      price: 'Starting at $599/month',
      category: 'Data Analytics',
      popular: true;
    },
    {
      icon: BarChart3,
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with scalable big data processing and analytics platforms.',
      features: ['Data Processing', 'Real-time Analytics', 'Scalable Infrastructure', 'Machine Learning', 'Data Lakes'],
      price: 'Starting at $1,299/month',
      category: 'Data Analytics'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions with interactive dashboards and automated reporting.',
      features: ['Interactive Dashboards', 'Automated Reports', 'Data Integration', 'Self-service Analytics', 'Mobile Access'],
      price: 'Starting at $899/month',
      category: 'Data Analytics'
    },
    
    // Mobile Development;
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: true;
    },
    {
      icon: Smartphone,
      title: 'Mobile App Maintenance',
      description: 'Ongoing maintenance and updates for your mobile applications with performance optimization.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Feature Enhancements', 'App Store Management'],
      price: 'Starting at $299/month',
      category: 'Mobile Development'
    },
    
    // Database Services;
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance and reliability.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'Starting at $399/month',
      category: 'Database Services',
      popular: true;
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Seamless database migration with zero downtime and data integrity preservation.',
      features: ['Zero Downtime', 'Data Integrity', 'Performance Optimization', 'Testing', 'Documentation'],
      price: 'Starting at $1,999/migration',
      category: 'Database Services'
    },
    
    // Automation;
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation solutions and RPA.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration', 'Monitoring', 'Optimization'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true;
    },
    {
      icon: Zap,
      title: 'IT Automation',
      description: 'Automate IT operations with intelligent monitoring, deployment, and maintenance solutions.',
      features: ['Infrastructure Automation', 'Deployment Automation', 'Monitoring', 'Self-healing', 'Cost Optimization'],
      price: 'Starting at $799/month',
      category: 'Automation'
    },
    
    // Web Development;
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization', 'SEO'],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: true;
    },
    {
      icon: Globe,
      title: 'E-commerce Development',
      description: 'Custom e-commerce solutions with advanced features and integrations.',
      features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Optimization'],
      price: 'Starting at $1,999/month',
      category: 'Web Development'
    },
    
    // IT Services;
    {
      icon: Database,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise environments.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,499/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions'],
      price: 'Starting at $999/month',
      category: 'IT Services'
    },
    {
      icon: BarChart3,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training'],
      price: 'Starting at $299/hour',
      category: 'IT Services'
    }
  ];

  const categories = [
    'All',
    'AI Services',
    'Cloud Services',
    'Cybersecurity',
    'Data Analytics',
    'Mobile Development',
    'Database Services',
    'Automation',
    'Web Development',
    'IT Services'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet></Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Our Services;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4"></section>
          <div className="max-w-6xl mx-auto"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"></div>
              <div className="flex flex-col md:flex-row gap-4 mb-6"></div>
                <div className="flex-1"></div>
                  <div className="relative"></div>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input;
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64"></div>
                  <div className="relative"></div>
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select;
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800"></option>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center"></div>
                {categories.slice(1).map((category) => (
                  <button;
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category;
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="flex justify-between items-center mb-8"></div>
              <h2 className="text-3xl font-bold text-white"></h2>
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300"></span>
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found;
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative"></div>
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium"></div>
                      Popular;
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6"></div>
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0"></div>
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1"></div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2"></span>
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed"></p>
                    {service.description}
                  </p>
                  
                  <div className="mb-6"></div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2"></ul>
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm"></li>
                          +{service.features.length - 4} more features;
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6"></div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3"></div>
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"></button>
                      Get Quote;
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"></button>
                      Learn More;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Get Free Consultation;
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"></button>
                View Portfolio;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
