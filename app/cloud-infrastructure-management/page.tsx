import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, TrendingUp, Server, Zap, Globe } from 'lucide-react';
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
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to ensure optimal performance and cost efficiency'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and alerting to ensure optimal performance and uptime'
    },
    {
      icon: <Globe className="w-6 h-6 text-red-400" />,
      title: 'Global Deployment',
      description: 'Deploy and manage infrastructure across multiple regions and availability zones'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      features: ['Assessment & planning', 'Data migration', 'Application modernization', 'Post-migration support']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure using code for consistency and automation',
      features: ['Terraform/CloudFormation', 'Version control', 'Automated deployments', 'Environment management']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Implement DevOps practices and continuous integration/deployment',
      features: ['Pipeline automation', 'Container orchestration', 'Monitoring & logging', 'Security scanning']
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions',
      features: ['Automated backups', 'Cross-region replication', 'RTO/RPO optimization', 'Testing & validation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic cloud management',
        'Monthly health checks',
        'Email support',
        'Standard monitoring',
        'Basic security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      description: 'Advanced features for growing companies',
      features: [
        'Advanced cloud optimization',
        'Weekly health checks',
        'Priority support',
        'Advanced monitoring',
        'Security compliance',
        'Cost optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$25,000+',
      description: 'Complete solution for large organizations',
      features: [
        'Custom cloud architecture',
        '24/7 monitoring',
        'Dedicated team',
        'Advanced security',
        'Multi-cloud management',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'TechCorp Solutions',
      content: 'Zion Tech Group transformed our cloud infrastructure. We reduced costs by 45% and improved performance by 60%.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'VP of Engineering',
      company: 'InnovateTech Inc.',
      content: 'Their cloud migration service was flawless. Zero downtime and seamless transition to AWS.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'IT Director',
      company: 'Global Enterprises',
      content: 'The infrastructure management service has been game-changing. Our uptime is now 99.9% and costs are down 40%.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Optimize your cloud infrastructure with our comprehensive management services. 
            Reduce costs, improve performance, and ensure security across all cloud platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link 
              to="#services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Infrastructure Management Features
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Comprehensive cloud infrastructure management solutions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
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
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Our Cloud Services
          </h2>
          <p className="text-gray-300 text-center mb-12">
            End-to-end cloud infrastructure management and optimization
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Service Pricing
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Flexible pricing options for cloud infrastructure management
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
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
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Client Success Stories
          </h2>
          <p className="text-gray-300 text-center mb-12">
            See how we've helped companies optimize their cloud infrastructure
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">"{testimonial.content}"</blockquote>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let our experts help you reduce costs, improve performance, and ensure security
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
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
      </section>
    </Layout>
  );
}