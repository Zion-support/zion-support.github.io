import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Users, BarChart, Clock, Cloud, Server, Database, Lock, Wifi, Smartphone, Monitor, Settings, TrendingUp, ArrowRight, Play, Download, Cpu, HardDrive, Network } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure solutions including server management, network administration, and system optimization.',
      price: '$999/month',
      features: [
        'Server management and monitoring',
        'Network administration',
        'System optimization',
        '24/7 technical support',
        'Performance monitoring',
        'Backup and disaster recovery'
      ],
      icon: Server,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services & Migration',
      description: 'Comprehensive cloud solutions including migration, management, and optimization across all major cloud platforms.',
      price: '$499/month',
      features: [
        'Cloud migration planning',
        'Multi-cloud management',
        'Cost optimization',
        'Security configuration',
        'Performance monitoring',
        'Automated scaling'
      ],
      icon: Cloud,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      popular: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity services including threat detection, vulnerability assessment, and security monitoring.',
      price: '$1,299/month',
      features: [
        'Threat detection and response',
        'Vulnerability assessment',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Security training'
      ],
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      popular: false
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      description: 'Complete DevOps solutions including continuous integration, deployment automation, and infrastructure as code.',
      price: '$799/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as code',
        'Container orchestration',
        'Monitoring and logging',
        'Automated testing',
        'Deployment automation'
      ],
      icon: Settings,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      popular: false
    },
    {
      id: 'database-services',
      name: 'Database Management',
      description: 'Comprehensive database services including design, optimization, backup, and performance tuning.',
      price: '$599/month',
      features: [
        'Database design and optimization',
        'Performance tuning',
        'Backup and recovery',
        'Security hardening',
        'Monitoring and alerting',
        'Migration services'
      ],
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      popular: false
    },
    {
      id: 'network-solutions',
      name: 'Network Solutions',
      description: 'Complete network infrastructure including design, implementation, monitoring, and optimization.',
      price: '$699/month',
      features: [
        'Network design and planning',
        'Wireless network setup',
        'Network monitoring',
        'Security configuration',
        'Performance optimization',
        'Troubleshooting and support'
      ],
      icon: Network,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      popular: false
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud']
    },
    {
      category: 'Operating Systems',
      items: ['Windows Server', 'Linux (Ubuntu, CentOS)', 'macOS', 'VMware', 'Hyper-V']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      category: 'DevOps Tools',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform']
    },
    {
      category: 'Security Tools',
      items: ['Firewalls', 'SIEM', 'Antivirus', 'VPN', 'Identity Management']
    },
    {
      category: 'Monitoring',
      items: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'ELK Stack']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '99.9% Uptime Guarantee',
      description: 'We guarantee 99.9% uptime for all managed services with comprehensive SLA coverage.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support from certified engineers with average response time under 15 minutes.'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our IT solutions deliver an average 250% ROI through improved efficiency and reduced downtime.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience in enterprise IT solutions.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic server management',
        'Email support',
        'Monthly health checks',
        'Basic monitoring',
        'Standard backup',
        'Security updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Complete IT management',
        'Priority support',
        '24/7 monitoring',
        'Advanced security',
        'Automated backups',
        'Performance optimization',
        'Cloud migration',
        'Compliance support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Dedicated IT team',
        '24/7 phone support',
        'Custom solutions',
        'Advanced security',
        'Disaster recovery',
        'Custom integrations',
        'SLA guarantee',
        'On-site support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'IT Director',
      company: 'Manufacturing Corp',
      content: 'Zion Tech Group has transformed our IT infrastructure. We\'ve reduced downtime by 80% and improved system performance by 60%.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'CTO',
      company: 'TechStart Inc.',
      content: 'Their cloud migration service was flawless. We moved our entire infrastructure to the cloud with zero downtime and 40% cost savings.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'VP of Operations',
      company: 'Global Solutions',
      content: 'The cybersecurity solutions they implemented have given us peace of mind. We\'ve had zero security incidents since implementation.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT services designed to keep your business running smoothly. 
            From infrastructure management to cybersecurity, we provide enterprise-grade solutions.
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
              Get Free Assessment
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our IT Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`/it-services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-blue-700 hover:to-cyan-700 transition-all"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border border-blue-600 text-blue-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Technologies We Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Flexible Pricing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center ${
                tier.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-4">{tier.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">
                  {tier.price}<span className="text-lg text-gray-400">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust us with their IT infrastructure. 
              Get a free assessment and discover how we can improve your IT operations.
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
                Get Free Assessment
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              ✓ Free IT assessment • ✓ Custom solutions • ✓ No obligation
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;