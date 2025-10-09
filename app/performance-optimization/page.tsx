import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, BarChart, CheckCircle, Star, TrendingUp, Clock, Phone, Mail, MapPin, Brain, Shield, Settings, Globe, Cpu, Database, Wifi, Server, Monitor, HardDrive, Lock, RefreshCw, Target, Gauge } from 'lucide-react';

const PerformanceOptimizationPage: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'Application Performance Optimization',
      description: 'Optimize your applications for maximum speed, efficiency, and user experience.',
      features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Balancing'],
      benefits: ['Faster Applications', 'Better User Experience', 'Reduced Server Load', 'Cost Savings']
    },
    {
      icon: Database,
      title: 'Database Performance Tuning',
      description: 'Advanced database optimization to maximize query performance and reduce response times.',
      features: ['Query Optimization', 'Index Tuning', 'Resource Management', 'Performance Monitoring'],
      benefits: ['Faster Queries', 'Reduced Load', 'Better Scalability', 'Improved Reliability']
    },
    {
      icon: Server,
      title: 'Server Performance Optimization',
      description: 'Optimize server configurations and resources for maximum performance and efficiency.',
      features: ['Resource Optimization', 'Configuration Tuning', 'Load Balancing', 'Monitoring'],
      benefits: ['Better Performance', 'Reduced Costs', 'Higher Availability', 'Scalability']
    },
    {
      icon: Globe,
      title: 'Network Performance Optimization',
      description: 'Optimize network infrastructure for maximum speed, reliability, and efficiency.',
      features: ['Traffic Analysis', 'Bandwidth Optimization', 'QoS Configuration', 'Network Tuning'],
      benefits: ['Faster Connectivity', 'Reduced Latency', 'Better Reliability', 'Cost Efficiency']
    },
    {
      icon: Monitor,
      title: 'Website Performance Optimization',
      description: 'Optimize website speed, loading times, and user experience for better SEO and conversions.',
      features: ['Page Speed Optimization', 'Image Optimization', 'Caching Implementation', 'CDN Setup'],
      benefits: ['Faster Loading', 'Better SEO', 'Higher Conversions', 'Improved User Experience']
    },
    {
      icon: Cpu,
      title: 'System Performance Monitoring',
      description: 'Continuous monitoring and optimization of system performance with real-time analytics.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Systems', 'Optimization Recommendations'],
      benefits: ['Proactive Optimization', 'Better Visibility', 'Faster Issue Resolution', 'Continuous Improvement']
    }
  ];

  const optimizationAreas = [
    { name: 'Application Performance', description: 'Optimize application code and architecture for maximum performance' },
    { name: 'Database Performance', description: 'Tune databases for optimal query performance and resource usage' },
    { name: 'Server Performance', description: 'Optimize server configurations and resource allocation' },
    { name: 'Network Performance', description: 'Optimize network infrastructure for speed and reliability' },
    { name: 'Website Performance', description: 'Optimize website speed and user experience' },
    { name: 'Cloud Performance', description: 'Optimize cloud infrastructure and resource utilization' },
    { name: 'Mobile Performance', description: 'Optimize mobile applications and responsive design' },
    { name: 'API Performance', description: 'Optimize API endpoints and response times' }
  ];

  const pricingPlans = [
    {
      name: 'Performance Audit',
      price: '$2,500',
      period: '/audit',
      description: 'Comprehensive performance analysis',
      features: [
        'Performance assessment',
        'Bottleneck identification',
        'Optimization recommendations',
        'Detailed report',
        'Implementation roadmap',
        '30-day support'
      ],
      popular: false
    },
    {
      name: 'Optimization Project',
      price: '$5,000',
      period: '/month',
      description: 'Ongoing optimization services',
      features: [
        'Performance monitoring',
        'Continuous optimization',
        'Regular reporting',
        'Priority support',
        'Implementation support',
        'Performance testing',
        'Code optimization',
        'Database tuning'
      ],
      popular: true
    },
    {
      name: 'Performance Retainer',
      price: '$10,000',
      period: '/month',
      description: 'Dedicated performance team',
      features: [
        'Dedicated performance engineer',
        'Unlimited optimizations',
        '24/7 monitoring',
        'Proactive optimization',
        'Custom solutions',
        'Executive reporting',
        'Strategic planning',
        'Vendor management'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'TechFlow Systems',
      role: 'CTO',
      content: 'Zion Tech Group\'s performance optimization increased our application speed by 300%. Our users are thrilled with the improved experience.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'DataCorp Industries',
      role: 'IT Director',
      content: 'The database optimization reduced our query times by 80% and cut our server costs by 50%. Amazing results!',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'InnovateTech',
      role: 'CEO',
      content: 'Our website now loads 5x faster, and our conversion rate increased by 40%. The performance optimization was worth every penny.',
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
              Performance Optimization
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Maximize Performance, Minimize Costs
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Expert performance optimization services to maximize your system speed, efficiency, and user experience. 
              Our optimization experts identify bottlenecks and implement solutions that deliver measurable performance improvements.
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Average Speed Increase</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Systems Optimized</div>
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
            Our Optimization Services
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

      {/* Optimization Areas Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Performance Areas We Optimize
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Gauge className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{area.name}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Optimization Packages
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
            Ready to Optimize Your Performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our performance optimization experts help you achieve maximum speed and efficiency.
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

export default PerformanceOptimizationPage;