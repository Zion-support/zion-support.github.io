import React from 'react';
import {CheckCircle, Star, Shield, Phone, Mail, RefreshCw, Database, Server} from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud Platform for maximum performance and reliability.',
      features: ['Auto-scaling', 'Load balancing', 'Disaster recovery', 'Cost optimization'],
      benefits: ['99.9% uptime', 'Reduced costs', 'Global reach', 'Easy scaling']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for SQL and NoSQL databases.',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration services'],
      benefits: ['Improved performance', 'Data security', 'Reduced downtime', 'Better scalability']
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive network security solutions including firewalls, VPNs, and intrusion detection.',
      features: ['Firewall configuration', 'VPN setup', 'Intrusion detection', 'Security monitoring'],
      benefits: ['Enhanced security', 'Compliance', 'Threat prevention', '24/7 monitoring']
    },
    {
      icon: Wifi,
      title: 'Network Design',
      description: 'Custom network architecture design and implementation for optimal performance and security.',
      features: ['Network planning', 'Cable management', 'Wireless setup', 'Performance optimization'],
      benefits: ['Faster speeds', 'Better coverage', 'Reduced latency', 'Future-proof design']
    },
    {
      icon: RefreshCw,
      title: 'Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning to protect your critical data.',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Testing & validation'],
      benefits: ['Data protection', 'Quick recovery', 'Compliance', 'Peace of mind']
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: '24/7 system administration and monitoring to ensure optimal performance and uptime.',
      features: ['Server management', 'Performance monitoring', 'Patch management', 'User support'],
      benefits: ['Reduced downtime', 'Better performance', 'Security updates', 'Expert support']
    }
  ];

    const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'TechCorp Industries',
      role: 'CTO',
      content: 'Zion Tech Group transformed our IT infrastructure. We now have 99.9% uptime and our systems are more secure and efficient than ever.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'DataFlow Systems',
      role: 'IT Director',
      content: 'The cloud migration was seamless. We reduced our infrastructure costs by 40% while improving performance and scalability.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'InnovateTech',
      role: 'CEO',
      content: 'Their 24/7 support is outstanding. Any issues are resolved quickly, and their proactive monitoring prevents problems before they occur.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure services including cloud solutions, network design, database management, and 24/7 support. Ensure your business runs smoothly with enterprise-grade infrastructure." />
        <meta name="keywords" content="IT infrastructure, cloud services, network design, database management, system administration, backup recovery, network security" />
        <link rel="canonical" href="https://ziontechgroup.com/it-infrastructure" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                IT Infrastructure Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Enterprise-Grade Infrastructure Solutions for Modern Businesses
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
                Comprehensive IT infrastructure services including cloud solutions, network design, 
                database management, and 24/7 support. Ensure your business runs smoothly with 
                enterprise-grade infrastructure that scales with your growth.
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
                  <div className="text-gray-300">Projects Completed</div>
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
              Our Infrastructure Services
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

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Infrastructure Support Plans
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
        <section className="py-16 px-4">
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
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts design and implement a robust IT infrastructure that scales with your business.
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
        </div>
    </>
  );
};

export default ITInfrastructurePage;