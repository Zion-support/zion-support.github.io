'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance']
    },
    {
      title: 'Cloud Architecture',
      description: 'Design scalable and secure cloud architectures for your business needs',
      features: ['Microservices design', 'Auto-scaling solutions', 'Disaster recovery', 'Performance optimization']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Implement automated deployment pipelines and infrastructure management',
      features: ['Docker & Kubernetes', 'Infrastructure as Code', 'Automated testing', 'Monitoring & logging']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure',
      features: ['Identity & access management', 'Data encryption', 'Compliance auditing', 'Threat detection']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud solutions for your business." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, DevOps, cloud architecture" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center" loading="lazy">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" loading="lazy">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" loading="lazy">Cloud Services</span>
              <br />
              <span className="text-white" loading="lazy">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Transform your business with our advanced cloud solutions. </p>
              Powered by cutting-edge technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center" loading="lazy" aria-label="Action button">Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" loading="lazy" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300" loading="lazy" aria-label="Action button">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Why Choose Our Cloud Services?</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our cloud solutions deliver unmatched performance, security, and scalability.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300" loading="lazy">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
                  <feature.icon className="w-8 h-8 text-white" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>
                <p className="text-gray-300" loading="lazy">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-5" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Our Cloud Services</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Experience the power of our comprehensive cloud solutions for your business.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8" loading="lazy">{services.map((service, index) => (</div>
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300" loading="lazy">
                <h3 className="text-2xl font-bold text-white mb-4" loading="lazy">{service.title}</h3>
                <p className="text-gray-300 mb-6" loading="lazy">{service.description}</p>
                <ul className="space-y-2" loading="lazy">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300" loading="lazy">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" loading="lazy" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Key Benefits</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Discover the advantages of partnering with us for your cloud transformation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" loading="lazy">{benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center" loading="lazy">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
                  <CheckCircle className="w-6 h-6 text-white" loading="lazy" />
                </div>
                <p className="text-white font-medium" loading="lazy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600" loading="lazy">
        <div className="max-w-4xl mx-auto text-center" loading="lazy">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" loading="lazy">Ready to Get Started?</h2>h2>
          <p className="text-xl text-purple-100 mb-8" loading="lazy">Contact our experts to discuss your cloud needs and get a customized solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
              <Phone className="mr-2 h-5 w-5" loading="lazy" />
              Call Us Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
              <Mail className="mr-2 h-5 w-5" loading="lazy" />
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="grid md:grid-cols-3 gap-8 text-center" loading="lazy">
            <div className="flex items-center justify-center gap-3 text-gray-300" loading="lazy">
              <Phone className="w-5 h-5 text-purple-400" loading="lazy" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300" loading="lazy">
              <Mail className="w-5 h-5 text-purple-400" loading="lazy" />
              <span>cloud@ziontech.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300" loading="lazy">
              <MapPin className="w-5 h-5 text-purple-400" loading="lazy" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


