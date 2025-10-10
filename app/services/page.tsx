'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Shield, Cloud, Database, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI and machine learning solutions.',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Machine learning pipeline automation',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI strategy consulting'
      ],
      benefits: [
        'Automated decision making',
        'Improved accuracy and efficiency',
        'Reduced operational costs',
        'Enhanced customer experience'
      ],
      price: 'Starting at $5,000',
      duration: '2-6 months'
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      icon: Cloud,
      features: [
        'Cloud migration and optimization',
        'Multi-cloud strategy implementation',
        'Serverless architecture design',
        'Container orchestration',
        'Cloud security and compliance',
        'Cost optimization strategies'
      ],
      benefits: [
        'Improved scalability and flexibility',
        'Reduced infrastructure costs',
        'Enhanced security and compliance',
        'Faster time to market'
      ],
      price: 'Starting at $3,000',
      duration: '1-4 months'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions.',
      icon: Shield,
      features: [
        'Security assessment and auditing',
        'Threat detection and response',
        'Identity and access management',
        'Data encryption and protection',
        'Compliance and regulatory support',
        'Security training and awareness'
      ],
      benefits: [
        'Enhanced data protection',
        'Reduced security risks',
        'Compliance with regulations',
        'Peace of mind for stakeholders'
      ],
      price: 'Starting at $2,500',
      duration: '1-3 months'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualization.',
      icon: Database,
      features: [
        'Data warehouse design and implementation',
        'Real-time analytics dashboards',
        'Business intelligence solutions',
        'Data visualization and reporting',
        'Data quality and governance',
        'Advanced statistical analysis'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved business insights',
        'Enhanced operational efficiency',
        'Competitive advantage'
      ],
      price: 'Starting at $4,000',
      duration: '2-5 months'
    },
    {
      id: 'iot-solutions',
      title: 'IoT Solutions',
      description: 'Connect and optimize your devices with Internet of Things solutions.',
      icon: Zap,
      features: [
        'IoT device integration',
        'Sensor data collection and analysis',
        'Real-time monitoring systems',
        'Predictive maintenance solutions',
        'Edge computing implementation',
        'IoT security and management'
      ],
      benefits: [
        'Improved operational efficiency',
        'Real-time monitoring and control',
        'Predictive maintenance capabilities',
        'Reduced downtime and costs'
      ],
      price: 'Starting at $6,000',
      duration: '3-8 months'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business needs.',
      icon: Brain,
      features: [
        'Custom web applications',
        'Mobile app development',
        'API development and integration',
        'Legacy system modernization',
        'Microservices architecture',
        'Quality assurance and testing'
      ],
      benefits: [
        'Perfect fit for your business',
        'Scalable and maintainable solutions',
        'Competitive advantage',
        'Long-term cost savings'
      ],
      price: 'Starting at $8,000',
      duration: '2-12 months'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'cloud-computing', name: 'Cloud Computing' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'data-analytics', name: 'Data Analytics' },
    { id: 'iot-solutions', name: 'IoT Solutions' },
    { id: 'custom-development', name: 'Custom Development' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, challenges, and goals to understand your requirements.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and detailed project plan tailored to your objectives.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Our expert team builds and implements the solution using cutting-edge technologies.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'We thoroughly test the solution and optimize it for maximum performance and efficiency.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy the solution and provide ongoing support and maintenance services.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our operations with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Their cloud migration service was flawless. We saved 40% on infrastructure costs while improving performance.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureBank Ltd',
      role: 'CISO',
      content: 'The cybersecurity implementation was comprehensive and effective. Our security posture improved dramatically.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and technology services to transform your business. From AI implementation to cloud computing and cybersecurity." />
        <meta name="keywords" content="AI services, cloud computing, cybersecurity, data analytics, IoT solutions, custom development" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Comprehensive technology solutions for modern businesses
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From AI and machine learning to cloud computing and cybersecurity, we provide end-to-end technology solutions that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of modern technology implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{service.price}</span>
                  <span>{service.duration}</span>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Contact Us
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;