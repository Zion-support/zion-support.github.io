import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, TrendingUp, Server } from 'lucide-react';
import Layout from '../layout';
import React from 'react'
import { Link } from 'react-router-dom'
import { Cloud, Shield, TrendingUp, Server, Zap, BarChart3 } from 'lucide-react'
import Layout from '../layout'

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: '24/7 Monitoring',
      description: 'Proactive monitoring with automated scaling, performance optimization, and incident response'
    };
  ];

  const managementFeatures = [
    {
      category: 'Infrastructure Management',
      items: ['Server Provisioning', 'Load Balancing', 'Auto Scaling', 'Resource Monitoring', 'Backup & Recovery', 'Disaster Recovery']
    },
    {
      category: 'Security & Compliance',
      items: ['Identity Management', 'Access Control', 'Encryption', 'Vulnerability Scanning', 'Compliance Auditing', 'Security Monitoring']
    },
    {
      category: 'Cost Management',
      items: ['Cost Analysis', 'Resource Optimization', 'Budget Alerts', 'Usage Tracking', 'Cost Forecasting', 'Right-sizing Recommendations']
    },
    {
      category: 'Support & Maintenance',
      items: ['24/7 Support', 'Proactive Monitoring', 'Incident Response', 'Performance Tuning', 'Capacity Planning', 'Health Checks']
    }
  ];
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to ensure optimal performance and cost efficiency'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and alerting with comprehensive dashboards and automated incident response'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Analytics & Insights',
      description: 'Advanced analytics to optimize infrastructure performance and make data-driven decisions'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 cloud accounts',
        'Basic monitoring',
        'Email support',
        'Standard integrations',
        'Cost optimization reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 50 cloud accounts',
        'Advanced monitoring',
        'Priority support',
        'Custom integrations',
        'Automated scaling',
        'Security compliance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Unlimited cloud accounts',
        'Custom dashboards',
        'Dedicated support',
        'White-label solution',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Financial Services',
      content: 'Cloud Infrastructure Management reduced our operational costs by 35% while improving performance and security.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Platform',
      content: 'The automated scaling and monitoring saved us from multiple outages. Our uptime is now 99.99%.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Healthcare Provider',
      content: 'HIPAA compliance was seamless with their security framework. Our auditors were very impressed.',
      rating: 5
    }
  ];
  ]

  const testimonials = [
    {
      name: 'Jennifer Liu',
      company: 'TechCorp Solutions',
      content: 'Our cloud costs dropped by 35% in the first quarter. The optimization recommendations are spot-on.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'Global Enterprises',
      content: 'The multi-cloud management is seamless. We can now manage all our cloud resources from one dashboard.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'StartupScale Inc',
      content: 'Auto-scaling saved us during traffic spikes. The system handled 10x normal load without any issues.',
      rating: 5
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center"></div>
          <div className="mb-4"></div>
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"></span>
              Enterprise Cloud Management
            </span>
          </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 flex items-center justify-center px-4"></div>
        <div className="max-w-6xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. 
            Scale efficiently while maintaining peak performance and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link to="#demo" className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
              Get Started
            </Link>
            Optimize your cloud infrastructure with intelligent management, automated scaling, 
            and cost optimization across all major cloud platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
              Start Free Trial
            </button>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Cloud Management
            </h2>
            <p className="text-gray-300 text-lg"></p>
              Everything you need to manage, secure, and optimize your cloud infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900"></div>
        <div className="max-w-6xl mx-auto px-4"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Comprehensive Cloud Management
          </h2>
          <p className="text-gray-300 text-center mb-12"></p>
            Everything you need to manage and optimize your cloud infrastructure
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors"></div>
                <div className="flex items-center mb-4"></div>
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Management Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Complete Management Suite
            </h2>
            <p className="text-gray-300 text-lg"></p>
              Comprehensive tools and services for every aspect of cloud infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {managementFeatures.map((category, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700"></div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-gray-300 text-lg"></p>
              Choose the plan that fits your infrastructure needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border ${plan.popular ? 'border-cyan-500' : 'border-gray-700'} relative`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium"></span>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-900"></div>
        <div className="max-w-6xl mx-auto px-4"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Flexible Pricing Plans
          </h2>
          <p className="text-gray-300 text-center mb-12"></p>
            Choose the plan that scales with your infrastructure needs
          </p>
          <div className="grid md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border-2 relative ${plan.popular ? 'border-cyan-400' : 'border-gray-700'}`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold"></span>
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6"></div>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Cloud className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="#contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular 
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-300 text-lg"></p>
              Join hundreds of companies optimizing their cloud infrastructure
            </p>
          </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-900"></div>
        <div className="max-w-6xl mx-auto px-4"></div>
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Trusted by Cloud Leaders
          </h2>
          <p className="text-gray-300 text-center mb-12"></p>
            See how companies are optimizing their cloud infrastructure
          </p>
          <div className="grid md:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700"></div>
                <div className="flex mb-4"></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div></div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>
            Get started with our cloud infrastructure management services and transform your cloud operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link to="#contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </Link>
          </div>
      </section>
    </Layout>
  );
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-900"></div>
        <div className="max-w-4xl mx-auto text-center px-4"></div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8"></p>
            Join industry leaders who are already maximizing their cloud efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Your Free Trial
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
      </div>
    </Layout>
  )
}