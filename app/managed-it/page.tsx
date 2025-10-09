import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Settings, Database, Network, Cloud, Server, Monitor } from 'lucide-react';

const ManagedITPage: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: '24/7 IT Monitoring',
      description: 'Round-the-clock monitoring of your entire IT infrastructure with proactive issue detection.',
      features: ['Real-time monitoring', 'Automated alerts', 'Performance tracking', 'Incident response'],
      price: '$299/month'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security services including threat detection, prevention, and compliance.',
      features: ['Firewall management', 'Antivirus protection', 'Security updates', 'Compliance monitoring'],
      price: '$199/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Management',
      description: 'Complete cloud infrastructure management across all major platforms.',
      features: ['AWS, Azure, GCP', 'Cost optimization', 'Security compliance', 'Backup management'],
      price: '$399/month'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Professional database administration and optimization services.',
      features: ['Performance tuning', 'Backup & recovery', 'Security management', 'Monitoring'],
      price: '$249/month'
    },
    {
      icon: Network,
      title: 'Network Management',
      description: 'Complete network infrastructure management and optimization.',
      features: ['Network monitoring', 'Security configuration', 'Performance optimization', 'Troubleshooting'],
      price: '$179/month'
    },
    {
      icon: Users,
      title: 'User Support',
      description: 'Comprehensive user support and help desk services.',
      features: ['Help desk support', 'User training', 'Issue resolution', 'Remote assistance'],
      price: '$149/month'
    }
  ];

  const plans = [
    {
      name: 'Essential',
      price: '$499',
      description: 'Perfect for small businesses',
      features: [
        '24/7 monitoring',
        'Basic security',
        'Email support',
        'Monthly reports',
        'Up to 25 users'
      ]
    },
    {
      name: 'Professional',
      price: '$799',
      description: 'Ideal for growing companies',
      features: [
        '24/7 monitoring',
        'Advanced security',
        'Phone & email support',
        'Weekly reports',
        'Up to 100 users',
        'Cloud management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        '24/7 monitoring',
        'Enterprise security',
        'Dedicated support',
        'Real-time reports',
        'Unlimited users',
        'Full cloud management',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Managed IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive managed IT services including 24/7 monitoring, security management, cloud management, and user support. Starting at $499/month." />
        <meta name="keywords" content="managed it services, it outsourcing, 24/7 monitoring, security management, cloud management, help desk support" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Managed IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete IT management services to keep your business running smoothly while you focus on growth.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$499</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">15min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Managed IT Services Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Managed IT Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=${service.title} Service`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Managed IT Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 ${plan.popular ? 'border-2 border-cyan-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}<span className="text-lg text-gray-300">/month</span></div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=${plan.name} Managed IT Plan`}
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Outsource Your IT?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get comprehensive managed IT services and focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedITPage;