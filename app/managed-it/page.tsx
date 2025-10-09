import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Zap, BarChart, CheckCircle, Star, TrendingUp, Clock, Phone, Mail, MapPin, Brain, Settings, Globe, Cpu, Database, Wifi, Server, Monitor, HardDrive, Lock, RefreshCw } from 'lucide-react';

const ManagedITPage: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: '24/7 System Monitoring',
      description: 'Round-the-clock monitoring of your IT infrastructure with proactive issue detection and resolution.',
      features: ['Real-time Monitoring', 'Proactive Alerts', 'Performance Tracking', 'Uptime Reporting'],
      benefits: ['99.9% Uptime', 'Faster Resolution', 'Preventive Maintenance', 'Peace of Mind']
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security management including threat detection, prevention, and incident response.',
      features: ['Threat Detection', 'Firewall Management', 'Antivirus Updates', 'Security Audits'],
      benefits: ['Enhanced Security', 'Threat Prevention', 'Compliance', 'Risk Mitigation']
    },
    {
      icon: RefreshCw,
      title: 'Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning to protect your critical data.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Testing & Validation'],
      benefits: ['Data Protection', 'Quick Recovery', 'Business Continuity', 'Compliance']
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Complete system administration including user management, software updates, and maintenance.',
      features: ['User Management', 'Software Updates', 'System Maintenance', 'Performance Tuning'],
      benefits: ['Optimized Performance', 'Reduced Downtime', 'Better Security', 'Expert Support']
    },
    {
      icon: Globe,
      title: 'Network Management',
      description: 'Comprehensive network management including design, implementation, and ongoing optimization.',
      features: ['Network Design', 'Performance Monitoring', 'Security Configuration', 'Troubleshooting'],
      benefits: ['Reliable Connectivity', 'Better Performance', 'Enhanced Security', 'Scalable Design']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database administration including optimization, backup, and performance tuning.',
      features: ['Database Optimization', 'Backup Management', 'Performance Tuning', 'Security Hardening'],
      benefits: ['Improved Performance', 'Data Protection', 'Better Reliability', 'Cost Savings']
    }
  ];

  const managedServices = [
    { name: 'Help Desk Support', description: '24/7 technical support for all IT issues' },
    { name: 'Server Management', description: 'Complete server administration and maintenance' },
    { name: 'Network Security', description: 'Comprehensive network security management' },
    { name: 'Cloud Management', description: 'Cloud infrastructure and service management' },
    { name: 'Software Management', description: 'Software licensing, updates, and deployment' },
    { name: 'Hardware Management', description: 'Hardware procurement, maintenance, and support' },
    { name: 'Compliance Management', description: 'IT compliance and regulatory adherence' },
    { name: 'Vendor Management', description: 'IT vendor relationships and contract management' }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 25 users',
        'Basic monitoring',
        'Email support',
        'Monthly reports',
        'Backup services',
        'Security updates',
        'Help desk support',
        'Remote management'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 users',
        'Advanced monitoring',
        '24/7 phone support',
        'Weekly reports',
        'Disaster recovery',
        'Performance optimization',
        'Security hardening',
        'Cloud management',
        'Proactive maintenance',
        'Dedicated support team'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$10,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Full monitoring suite',
        'Dedicated support team',
        'Daily reports',
        'Custom solutions',
        'Advanced security',
        'White-label options',
        'On-site support',
        'Executive reporting',
        'Strategic consulting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Davis',
      company: 'TechFlow Systems',
      role: 'Operations Manager',
      content: 'Zion Tech Group\'s managed IT services have been a game-changer. Our systems run smoothly 24/7, and we\'ve reduced our IT costs by 40%.',
      rating: 5
    },
    {
      name: 'Mark Thompson',
      company: 'DataCorp Industries',
      role: 'CEO',
      content: 'The 24/7 monitoring and support gives us peace of mind. Any issues are resolved quickly, and our uptime has improved dramatically.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'InnovateTech',
      role: 'IT Director',
      content: 'Their proactive approach prevents problems before they occur. We\'ve had zero major IT incidents since switching to their managed services.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Managed IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Complete IT Management for Your Business
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Comprehensive managed IT services including 24/7 monitoring, security management, backup & recovery, 
              and system administration. Focus on your business while we handle all your IT needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Get Free Assessment
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Systems Managed</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Our Managed IT Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            What We Manage
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {managedServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Settings className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Managed IT Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="tel:+13024640950"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Client Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your IT Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our managed IT experts handle all your technology needs so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Assessment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagedITPage;