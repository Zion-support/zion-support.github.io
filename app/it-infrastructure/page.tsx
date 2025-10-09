'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Server, Database, Cloud, Network, Settings, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Smartphone, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const [infrastructureAssessment, setInfrastructureAssessment] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleInfrastructureAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate infrastructure analysis
    setTimeout(() => {
      setInfrastructureAssessment({
        overallHealth: 78,
        performance: 85,
        security: 72,
        scalability: 80,
        recommendations: [
          'Upgrade server hardware to improve performance by 30%',
          'Implement redundant power supplies for 99.9% uptime',
          'Add load balancers to distribute traffic efficiently',
          'Update security protocols to meet latest standards',
          'Implement automated backup systems for data protection'
        ],
        costSavings: {
          current: 15000,
          optimized: 8500,
          savings: 6500,
          roi: 43.3
        },
        improvements: [
          { area: 'Server Performance', current: 75, target: 95, improvement: 20 },
          { area: 'Network Speed', current: 80, target: 98, improvement: 18 },
          { area: 'Security Score', current: 72, target: 95, improvement: 23 },
          { area: 'Uptime', current: 99.2, target: 99.9, improvement: 0.7 }
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server setup, configuration, and ongoing management',
      features: ['Hardware installation', 'OS configuration', 'Performance monitoring', '24/7 support'],
      price: '$999/month'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure',
      features: ['Network design', 'Router configuration', 'Switch management', 'Security implementation'],
      price: '$1,099/month'
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Expert database setup, optimization, and maintenance services',
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Security hardening'],
      price: '$899/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      features: ['Migration planning', 'Data transfer', 'Application deployment', 'Cost optimization'],
      price: '$1,299/month'
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security solutions to protect your infrastructure',
      features: ['Firewall setup', 'Intrusion detection', 'Vulnerability scanning', 'Compliance audit'],
      price: '$1,599/month'
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Complete system administration and maintenance services',
      features: ['User management', 'System updates', 'Performance tuning', 'Troubleshooting'],
      price: '$1,199/month'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '99.9% Uptime Guarantee',
      description: 'Reliable infrastructure with guaranteed uptime and performance'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your data and systems'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring and support for all infrastructure components'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in IT infrastructure'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Infrastructure',
      price: '$2,999',
      period: '/month',
      description: 'Essential infrastructure for small businesses',
      features: [
        'Up to 5 servers',
        'Basic network setup',
        'Standard security',
        'Email support',
        'Monthly maintenance',
        'Backup solutions'
      ],
      popular: false
    },
    {
      name: 'Professional Infrastructure',
      price: '$4,999',
      period: '/month',
      description: 'Comprehensive infrastructure for growing businesses',
      features: [
        'Up to 20 servers',
        'Advanced network design',
        'Enhanced security',
        'Priority support',
        'Weekly maintenance',
        'Disaster recovery',
        'Performance monitoring',
        'Load balancing'
      ],
      popular: true
    },
    {
      name: 'Enterprise Infrastructure',
      price: '$9,999',
      period: '/month',
      description: 'Enterprise-grade infrastructure for large organizations',
      features: [
        'Unlimited servers',
        'Custom network architecture',
        'Enterprise security',
        '24/7 dedicated support',
        'Daily maintenance',
        'Advanced disaster recovery',
        'Real-time monitoring',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'CTO',
      company: 'Enterprise Corp',
      content: 'Our infrastructure has never been more reliable. The 99.9% uptime guarantee has been consistently met, and our performance has improved significantly.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'IT Director',
      company: 'Tech Solutions Inc.',
      content: 'The migration to cloud infrastructure was seamless. Our costs decreased by 40% while performance improved by 60%.',
      rating: 5
    },
    {
      name: 'John Anderson',
      role: 'Operations Manager',
      company: 'Global Systems',
      content: 'The security implementation has given us peace of mind. Our systems are now fully compliant and protected against all threats.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Infrastructure Services - Zion Tech Group"
        description="Comprehensive IT infrastructure solutions including server management, network design, cloud migration, and security implementation. 99.9% uptime guarantee with 24/7 support."
        keywords={['IT infrastructure', 'server management', 'network design', 'cloud migration', 'database administration', 'system administration']}
        canonicalUrl="https://ziontechgroup.com/it-infrastructure"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                IT Infrastructure Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and maintain robust IT infrastructure with our comprehensive solutions. From server management 
              to cloud migration, we ensure 99.9% uptime and optimal performance for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Analyze Infrastructure
              </button>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Infrastructure Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Analysis Demo */}
        <section id="demo-section" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Infrastructure Health Analysis
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
              <div className="text-center mb-8">
                <button
                  onClick={handleInfrastructureAnalysis}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? 'Analyzing Infrastructure...' : 'Analyze Your Infrastructure'}
                </button>
              </div>
              
              {infrastructureAssessment ? (
                <div className="space-y-8">
                  {/* Overall Health Score */}
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Infrastructure Health Score</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{infrastructureAssessment.overallHealth}/100</span>
                      <div className="text-right">
                        <div className="text-gray-300 text-sm">Performance: {infrastructureAssessment.performance}%</div>
                        <div className="text-gray-300 text-sm">Security: {infrastructureAssessment.security}%</div>
                        <div className="text-gray-300 text-sm">Scalability: {infrastructureAssessment.scalability}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-4 rounded-full transition-all duration-1000"
                        style={{ width: `${infrastructureAssessment.overallHealth}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Cost Savings Analysis */}
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Cost Optimization Analysis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-400">${infrastructureAssessment.costSavings.current.toLocaleString()}</div>
                        <div className="text-gray-300 text-sm">Current Monthly Cost</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">${infrastructureAssessment.costSavings.optimized.toLocaleString()}</div>
                        <div className="text-gray-300 text-sm">Optimized Cost</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">${infrastructureAssessment.costSavings.savings.toLocaleString()}</div>
                        <div className="text-gray-300 text-sm">Monthly Savings</div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <span className="text-lg font-bold text-green-400">ROI: {infrastructureAssessment.costSavings.roi}%</span>
                    </div>
                  </div>

                  {/* Improvement Areas */}
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Improvement Opportunities</h3>
                    <div className="space-y-4">
                      {infrastructureAssessment.improvements.map((improvement, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-white font-medium">{improvement.area}</div>
                            <div className="text-gray-400 text-sm">
                              Current: {improvement.current}% → Target: {improvement.target}%
                            </div>
                          </div>
                          <div className="text-cyan-400 font-bold">+{improvement.improvement}%</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">AI-Generated Recommendations</h3>
                    <div className="space-y-3">
                      {infrastructureAssessment.recommendations.map((recommendation, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300">{recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Server className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Click "Analyze Your Infrastructure" to get a comprehensive health assessment</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Infrastructure Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-cyan-400">{service.price}</span>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Infrastructure Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Infrastructure Service Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                } cyber-card`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
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

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Client Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Infrastructure?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let us help you build a robust, scalable, and secure IT infrastructure that supports your business growth.
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
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ITInfrastructurePage;