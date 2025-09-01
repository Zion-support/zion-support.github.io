import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Zap, Code, Smartphone, BarChart3, Rocket, ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Chatbot & Virtual Assistants',
        'AI-Powered Automation'
      ],
      color: 'from-purple-600 to-indigo-700',
      price: 'From $15,000',
      timeline: '4-8 weeks'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Build scalable, reliable infrastructure with modern cloud technologies and DevOps practices.',
      features: [
        'AWS/Azure/GCP Migration',
        'Kubernetes Orchestration',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Serverless Architecture'
      ],
      color: 'from-cyan-600 to-blue-700',
      price: 'From $10,000',
      timeline: '3-6 weeks'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security solutions and threat detection.',
      features: [
        'Security Audits & Assessments',
        'Zero Trust Architecture',
        'Threat Detection & Response',
        'Compliance Management',
        'Penetration Testing',
        'Security Training'
      ],
      color: 'from-red-500 to-orange-600',
      price: 'From $12,000',
      timeline: '4-6 weeks'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Create modern, responsive web applications that deliver exceptional user experiences.',
      features: [
        'React/Next.js Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'API Development',
        'Performance Optimization',
        'SEO & Accessibility'
      ],
      color: 'from-green-500 to-emerald-600',
      price: 'From $8,000',
      timeline: '3-5 weeks'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      features: [
        'React Native Development',
        'Native iOS/Android Apps',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Capabilities'
      ],
      color: 'from-pink-500 to-rose-600',
      price: 'From $12,000',
      timeline: '6-10 weeks'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Data Pipeline Development',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Machine Learning Integration',
        'Performance Dashboards'
      ],
      color: 'from-yellow-500 to-orange-500',
      price: 'From $10,000',
      timeline: '4-8 weeks'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack for the digital age.',
      features: [
        'Process Automation',
        'Legacy System Migration',
        'Digital Strategy Consulting',
        'Change Management',
        'Technology Roadmapping',
        'Digital Culture Building'
      ],
      color: 'from-indigo-500 to-purple-600',
      price: 'From $25,000',
      timeline: '8-16 weeks'
    },
    {
      icon: Zap,
      title: 'Micro SaaS Platform',
      description: 'Launch your software-as-a-service business with our comprehensive platform.',
      features: [
        'Multi-tenant Architecture',
        'Subscription Management',
        'Payment Integration',
        'User Management',
        'Analytics Dashboard',
        'API Development'
      ],
      color: 'from-blue-500 to-cyan-600',
      price: 'From $20,000',
      timeline: '6-12 weeks'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Award },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan tailored to your goals.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the solution architecture and creates detailed technical specifications.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using best practices and conduct thorough testing at every stage.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Our Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud, cybersecurity, web development, and digital transformation. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="technology services, AI services, cloud solutions, cybersecurity, web development, digital transformation, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Technology
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to transform your business and drive innovation
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI and machine learning to cloud infrastructure and cybersecurity, we offer end-to-end technology services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12" />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.price}</div>
                      <div className="text-sm opacity-90">{service.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="opacity-90">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss your project and explore how our technology solutions can drive your success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
