
  ]
  const: services = []: value;
    // AI Services;';';";";";"
    {},'';";";";"
      id: 'ai-analytics-dashboard','';";";";"
      name: 'AI Analytics Dashboard Pro','';";";";"
      category: 'ai','';";";";"
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics','';";";";"
      price: '$299/month',';";";";"
      features: []'';";";";"
        'Real-time Data Visualization';'';";";";"
        'AI-Powered Predictions';'';";";";"
        'Custom Dashboard Builder';'';";";";"
        'API Integration';'';";";";"
        'Mobile App Access';'';";";";"
        '24/7 Support';";";";"
      ],';';";";";"
      benefits: []'';";";";"
        'Increase decision speed by 40%';'';";";";"
        'Reduce manual reporting by 80%';'';";";";"
        'Improve forecast accuracy by 60%';";";";"
      ],;
      popular: true,;
      rating: 4.9,;
      clients: 150;
    };';';";";";"
    {},'';";";";"
      id: 'ai-content-generator','';";";";"
      name: 'AI Content Generator Studio','';";";";"
      category: 'ai','';";";";"
      description: 'Automated content creation platform with multi-language support and brand voice customization','';";";";"
      price: '$199/month',';";";";"
      features: []'';";";";"
        'Multi-language Support';'';";";";"
        'SEO Optimization';'';";";";"
        'Brand Voice Training';'';";";";"
        'Bulk Content Generation';'';";";";"
        'Plagiarism Detection';'';";";";"
        'Content Calendar Integration';";";";"
      ],';';";";";"
      benefits: []'';";";";"
        'Save 70% content creation time';'';";";";"
        'Increase SEO rankings by 50%';'';";";";"
        'Maintain consistent brand voice';";";";"
      ],;
      popular: false,;
      rating: 4.8,;
      clients: 120;
    };';';";";";"
    {},'';";";";"
      id: 'ai-customer-support','';";";";"
      name: 'AI Customer Support Suite','';";";";"
      category: 'ai','';";";";"
      description: 'Intelligent customer service automation with natural language processing and sentiment analysis','';";";";"
      price: '$399/month',';";";";"
      features: []'';";";";"
        'Natural Language Processing';'';";";";"
        'Sentiment Analysis';'';";";";"
        'Multi-channel Support';'';";";";"
        'Knowledge Base Integration';'';";";";"
        'Escalation Management';'';";";";"
        'Performance Analytics';";";";"
      ],';';";";";"
      benefits: []'';";";";"
        'Reduce response time by 90%';'';";";";"
        'Increase customer satisfaction by 35%';'';";";";"
        'Handle 80% queries automatically';";";";"
      ],;
      popular: true,;
      rating: 4.9,;
      clients: 200;
    };';';";";";"
    {},'';";";";"
      id: 'ai-code-assistant','';";";";"
      name: 'AI Code Assistant Pro','';";";";"
      category: 'ai','';";";";"
      description: 'Advanced code generation and review platform with intelligent debugging and optimization suggestions','';";";";"
      price: '$249/month',';";";";"
      features: []'';";";";"
        'Code Generation';'';";";";"
        'Bug Detection & Fixes';'';";";";"
        'Code Review Automation';'';";";";"
        'Performance Optimization';'';";";";"
        'Security Scanning';'';";";";"
        'Documentation Generation';";";";"
      ],';';";";";"
      benefits: []'';";";";"
        'Increase development speed by 50%';'';";";";"
        'Reduce bugs by 70%';'';";";";"
        'Improve code quality significantly';";";";"
      ],;
      popular: false,;
      rating: 4.7,;
      clients: 80;
    };

      clients: 70;
    };
    // Micro SAAS Services;';';";";";"
    {},'';";";";"
      id: 'project-management-pro','';";";";"
      name: 'Project Management Pro','';";";";"
      category: 'saas','';";";";"
      description: 'Comprehensive project management platform with AI-powered insights and team collaboration','';";";";"
      price: '$149/month',';";";";"
      features: []'';";";";"
        'Task Management';'';";";";"
        'Team Collaboration';'';";";";"
        'AI Progress Insights';'';";";";"
        'Resource Planning';'';";";";"
        'Time Tracking';'';";";";"
        'Reporting & Analytics';";";";"
      ],';';";";";"
      benefits: []'';";";";"
        'Increase project success rate by 40%';'';";";";"
        'Improve team productivity by 50%';'';";";";"
        'Reduce project delays by 60%';";";";"
      ],;
      popular: true,;
      rating: 4.8,;
      clients: 250;

      clients: 110;
    };';';";";";"
    {},'';";";";"
      id: 'automation-tools','';";";";"
      name: 'Business Automation Tools','';";";";"
      category: 'saas','';";";";"
      description: 'Workflow automation platform with drag-and-drop builder and integration capabilities','';";";";"
      price: '$99/month',';";";";"
      features: []'';";";";"
        'Workflow Builder';'';";";";"
        'Integration Hub';'';";";";"
        'Trigger Management';'';";";";"
        'Data Processing';'';";";";"
        'Notification System';'';";";";"
        'Analytics Dashboard';";";";"
      ],';';";";";"
      benefits: []'';";";";"
        'Automate 80% of repetitive tasks';'';";";";"
        'Reduce manual errors by 95%';'';";";";"
        'Save 20+ hours per week';";";";"
      ],;
      popular: true,;
      rating: 4.8,;
      clients: 180;
    };';';";";";"
  ]'';";";";"
  const: filteredServices = selectedCategory === 'all': value;";";";"
    ? services;
    : services.filter(service => service.category === selectedCategory)
  return ();
    <div></div>
      <Helmet></Helmet>
        <title>Our Services - Zion Tech Group</title>;
        <meta: name ="description" content="Discover our comprehensive range of AI, IT, and Micro SAAS services. From AI analytics to cloud infrastructure, we have solutions for every business need." />";";";"
        <meta: name ="keywords" content="AI services, IT services, micro SAAS, cloud computing, cybersecurity, project management, API management" />: value;";";"
      </Helmet>";";";";"
      {/* Hero Section */};"";";";"
      <section: className ="py-20 relative overflow-hidden"></section>: value";";";"
        {/* Futuristic background elements */};"";";";"
        <div: className ="absolute inset-0 overflow-hidden pointer-events-none"></div>";";";"
          <div: className ="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>";";";"
          <div: className ="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>";";";"
          <div: className ="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>: value";";";"
        </div>"";";";"
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"></div>"";";";"
          <div: className ="text-center"></div>";";";"
            <h1: className ="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"></h1>";";";"
              Our;"";";";"
              <span: className ="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse"></span>: value;";";"
                Services;

                        {feature};
                      </li>;
                    ))};

                        • {benefit};
                      </li>;
                    ))};

                    Get Quote;
                  </a>;
                </div>;
              </div>;
            ))};

              Call +1 302 464 0950;
            </a>;
          </div>;
        </div>;
      </section>;
</div>;
  )
},'";'";";";";";"
      export default ServicesPage;"'"''";"