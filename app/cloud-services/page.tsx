import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      icon: Cloud,
      color: 'text-blue-400',
      features: [
        'Zero-downtime migration strategies',
        'Automated migration tools',
        'Data integrity verification',
        'Rollback capabilities'
      ],
      pricing: 'Starting at $2,500/month'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure designed for your specific needs.',
      icon: Server,
      color: 'text-green-400',
      features: [
        'Auto-scaling capabilities',
        'Load balancing and redundancy',
        'Multi-region deployment',
        'Disaster recovery solutions'
      ],
      pricing: 'Starting at $1,500/month'
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud environment.',
      icon: Shield,
      color: 'text-red-400',
      features: [
        'Identity and access management',
        'Network security controls',
        'Data encryption and protection',
        'Compliance monitoring'
      ],
      pricing: 'Starting at $999/month'
    },
    {
      title: 'Cloud Optimization',
      description: 'Optimize your cloud resources for better performance and cost efficiency.',
      icon: Zap,
      color: 'text-yellow-400',
      features: [
        'Cost optimization analysis',
        'Performance tuning',
        'Resource right-sizing',
        'Automated scaling policies'
      ],
      pricing: 'Starting at $799/month'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand',
      icon: Zap
    },
    {
      title: 'Reliability',
      description: '99.9% uptime guarantee with redundant systems',
      icon: Shield
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: CheckCircle
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with flexible pricing',
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions. From migration to optimization, 
            we provide everything you need for a successful cloud journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Cloud Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/ai-cloud-infrastructure"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              AI Cloud Solutions
            </Link>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our Cloud Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <service.icon className={`w-12 h-12 ${service.color} flex-shrink-0`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold text-lg">{service.pricing}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center w-full justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Cloud Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Supported Cloud Providers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">AWS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Amazon Web Services</h3>
                <p className="text-gray-300">Full AWS expertise and certification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">Azure</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Microsoft Azure</h3>
                <p className="text-gray-300">Comprehensive Azure solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">GCP</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Google Cloud Platform</h3>
                <p className="text-gray-300">Advanced GCP implementations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our cloud experts help you design and implement the perfect cloud solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Start Your Cloud Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/it-infrastructure"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              IT Infrastructure
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CloudServicesPage;