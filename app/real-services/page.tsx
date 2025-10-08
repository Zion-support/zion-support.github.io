import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Database, Cloud, Lock, BarChart } from 'lucide-react';
import FuturisticDesign from '../components/FuturisticDesign';
import AnimatedBackground from '../components/AnimatedBackground';

const RealServicesPage: React.FC = () => {
  const realServices = [
    // AI & Machine Learning Services
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'cyan',
      services: [
        {
          name: 'Custom AI Model Development',
          description: 'End-to-end machine learning model development tailored to your specific business needs',
          price: '$5,000 - $25,000',
          marketPrice: '$8,000 - $50,000',
          features: [
            'Custom model architecture design',
            'Data preprocessing and feature engineering',
            'Model training and validation',
            'Performance optimization',
            'Deployment and monitoring setup',
            'API integration and documentation'
          ],
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow'],
          benefits: ['40% improvement in prediction accuracy', 'Automated decision making', 'Reduced manual analysis time'],
          deliveryTime: '4-8 weeks',
          popular: true
        },
        {
          name: 'Natural Language Processing Solutions',
          description: 'Advanced NLP services for text analysis, sentiment analysis, and language understanding',
          price: '$3,500 - $18,000',
          marketPrice: '$6,000 - $35,000',
          features: [
            'Text classification and sentiment analysis',
            'Named entity recognition',
            'Language translation services',
            'Chatbot and virtual assistant development',
            'Document processing and extraction',
            'Real-time text analysis'
          ],
          technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers'],
          benefits: ['100x faster text processing', 'Improved customer service', 'Automated document insights'],
          deliveryTime: '3-6 weeks'
        },
        {
          name: 'Computer Vision Applications',
          description: 'Image and video analysis, object detection, and visual content understanding solutions',
          price: '$4,500 - $20,000',
          marketPrice: '$7,500 - $40,000',
          features: [
            'Object detection and classification',
            'Facial recognition systems',
            'Video analysis and processing',
            'OCR and document scanning',
            'Quality control automation',
            'Real-time image processing'
          ],
          technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'TensorFlow Lite'],
          benefits: ['Automated visual inspections', 'Enhanced security systems', 'Improved user experience'],
          deliveryTime: '4-8 weeks'
        }
      ]
    },
    // Micro SAAS Solutions
    {
      category: 'Micro SAAS Solutions',
      icon: <Zap className="w-6 h-6" />,
      color: 'purple',
      services: [
        {
          name: 'AI Code Review Assistant',
          description: 'Automated code analysis, bug detection, and security vulnerability scanning',
          price: '$89/month',
          marketPrice: '$150-300/month',
          features: [
            'Automated code review',
            'Security vulnerability detection',
            'Performance optimization suggestions',
            'Code quality metrics',
            'Git integration',
            'Team collaboration tools'
          ],
          technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Custom AI Models'],
          benefits: ['70% reduction in bugs', 'Improved code quality', '10+ hours saved per week'],
          deliveryTime: '1-2 weeks',
          popular: true
        },
        {
          name: 'AI Document Intelligence Platform',
          description: 'Advanced document processing with OCR, data extraction, and intelligent classification',
          price: '$149/month',
          marketPrice: '$200-500/month',
          features: [
            'OCR text extraction',
            'Document classification',
            'Data validation and verification',
            'Workflow automation',
            'Multi-format support',
            'API integration'
          ],
          technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Custom ML Models'],
          benefits: ['10x faster document processing', 'Eliminated manual data entry', '99.5% accuracy rate'],
          deliveryTime: '2-3 weeks'
        },
        {
          name: 'Smart Analytics Dashboard',
          description: 'Real-time business intelligence with predictive analytics and automated insights',
          price: '$99/month',
          marketPrice: '$150-300/month',
          features: [
            'Real-time data visualization',
            'Predictive analytics',
            'Custom report generation',
            'API integration',
            'Mobile responsive design',
            'Automated alerts'
          ],
          technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL'],
          benefits: ['40% faster decision making', '80% reduction in manual reporting', 'Early trend identification'],
          deliveryTime: '2-4 weeks'
        },
        {
          name: 'AI Customer Support Bot',
          description: 'Intelligent chatbot with natural language processing and context-aware responses',
          price: '$199/month',
          marketPrice: '$300-600/month',
          features: [
            'Natural language processing',
            'Context-aware responses',
            'Multi-language support',
            'CRM integration',
            'Analytics dashboard',
            'Custom training'
          ],
          technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'Node.js', 'MongoDB'],
          benefits: ['60% reduction in support costs', '24/7 customer service', 'Improved response time'],
          deliveryTime: '3-4 weeks'
        }
      ]
    },
    // IT & Cloud Services
    {
      category: 'IT & Cloud Services',
      icon: <Cloud className="w-6 h-6" />,
      color: 'blue',
      services: [
        {
          name: 'Cloud Migration & Optimization',
          description: 'Seamless cloud transformation with zero downtime and cost optimization',
          price: '$2,500 - $15,000',
          marketPrice: '$5,000 - $30,000',
          features: [
            'Zero-downtime migration',
            'Cost optimization analysis',
            'Security enhancement',
            'Scalability planning',
            'Performance monitoring',
            'Disaster recovery setup'
          ],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes'],
          benefits: ['30% cost reduction', '99.9% uptime', 'Improved scalability'],
          deliveryTime: '2-6 weeks',
          popular: true
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Automated deployment pipelines and infrastructure as code solutions',
          price: '$1,800 - $8,000',
          marketPrice: '$3,000 - $15,000',
          features: [
            'CI/CD pipeline setup',
            'Infrastructure as code',
            'Automated testing',
            'Monitoring and alerting',
            'Security scanning',
            'Deployment automation'
          ],
          technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible'],
          benefits: ['80% faster deployments', 'Reduced human errors', 'Improved reliability'],
          deliveryTime: '2-4 weeks'
        },
        {
          name: 'Database Administration & Optimization',
          description: 'Database design, optimization, and 24/7 monitoring services',
          price: '$1,200 - $5,000',
          marketPrice: '$2,000 - $10,000',
          features: [
            'Database design and architecture',
            'Performance optimization',
            'Backup and recovery',
            'Security hardening',
            '24/7 monitoring',
            'Query optimization'
          ],
          technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
          benefits: ['50% performance improvement', '99.9% uptime', 'Reduced maintenance costs'],
          deliveryTime: '1-3 weeks'
        }
      ]
    },
    // Cybersecurity Services
    {
      category: 'Cybersecurity Solutions',
      icon: <Shield className="w-6 h-6" />,
      color: 'green',
      services: [
        {
          name: 'Advanced Threat Detection & Response',
          description: 'AI-powered security monitoring and automated incident response',
          price: '$2,500 - $12,000',
          marketPrice: '$5,000 - $25,000',
          features: [
            'Real-time threat monitoring',
            'AI-powered threat detection',
            'Automated incident response',
            'Security orchestration',
            'Compliance reporting',
            '24/7 SOC services'
          ],
          technologies: ['SIEM', 'EDR', 'Machine Learning', 'Python', 'Custom AI Models'],
          benefits: ['95% threat prevention', '80% faster response time', 'Reduced security incidents'],
          deliveryTime: '3-6 weeks',
          popular: true
        },
        {
          name: 'Penetration Testing & Vulnerability Assessment',
          description: 'Comprehensive security testing and vulnerability assessment services',
          price: '$1,500 - $8,000',
          marketPrice: '$3,000 - $15,000',
          features: [
            'Network penetration testing',
            'Web application security testing',
            'Mobile app security testing',
            'Social engineering testing',
            'Compliance assessment',
            'Remediation guidance'
          ],
          technologies: ['OWASP', 'Nmap', 'Burp Suite', 'Metasploit', 'Custom Tools'],
          benefits: ['Identified security vulnerabilities', 'Improved security posture', 'Compliance assurance'],
          deliveryTime: '1-3 weeks'
        },
        {
          name: 'Zero Trust Security Implementation',
          description: 'Modern zero trust security architecture implementation and management',
          price: '$3,000 - $15,000',
          marketPrice: '$6,000 - $30,000',
          features: [
            'Identity and access management',
            'Network segmentation',
            'Device trust verification',
            'Data encryption',
            'Continuous monitoring',
            'Policy enforcement'
          ],
          technologies: ['Okta', 'Azure AD', 'Cisco', 'Palo Alto', 'Custom Solutions'],
          benefits: ['Enhanced security posture', 'Reduced attack surface', 'Improved compliance'],
          deliveryTime: '4-8 weeks'
        }
      ]
    },
    // Data & Analytics Services
    {
      category: 'Data & Analytics',
      icon: <BarChart className="w-6 h-6" />,
      color: 'pink',
      services: [
        {
          name: 'Data Warehouse & ETL Solutions',
          description: 'Comprehensive data warehousing and ETL pipeline development',
          price: '$2,000 - $12,000',
          marketPrice: '$4,000 - $25,000',
          features: [
            'Data warehouse design',
            'ETL pipeline development',
            'Data quality management',
            'Real-time data processing',
            'Data governance',
            'Performance optimization'
          ],
          technologies: ['Snowflake', 'BigQuery', 'Apache Airflow', 'dbt', 'Python'],
          benefits: ['Centralized data access', 'Improved data quality', 'Faster insights'],
          deliveryTime: '3-6 weeks',
          popular: true
        },
        {
          name: 'Business Intelligence & Reporting',
          description: 'Advanced analytics dashboards and automated reporting solutions',
          price: '$1,500 - $8,000',
          marketPrice: '$3,000 - $15,000',
          features: [
            'Interactive dashboards',
            'Automated report generation',
            'Data visualization',
            'KPI monitoring',
            'Custom metrics',
            'Mobile access'
          ],
          technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Superset', 'Custom Solutions'],
          benefits: ['Data-driven decisions', 'Automated reporting', 'Improved visibility'],
          deliveryTime: '2-4 weeks'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Real Services & Pricing - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and micro SAAS services with transparent pricing and proven results. Transform your business with our real solutions." />
        <meta name="keywords" content="AI services pricing, micro SAAS solutions, IT services, cybersecurity, data analytics, real pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground variant="particles" intensity="medium" color="cyan" />
        
        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <FuturisticDesign variant="neon" intensity="high" className="rounded-3xl p-12 mb-8">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  Real Services & Pricing
                </h1>
                <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                  Transparent pricing for proven AI, IT, and micro SAAS solutions that deliver real business value
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticDesign variant="gradient" intensity="medium" className="rounded-lg">
                    <a href="/contact" className="inline-block px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300">
                      Get Free Consultation
                    </a>
                  </FuturisticDesign>
                  <FuturisticDesign variant="glass" intensity="medium" className="rounded-lg">
                    <a href="tel:+13024640950" className="inline-block px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300">
                      📞 +1 302 464 0950
                    </a>
                  </FuturisticDesign>
                </div>
              </FuturisticDesign>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {realServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className={`text-${category.color}-400`}>{category.icon}</div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {category.category}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Professional {category.category.toLowerCase()} solutions with transparent pricing and proven results
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <FuturisticDesign 
                      key={serviceIndex} 
                      variant={service.popular ? "neon" : "glass"} 
                      intensity="medium" 
                      className="rounded-xl p-8 hover:scale-105 transition-all duration-300"
                    >
                      {service.popular && (
                        <div className="flex items-center space-x-2 mb-4">
                          <Star className="w-5 h-5 text-yellow-400" />
                          <span className="text-yellow-400 font-semibold">Most Popular</span>
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Our Price</div>
                          <div className={`text-2xl font-bold text-${category.color}-400`}>{service.price}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Market Price</div>
                          <div className="text-lg text-gray-500 line-through">{service.marketPrice}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Proven Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>Delivery: {service.deliveryTime}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>Team: 2-5 experts</span>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <FuturisticDesign variant="gradient" intensity="medium" className="flex-1 rounded-lg">
                          <a href="/contact" className="block text-center px-6 py-3 text-white font-semibold hover:scale-105 transition-all duration-300">
                            Get Started
                          </a>
                        </FuturisticDesign>
                        <FuturisticDesign variant="glass" intensity="low" className="rounded-lg">
                          <a href="/contact" className="block px-6 py-3 text-white font-semibold hover:scale-105 transition-all duration-300">
                            Learn More
                          </a>
                        </FuturisticDesign>
                      </div>
                    </FuturisticDesign>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FuturisticDesign variant="gradient" intensity="high" className="rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and custom solution recommendations tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105"
                >
                  ✉️ kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-sm text-white/80">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </FuturisticDesign>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealServicesPage;