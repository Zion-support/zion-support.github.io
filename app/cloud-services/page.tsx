import React from 'react';
import { CheckCircle, Zap, Shield, Globe, Server, Database, Cloud } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud-First Solutions',
      description: 'Modern cloud-native applications and infrastructure designed for scalability and performance'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures and compliance standards to protect your data and applications'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized cloud infrastructure for maximum performance and minimal latency'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide cloud deployment and support for international businesses with multi-region availability'
    },
    {
      icon: Server,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling cloud infrastructure that grows with your business needs'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data storage, backup, and management solutions with high availability'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to the cloud with zero downtime',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Performance Optimization']
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure, and cost-effective cloud architectures',
      features: ['Infrastructure Design', 'Security Implementation', 'Cost Optimization', 'Monitoring Setup']
    },
    {
      title: 'Cloud Management',
      description: 'Ongoing management and optimization of your cloud infrastructure',
      features: ['24/7 Monitoring', 'Performance Tuning', 'Security Updates', 'Cost Management']
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Bridge your on-premises and cloud environments for maximum flexibility',
      features: ['Hybrid Architecture', 'Data Synchronization', 'Unified Management', 'Security Integration']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      features: [
        'Basic cloud setup',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Up to 5 users'
      ]
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      features: [
        'Advanced cloud features',
        'Priority support',
        'Enhanced security',
        'Weekly reports',
        'Up to 25 users',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Full cloud suite',
        '24/7 support',
        'Enterprise security',
        'Real-time monitoring',
        'Unlimited users',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, architecture, and management services." />
        <meta name="keywords" content="cloud services, cloud migration, cloud architecture, AWS, Azure, GCP, cloud management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive cloud solutions. From migration to management, 
              we help you leverage the power of the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Solutions
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Our Cloud Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-blue-400 ring-2 ring-blue-400/50' : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our cloud experts help you design and implement the perfect cloud solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Cloud Journey
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;