'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Database,
  Globe,
  Settings,
  BarChart,
  Lock,
  Cpu,
  HardDrive,
  Network,
  Monitor,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Eye,
  Target,
  Award
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudInfrastructureAdvancedPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Architecture',
      description: 'Comprehensive cloud solutions across AWS, Azure, and GCP with seamless integration',
      benefits: ['Vendor independence', 'Cost optimization', 'High availability', 'Disaster recovery']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced threat protection and compliance management',
      benefits: ['Zero-trust architecture', 'Compliance ready', '24/7 monitoring', 'Incident response']
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Intelligent auto-scaling that adapts to traffic patterns and optimizes costs',
      benefits: ['Cost optimization', 'Performance optimization', 'Automatic scaling', 'Load balancing']
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and analytics with predictive insights and alerting',
      benefits: ['Real-time metrics', 'Predictive analytics', 'Custom dashboards', 'Proactive alerts']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Cloud',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Single cloud provider',
        'Basic monitoring',
        'Standard security',
        'Email support',
        '99.9% uptime SLA',
        'Basic backup',
        'Up to 10 servers'
      ],
      popular: false
    },
    {
      name: 'Professional Cloud',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Multi-cloud setup',
        'Advanced monitoring',
        'Enhanced security',
        'Priority support',
        '99.99% uptime SLA',
        'Automated backups',
        'Up to 50 servers',
        'Load balancing',
        'Auto-scaling'
      ],
      popular: true
    },
    {
      name: 'Enterprise Cloud',
      price: '$12,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Hybrid cloud architecture',
        'Full monitoring suite',
        'Enterprise security',
        'Dedicated support',
        '99.999% uptime SLA',
        'Disaster recovery',
        'Unlimited servers',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const services = [
    {
      icon: Server,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud with zero downtime and data integrity assurance',
      features: ['Zero-downtime migration', 'Data validation', 'Performance optimization', 'Cost analysis']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Managed database services with automated backups and performance tuning',
      features: ['Automated backups', 'Performance tuning', 'High availability', 'Security hardening']
    },
    {
      icon: Network,
      title: 'Network Architecture',
      description: 'Secure and scalable network design with load balancing and CDN integration',
      features: ['Load balancing', 'CDN setup', 'VPN configuration', 'DDoS protection']
    },
    {
      icon: Lock,
      title: 'Security Services',
      description: 'Comprehensive security solutions including threat detection and compliance',
      features: ['Threat detection', 'Compliance management', 'Security audits', 'Incident response']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40% with intelligent resource optimization',
      metric: '40% Cost Savings'
    },
    {
      icon: Zap,
      title: 'Performance Boost',
      description: 'Improve application performance with auto-scaling and load balancing',
      metric: '300% Performance Gain'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Bank-level security with advanced threat protection and compliance',
      metric: '99.9% Security Uptime'
    },
    {
      icon: Clock,
      title: 'Faster Deployment',
      description: 'Deploy applications 10x faster with automated CI/CD pipelines',
      metric: '10x Faster Deployment'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Financial Services Corp.',
      role: 'CTO',
      content: 'The cloud migration was flawless. We achieved 99.99% uptime and reduced costs by 45% while improving performance significantly.',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      company: 'E-commerce Giant',
      role: 'VP of Engineering',
      content: 'The auto-scaling capabilities handle our traffic spikes perfectly. Our Black Friday traffic was 10x normal levels with zero issues.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Healthcare Solutions',
      role: 'IT Director',
      content: 'The security and compliance features gave us peace of mind. We passed our SOC 2 audit with flying colors.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Cloud Infrastructure - Zion Tech Group | Enterprise Cloud Solutions & Migration</title>
        <meta name="description" content="Comprehensive cloud infrastructure solutions including migration, security, and optimization. Achieve 99.99% uptime and reduce costs by 40%." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, GCP, cloud security, auto-scaling, cloud optimization" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                ☁️ Enterprise Cloud Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Advanced Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cloud infrastructure solutions that deliver 99.99% uptime, reduce costs by 40%, and scale seamlessly. 
              From migration to optimization, we handle everything.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                <span>99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                <span>40% Cost Reduction</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                <span>Zero-Downtime Migration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#demo" 
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Cloud Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cloud infrastructure solutions are designed for enterprise-grade performance and reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud services to meet all your infrastructure needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Cloud Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-2xl font-bold text-blue-400">{benefit.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful cloud transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
                <p className="text-gray-300">Comprehensive analysis of your current infrastructure and requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Design</h3>
                <p className="text-gray-300">Custom cloud architecture designed for your specific needs and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Migration</h3>
                <p className="text-gray-300">Seamless migration with zero downtime and complete data integrity.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
                <p className="text-gray-300">Continuous monitoring and optimization for peak performance and cost efficiency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your infrastructure needs. All plans include our core cloud services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-blue-400/50 shadow-2xl shadow-blue-500/25' 
                      : 'border-white/10 hover:border-blue-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : 'Contact Sales'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-blue-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of enterprises that trust our cloud infrastructure solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-blue-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-blue-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of enterprises using our cloud solutions to achieve 99.99% uptime and reduce costs by 40%. 
                Get a free assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Cloud className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free assessment • ✓ No obligation • ✓ Custom solution design</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CloudInfrastructureAdvancedPage;