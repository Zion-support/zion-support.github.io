import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, TrendingUp, Zap, Users, BarChart3 } from 'lucide-react';
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
      description: 'Automatically scale resources based on demand to optimize costs and performance'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization for maximum efficiency and minimal downtime'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Team Collaboration',
      description: 'Centralized management with role-based access control and team collaboration tools'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-red-400" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights into resource usage, costs, and performance metrics'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and data integrity',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Validation', 'Go-Live Support']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using modern IaC tools',
      features: ['Terraform', 'CloudFormation', 'Ansible', 'GitOps', 'CI/CD Integration']
    },
    {
      title: 'Monitoring & Alerting',
      description: '24/7 monitoring with intelligent alerting and automated incident response',
      features: ['Real-time Monitoring', 'Custom Dashboards', 'Alert Management', 'Incident Response', 'Performance Analytics']
    },
    {
      title: 'Cost Optimization',
      description: 'Intelligent cost management and optimization strategies to reduce cloud spending',
      features: ['Cost Analysis', 'Resource Optimization', 'Reserved Instances', 'Spot Instances', 'Budget Management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Enhanced security',
        'Weekly reports',
        'Auto-scaling',
        'Cost optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Enterprise monitoring',
        'Dedicated support',
        'Advanced security',
        'Real-time reports',
        'Custom solutions',
        'SLA guarantee',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'TechCorp Inc.',
      content: 'Cloud infrastructure management reduced our operational costs by 40% and improved system reliability by 95%.',
      rating: 5
    },
    {
      name: 'Sarah Rodriguez',
      company: 'Data Solutions',
      content: 'The auto-scaling feature saved us from multiple outages during traffic spikes. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'E-commerce Platform',
      content: 'Professional service with excellent support. Our cloud infrastructure has never been more stable.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <Cloud className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Cloud Infrastructure Management</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure Management
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your cloud infrastructure with our comprehensive management solutions. 
              Reduce costs, improve performance, and ensure security across all cloud platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                to="#demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Infrastructure Management Features
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive cloud management solutions for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-gray-300 text-lg">
              End-to-end cloud infrastructure solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Management Packages
            </h2>
            <p className="text-gray-300 text-lg">
              Choose the package that fits your infrastructure needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-slate-700 rounded-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
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
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Cloud Leaders
            </h2>
            <p className="text-gray-300 text-lg">
              See what our clients say about our cloud infrastructure management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let us help you maximize the value of your cloud investment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}