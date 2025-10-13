import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Database,
  Smartphone,
  BarChart3,
  Code,
  Globe,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Services' },
    { id: 'it', name: 'IT Services' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' }
  ];

  const services = [
    {
      id: 'ai-analytics',
      category: 'ai',
      icon: Brain,
      title: 'AI-Powered Analytics Platform',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      price: '$299/month',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom ML models',
        'Interactive dashboards',
        'API integration',
        '24/7 monitoring'
      ],
      benefits: [
        'Increase decision-making speed by 80%',
        'Reduce data analysis time by 90%',
        'Improve forecast accuracy by 95%',
        'ROI typically achieved within 3 months'
      ],
      popular: true
    },
    {
      id: 'cloud-infrastructure',
      category: 'cloud',
      icon: Cloud,
      title: 'Enterprise Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for businesses of all sizes.',
      price: '$199/month',
      features: [
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Multi-region deployment',
        'Backup & disaster recovery',
        '24/7 technical support',
        'Compliance certifications'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Scale instantly with demand',
        'Enhanced security and compliance',
        'Global performance optimization'
      ],
      popular: false
    },
    {
      id: 'cybersecurity-suite',
      category: 'security',
      icon: Shield,
      title: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      price: '$399/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Security monitoring',
        'Incident response',
        'Compliance reporting',
        'Security training'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 95%',
        'Ensure compliance with regulations',
        '24/7 threat monitoring'
      ],
      popular: true
    },
    {
      id: 'process-automation',
      category: 'it',
      icon: Zap,
      title: 'Intelligent Process Automation',
      description: 'Streamline your workflows with AI-powered automation solutions.',
      price: '$149/month',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Integration tools',
        'Custom automation rules',
        'Performance analytics'
      ],
      benefits: [
        'Reduce manual work by 70%',
        'Improve process efficiency by 85%',
        'Eliminate human errors',
        'Scale operations without additional staff'
      ],
      popular: false
    },
    {
      id: 'customer-ai',
      category: 'ai',
      icon: Users,
      title: 'Customer Experience AI',
      description: 'Enhance customer satisfaction with intelligent AI-powered support systems.',
      price: '$249/month',
      features: [
        'Smart chatbots',
        'Sentiment analysis',
        'Multi-language support',
        'Customer journey mapping',
        'Predictive support',
        'Analytics dashboard'
      ],
      benefits: [
        'Improve customer satisfaction by 60%',
        'Reduce support costs by 50%',
        '24/7 customer support',
        'Personalized customer experiences'
      ],
      popular: false
    },
    {
      id: 'business-intelligence',
      category: 'it',
      icon: BarChart3,
      title: 'Business Intelligence Platform',
      description: 'Transform your data into strategic insights with our comprehensive BI solution.',
      price: '$349/month',
      features: [
        'Data visualization',
        'Custom reports',
        'Real-time alerts',
        'Mobile access',
        'Data integration',
        'Advanced analytics'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify new opportunities',
        'Monitor KPIs in real-time',
        'Improve operational efficiency'
      ],
      popular: true
    },
    {
      id: 'mobile-apps',
      category: 'it',
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Custom mobile applications for iOS and Android with modern UI/UX design.',
      price: '$2,999/project',
      features: [
        'Native iOS & Android apps',
        'Cross-platform solutions',
        'Modern UI/UX design',
        'API integration',
        'App store optimization',
        'Ongoing maintenance'
      ],
      benefits: [
        'Reach customers on mobile devices',
        'Improve user engagement',
        'Increase brand visibility',
        'Generate additional revenue streams'
      ],
      popular: false
    },
    {
      id: 'data-warehouse',
      category: 'cloud',
      icon: Database,
      title: 'Data Warehouse Solutions',
      description: 'Centralized data storage and management for enterprise-scale analytics.',
      price: '$499/month',
      features: [
        'Centralized data storage',
        'ETL/ELT processes',
        'Data quality management',
        'Scalable architecture',
        'Advanced security',
        'Real-time synchronization'
      ],
      benefits: [
        'Unified view of all data',
        'Improved data quality',
        'Faster analytics queries',
        'Better compliance and governance'
      ],
      popular: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI analytics',
        'Cloud hosting (1 region)',
        'Email support',
        'Standard security',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI analytics',
        'Multi-region cloud',
        '24/7 phone support',
        'Advanced security suite',
        'Real-time monitoring',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'For large organizations',
      features: [
        'Full AI platform access',
        'Global cloud infrastructure',
        'Dedicated account manager',
        'Enterprise security',
        'Custom development',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including analytics, cloud infrastructure, cybersecurity, automation, and more. Transform your business today." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, business automation, data analytics, mobile apps" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-slate-900 rounded-xl p-8 hover:bg-slate-800 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                    <ArrowRight className="inline w-5 h-5 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Flexible <span className="text-cyan-400">Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core services with different levels of support and features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-8 relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-cyan-400">{tier.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-cyan-400">Our Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fast Implementation</h3>
              <p className="text-gray-300">Get up and running in days, not months, with our streamlined deployment process.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">Reduce operational costs by up to 40% with our efficient solutions.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Compliant</h3>
              <p className="text-gray-300">Enterprise-grade security with compliance certifications for all major standards.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Support</h3>
              <p className="text-gray-300">24/7 support across multiple time zones with local expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Contact our experts today for a free consultation and discover how our services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}