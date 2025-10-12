import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, TrendingUp, Zap, Globe, Database } from 'lucide-react';
import Layout from '../layout';

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
      title: 'Auto-Scaling',
      description: 'Intelligent auto-scaling based on demand patterns and performance metrics'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
      title: 'Performance Optimization',
      description: 'Continuous optimization for cost, performance, and reliability'
    }
  ]

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      icon: <Globe className="w-5 h-5" />,
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Validation']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      icon: <Database className="w-5 h-5" />,
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Kubernetes']
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring and performance analytics',
      icon: <TrendingUp className="w-5 h-5" />,
      features: ['Real-time Monitoring', 'Alerting', 'Cost Optimization', 'Performance Analytics']
    },
    {
      title: 'Disaster Recovery',
      description: 'Robust backup and disaster recovery solutions',
      icon: <Shield className="w-5 h-5" />,
      features: ['Backup Strategies', 'Recovery Planning', 'Testing', 'Compliance']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      description: 'Perfect for small businesses',
      features: [
        'Basic cloud setup',
        'Single cloud provider',
        'Standard monitoring',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      description: 'Ideal for growing companies',
      features: [
        'Multi-cloud management',
        'Advanced monitoring',
        'Auto-scaling setup',
        'Priority support',
        'Weekly reports',
        'Security compliance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$20,000',
      description: 'For large organizations',
      features: [
        'Custom cloud architecture',
        '24/7 monitoring',
        'Dedicated team',
        'Custom integrations',
        'Real-time reporting',
        'Full compliance suite'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'TechCorp Inc.',
      content: 'Our cloud infrastructure is now 40% more efficient and costs 30% less. The migration was flawless.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'DataFlow Systems',
      content: 'The auto-scaling and monitoring features have transformed our operations. Highly recommended.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      company: 'CloudFirst Solutions',
      content: 'Professional team with deep cloud expertise. Our infrastructure is now enterprise-ready.',
      rating: 5
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4">
              Cloud Infrastructure Management
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Optimize your cloud infrastructure with our expert management services. 
              Multi-cloud solutions, security, performance optimization, and cost management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core Infrastructure Features
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive cloud infrastructure management solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-gray-300 text-lg">
              End-to-end cloud infrastructure solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700 p-8 rounded-lg">
                <div className="flex items-start mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Service Packages
            </h2>
            <p className="text-gray-300 text-lg">
              Choose the package that fits your infrastructure needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-700 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Cloud Leaders
            </h2>
            <p className="text-gray-300 text-lg">
              See what our clients say about our cloud infrastructure services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts help you build a robust, scalable, and cost-effective cloud infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}