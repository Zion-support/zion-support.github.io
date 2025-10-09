import React from 'react';
import { Check, Star, Zap, Shield, Clock, Users, BarChart, Code, Cloud, Database, Globe, Smartphone, CreditCard, Headphones, Settings, ArrowRight } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates, multi-language support, and brand voice customization.',
      icon: Code,
      price: '$29',
      period: '/month',
      features: [
        '50+ Content Templates',
        'Multi-language Support (25+ languages)',
        'Brand Voice Customization',
        'SEO Optimization',
        'Plagiarism Detection',
        'Team Collaboration (up to 5 users)',
        'API Access',
        'Priority Support'
      ],
      category: 'Content & Marketing',
      popular: true,
      savings: '$120/year'
    },
    {
      id: 2,
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence platform with custom dashboards, automated reports, and predictive analytics.',
      icon: BarChart,
      price: '$49',
      period: '/month',
      features: [
        'Real-time Data Visualization',
        'Custom Dashboard Builder',
        'Automated Report Generation',
        'Predictive Analytics',
        'Data Export (CSV, PDF, Excel)',
        'White-label Options',
        'Mobile App Access',
        '24/7 Monitoring'
      ],
      category: 'Analytics & BI',
      popular: false,
      savings: '$240/year'
    },
    {
      id: 3,
      name: 'Cloud Storage Manager',
      description: 'Secure cloud storage solution with advanced encryption, file sharing, and collaboration tools.',
      icon: Cloud,
      price: '$19',
      period: '/month',
      features: [
        '1TB Secure Storage',
        'End-to-end Encryption',
        'File Versioning',
        'Team Collaboration',
        'Mobile Sync',
        'Advanced Search',
        'Automated Backups',
        '99.9% Uptime SLA'
      ],
      category: 'Storage & Files',
      popular: false,
      savings: '$96/year'
    },
    {
      id: 4,
      name: 'API Gateway Pro',
      description: 'Enterprise-grade API management platform with rate limiting, authentication, and monitoring.',
      icon: Globe,
      price: '$79',
      period: '/month',
      features: [
        'Unlimited API Endpoints',
        'Rate Limiting & Throttling',
        'OAuth 2.0 & JWT Authentication',
        'API Documentation Generator',
        'Real-time Monitoring',
        'Webhook Management',
        'Developer Portal',
        '99.99% Uptime SLA'
      ],
      category: 'Developer Tools',
      popular: true,
      savings: '$360/year'
    },
    {
      id: 5,
      name: 'Customer Support Hub',
      description: 'AI-powered customer support platform with chatbots, ticket management, and knowledge base.',
      icon: Headphones,
      price: '$39',
      period: '/month',
      features: [
        'AI Chatbot Builder',
        'Ticket Management System',
        'Knowledge Base Builder',
        'Multi-channel Support',
        'Customer Satisfaction Tracking',
        'Team Performance Analytics',
        'Integration APIs',
        '24/7 Support'
      ],
      category: 'Customer Service',
      popular: false,
      savings: '$180/year'
    },
    {
      id: 6,
      name: 'E-commerce Analytics',
      description: 'Comprehensive e-commerce analytics platform with conversion tracking, customer insights, and revenue optimization.',
      icon: CreditCard,
      price: '$59',
      period: '/month',
      features: [
        'Conversion Rate Optimization',
        'Customer Journey Mapping',
        'Revenue Attribution',
        'A/B Testing Tools',
        'Cart Abandonment Recovery',
        'Customer Lifetime Value',
        'Real-time Reporting',
        'Custom Integrations'
      ],
      category: 'E-commerce',
      popular: false,
      savings: '$300/year'
    },
    {
      id: 7,
      name: 'Project Management Suite',
      description: 'Advanced project management platform with Gantt charts, resource planning, and team collaboration.',
      icon: Settings,
      price: '$45',
      period: '/month',
      features: [
        'Gantt Chart Visualization',
        'Resource Planning & Allocation',
        'Team Collaboration Tools',
        'Time Tracking & Reporting',
        'Budget Management',
        'Risk Assessment Tools',
        'Mobile App Access',
        'Third-party Integrations'
      ],
      category: 'Project Management',
      popular: true,
      savings: '$240/year'
    },
    {
      id: 8,
      name: 'Database as a Service',
      description: 'Managed database service with automated backups, scaling, and monitoring for modern applications.',
      icon: Database,
      price: '$69',
      period: '/month',
      features: [
        'Managed PostgreSQL/MySQL',
        'Automated Backups',
        'Auto-scaling',
        'Performance Monitoring',
        'Security Hardening',
        'Point-in-time Recovery',
        'Multi-region Deployment',
        '24/7 Database Support'
      ],
      category: 'Database & Infrastructure',
      popular: false,
      savings: '$360/year'
    }
  ];

  const categories = [
    'All Categories',
    'Content & Marketing',
    'Analytics & BI',
    'Storage & Files',
    'Developer Tools',
    'Customer Service',
    'E-commerce',
    'Project Management',
    'Database & Infrastructure'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'AI Content Generator Pro has revolutionized our content creation process. We\'ve increased our output by 300% while maintaining quality.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Solutions',
      content: 'The Smart Analytics Dashboard provides insights we never had before. Our decision-making process is now data-driven and efficient.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'CloudFirst Corp',
      content: 'API Gateway Pro has simplified our API management significantly. The monitoring and security features are outstanding.',
      rating: 5,
      avatar: '👩‍🔧'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Powerful, affordable micro SAAS tools designed to streamline your business operations and boost productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                    <span className="text-green-400 text-sm">Save {service.savings}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                    Learn More
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Optimized for speed and performance with sub-second response times</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with end-to-end encryption and compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert technical team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
              <p className="text-gray-300">Built-in collaboration tools for seamless team workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free 14-day trial for all services</p>
            <p>✓ No setup fees or hidden costs</p>
            <p>✓ Cancel anytime with 30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
