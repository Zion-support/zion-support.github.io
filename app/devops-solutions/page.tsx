import React from 'react';
import { CheckCircle, ArrowRight, Settings, Zap, Star, Users, Clock, BarChart3, Target, Globe, Shield, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function DevOpsSolutionsPage() {
  const features = [
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: 'CI/CD Pipeline Setup',
      description: 'Automated continuous integration and deployment pipelines for faster, more reliable software delivery.',
      features: ['Automated testing', 'Code quality checks', 'Deployment automation', 'Rollback capabilities', 'Environment management', 'Performance monitoring'],
      price: 'Starting at $1,999/month',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure using code with version control and automated deployments.',
      features: ['Terraform automation', 'CloudFormation templates', 'Infrastructure monitoring', 'Cost optimization', 'Security compliance', 'Disaster recovery'],
      price: 'Starting at $2,499/month',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and alerting solutions for optimal system performance.',
      features: ['Application monitoring', 'Infrastructure metrics', 'Log aggregation', 'Alert management', 'Performance analytics', 'Capacity planning'],
      price: 'Starting at $1,499/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Faster Deployments',
      description: 'Reduce deployment time by 80% with automated CI/CD pipelines and infrastructure automation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Higher Reliability',
      description: 'Achieve 99.9% uptime with robust monitoring, automated testing, and failover systems.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by 30% with efficient resource management and automation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Team Productivity',
      description: 'Increase development team productivity by 50% with streamlined workflows and automation.'
    }
  ];

  const tools = [
    {
      name: 'Docker & Kubernetes',
      description: 'Container orchestration and microservices management',
      icon: <Code className="w-6 h-6 text-blue-500" />
    },
    {
      name: 'Jenkins & GitLab CI',
      description: 'Continuous integration and deployment automation',
      icon: <Settings className="w-6 h-6 text-orange-500" />
    },
    {
      name: 'Terraform & Ansible',
      description: 'Infrastructure as code and configuration management',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      name: 'Prometheus & Grafana',
      description: 'Monitoring, alerting, and visualization solutions',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Deployed' },
    { number: '80%', label: 'Faster Deployments' },
    { number: '99.9%', label: 'Uptime Achieved' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small teams and simple applications',
      features: ['Basic CI/CD setup', 'Single environment', 'Standard monitoring', 'Email support', 'Monthly reviews', 'Basic automation'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing teams and complex applications',
      features: ['Advanced CI/CD', 'Multi-environment', 'Comprehensive monitoring', 'Priority support', 'Weekly reviews', 'Full automation'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large organizations and mission-critical systems',
      features: ['Custom DevOps', 'Unlimited environments', 'Advanced monitoring', 'Dedicated support', 'Daily reviews', 'Custom automation'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>DevOps Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps solutions and services. Streamline development workflows with CI/CD, infrastructure automation, and monitoring solutions." />
        <meta name="keywords" content="DevOps solutions, CI/CD, infrastructure automation, monitoring, containerization, cloud DevOps" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              DevOps Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate your software delivery with our comprehensive DevOps solutions. 
              Streamline workflows, automate deployments, and ensure reliable operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/it-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All IT Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive DevOps Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to modernize your development and operations workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{feature.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevOps Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with the latest DevOps tools and technologies to deliver optimal solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our DevOps Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of modern DevOps practices with our expert team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevOps Service Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to match your team size and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join leading companies using our DevOps solutions to accelerate development and improve reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Settings className="w-5 h-5 mr-2" />
              Get Free Assessment
            </Link>
            <Link
              to="/it-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}