import {},
      CheckCircle,;
      Star,;
      ArrowRight,;
      Server,;
      Rocket;
  /// Comment
      Settings'"'""
} from 'lucide-react'";"
const ServicesPage: React.FC = () => {};
}const [selectedCategory, setSelectedCategory] = useState('all')";"
  const categories  = [];
    { id: 'all', name: 'All Services', icon: Settings }";"
    { id: 'ai', name: 'AI Services', icon: }";"
    { id: 'it', name: 'IT Services', icon: Server }";"
    { id: 'saas', name: 'Micro SAAS', icon: }";"

  ]
  const services  = []: value;
    /// Comment
    {},'""'""
      id: 'ai-analytics-dashboard','"""''"'
      name: 'AI Analytics Dashboard Pro','""'""
      category: 'ai','"""''"'
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics','""'""
      price: '$299// Comment
      features: []'""'Real-time Data Visualization'"""'AI-Powered Predictions'""'Custom Dashboard Builder'"""'API Integration'""'Mobile App Access'"""'24// Comment
      ],'"""''"'
      benefits: []'""'Increase decision speed by 40%'"""'Reduce manual reporting by 80%'""'Improve forecast accuracy by 60%'"""''
      ],;
      popular: true,;
      rating: 4.9,;
      clients: 150;
    }'""'""
    {},'"""''"'
      id: 'ai-content-generator','""'""
      name: 'AI Content Generator Studio','"""''"'
      category: 'ai','""'""
      description: 'Automated content creation platform with multi-language support and brand voice customization','"""''"'
      price: '$199// Comment
      features: []'"""'Multi-language Support'""'SEO Optimization'"""'Brand Voice Training'""'Bulk Content Generation'"""'Plagiarism Detection'""'Content Calendar Integration'"""'""
      ],'""'""
      benefits: []'"""'Save 70% content creation time'""'Increase SEO rankings by 50%'"""'Maintain consistent brand voice'""''
      ],;
      popular: false,;
      rating: 4.8,;
      clients: 120;
    }'"""''"'
    {},'""'""
      id: 'ai-customer-support','"""''"'
      name: 'AI Customer Support Suite','""'""
      category: 'ai','"""''"'
      description: 'Intelligent customer service automation with natural language processing and sentiment analysis','""'""
      price: '$399// Comment
      features: []'""'Natural Language Processing'"""'Sentiment Analysis'""'Multi-channel Support'"""'Knowledge Base Integration'""'Escalation Management'"""'Performance Analytics'""''"'
      ],'"""''"'
      benefits: []'""'Reduce response time by 90%'"""'Increase customer satisfaction by 35%'""'Handle 80% queries automatically'"""''
      ],;
      popular: true,;
      rating: 4.9,;
      clients: 200;
    }'""'""
    {},'"""''"'
      id: 'ai-code-assistant','""'""
      name: 'AI Code Assistant Pro','"""''"'
      category: 'ai','""'""
      description: 'Advanced code generation and review platform with intelligent debugging and optimization suggestions','"""''"'
      price: '$249// Comment
      features: []'"""'Code Generation'""'Bug Detection & Fixes'"""'Code Review Automation'""'Performance Optimization'"""'Security Scanning'""'Documentation Generation'"""'""
      ],'""'""
      benefits: []'"""'Increase development speed by 50%'""'Reduce bugs by 70%'"""'Improve code quality significantly'""''
      ],;
      popular: false,;
      rating: 4.7,;
      clients: 80;
    /// Comment
    {},'"''"'
      id: 'cloud-infrastructure','"'""
      name: 'Cloud Infrastructure Management','"''"'
      category: 'it','"'""
      description: 'Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance','"''"'
      price: '$199// Comment
      features: []
        'Auto-scaling Infrastructure'"'99.9% Uptime Guarantee'"'24// Comment
      ],
      benefits: []'"'Reduce infrastructure costs by 30%'"'Improve system reliability'"'Scale automatically with demand'"''
      ],
      popular: true,
      rating: 4.8,
      clients: 180;
    {},'"''"'
      id: 'cybersecurity-suite','"'""
      name: 'Advanced Cybersecurity Suite','"''"'
      category: 'it','"'""
      description: 'Enterprise-grade security monitoring and protection with real-time threat detection','"''"'
      price: '$499// Comment
      features: []
        'Threat Detection & Response'"'Real-time Security ing'"'Compliance Reporting'"'Incident Response'"'Security Training'"'Penetration Testing'";"
      ],
      benefits: []'"'Prevent 99.9% of cyber attacks'"'Meet compliance requirements'"'Reduce security incidents by 95%'"''
      ],
      popular: true,
      rating: 4.9,
      clients: 100;
    {},'"''"'
      id: 'devops-automation','"'""
      name: 'DevOps Automation Platform','"''"'
      category: 'it','"'""
      description: 'Complete CI// Comment
      price: '$349// Comment
      features: []
        'CI// Comment
      ],
      benefits: []'"'Deploy 10x faster'"'Reduce deployment errors by 90%'"'Improve team productivity by 60%'"''
      ],
      popular: false,
      rating: 4.7,
      clients: 90;
      id: 'database-solutions',";"
      name: 'Management Solutions',";"
      category: 'it',";"
      description: 'Advanced database administration with optimization, backup, and performance monitoring',";"
      price: '$279// Comment
      features: []
        'Optimization'"'Automated Backups'"'Performance ing'"'Query Optimization'"'Security Hardening'"'Disaster Recovery'";"
      ],
      benefits: []'"'Improve query performance by 80%'"'Ensure data integrity'"'Reduce downtime by 95%'"''
      ],
      popular: false,
      rating: 4.6,
      clients: 70;
    /// Comment
    {},'"""''"'
      id: 'project-management-pro','""'""
      name: 'Project Management Pro','"""''"'
      category: 'saas','""'""
      description: 'Comprehensive project management platform with AI-powered insights and team collaboration','"""''"'
      price: '$149// Comment
      features: []'"""'Task Management'""'Team Collaboration'"""'AI Progress Insights'""'Resource Planning'"""'Time Tracking'""'Reporting & Analytics'"""'""
      ],'""'""
      benefits: []'"""'Increase project success rate by 40%'""'Improve team productivity by 50%'"""'Reduce project delays by 60%'""''
      ],;
      popular: true,;
      rating: 4.8,;
      clients: 250;
    {},'"''"'
      id: 'api-management','"'""
      name: 'API Management Platform','"''"'
      category: 'saas','"'""
      description: 'Complete API lifecycle management with monitoring, security, and developer portal','"''"'
      price: '$179// Comment
      features: []
        'API Gateway'"'Rate Limiting'"'Authentication & Authorization'"'API Documentation'"'Developer Portal'"'Analytics & ing'";"

      ],
      benefits: []'"'Secure API access'"'Improve API performance'"'Simplify API management'"''
      ],
      popular: false,
      rating: 4.7,
      clients: 90

      features: []
        'Real-time ing'"'Performance Metrics'"'Error Tracking'"'Alert Management'"'Root Cause Analysis'"'Custom Dashboards'";"
      ],
      benefits: []'"'Prevent 90% of outages'"'Improve application performance'"'Reduce mean time to resolution'"''
      ],
      popular: false,
      rating: 4.6,
      clients: 110;
    }'""'""
    {},'"""''"'
      id: 'automation-tools','""'""
      name: 'Business Automation Tools','"""''"'
      category: 'saas','""'""
      description: 'Workflow automation platform with drag-and-drop builder and integration capabilities','"""''"'
      price: '$99// Comment
      features: []'"""'Workflow Builder'""'Integration Hub'"""'Trigger Management'""'Data Processing'"""'Notification System'""'Analytics Dashboard'"""'""
      ],'""'""
      benefits: []'"""'Automate 80% of repetitive tasks'""'Reduce manual errors by 95%'"""'Save 20+ hours per week'""''
      ],;
      popular: true,;
      rating: 4.8,;
      clients: 180;
    : services.filter(service => service.category === selectedCategory)
  return ()
    }'"""''"'
  ]'""'""
  const filteredServices  = selectedCategory === 'all': value""";"
    ? services: services.filter(service => service.category === selectedCategory)
  return ();
    <div><// Comment
      <Helmet><// Comment
            <// Comment
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center mt-8"><// Comment
              <ahref="// Comment
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500// Comment
              ><// Comment

                Get Started Today
              <// Comment
              <ahref="tel:+13024640950">";"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300";"
              ><// Comment
                Call +1 302 464 0950
              <// Comment
            <// Comment
      <section: className ="py-8 bg-slate-800/30"><// Comment
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><// Comment
          <div: className ="flex flex-wrap justify-center gap-4"><// Comment
            {categories.map((category) => ()}
              <buttonkey={category.id},>
      onClick={() => setSelectedCategory(category.id)},
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${},
      selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'": 'bg-slate-700/50 text-gray-300 hover:bg-slate-600// Comment
                }`};
              >";"
                <category.icon: className="w-5 h-5" // Comment
                <span>{category.name}<// Comment
              <// Comment
            ))}
          <// Comment
        <// Comment
      <// Comment
            {filteredServices.map((service) => ()}
              <divkey={service.id} className={`relative bg-slate-800// Comment
      service.popular
                  ? 'border-purple-500/60 ring-2 ring-purple-500/20'": 'border-purple-500/20 hover:border-purple-500// Comment
              }`}><// Comment
                {service.popular && ()}

                  <div: className ="absolute -top-3 left-1/2 transform -translate-x-1/2"><// Comment
                    <span: className ="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold"><// Comment
                      Most Popular;
                    <// Comment
                  <// Comment
                )}";"
                <div: className ="mb-4 sm:mb-6"><// Comment
                  <div: className ="flex items-center justify-between mb-3 sm:mb-4"><// Comment
                    <h3: className ="text-lg sm:text-xl font-semibold text-white leading-tight">{service.name}<// Comment
                    <div: className ="flex items-center space-x-1"><// Comment
                      <Star className="w-4 h-4 text-yellow-400 fill-current" // Comment
                      <span: className ="text-xs sm:text-sm text-gray-300">{service.rating}<// Comment
                    <// Comment
                  <// Comment
                  <p: className ="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{service.description}<// Comment
                  <div: className ="flex items-center justify-between mb-3 sm:mb-4"><// Comment
                    <div: className ="text-xl sm:text-2xl font-bold text-white">{service.price}<// Comment
                    <div: className ="text-xs sm:text-sm text-gray-400">{service.clients} clients<// Comment
                  <// Comment
                <// Comment
                <div: className ="space-y-3 sm:space-y-4 mb-6 sm:mb-8"><// Comment
                  <h4: className ="text-white font-semibold text-sm sm:text-base">Key Features:<// Comment
                  <ul: className ="space-y-1.5 sm:space-y-2"><// Comment
                    {service.features.slice(0, 4).map((feature, index) => ()}
                      <li: key ={index} className="flex items-center text-gray-300 text-xs sm:text-sm"><// Comment

                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 flex-shrink-0" // Comment
                        {feature};
                      <// Comment
                    ))};
                  <// Comment
                <// Comment
                <div: className ="space-y-3 sm:space-y-4 mb-6 sm:mb-8"><// Comment
                  <h4: className ="text-white font-semibold text-sm sm:text-base">Benefits:<// Comment
                  <ul: className ="space-y-1.5 sm:space-y-2"><// Comment
                    {service.benefits.map((benefit, index) => ()}
                      <li: key ={index} className="text-gray-300 text-xs sm:text-sm"><// Comment
                        • {benefit};
                      <// Comment
                    ))};
                  <// Comment
                <// Comment
                <div: className ="space-y-2 sm:space-y-3"><// Comment
                    to={`/service// Comment
      className={`w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${},
      service.popular
                    }`};
                  ><// Comment
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" // Comment
                  <// Comment
                  <ahref="// Comment
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700// Comment
                  ><// Comment
            <ahref="tel:+13024640950">";"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500// Comment
            ><// Comment
},'"'""";"
      