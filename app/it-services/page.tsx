import React from 'react';
import { CheckCircle, ArrowRight, Server, Cloud, Shield, Database, Code, Smartphone, Globe, Cpu, Wifi, Settings, DollarSign, Star, Clock, TrendingUp, Users, BarChart3, Headphones } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with ongoing management and optimization',
      features: ['AWS/Azure/GCP migration', 'Cost optimization', 'Security compliance', '24/7 monitoring', 'Disaster recovery'],
      pricing: 'Starting at $2,500/month',
      link: '/cloud-migration',
      popular: true,
      category: 'Cloud Services'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital infrastructure',
      features: ['Security audits', 'Penetration testing', 'Firewall management', 'Incident response', 'Compliance consulting'],
      pricing: 'Starting at $1,800/month',
      link: '/cybersecurity',
      popular: true,
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable business insights and intelligence',
      features: ['Data warehousing', 'Custom dashboards', 'Predictive analytics', 'Real-time reporting', 'Data visualization'],
      pricing: 'Starting at $1,200/month',
      link: '/data-analytics',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your specific business requirements',
      features: ['Web applications', 'Mobile apps', 'API development', 'System integration', 'Maintenance & support'],
      pricing: 'Starting at $150/hour',
      link: '/custom-development',
      popular: true,
      category: 'Development'
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization services',
      features: ['Server management', 'Network setup', 'Backup solutions', 'Performance tuning', 'Hardware procurement'],
      pricing: 'Starting at $1,500/month',
      link: '/infrastructure-management',
      popular: false,
      category: 'Infrastructure'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['iOS development', 'Android development', 'Cross-platform', 'App store deployment', 'Maintenance'],
      pricing: 'Starting at $5,000/project',
      link: '/mobile-development',
      popular: true,
      category: 'Mobile'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with latest technologies',
      features: ['Responsive design', 'SEO optimization', 'E-commerce solutions', 'CMS development', 'Performance optimization'],
      pricing: 'Starting at $3,000/project',
      link: '/web-development',
      popular: true,
      category: 'Web'
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'System Integration',
      description: 'Connect and integrate disparate systems for seamless data flow',
      features: ['API integration', 'Data synchronization', 'Workflow automation', 'Legacy system migration', 'Testing & validation'],
      pricing: 'Starting at $2,000/project',
      link: '/system-integration',
      popular: false,
      category: 'Integration'
    },
    {
      icon: <Wifi className="w-8 h-8 text-yellow-500" />,
      title: 'Network Solutions',
      description: 'Design, implement, and manage secure and scalable network infrastructure',
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Troubleshooting', 'Upgrade planning'],
      pricing: 'Starting at $1,000/month',
      link: '/network-solutions',
      popular: false,
      category: 'Networking'
    }
  ];

  const categories = [
    'All', 'Cloud Services', 'Security', 'Analytics', 'Development', 'Infrastructure', 'Mobile', 'Web', 'Integration', 'Networking'
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions',
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your systems',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Optimize your IT spending with our transparent pricing and value-driven solutions',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business and adapt to changing requirements',
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'Enterprise Corp',
      content: 'Zion Tech\'s cloud migration service was exceptional. We reduced costs by 40% while improving performance.',
      rating: 5,
      service: 'Cloud Migration'
    },
    {
      name: 'Lisa Martinez',
      company: 'TechStart Inc.',
      content: 'Their cybersecurity solutions gave us peace of mind. Professional, thorough, and highly effective.',
      rating: 5,
      service: 'Cybersecurity'
    },
    {
      name: 'Robert Kim',
      company: 'DataFlow Systems',
      content: 'The custom software development exceeded our expectations. Delivered on time and within budget.',
      rating: 5,
      service: 'Custom Development'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current IT infrastructure and identify improvement opportunities.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'We design a comprehensive solution tailored to your specific business needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'We provide continuous monitoring, maintenance, and optimization services.'
    }
  ];

  const pricingTiers = [
    {
      plan: 'Basic',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: ['Basic monitoring', 'Email support', 'Monthly reports', 'Standard maintenance'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing companies',
      features: ['Advanced monitoring', 'Priority support', 'Weekly reports', 'Proactive maintenance', '24/7 phone support'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$7,500',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['Full monitoring suite', 'Dedicated support', 'Real-time reports', 'Predictive maintenance', '24/7 on-site support'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and infrastructure management. Transform your business with our expert solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, infrastructure management, system integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT services to modernize, secure, and optimize your technology infrastructure. 
            From cloud migration to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/micro-saas-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Micro SAAS
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 text-white hover:bg-white/20 border border-white/20"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full">
                      {service.category}
                    </span>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference with our expert IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we deliver exceptional IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service level that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border-2 border-white/30 text-white hover:border-purple-500 hover:text-purple-300'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  <p className="text-purple-300 text-xs mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert team help you modernize, secure, and optimize your technology stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}