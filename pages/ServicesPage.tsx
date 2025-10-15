import React, { useState } from 'react'';
import { Helmet } from 'react-helmet-async';
import {};
      CheckCircle,
      Star,
      ArrowRight,
      Brain,
      Server,;
      Rocket;
  // Users,
      Settings;'
} from 'lucide-react'
const ServicesPage: React.FC = () => {};'
}const [selectedCategory, setSelectedCategory] = useState('all'): value
  const categories = []': value
    { id: 'all', name: 'All Services', icon: Settings };'
    { id: 'ai', name: 'AI Services', icon: Brain };'
    { id: 'it', name: 'IT Services', icon: Server };'
    { id: 'saas', name: 'Micro SAAS', icon: Zap };
  ]
  const services = []: value
    // AI Services;
    {},'
      id: 'ai-analytics-dashboard','
      name: 'AI Analytics Dashboard Pro','
      category: 'ai','
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics','
      price: '$299/month',
      features: []'
        'Real-time Data Visualization';'
        'AI-Powered Predictions';'
        'Custom Dashboard Builder';'
        'API Integration';'
        'Mobile App Access';'
        '24/7 Support'
      ],
      benefits: []'
        'Increase decision speed by 40%';'
        'Reduce manual reporting by 80%';'
        'Improve forecast accuracy by 60%'
      ],
      popular: true,
      rating: 4.9,
      clients: 150;
    };
    {},'
      id: 'ai-content-generator','
      name: 'AI Content Generator Studio','
      category: 'ai','
      description: 'Automated content creation platform with multi-language support and brand voice customization','
      price: '$199/month',
      features: []'
        'Multi-language Support';'
        'SEO Optimization';'
        'Brand Voice Training';'
        'Bulk Content Generation';'
        'Plagiarism Detection';'
        'Content Calendar Integration'
      ],
      benefits: []'
        'Save 70% content creation time';'
        'Increase SEO rankings by 50%';'
        'Maintain consistent brand voice'
      ],
      popular: false,
      rating: 4.8,
      clients: 120;
    };
    {},'
      id: 'ai-customer-support','
      name: 'AI Customer Support Suite','
      category: 'ai','
      description: 'Intelligent customer service automation with natural language processing and sentiment analysis','
      price: '$399/month',
      features: []'
        'Natural Language Processing';'
        'Sentiment Analysis';'
        'Multi-channel Support';'
        'Knowledge Base Integration';'
        'Escalation Management';'
        'Performance Analytics'
      ],
      benefits: []'
        'Reduce response time by 90%';'
        'Increase customer satisfaction by 35%';'
        'Handle 80% queries automatically'
      ],
      popular: true,
      rating: 4.9,
      clients: 200;
    };
    {},'
      id: 'ai-code-assistant','
      name: 'AI Code Assistant Pro','
      category: 'ai','
      description: 'Advanced code generation and review platform with intelligent debugging and optimization suggestions','
      price: '$249/month',
      features: []'
        'Code Generation';'
        'Bug Detection & Fixes';'
        'Code Review Automation';'
        'Performance Optimization';'
        'Security Scanning';'
        'Documentation Generation'
      ],
      benefits: []'
        'Increase development speed by 50%';'
        'Reduce bugs by 70%';'
        'Improve code quality significantly'
      ],
      popular: false,
      rating: 4.7,
      clients: 80;
    };
    // IT Services;
    {},'
      id: 'cloud-infrastructure','
      name: 'Cloud Infrastructure Management','
      category: 'it','
      description: 'Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance','
      price: '$199/month',
      features: []'
        'Auto-scaling Infrastructure';'
        '99.9% Uptime Guarantee';'
        '24/7 Monitoring';'
        'Security Compliance';'
        'Backup & Recovery';'
        'Cost Optimization'
      ],
      benefits: []'
        'Reduce infrastructure costs by 30%';'
        'Improve system reliability';'
        'Scale automatically with demand'
      ],
      popular: true,
      rating: 4.8,
      clients: 180;
    };
    {},'
      id: 'cybersecurity-suite','
      name: 'Advanced Cybersecurity Suite','
      category: 'it','
      description: 'Enterprise-grade security monitoring and protection with real-time threat detection','
      price: '$499/month',
      features: []'
        'Threat Detection & Response';'
        'Real-time Security Monitoring';'
        'Compliance Reporting';'
        'Incident Response';'
        'Security Training';'
        'Penetration Testing'
      ],
      benefits: []'
        'Prevent 99.9% of cyber attacks';'
        'Meet compliance requirements';'
        'Reduce security incidents by 95%'
      ],
      popular: true,
      rating: 4.9,
      clients: 100;
    };
    {},'
      id: 'devops-automation','
      name: 'DevOps Automation Platform','
      category: 'it','
      description: 'Complete CI/CD pipeline automation with monitoring, testing, and deployment management','
      price: '$349/month',
      features: []'
        'CI/CD Pipeline Automation';'
        'Automated Testing';'
        'Deployment Management';'
        'Performance Monitoring';'
        'Rollback Capabilities';'
        'Team Collaboration Tools'
      ],
      benefits: []'
        'Deploy 10x faster';'
        'Reduce deployment errors by 90%';'
        'Improve team productivity by 60%'
      ],
      popular: false,
      rating: 4.7,
      clients: 90;
    };
    {},'
      id: 'database-solutions','
      name: 'Database Management Solutions','
      category: 'it','
      description: 'Advanced database administration with optimization, backup, and performance monitoring','
      price: '$279/month',
      features: []'
        'Database Optimization';'
        'Automated Backups';'
        'Performance Monitoring';'
        'Query Optimization';'
        'Security Hardening';'
        'Disaster Recovery'
      ],
      benefits: []'
        'Improve query performance by 80%';'
        'Ensure data integrity';'
        'Reduce downtime by 95%'
      ],
      popular: false,
      rating: 4.6,
      clients: 70;
    };
    // Micro SAAS Services;
    {},'
      id: 'project-management-pro','
      name: 'Project Management Pro','
      category: 'saas','
      description: 'Comprehensive project management platform with AI-powered insights and team collaboration','
      price: '$149/month',
      features: []'
        'Task Management';'
        'Team Collaboration';'
        'AI Progress Insights';'
        'Resource Planning';'
        'Time Tracking';'
        'Reporting & Analytics'
      ],
      benefits: []'
        'Increase project success rate by 40%';'
        'Improve team productivity by 50%';'
        'Reduce project delays by 60%'
      ],
      popular: true,
      rating: 4.8,
      clients: 250;
    };
    {},'
      id: 'api-management','
      name: 'API Management Platform','
      category: 'saas','
      description: 'Complete API lifecycle management with monitoring, security, and developer portal','
      price: '$179/month',
      features: []'
        'API Gateway';'
        'Rate Limiting';'
        'Authentication & Authorization';'
        'API Documentation';'
        'Developer Portal';'
        'Analytics & Monitoring'
      ],
      benefits: []'
        'Secure API access';'
        'Improve API performance';'
        'Simplify API management'
      ],
      popular: false,
      rating: 4.7,
      clients: 60;
    };
    {},'
      id: 'monitoring-suite','
      name: 'Application Monitoring Suite','
      category: 'saas','
      description: 'Real-time application performance monitoring with alerting and root cause analysis','
      price: '$129/month',
      features: []'
        'Real-time Monitoring';'
        'Performance Metrics';'
        'Error Tracking';'
        'Alert Management';'
        'Root Cause Analysis';'
        'Custom Dashboards'
      ],
      benefits: []'
        'Prevent 90% of outages';'
        'Improve application performance';'
        'Reduce mean time to resolution'
      ],
      popular: false,
      rating: 4.6,
      clients: 110;
    };
    {},'
      id: 'automation-tools','
      name: 'Business Automation Tools','
      category: 'saas','
      description: 'Workflow automation platform with drag-and-drop builder and integration capabilities','
      price: '$99/month',
      features: []'
        'Workflow Builder';'
        'Integration Hub';'
        'Trigger Management';'
        'Data Processing';'
        'Notification System';'
        'Analytics Dashboard'
      ],
      benefits: []'
        'Automate 80% of repetitive tasks';'
        'Reduce manual errors by 95%';'
        'Save 20+ hours per week'
      ],
      popular: true,
      rating: 4.8,
      clients: 180;
    };
  ]'
  const filteredServices = selectedCategory === 'all': value
    ? services;
    : services.filter(service => service.category === selectedCategory)
  return ()
    <div></div>
      <Helmet></Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SAAS services. From AI analytics to cloud infrastructure, we have solutions for every business need." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud computing, cybersecurity, project management, API management" />: value
      </Helmet>
      {/* Hero Section */};"
      <section className="py-20 relative overflow-hidden"></section>: value
        {/* Futuristic background elements */};"
        <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>: value
        </div>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"></div>"
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"></h1>
              Our;"
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse"></span>: value
                Services;
              </span>
            </h1>"
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed"></p>
              Comprehensive AI, IT, and Micro SAAS solutions designed to accelerate your business growth.
              Choose from our range of services tailored to meet your specific needs.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8"></div>
              <a;">
                href="/contact"">: value";
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              ></a>
>
                Get Started Today;
              </a>
              <a;">
                href="tel:+13024640950"">";
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              ></a>
>
                Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Category Filter */};"
      <section className="py-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="flex flex-wrap justify-center gap-4"></div>: value
            {categories.map((category) => (): value
              <button;>
                key={category.id},>: value
      onClick={() => setSelectedCategory(category.id)}: value,
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${}: value,
      selectedCategory === category.id;': value
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white''
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`};
              >"
                <category.icon className="w-5 h-5" />: value
                <span>{category.name}</span>
              </button>
            ))};
          </div>
        </div>
      </section>
      {/* Services Grid */};"
      <section className="py-20 relative"></section>: value
        {/* Background elements */};"
        <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>: value
        </div>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"></div>"
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"></div>
            {filteredServices.map((service) => (): value
              <div key={service.id} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 ${},>
      service.popular;'
                  ? 'border-purple-500/60 ring-2 ring-purple-500/20''>
                  : 'border-purple-500/20 hover:border-purple-500/40'>
              }`}></div>
                {service.popular && ()"
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>: value
                      Most Popular;
                    </span>
                  </div>
                )};"
                <div className="mb-4 sm:mb-6"></div>"
                  <div className="flex items-center justify-between mb-3 sm:mb-4"></div>"
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">{service.name}</h3>"
                    <div className="flex items-center space-x-1"></div>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>"
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{service.description}</p>"
                  <div className="flex items-center justify-between mb-3 sm:mb-4"></div>"
                    <div className="text-xl sm:text-2xl font-bold text-white">{service.price}</div>"
                    <div className="text-xs sm:text-sm text-gray-400">{service.clients} clients</div>
                  </div>
                </div>"
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"></div>"
                  <h4 className="text-white font-semibold text-sm sm:text-base">Key Features:</h4>"
                  <ul className="space-y-1.5 sm:space-y-2"></ul>
                    {service.features.slice(0, 4).map((feature, index) => ()
                      <li key={index} className="flex items-center text-gray-300 text-xs sm:text-sm"></li>"
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature};
                      </li>
                    ))};
                  </ul>
                </div>"
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"></div>"
                  <h4 className="text-white font-semibold text-sm sm:text-base">Benefits:</h4>"
                  <ul className="space-y-1.5 sm:space-y-2"></ul>
                    {service.benefits.map((benefit, index) => ()
                      <li key={index} className="text-gray-300 text-xs sm:text-sm"></li>
                        • {benefit};
                      </li>
                    ))};
                  </ul>
                </div>"
                <div className="space-y-2 sm:space-y-3"></div>
                  <Link;>
                    to={`/service/${service.id}`}: value,
      className={`w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${},
      service.popular;'
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600''
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'>
                    }`};>
                  ></Link>
>
                    Learn More;"
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                  <a;">
                    href="/contact"">: value";
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base">
                  ></a>
>
                    Get Quote;
                  </a>
                </div>
              </div>
            ))};
          </div>
        </div>
      </section>
      {/* CTA Section */};"
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Need a Custom Solution?
          </h2>"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>: value
            Don&apos;t see exactly what you need? Our team can create custom solutions tailored to your specific requirements.
            Contact us for a free consultation and custom quote.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a;">
              href="/contact"">: value";
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
            ></a>
>
              Get Custom Quote;"
              <Rocket className="ml-2 w-5 h-5" />: value
            </a>
            <a;">
              href="tel:+13024640950"">";
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
            ></a>
>
              Call +1 302 464 0950;
            </a>
          </div>
        </div>
      </section>
</div>
  )
},
      export default ServicesPage;"'"'