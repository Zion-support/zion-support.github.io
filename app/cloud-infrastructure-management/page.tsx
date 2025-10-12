import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, ArrowRight, CheckCircle, Star, TrendingUp, Server, Shield } from 'lucide-react';

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds'
    },
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: 'Automated Scaling',
      description: 'Intelligent auto-scaling that adjusts resources based on demand and performance metrics'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security & Compliance',
      description: 'Comprehensive security monitoring and compliance management across all cloud environments'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: 'Cost Optimization',
      description: 'Advanced cost analysis and optimization recommendations to reduce cloud spending'
    }
  ];

  const managementFeatures = [
    {
      category: 'Infrastructure Management',
      items: ['Multi-Cloud Support', 'Resource Provisioning', 'Load Balancing', 'Auto-scaling', 'Monitoring', 'Backup & Recovery']
    },
    {
      category: 'Security & Compliance',
      items: ['Security Monitoring', 'Access Control', 'Compliance Auditing', 'Threat Detection', 'Data Encryption', 'Vulnerability Scanning']
    },
    {
      category: 'Cost Management',
      items: ['Cost Analysis', 'Budget Tracking', 'Resource Optimization', 'Waste Detection', 'Reserved Instances', 'Cost Forecasting']
    },
    {
      category: 'Monitoring & Analytics',
      items: ['Performance Monitoring', 'Health Checks', 'Log Analysis', 'Alerting', 'Custom Dashboards', 'Reporting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Basic reporting',
        'Single cloud support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Advanced security',
        'Custom reporting',
        'Multi-cloud support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Premium monitoring',
        'Dedicated support',
        'Enterprise security',
        'Custom dashboards',
        'All cloud providers',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Tech Solutions Inc',
      content: 'Cloud Infrastructure Management has simplified our multi-cloud operations. We reduced costs by 35% and improved reliability significantly.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'E-commerce Platform',
      content: 'The automated scaling and security features have been game-changers for our platform. Uptime has improved to 99.9%.',
      rating: 5
    },
    {
      name: 'Sarah Wilson',
      company: 'Financial Services',
      content: 'The compliance monitoring and cost optimization features have helped us maintain security standards while reducing cloud spending.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure <span className="text-cyan-400">Management</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your cloud operations with our comprehensive infrastructure management solution that 
              provides visibility, control, and optimization across all your cloud environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/it-services" 
                className="inline-flex items-center px-8 py-4 border border-cyan-600 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful capabilities for cloud infrastructure management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Management</h2>
              <p className="text-xl text-gray-300">Everything you need for effective cloud infrastructure management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {managementFeatures.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your infrastructure needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations using our cloud infrastructure management to reduce costs, improve security, and enhance performance.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}