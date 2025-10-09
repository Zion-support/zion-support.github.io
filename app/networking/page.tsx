import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Wifi, Shield, Zap, BarChart, CheckCircle, Star, TrendingUp, Clock, Users, Globe, Server, Cpu, HardDrive, Lock, RefreshCw, Settings, Phone, Mail, MapPin, Router, Network, Cable, Signal } from 'lucide-react';

const NetworkingPage: React.FC = () => {
  const services = [
    {
      icon: Wifi,
      title: 'Network Design & Implementation',
      description: 'Custom network architecture design and implementation for optimal performance and security.',
      features: ['Network Planning', 'Cable Management', 'Wireless Setup', 'Performance Optimization'],
      benefits: ['Faster Speeds', 'Better Coverage', 'Reduced Latency', 'Future-Proof Design']
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive network security solutions including firewalls, VPNs, and intrusion detection.',
      features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring'],
      benefits: ['Enhanced Security', 'Compliance', 'Threat Prevention', '24/7 Monitoring']
    },
    {
      icon: Zap,
      title: 'Network Optimization',
      description: 'Advanced network optimization to maximize performance and minimize latency.',
      features: ['Traffic Analysis', 'Bandwidth Management', 'QoS Configuration', 'Load Balancing'],
      benefits: ['Improved Performance', 'Reduced Congestion', 'Better User Experience', 'Cost Savings']
    },
    {
      icon: BarChart,
      title: 'Network Monitoring',
      description: '24/7 network monitoring and analytics for proactive issue detection and resolution.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Systems', 'Reporting'],
      benefits: ['Proactive Maintenance', 'Faster Resolution', 'Better Visibility', 'Reduced Downtime']
    },
    {
      icon: Router,
      title: 'Network Infrastructure',
      description: 'Complete network infrastructure setup including routers, switches, and access points.',
      features: ['Hardware Installation', 'Configuration', 'Testing', 'Documentation'],
      benefits: ['Reliable Infrastructure', 'Scalable Design', 'Professional Setup', 'Comprehensive Support']
    },
    {
      icon: Settings,
      title: 'Network Administration',
      description: '24/7 network administration and management for optimal performance and uptime.',
      features: ['24/7 Monitoring', 'Configuration Management', 'Troubleshooting', 'Performance Tuning'],
      benefits: ['High Availability', 'Expert Support', 'Proactive Maintenance', 'Peace of Mind']
    }
  ];

  const networkTypes = [
    { name: 'LAN/WAN', description: 'Local and wide area network solutions' },
    { name: 'Wireless Networks', description: 'Wi-Fi and wireless connectivity solutions' },
    { name: 'VPN Networks', description: 'Secure remote access and site-to-site connections' },
    { name: 'Cloud Networks', description: 'Hybrid and multi-cloud network architectures' },
    { name: 'SD-WAN', description: 'Software-defined wide area networking' },
    { name: 'Network Security', description: 'Firewall and security appliance management' },
    { name: 'Load Balancing', description: 'Traffic distribution and failover solutions' },
    { name: 'Network Monitoring', description: 'Comprehensive network visibility and analytics' }
  ];

  const pricingPlans = [
    {
      name: 'Basic Support',
      price: '$2,000',
      period: '/month',
      description: 'Perfect for small networks',
      features: [
        'Up to 10 devices',
        'Basic monitoring',
        'Email support',
        'Monthly reports',
        'Security updates',
        'Remote management'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,500',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 devices',
        'Advanced monitoring',
        '24/7 phone support',
        'Weekly reports',
        'Performance optimization',
        'Security hardening',
        'Network design',
        'Custom configuration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$9,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited devices',
        'Full monitoring suite',
        'Dedicated support team',
        'Daily reports',
        'Custom solutions',
        'Advanced security',
        'White-label options',
        'On-site support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'TechFlow Systems',
      role: 'Network Administrator',
      content: 'Zion Tech Group designed and implemented our network infrastructure. We now have 99.9% uptime and our network performance has improved dramatically.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'DataCorp Industries',
      role: 'IT Director',
      content: 'Their network security implementation was flawless. We feel confident that our network is protected against all threats.',
      rating: 5
    },
    {
      name: 'James Thompson',
      company: 'InnovateTech',
      role: 'CTO',
      content: 'The 24/7 network monitoring has been a game-changer. Issues are resolved before they impact our business operations.',
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
              Networking Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Expert Network Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Comprehensive networking services including design, implementation, security, and 24/7 administration. 
              Ensure your network is fast, secure, and reliable with our expert networking solutions.
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
                <div className="text-gray-300">Networks Deployed</div>
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
            Our Networking Services
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

      {/* Network Types Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Network Solutions We Support
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {networkTypes.map((network, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Network className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{network.name}</h3>
                <p className="text-gray-300 text-sm">{network.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Network Support Plans
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
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our networking experts help you design, implement, and manage your network infrastructure.
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
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetworkingPage;