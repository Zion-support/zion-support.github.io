import React from 'react';
import { Check, Star, Zap, Shield, Clock, Users, BarChart, Code, Cloud, Database, Globe, Smartphone, CreditCard, Headphones, Settings, ArrowRight, Server, Wifi, Lock, Monitor, Smartphone as Phone, HardDrive, Cpu, Network } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 1,
      name: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure setup, migration, and management services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      price: '$1,200',
      period: '/month',
      features: [
        'Cloud Architecture Design',
        'Migration Planning & Execution',
        'Cost Optimization',
        'Security Hardening',
        'Monitoring & Alerting',
        'Backup & Disaster Recovery',
        'Auto-scaling Configuration',
        '24/7 Infrastructure Support'
      ],
      category: 'Cloud Services',
      popular: true,
      savings: '$5,400/year',
      deliverables: [
        'Cloud Architecture Document',
        'Migration Plan & Timeline',
        'Cost Optimization Report',
        'Security Configuration',
        'Monitoring Dashboard',
        'Disaster Recovery Plan'
      ]
    },
    {
      id: 2,
      name: 'Cybersecurity Solutions',
      description: 'Enterprise-grade cybersecurity services including threat assessment, security implementation, and ongoing monitoring.',
      icon: Shield,
      price: '$1,800',
      period: '/month',
      features: [
        'Security Assessment & Audit',
        'Penetration Testing',
        'Security Policy Development',
        'Firewall Configuration',
        'Intrusion Detection System',
        'Security Awareness Training',
        'Incident Response Planning',
        'Compliance Management (SOC2, GDPR)'
      ],
      category: 'Security',
      popular: true,
      savings: '$8,400/year',
      deliverables: [
        'Security Assessment Report',
        'Security Policies & Procedures',
        'Firewall Configuration',
        'Monitoring System Setup',
        'Training Materials',
        'Compliance Documentation'
      ]
    },
    {
      id: 3,
      name: 'Web Development Services',
      description: 'Custom web application development using modern technologies and frameworks for responsive, scalable solutions.',
      icon: Code,
      price: '$1,500',
      period: '/month',
      features: [
        'Custom Web Application Development',
        'Responsive Design Implementation',
        'Database Design & Integration',
        'API Development & Integration',
        'Performance Optimization',
        'SEO Implementation',
        'Cross-browser Compatibility',
        'Ongoing Maintenance & Support'
      ],
      category: 'Development',
      popular: false,
      savings: '$7,200/year',
      deliverables: [
        'Custom Web Application',
        'Source Code & Documentation',
        'Database Schema',
        'API Documentation',
        'User Manual',
        'Maintenance Guide'
      ]
    },
    {
      id: 4,
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android with modern UI/UX design.',
      icon: Smartphone,
      price: '$2,000',
      period: '/month',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Development (React Native)',
        'UI/UX Design & Prototyping',
        'App Store Optimization',
        'Push Notification Setup',
        'Backend API Integration',
        'App Testing & Quality Assurance',
        'App Store Submission & Management'
      ],
      category: 'Mobile Development',
      popular: true,
      savings: '$9,600/year',
      deliverables: [
        'Mobile Application (iOS/Android)',
        'Source Code & Documentation',
        'UI/UX Design Files',
        'App Store Assets',
        'Testing Reports',
        'User Guide'
      ]
    },
    {
      id: 5,
      name: 'DevOps & CI/CD',
      description: 'Complete DevOps implementation with continuous integration, deployment pipelines, and infrastructure automation.',
      icon: Settings,
      price: '$1,600',
      period: '/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code (IaC)',
        'Container Orchestration (Docker/Kubernetes)',
        'Automated Testing Integration',
        'Deployment Automation',
        'Monitoring & Logging Setup',
        'Performance Optimization',
        'Team Training & Documentation'
      ],
      category: 'DevOps',
      popular: false,
      savings: '$7,800/year',
      deliverables: [
        'CI/CD Pipeline Configuration',
        'Infrastructure Code',
        'Container Setup',
        'Monitoring Dashboard',
        'Deployment Scripts',
        'Team Training Materials'
      ]
    },
    {
      id: 6,
      name: 'Database Management',
      description: 'Comprehensive database design, optimization, and management services for MySQL, PostgreSQL, and NoSQL databases.',
      icon: Database,
      price: '$1,100',
      period: '/month',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Backup & Recovery Setup',
        'Security Configuration',
        'Query Optimization',
        'Database Migration',
        'Monitoring & Alerting',
        '24/7 Database Support'
      ],
      category: 'Database Services',
      popular: false,
      savings: '$5,400/year',
      deliverables: [
        'Database Schema Design',
        'Optimization Report',
        'Backup Strategy',
        'Security Configuration',
        'Monitoring Setup',
        'Performance Metrics'
      ]
    },
    {
      id: 7,
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management including LAN, WAN, and wireless solutions.',
      icon: Network,
      price: '$1,400',
      period: '/month',
      features: [
        'Network Design & Planning',
        'Router & Switch Configuration',
        'Wireless Network Setup',
        'VPN Implementation',
        'Network Security Configuration',
        'Performance Monitoring',
        'Troubleshooting & Support',
        'Network Documentation'
      ],
      category: 'Networking',
      popular: false,
      savings: '$6,600/year',
      deliverables: [
        'Network Architecture Design',
        'Configuration Files',
        'Security Policies',
        'Monitoring Setup',
        'Network Documentation',
        'Support Procedures'
      ]
    },
    {
      id: 8,
      name: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services including helpdesk, technical support, and system administration.',
      icon: Headphones,
      price: '$800',
      period: '/month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'System Administration',
        'Software Installation & Updates',
        'Hardware Troubleshooting',
        'User Account Management',
        'Backup & Recovery Services',
        'IT Documentation & Training'
      ],
      category: 'Support Services',
      popular: false,
      savings: '$3,600/year',
      deliverables: [
        'Support Ticket System',
        'User Documentation',
        'System Procedures',
        'Training Materials',
        'Maintenance Schedules',
        'Incident Reports'
      ]
    }
  ];

  const categories = [
    'All Categories',
    'Cloud Services',
    'Security',
    'Development',
    'Mobile Development',
    'DevOps',
    'Database Services',
    'Networking',
    'Support Services'
  ];

  const technologies = [
    {
      name: 'Cloud Platforms',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Linode'],
      icon: Cloud
    },
    {
      name: 'Programming Languages',
      items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust'],
      icon: Code
    },
    {
      name: 'Frameworks & Libraries',
      items: ['React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Spring Boot'],
      icon: Settings
    },
    {
      name: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      icon: Database
    },
    {
      name: 'DevOps Tools',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform'],
      icon: Server
    },
    {
      name: 'Security Tools',
      items: ['OWASP ZAP', 'Nessus', 'Burp Suite', 'Wireshark', 'Snort'],
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'IT Director',
      company: 'GlobalTech Solutions',
      content: 'The cloud infrastructure management service has been exceptional. We\'ve reduced our infrastructure costs by 35% while improving performance and reliability.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Maria Garcia',
      role: 'CTO',
      company: 'SecureCorp Inc',
      content: 'Their cybersecurity solutions helped us achieve SOC2 compliance and significantly improved our security posture. The team is highly professional and knowledgeable.',
      rating: 5,
      avatar: '👩‍🔧'
    },
    {
      name: 'Robert Kim',
      role: 'VP of Engineering',
      company: 'TechStart Ventures',
      content: 'The mobile app development service delivered exactly what we needed. The app has been downloaded over 100K times with excellent user ratings.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive digital transformation
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
              Get Free IT Assessment
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
            {itServices.map((service) => (
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

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    Get Started
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

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Technologies We Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{tech.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.items.map((item, idx) => (
                    <span key={idx} className="text-xs text-gray-300 bg-gray-800 px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            What Our IT Clients Say
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

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our IT Service Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Assessment</h3>
              <p className="text-gray-300">Comprehensive evaluation of your current IT infrastructure and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Planning</h3>
              <p className="text-gray-300">Detailed project planning and solution design tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Implementation</h3>
              <p className="text-gray-300">Professional implementation with minimal disruption to your operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Support</h3>
              <p className="text-gray-300">Ongoing support, monitoring, and optimization to ensure peak performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our comprehensive IT services. Get a free assessment and discover how we can help you achieve your technology goals.
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
              Get Free IT Assessment
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free IT infrastructure assessment</p>
            <p>✓ Custom solution recommendations</p>
            <p>✓ No-obligation project proposal</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our comprehensive IT services. Get a free assessment and discover how we can help you achieve your technology goals.
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
              Get Free IT Assessment
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free IT infrastructure assessment</p>
            <p>✓ Custom solution recommendations</p>
            <p>✓ No-obligation project proposal</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
